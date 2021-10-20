import axios from 'axios';

export async function getCryptosListings() {

    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}cryptos/listings/`,
        headers: { }
      };
      
      
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};