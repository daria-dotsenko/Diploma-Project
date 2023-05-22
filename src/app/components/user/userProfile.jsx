import React, {useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/textField";
import {validatorConfig} from "../../utils/validatorConfig";
import {useAuth} from "../../hooks/useAuth";
import {useHistory} from "react-router-dom";

const UserProfile = () => {
    const history = useHistory();
    const { currentUser, editEmail } = useAuth()
    const [data, setData] = useState(currentUser || { login: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        try {
            await editEmail(data);
            history.push("/");
        } catch (error) {
            setErrors(error);
        }
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Login"
                            name="login"
                            value={data.login}
                            onChange={handleChange}
                            error={errors.login}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        {/*<TextField*/}
                        {/*    label="Password"*/}
                        {/*    type="password"*/}
                        {/*    name="password"*/}
                        {/*    value={data.password}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    error={errors.password}*/}
                        {/*/>*/}
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            type="submit"
                            disabled={!isValid}
                        >
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
