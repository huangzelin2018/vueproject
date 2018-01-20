<template>
  <div class="container" id="edit">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" v-model="user.name" class="form-control" id="name" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="age">年龄</label>
        <input type="text" v-model="user.age" class="form-control" id="age" placeholder="年龄">
      </div>
      <div class="form-group">
        <label for="address">地址</label>
        <input type="text" v-model="user.address" class="form-control" id="address" placeholder="地址">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
  import url from "../../util/url.js";

  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      submit: function () {
        var formData = JSON.stringify(this.user); // 这里才是你的表单数据
        this.$ajax.post(url.user_add_url, formData).then(res => {
          console.log(res.data);
          // window.location.href = '/user/index';
        });
      }
    }
  }
</script>

<style scoped>

</style>
