import Image from 'next/image'
import React from 'react'
import abtimg1 from "@/public/assets/abt-img-1.jpg";
import abtimg2 from "@/public/assets/abt-img-2.jpg";
import abtimg3 from "@/public/assets/abt-img-3.jpg";
import abtimg4 from "@/public/assets/abt-img-4.jpg";

const About = () => {
  return (
    <main className='h-full w-full px-24 overflow-x-hidden'>
        {/* First section */}
        <section className=''>
            <h2 className='md:max-w-3xl lg:max-w-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-52'>We provide solutions for your creative ideas</h2>
            <p className='mt-4 max-w-4xl md:text-lg xl:text-xl pr-4'>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer and purus velna vitae auctor integer undo congue diam purus pretium and ligula tempor primis libero at tempus, blandit and cursus varius magnis at sapien egestas purus vitae purus an ipsum </p>
            <div className='h-full w-full relative flex flex-col md:flex-row justify-between mt-12 p-8 md:p-0'>
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
        <div className='flex flex-col md:flex-row h-full w-full gap-4 py-24'>
            <div className='flex-1 p-2 flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold'>Mission and Impact</h2>
                <p>
                Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit 
                </p>  
                <p>
                congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit 
                </p>              
            </div>
            <div className='flex-1 p-2 flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold'>We deliver results</h2>
                <p>
                Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna cursus undo varius purus magnis sapien quaerat
                </p>
                <p>
                 ipsum and purus sapien ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna cursus undo varius purus magnis sapien quaerat
                </p>
            </div>
        </div>
    </main>
  )
}

export default About
