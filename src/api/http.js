import request from '@/utils/request'

// VUE_APP_BASE_API = '/Integrate/public/index'
export function getNavData(token) {
  return request({
    url: '/app/appListMessageCount',
    method: 'post',
    //统计本人所有应用信息和应用下的待办数
    // /app/appListMessageCount?access_token=d45deec14dd0436580e68557ba5b9713
    params: {
      access_token: 'd45deec14dd0436580e68557ba5b9713'
    },
    data: {
      composer_id: "composer_1",
      user_id: "mianshi1"
    }

    // {
    //   "code": 0,
    //   "data": [
    //   {
    //     "composer_id": "composer_1",
    //     "app_id": "19222b3504b098b431b3f47b85b987e72cec4a92",
    //     "app_name": "邮箱系统",
    //     "app_pic": "",
    //     "count": 2
    //   },
    //   {
    //     "composer_id": "composer_1",
    //     "app_id": "dca001f20687797727f317dfc32cefdb04c9b820",
    //     "app_name": "EPC系统",
    //     "app_pic": null,
    //     "count": 0
    //   },
    //   {
    //     "composer_id": "composer_1",
    //     "app_id": "7e593851573beee0ca895d048c0e9e02e0a21328",
    //     "app_name": "预算系统",
    //     "app_pic": null,
    //     "count": 0
    //   }
    // ]
    // }
  })
}


export function getMessageList(token, app_id) {//查询待办消息列表
  return request({
    url: '/Message/MessageList?',
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    params: {
      access_token: token
    },
    data: {
      user_id: 'mianshi1',
      app_id: app_id,//app_id
      start_number: 0,
      length_number: 5,
    }
    // {
    //   "code": 0,
    //   "data": [
    //   {
    //     "id": 21,
    //     "user_id": "yusuan",
    //     "app_id": "a8a4c408f7cecd6e1f41b7e75db97e908618c3f4",
    //     "agent_name": "预算系统CC通知",
    //     "agent_desc": "预算系统CC通知desc",
    //     "agent_content": "预算系统测试通知content",
    //     "agent_web_url": "http://www.baidu.com",
    //     "agent_move_url": "http://www.baidu.com",
    //     "agent_state": 1,
    //     "agent_create_time": "2020-05-18 19:37:53",
    //     "agent_promoter": "全权"
    //   }
    // ],
    //   "count": 4
    // }

  })
}

export function getToken() { //获取token
  return request({
    url: '/my/get_access_token',
    method: 'post',
    data: {
      app_id: '619c3b115368e8a6e792feebfbc91abee113d593',
      user_account: '17778014761'
    }
    // access_token: "NzBiYjIyZDVkZDY5NTAyM2E3NzNlOWJlM2U1NmUyYmQyZGU2NGVhMQ=="
    // expiration_time: 1591797894
  })
}

export function messageDetails() { //查看消息详情
                                   // http://yihuiqiandao.com/Integrate/public/index/login/singleLogin
  return request({
    url: "/login/singleLogin",
    methods: 'post',
    data: {
      user_id: "ceshi1",
      app_id: "0f844266e640b8497bc3d3c26f0f0c7e0621b6bc"
    }
  })
}

export function getAppList() {
  return request({
    method: 'post',
    url: '/app/applist?access_token=d45deec14dd0436580e68557ba5b9713',
    params: {
      access_token: 'd45deec14dd0436580e68557ba5b9713'
    },
    data: {
      composer_id: "composer_1", //企业Id
      app_status: 1 //应用状态 1、开启的 2、关闭的  3、全部
    }
  })
}
