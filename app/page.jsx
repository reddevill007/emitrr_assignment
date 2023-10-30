import CategoryList from '@/components/category/CategoryList';
import Hero from '@/components/home/Hero';

export const metadata = {
    title: "Quiz - Home Page",
};

const Home = () => {
    return (
        <div>
            <Hero />
            <div id='category'></div>
            <CategoryList />
        </div>
    );
}

export default Home;
