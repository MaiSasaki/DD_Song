<template>
  <div class="search">
    <div v-if="users.length != 0">
      <input
        class="data-search-box"
        type="text"
        placeholder="Search Song Name"
        v-model="searchTitle"
        @input="searchSong"
      />
      <button @click="searchData">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title"],
  data: () => ({
    songTitle: this.title 
  }),
  computed: {
    ...mapState(["users"]),
    // searchData() {
    //   return this.users.filter((user) => user.song === this.searchSong);
    // },
  },
};
</script>
<style scoped>
.data-search-box {
  background-color: #ffffff;
  margin-top: 100px;
}
</style>