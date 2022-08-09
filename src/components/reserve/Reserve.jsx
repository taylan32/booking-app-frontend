import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
export default function Reserve({ setOpen, hotelId }) {
  const { data, loading, error } = useFetch(
    `/rooms/getroomsbyhotel/${hotelId}`
  );
  return (
    <div className="reserve">
      <div className="reserve_container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="reserve_close"
          onClick={() => setOpen(false)}
        />
        <span>Select you rooms:</span>
        {data.data?.map((item) => (
          <div className="reserve_iteö">
            <div className="reserve_item_info">
              <div className="reserve_title">{item.title}</div>
              <div className="reserve_description">{item.description}</div>
              <div className="reserve_maxpeople">
                <b>Max people</b>
                {item.maxPeople}
              </div>
              <div className="reserve_price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
