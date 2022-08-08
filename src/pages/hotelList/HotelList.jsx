import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotelList.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
export default function HotelList() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="hotelList" />
      <div className="list_container">
        <div className="list_wrapper">
          <div className="list_search">
            <h1 className="list_search_title">Search</h1>
            <div className="list_search_item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list_search_item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="list_item">
              <label>Options</label>
              <div className="list_search_options">
                <div className="list_search_option_item">
                  <span className="list_search_option_text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list_search_option_input" />
                </div>

                <div className="list_search_option_item">
                  <span className="list_search_option_text">
                    Max price <small>per night</small>{" "}
                  </span>
                  <input type="number" className="list_search_option_input" />
                </div>

                <div className="list_search_option_item">
                  <span className="list_search_option_text">Adult</span>
                  <input
                    type="number"
                    className="list_search_option_input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="list_search_option_item">
                  <span className="list_search_option_text">Children</span>
                  <input
                    type="number"
                    className="list_search_option_input"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="list_search_option_item">
                  <span className="list_search_option_text">Room</span>
                  <input
                    type="number"
                    className="list_search_option_input"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list_result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
}
