import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HowItsWorks from '../../../components/HowItsWorks/HowItsWorks';
import OurServices from '../../../components/OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWorks></HowItsWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <Suspense fallback={<LoadingSpinner />}>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </Suspense>
        </div>
    );
};

export default Home;