import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faMountainSun,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faMountainSun} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="header-desc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Book Karao account
        </p>
        <button className="header-btn">Sign in / Register</button>

        {/* search field*/}
        <div className="header-search">
          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="header-search-input"
            />
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span className="header-search-text">date to date</span>
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span className="header-search-text">
              2 adults 2 children 1 room
            </span>
          </div>
          <div className="header-search-item">
            <button className="search-button header-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
