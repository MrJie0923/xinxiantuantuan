Page({
  data: {
    userAddress: '',
    product: {
      image: '/assets/product.png',
      name: '黄老五咔咔大礼包',
      spec: '1113g/袋',
      quantity: 1,
      price: 59.9,
      totalPrice: 59.9,
      discount: 0.59,
      finalPrice: 59.31,
    },
    remark: '',
    paymentMethod: 'wechat',
    agreed: false,
  },
  chooseAddress() {
    wx.navigateTo({
      url: '/pages/address/address',
    });
  },
  decreaseQuantity() {
    if (this.data.product.quantity > 1) {
      this.setData({
        'product.quantity': this.data.product.quantity - 1,
        'product.totalPrice': this.data.product.price * (this.data.product.quantity - 1),
        'product.finalPrice': this.data.product.price * (this.data.product.quantity - 1) - this.data.product.discount,
      });
    }
  },
  increaseQuantity() {
    this.setData({
      'product.quantity': this.data.product.quantity + 1,
      'product.totalPrice': this.data.product.price * (this.data.product.quantity + 1),
      'product.finalPrice': this.data.product.price * (this.data.product.quantity + 1) - this.data.product.discount,
    });
  },
  handleRemarkInput(e) {
    this.setData({
      remark: e.detail.value,
    });
  },
  toggleAgreement() {
    this.setData({
      agreed: !this.data.agreed,
    });
  },
  submitOrder() {
    if (!this.data.agreed) {
      wx.showToast({
        title: '请先同意服务协议',
        icon: 'none',
      });
      return;
    }
    wx.showToast({
      title: '订单提交成功',
    });
  },
});
