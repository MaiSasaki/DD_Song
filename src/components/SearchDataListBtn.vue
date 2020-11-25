<template>
  <div class="search">
    <input
      class="data-search-box"
      type="text"
      placeholder="Search Song Name"
      v-model="searchSong"
    />
    <button @click="searchData">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    searchSong: "",
  }),
  computed: {
    ...mapState(["users"]),
    searchData() {
      return this.users.filter((user) => user.song === this.searchSong);
    },
  },
};
</script>
<style scoped>
.data-search-box {
  background-color: #ffffff;
}
</style>