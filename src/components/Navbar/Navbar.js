import React from 'react';
import PropTypes from 'prop-types';

const Navbar = () => {
    return (

            <nav className="navbar navbar-expand-lg">
                <div className="row">
                    <div id="rules" className="col-md-4">
                        <button id="rulesBtn" className="btn btn-lg btn-outline-light">Rules</button>
                    </div>
                    <div className="col-md-4">
                        <h1 id="titulo" className="display-5 text-white">Faz a tua equipa</h1>
                    </div>
                    <div className="col-md-4 check-team">
                        <div id="rules" className="col-md-4">
                            <button id="rulesBtn" className="btn btn-lg btn-outline-light">My Team</button>
                        </div>
                    </div>
                </div>
            </nav>

    );
};

Navbar.propTypes = {

};

export default Navbar;
