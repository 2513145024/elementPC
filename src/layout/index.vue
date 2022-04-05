<template>
  <div id="layout">
    <el-container>
      <!--侧边栏区域-->
      <AppAside></AppAside>
      <el-container>
        <!--头部区域-->
        <el-header>
          <app-header></app-header>
        </el-header>
        <!--主体内容区域-->
        <app-main></app-main>
        <!--底部区域-->
        <AppFooter></AppFooter>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppMain from "@/layout/AppMain";
import AppFooter from "@/layout/AppFooter";
import AppHeader from "@/layout/AppHeader";
import AppAside from "@/layout/AppAside";

export default {
  name: "layout",
  components: {AppMain, AppFooter, AppHeader, AppAside},

}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #211f1f;
  color: #fff;
  text-align: center;

}




body > .el-container {
  margin-bottom: 40px;
  height: 100vh;
}
.el-container{
  height: 100vh;
  margin-bottom: 40px;
}
#layout{
  height: 100vh;
}
</style>
