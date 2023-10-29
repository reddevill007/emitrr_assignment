import Link from 'next/link';
import { quizData } from '@/data/quizData';
import CategoryBox from './CategoryBox';

const CategoryList = () => {
    return (
        <div className='container mx-auto py-10 mt-16'>
            <h1 className='text-4xl mb-10'>Choose a Quiz Category</h1>
            <ul className='flex items-center justify-between gap-5 flex-wrap'>
                {quizData.map((category, index) => (
                    <CategoryBox category={category} index={index} />
                ))}
            </ul>
        </div>
    )
}

export default CategoryList