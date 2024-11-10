import axios from 'axios';

export async function getQuotes() {
    try {
        const response = await axios.get('https://dummyjson.com/quotes');
        console.log("data un services: ",response.data.quotes);
        
        return response.data.quotes;
    } catch (error) {
        console.error("Error fetching quotes:", error);
        throw error;
    }
}