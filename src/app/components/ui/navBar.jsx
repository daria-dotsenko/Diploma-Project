import React from "react";
import { Link } from "react-router-dom";
import packageJson from "../../../../package.json";

const NavBar = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
            <div className="m-2">{packageJson.version}</div>
        </div>
    );
};

export default NavBar;
