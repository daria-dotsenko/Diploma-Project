import React from "react";
import PropTypes from "prop-types";

const CategoryCard = ({category}) => {
  return <>
  <div className="col-md-4">
    <div className="col">
      <div className="card">
          <div className="card-body">
            <h5 className="card-title">{category}</h5>
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