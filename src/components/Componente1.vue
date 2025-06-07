<template>
  <div class="contenedor">
    <ComponenteUnoUno
      v-for="(item, index) in items"
      :key="index"
      :imagen="item.imagen"
      :texto="item.texto"
    />
  </div>

  <div class="informacion">
    <ComponeneteUnoDos :perdido="perdido" :puntaje="puntaje" />
  </div>

  <div class="boton">
    <button v-on:click="consumirApi">Jugar</button>
  </div>
</template>

<script>
import ComponenteUnoUno from "@/components/ComponenteUnoUno.vue";
import { encontrarPokemonFachada } from "@/clients/pokemonClient.js";
import ComponeneteUnoDos from "@/components/ComponenteUnoDos.vue";
export default {
  components: {
    ComponenteUnoUno,
    ComponeneteUnoDos,
  },
  data() {
    return {
      items: [
        {
          imagen: "https://placehold.co/200x200/000000/000000.png",
          texto: "XXXXXXXXXX",
        },
        {
          imagen: "https://placehold.co/200x200/000000/000000.png",
          texto: "XXXXXXXXXX",
        },
        {
          imagen: "https://placehold.co/200x200/000000/000000.png",
          texto: "XXXXXXXXX",
        },
      ],

      perdido: false,
      puntaje:10
    };
  },
  methods: {
   async consumirApi() {
    const respuesta = await encontrarPokemonFachada();
    console.log(respuesta.id); 
  },
  },
};
</script>


<style>
.contenedor {
  display: flex;
  flex-direction: column;
}
.contenedor {
  display: flex;
  flex-direction: row;
  align-content: center;
  text-align: center;
  justify-content: center;
}
.boton {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-content: center;
  text-align: center;
  justify-content: center;
}
.informacion {
  border: solid black;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  justify-content: center;
  margin-top: 25px;
}
button {
    color: black;
    border: solid black;
    font-size: 15px;
    padding: 25px 35px;
}
</style>