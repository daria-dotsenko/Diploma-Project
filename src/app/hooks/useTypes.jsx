import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import TypesService from "../../services/types.service";
// import { toast } from "react-toastify";

const TypesContext = React.createContext();

export const useTypes = () => {
    return useContext(TypesContext);
};

export const TypesProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [types, setTypes] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            // toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getTypesList();
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    function getType(id) {
        return types.find((t) => t._id === id);
    }

    async function getTypesList() {
        try {
            const { content } = await TypesService.get();
            setTypes(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <TypesContext.Provider
            value={{ isLoading, types, getType }}
        >
            {children}
        </TypesContext.Provider>
    );
};

TypesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
