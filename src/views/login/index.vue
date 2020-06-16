<template>
  <div class="">
    <div class="login-container">
      <div class="logo">
        <img src="../../assets/svg/logo.png" alt="">
      </div>
      <div class="bgi">
        <div class="form_menu">
          <h2>账号登录</h2>
          <el-input placeholder="手机号" v-model="userName" clearable class="phone"></el-input>
          <el-input placeholder="密码" v-model="userPassword" show-password class="pwd"></el-input>
          <div>
            <el-checkbox :v-model="this.checked" @change="changeChecked">记住密码</el-checkbox>
            <span>忘记密码</span>
          </div>
          <div class="login">
            <el-button @click="logIn">登录</el-button>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href="#">帮助中心|联系我们</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {resend} from "../../utils/securityCode";

  export default {
    name: "login",
    data() {
      return {
        userName: '',
        userPassword: '',
        checked: ''
      }
    },
    methods: {
      changeChecked() { // this.checked == true为记住密码
        this.checked = !this.checked;
        console.log(this.checked, "记住密码");
      },
      logIn() {
      }
    }
  };
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  .login-container {
    margin: 0 auto;
    height: 100vh;
    position: relative;

    .logo {
      width: 100vw;
      height: 10vh;
      background-color: #fff;
      display: flex;
      align-items: center;
      margin-left: 10vw;

      img {
      }
    }

    .form_menu {
      width: 350px;
      height: 400px;
      padding: 50px;
      margin-right: 16vw;
      background-color: #ffffff;
      margin-left: auto;
      border-radius: 3px;

      h2 {
        margin-bottom: 50px;
      }

      .phone {
        margin-bottom: 15px;
      }
    }

    .footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      line-height: 70px;
    }
  }

  .bgi {
    .login{
      el-button{
        width: 100%;
      }
    }
    display: flex;
    align-items: center;
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    background: url("../../assets/login/bgi.png") no-repeat 0 0;
    /*background-size: 100% 100%;*/
    background-size: 1536px 100%;
    background-position: center center;
  }


</style>

