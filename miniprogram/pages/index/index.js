Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  getWIFI(){
    wx.navigateTo({
      url: '../socket/socket',
    })
    // wx.previewImage({
    //   urls: ['https://s3.ax1x.com/2021/03/03/6EUoz6.jpg'],
    //   current: 'https://s3.ax1x.com/2021/03/03/6EUoz6.jpg' // 当前显示图片的http链接      
    // })
  },
  toAdd(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  toAdmin(){
    wx.navigateTo({
      url: '../admin/admin',
    })
  },
  toSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toDel(){
    wx.navigateTo({
      url: '../del/del',
    })
  },
  toChange(){
    wx.navigateTo({
      url: '../change/change',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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