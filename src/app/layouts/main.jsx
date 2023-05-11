import React from "react";
import CategoryCard from "../components/categories/categoryCard";
import AnalyticsCard from "../components/categories/analyticsCard";

const Main = () => {
    return <>
        <div className="container">
            <div className="row mt-5 mb-5">
                <CategoryCard category="Income"/>
                <CategoryCard category="Accounts"/>
                <CategoryCard category="Costs"/>
            </div>
            <div className="row">
                <AnalyticsCard />
            </div>
        </div>
    </>
};

export default Main;
