import React, { useState } from "react";
import Operation from "../common/operation";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import PropTypes from "prop-types";
import { useOperations } from "../../hooks/useOperations";

const OperationsList = ({ operations }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { removeOperation } = useOperations();
    const pageSize = 3;
    const count = operations.length;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleRemoveOperation = (id) => {
        removeOperation(id);
    }
    if (operations) {
        const operationsCrop = paginate(operations, currentPage, pageSize);
        return <>
            {operationsCrop.map((data) => (
                <Operation key={data._id} operation={data} onRemove={handleRemoveOperation}/>
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