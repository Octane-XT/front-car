import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const CarDetail = ({ product }) => {
    const navigate = useNavigate();

    const carImages = product.photos.map((photo, index) => ({
        source: photo,
        alt: `Car Image ${index + 1}`,
    }));

    const handleContact = async (product) => {
        try {
            const response = await fetch(`https://carselling-production-25cb.up.railway.app/api/messagecontroller/saveIdannonce/${product._id}`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            // Move the navigate call outside of the return statement
            navigate(`/message/0`);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const carTemplate = (carImage) => (
        <div>
            <img src={carImage.source} alt={carImage.alt} className="carousel-image" style={{ width: '100%' }} />
        </div>
    );

    return (
        <div className="car-container" style={{ width: "960px", margin: 'auto', objectFit: 'cover' }}>
            <div className="car-carousel">
                <Carousel value={carImages} itemTemplate={carTemplate} />
            </div>
            <div className="car-info">
                <h2>{product.modele.marque.nommarque} {product.modele.nommodel}</h2>
                <p>{product.description}</p>
                <p>Carburant : {product.modele.carburant.nomcarburant}</p>
                <p>Vitesse : {product.modele.vitesse.nomvitesse}</p>
                <p>Kilometrage : {product.kilometrage} km</p>
                <p>Moteur : {product.moteur.nom}</p>
                <p>Price : {product.prix}$</p>
                <Button icon='pi pi-send' className='btndet' onClick={() => handleContact(product)}> Contacter</Button>
            </div>
        </div>
    );
};

export default CarDetail;
