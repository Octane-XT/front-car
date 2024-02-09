import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Favoris',
            icon: 'pi pi-fw pi-star',
            command: () => navigate('/favoris')
        },
        {
            label: 'Historique',
            icon: 'pi pi-fw pi-clock',
            command: () => navigate('/historique')
        },
        
    ];

    const end = (
        <div>
            {localStorage.getItem('token')? (
                <div className="p-d-flex p-flex-column p-ai-end">
                    <Button label="Log Out" className="p-mt-2" onClick={handleLogout} />
                </div>
            ) : (
                <Button label="Log In" onClick={() => navigate('/login')} />
            )}
        </div>
    );

    return (
        <div>
            <Menubar model={items} end={end} />
        </div>
    );
};

export default Navbar;
