'use client'
import React from 'react'
import { motion} from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import Image from 'next/image'
import img2 from '@/public/assets/img-2.png'
import img5 from '@/public/assets/img-5.png'
import img6 from '@/public/assets/img-6.png'
import img8 from '@/public/assets/img-8.png'
import img9 from '@/public/assets/img-9.png'
import img10 from '@/public/assets/img-10.png'

import img_core_1 from '@/public/assets/img-core-1.png'
import img_core_2 from '@/public/assets/img-core-2.png'
import { DocumentReport, LightBulb, LightBulbOutline } from 'heroicons-react'
import { BarChart4, Code2, ReceiptPoundSterling, Trophy } from 'lucide-react'
import QandA from '../core/QandA'

const CoreFeatures = () => {
  return (
    <>
    <main className='h-full w-full  px-4 sm:px-16 md:px-8 lg:px-24 overflow-x-hidden'>
        <div className="h-full w-full flex flex-col md:flex-row mx-auto py-12 ">
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-6 md:gap-2 lg:gap-6 justify-center"
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
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque aurus an ipsum suscipit
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
        {/* Second section */}
        <section className='py-16'>
            <div className='max-w-4xl w-fit mx-auto py-10 space-y-3'>
               <h1 className='text-5xl font-semibold text-center'>We make your bussiness gain more revenue at a glance</h1>
            <p className='text-xl text-neutral-600 text-center'>Ligula risus aucor tempus magna feugiat lacinia</p>
            </div>
            <div className='grid md:grid-cols-2 gap-y-20 w-full h-auto '>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-2 w-full '>
               <ReceiptPoundSterling className='h-20 w-20 min-w-20 text-pink-600'/> 
               <div className='space-y-2 text-center md:text-start'>
                    <h3 className='text-xl lg:text-2xl font-semibold '>Marketing Research</h3>
                    <p className='text-base px-4 md:px-0 md:text-sm lg:text-lg text-neutral-600 font-medium'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum </p>
               </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-2 w-full'>
               <LightBulb className='h-20 w-20 min-w-20 text-pink-600'/> 
               <div className='space-y-2 text-center md:text-start'>
                    <h3 className='text-xl lg:text-2xl font-semibold '>User Experience</h3>
                    <p className='text-base px-4 md:px-0 md:text-sm lg:text-lg text-neutral-600 font-medium'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum </p>
               </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-2 w-full '>
               <BarChart4 className='h-20 w-20 min-w-20 text-pink-600'/> 
               <div className='space-y-2 text-center md:text-start'>
                    <h3 className='text-xl lg:text-2xl font-semibold '>Digital Marketing</h3>
                    <p className='text-base px-4 md:px-0 md:text-sm lg:text-lg text-neutral-600 font-medium'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum </p>
               </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-2 w-full '>
               <Code2 className='h-20 w-20 min-w-20 text-pink-600 bg'/> 
               <div className='space-y-2 text-center md:text-start'>
                    <h3 className='text-xl lg:text-2xl font-semibold'>Web Development</h3>
                    <p className='text-base px-4 md:px-0 md:text-sm lg:text-lg text-neutral-600 font-medium'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum </p>
               </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-2 w-full '>
               <Trophy className='h-20 w-20 min-w-20 text-pink-600'/> 
               <div className='space-y-2 text-center md:text-start'>
                    <h3 className='text-xl lg:text-2xl font-semibold'>Brand Design Identity</h3>
                    <p className='text-base px-4 md:px-0 md:text-sm lg:text-lg text-neutral-600 font-medium'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum </p>
               </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start items-center gap-2 w-full '>
               <DocumentReport className='h-20 w-20 min-w-20 text-pink-600'/> 
               <div className='space-y-2 text-center md:text-start'>
                    <h3 className='text-xl lg:text-2xl font-semibold '>Marketing Research</h3>
                    <p className='text-base px-4 md:px-0 md:text-sm lg:text-lg text-neutral-600 font-medium'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum </p>
               </div>
            </div>
         </div>
         </section>
         {/* Third section */}
         <div className="h-full w-full flex flex-col md:flex-row mx-auto py-12 ">
         <motion.div className="md:hidden block relative h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img_core_1}
            alt="hero"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-6 md:gap-2 lg:gap-6 justify-center"
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
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque aurus an ipsum suscipit
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
         
            <motion.div className="hidden md:block relative h-auto min-w-full p-8 sm:p-24 md:py-4 md:px-0 md:min-w-[450px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img_core_1}
            alt="hero"
            />
          </motion.div>
        </div>
        {/* forth section */}
        <div
        id="integration"
        className="h-full w-full flex flex-col md:flex-row mx-auto py-12 ">
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

        {/* fifth section? */}
        <div className="h-full w-full flex flex-col justify-between md:flex-row mx-auto py-12 gap-4 ">
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
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 lg:gap-10 px-4  md:max-w-md lg:max-w-xl md:aspect-square  xl:max-w-2xl w-full justify-center items-center ">
            <div className="w-full md:h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-lg md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className=" text-xs md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>

            <div className="w-full md:h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-lg md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className=" text-xs md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>

            <div className="w-full md:h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-lg md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className=" text-xs md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>

            <div className="w-full md:h-full flex flex-col gap-2 p-6 md:items-center text-center lg:items-start justify-center aspect-video md:aspect-square border-2 rounded-xl">
              <LightBulbOutline className="h-12 w-auto  lg:h-10 xl:h-16 text-pink-600 aspect-square"/>
              <h3 className="text-neutral-700 text-lg md:text-base xl:text-2xl font-bold">
                Content Marketing
              </h3>
              <p className=" text-xs md:text-xs xl:text-lg text-neutral-600">
                Porta semper lacus and cursus feugiat at primis ultrice a ligula
                auctor
              </p>
            </div>
          </div>
        </div>



        {/* sixth section */}
        <div id="best_solutions"  className="h-full w-full  flex flex-col justify-center py-12 ">
            <h2 className="text-4xl md:text-3xl lg:text-5xl text-center font-bold">The Complete Solutions</h2>
            <h5 className="text-sm md:text-lg mx-auto mt-2">Ligula risus auctor tempus magna feugiat lacinia</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 lg:gap-12 xl:gap-16 px-4 py-14 md:p-8 mt-4">
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
        </div>  

        {/* seventh section */}
        <div id="how_it_works" className="h-full w-full mx-auto py-24 bg-neutral-200 overflow-hidden rounded-2xl">
          <div className=" max-w-3xl lg:max-w-5xl text-center mx-auto space-y-6">
            <h1 className=" text-4xl md:text-6xl text-neutral-800 font-bold ">
            Track the progress towards objectives with key results
            </h1>
            <p className="text-xl md:text-3xl text-neutral-600 ">
              Ligula risus auctor tempus magna feugiat.
            </p>
          </div>
          <motion.div className="relative px-6 h-fit w-full flex justify-center  bg-contain mt-10 lg:mt-16 -mb-72"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={img_core_2}
            alt="hero"
            
            />
          </motion.div>
            </div>
            {/* eigth section */}
            <div className="h-full w-full flex flex-col md:flex-row mx-auto py-12">
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

        <QandA />
        </main>
        </>
  )
}

export default CoreFeatures
