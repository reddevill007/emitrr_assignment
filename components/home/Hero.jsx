import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='w-full h-screen mt-16 container flex items-center justify-center mx-auto md:flex-row flex-col-reverse'>
            <div className='w-full md:w-1/2 md:h-full flex items-start justify-center flex-col gap-10'>
                <h1 className='text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, asperiores vitae ullam, saepe voluptatem quasi fugiat natus eius laborum nemo voluptatum voluptas nam, amet quaerat sed fuga repellat. Rem, doloremque.</p>
                <Button className="border rounde-[10px] border-black">
                    <Link href="#category">
                        Some Button
                    </Link>
                </Button>
            </div>
            <div className='sm:w-3/4 md:w-1/2 md:h-full flex items-center justify-center'>
                <img src="/hero.png" className='md:w-3/5 sm:w-[60%] p-4' alt="" />
            </div>
        </section>
    )
}

export default Hero