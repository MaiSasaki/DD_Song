<template>
  <div class="search-data-list">
    <p class="disp-search-word">Search word： {{ searchTitle }}</p>
    <div class="area" v-if="NorthSearchList.length != 0">
      <h1 class="search-list-title">North</h1>
      <div class="search-data" v-for="user in NorthSearchList" :key="user.id">
        <p>team:{{ user.team }}</p>
        <p>artist:{{ user.artist }}</p>
        <p>song:{{ user.song }}</p>
        <p>move:{{ user.move }}</p>
      </div>
    </div>
    <div class="area" v-if="EastSearchList.length != 0">
      <h1 class="search-list-title">East</h1>
      <div class="search-data" v-for="user in EastSearchList" :key="user.id">
        <p>team:{{ user.team }}</p>
        <p>artist:{{ user.artist }}</p>
        <p>song:{{ user.song }}</p>
        <p>move:{{ user.move }}</p>
      </div>
    </div>
    <div class="area" v-if="WestSearchList.length != 0">
      <h1 class="search-list-title">West</h1>
      <div class="search-data" v-for="user in WestSearchList" :key="user.id">
        <p>team:{{ user.team }}</p>
        <p>artist:{{ user.artist }}</p>
        <p>song:{{ user.song }}</p>
        <p>move:{{ user.move }}</p>
      </div>
    </div>
    <div class="area" v-if="SouthSearchList.length != 0">
      <h1 class="search-list-title">South</h1>
      <div class="search-data" v-for="user in SouthSearchList" :key="user.id">
        <p>team:{{ user.team }}</p>
        <p>artist:{{ user.artist }}</p>
        <p>song:{{ user.song }}</p>
        <p>move:{{ user.move }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["users", "searchTitle"]),
    NorthSearchList() {
      return this.users.filter(
        (user) => user.song === this.searchTitle && user.area === "North"
      );
    },
    EastSearchList() {
      return this.users.filter(
        (user) => user.song === this.searchTitle && user.area === "East"
      );
    },
    WestSearchList() {
      return this.users.filter(
        (user) => user.song === this.searchTitle && user.area === "West"
      );
    },
    SouthSearchList() {
      return this.users.filter(
        (user) => user.song === this.searchTitle && user.area === "South"
      );
    },
  },
};
</script>
<style scoped>
.area {
  background-color: #f0ebeb;
  border: 3.5px solid #ee8d72;
  position: relative;
  padding: 20px;
  margin: 35px;
  border-radius: 8px;
  display: inline-block;
}
.search-list-title {
  position: absolute;
  top: -20px;
  left: 30px;
  background-color: #f0ebeb;
  padding: 0 15px;
}
.search-data-list {
  text-align: left;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.search-data {
  display: inline-block;
  width: 200px;
  height: 180px;
  border: none;
  background-color: #ffffff;
  padding: 3px 10px;
  font-size: 18px;
  line-height: 30px;
  border-radius: 8px;
  margin: 8px 8px;
}
.button-wrapper {
  display: flex;
}
.list-button {
  font-size: 10px;
  margin: 0px 5px;
}
.fas {
  font-size: 1.4em;
}
.disp-search-word {
  font-size: 20px;
}
</style>