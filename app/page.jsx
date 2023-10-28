import Link from 'next/link';
import { quizData } from '@/data/quizData';

const Home = () => (
    <div>
        <h1>Choose a Quiz Category</h1>
        <ul>
            {quizData.map((category, index) => (
                <li key={index}>
                    <Link href={`/${category.category}?q=${category.id}`}>
                        {category.category}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Home;
