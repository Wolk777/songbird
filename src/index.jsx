import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header/header.jsx'
import Question from './components/question/question.jsx'
import Description from './components/description/description.jsx'
import ResponseList from './components/response/response.jsx'
import ModalEnd from './components/modalEnd/modalEnd.jsx'
import correctSound from './sounds/correct.mp3'
import incorrectSound from './sounds/incorrect.mp3'
import birdsData from './birds'
import './index.scss'

const topicsQuestions = [
    {
        id: 0,
        title: "Разминка"
    },
    {
        id: 1,
        title: "Воробьиниые"
    },
    {
        id: 2,
        title: "Лесные птицы"
    },
    {
        id: 3,
        title: "Певчие птицы"
    },
    {
        id: 4,
        title: "Хищные птицы"
    },
    {
        id: 5,
        title: "Морские птицы"
    },
];

class App extends Component {
    state = {
        currentTopicQuestion: 0,
        score: 0,
        points: 5,
        question: {},
        selectedAnswer: {},
        isCorrectAnswer: false,
        isEnd: false,
    };

    calcQuestion() {
        const topicQuestion = this.props.birdsData[this.state.currentTopicQuestion];
        const randomQuestion = Math.floor(Math.random() * (6));
        const question = topicQuestion[randomQuestion];
        this.setState({
            'question':question
        })
    }

    handleResponse = ({currentTarget}) => {
        const {currentTopicQuestion, isCorrectAnswer} = this.state;
        if (currentTarget.classList.contains('error') || isCorrectAnswer) return;
        const selectedAnswer = this.props.birdsData[currentTopicQuestion].find(item =>
            item.name === currentTarget.id);
        this.checkResponse(currentTarget);
        this.setState({
            'selectedAnswer':  selectedAnswer
        })
    };

    checkResponse = (currentTarget) => {
        if (currentTarget.id === this.state.question.name) {
            this.playSound(correctSound);
            currentTarget.children[0].classList.add("correct");
            this.culcScore();
            this.setState({
                "isCorrectAnswer": true
            });
        } else {
            this.playSound(incorrectSound);
            currentTarget.classList.add("error");
            currentTarget.children[0].classList.add("errorIcon");
            this.setState(({points}) => {
                if (points === 0) return;
                return {
                    'points': points - 1
                }
            })
        }
    };

    checkEndGame = () => {
        const {currentTopicQuestion, isCorrectAnswer} = this.state;
        if (isCorrectAnswer && currentTopicQuestion === 5) {
            this.setState({
                isEnd: true,
            });
            return true;
        }
        return false;
    };

    culcScore = () => {
        const { points } = this.state;
        this.setState(({score}) => (
            {'score': score + points}
        ))
    };

    handleButton = () => {
        if (!this.state.isCorrectAnswer) return;
        if (this.checkEndGame()) return;
        this.setState(({currentTopicQuestion}) => {
            return {'currentTopicQuestion': currentTopicQuestion+1,
                selectedAnswer: {},
                isCorrectAnswer: false,
                points: 5,
            }
        }, () => {this.calcQuestion()})
    };

    playSound = src=> {
        let audio = new Audio();
        audio.src = src;
        audio.autoplay = true;
    };

    tryAgain = () => {
        this.setState({
            currentTopicQuestion: 0,
            score: 0,
            points: 5,
            question: {},
            selectedAnswer: {},
            isCorrectAnswer: false,
            isEnd: false,
        }, () => this.calcQuestion())
    };

    componentDidMount = () => {
        this.calcQuestion();
    };

    render() {
        const {topicsQuestions, birdsData} = this.props;
        const {currentTopicQuestion, question, score, selectedAnswer, isCorrectAnswer, isEnd} = this.state;
        const topicQuestion = birdsData[currentTopicQuestion];

        return(
            <div className="container">
                <Header
                    currentTopicQuestion={currentTopicQuestion}
                    questions={topicsQuestions}
                    score={score}
                />
                {!isEnd && <Question question={question} isCorrectAnswer={isCorrectAnswer}/>}
                {!isEnd && <div className="box">
                    <ResponseList
                        listResponse={topicQuestion}
                        question={question}
                        selectedAnswer={selectedAnswer}
                        onHandleResponse={this.handleResponse}
                    />
                    <Description
                        bird={selectedAnswer}
                    />
                </div>}
                {!isEnd && <div
                    className={!isCorrectAnswer ? 'btnNextLevel' : 'btnNextLevel activeBtn'}
                    onClick={this.handleButton}>
                    Next Level
                </div>}
                {isEnd && <ModalEnd score={score} onTryAgain={this.tryAgain}/>}
            </div>
        )
    }
}
render(
    <App topicsQuestions={topicsQuestions} birdsData={birdsData} />,
    document.getElementById('app')
);
