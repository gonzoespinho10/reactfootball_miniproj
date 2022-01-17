import React, {useState} from 'react';
import './CardPlayer.css';
import ImgPlayer from "./ImgPlayer";
import {Modal, Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import ModalPlayer from "../Modal/ModalPlayer";

const CardPlayer = ({player, name, position, img, assists, golos, jogos, isMyPlayer, updatePlayer, removePlayer}) => {

    console.log(player);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const adicionarJogador = () => {
        setShow(false);
        updatePlayer(player)
        isMyPlayer = true;
    }

    const removerJogador = () => {
        setShow(false);
        removePlayer(player)
        isMyPlayer = null;
    }

    if(assists === null) {
        assists = 0;
    }

    switch (position) {
        case 'Defender' : position = 'Defesa';
        break;
        case 'Midfielder' : position = 'Médio';
        break;
        case 'Attacker' : position = 'Avançado';
        break;
        case 'Goalkeeper' : position = "Guarda-Redes";
    }

    return (
            <button onClick={handleShow} type="button" className="btn col-md-4 cardPlayer">
                <li className="list-group-item list-group-item-action display-5 fs-4">
                    <ImgPlayer image ={img}></ImgPlayer>

                    {/*Modal Jogador*/}
                        <Modal dialogClassName="border-radius" id="myModal" show={show}
                               onHide={handleClose}
                               backdrop="static"
                               keyboard={false}
                               onClick={e => e.stopPropagation()}>
                            <Modal.Header closeButton>
                                <Modal.Title>

                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img className="img-thumbnail rounded-circle m3 modalPhoto" src={img}/>
                                <h2 className="TextMargin modalText modalPos">{name}</h2>
                                <h3 className="display-5 fs-5 modalPos"><span className="bold">Posição:</span> {position}</h3>
                                <hr></hr>
                                <h3 className="modalText modalPos"><span className="bold">Jogos:</span> {jogos}</h3>
                                <h3 className="modalText modalPos"><span className="bold">Golos:</span> {golos}</h3>
                                <h3 className="modalText modalPos"><span className="bold">Assistências:</span> {assists}</h3>

                            </Modal.Body>
                            <Modal.Footer>
                                { isMyPlayer ?
                                <Button variant="danger" onClick={removerJogador}>
                                    Remover Jogador
                                </Button> :
                                <Button variant="primary" onClick={adicionarJogador}>
                                    Adicionar Jogador
                                </Button>}

                            </Modal.Footer>
                        </Modal>

                    <span className="ms-2 namePlayer">{name}</span>
                        <span className="positionPlayer">{position}</span>
                    </li>

            </button>
    );
};

CardPlayer.propTypes = {

};

export default CardPlayer;
