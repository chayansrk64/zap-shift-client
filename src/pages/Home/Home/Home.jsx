import React from 'react';
import Banner from '../Banner/Banner';
import HowItsWorks from '../../../components/HowItsWorks/HowItsWorks';
import OurServices from '../../../components/OurServices/OurServices';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWorks></HowItsWorks>
            <OurServices></OurServices>
            <Brands></Brands>
        </div>
    );
};

export default Home;