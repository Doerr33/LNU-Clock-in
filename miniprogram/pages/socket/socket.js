var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    texta: '',
    number: [],
    isLife: true,
    resSocket: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    // 创建一个 WebSocket 连接。使用前请注意阅读相关说明。
    wx.connectSocket({
      url: 'ws://192.168.1.111:1584'
    })

    wx.onSocketOpen(function (res) {
      // 监听 WebSocket 连接打开事件
      console.log('WebSocket连接已打开！')
      // 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，
      // 并在 wx.onSocketOpen 回调之后才能发送。
      wx.sendSocketMessage({
        data: 'admin:123456',
      })
    })
    // 监听 WebSocket 接受到服务器的消息事件
    wx.onSocketMessage(function (res) {
      console.log("接受服务器消息", res)
    })
    // 监听 WebSocket 连接关闭事件
    wx.onSocketClose(function (res) {
      console.log('WebSocket连接已关闭！')
    })
  },
  textA(e) {
    this.setData({
      texta: e.detail.value
    })
    console.log(e.detail.value);
  },
  submit() {
    if (that.data.texta != '') {
      wx.sendSocketMessage({
        data: that.data.texta,
      })
      that.setData({
        isLife: false
      })
      wx.onSocketMessage(function (res) {
        console.log("接受服务器消息", res)
        if (res.data != '') {
          that.setData({
            resSocket: res.data
          })
        } else {
          that.setData({
            resSocket: '连接超时'
          })
        }
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: 'IP不能为空',
      })
    }
  },
  submit1() {
    wx.sendSocketMessage({
      data: '打开QQ',
    })
  },
  submit2() {
    wx.sendSocketMessage({
      data: '打开微信',
    })
  },
  submit3() {
    wx.sendSocketMessage({
      data: '截图',
    })
    wx.onSocketMessage(function (res) {
      console.log("接受服务器消息", res)
      var buffer = res.data;
      var dataview = new DataView(buffer);
      var ints = new Uint8Array(buffer.byteLength);
      var str = '';
      for (var i = 0; i < ints.length; i++) {
        str += String.fromCharCode(dataview.getUint8(i));
      }
      console.log(str);
      that.setData({
        resSocket: str
      })
    })
  },
  submit4() {
    wx.showModal({
      title: "是否关机",
      content: '',
      cancelText: '否',
      confirmText: '是',
      success(res) {
        if (res.cancel) {
          // 用户点击了取消属性的按钮，对应选择了'女'
          return;
        } else if (res.confirm) {
          wx.sendSocketMessage({
            data: '关机',
          })
        }
      }
    })
  },
  onClick() {
    let that = this
    if (that.data.system != '') {
      let system = that.data.resSocket.substring(0, 3)
      console.log('system: ', system.toLowerCase())
      if (system.toLowerCase() == 'ios') {
        console.log('当前系统不支持预览')
      } else {
        let url = 'data:image/png;base64,' + that.data.resSocket
        wx.previewImage({
          current: url, // 当前显示图片的http链接
          urls: [url] // 需要预览的图片http链接列表
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})