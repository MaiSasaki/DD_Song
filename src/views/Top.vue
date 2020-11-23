<template>
  <div class="top">
    <Header />
    <DataList />
    <!-- <button class="link-to-add" @click="$router.push('add')">+add</button> -->
    <button class="link-to-add" @click="$router.push('add')">
      <i
        style="margin-left: 4px; font-size: 24px"
        class="fas fa-external-link-alt"
      ></i>
    </button>
  </div>
</template>

<script>
import DataList from "../components/DataList.vue";
import Header from "../components/Header.vue";

export default {
  //コンポーネントはdataは関数
  components: {
    DataList,
    Header,
  },
};
</script>
<style scoped>
.link-to-add {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  color: #EE8D72;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #EE8D72;
  position: fixed;
  bottom: 50px;
  right: 50px;
  outline: none;
  transition: 0.4s;
}
.link-to-add:hover {
  background-color: #EE8D72;
  color: #fff;
  cursor: pointer;
}
</style>

