// App.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import CarDetail from '../components/product/CarDetail';
import Navbar from '../components/navbar/Navbar';
import '../components/product/CarDetail.css';

const CarDetailPage = () => {
    const { state } = useLocation();
    const product = state?.product;

    if (!product) {
        // Handle the case where there are no product details
        return <div>No product details available</div>;
    }
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center', color:'#474747'}}>Information supplementaire :</h1>
            <CarDetail product={product} />
        </div>
    );
};

export default CarDetailPage;

