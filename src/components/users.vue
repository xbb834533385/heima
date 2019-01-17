<template>
  <div class="user-container">
    <!-- 顶部面包屑 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <myBreadcrumb :level2="level2" :level3="level3"></myBreadcrumb>
        </div>
      </el-col>
    </el-row>
    <!-- 操纵框 -->
    <el-row  class="search">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" v-model="pageData.query">
            <template slot="append">
              <i class="el-icon-search"></i>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple search-right">
          <el-button type="success" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 用户数据 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="userList" style="width: 100%" border>
          <el-table-column label="#" width="30" type="index"></el-table-column>
          <el-table-column prop="username" label="姓名" width="180"></el-table-column>
          <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
          <el-table-column prop="mobile" label="电话" width="300"></el-table-column>
          <el-table-column prop="mg_state" label="用户状态" width="80">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" plain size="mini" icon="el-icon-edit"></el-button>
              <el-button type="danger" plain size="mini" icon="el-icon-delete"></el-button>
              <el-button type="warning" plain size="mini" icon="el-icon-check"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 底部的分页 -->
    <el-row>
      <el-col :span="24">
        <el-pagination
          :current-page="pageData.pagenum"
          :page-sizes="[2, 4, 6, 8,10]"
          :page-size="pageData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      level2: "用户管理",
      level3: "用户列表",
      pageData: {
        query: "",
        // 页面
        pagenum: 1,
        // 页容量
        pagesize: 10
      },
      total: 0,
      userList: []
    };
  },
  methods: {
    async getUsers(){
      let res = await this.$axios.get('users',{
        params:this.pageData
      });
      this.total = res.data.data.total;
      this.userList = res.data.data.users
    },
    // 页码改变
    currentChange(pagenum){
      this.pageData.pagenum = pagenum;
      // 重新获取数据
      this.getUsers();
    },
    // 改变页容量
    sizeChange(pagesize){
      // 改变页容量
      this.pageData.pagesize = pagesize;
      // 改变pagenum为第一页
      this.pageData.pagesize = pagesize;
      // 重新获取数据
      this.getUsers();
    }
  },
  async created() {
    this.getUsers();
  }
  
};
</script>

<style  lang="scss">
.search {
  height: 45px;
  line-height: 45px;
  .search-right {
    text-align: left;
  }
}
th {
  line-height: 40px;
}
</style>
