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
    <el-row class="search">
      <el-col :span="24">
        <div class="grid-content bg-purple search-right">
          <el-button type="success" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 用户数据 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="rolesList" style="width: 100%" border>
          <el-table-column type="expand">
          <template slot-scope="props">
            <!-- 生成最左边的一级菜单栏 -->
            <el-row v-for="item in props.row.children" :key="item.id">
              <el-col :span="4">
                <el-tag closable>{{item.authName}}</el-tag>
                <i class="el-icon-arrow-right"></i>
              </el-col>
              <el-col :span="20">
                <el-row v-for="level2 in item.children" :key="level2.id">
                  <el-col :span="4">
                    <el-tag closable type="success">{{level2.authName}}</el-tag>
                    <i class="el-icon-arrow-right"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-tag colsable type="warning" v-for="level3 in level2.children" :key="level3.id">{{level3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row v-if="props.row.children.length==0">
              <el-col :span="24">暂无分配权限</el-col>
            </el-row>
          </template>
          </el-table-column>
          <el-table-column label="#" width="30" type="index"></el-table-column>
          <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
          <el-table-column prop="roleDesc" label="角色描述" width="300"></el-table-column>
          <!-- 用户操作栏 -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      level2: "权限管理",
      level3: "角色列表",

      rolesList: []
    };
  },
  async created() {
    let res = await this.$axios.get("roles");
    console.log(res.data.data);
    
    this.rolesList = res.data.data;
  }
};
</script>

<style  lang="scss" scoped>
.el-col {
  line-height: normal;
}
.el-tag {
  margin: 10px;
}

</style>
