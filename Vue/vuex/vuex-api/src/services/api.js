import { http } from "./config";

export default{

    pegar_livros:()=>{
        return http.get('books');
    },

    adicionar_livro:(data)=>{
        return http.post('books',data);
    },

}