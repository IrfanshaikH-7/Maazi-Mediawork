"use client";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";



const  NumberCounters = ({ from, to }: {from: number, to: number}) =>{
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 8 });
    }
  }, [count, inView, to]);

  return(
    <div className="w-full sm:max-w-7xl mx-auto py-16 px-12 gap-16 md:gap-3 flex flex-col md:flex-row ">
      <div className="h-fit  w-full gap-3 py-2 px-2 xl:px-4 text-neutral-500 flex flex-col  md:text-sm xl:text-lg justify-center items-center">
      <div  className="text-5xl md:text-4xl xl:text-5xl text-neutral-700 font-bold">
      <motion.span ref={ref} >{rounded}</motion.span>&#37;
      </div>
      Lorem ipsum dolor sit Lorem, ipsum.
      </div>
      <div className="h-fit w-full gap-3 py-2 px-2 xl:px-4 text-neutral-500 flex flex-col  md:text-sm xl:text-lg justify-center items-center">
      <div  className="text-5xl md:text-4xl xl:text-5xl text-neutral-700 font-bold">
      <motion.span ref={ref} >{rounded}</motion.span>&#37;
      </div>
      Lorem ipsum dolor sit Lorem, ipsum.
      </div>
      <div className="h-fit w-full gap-3 py-2 px-2 xl:px-4 text-neutral-500 flex flex-col  md:text-sm xl:text-lg justify-center items-center">
      <div  className="text-5xl md:text-4xl xl:text-5xl text-neutral-700 font-bold">
      <motion.span ref={ref} >{rounded}</motion.span>&#37;
      </div>
      Lorem ipsum dolor sit Lorem, ipsum.
      </div>
    </div>
  )
}

export default  NumberCounters ;