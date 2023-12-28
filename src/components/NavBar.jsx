import PropTypes from "prop-types";

const NavBar = ({ onShowFavoriteFlavorClick, onHomeClick, onAddFlavorClick }) => {
  return (
    <nav className="navBar">
      <button onClick={onShowFavoriteFlavorClick}>Click for Top Flavor</button>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onAddFlavorClick}>Add Inventory</button>
      <hr />

    </nav>
  );
};
NavBar.propTypes = {
  onShowFavoriteFlavorClick: PropTypes.func.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onAddFlavorClick: PropTypes.func.isRequired,
}
export default NavBar;