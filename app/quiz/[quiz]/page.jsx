import { quizData } from '@/data/quizData';
import QuizUI from '@/components/quiz/QuizUI';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import Head from 'next/head';

const getData = async (slug) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${slug}`, {
        cache: "no-cache",
    });
    if (!res.ok) {
        throw new Error("Could not load categories");
    }

    return res.json()
};

const Quiz = async ({ searchParams }) => {

    const { q } = searchParams;

    const selectedCategory = quizData[q];

    const { user } = await getServerSession(authOptions);

    const userData = await getData(user.email)

    return (
        <>
            <QuizUI selectedCategory={selectedCategory} currentScore={userData.score} userId={userData.id} />
        </>
    );
};

export default Quiz;
