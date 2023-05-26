import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
import { useAuth } from "./useAuth";
import { nanoid } from "nanoid";
import operationsService from "../../services/operations.service";
import { toast } from "react-toastify";
import localStorageService from "../../services/localStorage.service";

const OperationsContext = React.createContext();

export const useOperations = () => {
    return useContext(OperationsContext);
};

export const OperationsProvider = ({ children }) => {
    const userId = localStorageService.getUserId()
    const { currentUser } = useAuth();
    const [isLoading, setLoading] = useState(true);
    const [operations, setOperations] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getOperations();
    }, []);
    async function createOperation(data) {
        const operation = {
            ...data,
            _id: nanoid(),
            created_at: Date.now(),
            userId: currentUser._id
        };
        try {
            const { content } = await operationsService.createOperation(operation);
            setOperations(prevState => [...prevState, content]);
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function getOperations() {
        try {
            const { content } = await operationsService.getOperations(userId);
            setOperations(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    async function removeOperation(id) {
        try {
            const { content } = await operationsService.removeOperation(id);
            if (content === null) {
                setOperations((prevState) => prevState.filter((op) => op._id !== id));
            }
        } catch (error) {
            errorCatcher(error);
        }
    }
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    return (
        <OperationsContext.Provider
            value={{ operations, createOperation, removeOperation, isLoading }}
        >
            {children}
        </OperationsContext.Provider>
    );
};

OperationsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
