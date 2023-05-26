import React from "react";
import OperationsList from "../components/ui/operationsList";
import Button from "../components/common/button";
import {useHistory} from "react-router-dom";
// import { operations } from "../fakeApi";
import { useOperations } from "../hooks/useOperations";

const History = () => {
    const history = useHistory();
    const createNewOperation = () => {
        history.push(`/operation`);
    }
    const {operations, createOperation, removeOperation, isLoading} = useOperations()
    return <>
        <div className="container">
            <div className="d-flex justify-content-between mb-4">
                <h5>Operations history</h5>
                <div className="d-flex justify-content-between">
                    <Button buttonStyle="me-1" type="square" color="primary">Filters <i className="bi bi-funnel"></i></Button>
                    <Button buttonStyle="ms-1" calledFunction={createNewOperation} type="square" color="primary">Add an operation <i
                        className="bi bi-plus"></i></Button>
                </div>
            </div>
            <OperationsList operations={operations}/>
        </div>
    </>;
};

export default History;