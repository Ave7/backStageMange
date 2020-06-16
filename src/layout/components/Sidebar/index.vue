<template>
  <div class="NavMenu">
    <div class="SubMenu wraps">
      <ul>
        <li class="arrow">
          <div>
            <div class="xiaoxi"></div>
            <div class="text">消息</div>
          </div>
          <ul>
            <li v-for="(item,index) in newData" :key="index" @click="skipRouter(index)">
              <router-link to="/material/notice">
                <img src="../../../assets/svg/youjian.png" alt="">
                <span class="submenu">{{item.app_name}}</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="arrow">
          <div>
            <div class="yingyong"></div>
            <div class="text">应用中心</div>
          </div>
          <ul>
            <li>
              <router-link to="">
                <img src="" alt="">
                <span class="submenu">链接1</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="arrow">
          <div>
            <div class="tongxunlu"></div>
            <div class="text">通讯录</div>
          </div>
          <ul>
            <li>
              <router-link to="">
                <img src="" alt="">
                <span class="submenu">链接1</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="arrow location">
            <div @click="toSetting">
              <div class="setup"></div>
              <div class="text">设置</div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Logo from './Logo'
  import SidebarItem from './SidebarItem'
  import variables from '@/styles/variables.scss'
  import '../../../assets/font/iconfont.css'
  import {getNavData, getToken} from "../../../api/http";

  export default {
    name: 'index',
    data() {
      return {
        newData: [],
        currentId: ''
      };
    },
    beforeCreate() {
    },
    created() {
      getToken().then(res => {
        // sessionStorage.setItem("access_token", res.data.access_token); 将token存入sessionStorage中
        // this.token = res.data.access_token ;
        // console.log(sessionStorage.getItem("access_token"), '从sessionStorage获取token');
        console.log(res.data.access_token, '导航中的token');
        this.token = res.data.access_token;
      })
      getNavData(this.token).then(res => {
        this.newData = res.data;
        // res.data[0].imgUrl = '../../../assets/svg/gonggao.png';
        // console.log('导航统计本人所有应用信息和应用下的待办数');
      })
    },
    methods: {
      skipRouter(index) {//点击子导航后
        getToken()
        this.currentId = this.newData[index].app_id;
        this.$bus.$emit('getAppId', this.currentId); //向事件总线发送值
        if (index === 0) {//判断并路由跳转
          this.$router.push('/material/notice')
        } else if (index === 1) {
          this.$router.push('/material/mail')
        } else if (index === 2) {
          this.$router.push('/material/official')
        } else if (index === 3) {
          this.$router.push('/material/budget')
        } else if (index === 4) {
          this.$router.push('/material/epc')
        } else if (index === 5) {
          this.$router.push('/material/law')
        }
      },
      toSetting(){
        console.log("点击事件");
        this.$router.push('/setting')
      }
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::after {
    box-sizing: border-box;
  }

  *::before {
    box-sizing: border-box;
  }

  body {
    font: 14px/150% microsoft yahei, Tahoma, Arial;
    text-align: center;
    text-size-adjust: 100%;
    min-width: 320px;
    margin: 0;
  }

  .arrow div {
    text-align: center;
  }

  .arrow:hover > div > div {
    color: #4A82CD;
  }

  .arrow .iconfont {
    margin-bottom: -10px;
  }

  .arrow img {
    margin: 0 auto;
  }

  .arrow ul li {
    height: 50px;
  }

  a {
    outline: none;
    text-decoration: none;
    transition: 0.2s;
  }

  .arrow div {
    color: #999999;
  }

  .xiaoxi {
    height: 30px;
    background: url("../../../assets/svg/message.png") no-repeat center;
  }

  .yingyong {
    height: 30px;
    background: url("../../../assets/svg/manage.png") no-repeat center;
  }

  .tongxunlu {
    height: 30px;
    background: url("../../../assets/svg/addressbook.png") no-repeat center;
  }

  .setup {
    height: 30px;
    background: url("../../../assets/svg/setup.png") no-repeat center;
  }

  .location {
    position: absolute;
    width: 100%;
    bottom: 20px;
  }

  .NavMenu .SubMenu li:hover .xiaoxi {
    background: url("../../../assets/svg/message_fill.png") no-repeat center
  }

  .NavMenu .SubMenu li:hover .yingyong {
    background: url("../../../assets/svg/manage_fill.png") no-repeat center
  }

  .NavMenu .SubMenu li:hover .tongxunlu {
    background: url("../../../assets/svg/addressbook_fill.png") no-repeat center
  }

  .NavMenu .SubMenu li:hover .setup {
    background: url("../../../assets/svg/setup_fill.png") no-repeat center
  }

  .text {
    line-height: 24px;
  }

  .wraps {
    position: relative;
  }

  .seting {
    position: absolute;
    bottom: 20px;
    width: 100%;
    border: 0 !important;
  }

  ::-webkit-scrollbar { /*Chrome适用*/
    width: 10px;
    height: 1px;
  }

  ::-webkit-scrollbar-thumb { /*滚动条*/
    border-radius: 10px;
    background: #959da9;
  }

  ::-webkit-scrollbar-track { /*滚动条里面轨道*/
    border-radius: 10px;
    background: #dce1e6;
    opacity: 0.7;
  }

  img {
    border: none
  }

  input, select, textarea {
    font-family: microsoft yahei, Helvetica, Tahoma, Arial, sans-serif;
    outline: none;
    border: none;
    background: #e9eef2;
  }

  .NavMenu:hover {
    background-color: #FF7800;
  }

  .NavMenu .SubMenu { /*子菜单*/
    border-right: 1px solid rgba(120, 130, 150, .2);
    width: 75px;
    background: #ffffff;
    position: absolute;
    top: 48px;
    bottom: 0;
    left: -210px;
    animation: fadeIn 0.2s;
    transition: 0.2s;
  }

  .NavMenu .SubMenu {
    left: 0;
    top: 0;
    transition: 0.2s;
    z-index: 10;
    height: 100%;
  }

  .NavMenu:hover .SubMenu:before,
  .NavMenu:hover .SubMenu ul:before { /*加大甜区*/
    content: "";
    position: absolute;
    width: 100%;
    left: 210px;
    bottom: 0;
    top: 0;
  }

  .NavMenu .SubMenu ul {
    padding: 70px 0 0 0;
  }

  .NavMenu .SubMenu li {
    line-height: 36px;
    text-align: left;
    list-style: none
  }

  .NavMenu .SubMenu li a {
    color: #343434;
    line-height: 48px;
  }

  .NavMenu .SubMenu .arrow {
    background-size: 14px;
    transition: 0.2s
  }

  .NavMenu .SubMenu a {
    width: 100%;
    height: 100%;
    display: block;
    padding-left: 25px
  }

  .arrow {
    margin: 30px 0;
  }

  .arrow > ul > li img {
    vertical-align: middle;
    font-size: 0;
    margin-top: -3px;
    margin-right: 10px;
  }

  .arrow > ul > li span {
    font-size: 13px;
  }

  .arrow ul li:hover {
    border: 0 !important;
    background-color: #F5F5F5;
  }

  .NavMenu .SubMenu li:hover {
    border-left: 2px solid #20a0ff;
  }

  .NavMenu .SubMenu li ul { /*二级菜单*/
    border-right: 1px solid rgba(120, 130, 150, .2);
    box-shadow: 0 0 10px rgba(120, 130, 150, .1);
    background: #ffffff;
    top: 0;
    bottom: 0;
    left: 75px;
    width: 180px;
    position: absolute;
    display: none;
    transition: 0.2s
  }

  .NavMenu .SubMenu li:hover ul {
    animation: fadeIn2 0.2s;
    display: block
  }

  .NavMenu .SubMenu .PopMenu ul {
    background: none;
    border: none;
    box-shadow: none;
    position: relative;
    left: 0;
  }

  .NavMenu .SubMenu .PopMenu a {
    height: 32px;
    text-indent: 2em
  }

  @keyframes fadeIn {
    0% {
      transform: translate3d(-100%, 0, 0)
    }
    to {
      transform: none
    }
  }

  @keyframes fadeInX {
    0% {
      transform: translate3d(0, 10%, 0)
    }
    to {
      transform: none
    }
  }

  @keyframes fadeIn2 {
    50% {
      transform: translate3d(-10%, 0, 0);
    }
    to {
      transform: none;
    }
  }
</style>
