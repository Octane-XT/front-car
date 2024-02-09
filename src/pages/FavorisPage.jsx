import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Product from '../components/product/ProductFav';
import AnnonceService from '../services/AnnonceService';

function Favorispage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data using AnnonceService.getData()
        AnnonceService.getFav().then((data) => {
            // Update the state with the fetched data
            setProducts(data.slice(0, 12));
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Product products={products} />
        </div>
    );
}

export default Favorispage;
