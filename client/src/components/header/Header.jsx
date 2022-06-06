import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faMountainSun,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../search/Search";

function Header({ type }) {
  return (
    <div className="header">
      <div className={type === "list-hotels"? "header-container list-hotels": "header-container"}>
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
        {type !== "list-hotels" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="header-desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Book Karao account
            </p>
            <button className="header-btn">Sign in / Register</button>
            {/* search field*/}
            <Search />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
