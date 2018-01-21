<template>
  <div id="list" class="container">
    <div style="margin-bottom: 10px">
      <router-link to="/user/add" class="btn btn-info">添加</router-link>
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
          <button type="button" class="btn btn-success" @click="edit_url(item)">编辑</button>
          <button type="button" class="btn btn-danger" :index="item.id" @click="delete_url(item,$event)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <mo-paging
      :page-index="currentPage"
      :total="count"
      :page-size="pageSize"
      @change="pageChange">
    </mo-paging>
  </div>
</template>

<script>
  import url from "../../util/url.js";
  import MoPaging from "../../component/public/page";
  export default {
    data() {
      return {
        pageSize : 5 , //每页显示多少条数据
        currentPage : 1, //当前页码
        count : 0, //总记录数
        json: []
      }
    },
    methods: {
      edit_url(item) {
        window.location.href = `/user/edit/${item.id}`;
      },
      delete_url: function (item, e) {
        this.$ajax.get(url.user.delete, {
          params: {
            id: item.id
          }
        }).then(res => {
          $(e.target).parents('tr').remove();
          alert('删除成功');
        });
      },
      //获取数据
      getList () {
        this.$ajax.get(url.user.index, {
          params: {
            page: this.currentPage,
            pageSize:this.pageSize
          }
        }).then(res => {
          this.json = res.data.userlist;
          this.count = res.data.count;
        });
      },
      pageChange (page) {
        this.currentPage = page;
        this.getList();
      }
    },
    mounted() {
      this.getList();
    },
    //显示的声明组件
    components : {
      MoPaging
    },
  }
</script>

<style scoped>

</style>
