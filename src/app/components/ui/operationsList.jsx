import React, { useState } from "react";
import Operation from "../common/operation";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import PropTypes from "prop-types";

const OperationsList = ({ operations }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;
    const count = operations.length;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const operationsCrop = paginate(operations, currentPage, pageSize);
    return <>
        {operationsCrop.map((data) => (
            <Operation key={data._id} operation={data}/>
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
};

OperationsList.propTypes = {
    operations: PropTypes.array.isRequired
};

export default OperationsList;