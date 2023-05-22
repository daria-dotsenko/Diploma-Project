import React from "react";
import CharAnalytics from "./chartAnalytics";

const AnalyticsCard = () => {
    return (
        <div className="col">
            <div className="card d-flex flex-column align-items-center">
                <div className="card-body">
                    <div>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Costs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Income
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center flex-grow-1">
                        <h4>example chart</h4>
                        <CharAnalytics />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCard;
