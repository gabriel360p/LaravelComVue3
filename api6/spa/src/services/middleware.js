import Cookies from "js-cookie";

export default{

    //funcionou!
    guard(to, from, next){
        const access_token_auth=Cookies.get('_AuthTokenAccess_');
        console.log(access_token_auth);

        if(!access_token_auth){
            next('/login');
        }
        
        next();
    },

}