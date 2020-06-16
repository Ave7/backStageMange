<template>
  <div class="navbar">
    <div class="navbarwrap">
      <div class="logo">
        <img src="../../assets/svg/logo.png" alt="">
      </div>
      <div class="userInfo">


        <el-dropdown trigger="click" @command="handleClick">
          <span class="el-dropdown-link">
            <img src="../../assets/svg/userimg.jpg" alt="">
            <span class="username">用户名</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-refresh-left" command="out">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>


      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Head',
    components: {
    },
    computed: {
    },
    methods: {
      handleClick(command) { //可自动获取点击的command值
        this.$message('已退出');
        console.log("点击退出");
      },
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 70px;
    position: relative;
    top: 0;
    z-index: 9999;
    background: url("../../assets/svg/bg1902.png");

    .navbarwrap {
      display: flex;

      .logo {
        flex: 8;
        display: flex;
        align-items: center;
        margin-left: 50px;
      }

      .userInfo {
        flex: 2;

        .el-dropdown-link {
          align-items: center;
          display: flex;
          .el-dropdown-menu__item {
            z-index: 999999;
          }
        }

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
        }

        .username, .el-icon--right {
          line-height: 71px;
          color: #ffffff;
          font-size: 12px;
        }
      }
    }
  }
</style>
