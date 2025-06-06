<template>
  <div>
    <img :src="imagen" alt="no hay" /> 
    <p>{{texto}} </p>
  </div>
</template>

<script>
export default {
  data(){ 
    return {
      imagen:{ 
        type: String, 
      },
      texto:{
        type:String
      }


    }
  }
};
</script>

<style>
</style>