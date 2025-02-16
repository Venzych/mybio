import React from "react";
import { Carousel } from "antd";

const images = [
  "/pictures/1th.jpg",
  "/pictures/2th.jpg",
  "/pictures/3th.jpg",
  "/pictures/4th.jpg",
];

const styles = "w-full h-auto max-h-[60vh] object-cover";

const Main: React.FC = () => (
  <Carousel
    autoplay={{ dotDuration: true }}
    autoplaySpeed={5000}
    arrows
    infinite={true}
  >
    {images.map((src, index) => (
      <div key={index}>
        <img src={src} alt={`Image ${index + 1}`} className={styles} />
      </div>
    ))}
  </Carousel>
);

export default Main;
