import React from 'react';
import Banner from '../Banner/Banner';
import HowItsWorks from '../../../components/HowItsWorks/HowItsWorks';
import OurServices from '../../../components/OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWorks></HowItsWorks>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;