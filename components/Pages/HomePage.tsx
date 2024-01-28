'use client'
import React, { useRef } from "react";
import hero1 from "@/public/assets/hero-1-img.png";
import img1 from "@/public/assets/img-1.png";
import img2 from "@/public/assets/img-2.png";
import img3 from "@/public/assets/img-3.png";
import img4 from "@/public/assets/img-4.png";
import img5 from "@/public/assets/img-5.png";
import img6 from "@/public/assets/img-6.png";
import img7 from "@/public/assets/img-7.png";
import img8 from "@/public/assets/img-8.png";
import img9 from "@/public/assets/img-9.png";
import img10 from "@/public/assets/img-10.png";
import { motion } from "framer-motion";
import {
  PresentationChartBarOutline,
  LightBulbOutline,
  ChartBarOutline,
  DesktopComputerOutline,
} from "heroicons-react";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import NumberCounters from "../utility/NumberCounter";
// import Carousel from "./Carousel";
// import NumberCounters from "./NumberCounters";
// import Footer from "./Footer";
const HomePage = () => {
  const featureRef = useRef(null);
  return (
    <>
      <main
        className={`md:h-screen lg:h-[130vh] flex items-center w-full bg-[#1985A1] p-2 lg:p-4 overflow-x-hidden rounded-b-3xl mt-16 md:mt-0`}
        >
        <div className="h-full lg:h-5/6 flex flex-col md:flex-row justify-center items-center w-fit mx-auto mt-12 md:mt-0 overflow-hidden">
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="max-w-sm sm:max-w-lg md:max-w-2xl flex flex-col  gap-6 sm:gap-10  lg:px-2"
            >
            <p className=" px-4 sm:px-0 text-4xl text-center md:text-start  sm:text-5xl lg:text-7xl text-white font-semibold">
              Content is the key to building an audience
            </p>
            <p className=" text-center md:text-start text-lg lg:text-2xl text-white">
              Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
              volute ligula and aliquet tortor{" "}
            </p>
            <div className="w-full flex flex-col justify-center items-center sm:flex md:items-start md::justify-start  ">
              <button className="py-2.5 px-8  bg-pink-600 w-fit rounded-md text-white text-xl font-semibold ">
                Get started for free
              </button>
              <p className="mt-4 text-lg lg:text-xl text-white font-medium">
                no credit card needed, Free 14 days Trial
              </p>
            </div>
          </motion.div>
          <motion.div className="relative h-fit w-fit "
          variants={fadeIn("left", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={hero1}
            alt="hero"
            className="h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
            />
          </motion.div>
          
        </div>
      </main>

      {/* <----STARTING SECTION-----> */}
      <div
        ref={featureRef}
        id="feature"
        className="h-full w-full py-28 px-20 xl:px-28"
        >
        <div className="h-fit flex flex-col max-w-4xl gap-4 mx-auto p-2">
          <p className="text-6xl text-neutral-700 font-bold  text-center">
            Build a customer-centric marketing strategy
          </p>
          <p className="text-2xl text-neutral-500 font-semibold text-center">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </div>
        <motion.div
        variants={fadeIn('up', 0.7)}
        initial='inactive'
        whileInView={'active'}
        viewport={{once: true}}
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 md:max-w-3xl lg:max-w-7xl mx-auto  pt-16">
          <div className="flex flex-col p-4 gap-2 h-full w-full items-center justify-center">
            <PresentationChartBarOutline className="h-16  lg:h-16 xl:h-20 text-pink-600 w-20" />
            <p className="text-xl xl:text-2xl text-center font-semibold mt-2 text-neutral-900">
              Market Research
            </p>
            <p className="text-lg xl:text-xl text-neutral-600 text-center">
              Luctus augue egestas undo ultrice and quisque lacus
            </p>
          </div>
          <div className="flex flex-col p-4 gap-2 h-full w-full items-center justify-center">
            <LightBulbOutline className="h-16  lg:h-16 xl:h-20 text-pink-600 w-20" />
            <p className="text-xl xl:text-2xl text-center font-semibold mt-2 text-neutral-900">
              User experience
            </p>
            <p className="text-lg xl:text-xl text-neutral-600 text-center">
              Luctus augue egestas undo ultrice and quisque lacus
            </p>
          </div>
          <div className="flex flex-col p-4 gap-2 h-full w-full items-center justify-center">
            <ChartBarOutline className="h-16  lg:h-16 xl:h-20 text-pink-600 w-20" />
            <p className="text-xl xl:text-2xl text-center font-semibold mt-2 text-neutral-900">
              Digital Marketing
            </p>
            <p className="text-lg xl:text-xl text-neutral-600 text-center">
              Luctus augue egestas undo ultrice and quisque lacus
            </p>
          </div>
          <div className="flex flex-col p-4 gap-2 h-full w-full items-center justify-center">
            <DesktopComputerOutline className="h-16  lg:h-16 xl:h-20 text-pink-600 w-20" />
            <p className="text-xl xl:text-2xl text-center font-semibold mt-2 text-neutral-900">
              SEO Services
            </p>
            <p className="text-lg xl:text-xl text-neutral-600 text-center">
              Luctus augue egestas undo ultrice and quisque lacus
            </p>
          </div>
        </motion.div>
      </div>

      <section className="h-full w-full">
        {/* <----FIRST SECTION-----> */}
        <div className="h-full w-full flex flex-col md:flex-row bg-blue-100 mx-auto py-12 px-4 sm:px-24 md:px-12 lg:px-20 xl:px-28">
 
            <motion.div className="relative h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img1}
            alt="hero"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-6 md:gap-4 xl:gap-8 justify-center"
            >
            <h4 className="text-neutral-600 uppercase text-lg md:text-xl">
              Enhance engagement
            </h4>
            <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-neutral-800 font-bold">
              Engage you most valuable visitors
            </h2>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h3 className="text-3xl md:text-2xl xl:text-3xl font-semibold text-neutral-800 ">
              Digits that define growth
            </h3>
            <ul className="list-disc pl-4 text-base md:text-sm xl:text-lg text-neutral-600 space-y-4">
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue cursus dolor{" "}
              </li>
              <li>
                Purus suscipit cursus vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue magna placerat{" "}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* <----SECOND SECTION-----> */}
        <div className="h-full w-full flex flex-col md:flex-row mx-auto py-12 px-4 sm:px-24 md:px-12 lg:px-20 xl:px-28">
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-6 md:gap-2 lg:gap-6 justify-center"
            >
            <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-800 font-semibold">
              Solutions that grows with you
            </h2>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h3 className="text-3xl md:text-2xl xl:text-3xl font-semibold text-neutral-800 ">
              Connect your data sources
            </h3>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              sapien sodales quaerat ipsum undo congue laoreet turpis neque
              auctor turpis vitae dolor luctus placerat magna and ligula cursus
              purus an ipsum vitae suscipit purus
            </p>
            <ul className="list-disc pl-4 text-base md:text-sm xl:text-lg text-neutral-600 space-y-2 lg:space-y-4">
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue cursus dolor{" "}
              </li>
              <li>
                Purus suscipit cursus vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue magna placerat{" "}
              </li>
            </ul>
          </motion.div>
         
            <motion.div className="relative h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img2}
            alt="hero"
            />
          </motion.div>
        </div>

        {/* <----THIRD SECTION-----> */}
        <div className="h-full w-full mx-auto py-12 px-4 sm:px-24 md:px-12 lg:px-20 xl:px-28">
          <div className="max-w-4xl text-center mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl text-neutral-800 font-bold ">
              Reach your audience through social media marketing
            </h1>
            <p className="text-xl md:text-3xl text-neutral-600 ">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 px-4 sm:p-0 gap-8 mt-24 lg:p-6">
            <div className="h-full w-full bg-neutral-100 rounded-3xl flex flex-col items-center justify-center aspect-square px-8 lg:px-14">
              <h3 className="text-xl lg:text-2xl xl:text-3xl text-center text-neutral-800 font-bold">
                Marketing Integrations
              </h3>
              <p className="text-sm lg:text-base xl:text-xl text-neutral-600 text-center mt-3 lg:mt-6">
                Aliquam a augue suscipit luctus diam neque purus ipsum neque and
                dolor primis libero
              </p>
              <motion.div className="relative px-6 h-fit w-full  bg-contain mt-6 lg:mt-10"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img3}
            alt="hero"
            />
          </motion.div>
            </div>
            <div className="h-full w-full bg-neutral-100 rounded-3xl flex flex-col items-center justify-center aspect-square px-14">
            <motion.div className="relative px-6 h-fit w-full  bg-contain"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img4}
            alt="hero"
            />
          </motion.div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl text-center text-neutral-800 mt-6 lg:mt-10 font-bold">
                Enhance Engagement
              </h3>
              <p className="text-sm lg:text-base xl:text-xl text-neutral-600 text-center mt-3 lg:mt-6">
                Aliquam a augue suscipit luctus diam neque purus ipsum neque and
                dolor primis libero
              </p>
            </div>
          </div>
        </div>

        <NumberCounters from={0} to={100} />

        {/* <----FOURTH SECTION-----> */}
        <div className="h-full w-full flex flex-col md:flex-row mx-auto py-12 px-4 sm:px-24 md:px-12 lg:px-20 xl:px-28">
        <motion.div className="relative h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img5}
            alt="hero"
            className=""
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-6 md:gap-2 lg:gap-6 justify-center"
            >
            <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-800 font-semibold">
              The smarter way to work
            </h2>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h3 className="text-3xl md:text-2xl xl:text-3xl font-semibold text-neutral-800 ">
              Full access to all features
            </h3>

            <ul className="list-disc pl-4 text-base md:text-sm xl:text-lg text-neutral-600 space-y-2 lg:space-y-4">
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue cursus dolor{" "}
              </li>
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus purus congue and
                ipsum purus sapien a blandit
              </li>
            </ul>
            <button className="self-start py-2 px-7 font-semibold border-2 border-neutral-800 text-xl rounded-lg flex items-center justify-center hover:text-white  hover:border-pink-600 hover:bg-pink-600 transition-colors duration-500 cursor-pointer">
              What&apos;s possible
            </button>
          </motion.div>
        </div>

        {/* <----FIFTH SECTION-----> */}
        <div className="h-full w-full flex flex-col justify-between md:flex-row mx-auto py-12 gap-4 px-4 sm:px-24  md:px-4 lg:px-20 xl:px-28">
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full md:max-w-[280px] lg:max-w-md xl:max-w-lg p-6  gap-6 md:gap-2 lg:gap-6 justify-center"
            >
            <h4 className="text-xl uppercase font-semibold text-neutral-600">
              one-stop solution
            </h4>
            <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-800 font-semibold">
              Smart solutions,real-time results
            </h2>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>

            <ul className="list-disc pl-4 text-base md:text-sm xl:text-lg text-neutral-600 space-y-2 lg:space-y-4">
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor
              </li>
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus
              </li>
            </ul>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 lg:gap-10 px-4  md:max-w-md lg:max-w-xl md:aspect-square  xl:max-w-2xl w-full justify-center items-center ">
            <div className="h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-xl md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className=" text-sm md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>

            <div className="h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-xl md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className="text-sm md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>

            <div className="h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-xl md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className=" text-sm md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>

            <div className="h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-xl md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className="text-sm md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>
          </div>
        </div>

        {/* <----SIXTH SECTION-----> */}
        <div className="h-full w-full flex flex-col md:flex-row mx-auto py-12 px-4 sm:px-24 md:px-12 lg:px-20 xl:px-28">
        <motion.div className="relative h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img6}
            alt="hero"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-6 md:gap-4 xl:gap-8 justify-center"
            >
            <h4 className="text-neutral-600 uppercase text-sm md:text-lg">
              Easy Integration
            </h4>
            <h2 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-800 font-bold">
            Plug your essential tools in few clicks
            </h2>
           
            <ul className="list-disc pl-4 text-base md:text-sm xl:text-lg text-neutral-600 space-y-4">
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue cursus dolor{" "}
              </li>
              <li>
                Purus suscipit cursus vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue magna placerat{" "}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* <----SEVENTH SECTION-----> */}
        <div className="h-full w-full mx-auto py-16 px-4 sm:px-20 md:px-12 lg:px-20 xl:px-28 bg-neutral-200">
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <h1 className=" text-4xl md:text-6xl text-neutral-800 font-bold ">
            Track the progress towards objectives with key results
            </h1>
            <p className="text-xl md:text-3xl text-neutral-600 ">
              Ligula risus auctor tempus magna feugiat.
            </p>
          </div>
          <motion.div className="relative px-6 h-fit w-full  bg-contain mt-10 lg:mt-16 -mb-24"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img7}
            alt="hero"
            
            />
          </motion.div>
            </div>

        {/* <----EIGHT SECTION-----> */}
        {/* <Carousel /> */}
        
        {/* NINTH SECTION */}
        <section className="py-12 md:px-28">
         <div className="flex flex-col items-center justify-center px-12 py-12 gap-3 px- bg-teal-300 rounded-lg">
          <h2 className="text-4xl md:text-3xl lg:text-5xl text-center font-bold">Starting with Maazi media is easy, fast and free</h2>
          <h5 className="text-sm md:text-lg ">It only takes a few clicks to get started</h5>
          <button className="px-6 py-3 text-white bg-pink-600 rounded-sm">Get started - it&apos;s free</button>
          <p>Free for 14 days, no credit card required</p>
        </div> 
        </section>
        

        {/*1<----TENTH SECTION-----> */}
        <section className="h-full w-full bg-slate-200 flex flex-col justify-center py-12 px-4 sm:px-24 md:px-12 lg:px-20 xl:px-28">
            <h2 className="text-4xl md:text-3xl lg:text-5xl text-center font-bold">The Complete Solutions</h2>
            <h5 className="text-sm md:text-lg mx-auto ">Ligula risus auctor tempus magna feugiat lacinia</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 lg:gap-12 xl:gap-16 p-16 md:p-8">
            <div className="relative h-full w-full flex flex-col items-center gap-4 aspect-square  p-8 sm:p-12 md:p-2 lg:p-8 rounded-xl bg-black/10">
                    <Image 
                    src={img8}
                    alt="alt"
                        className="object-contain"
                    />
                    <h4 className="text-xl md:text-base xl:text-2xl font-semibold mt-6 md:mt-4 text-center">Engagement Analysis</h4>
                    <p className="text-xs lg:text-sm xl:text-base text-center">Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                </div>
                <div className="relative h-full w-full flex flex-col items-center gap-4 aspect-square  p-8 sm:p-12 md:p-2 lg:p-8 rounded-xl bg-black/10">
                    <Image 
                    src={img9}
                    alt="alt"
                        className="object-contain"
                    />
                    <h4 className="text-xl md:text-base xl:text-2xl font-semibold mt-6 md:mt-4 text-center">Engagement Analysis</h4>
                    <p className="text-xs lg:text-sm xl:text-base text-center">Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                </div>
                <div className="relative h-full w-full flex flex-col items-center gap-4 aspect-square p-8 sm:p-12 md:p-2 lg:p-8 rounded-xl bg-black/10">
                    <Image 
                    src={img10}
                    alt="alt"
                        className="object-contain"
                    />
                    <h4 className="text-xl md:text-base xl:text-2xl font-semibold mt-6 md:mt-4 text-center">Engagement Analysis</h4>
                    <p className="text-xs lg:text-sm xl:text-base text-center">Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                </div>
            </div>
        </section>        
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
