<template>
  <div>
    <p class="update-data" @click="displayFlag = !displayFlag">
      <i class="fas fa-pencil-alt"></i>
    </p>
    <div v-show="displayFlag">
      <div class="overlay"></div>
      <div class="update-form_wrapper">
        <form class="update-form" id="update" @submit.prevent="updData">
          <h1>UpdateData</h1>
          <div class="items">
            <label>Area</label>
            <br /> <!--各要素のvalueとv-modelで指定したプロパティの値が-->
            <input
              type="radio"
              name="area_select"
              v-model="updUserData.area"
              id="North"
              value="North"
            />
            <label class="area-label" for="North">North</label>
            <input
              type="radio"
              name="area_select"
              v-model="updUserData.area"
              id="East"
              value="East"
            />
            <label class="area-label" for="East">East</label>
            <input
              type="radio"
              name="area_select"
              v-model="updUserData.area"
              id="West"
              value="West"
            />
            <label class="area-label" for="West">West</label>
            <input
              type="radio"
              name="area_select"
              v-model="updUserData.area"
              id="South"
              value="South"
            />
            <label class="area-label" for="South">South</label>
          </div>
          <div class="items">
            <label>TeamName</label>
            <br />
            <input type="text" required class="update-form" v-model="updUserData.team" />
          </div>
          <div class="items">
            <label>ArtistName</label>
            <br />
            <input type="text" class="update-form" v-model="updUserData.artist" />
          </div>
          <div class="items">
            <label>SongTitle</label>
            <br />
            <input type="text" class="update-form" v-model="updUserData.song" />
          </div>
          <div class="items">
            <label>Move</label>
            <br />
            <input type="text" class="update-form" v-model="updUserData.move" />
          </div>
          <button
            class="submit-update-data"
            type="submit"
            form="update"
            @click="displayFlag = !displayFlag"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["passUserData"], //入ってるのは選択したリストのid,area,team,song,artist,move
  data: () => ({
    displayFlag: false,
  }),
  computed: {
    updUserData() {
      return Object.assign({}, this.passUserData);
    },
  },
  methods: {
    updData() {
      this.$store.dispatch("updData", this.updUserData);
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
}
.update-form_wrapper {
  text-align: left;
}
.update-form {
  z-index: 1000;
  width: 500px;
  height: 530px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -265px;
  padding: 16px 56px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
}
.update-form h1 {
  text-align: center;
  margin-bottom: 8px;
  font-size: 28px;
}
.items {
  font-size: 20px;
  margin-bottom: 8px;
  color: #3f312b;
}
.update-form {
  border-radius: 5px;
  border: 0.3px solid;
  border-color: #EE8D72;
  width: 100%;
  height: 30px;
  margin-top: 4px;
  font-size: 16px;
  padding: 4px;
  outline: none;
}
.update-form::placeholder {
  color: #ccc;
  font-size: 16px;
}
input[type="radio"] {
  margin: 8px;
}
.area-label {
  border: 1.9px solid #EE8D72;
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
  background-color: #EE8D72;
}
.submit-update-data {
  width: 70px;
  height: 40px;
  font-size: 15px;
  border-radius: 25px;
  background-color: #fff;
  color: #EE8D72;
  font-weight: bold;
  display: block;
  margin: auto;
  border: 2px solid #EE8D72;
  outline: none;
  transition: 0.4s;
}
.submit-update-data:hover {
  background-color: #EE8D72;
  color: #fff;
  cursor: pointer;
}
.update-data {
  border: none;
  outline: none;
}
.fas {
  font-size: 20px;
}
.fa-pencil-alt {
  background-color: #ffffff;
}
.fa-pencil-alt:hover {
  cursor: pointer;
}
</style>