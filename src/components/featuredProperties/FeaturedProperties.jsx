import React, { useEffect, useState } from 'react';
import "./featuredProperties.css";
import instance from '../../utils/BaseUrl';

const FeaturedProperties = () => {
  const [data, setData, loading] = useState([]);
  const getApi = async () => {
    const data = await instance.get(`/hotels?featured=true&limit=4`)
    setData(data?.data)
  }
  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className="fp">
      {loading ? (
        ""
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from Rp{item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;