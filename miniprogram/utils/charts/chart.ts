export class Charts{
  context: wx.CanvasContext;

  constructor(context:wx.CanvasContext){
    this.context = context;
  }

  initCircleBarView(){
    let yArr = [ 10, 20, 30, 40, 50, 60, 70];
    let x = 100;

    yArr.forEach(value => {
      this.fillCircle({ x: x, y: value }, { radius: 3, color: '#0BD2BC'});
    })
  }


  fillRect(pos: object, opt: object){
    let _fillStyle = this.context.fillStyle;
    this.context.setFillStyle(opt.color);
    this.context.fillRect(pos.x , pos.y, opt.height, opt.width);
    this.context.draw(true);

    this.context.setFillStyle(_fillStyle);

  }


  fillCircle(pos: object, opt: object) {
    let _fillStyle = this.context.fillStyle;
    this.context.setFillStyle(this._lightenDarkenColor(opt.color, -0));
    this.context.arc(pos.x,pos.y,opt.radius,2*Math.PI);
    this.context.fill();
    this.context.setFillStyle(this._lightenDarkenColor(opt.color,30));
    this.context.arc(pos.x, pos.y, opt.radius - 2, 2 * Math.PI);
    this.context.fill();
    this.context.draw(true);

    this.context.setFillStyle(_fillStyle);

  }


  _lightenDarkenColor(col, amt) {
    let usePound = false;
    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }
    let num = parseInt(col,16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num ) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

    }
}
