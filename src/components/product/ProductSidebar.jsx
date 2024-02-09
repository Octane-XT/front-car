import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const ProductSidebar = ({ products, applyFilters }) => {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);

    useEffect(() => {
        applyFilters({ searchText, selectedCategory, selectedPriceRange });
    }, [searchText, selectedCategory, selectedPriceRange, applyFilters]);

    const categories = [...new Set(products.map((product) => product.category))];
    const priceRanges = [
        { label: 'Any Price', value: null },
        { label: '0 - 50', value: { min: 0, max: 50 } },
        { label: '50 - 100', value: { min: 50, max: 100 } },
        { label: '100 - 200', value: { min: 100, max: 200 } },
        { label: '200+', value: { min: 200, max: Number.POSITIVE_INFINITY } },
    ];

    return (
        <div className="sidebar">
            <InputText
                placeholder="Search Products"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="p-inputtext-sm"
            />
            <Dropdown
                optionLabel="label"
                value={selectedCategory}
                options={[{ label: 'Any Category', value: null }, ...categories.map((category) => ({ label: category, value: category }))] }
                onChange={(e) => setSelectedCategory(e.value)}
                placeholder="Select Category"
                className="p-mr-2"
            />
            <Dropdown
                optionLabel="label"
                value={selectedPriceRange}
                options={priceRanges}
                onChange={(e) => setSelectedPriceRange(e.value)}
                placeholder="Select Price Range"
                className="p-mr-2"
            />
        </div>
    );
};

export default ProductSidebar;
