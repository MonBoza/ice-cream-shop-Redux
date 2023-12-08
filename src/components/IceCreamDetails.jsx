import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const IceCreamList = (props) => {
  const iceCream = props.iceCream;

  if (!iceCream) {
    return <div>No ice cream selected.</div>
  }
  const [buckets, setBuckets] = useState(iceCream.buckets);

  return (
    <div>
      {iceCream.pints <= 0 ? (
        <div id='iceCream'>
          <h2>Flavor: {iceCream.flavor}</h2>
          <h3>Buckets: Out of Stock</h3>
          <h3>Pints: Out of Stock</h3>
        </div>
      ) : (
        <div id='iceCream'>
          <h2>Flavor: {iceCream.flavor}</h2>
          <h3>Buckets: {iceCream.buckets}</h3>
          <h3>Pints: {iceCream.pints}</h3>
        </div>
      )}
    </div>
  );
};

IceCreamList.propTypes = {
  iceCream: PropTypes.shape({
    flavor: PropTypes.string.isRequired,
    buckets: PropTypes.number.isRequired,
    pints: PropTypes.number.isRequired,
  }).isRequired,
};

export default IceCreamList;