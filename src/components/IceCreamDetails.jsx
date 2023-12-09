import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const IceCreamDetails = (props) => {
  const { iceCream, onHandleRestockClick, onPurchaseClick} = props;



  const [scoops, setScoops] = useState(iceCream.scoops);

  useEffect(() => {
    setScoops(iceCream.scoops);
  }, [iceCream]);

  if (!iceCream) {
    return <div>No ice cream selected.</div>;
  }

  return (
    <div>
      {iceCream.scoops <= 0 ? (
        <div id="iceCream">
          <h2>Flavor: {iceCream.flavor}</h2>
          <h3>Buckets: Out of Stock </h3>
          <h3>Scoops: {iceCream.scoops}Out of Stock</h3>
          <p>Scoop Price: ${iceCream.price.toFixed(2)}</p>
          <button onClick={onHandleRestockClick}>Restock</button>
         
        </div>
      ) : (
        <div id="iceCream">
          <h2>Flavor: {iceCream.flavor}</h2>
          <h3>Buckets: {iceCream.buckets}</h3>
          <h3>Scoops: {iceCream.scoops} </h3>
          <p>Scoop Price: ${iceCream.price.toFixed(2)}</p>
          <button onClick={onHandleRestockClick}>Restock Bucket</button>
          <button onClick={onPurchaseClick}>Sell A Scoop</button>
       
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
    price: PropTypes.number,
  }).isRequired,
  onHandleRestockClick: PropTypes.func.isRequired,
  onPurchaseClick: PropTypes.func.isRequired,
};

export default IceCreamDetails;