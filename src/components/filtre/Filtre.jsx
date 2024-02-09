// Filtre.js
import React, { useState, useEffect } from 'react';
import ModeleService from '../../services/ModeleService';
import MarqueService from '../../services/MarqueService';
import CategorieService from '../../services/CategorieService';
import './Filtre.css';

const Filtre = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        idModel: '',  
        idCategorie: '',  
        idMarque: '',
        prix1: '',
        prix2: '',
        date1: '',
        date2: '',
    });

    const [modelOptions, setModelOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [brandOptions, setBrandOptions] = useState([]);

    const fetchModel = async () => {
        try {
            const fetchedData = await ModeleService.getData();
            setModelOptions(fetchedData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const fetchCat = async () => {
        try {
            const fetchedData = await CategorieService.getData();
            setCategoryOptions(fetchedData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const fetchBrand = async () => {
        try {
            const fetchedData = await MarqueService.getData();
            setBrandOptions(fetchedData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        fetchModel();
        fetchCat();
        fetchBrand();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ((formData.prix1 !== null && formData.prix2 === null) || formData.prix2 === '') {
            formData.prix2 = formData.prix1;
        } else if ((formData.prix2 !== null && formData.prix1 === null) || formData.prix1 === '') {
            formData.prix1 = formData.prix2;
        }

        if ((formData.date1 !== null && formData.date2 === null) || formData.date2 === '') {
            formData.date2 = formData.date1;
        } else if ((formData.date2 !== null && formData.date1 === null) || formData.date1 === '') {
            formData.date1 = formData.date2;
        }

        console.log(JSON.stringify(formData));
        try {
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/recherchecontroller/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            // Pass the filtered data to the parent component
            onSubmit(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error if needed
        }
    };

    return (
        <div>
            <h3>Filtre : </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <select
                        name="idModel"
                        value={formData.idModel}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    >
                        <option value="">Select Modele</option>
                        {modelOptions.map((option) => (
                            <option key={option.idmodel} value={option.idmodel}>
                                {option.nommodel}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        name="idCategorie"
                        value={formData.idCategorie}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    >
                        <option value="">Select Categorie</option>
                        {categoryOptions.map((option) => (
                            <option key={option.idcategorie} value={option.idcategorie}>
                                {option.nomcategorie}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        name="idMarque"
                        value={formData.idMarque}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    >
                        <option value="">Select Marque</option>
                        {brandOptions.map((option) => (
                            <option key={option.idmarque} value={option.idmarque}>
                                {option.nommarque}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Min Prix:</label>
                    <input
                        type="number"
                        name="prix1"
                        value={formData.prix1}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    />
                </div>
                <div>
                    <label>Max Prix:</label>
                    <input
                        type="number"
                        name="prix2"
                        value={formData.prix2}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    />
                </div>
                <div>
                    <label>Min Date:</label>
                    <input
                        type="date"
                        name="date1"
                        value={formData.date1}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    />
                </div>
                <div>
                    <label>Max Date:</label>
                    <input
                        type="date"
                        name="date2"
                        value={formData.date2}
                        onChange={(e) => handleChange(e)}
                        className="input-filtre"
                    />
                </div>
                <button className="btn-filtre mt-2" type="submit">Valider</button>
            </form>
        </div>
    );
};

export default Filtre;
