import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
export default function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=62ea54b12b0eef8e4828f675,62ea59f03c0c3c089fe9ec72,62ea59fd3c0c3c089fe9ec77"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading... Please wait"
      ) : (
        <>
        {
          data.data?.map((hotel,i ) => (
            <div className="featured_item" key={i}>
            <img
              className="featured_image"
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="image1"
              title="city_image1"
            />
            <div className="featured_titles">
              <h1>{hotel.city}</h1>
              <h2>{hotel.count} properties</h2>
            </div>
          </div>
          ))
        }

         {/* <div className="featured_item">
            <img
              className="featured_image"
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="image1"
              title="city_image1"
            />
            <div className="featured_titles">
              <h1>Berlin</h1>
              <h2>123 properties</h2>
            </div>
          </div>

          <div className="featured_item">
            <img
              className="featured_image"
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="image2"
              title="city_image2"
            />
            <div className="featured_titles">
              <h1>Austin</h1>
              <h2>123 properties</h2>
            </div>
          </div>

          <div className="featured_item">
            <img
              className="featured_image"
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="image3"
              title="city_image3"
            />
            <div className="featured_titles">
              <h1>Reno</h1>
              <h2>123 properties</h2>
            </div>
          </div>  */}

        </>
      )}
    </div>
  );
}
