import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;