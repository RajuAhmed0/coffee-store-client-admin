import React from 'react';
import Banner from './Banner/Banner';
import Buttom_Banner from './Banner/Buttom_Banner';
import Our_Products from './Our_Popular_Products/Our_Products';
import Instagram from './Follow_on_Instagram/Instagram';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Buttom_Banner></Buttom_Banner>
          <Our_Products></Our_Products>
          <Instagram></Instagram>
        </div>
    );
};

export default Home;