// import { Product } from "../interfaces/Product";

const retrieveProducts = async () => {
    try {
        const response = await fetch('/api/products', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid user API response, check network tab');
        }

        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return[];
    }
}

export { retrieveProducts };