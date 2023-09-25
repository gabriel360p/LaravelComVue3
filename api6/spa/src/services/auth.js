import { http } from "./config";
import Cookies from "js-cookie";

export default{

    login:(credentials)=>{

    return http.post('/login', {
      email: credentials.email,
      password: credentials.password
    })
    .then(response => {
        if (response.data.access_token!='') {
          Cookies.set('_AuthTokenAccess_',response.data.access_token);
      }
        return response.data;
        });
    },

    register:(credentials)=>{
        return http.post('/register',credentials)
    }
}