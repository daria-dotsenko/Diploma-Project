import React from "react";
import {Link} from "react-router-dom";
// import packageJson from "../../../../package.json";
import {useAuth} from "../../hooks/useAuth";
import NavProfile from "./navProfile";

const NavBar = () => {
    const {currentUser} = useAuth();
    console.log('currentUser', currentUser);
    return <>
        <nav className="navbar bg-light mb-3">
            <div className="container-fluid">
                <ul className="nav">
                    {currentUser ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    Main
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/history">
                                    History
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <Link className="nav-link" aria-current="page" to="/">
                                Main
                            </Link>
                            <Link className="nav-link" aria-current="page" to="/login">
                                Login
                            </Link>
                        </>
                    )}
                </ul>
                {currentUser && <div className="d-flex">
                    <NavProfile/>
                </div>}
            </div>
        </nav>
    </>
    //     {/*<div className="m-2">{packageJson.version}</div>*/}
};

export default NavBar;
