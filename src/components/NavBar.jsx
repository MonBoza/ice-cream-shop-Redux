
const NavBar = ({ onShowFavoriteFlavorClick , onHomeClick}) => {
    return (
      <nav className="navBar">
        <button variant='primary' onClick={onShowFavoriteFlavorClick}>Click for Top Flavor</button>
        <button onClick={onHomeClick}>Home</button>
        <hr/>
      </nav>
    );
  };
  
  export default NavBar;