//Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=5f7ec3e3b383771eda6099c788d36eec&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api