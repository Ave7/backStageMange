<template>
  <div>
    <div class="wrap" v-for="(item, index) in tableData" :key="index">
      <div class="circulation">
        <div class="content_wrap">
          <h4 class="title">{{item.agent_name}}</h4>
          <span class="content">{{item.agent_content}}</span>
        </div>
        <div class="userinfo">
          <span><span class="username" style="color: #555555">{{item.agent_message_id}}&nbsp;</span>发布于{{item.agent_create_time}}</span>
          <a class="look" style="color:#78A1D9" @click="checkMessage">查看详情</a>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import {getToken, getMessageList, messageDetails} from "../../api/http";

  export default {
    data() {
      return {
        // 总数据
        currentId: '', //当前id
        token: '',
        tableData: [
          // {
          //   title: "关于深入开展工程受疫情影响的法律风险排查和防控工作的通知",
          //   content: "为了更加规范集团公司各事业内部协作管理，进一步提高集团内部资源的利用效率促进各事业部协同合作，以便做好内部结算工作，现对《内部结算管理办法》(天扬字[2018]55号)部分条款进行调整。具体通知如下:一、取消源文件第九条1款和第二款内容,将第九《内部结算管理办法》(天扬字[2018]55号)",
          //   username: "乔巧",
          //   timer: "05-11 17:02"
          // }
        ]
      };
    },
    beforeCreate() {
      this.$bus.$on('getAppId', (res) => { //事件总线中获取appId
        this.currentId = res;
        console.log(this.currentId, '动态获取appid');
      });
      // this.token = sessionStorage.getItem("access_token");
      getToken().then(res => {
        this.token = res.data.access_token;
        console.log(this.token, '打印出公告页中的token');
      })
      // this.token, this.currentId = '0f844266e640b8497bc3d3c26f0f0c7e0621b6b1'需要默认等于公告页中的id
      getMessageList(this.token, this.currentId = '619c3b115368e8a6e792feebfbc91abee113d593').then(res => { //传入获取的token和获取回来的app_id
        console.log(this.currentId, '打印出当前id');
        res.data.forEach((item, index) => {
          this.tableData.push(item);
          console.log(this.tableData);
        })
      })
    },
    methods: {
      // this.$emit('getAppId', this.currentId);

      handleSizeChange(val) {
        // 改变每页显示的条数
        this.PageSize = val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage = 1
      },
      handleCurrentChange(val) {
        // 改变默认的页数
        this.currentPage = val
      },
      checkMessage() {
        messageDetails().then(res => {
          console.log(res);
        })
      }
    }
  };
</script>

<style lang="scss">
  .wrap {
    padding: 10px 20px 10px 20px;

    .content_wrap {
      padding: 10px;

      .title {
        font-weight: 500;
        color: #838383;
        font-size: 14px;
        text-align: left !important;
      }

      .content {
        color: #BABABA;
        font-size: 12px;
        text-align: left;
      }

      .look {
        float: right;
        cursor: pointer;
      }
    }

    .userinfo {
      border-top: 1px solid #DEDEDE;
      padding: 3px 20px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #9a9a9a;

      .username {
        color: #838383;
        cursor: pointer;
      }
    }

    .circulation {
      background-color: #fff;
      border: 1px solid #DEDEDE;
    }
  }
</style>
