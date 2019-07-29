<template>
  <div>
    <el-container>
      <el-header>喵喵管理后台 欢迎 {{name}}</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo"  >
            <el-menu-item index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <router-link tag="span" to="/admin/users" slot="title">用户管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <router-link tag="span"  to="/admin/movie" slot="title">电影管理</router-link>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <router-link  tag="span"  to="/admin/cinema" slot="title">影院管理</router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
              <router-view></router-view>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      id: 1,
      name: ""
    };
  },
  mounted() {
      var name =  window.localStorage.getItem('name')
      this.name = name
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
