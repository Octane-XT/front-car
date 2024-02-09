import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AnnonceService from '../../services/AnnonceService';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';

export default function Product({ products }) {
    const [layout] = useState('grid');
    
    const navigate = useNavigate();

    const navigateToProductDetail = (product) => {

        navigate(`/detail`, { state: { product } });
    };

    const addFavoris = (product) => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate(`/login`);
        }else{
            AnnonceService.addFavoris(product);
        }
        
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.modele.categorie.nomcategorie}</span>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        {product.photos && product.photos.length > 0 ? (
                            <img
                                src={product.photos[0]}
                                alt={product.modele ? product.modele.nommodel : 'No Model'}
                                style={{ width: '200px', height: '100px', objectFit: 'cover' }}
                            />
                        ) : (
                            <span>No photos available</span>
                        )}
                        <div className="text-2xl font-bold">{product.modele.marque.nommarque + " " + product.modele.nommodel}</div>
                        <div className="">{"Kilometrage : " + product.kilometrage+ " Km"}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <Button icon="pi pi-star" className="p-button-rounded" onClick={() => addFavoris(product)} ></Button>
                        <span className="text-2xl font-semibold">${product.prix}</span>
                        <Button icon="pi pi-send" className="p-button-rounded" onClick={() => navigateToProductDetail(product)} ></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (layout === 'grid') return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    return (
        
        <div style={{ width: "1000px", margin: 'auto' }}>
                    <DataView value={products} listTemplate={listTemplate} layout={layout} paginator rows={6} />
                </div>
            
    );
}
