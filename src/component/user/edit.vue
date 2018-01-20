<template>
  <div  class="container" id="edit">
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" :value=" json.name " class="form-control" id="name" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="age">年龄</label>
        <input type="text" :value=" json.age " class="form-control" id="age" placeholder="年龄">
      </div>
      <div class="form-group">
        <label for="address">地址</label>
        <input type="text" :value=" json.address " class="form-control" id="address" placeholder="地址">
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
        json: {}
      }
    },
    mounted: function () {
      this.$ajax.get(url.user_edit_url, {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
          this.json = res.data;
        });
    }
  }
</script>

<style scoped>

</style>
