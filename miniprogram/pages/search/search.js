var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texta:'',
    number:[],
    isLife:true
  },
  textA(e){
    this.setData({
      texta:e.detail.value
    })
    console.log(e.detail.value);
  },
  submit(e){
    if(that.data.texta == ''){
      wx.showToast({
        icon:'none',
        title: '学号不能为空',
      })
      return;
    }
    wx.showLoading({
      title: '查询中',
    })
    wx.cloud.callFunction({
      name:'searchMysql',
      data:{
        numbers:that.data.texta
      }
    }).then(res=>{
      console.log(res);
      that.setData({
        number:res.result
      })
      if(res.result != 0){
        wx.hideLoading()
        wx.showToast({
          title: '查询成功',
        })
        that.setData({
          isLife:false
        })
      }
      else{
        wx.showToast({
          icon:'none',
          title: '用户不存在',
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