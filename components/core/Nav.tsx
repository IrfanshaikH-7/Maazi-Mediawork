'use client'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useRef } from 'react'
import { Box, Menu, ZapIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
 
const components: { title: string; href: string; }[] = [
  {
    title: "Core Features",
    href: "/core-features",
  },
  {
    title: "Blog list",
    href: "#blog-list",
  },
  {
    title: "Our projects",
    href: "#our-project",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Project details",
    href: "#project-details",
  },
  {
    title: "FAQs",
    href: "#faqs",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Help-center",
    href: "#Help-center",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
]
const Nav = () => {
  const noCol = useRef()
  return (
    <nav className='h-16 w-full shadow-sm flex items-center sticky top-0 right-0 left-0 bg-slate-50 z-50 '>
        <div className='flex justify-between items-center  w-full max-w-7xl mx-auto px-4 md:px-6'>
              <div>
                <Link href={'/'} className='text-xl font-semibold uppercase text-neutral-700 cursor-pointer'>Maazi mediaworks</Link>
              </div>
              <div className='flex gap-4 '>
              <NavigationMenu className='hidden md:block'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>Home</NavigationMenuTrigger>
          <NavigationMenuContent className='flex min-w-max flex-col p-4 gap-1'>
                <NavigationMenuLink asChild className='w-full rounded-md  px-4 py-1 text-sm text-neutral-600 hover:bg-neutral-200'>
                  <Link
                    className="w-full"
                    href="#why__maazi"
                  >
                    Why Maazi?
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className='w-full rounded-md  px-4 py-1 text-sm text-neutral-600 hover:bg-neutral-200'>
                  <Link
                    className="w-full"
                    href="#integration"
                  >
                    Integration
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className='w-full rounded-md  px-4 py-1 text-sm text-neutral-600 hover:bg-neutral-200'>
                  <Link
                    className="w-full"
                    href="#how_it_works"
                  >
                    How it works
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className='w-full rounded-md  px-4 py-1 text-sm text-neutral-600 hover:bg-neutral-200'>
                  <Link
                    className="w-full"
                    href="#best_solutions"
                  >
                    best solutions
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className='w-full rounded-md  px-4 py-1 text-sm text-neutral-600 hover:bg-neutral-200'>
                  <Link
                    className="w-full"
                    href="#feature"
                  >
                    Testimotials
                  </Link>
                </NavigationMenuLink>
             
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
          <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={'bg-transparent'}>
      More
    </NavigationMenuLink>
  </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <section className=" w-full gap-1 p-4 hidden md:grid md:w-[260px]  grid-cols-2 lg:grid-cols-3 lg:w-[460px] ">
              {components.map((component) => (
                <div key={component.title} className='flex items-start text-sm text-neutral-600 justify-center hover:bg-slate-200 rounded-md px-2 py-1'>
                  <Link href={component.href} className='text-start w-full '>{component.title}</Link>
                </div>
              ))}
            </section>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faqs" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
              FAQs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button variant={'ghost'}>
            Sign in
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button>
            Sign Up
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
              </div>

              {/* Mobile nav */}
        <div className='block md:hidden'>

          <Sheet  >
            <SheetTrigger><Menu className='h-8 w-8'/></SheetTrigger>
            <SheetContent className='pt-20 h-full  flex flex-col justify-between '>

              <div className='overflow-x-hidden overflow-y-auto px-2'>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className='border-none'>
                  <AccordionTrigger className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md'>Home</AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-3'>
                  <SheetClose asChild >
                    <Link href={'#why_us'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Why us
                    </Link>
                  </SheetClose>
                  <SheetClose asChild >
                    <Link href={'#integration'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    Integration
                    </Link>
                  </SheetClose>
                    
                  <SheetClose asChild >
                    <Link href={'#how_it_works'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    How it works
                    </Link>
                  </SheetClose>
                  <SheetClose asChild >
                    <Link href={'#best_solutions'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    Best Solutions
                    </Link>
                  </SheetClose>
                  <SheetClose asChild >
                    <Link href={'#testimonials'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    Testimonials
                    </Link>
                  </SheetClose>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'
                  
                  >
                    <Link href={'#feature'}>Feature</Link>
                  </AccordionTrigger>
                </AccordionItem>


                <AccordionItem value="item-3" className='border-none'>
                  <AccordionTrigger className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md'>Pages</AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-3'>
                  <SheetClose asChild >
                    <Link href={'/about'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      About us
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Our Teams
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'/contact'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Contact Us
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'/core-features'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Core Features
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Our Projects
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'/project-details'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Project Details
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'/testimonials'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Testimonials
                    </Link>
                    </SheetClose>
                    <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Our Projects
                    </Link>
                    </SheetClose>
                    
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                  <SheetClose asChild >
                    <Link href={'/pricing'}>Pricing</Link>
                    </SheetClose>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-5" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                    <SheetClose asChild >
                    <Link href={'/faqs'}>FAQs</Link>
                    </SheetClose>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-6" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                  <SheetClose asChild >
                    <Link href={'#feature'}>Sign in</Link>
                    </SheetClose>
                  </AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-7" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                    <SheetClose asChild >
                    <Link href={'#feature'}>Sign up</Link>
                    </SheetClose>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
              
              </div>
              <div className='flex flex-col gap-1 px-4 py-2 bg-teal-50 rounded-xl'>
                <div className='flex gap-1'>
                   <p className='text-xl font-semibold'>Maazi-Mediaworks</p>
              <ZapIcon />
                </div>
              <SheetDescription>
              Your on stop solution for everything degital needs.
              <Button className='mt-3 py-0 w-full'>
                Connect with us
              </Button>
              </SheetDescription>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>


        
        

    </nav>
  )
}

export default Nav
