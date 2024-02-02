import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const page = () => {
  return (
    <main className='w-full h-full max-w-4xl mx-auto'>
     <div className='max-w-4xl w-fit mx-auto py-10 space-y-3 mt-16'>
        <h1 className='text-5xl font-semibold text-center'>Questions&#x3f; Let&#xb4;s Talk</h1>
        <p className='text-xl text-neutral-400 text-center'>
        Want to learn more about Martex, get a quote, or speak with an expert? Let us know what you are looking for and we’ll get back to you right away
        </p>
    </div>
    <section className='space-y-12'>
        <div className='flex flex-col gap-1'>
            <h4 className='font-semibold text-xl px-1'>Your Name:</h4>
            <p className='text-neutral-600 px-1'>Please enter your real name:</p>
            <Input className='p-7 text-lg mt-1 w-full' placeholder='Enter your name' />
        </div>

        <div className='flex flex-col gap-1'>
            <h4 className='font-semibold text-xl px-1'>Your Email Address:</h4>
            <p className='text-neutral-600 px-1'>Please carefully check your email address for accuracy:</p>
            <Input className='p-7 text-lg mt-1 w-full' placeholder='Enter your name' />
        </div>

        <div className='flex flex-col gap-1'>
            <h4 className='font-semibold text-xl px-1'>Explain your question in details:</h4>
            <p className='text-neutral-600 px-1'>Your OS version, Martex version & build, steps you did. Be VERY precise!</p>
            <Textarea rows={6} className='p-7 text-lg mt-1 w-full' placeholder='Enter your name' />
        </div>
        <Button className='p-7'>
            Submit Request
        </Button>
        <p className='text-neutral-400'>
            We are committed to your privacy. Martex uses the information you provide us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our <span className='text-neutral-700 font-semibold'>Privacy Policy</span>. 
        </p>
    </section>
    
    
    </main>
  )
}

export default page
