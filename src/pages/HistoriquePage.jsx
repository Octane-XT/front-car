import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Product from '../components/product/Product';
import Hero from '../components/Hero/Hero';
import AnnonceService from '../services/AnnonceService';

function Homepage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data using AnnonceService.getData()
        AnnonceService.getHistorique().then((data) => {
            // Update the state with the fetched data
            setProducts(data.slice(0, 12));
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <Product products={products} />
        </div>
    );
}

export default Homepage;
