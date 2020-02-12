import React from 'react'
import './responseItem.scss'
import PropTypes from "prop-types";

const ResponseItem = ({name, selectedAnswer, question, onHandleResponse}) => {
    return (
        <div id={name} className="responseItem" onClick={onHandleResponse}>
            <i className="fas fa-music"></i>
            <span className="responseItemTitle">{name}</span>
        </div>
    )
};
export default ResponseItem

ResponseItem.propTypes = {
    name: PropTypes.string,
    selectedAnswer: PropTypes.object,
    question: PropTypes.object,
    onHandleResponse: PropTypes.func,
};