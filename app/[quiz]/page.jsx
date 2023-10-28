"use client"

import { useEffect, useState } from 'react';
import { quizData } from '@/data/quizData';
import QuizQuestion from '@/components/quiz/QuizQuestion';

const Quiz = ({ params, searchParams }) => {
    const { quiz } = params
    const { q } = searchParams;

    const selectedCategory = quizData[q];
    const questions = selectedCategory.questions;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);


    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + questions[currentQuestion].marks);
            console.log('your score for ', currentQuestion + 1, 'is ', score);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const calculateMarks = () => {
        alert(`You Score ${score}`)
    }

    return (
        <div className='p-10'>
            <h1>Quiz Category: {selectedCategory.category}</h1>
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

                <button className='bg-gray-900 px-3 py-2 text-white' onClick={calculateMarks}>Submit</button>
            </div>
        </div>
    );
};

export default Quiz;
