Page({
  data: {
    showOrderPopup: false, // 是否显示订单弹框
    quantity: 1, // 商品数量
    totalPrice: 59.9, // 商品总价
    isCollected: false,
    product: {
      mainImage: '/assets/images/niurou.png',
      price: 16.6,
      selfPickupDiscount: 4.8,
      soldCount: 20,
      shopName: '香他她',
      title: '香菇牛肉+韩式泡菜+茉莉香米饭',
      currentGroupSize: 10,
      deliveryFee: 0,
      deliveryTime: 39,
      distance: '3.3km',
      packageDetail: '香菇牛肉+韩式泡菜+泰国茉莉香米饭',
      selfPickupPrice: 11.8,
      groupEndTime: '01:57:4',
      detailImages: [
        '/images/detail1.jpg',
        '/images/detail2.jpg'
      ]
    },
    groupUsers: [
      {
        id: 1,
        avatar: '/images/avatar1.jpg',
        nickname: 'Ocean',
        timeLeft: '00:05.7',
        ended: false
      },
      {
        id: 2,
        avatar: '/images/avatar2.jpg',
        nickname: 'funnyZpC',
        ended: true
      }
    ]
  },

  toggleCollect() {
    this.setData({
      isCollected: !this.data.isCollected
    });
  },


  onLoad(options) {
    const productId = options.id;
    // 根据商品ID获取详情
    this.getProductDetail(productId);
  },

  getProductDetail(productId) {
    // TODO: 调用接口获取商品详情
    // 示例数据
    this.setData({
      product: {
        mainImage: '/assets/images/niurou.png',
        price: 16.6,
        selfPickupDiscount: 4.8,
        soldCount: 20,
        shopName: '香他她',
        title: '香菇牛肉+韩式泡菜+茉莉香米饭',
        currentGroupSize: 10,
        deliveryFee: 0,
        deliveryTime: 39,
        distance: '3.3km',
        packageDetail: '香菇牛肉+韩式泡菜+泰国茉莉香米饭',
        selfPickupPrice: 11.8,
        groupEndTime: '01:57:4',
        detailImages: [
          '/images/detail1.jpg',
          '/images/detail2.jpg'
        ]
      }
    });
  },

   // 点击去跟团按钮
   followGroup() {
    this.setData({
      showOrderPopup: true, // 显示订单弹框
    });
  },

  // 关闭订单弹框
  closeOrderPopup() {
    this.setData({
      showOrderPopup: false, // 隐藏订单弹框
    });
  },

  // 增加商品数量
  increaseQuantity() {
    this.setData({
      quantity: this.data.quantity + 1,
      totalPrice: (this.data.quantity + 1) * 59.9, // 动态计算总价
    });
  },

  // 减少商品数量
  decreaseQuantity() {
    if (this.data.quantity > 1) {
      this.setData({
        quantity: this.data.quantity - 1,
        totalPrice: (this.data.quantity - 1) * 59.9, // 动态计算总价
      });
    }
  },

  // 提交订单
  submitOrder() {
    wx.showToast({
      title: "支付成功！",
      icon: "success",
    });
    this.setData({
      showOrderPopup: false, // 提交后关闭弹框
    });
  },
});