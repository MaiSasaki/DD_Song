<template>
  <header class="header" @click="$router.push('top')">Double Dutch Song</header>
</template>
<script>
export default {
  methods: {

  }
};
</script>
<style scoped>
.header {
  height: 64px;
  width: 100%;
  background: #fff;
  color: #EE8D72;
  font-weight: bold;
  font-size: 27px;
  text-align: center;
  line-height: 64px;
  position: fixed;
  top:0;
  z-index: 10;
}
</style>