import React from "react";
import PropTypes from "prop-types";
import { store } from "../redux/store.js";
console.log(store.getState());

const IceCreamList = (props) => {
  const { iceCream, onItemClick } = props;

  return (
    <div className="container">
      <div className="row">
        {iceCream.map((iceCreamItem) => (
          <div key={iceCreamItem.id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => onItemClick(iceCreamItem)}
            >
              <img
                className="card-img-top"
                src={iceCreamItem.image}
                alt={iceCreamItem.flavor}
              />
              <div className="card-body">
                <h5 className="card-title">{iceCreamItem.flavor}</h5>
                <p className="card-text">Scoop Price: ${iceCreamItem.price}</p>
                <p>Buckets left: {iceCreamItem.buckets}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

IceCreamList.propTypes = {
  iceCream: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default IceCreamList;