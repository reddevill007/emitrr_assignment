"use client"

import { useState } from 'react'
import { toast } from 'sonner'

const OPTIONS = ["A", "B", "C"]

const QuizQuestion = ({ question, queNo, setScore, score }) => {
    const [selectedAnswer, setselectedAnswer] = useState()

    const checkAnswer = (marks, correctAnswer, option, i) => {
        if (option === correctAnswer) {
            setScore(score + marks);
        }
        toast.success('Be at the area 10 minutes before the event time')
        setselectedAnswer(i)
    }

    return (
        <div>
            <h1 className='border-b pb-4 mb-4'>Question {queNo + 1}: {question.question}</h1>
            <div className='flex flex-col w-full gap-5'>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <button
                            className={`border border-black rounded px-6 py-4 ${selectedAnswer === index ? 'bg-blue-100' : 'bg-white'}`}
                            onClick={() => checkAnswer(question.marks, question.correctAnswer, option, index)}
                        >
                            <span className='border border-black px-3 py-2 rounded-full mr-2 h-16 w-16'>{OPTIONS[index]}</span>
                            {option}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuizQuestion