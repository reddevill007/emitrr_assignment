"use client"

import React, { useState } from 'react'

const QuizQuestion = ({ question, queNo, setScore, score }) => {
    const [marked, setMarked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setselectedAnswer] = useState()

    const checkAnswer = (marks, correctAnswer, option, i) => {
        if (option === correctAnswer) {
            setScore(score + marks);
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
        setMarked(true)
        setselectedAnswer(i)
    }
    return (
        <div>
            <h1 className='border-b pb-4 mb-4'>Question {queNo + 1}: {question.question}</h1>
            <ul className='flex flex-col gap-5'>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <button className={`${selectedAnswer === index ? 'bg-yellow-400' : 'bg-white'}`} onClick={() => checkAnswer(question.marks, question.correctAnswer, option, index)}>{option}</button>
                    </li>
                ))}
            </ul>
            {marked && <p className={`${isCorrect ? 'bg-green-900' : 'bg-red-900'}`}>Answer Marked</p>}
        </div>
    )
}

export default QuizQuestion