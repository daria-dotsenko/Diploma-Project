import React from "react";
import CategoryCard from "../components/categories/categoryCard";
import AnalyticsCard from "../components/categories/analyticsCard";
import { useAuth } from "../hooks/useAuth";

const Main = () => {
    const { currentUser } = useAuth();
    return <>
        <div className="container">
            {currentUser ? (
                <div>
                    <div className="row mt-5 mb-5">
                        <CategoryCard category="Income"/>
                        <CategoryCard category="Accounts"/>
                        <CategoryCard category="Costs"/>
                    </div>
                <div className="row">
                    <AnalyticsCard />
                </div>
                </div>
            ) : (
                <div className="row">Please login</div>
                )}
        </div>
    </>
};

export default Main;
