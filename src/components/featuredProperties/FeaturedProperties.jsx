import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

export default function FeaturedProperties() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const images = [
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/232571262.jpg?k=737acdd5743c26f478981493a5bd34f97276dbceb2c886263d314a5fe77c292e&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/133059806.jpg?k=9db99d07b29e5f6832bc2647d250e5e544608b811efa37f7d572234458cd453b&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/44146554.jpg?k=c418ab13d5c0ad2402cb939d157a20953f233ffbba42753b0f00c4195626a1c1&o=&hp=1",
  ]
  return (
    <div className="featured_property">
      {loading ? (
        "Loading... Please wait"
      ) : (
        <>
          {data.data?.map((featured, i) => (
            <div className="featured_property_item" key= {i}>
              <img
                className="featured_property_image"
                // src={featured.photos[0]}
                src={images[i]}
                alt="image1"
                title="image1"
              />
              <span className="featured_property_name">{featured.name}</span>
              <span className="featured_property_city">
                {featured.city?.name}
              </span>
              <span className="featured_property_price">
                Starting from ${featured.cheapestPrice}
              </span>
              {featured.rating && <div className="featured_property_rating">
                <button>{featured.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
      {/* <div className="featured_property_item">
        <img
          className="featured_property_image"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt="image1"
          title="image1"
        />
        <span className="featured_property_name">
          Apart hotel Stare Miastro
        </span>
        <span className="featured_property_city">Madrid</span>
        <span className="featured_property_price">Starting from $120</span>
        <div className="featured_property_rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="featured_property_item">
        <img
          className="featured_property_image"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt="image2"
          title="image2"
        />
        <span className="featured_property_name">
          Apart hotel Stare Miastro
        </span>
        <span className="featured_property_city">Madrid</span>
        <span className="featured_property_price">Starting from $120</span>
        <div className="featured_property_rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="featured_property_item">
        <img
          className="featured_property_image"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt="image3"
          title="image3"
        />
        <span className="featured_property_name">
          Apart hotel Stare Miastro
        </span>
        <span className="featured_property_city">Madrid</span>
        <span className="featured_property_price">Starting from $120</span>
        <div className="featured_property_rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="featured_property_item">
        <img
          className="featured_property_image"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt="image4"
          title="image4"
        />
        <span className="featured_property_name">
          Apart hotel Stare Miastro
        </span>
        <span className="featured_property_city">Madrid</span>
        <span className="featured_property_price">Starting from $120</span>
        <div className="featured_property_rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
    </div>
  );
}
