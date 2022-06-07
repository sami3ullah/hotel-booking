import "./list-hotels.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

function List() {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(location.state.openDate);
  const [date, setDate] = useState(location.state.date);

  return (
    <div>
      <Navbar />
      <Header type="list-hotels" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search</h1>
            <div className="list-search-item">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="list-search-item">
              <label>Check-in Date</label>
              <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>
          </div>
          <div className="list-result"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
