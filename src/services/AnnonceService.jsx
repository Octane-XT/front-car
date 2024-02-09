
const AnnonceService = {
    getData: async () => {
        try {
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/annoncecontroller/annonces', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    getHistorique: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/annoncecontroller/historique', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    getFav: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/favoriscontroller/favoris', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    addFavoris: async (idannonce) => {
        try {
            console.log(JSON.stringify(idannonce));
            const token = localStorage.getItem('token');
            const response = await fetch(`https://carselling-production-25cb.up.railway.app/api/favoriscontroller/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(idannonce),
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    delFavoris: async (idannonce) => {
        try {
            console.log(JSON.stringify(idannonce));
            const token = localStorage.getItem('token');
            const response = await fetch(`https://carselling-production-25cb.up.railway.app/api/favoriscontroller/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(idannonce),
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};

export default AnnonceService;
