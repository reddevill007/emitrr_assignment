import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className='w-full h-screen pt-16 container flex items-center justify-center mx-auto'>
            <div className='w-1/2 h-full flex items-start justify-center flex-col gap-10'>
                <h1 className='text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, asperiores vitae ullam, saepe voluptatem quasi fugiat natus eius laborum nemo voluptatum voluptas nam, amet quaerat sed fuga repellat. Rem, doloremque.</p>
                <Button className="border rounde-[10px] border-black">Some Button</Button>
            </div>
            <div className='w-1/2 h-full flex items-center justify-center'>
                <img src="/hero.png" className='w-4/5 h-auto' alt="" />
            </div>
        </section>
    )
}

export default Hero