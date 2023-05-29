import React, { useState } from "react";
// import {validator} from "../../utils/validator";
// import {validatorConfig} from "../../utils/validatorConfig";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import { useCategories } from "../../hooks/useCategories";
import { useTypes } from "../../hooks/useTypes";
import { useAccounts } from "../../hooks/useAccounts";
import { useHistory, useParams } from "react-router-dom";

const OperationForm = ({operationData, onSubmit, buttonName}) => {
    const history = useHistory();
    const { type } = useParams();
    const [data, setData] = useState(operationData);
    // const [errors, setErrors] = useState({});

    const {categories} = useCategories();
    const categoriesList = categories.map(category => ({
        label: category.name.charAt(0).toUpperCase() + category.name.slice(1),
        value: category._id
    }));

    const {types} = useTypes();
    const typesList = types.map(type => ({
        label: type.name.charAt(0).toUpperCase() + type.name.slice(1),
        value: type._id
    }));

    const {accounts} = useAccounts();
    const accountsList = accounts.map(account => ({
        label: account.name,
        value: account._id
    }));

    const handleChange = (target) => {
        // console.log(target)
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
        history.goBack();
    };
    // useEffect(() => {
    //   validate();
    // }, [data]);
    // const validate = () => {
    //   const errors = validator(data, validatorConfig);
    //   setErrors(errors);
    //   return Object.keys(errors).length === 0;
    // };
    // const isValid = Object.keys(errors).length === 0;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Amount"
                            name="amount"
                            type="number"
                            value={data.amount}
                            onChange={handleChange}
                            // error={errors.}
                        />
                        <SelectField
                            label="Type"
                            defaultOption={type ? type : "Choose..."}
                            options={typesList}
                            name="type"
                            onChange={handleChange}
                            value={data.type}
                            // error={errors.}
                        />
                        <SelectField
                            label="Category"
                            defaultOption="Choose..."
                            options={categoriesList}
                            name="category"
                            onChange={handleChange}
                            value={data.category}
                            // error={errors.}
                        />
                        <SelectField
                            label="Account"
                            defaultOption="Choose..."
                            options={accountsList}
                            name="account"
                            onChange={handleChange}
                            value={data.account}
                            // error={errors.}
                        />
                        <TextField
                            label="Comment"
                            name="comment"
                            type="textarea"
                            value={data.comment}
                            onChange={handleChange}
                            // error={errors.}
                        />
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            type="submit"
                            // disabled={!isValid}
                        >
                            {buttonName}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OperationForm;