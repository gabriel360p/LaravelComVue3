// falta só o middleware, proteger as rotas!!
import Cookie from "js-cookie";

export default{
    guard(to,from,next){
        const token = Cookie.get('token_access');

        if(!token){
            next('/login')
        }

        next();
    }
}