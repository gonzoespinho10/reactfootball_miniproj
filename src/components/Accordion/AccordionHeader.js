import React from 'react';
import PropTypes from 'prop-types';

const AccordionHeader = ({teamID, teamLogo, teamName, onClick}) => {

    function getPlayers (event) {
        event.preventDefault();
        onClick(teamID);
    }

    return (
        <div>
            <button className="accordion-button collapsed" onClick={getPlayers}
                    type="button" data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + teamID} aria-expanded="false"
                    aria-controls={"collapse" + teamID}>
                <img className="foto-clube" src={teamLogo}/>
                {teamName}
            </button>
        </div>
    );
};

AccordionHeader.propTypes = {

};

export default AccordionHeader;
