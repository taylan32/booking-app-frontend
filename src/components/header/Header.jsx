import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import React, { useContext, useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
export default function Header(props) {
  const { type } = props;
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const {user} = useContext(AuthContext)
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "hotelList"
            ? "header_container list_mode"
            : "header_container"
        }
      >
        <div className="header_list">
          <div className="header_list_item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "hotelList" && (
          <>
            <h1 className="header_title">
              A lifetime of discount? It's Genius.
            </h1>
            <p className="header_description">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking account
            </p>
            {!user && <button className="header_button">Sign in / Register</button>}

            <div className="header_search">
              <div className="header_search_item">
                <FontAwesomeIcon icon={faBed} className="header_icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header_search_input"
                  onChange={(input) => setDestination(input.target.value)}
                />
              </div>

              <div className="header_search_item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header_icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header_search_text"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header_search_item">
                <FontAwesomeIcon icon={faPerson} className="header_icon" />
                <span
                  className="header_search_text"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room `}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option_item">
                      <span className="option_text">Adult</span>
                      <div className="option_counter">
                        <button
                          disabled={options.adult <= 1}
                          className="option_counter_button"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.adult}
                        </span>
                        <button
                          className="option_counter_button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option_item">
                      <span className="option_text">Children</span>
                      <div className="option_counter">
                        <button
                          disabled={options.children <= 0}
                          className="option_counter_button"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.children}
                        </span>
                        <button
                          className="option_counter_button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option_item">
                      <span className="option_text">Room</span>
                      <div className="option_counter">
                        <button
                          disabled={options.room <= 1}
                          className="option_counter_button"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.room}
                        </span>
                        <button
                          className="option_counter_button"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header_search_item">
                <button className="header_button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
