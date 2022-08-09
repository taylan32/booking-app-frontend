import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";
export default function SearchItem(props) {
  const { item } = props;
  return (
    <div className="search_item">
      <img src={item.photos[0]} alt="image" title="hotel_image" />
      <div className="search_item_description">
        <h1 className="search_item_title">{item?.name}</h1>
        <span className="search_item_distance">{item.distance}</span>
        <span className="search_item_options">Free airport taxi</span>
        <span className="search_item_subtitle">
          Studio Apartment with Airconditioning
        </span>
        <span className="search_item_features">{item.description}</span>
        <span className="search_item_cancel_option">Free cancellation</span>
        <span className="search_item_options_subtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="search_item_details">
        {item.rating && (
          <div className="search_item_rating">
            <span>Excellent</span>
            <button className="search_item_rating_button">{item.rating}</button>
          </div>
        )}
        <div className="search_item_detail_texts">
          <span className="search_item_price">{item.cheapestPrice}$</span>
          <span className="search_item_tax_options">
            Includes taxes and fees
          </span>
          <Link to = {`/hotels/${item._id}`}>
            <button className="search_item_check_button">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
