import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import AccountsService from "../../services/accounts.service";
// import AccountTypeService from "../../services/accountType.service";
// import { toast } from "react-toastify";

const AccountsContext = React.createContext();

export const useAccounts = () => {
    return useContext(AccountsContext);
};

export const AccountsProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [accounts, setAccounts] = useState([]);
    // const [accountTypes, setAccountTypes] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            // toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getAccountsList();
        // getAccountTypesList()
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    function getAccount(id) {
        return accounts.find((a) => a._id === id);
    }

    async function getAccountsList() {
        try {
            const { content } = await AccountsService.get();
            const filteredContent = content.filter(account => Object.keys(account).length > 0);

            setAccounts(filteredContent);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    // async function getAccountTypesList() {
    //     try {
    //         const { content } = await AccountTypeService.get();
    //         setAccountTypes(content);
    //         setLoading(false);
    //     } catch (error) {
    //         errorCatcher(error);
    //     }
    // }

    return (
        <AccountsContext.Provider
            value={{ isLoading, accounts, getAccount }}
        >
            {children}
        </AccountsContext.Provider>
    );
};

AccountsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
