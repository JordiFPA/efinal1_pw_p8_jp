import axios from "axios"; 

const consumirApi = async () => { 
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/").then(r => r.data); 
    return respuesta; 
}

const encontrarPokemon = async () => { 
    const respuesta = consumirApi(); 
    const pokemon = respuesta.results[0]; 

    const pokemonOConsumuir = { 
        name : pokemon.name, 


    }
}