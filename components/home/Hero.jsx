import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='w-full h-screen mt-16 container flex items-center justify-center mx-auto md:flex-row flex-col-reverse'>
            <div className='w-full md:w-1/2 md:h-full flex items-start justify-center flex-col gap-10'>
                <h1 className='text-4xl'>The Ultimate Quizmaster's Challenge</h1>
                <p>
                    Test your knowledge and challenge your brain with our wide range of intriguing questions and mind-boggling quizzes. Are you ready to dive into the world of trivia and become a quizmaster?
                </p>
                <Button className="border px-10 rounded-[10px] border-black">
                    <Link href="#category">
                        Start
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