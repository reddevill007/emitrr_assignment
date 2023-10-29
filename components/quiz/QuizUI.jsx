"use client"

import { useState } from "react";
import QuizQuestion from '@/components/quiz/QuizQuestion';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const QuizUI = ({ selectedCategory, currentScore, userId }) => {
    const router = useRouter();

    const { status, data } = useSession();

    const questions = selectedCategory.questions;

    const [score, setScore] = useState(0);
    const [user, setUser] = useState()

    const calculateMarks = () => {
        alert(`You Score ${score}`)
    }

    if (status === "unauthenticated") {
        toast.error("Please Login")
        router.push("/login");
    }

    const handlesubmit = async (id, totalPoints) => {
        console.log("clicked");
        const res = await fetch(`/api/users/${id}`, {
            method: "POST",
            body: JSON.stringify({ totalPoints }),
        });
        router.push(`/result?score=${score}&cat=${selectedCategory.category}`);
    };

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

                <button className="border rounded-[10px] px-6 py-4 bg-black" onClick={() => handlesubmit(userId, currentScore + score)}>Submit</button>
            </div>
        </div>
    )
}

export default QuizUI