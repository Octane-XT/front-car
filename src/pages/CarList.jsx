import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Container, Row } from 'react-bootstrap';
import CarItem from '../components/product/CarItem';
import Hero from '../components/Hero/Hero';
import AnnonceService from '../services/AnnonceService';

const CarList = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        // Fetch data using AnnonceService.getData()
        AnnonceService.getData().then((data) => {
            // Update the state with the fetched data
            setCarData(data);
        });
    }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {carData.map((carDat) => (
          <CarItem key={carDat._id.timestamp} car={carDat} />
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
