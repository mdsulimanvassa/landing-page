import React from 'react';
import './Home.css';
import About from '../About/About';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <header>suliman</header>
            <section>
                <About></About>
            </section>
            <section className='product'>
                <Product></Product>
             </section>
            <section>
                <Blog></Blog>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;