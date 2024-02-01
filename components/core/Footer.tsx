import Link from "next/link"


const Footer = () => {
  return (
    <div className='h-full w-full max-w-7xl px-4 py-24 mx-auto flex flex-col xl:flex-row justify-between '>
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
            className='text-lg p-3 px-5 text-neutral-500 '
            >
                Email address &#45;
            </Link>
            
        </div>
    </div>
    </div>
  )
}

export default Footer
