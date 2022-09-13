import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Blog from './Blogs/Blog';
import Department from './Department/Department';
import Navbar from './Navbar/Navbar';
import Pages from './Pages/Pages';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Department></Department>
            <Pages></Pages>
            <Blog></Blog>
        </div>
    );
};

export default Home;