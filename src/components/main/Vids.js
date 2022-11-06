import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Popup from "../common/Popup";

function Vids() {
  const pop = useRef(null);
  const [Vids, setVids] = useState([]);
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    const key = "AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM";
    const playlist = "PLUcaufaEsTHA0MA_IcgsC_AQ86TpBOYOw";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

    axios.get(url).then((json) => {
      setVids(json.data.items);
    });
  }, []);

  return (
    <main id="vids" className="myScroll">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={60}
        navigation={true}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
      >
        {Vids.map((data, index) => {
          return (
            <SwiperSlide>
              <article key={index}>
                <div
                  key={index}
                  className="inner"
                  onClick={() => {
                    pop.current.open();
                    setIndex(index);
                  }}
                >
                  <img
                    src={data.snippet.thumbnails.standard.url}
                    alt={data.snippet.title}
                  />
                </div>
              </article>
            </SwiperSlide>
          );
        })}
        <Popup ref={pop}>
          {Vids.length !== 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
              frameBorder="0"
            ></iframe>
          )}
        </Popup>
      </Swiper>
      <video src={process.env.PUBLIC_URL + '/img/sky.mp4'} loop autoPlay muted></video>
    </main>
  );
}
export default Vids;
