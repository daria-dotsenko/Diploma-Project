import React from "react";
import CategoryCard from "../components/categories/categoryCard";
import AnalyticsCard from "../components/categories/analyticsCard";
import {useAuth} from "../hooks/useAuth";
import {Link} from "react-router-dom";

const Main = () => {
    const {currentUser} = useAuth();
    return <>
        <div className="container">
            {currentUser ? (
                <div>
                    {/*<div className="row mt-5 mb-5">*/}
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                        {/*todo Change the names to ids*/}
                        <CategoryCard category="income"/>
                        <CategoryCard category="accounts"/>
                        <CategoryCard category="costs"/>
                    </div>
                    <div className="row">
                        <AnalyticsCard/>
                    </div>
                </div>
            ) : (
                <div className="row">Please login</div>
            )}
        </div>
    </>
};

export default Main;
