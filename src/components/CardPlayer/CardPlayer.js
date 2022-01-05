import React from 'react';
import './CardPlayer.css';
import PropTypes from 'prop-types';

const CardPlayer = ({name, position, img}) => {

    return (
            <button type="button" className="btn col-md-4 rounded" data-toggle="modal" data-target="#modalJogadores">
                <li className="list-group-item list-group-item-action display-5 fs-4 listJogador" id="369"
                    style={{display: "block", textAlign: "start"}}>
                    <img className="img-thumbnail rounded-circle float-left m3 foto-jogador" alt="perfil"
                    src={img}/>
                        <span className="ms-2">{name}</span>
                        <span className="fs-5 mt-2 posicao">{position}</span>
                    </li>
            </button>
    );
};

CardPlayer.propTypes = {

};

export default CardPlayer;
