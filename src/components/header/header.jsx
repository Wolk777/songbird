import React from 'react'
import './header.scss'
import image from '../../images/logo.jpg'
import QuestionItem from '../questionItem/questionItem.jsx'
import PropTypes from 'prop-types'

const Header = ({currentTopicQuestion, questions, score}) => (
    <div className="header">
        <div className="headerWrapper">
            <div className="logo">
                <img className="logoImg" src={image} alt="logo"/>
            </div>
            <div className="score">Score : {score}</div>
        </div>
        <div className="headerQuestionList">
            {questions.map((question, index) => (
                <QuestionItem
                    key={question.id}
                    id={question.id}
                    title={question.title}
                    active={currentTopicQuestion === index}
                />
            ))}
        </div>
    </div>
);
export default Header

Header.propTypes = {
    currentTopicQuestion: PropTypes.number,
    questions: PropTypes.array,
    score: PropTypes.number,
};