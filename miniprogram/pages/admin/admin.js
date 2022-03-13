var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texta:'',
    textb:'',
  },
  textA(e){
    this.setData({
      texta:e.detail.value
    })
    console.log(e.detail.value);
  },
  textB(e){
    this.setData({
      textb:e.detail.value
    })
  },
  submit(e){
    if(that.data.texta == ''){
      wx.showToast({
        icon:'none',
        title: '账号不能为空',
      })
      return;
    }
    if(that.data.textb == ''){
      wx.showToast({
        icon:'none',
        title: '密码不能为空',
      })
      return;
    }
    if(that.data.texta == 'lingisme9' && that.data.textb == 'lingisme9'){
      wx.navigateTo({
        url: '../detail/detail',
      })
      wx.showToast({
        title: '登录成功',
      })
    }
    else{
      wx.showToast({
        icon:'none',
        title: '密码或账号错误',
      })
    }
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