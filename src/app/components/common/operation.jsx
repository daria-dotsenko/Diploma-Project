import React from "react";
import Button from "./button";
import PropTypes from "prop-types";
import Badge from "./badge";

const Operation = ({ operation, onRemove }) => {
    const {_id, account, amount, categories, comment, created_at, type, userId} = operation;
    const date = new Date(Number(created_at));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;
    return <>
        <div className="card mb-2">
            <div className="p-3 row align-items-start">
                <div className="col-2">
                    <div className="mb-1"><Badge color="secondary" content={formattedDate}/></div>
                </div>
                <div className="col-4">
                    <p className="mb-1">Amount: {amount}</p>
                    <p className="mb-1">Type: </p>
                    <p className="mb-1">Categories: </p>
                </div>
                <div className="col-4">
                    <p className="mb-1">Account: </p>
                    <p className="mb-1">Comment: {comment}</p>
                </div>
                <div className="col d-flex justify-content-evenly">
                    <Button color="link"><i className="bi bi-pencil-fill"></i></Button>
                    <Button calledFunction={() => onRemove(operation._id)} color="link"><i className="bi bi-trash-fill"></i></Button>
                </div>
            </div>
        </div>
    </>
};

Operation.propTypes = {
    operation: PropTypes.object.isRequired
};

export default Operation;