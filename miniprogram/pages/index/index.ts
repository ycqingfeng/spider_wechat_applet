//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { Charts } from '../../utils/charts/chart'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    startDate:'2019-06-20',
    endDate:'2019-06-20'
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady(){
    let context = wx.createCanvasContext('bar-canvas')
    let width = wx.getSystemInfoSync().windowWidth

    context.setFillStyle('rgba(0,0,0,0.2)')
    context.fillRect(0, 0, width, 300)
    context.draw()
    
    let chart = new Charts(context)

    chart.initCircleBarView();
    
  },
  onLoad() {
    
  },


  onStartDateChange(event){
    console.log('picker发送选择改变，携带值为', event.detail.value)
    this.setData({
      startDate: event.detail.value
    })
  }
  
})
