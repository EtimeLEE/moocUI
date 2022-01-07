<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <demo />
    <m-card imgSrc="" summary="summary22222222222222222222222" :width="500" />
    <m-card imgSrc="" summary="1111111111" :imgHeight="200">
      <template v-slot:footer>footer</template>
    </m-card>


    <m-card imgSrc="" :imgHeight="200">
      666666
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
