'use client'
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import mazilogo from '@/public/assets/mazilogo.png'
import { User } from "lucide-react";
// import "./App.css";

class TestCaro extends Component{
  render(){
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      pauseOnHover: true,
      autoplaySpeed: 6000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 2,
              infinite: true,
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow:1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 0.5,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
      <div className="mainContainer">
        <Slider {...settings} className="py-12 w-auto">
         <div className='w-full space-y-8 min-w-72 max-w-72 max-h-96 shadow-lg rounded-xl px-6 md:px-12 py-16 m-8'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-4 text-neutral-600 '> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>
          <div className='w-full space-y-8 min-w-72 max-w-72 max-h-96 shadow-lg rounded-xl px-6 md:px-12 py-16  m-8'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-4 text-neutral-600 '> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>
          <div className='w-full space-y-8 min-w-72 max-w-72 max-h-96 shadow-lg rounded-xl px-6 md:px-12 py-16 m-8'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-4 text-neutral-600 '> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default TestCaro;