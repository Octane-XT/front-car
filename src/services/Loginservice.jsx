
const LoginService = {
    check: async (email, mdp) => {
        console.log("check");
        fetch('https://carselling-production-25cb.up.railway.app/api/usercontroller/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}&mdp=${encodeURIComponent(mdp)}`,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
                }
                return response.text();
            })
            .then(token => {
                // Utilisez le token dans votre application React
                localStorage.setItem('token', token);
                console.log('Token reçu:', token);
            })
            .catch(error => {
                console.error('Erreur lors de la requête:', error);
            });
    },

    gettoken: async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/annoncecontroller/annonces', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
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
    
};

export default LoginService;
