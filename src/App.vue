<template>
  <div id="container" style="margin: 30px;">
    <ul class="nav nav-pills">
      <li role="presentation" class="active"><a href="/">Home</a></li>
      <li role="presentation">
        <router-link to="/user/index">用户管理</router-link>
      </li>
    </ul>
    <div style="margin-top: 20px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'container'
  }
</script>
