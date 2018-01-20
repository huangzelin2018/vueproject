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
          <router-link to="/user/edit">编辑</router-link>
          <router-link to="/user/delete">删除</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        json: []
      }
    },
    methods: {
      url(item) {
        return `/detail/${item.sound.id}`
      },
    },
    mounted () {
      this.$ajax.get('http://www.tpvue.cn/index/index/index').then(res => {
        this.json=res.data;
      });
    },
  }
</script>

<style scoped>

</style>
