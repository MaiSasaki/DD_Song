<template>
  <div>
    <p class="delete-data" @click="deleteData">
      <i class="fas fa-trash-alt"></i>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  //props親からもらったデータを受け取る場所
  props: ["userId"], //選んだユーザー情報のid(添字ではない)
  computed: {
    //returnした値をそのままdataみたいに使える
    ...mapState(["users"]),
  },
  methods: {
    deleteData() {
      //usersの一個一個をuserに入れて、そのuserのidとlistから選んだuserIdが同じ奴の添字をindexに代入
      const index = this.users.findIndex((user) => user.id == this.userId);
      this.users.splice(index,1)
    },
  },
};
</script>
<style scoped>
.delete-data {
  border: none;
  outline: none;
}
.fa-trash-alt{
  background-color: #ffffff;
  /* border: none; */
}
</style>