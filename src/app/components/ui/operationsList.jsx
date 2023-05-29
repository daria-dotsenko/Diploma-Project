import React, { useState } from "react";
import OperationDisplay from "../operations/operationDisplay";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import PropTypes from "prop-types";
import { useOperations } from "../../hooks/useOperations";

const OperationsList = ({ operations }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { removeOperation, updateOperation } = useOperations();
    const pageSize = 3;
    const count = operations.length;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleRemoveOperation = (id) => {
        removeOperation(id);
    };
    // const handleUpdateOperation = (data) => {
    //     updateOperation(data)
    // };
    if (operations) {
        const operationsCrop = paginate(operations, currentPage, pageSize);
        return <>
            {operationsCrop.map((data) => (
                <OperationDisplay key={data._id} operation={data} onRemove={handleRemoveOperation}/>
            ))}
            <div className="d-flex justify-content-center">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>;
    }
};

OperationsList.propTypes = {
    operations: PropTypes.array.isRequired
};

export default OperationsList;