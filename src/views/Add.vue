<template>
  <div class="Add">
    <Header />
    <form class="addForm" @submit.prevent="setUser">
      <h1>AddData</h1>
      <div class="items">
        <label>Area</label>
        <br />
        <!-- v-modelの値はcomputedで定義してるから使える -->
        <input type="radio" value="North" id="North" v-model="user.area" />
        <label class="area-label" for="North">North</label>
        <input type="radio" value="East" id="East" v-model="user.area" />
        <label class="area-label" for="East">East</label>
        <input type="radio" value="West" id="West" v-model="user.area" />
        <label class="area-label" for="West">West</label>
        <input type="radio" value="South" id="South" v-model="user.area" />
        <label class="area-label" for="South">South</label>
      </div>
      <div class="items">
        <label>TeamName</label>
        <br />
        <input
          type="text"
          class="add-form"
          v-model="user.team"
          placeholder="Enter TeamName"
        />
      </div>
      <div class="items">
        <label>ArtistName</label>
        <br />
        <input
          type="text"
          class="add-form"
          v-model="user.artist"
          placeholder="Enter ArtistName"
        />
      </div>
      <div class="items">
        <label>SongTitle</label>
        <br />
        <input
          type="text"
          class="add-form"
          v-model="user.song"
          placeholder="Enter SongTitle"
        />
      </div>
      <div class="items">
        <label>Move</label>
        <br />
        <input
          type="text"
          class="add-form"
          v-model="user.move"
          placeholder="Enter Move"
        />
      </div>
      <button class="link-to-top" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
  data: () => ({
    user: {
      id: 0,
      area: "",
      team: "",
      song: "",
      artist: "",
      move: "",
    },
  }),
  methods: {
    setUser() {
      this.$store.dispatch("setUser", this.user);
    },
  },
};
</script>
<style scoped>
.addForm {
  width: 500px;
  text-align: left;
  margin: auto;
  margin-top: 120px;
  background-color: #fff;
  padding: 16px 56px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
}
.addForm h1 {
  text-align: center;
  margin-bottom: 8px;
  font-size: 28px;
}
.items {
  font-size: 20px;
  margin-bottom: 10px;
  color: #3f312b;
}
.add-form {
  border-radius: 5px;
  border: 0.3px solid;
  border-color: #ee8d72;
  width: 100%;
  height: 30px;
  margin-top: 8px;
  font-size: 16px;
  padding: 4px;
  outline: none;
}
.add-form::placeholder {
  color: #ccc;
  font-size: 16px;
}
input[type="radio"] {
  margin: 8px;
}
.area-label {
  border: 1.9px solid #ee8d72;
  margin-right: 22px;
  margin-top: 8px;
  padding: 4px 9px;
  border-radius: 25px;
  display: inline-block;
  transition: 200ms all;
}
input[type="radio"] {
  display: none;
}
input:checked + label {
  color: #fff;
  background-color: #ee8d72;
}
.link-to-top {
  width: 70px;
  height: 40px;
  font-size: 15px;
  border-radius: 25px;
  background-color: #fff;
  color: #ee8d72;
  font-weight: bold;
  display: block;
  margin: auto;
  border: 2px solid #ee8d72;
  outline: none;
  transition: 0.4s;
}
.link-to-top:hover {
  background-color: #ee8d72;
  color: #fff;
  cursor: pointer;
}
</style>