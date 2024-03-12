import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "20px",
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        backgroundColor: "red",
        display: "none",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

export function SliderCategory({ arr }) {
  let sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {arr?.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/products/${item.datakey}`);
              }}
              key={item.id}
              className="border p-3"
            >
              <img className="w-[50%] mx-auto" src={item.img} alt="img" />
              <p className="text-center">{item.title}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
