import React from 'react'
import './questionItem.scss'
import PropTypes from "prop-types"


const QuestionItem = ({id, title, active}) =>
    <div id={id} className={active ? "headerQuestionItem activeTopic" : "headerQuestionItem"}>{title}</div>
export default QuestionItem

QuestionItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    active: PropTypes.bool,
};