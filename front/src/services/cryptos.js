import axios from 'axios';

export async function getCryptosListings() {

    let config = {
        method: 'get',
        url: 'http://localhost:8000/cryptos/listings/',
        headers: { }
      };
      
      
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};