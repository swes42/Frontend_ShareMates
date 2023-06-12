import {
    NavLink
  } from "react-router-dom";

import React from "react"

    export default function Header({isLoggedIn, loginMsg, roles}) {

        return (
        <div>
            <ul className="header">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/login">{loginMsg}</NavLink></li>

                {isLoggedIn && roles==='["user"]' && (
                <React.Fragment>
                <li><NavLink exact activeClassName="active" to="/equipment">Equipment</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/lend">Lend</NavLink></li>
                </React.Fragment>
                )}

                {!isLoggedIn && (
                <React.Fragment>
                    <li><NavLink activeClassName="active" to="/register">Add</NavLink></li>
                </React.Fragment>
                )}


            </ul>
        </div>
        );
    }
