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
                {currentUser &&
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Main
                            </Link>
                        </li>
                    </ul>
                }
                <div className="d-flex">
                    {currentUser ? <NavProfile /> : <Link className="nav-link" aria-current="page" to="/login">
                        Login
                    </Link>}
                </div>
            </div>
        </nav>
    </>
    //     {/*<div className="m-2">{packageJson.version}</div>*/}
};

export default NavBar;
