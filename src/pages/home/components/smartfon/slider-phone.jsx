import React from "react";
import Slider from "react-slick";
import { Card } from "../shop-card";
import { useGetProducts } from "../../service/query/useGetProducts";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        backgroundColor: "black",
        right: 0,
        top: "-5px",
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
        left: "96%",
        backgroundColor: "black",
        top: "-5px",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

export function SliderPhone() {
  const { data } = useGetProducts("phones");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
}
