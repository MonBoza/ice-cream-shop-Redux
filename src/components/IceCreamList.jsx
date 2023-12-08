import PropTypes from "prop-types";

const IceCreamList = (props) => {
    const iceCream = props.iceCream;

    return (
        <div>
            {iceCream.map((iceCream) => (
                <div key={iceCream.id} onClick={() => props.onItemClick(iceCream)}>
                    <img height="200px" src={iceCream.image} alt={iceCream.flavor} />
                    <h2>{iceCream.flavor}</h2>
                </div>
            ))}
        </div>
    );
};

IceCreamList.propTypes = {
    iceCream: PropTypes.array,
    flavor: PropTypes.string,
    onItemClick: PropTypes.func, 
}

export default IceCreamList;