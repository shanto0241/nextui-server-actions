"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import img2 from "../../public/assets/2.jpg";
import img3 from "../../public/assets/3.jpg";
import img4 from "../../public/assets/4.jpg";
import img5 from "../../public/assets/5.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <Image alt="BannerImg" src={img2} />
          <p className="legend">Your first 10, 000 photos are your worst</p>
        </div>
        <div>
          <Image alt="BannerImg" src={img3} />
          <p className="legend">
            I photograph to understand what my life means to me.
          </p>
        </div>
        <div>
          <Image alt="BannerImg" src={img4} />
          <p className="legend">
            A good snapshot keeps a moment from running away.
          </p>
        </div>
        <div>
          <Image alt="BannerImg" src={img5} />
          <p className="legend">
            Photography is a way of feeling, touching, loving
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
