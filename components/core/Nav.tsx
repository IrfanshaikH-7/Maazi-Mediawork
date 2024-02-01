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
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Core Features",
    href: "#why__maazi",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Blog list",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Our projects",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Pricing",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Project details",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "FAQs",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Testimonials",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Help-center",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Log in",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
const Nav = () => {
  const noCol = useRef()
  return (
    <nav className='h-16 w-full shadow-sm flex items-center sticky top-0 right-0 left-0 bg-slate-50 z-50 '>
        <div className='flex justify-between items-center  w-full max-w-7xl mx-auto px-4 md:px-6'>
              <div>
                <p className='text-xl font-semibold uppercase text-neutral-700'>Maazi mediaworks</p>
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
      Pages
    </NavigationMenuLink>
  </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <section className=" w-full gap-1 p-4 hidden md:grid md:w-[260px]  grid-cols-2 lg:grid-cols-3 lg:w-[460px] ">
              {components.map((component) => (
                <div key={component.title} className='flex items-start text-sm text-neutral-600 justify-center hover:bg-slate-200 rounded-md px-2 py-1'>
                  <p className='text-start w-full '>{component.title}</p>
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
                  <AccordionTrigger className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md'>About</AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-3'>
                  <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Why us
                    </Link>
                  </SheetClose>
                  <SheetClose asChild >
                    <Link href={'#integration'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    Integration
                    </Link>
                  </SheetClose>
                    
                  <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    How it works
                    </Link>
                  </SheetClose>
                  <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                    Best Solutions
                    </Link>
                  </SheetClose>
                  <SheetClose asChild >
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
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
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      About us
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Our Teams
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Contact Us
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Core Features
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Our Projects
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Project Details
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Testimonials
                    </Link>
                    <Link href={'#feature'} className='text-base font-semibold hover:bg-slate-100 px-2 py-1.5 rounded-md'>
                      Our Projects
                    </Link>
                    
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                    <Link href={'#feature'}>Pricing</Link>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-5" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                    <Link href={'#feature'}>FAQs</Link>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-6" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                    <Link href={'#feature'}>Sign in</Link>
                  </AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-7" className='border-none'>
                  <AccordionTrigger  className='test-base font-semibold px-2 hover:bg-slate-100 rounded-md hide_Svg'>
                    <Link href={'#feature'}>Sign up</Link>
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
