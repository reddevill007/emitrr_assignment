"use client"

import { useState } from 'react';
import { quizData } from '@/data/quizData';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Quiz = ({ params, searchParams }) => {
    const { status } = useSession();
    const router = useRouter();
    const { q } = searchParams;

    const selectedCategory = quizData[q];
    const questions = selectedCategory.questions;

    const [score, setScore] = useState(0);

    const calculateMarks = () => {
        alert(`You Score ${score}`)
    }

    if (status === "unauthenticated") {
        toast.error("Please Login")
        router.push("/login");
    }

    return (
        <div className='p-10 mt-16'>
            <h1 className='text-center text-4xl mb-10'>Explore the Fascinating World of {selectedCategory.category} in Our Quiz</h1>
            <div className='flex w-full flex-col justify-center items-center gap-10'>
                <div className='w-[90%] flex flex-col gap-5'>
                    {questions.map((curr_que, i) => (
                        <QuizQuestion
                            question={curr_que}
                            queNo={i}
                            setScore={setScore}
                            score={score}
                        />
                    ))}
                </div>

                <button className="border rounded-[10px] px-6 py-4 bg-black" onClick={calculateMarks}>Submit</button>
            </div>
        </div>
    );
};

export default Quiz;
