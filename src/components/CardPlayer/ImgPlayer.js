import React from 'react';
import PropTypes from 'prop-types';

const ImgPlayer = ({image}) => {
    return (
            <img className="img-thumbnail rounded-circle float-left m3 foto-jogador" alt="perfil"
                 src={image}/>
    );
};

ImgPlayer.propTypes = {

};

export default ImgPlayer;
