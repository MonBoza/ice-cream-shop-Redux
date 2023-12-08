
const NavBar = ({ onShowFavoriteFlavorClick , onHomeClick, onAddFlavorClick}) => {
    return (
      <nav className="navBar">
        <button  onClick={onShowFavoriteFlavorClick}>Click for Top Flavor</button>
        <button onClick={onHomeClick}>Home</button>
        <button onClick={onAddFlavorClick}>Add Inventory</button>
        <hr/>
      </nav>
    );
  };
  
  export default NavBar;