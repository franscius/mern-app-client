import React, { useEffect, useState } from 'react';
import "./featured.css";
import instance from '../../utils/BaseUrl';
const Featured = () => {
  
  const [data, setData, loading] = useState([]);
  const getApi = async () => {
    const data = await instance.get(`/hotels/countByCity?cities=bekasi,jakarta,bogor`)
    setData(data?.data)
  }
  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className="featured">
      {loading ? (
        ""
      ) : (
        <>
          <div className="featuredItem">
            <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ad/a1/6a/summarecon-mall-bekasi.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bekasi</h1>
              <h2>{data[0]} Hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/cb/jakarta.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jakarta</h1>
              <h2>{data[1]} Hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/89/yogyakarta.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bogor</h1>
              <h2>{data[2]} Hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
