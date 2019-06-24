export class Charts {
  context: wx.CanvasContext;

  constructor(context: wx.CanvasContext) {
    this.context = context;
  }

  initCircleBarView() {
    let yArr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
    let x = 100;

    [1,20, 40, 60].forEach(num =>{
      yArr.forEach(value => {
        this.fillCircle({ x: x + num, y: value }, { radius: 2, color: '#0BD2BC' });
        this.fillCircle({ x: (x + 5) + num, y: value }, { radius: 2, color: '#0BD2BC' });
      })
    })
    
  }


  fillRect(pos: object, opt: object) {
    let _fillStyle = this.context.fillStyle;
    this.context.setFillStyle(opt.color, 5);
    this.context.fillRect(pos.x, pos.y, opt.height, opt.width);
    this.context.draw(true);

    this.context.setFillStyle(_fillStyle);

  }


  fillCircle(pos: object, opt: object) {
    let _fillStyle = this.context.fillStyle;
    this.context.setFillStyle(opt.color);
    this.context.arc(pos.x, pos.y, opt.radius, 2 * Math.PI);
    this.context.fill();

    this.context.setFillStyle(this._shadeColor1(opt.color, 20));
    this.context.arc(pos.x, pos.y, opt.radius - 2, 2 * Math.PI);
    this.context.fill();
    
    this.context.draw(true);
    this.context.setFillStyle(_fillStyle);

  }


  _shadeColor1(color, percent) {  // deprecated. See below.
    var num = parseInt(color.slice(1), 16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }
}
