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
        number: [],
        isLife: true
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
        if (that.data.texta == '') {
            wx.showToast({
                icon: 'none',
                title: '学号不能为空',
            })
            return;
        }
        wx.showLoading({
          title: '查询中',
        })
        wx.cloud.callFunction({
            name: 'searchMysql',
            data: {
                numbers: that.data.texta
            }
        }).then(res => {
            wx.hideLoading()
            console.log(res);
            that.setData({
                number: res.result
            })
            if (res.result != 0) {
                wx.showToast({
                    title: '查询成功',
                })
                that.setData({
                    isLife: false
                })
            } else {
                wx.showToast({
                    icon: 'none',
                    title: '用户不存在',
                })
            }
        })
    },
    submit1(e) {
        if (that.data.textb == '') {
            wx.showToast({
                icon: 'none',
                title: '姓名不能空',
            })
            return;
        }
        if (that.data.textc == '') {
            wx.showToast({
                icon: 'none',
                title: '密码不能空',
            })
            return;
        }
        if (that.data.textd == '') {
            wx.showToast({
                icon: 'none',
                title: '校区不能为空',
            })
            return;
        }
        wx.showModal({
            title: "是否修改",
            content: '',
            cancelText: '取消',
            confirmText: '确认',
            success(res) {
                if (res.cancel) {
                    // 用户点击了取消属性的按钮，对应选择了'女'
                    return;
                } else if (res.confirm) {
                    wx.showLoading({
                      title: '修改中',
                    })
                    console.log(that.data.texta);
                    // 用户点击了确定属性的按钮，对应选择了'男'
                    wx.cloud.callFunction({
                            name: 'changeMysql',
                            data: {
                                snumbers: that.data.texta,
                                name: that.data.textb,
                                numbers: that.data.textc,
                                school: that.data.textd
                            }
                        })
                        .then(res => {
                            wx.hideLoading()
                            console.log(res);
                            console.log("修改成功");
                            wx.showToast({
                                title: '修改成功',
                            })
                            setTimeout(() => {
                                wx.navigateBack({
                                    delta: -1,
                                })
                            }, 1000);
                        })
                        .catch(res => {
                            console.log("修改失败");
                        })
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        that = this;

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})