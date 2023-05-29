import React, { useState, useEffect } from "react";
import { useOperations } from "../../hooks/useOperations";
import OperationForm from "./operationForm";

const EditOperation = ({ operationId }) => {
    const { getOperationData, updateOperation } = useOperations();
    const [currentOperation, setCurrentOperation] = useState(null);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        const getCurrentOperation = async () => {
            const data = await getOperationData(operationId);
            if (isMounted) {
                setCurrentOperation(data);
            }
        };
        if (operationId) {
            getCurrentOperation();
        }

        return () => {
            setIsMounted(false);
        };
    }, [operationId, getOperationData, isMounted]);

    const handleSubmit = async (data) => {
        try {
            await updateOperation(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (currentOperation === null) {
        return <div>Loading...</div>;
    }

    return (
        <OperationForm
            operationData={currentOperation}
            onSubmit={handleSubmit}
            buttonName="Edit"
        />
    );
};

export default EditOperation;
