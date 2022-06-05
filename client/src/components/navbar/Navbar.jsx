import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">Book Karao</div>
        <div className="nav-items">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
