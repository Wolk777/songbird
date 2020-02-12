import React from 'react'
import birdIcon from '../../images/bird-icon.png'
import './question.scss'
import PropTypes from "prop-types"

const Question = ({question, isCorrectAnswer}) => {
    const pathImage = isCorrectAnswer ? question.image : birdIcon;
    const title = isCorrectAnswer ? question.name : "鳥兒";
    return (
        <div className="question">
            <div className="questionImage">
                <img className="birdImage" src={pathImage} alt="bird"/>
            </div>
            <div className="questionWrapper">
                <h2 className="questionTitle">{title}</h2>
                <audio className="questionPlayer" src={question.audio} controls></audio>
            </div>
        </div>
    )
};
export default Question

Question.propTypes = {
    question: PropTypes.object,
    isCorrectAnswer: PropTypes.bool,
};