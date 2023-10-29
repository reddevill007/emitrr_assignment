import Link from 'next/link'
import React from 'react'

const CategoryBox = ({ category, index }) => {
    return (
        <li key={index} className='border w-[30%] p-5 flex flex-col gap-4'>
            <div className='flex items-center justify-center w-[80%] mx-auto'>
                <img src={category.img} className='w-[60%]' alt="" />
            </div>
            <h2 className='bg-blue-400 w-fit text-sm px-2 py-1 rounded'>{category.category}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit laboriosam et, nam assumenda deserunt?...</p>
            <Link className='border rounded-[10px] px-3 py-2 w-fit' href={`/${category.category}?q=${category.id}`}>
                Attempt Quiz
            </Link>
        </li>
    )
}

export default CategoryBox