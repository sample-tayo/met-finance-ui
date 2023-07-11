import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style/testimonial.css";
import { testimonial } from "../App";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h4 style={{ fontSize: "4rem", textAlign: "center" }}>Testimonial</h4>
      <p style={{ fontSize: "3rem", textAlign: "center" }}>
        Here what people are saying about us
      </p>
      <div className="carousal">
        <Slider {...settings}>
          {testimonial.map((eachTestimonial) => (
            <TestimonialCard
              card={eachTestimonial}
              key={eachTestimonial.name}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
