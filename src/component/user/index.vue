<template>
  <div id="list" class="container">
    <div style="margin-bottom: 10px">
      <router-link to="/user/add" class="btn btn-success">添加</router-link>
    </div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for='(item,index) in json'>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="edit_url(item)">编辑</router-link>
          <router-link to="/user/delete">删除</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import url from "../../util/url.js";
  export default {
    data(){
      return {
        json: []
      }
    },
    methods: {
      edit_url(item) {
        return `/user/edit/${item.id}`
      },
    },
    mounted () {
      this.$ajax.get(url.user_index_url).then(res => {
        this.json=res.data;
      });
    },
  }
</script>

<style scoped>

</style>
