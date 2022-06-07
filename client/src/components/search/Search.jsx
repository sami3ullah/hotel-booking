import "./search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Search() {
  const [destination, setDestination] = useState("");
  // for date range
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // for guests
  const [openGuest, setOpenGuest] = useState(false);
  const [guestOptions, setGuestOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // use navigateHook from react-router-dom
  const navigateHook = useNavigate();
  const handleSearch = () => {
    navigateHook("/hotels", { state: { destination, openDate, date } });
  };

  const handleGuestOption = (name, operation) => {
    setGuestOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? guestOptions[name] + 1 : guestOptions[name] - 1,
      };
    });
  };

  return (
    <div className="header-search">
      <div className="header-search-item">
        <FontAwesomeIcon icon={faBed} className="header-icon" />
        <input
          type="text"
          placeholder="where are you going?"
          className="header-search-input"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="header-search-item">
        <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="header-search-text"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </div>
      <div className="header-search-item">
        <FontAwesomeIcon icon={faPerson} className="header-icon" />
        <span
          onClick={() => setOpenGuest(!openGuest)}
          className="header-search-text"
        >{`${guestOptions.adult} adult . ${guestOptions.children} children . ${guestOptions.room} room`}</span>
        {openGuest && (
          <div className="guest-options">
            <div className="option-item">
              <span className="option-text">Adult</span>
              <div className="option-counter">
                <button
                  disabled={guestOptions.adult <= 1}
                  className="option-counter-button"
                  onClick={() => handleGuestOption("adult", "d")}
                >
                  -
                </button>
                <span className="option-counter-number">
                  {guestOptions.adult}
                </span>
                <button
                  className="option-counter-button"
                  onClick={() => handleGuestOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="option-item">
              <span className="option-text">Children</span>
              <div className="option-counter">
                <button
                  disabled={guestOptions.children <= 0}
                  className="option-counter-button"
                  onClick={() => handleGuestOption("children", "d")}
                >
                  -
                </button>
                <span className="option-counter-number">
                  {guestOptions.children}
                </span>
                <button
                  className="option-counter-button"
                  onClick={() => handleGuestOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="option-item">
              <span className="option-text">Room</span>
              <div className="option-counter">
                <button
                  disabled={guestOptions.room <= 1}
                  className="option-counter-button"
                  onClick={() => handleGuestOption("room", "d")}
                >
                  -
                </button>
                <span className="option-counter-number">
                  {guestOptions.room}
                </span>
                <button
                  className="option-counter-button"
                  onClick={() => handleGuestOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-search-item">
        <button className="search-button header-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
