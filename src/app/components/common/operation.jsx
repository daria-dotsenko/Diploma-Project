import React from "react";
import Button from "./button";

const Operation = () => {
    return <>
        <div className="card mb-2">
            <div className="p-3 d-flex justify-content-between">
                <div>
                    <p className="mb-1">Amount: </p>
                    <p className="mb-1">Type: </p>
                    <p className="mb-1">Categories: </p>
                </div>
                <div>
                    <p className="mb-1">Account: </p>
                    <p className="mb-1">Date: </p>
                    <p className="mb-1">Comment: </p>
                </div>
                <div className="d-flex justify-content-between">
                    <Button color="link"><i className="bi bi-pencil-fill"></i></Button>
                    <Button color="link"><i className="bi bi-trash-fill"></i></Button>
                </div>
            </div>
        </div>
    </>
};

export default Operation;