<template>
  <div class="list">
    <div v-if="users.length != 0">
      <div class="area northUsers" v-if="northUsers.length != 0">
        <h1 class="data-list-title">North</h1>
        <div class="userData" v-for="user in northUsers" :key="user.id">
          <p>team:{{ user.team }}</p>
          <p>artist:{{ user.artist }}</p>
          <p>song:{{ user.song }}</p>
          <p>move:{{ user.move }}</p>
          <div class="button-wrapper">
            <DataListUpdBtn class="list-button" :passUserData="user" />
            <DataListDelBtn class="list-button" :userId="user.id" />
          </div>
        </div>
      </div>
      <div class="area eastUsers" v-if="eastUsers.length != 0">
        <h1 class="data-list-title">East</h1>
        <div class="userData" v-for="user in eastUsers" :key="user.id">
          <p>team:{{ user.team }}</p>
          <p>artist:{{ user.artist }}</p>
          <p>song:{{ user.song }}</p>
          <p>move:{{ user.move }}</p>
          <div class="button-wrapper">
            <DataListUpdBtn class="list-button" :passUserData="user" />
            <DataListDelBtn class="list-button" :userId="user.id" />
          </div>
        </div>
      </div>
      <div class="area westUsers" v-if="westUsers.length != 0">
        <h1 class="data-list-title">West</h1>
        <div class="userData" v-for="user in westUsers" :key="user.id">
          <p>team:{{ user.team }}</p>
          <p>artist:{{ user.artist }}</p>
          <p>song:{{ user.song }}</p>
          <p>move:{{ user.move }}</p>
          <div class="button-wrapper">
            <DataListUpdBtn class="list-button" :passUserData="user" />
            <DataListDelBtn class="list-button" :userId="user.id" />
          </div>
        </div>
      </div>
      <div class="area southUsers" v-if="southUsers.length != 0">
        <h1 class="data-list-title">South</h1>
        <div class="userData" v-for="user in southUsers" :key="user.id">
          <p>team:{{ user.team }}</p>
          <p>artist:{{ user.artist }}</p>
          <p>song:{{ user.song }}</p>
          <p>move:{{ user.move }}</p>
          <div class="button-wrapper">
            <DataListUpdBtn class="list-button" :passUserData="user" />
            <DataListDelBtn class="list-button" :userId="user.id" />
          </div>
        </div>
      </div>
    </div>
    <div class="no_list" v-if="users == 0">
      <p style="font-size: 30px">not users</p>
      <p style="font-weight: bold; font-size: 20px">
        データを追加するとここに表示されます
      </p>
    </div>
  </div>
</template>

<script>
import DataListDelBtn from "./DataListDelBtn";
import DataListUpdBtn from "./DataListUpdBtn";
import { mapState } from "vuex";

export default {
  components: {
    DataListDelBtn,
    DataListUpdBtn,
  },
  computed: {
    //ここでusers定義すればその後のやつはストアから呼び出さなくてもusersでいける(methodsでも使える)
    ...mapState(["users"]),
    northUsers() {
      //.filter 配列の中から条件に合ったものを選んできて新しい配列を生成する＝northUsersは配列
      return this.users.filter((user) => user.area === "North");
    },
    eastUsers() {
      return this.users.filter((user) => user.area === "East");
    },
    westUsers() {
      return this.users.filter((user) => user.area === "West");
    },
    southUsers() {
      return this.users.filter((user) => user.area === "South");
    },
  },
};
</script>

<style>
.area {
  background-color: #f0ebeb;
  border: 3.5px solid #ee8d72;
  position: relative;
  padding: 20px;
  margin: 35px;
  border-radius: 8px;
  display: inline-block;
}
.data-list-title {
  position: absolute;
  top: -20px;
  left: 30px;
  background-color: #f0ebeb;
  padding: 0 15px;
}
.no_list {
  text-align: center;
  margin: 300px 200px;
  z-index: 1;
  font-size: 30px;
  color: #bababa;
}
.no_list p {
  margin-bottom: 10px;
}
.list {
  text-align: left;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.userData {
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
</style>