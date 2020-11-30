<template>
  <div class="search-data-list">
    <p>検索ワード： {{ searchTitle }}</p>
    <div v-for="user in searchList" :key="user.id">
      <p>team:{{ user.team }}</p>
      <p>artist:{{ user.artist }}</p>
      <p>song:{{ user.song }}</p>
      <p>move:{{ user.move }}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["users", "searchTitle"]),
    searchList() {
      return this.users.filter((user) => user.song === this.searchTitle);
    },
  },
};
</script>
<style scoped>
</style>