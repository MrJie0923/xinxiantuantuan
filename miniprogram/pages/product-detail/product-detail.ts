
Page({
  data: {
    product: {
      id: 1,
      title: '商品标题示例',
      price: '99.00',
      images: [
        '/assets/images/product1.jpg',
        '/assets/images/product2.jpg',
        '/assets/images/product3.jpg'
      ],
      description: '这里是商品的详细描述信息，介绍商品的特点、规格等内容。'
    }
  },
  
  // 加入购物车
  addToCart: function() {
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    });
    // TODO: 添加加入购物车的逻辑，如更新全局购物车数据等
  },
  
  // 立即购买
  buyNow: function() {
    // TODO: 跳转到下单页面，传递商品信息
    wx.navigateTo({
      url: '/pages/order-confirm/order-confirm?productId=' + this.data.product.id
    });
  },
  
  onLoad: function(options) {
    const productId = options.id;
    // TODO: 根据 productId 请求商品详情数据
    // wx.request({
    //   url: 'https://your.api.endpoint/product/' + productId,
    //   success: (res) => {
    //     this.setData({
    //       product: res.data
    //     });
    //   }
    // });
  }
});