import CategoryList from '@/components/category/CategoryList';
import Hero from '@/components/home/Hero';

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
