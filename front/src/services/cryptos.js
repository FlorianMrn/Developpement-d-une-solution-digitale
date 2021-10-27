import axios from 'axios';
import { axiosInstance } from './instance';
import jwtDecode from "jwt-decode";

export async function getCryptosListings() {


    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}cryptos/listings/`,
        headers: {}
    };
      
      
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export async function deleteCryptos(data) {

    const token = localStorage.getItem("access_token");
    const { id } = jwtDecode(token);

    let datas = {
        "id": id,
        "name": data.select,
        "quantite": parseInt(data.quantite)
      };
      
      let config = {
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}cryptos/change/`,
        headers: { 
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
        },
        data : datas
      };
      
      try {
          const response = await axiosInstance(config);
          return response.data;
      } catch(error) {
        console.log(error);
      }

    

    
};

export async function updateCryptos(data) {

    const token = localStorage.getItem("access_token");
    const { id } = jwtDecode(token);

    let datas = {
      "id": id,
      "name": data.select,
      "quantite": parseInt(data.quantite),
      "prix" : parseInt(data.prix)
    };
      
      let config = {
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}cryptos/change/`,
        headers: { 
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
        },
        data : datas
      };
      
      try {
          const response = await axiosInstance(config);
          return response.data;
      } catch(error) {
        console.log(error);
      }

    
};