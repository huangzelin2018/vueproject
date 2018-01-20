<template>
  <div class="container" id="edit">
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="age">年龄</label>
        <input type="text" class="form-control" id="age" placeholder="年龄">
      </div>
      <div class="form-group">
        <label for="address">地址</label>
        <input type="text" class="form-control" id="address" placeholder="地址">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "edit"
  }
</script>

<style scoped>

</style>
