'use client'
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import mazilogo from '@/public/assets/mazilogo.png'
// import "./App.css";

class AutoCaros extends Component{
  render(){
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4900,
      pauseOnHover: true,
      autoplaySpeed: 4900,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 3024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
      <div className="mainContainer py-16">
        <p className="w-fit mx-auto font-semibold text-neutral-700 text-xl mb-12"> Trusted and used by over 3400 companies</p>
        <Slider {...settings}>
          <Image
          src={mazilogo}
          alt="img"
          className="h-24 w-24 hover:scale-105 object-contain "
          />
          <Image
          src={mazilogo}
          alt="img"
          className="h-24 w-24 hover:scale-105 object-contain"
          />
          <Image
          src={mazilogo}
          alt="img"
          className="h-24 w-24 hover:scale-105 object-contain "
          />

<Image
          src={mazilogo}
          alt="img"
          className="h-24 w-24 hover:scale-105 object-contain "
          />
          <Image
          src={mazilogo}
          alt="img"
          className="h-24 w-24 hover:scale-105 object-contain "
          />
          <Image
          src={mazilogo}
          alt="img"
          className="h-24 w-24 hover:scale-105 object-contain "
          />
        </Slider>
      </div>
    );
  }
}

export default AutoCaros;