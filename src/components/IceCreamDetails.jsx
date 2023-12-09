import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const IceCreamDetails = (props) => {
  const { iceCream, onHandleRestockClick, onPurchaseClick} = props;

  if (!iceCream) {
    return <div>No ice cream selected.</div>;
  }

  const [scoops, setScoops] = useState(iceCream.scoops);

  useEffect(() => {
    setScoops(iceCream.scoops);
  }, [iceCream]);

  return (
    <div>
      {iceCream.pints <= 0 ? (
        <div id="iceCream">
          <h2>Flavor: {iceCream.flavor}</h2>
          <h3>Buckets: Out of Stock </h3>
          <h3>Scoops: Out of Stock</h3>
          <button onClick={onHandleRestockClick}>Restock</button>
         
        </div>
      ) : (
        <div id="iceCream">
          <h2>Flavor: {iceCream.flavor}</h2>
          <h3>Buckets: {iceCream.buckets}</h3>
          <h3>Scoops: {iceCream.scoops} </h3>
          <button onClick={onHandleRestockClick}>Restock Bucket</button>
          <button onClick={onPurchaseClick}>Buy a Scoop</button>
       
          <hr />
        </div>
      )}
    </div>
  );
};

IceCreamDetails.propTypes = {
  iceCream: PropTypes.shape({
    flavor: PropTypes.string.isRequired,
    buckets: PropTypes.number.isRequired,
    scoops: PropTypes.number.isRequired,
  }).isRequired,
  onHandleRestockClick: PropTypes.func.isRequired,
  onPurchaseClick: PropTypes.func.isRequired,
};

export default IceCreamDetails;