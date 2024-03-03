import MainLayout from "../../layouts/MainLayout";
import Banner from "./components/Banner/Banner";
import BrandsList from "./components/BrandsList/BrandsList";
import Categories from "./components/Categories/Categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import LimitOffer from "../../components/LimitOffer/LimitOffer";

const Home = () => {
    return (
        <MainLayout>
            <main className='main'>
                <Banner />
                <BrandsList />
                <Categories />
                <FeaturedProducts />
                <LimitOffer />
            </main>
        </MainLayout>
    );
};

export default Home;
