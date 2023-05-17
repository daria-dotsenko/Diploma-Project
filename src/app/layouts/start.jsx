import React from "react";
import { useAuth } from "../hooks/useAuth";
import Main from "./main";
import Home from "./home";

const Start = () => {
    const { currentUser } = useAuth();
    return (
        <>
            {currentUser ? <Main /> : <Home />}
        </>
    );
};

export default Start;
