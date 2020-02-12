import React from 'react';
import './response.scss'
import ResponseItem from '../responseItem/responseItem.jsx'
import PropTypes from "prop-types"

const ResponseList = ({listResponse, selectedAnswer, question, onHandleResponse}) => {
    return(
        <div className="responseList">
            {listResponse.map(response =>
                <ResponseItem
                    key={response.name}
                    name={response.name}
                    selectedAnswer={selectedAnswer}
                    question={question}
                    onHandleResponse={onHandleResponse}
                />
            )}
        </div>
    )
};
export default ResponseList

ResponseList.propTypes = {
    listResponse: PropTypes.array,
    selectedAnswer: PropTypes.object,
    question: PropTypes.object,
    onHandleResponse: PropTypes.func,
};