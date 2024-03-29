import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"


const Footer = () => {
  return (
<>
<main className="h-full  max-w-7xl px-4 pt-24 mx-auto">

    <div className='h-full w-full  flex flex-col xl:flex-row justify-between '>
    <h3 className='text-3xl font-bold w-fit p-2 '>Maazi mediaworks</h3>
    <div className='flex flex-col md:flex-row h-auto w-full justify-between '>
        <section className='flex flex-wrap h-auto w-full px-4 md:px-0 md:w-fit justify-between xl:w-fit gap-8 md:gap-24 xl:gap-20 '>
<div className='flex flex-col gap-2 p-4 md:p-2 xl:p-4 '>
            <h2 className='mb-2 text-2xl font-semibold text-neutral-800'>Company</h2>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>

        </div>
        <div className='flex flex-col gap-2  p-4 md:p-2 xl:p-4'>
            <h2 className='mb-2 text-2xl font-semibold text-neutral-800'>Company</h2>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>

        </div>
        <div className='flex flex-col gap-2  p-4 md:p-2 xl:p-4'>
            <h2 className='mb-2 text-2xl font-semibold text-neutral-800'>Company</h2>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>
            <Link href={'/'}
            className='text-lg text-neutral-500 px-2'
            >
                About us
            </Link>

        </div>

        </section>
        
        <div className='flex flex-col gap-2 py-2 ml-3 md:ml-0 px-4'>
            <h2 className='mb-2 text-2xl font-semibold text-neutral-800'>Follow the best</h2>
            <Link href={'/'}
            className='text-lg py-2 px-16 text-neutral-500 border rounded-md '
            >
                Email address &#45;
            </Link>
            <div className="flex gap-4">
                <Facebook className="h-6 w-6 text-neutral-500" />
                <Twitter className="h-6 w-6 text-neutral-500" />
                <Instagram className="h-6 w-6 text-neutral-500" />

            </div>
        </div>
    </div>
    
    </div>
    <div className="h-16 w-full border-t-2 py-4">
    <h5 className="text-neutral-400 font-xl font-semibold">&#x40; 2024 All Rights Reserved </h5>
</div>
</main>

    </>
  )
}

export default Footer
