import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Product from '../components/product/Product';
import Hero from '../components/Hero/Hero';
import AnnonceService from '../services/AnnonceService';
import Filtre from '../components/filtre/Filtre';

function Homepage() {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        AnnonceService.getData().then((data) => {
            setProducts(data.slice(0, 12));
        });
    }, []);

    const handleFilterChange = (filteredData) => {
        setFilteredData(filteredData);
    };

    return (
        <div>
            <Navbar />
            <Hero />
            <div>
                <div className="mb-5" style={{ width: "fit-content", margin: "auto" }}>
                    <p className="block text-7xl font-bold mb-1 ml-1" >Découvrez Nos Ventes de Voitures</p>
                </div>
                <div style={{ display: "flex", width: "fit-content", margin: "auto" }}>
                    <div style={{ marginRight: "50px", width: "250px" }}>
                        <Filtre onSubmit={handleFilterChange} />
                    </div>

                    <Product products={filteredData.length > 0 ? filteredData : products} />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
