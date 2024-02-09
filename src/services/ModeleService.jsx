
const ModeleService = {
    getData: async () => {
        try {
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/modelcontroller/models', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response && response.status === 401) {
                console.log("Token expired. Removing from local storage.");
                localStorage.removeItem("token");
            }
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

export default ModeleService;
