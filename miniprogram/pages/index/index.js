"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chart_1 = require("../../utils/charts/chart");
var app = getApp();
Page({
    data: {
        startDate: '2019-06-20',
        endDate: '2019-06-20'
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onReady: function () {
        var context = wx.createCanvasContext('bar-canvas');
        var chart = new chart_1.Charts(context);
        chart.initCircleBarView();
    },
    onLoad: function () {
    },
    onStartDateChange: function (event) {
        console.log('picker发送选择改变，携带值为', event.detail.value);
        this.setData({
            startDate: event.detail.value
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGtEQUFpRDtBQUVqRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUMsWUFBWTtRQUN0QixPQUFPLEVBQUMsWUFBWTtLQUNyQjtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUE7UUFHbEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxjQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFL0IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFNUIsQ0FBQztJQUNELE1BQU07SUFFTixDQUFDO0lBR0QsaUJBQWlCLFlBQUMsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDOUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5pbXBvcnQgeyBDaGFydHMgfSBmcm9tICcuLi8uLi91dGlscy9jaGFydHMvY2hhcnQnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzdGFydERhdGU6JzIwMTktMDYtMjAnLFxuICAgIGVuZERhdGU6JzIwMTktMDYtMjAnXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uUmVhZHkoKXtcbiAgICBsZXQgY29udGV4dCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2Jhci1jYW52YXMnKVxuXG4gICAgXG4gICAgbGV0IGNoYXJ0ID0gbmV3IENoYXJ0cyhjb250ZXh0KVxuXG4gICAgY2hhcnQuaW5pdENpcmNsZUJhclZpZXcoKTtcbiAgICBcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIFxuICB9LFxuXG5cbiAgb25TdGFydERhdGVDaGFuZ2UoZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBldmVudC5kZXRhaWwudmFsdWUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHN0YXJ0RGF0ZTogZXZlbnQuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfVxuICBcbn0pXG4iXX0=