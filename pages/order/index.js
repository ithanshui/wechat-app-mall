// pages/coupon/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 1,
    list: [{ //商品列表
      id: 2,
      img: '/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.00,
      num: 2,
      select: false,
    },
    {
      id: 3,
      img: '/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.01,
      num: 1,
      select: false
    },
    {
      id: 4,
      img: '/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.02,
      num: 1,
      select: false
    },
    {
      id: 5,
      img: '/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.03,
      num: 1,
      select: false
    },
    {
      id: 6,
      img: '/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.04,
      num: 1,
      select: false
    }
    ]
  },
  tabFun(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tabIndex: options.type
    })
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