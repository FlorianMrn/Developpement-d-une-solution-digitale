import { axiosInstance } from './instance';
import jwtDecode from "jwt-decode";
import qs from "qs";

export async function getHistorique() {

  const token = localStorage.getItem("access_token");
  const { id } = jwtDecode(token);
  const num = id.toString();

  let datas = qs.stringify({
    "id": num
  });
    
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}historique/obtain/`,
    headers: { 
      'Authorization': `Token ${token}`, 
      'Content-Type': 'application/x-www-form-urlencoded'
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

export async function historiqueFollowAdd(data) {

    const token = localStorage.getItem("access_token");
    const { id } = jwtDecode(token);

    let datas = {
        "id": id,
        "name": data.select,
        "quantite": parseInt(data.quantite),
        "prix" : parseInt(data.prix)
    };
      
      let config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}historique/followadd/`,
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

export async function historiqueFollowSuppr(data) {

    const token = localStorage.getItem("access_token");
    const { id } = jwtDecode(token);

    let datas = {
        "id": id,
        "name": data.name,
        "quantite": parseInt(data.quantite),
        "prix" : parseInt(data.prix)
    };
      
      let config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}historique/followsuppr/`,
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