Page({
  data: {
    products: [
      {
        id: 1,
        image: '/assets/images/Weixin Image_20241222003543.png',
        title: '商品名称一',
        price: '99.00',
        minGroupSize: 20,
        currentGroupSize: 10,
        progress: 50, // 已完成百分比
      },
      {
        id: 2,
        image: '/assets/images/Weixin Image_20241222003627.png',
        title: '商品名称二',
        price: '199.00',
        minGroupSize: 50,
        currentGroupSize: 25,
        progress: 50,
      },
      // 可以继续添加更多商品
    ],
  },

  onLoad() {
    // 页面加载时，可以通过请求后台接口获取商品列表数据
    // 这里使用初始化的示例数据
    this.updateProgress();
  },

  updateProgress() {
    // 计算每个商品的进度百分比
    const updatedProducts = this.data.products.map((item) => {
      const progress = Math.floor(
        (item.currentGroupSize / item.minGroupSize) * 100
      );
      return { ...item, progress: progress > 100 ? 100 : progress };
    });
    this.setData({
      products: updatedProducts,
    });
  },

  // 跳转到详情页
  navigateToDetail(e) {
    const productId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${productId}`
    });
  },

  joinGroup(e) {
    const productId = e.currentTarget.dataset.id;
    // 处理用户参团的逻辑，例如跳转到商品详情页或直接下单
    wx.showToast({
      title: `参团商品ID：${productId}`,
      icon: 'none',
    });

    // 示例：更新当前参团人数并刷新进度条
    const products = this.data.products.map((item) => {
      if (item.id === productId) {
        const updatedGroupSize = item.currentGroupSize + 1;
        const progress = Math.floor(
          (updatedGroupSize / item.minGroupSize) * 100
        );
        return {
          ...item,
          currentGroupSize: updatedGroupSize,
          progress: progress > 100 ? 100 : progress,
        };
      }
      return item;
    });
    this.setData({
      products,
    });
  },
});