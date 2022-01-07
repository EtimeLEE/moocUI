<template>
  <div class="m-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="m-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="m-card-summary" v-if="summary">{{ summary }}</div>
    <div class="m-card-summary" v-else>
      <slot></slot>
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "m-card",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./card.scss";
</style>