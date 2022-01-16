import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {

    return (
            <nav className="navbar navbar-expand-lg">
                <div className="row">
                    <div id="rules" className="col-md-4">
                        <button id="rulesBtn" className="btn btn-lg btn-outline-light">Rules</button>
                    </div>
                    <div className="col-md-4">
                        <h1 id="titulo" className="display-5 text-white titulo">FAZ A TUA EQUIPA</h1>
                    </div>
                     <div className="col-md-4 check-team">
                         <Link to="/MyTeam"><button id="myTeamBtn" className="btn btn-lg btn-outline-light">My Team</button></Link>
                        </div>
                    </div>
                <Outlet></Outlet>
            </nav>

    );
};

Navbar.propTypes = {

};

export default Navbar;
