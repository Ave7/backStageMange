<template>
  <div>

  </div>
</template>

<script>
  import {getToken, getMessageList} from "../../api/http";

  export default {
    data() {
      return {
        // 总数据
        currentId: '', //当前id
        token: '',
        tableData: [
          {
            title: "关于深入开展工程受疫情影响的法律风险排查和防控工作的通知",
            content: "为了更加规范集团公司各事业内部协作管理，进一步提高集团内部资源的利用效率促进各事业部协同合作，以便做好内部结算工作，现对《内部结算管理办法》(天扬字[2018]55号)部分条款进行调整。具体通知如下:一、取消源文件第九条1款和第二款内容,将第九《内部结算管理办法》(天扬字[2018]55号)",
            username: "乔巧",
            timer: "05-11 17:02"
          }
        ],
        // 默认显示第几页
        currentPage: 20,
        // 总条数，根据接口获取数据长度(注意：这里不能为空)
        totalCount: 20,
        // 个数选择器（可修改）
        pageSizes: 1,
        // 默认每页显示的条数（可修改）
        PageSize: 4,
        app_id: []
      };
    },
    created() {
      this.$bus.$on('getAppId', (res) => { //事件总线中获取appId
        this.currentId = res;
        console.log(this.currentId, '动态获取appid');
      });
      // this.token = sessionStorage.getItem("access_token");
      getToken().then(res => {
        this.token = res.data.access_token;
        console.log(this.token, '打印出公告页中的token');
      })
      // this.token, this.currentId = '619c3b115368e8a6e792feebfbc91abee113d593'需要默认等于公告页中的id
      getMessageList(this.token, this.currentId).then(res => { //传入获取的token和获取回来的app_id
        console.log(this.currentId, '打印出当前id');
        console.log(res, '查询待办消息列表');
      })
    },
    methods: {}
  };
</script>

<style lang="scss">

</style>
