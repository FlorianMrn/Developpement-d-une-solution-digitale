import axios from "axios";
import qs from 'qs';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem("access_token"),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
        console.log("wehs", error.response.status)
      if (error.response) {

        if (error.response.status === 401) {

            const originalRequest = error.config;
            const refresh_token = localStorage.getItem('refresh_token');

            let data = qs.stringify({
                'refresh': refresh_token 
              });
              let config = {
                method: 'post',
                url: 'http://localhost:8000/api/token/refresh/',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
              };
              
              axios(config)
              .then((response) => {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);

                axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
                originalRequest.headers['Authorization'] = "Bearer " + response.data.access;

                return axiosInstance(originalRequest);
              })
              .catch((error) => {
                return Promise.reject(error);
              });

        }
  
        if (error.response.status !== 401) {

          return Promise.reject(error.response.data);
        }
      }
  
      return Promise.reject(error);
    }
);
