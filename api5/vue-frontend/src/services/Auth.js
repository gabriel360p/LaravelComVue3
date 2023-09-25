import { http } from "./Config";
import Cookie from "js-cookie";

export default{
    login:(credentials)=>{
        return http.post('/login',{
            email:credentials.email,
            password:credentials.password,
        })
        .then(response=>{
            if(response.data.access_token!=''){
                Cookie.set('token_access',response.data.access_token);
            }
            // console.log(response.data.access_token)
            return response.data;
        })
    },

    cadastrar:(credentials)=>{
        return http.post('/register',credentials);
    }

}