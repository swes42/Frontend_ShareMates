import {
    NavLink
  } from "react-router-dom";

import React from "react"

    export default function Header({isLoggedIn, loginMsg, roles}) {
        //console.log("isLoggedIn: " + isLoggedIn);
        // If isLoggedIn is true the element after && is rendered

        return (
        <div>
            <ul className="header">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/login">{loginMsg}</NavLink></li>

                {!isLoggedIn && (
                <React.Fragment>
                    <li><NavLink activeClassName="active" to="/register">Add</NavLink></li>
                </React.Fragment>
                )}
            </ul>
        </div>
        );
    }
