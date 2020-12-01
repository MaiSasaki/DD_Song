<template>
  <div class="search">
    <div class="search-form" v-if="users.length != 0">
      <p @click="searchData">
        <i class="fas fa-search"></i>
      </p>
      <input
        class="data-search-box"
        type="text"
        placeholder="Search Title"
        v-model="searchTitle"
        @input="setSearchTitle"
      />
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
.search-form {
  position: relative;
}
.data-search-box {
  background-color: #ffffff;
  margin-top: 80px;
  width: 200px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0px 38px;
  margin-left: 950px;
}
.data-search-box::placeholder {
  color: #c0c0c0;
  font-size: 15px;
}
.fa-search {
  position: absolute;
  top: 88px;
  right: 24%;
}
</style>