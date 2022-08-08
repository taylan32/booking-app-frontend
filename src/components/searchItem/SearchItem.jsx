import React from "react";
import "./searchItem.css";
export default function SearchItem() {
  return (
    <div className="search_item">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/153609471.webp?k=32bf0b1f066ad03537437e4c68fb613dde81a8b45c810e31459a5f5a19b7f193&o=&s=1"
        alt="image"
        title="hotel_image"
      />
      <div className="search_item_description">
        <h1 className="search_item_title">Tower Street Apartments</h1>
        <span className="search_item_distance">500m from center</span>
        <span className="search_item_options">Free airport taxi</span>
        <span className="search_item_subtitle">
          Studio Apartment with Airconditioning
        </span>
        <span className="search_item_features">
          Entire stuio · 1 bathroom · 21m<sup>2</sup> 1 full bed
        </span>
        <span className="search_item_cancel_option">Free cancellation</span>
        <span className="search_item_options_subtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="search_item_details">
        <div className="search_item_rating">
          <span>Excellent</span>
          <button className="search_item_rating_button">8.9</button>
        </div>
        <div className="search_item_detail_texts">
          <span className="search_item_price">$123</span>
          <span className="search_item_tax_options">
            Includes taxes and fees
          </span>
          <button className="search_item_check_button">See availability</button>
        </div>
      </div>
    </div>
  );
}
