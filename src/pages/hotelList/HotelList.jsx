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
import useFetch from "../../hooks/useFetch";
export default function HotelList() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const {data, loading, error, reFetch} = useFetch(`/hotels?min=${min || 0 }&max=${max || 9999}`)

  const handleSearch = () => {
    reFetch()
  }

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
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
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
                  <input type="number" className="list_search_option_input" 
                    onChange={e => setMin(e.target.value)}
                  />
                </div>

                <div className="list_search_option_item">
                  <span className="list_search_option_text">
                    Max price <small>per night</small>{" "}
                  </span>
                  <input type="number" className="list_search_option_input" 
                    onChange={e => setMax(e.target.value)}
                  />
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
            <button onClick= {handleSearch} >Search</button>
          </div>
          <div className="list_result">
            {loading ? "loading...": <>
              {
                data.data?.map((item, i) => (
                  <SearchItem item = {item} key = {item._id} />
                ))
              }
            </>}
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
}
