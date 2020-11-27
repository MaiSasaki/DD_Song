<template>
  <div class="top">
    <Header />
    <SearchDataListForm :title="searchSongTitle" />
    <!--SearchDataListに検索ワードがあったらsearchDataListを表示-->
    <!-- <component :is="currentView"></component> -->
    <DataList />
    <button class="link-to-add" @click="$router.push('add')">
      <i
        style="margin-left: 4px; font-size: 24px"
        class="fas fa-external-link-alt"
      ></i>
    </button>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SearchDataListForm from "../components/SearchDataListForm.vue";
import DataList from "../components/DataList.vue";
// import SearchDataList from "../components/SearchDataList.vue";
import { mapState } from "vuex";

export default {
  //コンポーネントはdataは関数
  components: {
    Header,
    SearchDataListForm,
    DataList,
    // SearchDataList,
  },
  data: () => ({
    searchSongTitle: "",
  }),
  computed: {
    ...mapState(["users"]),
    currentView() {
      if (this.users.length != 0) {
        return "DataList";
      } else {
        return "";
      }
    },
  },
};
</script>
<style scoped>
.link-to-add {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  color: #ee8d72;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #ee8d72;
  position: fixed;
  bottom: 50px;
  right: 50px;
  outline: none;
  transition: 0.4s;
}
.link-to-add:hover {
  background-color: #ee8d72;
  color: #fff;
  cursor: pointer;
}
</style>

