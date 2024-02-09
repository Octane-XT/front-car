import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CarItem = ({ car }) => {
  const handleDetailsClick = () => {
    // Implement your details logic here
    console.log(`Details clicked for ${car.modele.nommodel}`);
  };

  const handleAddToFavoritesClick = () => {
    // Implement your add to favorites logic here
    console.log(`Added to favorites: ${car.modele.nommodel}`);
  };

  return (
    <Card style={{ width: '350px', margin: '10px' }}>
      <Card.Img variant="top" src={car.photos} alt={car.modele.nommodel} />
      <Card.Body>
        <Card.Title>{car.modele.nommodel}</Card.Title>
        <Card.Text>
          Kilometrage: {car.kilometrage} km
          <br />
          Price: ${car.prix}
        </Card.Text>
        <div style={{ width: 'fit-content', margin: 'auto' }}>
            <Button className="mr-3" variant="primary" onClick={handleDetailsClick}>Details</Button>
            <Button variant="success" onClick={handleAddToFavoritesClick}>Add to Favorites</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CarItem;
