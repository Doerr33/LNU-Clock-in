var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texta: '',
    textb: '',
    textc: '',
    textd: '',
  },
  textA(e) {
    this.setData({
      texta: e.detail.value
    })
    console.log(e.detail.value);
  },
  textB(e) {
    this.setData({
      textb: e.detail.value
    })
  },
  textC(e) {
    this.setData({
      textc: e.detail.value
    })
  },
  textD(e) {
    this.setData({
      textd: e.detail.value
    })
  },
  submit(e) {
    if(that.data.texta == ''){
      wx.showToast({
        icon:'none',
        title: '姓名不能为空',
      })
      return;
    }
    if(that.data.textb == ''){
      wx.showToast({
        icon:'none',
        title: '学号不能为空',
      })
      return;
    }
    if(that.data.textc == ''){
      wx.showToast({
        icon:'none',
        title: '密码不能为空',
      })
      return;
    }
    if(that.data.textd == ''){
      wx.showToast({
        icon:'none',
        title: '校区不能为空',
      })
      return;
    }
    console.log("点击了提交");
    wx.cloud.callFunction({
      name:'searchMysql',
      data:{
        numbers:that.data.textb
      }
    }).then(res=>{
      console.log(res);
      if(res.result != 0){
        wx.showToast({
          icon:'none',
          title: '用户已存在',
        })
      }
      else{
        wx.showModal({
          title: "如果密码错误，系统会自动跳过打卡",
          content: '',
          cancelText: '取消',
          confirmText: '确认',
          success(res) {
            if (res.cancel) {
              // 用户点击了取消属性的按钮，对应选择了'女'
              retrun;
            } else if (res.confirm) {
              console.log(that.data.texta);
              // 用户点击了确定属性的按钮，对应选择了'男'
              wx.showLoading({
                title: '提交中',
              })
              wx.cloud.callFunction({
                  name: 'add',
                  data: {
                    name: that.data.texta,
                    numbers: that.data.textb,
                    password: that.data.textc,
                    school: that.data.textd
                  }
                })
                .then(res => {
                  wx.hideLoading()
                  console.log("添加成功");
                  wx.showToast({
                    title: '添加成功',
                  })
                  setTimeout(() => {
                    wx.navigateBack({
                      delta: -1,
                    })
                  }, 1500);
                })
                .catch(res => {
                  console.log("添加失败");
                })
            }
          }
        })
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
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