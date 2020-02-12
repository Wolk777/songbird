import React from 'react'
import './modalEnd.scss'
import PropTypes from 'prop-types'

const ModalEnd = ({score, onTryAgain}) => {
  return(
      <div className="modal">
          <h3 className="modalTitle">Поздравляем!</h3>
          <p className="modalInfo">"Вы прошли викторину и набрали {score} из 30 возможных баллов"</p>
          {score === 30 && <p>Викторина пройдена! Спасибо, что выбрали Нас!</p>}
          {score !== 30 && <button className="btnAgain" onClick={onTryAgain}>Пройти викторину ещё раз</button>}
      </div>
  )
};
export default ModalEnd

ModalEnd.propTypes = {
    onTryAgain: PropTypes.func,
    score: PropTypes.number,
};