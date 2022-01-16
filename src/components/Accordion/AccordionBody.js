import React from 'react';
import PropTypes from 'prop-types';
import CardPlayer from "../CardPlayer/CardPlayer";
import '../Content/Content.css'

const AccordionBody = ({teamID, players, isLoading, updatePlayer, myPlayer, removePlayer}) => {

    console.log(myPlayer)

    return (
        <div>
            <div id={"collapse" + teamID} className="accordion-collapse collapse"
                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul className="row list-group playerList">
                        {
                            isLoading ? (<p>Is Loading...</p>) :
                                (
                                    players.map((item,i) => {
                                        return (
                                            <CardPlayer
                                                        player={item}
                                                        key={item.player.id}
                                                        name={item.player.name}
                                                        position={item.statistics[0].games.position}
                                                        img={item.player.photo}
                                                        jogos={item.statistics[0].games.appearences}
                                                        golos={item.statistics[0].goals.total}
                                                        assists={item.statistics[0].goals.assists}
                                                        isMyPlayer={myPlayer[0].playersData[i].myPlayer}
                                                        updatePlayer={updatePlayer}
                                                        removePlayer={removePlayer}>
                                            </CardPlayer>
                                        )
                                    }))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

AccordionBody.propTypes = {

};

export default AccordionBody;
