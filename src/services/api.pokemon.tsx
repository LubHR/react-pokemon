import axios from "axios";
import {baseURL, urls} from "./urls";

const axiosInstant = axios.create({
    baseURL: baseURL,
})

const PokemonService = {
    getAllPokemon: async (limit: string, ofset: string) => {
        const response = await axiosInstant.get(urls.pokemon.all + '?limit=' + limit + '&ofset=' + ofset);
        return response.data
    },
}

export {PokemonService}