import axios from 'axios';

export async function getUsers() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export async function getUserById(userId: number) {
    try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}