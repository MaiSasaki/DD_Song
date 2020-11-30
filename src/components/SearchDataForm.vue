<template>
  <div class="search">
    <div v-if="users.length != 0">
      <input
        class="data-search-box"
        type="text"
        placeholder="Search SongTitle"
        v-model="searchTitle"
        @input="setSearchTitle"
      />
      <p @click="searchData">
        <i class="fas fa-search"></i>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    searchTitle: "",
  }),
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    setSearchTitle() {
      this.$store.dispatch("setSearchTitle", this.searchTitle);
    },
  },
};
</script>
<style scoped>
.data-search-box {
  background-color: #ffffff;
  margin-top: 100px;
  width: 250px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 4px;
}
</style>