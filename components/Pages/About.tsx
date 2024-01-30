'use client'
import Image from 'next/image'
import React from 'react'
import abtimg1 from "@/public/assets/abt-img-1.jpg";
import abtimg2 from "@/public/assets/abt-img-2.jpg";
import abtimg3 from "@/public/assets/abt-img-3.jpg";
import abtimg4 from "@/public/assets/abt-img-4.jpg";
import abtimg5 from "@/public/assets/abt-img-5.jpg";
import abtimg6 from "@/public/assets/abt-img-6.jpg";
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants';
import { BarChart4, Code2, LayoutDashboard, ReceiptPoundSterling, ReceiptRussianRuble, Trophy, User } from 'lucide-react';
import { DocumentReport, DocumentReportOutline, LightBulb } from 'heroicons-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const About = () => {
  return (
    <main className='h-full w-full  px-4 sm:px-16 md:px-8 lg:px-24 overflow-x-hidden'>
        {/* First section */}
        <section className=''>
            <h2 className='md:max-w-3xl lg:max-w-5xl text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-32'>We provide solutions for your creative ideas</h2>
            <p className='mt-4 max-w-4xl md:text-lg xl:text-xl md:pr-4'>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and purus velna vitae auctor integer undo congue diam purus pretium and ligula tempor primis libero at tempus, blandit and cursus varius magnis at sapien egestas purus vitae purus an ipsum </p>
            <div className='h-full w-full relative flex flex-col md:flex-row justify-between mt-12 p-0 md:p-0'>
               <div className='md:w-[38%]  flex flex-col '>
               <Image 
                src={abtimg1}
                alt='a'
                className=' hidden md:block object-contain rounded-2xl'
                />
                 <Image 
                src={abtimg3}
                alt='a'
                className='md:scale-125 md:-translate-x-[13.5%] aspect-video md:translate-y-[20%] md:rounded-r-2xl object-contain rounded-2xl'
                />
               </div>
               <div className='md:w-[60%]  flex gap-8 mt-8 md:gap-0 flex-col'>
                    <Image 
                    src={abtimg2}
                    alt='abt-img2'
                        className='object-contain md:scale-125 md:translate-y-[5%] md:translate-x-[12.5%] rounded-2xl'
                    />
                <div className='flex gap-8 h-fit md:mt-[16%]'>
                    <div className='w-full md:min-w-64 rounded-2xl p-4 bg-slate-300'>
                     

Nullam tempor pretium a gravida donec congue ipsum porta justo integer dolor odio auctor a neque suscipit an ipsum integer congue purus at pretium turpis egestas and volute laoreet quaerat 
                    </div>
                    <Image 
                src={abtimg4}
                alt='a'
                className='hidden h-60 w-auto bg-black  md:block object-contain rounded-2xl'
                />
                </div>                   
               </div>

            </div>
        </section>
        {/* Second section */}
        <section className='flex flex-col md:flex-row h-full w-full gap-4 py-24'>
            <div className='flex-1 p-2 flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold'>Mission and Impact</h2>
                <p className='text-sm md:text-base lg:text-lg'>
                Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit 
                </p>  
                <p className='text-sm md:text-base lg:text-lg'>
                congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit 
                </p>              
            </div>
            <div className='flex-1 p-2 flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold'>We deliver results</h2>
                <p className='text-sm md:text-base lg:text-lg'>
                Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna cursus undo varius purus magnis sapien quaerat
                </p>
                <p className='text-sm md:text-base lg:text-lg'>
                 ipsum and purus sapien ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna cursus undo varius purus magnis sapien quaerat
                </p>
            </div>
      </section>
      
        {/* Third section */}

        <div className="h-full w-full flex flex-col md:flex-row  py-24 px-6 gap-4 rounded-3xl justify-between bg-slate-100">
          
        <motion.div className="relative md:hidden block min-w-ful max-w-full rounded-2xl overflow-hidden aspect-square bg-contain bg-slate-500"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={abtimg2}
            alt="hero"
            className='object-cover h-full w-full'
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full max-w-3xl gap-6 md:gap-2 lg:gap-6 justify-center"
            >
            <h2 className="text-2xl md:text-2xl lg:text-4xl text-neutral-600 font-semibold">
              Co-founder at aazi
            </h2>
            <h2 className="text-5xl md:text-2xl lg:text-4xl text-neutral-800 font-semibold">
            Henry Adams
            </h2>
            <p className="text-neutral-600 text-lg  xl:text-lg">
            &quot;Sodales tempor sapien diam purus ipsum quaerat and volute fusce a congue laoreet turpis neque diam auctor turpis vitae dolor magna luctus placerat neque ipsum fusce cursus ligula cursus purus vitae purus and ipsum suscipit. Nemo ipsam cubilia donec turpis undo egestas ipsum a purus sapien ultrice aliquam lacus and quaerat an ipsum augue turpis sapien cursus congue augue&quot;
            </p>
          </motion.div>
         
            <motion.div className="relative hidden md:block min-w-ful max-w-[50%] rounded-2xl overflow-hidden aspect-square bg-contain bg-slate-500"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={abtimg2}
            alt="hero"
            className='object-cover h-full w-full'
            />
          </motion.div>
        </div>

         {/* Fourth section */}
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

         {/* Fifth section */}
         <section className='flex flex-col lg:flex-row justify-between gap-16 items-center py-24 px-6'>
            <h1 className='text-4xl text-center font-semibold md:text-3xl xl:text-4xl md:text-start text-neutral-600'>Stay up to date with our news, ideas and updates</h1>
            <div className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl '>
                <Input
                placeholder='Enter your Email'
                 className='py-8 px-12 border-2  text-xl' />
                <Button className='p-8 bg-pink-600'>Subscribe</Button>
            </div>
         </section>

         {/* Sixth section */}
         <div className="h-full w-full flex flex-col md:flex-row gap-4 justify-between bg-neutral-300 rounded-3xl py-20 px-12">
          
        <motion.div className="relative md:hidden block min-w-ful max-w-full rounded-2xl bg-contain"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={abtimg5}
            alt="hero"
            className='object-cover h-full w-full'
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full max-w-3xl gap-6 md:gap-2 lg:gap-6 justify-center"
            >
            <h2 className="text-xl uppercase text-neutral-600 font-semibold">
              Why Choose us
            </h2>
            <h2 className="max-w-md text-4xl md:text-2xl lg:text-4xl text-neutral-800 font-semibold">
            With Knowledge Skills and hard work
            </h2>
            <h2 className="text-xl md:text-xl lg:text-2xl text-neutral-700 font-semibold">
              Your road to success
            </h2>
            <p className="text-neutral-600 text-lg  xl:text-lg">
            Sapien tempor sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae 
            </p>
          </motion.div>
         
            <motion.div className="relative hidden md:block w-[70%] bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={abtimg5}
            alt="hero"
            className='object-cover h-full w-full'
            />
          </motion.div>
        </div>

        {/* Eight Section */}
        <div className="h-full w-full flex flex-col md:flex-row gap-4 justify-between rounded-3xl py-20  mt-32">
          
        <motion.div className="relative min-w-ful max-w-full mx-auto md:mx-0  w-[70%] bg-contain"
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={abtimg6}
            alt="hero"
            className='object-cover h-full w-full'
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0 w-full max-w-3xl gap-6 md:gap-2 lg:gap-6 justify-center"
            >
            <h2 className="text-xl uppercase text-neutral-600 font-semibold">
            Strategies That Work
            </h2>
            <h2 className="max-w-md text-4xl md:text-2xl lg:text-4xl text-neutral-800 font-semibold">
            Right strategies & implementations
            </h2>
            <h2 className="text-xl md:text-xl lg:text-2xl text-neutral-700 font-semibold">
              upgrade
            </h2>
            <p className="text-neutral-600 text-lg  xl:text-lg">
            Sapien tempor sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor Sapien tempor sodales quaerat  luctus placerat magna and ligula cursus purus vitae 
            </p>
          </motion.div>
         
            {/* <motion.div className="relative hidden md:block w-[70%] bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={abtimg6}
            alt="hero"
            className='object-cover h-full w-full'
            />
          </motion.div> */}
      </div>
      
      {/* Ninth Section */}
      <section className='py-12'>
          <div className='max-w-4xl w-fit mx-auto py-10 space-y-3'>
               <h1 className='text-5xl font-semibold text-center'>Here&apos;s what our amazing clients are saying</h1>
            <p className='text-xl text-neutral-600 text-center'>Ligula risus aucor tempus magna feugiat lacinia</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 rounded-md'>
          <div className='w-full space-y-4 min-h-64 max-h-72 shadow-xl px-8 md:px-14 py-16'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-3 text-neutral-600'> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>
          <div className='w-full space-y-4 min-h-64 max-h-72 shadow-xl px-8 md:px-14 py-16'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-3 text-neutral-600'> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>
          <div className='w-full space-y-4 min-h-64 max-h-72 shadow-xl px-8 md:px-14 py-16'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-3 text-neutral-600'> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>
          <div className='w-full space-y-4 min-h-64 max-h-72 shadow-xl px-8 md:px-14 py-16'>
            
            <p className='test-xs sm:text-sm lg:text-lg line-clamp-3 text-neutral-600'> Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae</p>
            <div className='flex gap-2'>
            <User className='h-14 w-14 sm:h-16 sm:w-16 p-2 rounded-full bg-pink-200'/>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-neutral-800 text-lg sm:text-xl font-semibold'>Scott boxer</span>
              <p className='text-neutral-600 text-sm sm:text-base'>@scottboxer</p>
            </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default About
