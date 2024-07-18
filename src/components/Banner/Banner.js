import React, { useState } from "react";
import Slider from "react-slick";
import bannerImgOn from "../../assets/images/banner/bannerImgOne.jpg";
import bannerImgtw from "../../assets/images/banner/bannerImgThree.jpg";
import bannerImgth from "../../assets/images/banner/bannerImgTwo.jpg";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#808000",
                fontSize: "20px",
                fontWeight: "900",
                borderRight: "4px #808000 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "4px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "4px #808000 solid",
                      cursor: "pointer",
                      fontSize: "20px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "4px white solid",
                      cursor: "pointer",
                      fontSize: "20px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <div>
          <Image imgSrc={bannerImgOn} />
        </div>
        <div>
          <Image imgSrc={bannerImgth} />
        </div>
        <div>
          <Image imgSrc={bannerImgtw} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
