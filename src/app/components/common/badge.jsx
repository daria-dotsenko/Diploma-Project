import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, content }) => {
    return (
        <div>
            <span className={`badge rounded-pill bg-${color}`}>{content}</span>
        </div>
    );
};

Badge.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string
};

export default Badge;
