<template> 
<div class="contenedor"> 
  <ComponenteUnoUno
    v-for="(items, index) in index"
    :key="index"
    :imagen="imagen.items[0]"  
    :texto ="texto.items[0]"
  />
  </div>
</template>

<script>
import ComponenteUnoUno from "@/components/ComponenteUnoUno.vue";
export default {
  components: {
    ComponenteUnoUno,
  },
  data() {
    return {
      items: [
        {
          imagen: 'https://placehold.co/200x200/000000/000000.png',
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
    };
  },
};
</script>


<style>
.contenedor{
    display:flex;
    flex-direction: column;
}
</style>