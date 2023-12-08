
const NavBar = ({ onShowFavoriteFlavor }) => {
    return (
      <nav className="navBar">
        <button variant='primary' onClick={onShowFavoriteFlavor}>Click for Top Flavor</button>
        <button>Home</button>
      </nav>
    );
  };
  
  export default NavBar;