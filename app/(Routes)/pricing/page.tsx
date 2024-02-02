import AutoCaros from '@/components/core/AutoplayCarousel'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import QandA from '@/components/core/QandA'
   
  const services = [
    {
      service: "Available Projects",
      starter: "Up to 2",
      basic: "Up to 250",
      premium: "Unlimited",
    },
    {
      service: "Available Storage",
      starter: "2Gb",
      basic: "50Gb",
      premium: "350Gb",
    },
    {
        service: "Private Cloud Hosting",
        starter: "X",
        basic: "X",
        premium: "✔",
      },
      {
        service: "User Permissions",
        starter: "✔",
        basic: "✔",
        premium: "✔",
      },
      {
        service: "Direct Integrations",
        starter: "✔",
        basic: "✔",
        premium: "✔",
      },
      {
        service: "Reusable Components",
        starter: "X",
        basic: "✔",
        premium: "✔",
      },
    {
      service: "Data Backup",
      starter: "Weekly",
      basic: "Daily",
      premium: "Daily",
    },
    {
      service: "No Ads. No Trackers",
      starter: "X",
      basic: "✔",
      premium: "✔",
    },
    {
      service: "Advanced Security",
      starter: "X",
      basic: "✔",
      premium: "✔",
    },
    {
      service: "Shared Team Workspace",
      starter: "X",
      basic: "✔",
      premium: "✔",
    },
    {
      service: "Team Management",
      starter: "X",
      basic: "✔",
      premium: "✔",
    },
    {
        service: "Customer Support",
        starter: "Limited",
        basic: "Basic",
        premium: "Priority",
      },
  ]

const page = () => {
  return (
    <main className='px-4 md:px-24 py-20'>
        <div className='max-w-4xl w-fit mx-auto py-10 space-y-3'>
               <h1 className='text-5xl font-semibold text-center'>Simple&#x2c; Flexible Pricing</h1>
                <p className='text-xl text-neutral-600 text-center'>Ligula risus aucor tempus magna feugiat lacinia</p>
        </div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 '>
        <div className='p-8 border-2 rounded-2xl shadow-lg'>
            <div>
               <h3 className='tex-2xl font-semibold'>Starter</h3>
            <p className='text-neutral-500 py-3'> <span className='text-4xl font-semibold text-neutral-800'>&#x24;0</span>/ forever</p>
            <p className='font-semibold text-neutral-600'>For professionals getting started with smaller projects</p>
            <Button className='w-full my-4'>
                Get Started &#x2010; it&#xb4;s free
            </Button>
            <h4>No creadit card required</h4> 
            </div>
            <div className='space-y-4 mt-10'>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 2 free projects</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 1 GB of cloud storage</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> for personal use</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> weekly data backup</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> No Ads. No Trackers</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 12/5 email support</aside>
            </div>
        </div>
        <div className='p-8 border-2 rounded-2xl shadow-lg'>
            <div>
               <h3 className='tex-2xl font-semibold'>Starter</h3>
            <p className='text-neutral-500 py-3'> <span className='text-4xl font-semibold text-neutral-800'>&#x24;0</span>/ forever</p>
            <p className='font-semibold text-neutral-600'>For professionals getting started with smaller projects</p>
            <Button className='w-full my-4'>
                Get Started &#x2010; it&#xb4;s free
            </Button>
            <h4>No creadit card required</h4> 
            </div>
            <div className='space-y-4 mt-10'>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 2 free projects</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 1 GB of cloud storage</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> for personal use</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> weekly data backup</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> No Ads. No Trackers</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 12/5 email support</aside>
            </div>
        </div>
        <div className='p-8 border-2 rounded-2xl shadow-lg'>
            <div>
               <h3 className='tex-2xl font-semibold'>Starter</h3>
            <p className='text-neutral-500 py-3'> <span className='text-4xl font-semibold text-neutral-800'>&#x24;0</span>/ forever</p>
            <p className='font-semibold text-neutral-600'>For professionals getting started with smaller projects</p>
            <Button className='w-full my-4'>
                Get Started &#x2010; it&#xb4;s free
            </Button>
            <h4>No creadit card required</h4> 
            </div>
            <div className='space-y-4 mt-10'>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 2 free projects</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 1 GB of cloud storage</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> for personal use</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> weekly data backup</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> No Ads. No Trackers</aside>
                <aside className='flex items-center gap-1 text-neutral-700 font-medium'><Check  className='h-5 w-5'/> 12/5 email support</aside>
            </div>
        </div>
        
      </section>

      <AutoCaros />

      <section className='w-full content-center'>
      <div className='max-w-4xl w-fit mx-auto py-14 space-y-3'>
               <h1 className='text-3xl md:text-5xl font-semibold text-center'>Compare Our Plans</h1>
                <p className='text-base md:text-xl text-neutral-600 text-center'>Complete list of services available in our pricing plans</p>
        </div>
      <Table className='w-full '>
      <TableHeader className='w-full'>
        <TableRow className=''>
          <TableHead colSpan={3}>Services</TableHead>
          <TableHead  className='text-center' >Starter</TableHead>
          <TableHead  className='text-center' >Basic</TableHead>
          <TableHead  className='text-center'  >Premium</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.service} className='text-xs md:text-sm lg:text-base '>
            <TableCell className="font-medium w-32 " colSpan={3}>{service.service}</TableCell>
            <TableCell className='text-center'>
                {service.starter}</TableCell>
            <TableCell className='text-center'>
                {service.basic}</TableCell>
            <TableCell className='text-center'>
                {service.premium}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </section>

      <QandA />

      <section className="pt-12">
         <div className="flex flex-col items-center justify-center p-24 gap-4 px- bg-neutral-200 rounded-xl">
          <h2 className="text-4xl md:text-3xl lg:text-5xl text-center font-bold text-neutral-700 xl:px-28">Give it a try&#x2c; It&#xb4;s free &#x21;</h2>
          <h5 className="text-sm md:text-lg">It only takes a few clicks to get started</h5>
          <Button className="mt-3 px-12 py-6 text-white bg-blue-600 rounded-sm ">Get started - it&apos;s free</Button>
          <p>Free for 14 days, no credit card required</p>
        </div> 
        </section>
    </main>
  )
}

export default page
