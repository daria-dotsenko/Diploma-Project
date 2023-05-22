import React from "react";
import PropTypes from "prop-types";
import Button from "../common/button";
import { useHistory } from "react-router-dom";

const CategoryCard = ({category}) => {
    const history = useHistory();
    const numberOfLines = 3;
    const renderLinesLeft = () => {
        const lines = [];
        for (let i = 0; i < numberOfLines; i++) {
            lines.push(
                <div className="col text-start" key={i}>
                    <p>{i + 1} line</p>
                </div>
            );
        }
        return lines;
    };
    const renderLinesRight = () => {
        const lines = [];
        for (let i = 0; i < numberOfLines; i++) {
            lines.push(
                <div className="col text-end" key={i + 3}>
                    <p>{i + 4} line</p>
                </div>
            );
        }
        return lines;
    };
    const createNewOperation = () => {
        history.push("/operation");
    }

    return <>
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col text-start">
                            <h5 className="card-title mb-4">{category}</h5>
                        </div>
                        <div className="col text-end">
                            <Button calledFunction={createNewOperation} type="square" color="primary"><i className="bi bi-plus-lg"></i></Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-start">
                            {renderLinesLeft()}
                        </div>
                        <div className="col text-end">
                            {renderLinesRight()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

CategoryCard.propTypes = {
    category: PropTypes.string.isRequired
}

export default CategoryCard;