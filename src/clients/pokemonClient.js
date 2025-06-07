import axios from "axios";

const consumirApi = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    return respuesta.data;
}

export const encontrarPokemonFachada = async () => {
    const respuesta = await consumirApi();

    const primerPokemon = respuesta.results[0];
   
    return primerPokemon
}
