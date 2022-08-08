import React, { useState } from "react";
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

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

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
    setSlideNumber(newSlideNumber)
  };

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/284131510.jpg?k=6aa99d47226d84b15a18cd41e47f1bbfe90c2d0fe5ef59c9a32073219c238adf&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188047677.jpg?k=824328a8b468156f3278af50c2415425ef4f3ceb705df841819f2ee8f23bfc14&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188567179.jpg?k=6171ff382981b1b8f66f0e194264e69548ec2803aa015feb38ac4773cfbe9588&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188567213.jpg?k=4f4725a32809ea069a18536dea6ab510b854ee9c2b24917041cdc59d28124a9e&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188567168.jpg?k=fea33f7c79949611d24e051f2ebcac0ba88c891ce6551cf13a4f06cbb3814409&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/188567433.jpg?k=8d878eaeb81c2b21d6816a442b98c95cad99adc4502095342f97065d7b4167d8&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="hotelList" />
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
              <img className="slider_image" src={photos[slideNumber].src} />
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
          <h1 className="hotel_title">Grand Hotel</h1>
          <div className="hotel_address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 Madrid, Spain</span>
          </div>
          <span className="hotel_distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel_price_highlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotel_images">
            {photos.map((photo, i) => (
              <div className="hotel_image_wrapper">
                <img
                  src={photo.src}
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
              <h1 className="hotel_title">Stay in the heart of Madrid</h1>
              <p className="hotel_description">
                Just 500 m from Reina Sofia Museum and 500 m from
                Thyssen-Bornemisza Museum, Exclusive quietness in the heart of
                Madrid with Public Parking, Breakfast, 2 bathrooms features
                accommodations in Madrid. The apartment is 500 m from Museo del
                Prado. This apartment will provide you with a flat-screen TV,
                air conditioning and a living room. The property also has 2
                bathrooms with free toiletries. A bicycle rental service is
                available at Atocha D, while cycling can be enjoyed nearby.
                Puerta del Sol is 801 m from the accommodations, while Plaza
                Mayor is less than 0.6 mi from the property. The nearest airport
                is Adolfo Suarez Madrid-Barajas Airport, 8.1 mi from the
                Exclusive quietness in the heart of Madrid with Public Parking,
                Breakfast, 2 bathrooms This is our guests' favorite part of
                Madrid, according to independent reviews. Solo travelers in
                particular like the location – they rated it 8.9 for a
                one-person stay.
              </p>
            </div>
            <div className="hotel_details_price">
              <h1>Property Highlights</h1>

              <span>
                Located in the real heart of Madrid, this property has an
                excellent location score of 8.9!
              </span>
              <h2>
                <b>$925</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
