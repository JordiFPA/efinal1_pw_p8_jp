<template>
  <div v-if="perdido" class="mensaje_perdio">
    <p >Haz utilizado tus 5 intentos</p>
    <p>El juego a terminado, intentelo otra vez</p>
  </div>

  <div v-show="!perdido" class="mensaje_gano"></div>
  <p>Tu puntaje fue {{puntaje }}</p>
  <p>Felicidades haz ganado un premio de 100000$</p>
</template>

<script>
export default {
  props: {
    perdido: {
      type: Boolean,
      default: false,
    },
    puntaje: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.mensaje_perdio {
    color: red;
    font-size: 15px;
}
.mensaje_gano{
    color: blue;
    font-size: 15px;
}


</style>