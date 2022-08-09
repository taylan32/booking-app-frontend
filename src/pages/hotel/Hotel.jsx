import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleXmark,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const { id } = useParams();
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleReserve = () => {
    if (user) {
      setOpenModal(true)
    } else {
      navigate("/login")
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="hotelList" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotel_container">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="slider_wrapper">
                <img
                  className="slider_image"
                  src={data.data?.photos[slideNumber]}
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotel_wrapper">
            <button className="book_now">Reserve or Book Now!</button>
            <h1 className="hotel_title">{data.data?.name}</h1>
            <div className="hotel_address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.data?.address}</span>
            </div>
            <span className="hotel_distance">
              Excellent location - {data.data?.distance}
            </span>
            <span className="hotel_price_highlight">
              Book a stay over ${data.data?.cheapestPrice} at this property and
              get a free airport taxi
            </span>
            <div className="hotel_images">
              {data.data?.photos.map((photo, i) => (
                <div className="hotel_image_wrapper">
                  <img
                    src={photo}
                    alt="image"
                    title="hotel_image"
                    className="hotel_image"
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>
            <div className="hotel_details">
              <div className="hotel_details_text">
                <h1 className="hotel_title">{data.data?.title}</h1>
                <p className="hotel_description">{data.data?.description}</p>
              </div>
              <div className="hotel_details_price">
                <h1>Perfect for {days} - nights stay!</h1>

                <span>
                  Located in the real heart of {data.data?.city.name}, this
                  property has an excellent location score of 8.9!
                </span>
                <h2>
                  <b>${data.data?.cheapestPrice * days * options.room}</b> (
                  {days} nights)
                </h2>
                <button onClick={handleReserve}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {
        openModal && <Reserve setOpen={setOpenModal} hotelId={id} />
      }
    </div>
  );
}
