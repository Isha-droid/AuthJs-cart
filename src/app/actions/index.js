"use server";

export async function fetchAllProducts() {
    try {
        // Define the URL for the GET request
        const url = 'https://dummyjson.com/products';

        // Perform the fetch request
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return {
            success: true,
            data: data?.products
        };
    } catch (error) {
        console.error('Failed to fetch products:', error);

        return {
            success: false,
            message: 'Some error occurred',
            error: error.message // Include the error message
        };
    }
}
