import React, {Fragment} from 'react'
import './description.scss'
import PropTypes from "prop-types";


const Description = ({bird}) => (
    <div className="discription">
        {Object.keys(bird).length === 0 ? (
            <p className="descriptionTask">Прослушайте плеер и выберите ответ из списка</p>
            ) : (
            <Fragment>
                <div className="wrapperDescription">
                    <div className="descriptionImage">
                        <img className="birdImage" src={bird.image} alt="bird"/>
                    </div>
                    <div className="descriptionInfo">
                        <h2>{bird.name}</h2>
                        <h3>{bird.species}</h3>
                        <audio className="questionPlayer" src={bird.audio} controls></audio>
                    </div>
                </div>
                <div className="description">{bird.description}</div>
            </Fragment>
        )}
    </div>
);
export default Description

Description.propTypes = {
    bird: PropTypes.object,
};

