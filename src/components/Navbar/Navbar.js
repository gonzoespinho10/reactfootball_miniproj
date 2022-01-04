import React from 'react';
import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="row">
                    <div id="rules" className="col-md-4">
                        <button id="rulesBtn" className="btn btn-lg btn-outline-light">Rules</button>
                    </div>
                    <div className="col-md-4">
                        <h1 id="titulo" className="display-5">Faz a tua equipa</h1>
                    </div>

                    <div className="col-md-4 check-team">
                        <span style={{display: "flex", alignItems: "center", color: "white"}}>MY TEAM</span>
                        <a href="" type="button" className="btn img-thumbnail float-right">
                            <img alt="soccer" id="myTeam" style={{height: "70px"}}/>
                        </a>
                    </div>
                </div>

            </nav>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;
