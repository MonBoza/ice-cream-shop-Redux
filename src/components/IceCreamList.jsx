import PropTypes from "prop-types";

const IceCreamList = (props) => {
  const { iceCream, onItemClick } = props;

  return (
    <div className="container">
      <div className="row">
        {iceCream.map((iceCream) => (
          <div key={iceCream.id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => onItemClick(iceCream)}
            >
              <img
                className="card-img-top"
                src={iceCream.image}
                alt={iceCream.flavor}
              />
              <div className="card-body">
                <h5 className="card-title">{iceCream.flavor}</h5>
                <p className="card-text">Scoop Price: ${iceCream.price}</p>
                <p>Buckets left: {iceCream.buckets}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

IceCreamList.propTypes = {
  iceCream: PropTypes.array,
  onItemClick: PropTypes.func,
};

export default IceCreamList;