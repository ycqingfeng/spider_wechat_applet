"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Charts = (function () {
    function Charts(context) {
        this.context = context;
    }
    Charts.prototype.initCircleBarView = function () {
        var _this = this;
        var yArr = [10, 20, 30, 40, 50, 60, 70];
        var x = 100;
        yArr.forEach(function (value) {
            _this.fillCircle({ x: x, y: value }, { radius: 3, color: '#0BD2BC' });
        });
    };
    Charts.prototype.fillRect = function (pos, opt) {
        var _fillStyle = this.context.fillStyle;
        this.context.setFillStyle(opt.color);
        this.context.fillRect(pos.x, pos.y, opt.height, opt.width);
        this.context.draw(true);
        this.context.setFillStyle(_fillStyle);
    };
    Charts.prototype.fillCircle = function (pos, opt) {
        var _fillStyle = this.context.fillStyle;
        this.context.setFillStyle(this._lightenDarkenColor(opt.color, -0));
        this.context.arc(pos.x, pos.y, opt.radius, 2 * Math.PI);
        this.context.fill();
        this.context.setFillStyle(this._lightenDarkenColor(opt.color, 30));
        this.context.arc(pos.x, pos.y, opt.radius - 2, 2 * Math.PI);
        this.context.fill();
        this.context.draw(true);
        this.context.setFillStyle(_fillStyle);
    };
    Charts.prototype._lightenDarkenColor = function (col, amt) {
        var usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255)
            r = 255;
        else if (r < 0)
            r = 0;
        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255)
            b = 255;
        else if (b < 0)
            b = 0;
        var g = (num) + amt;
        if (g > 255)
            g = 255;
        else if (g < 0)
            g = 0;
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    };
    return Charts;
}());
exports.Charts = Charts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBR0UsZ0JBQVksT0FBd0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFpQixHQUFqQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFWixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELHlCQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsR0FBVztRQUMvQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXhDLENB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Q2FudmFzQ29udGV4dDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dDp3eC5DYW52YXNDb250ZXh0KXtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBpbml0Q2lyY2xlQmFyVmlldygpe1xyXG4gICAgbGV0IHlBcnIgPSBbIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwXTtcclxuICAgIGxldCB4ID0gMTAwO1xyXG5cclxuICAgIHlBcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsbENpcmNsZSh7IHg6IHgsIHk6IHZhbHVlIH0sIHsgcmFkaXVzOiAzLCBjb2xvcjogJyMwQkQyQkMnfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGZpbGxSZWN0KHBvczogb2JqZWN0LCBvcHQ6IG9iamVjdCl7XHJcbiAgICBsZXQgX2ZpbGxTdHlsZSA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0RmlsbFN0eWxlKG9wdC5jb2xvcik7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QocG9zLnggLCBwb3MueSwgb3B0LmhlaWdodCwgb3B0LndpZHRoKTtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3KHRydWUpO1xyXG5cclxuICAgIHRoaXMuY29udGV4dC5zZXRGaWxsU3R5bGUoX2ZpbGxTdHlsZSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGZpbGxDaXJjbGUocG9zOiBvYmplY3QsIG9wdDogb2JqZWN0KSB7XHJcbiAgICBsZXQgX2ZpbGxTdHlsZSA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0RmlsbFN0eWxlKHRoaXMuX2xpZ2h0ZW5EYXJrZW5Db2xvcihvcHQuY29sb3IsIC0wKSk7XHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHBvcy54LHBvcy55LG9wdC5yYWRpdXMsMipNYXRoLlBJKTtcclxuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0RmlsbFN0eWxlKHRoaXMuX2xpZ2h0ZW5EYXJrZW5Db2xvcihvcHQuY29sb3IsMzApKTtcclxuICAgIHRoaXMuY29udGV4dC5hcmMocG9zLngsIHBvcy55LCBvcHQucmFkaXVzIC0gMiwgMiAqIE1hdGguUEkpO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3KHRydWUpO1xyXG5cclxuICAgIHRoaXMuY29udGV4dC5zZXRGaWxsU3R5bGUoX2ZpbGxTdHlsZSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIF9saWdodGVuRGFya2VuQ29sb3IoY29sLCBhbXQpIHtcclxuICAgIGxldCB1c2VQb3VuZCA9IGZhbHNlO1xyXG4gICAgaWYgKGNvbFswXSA9PSBcIiNcIikge1xyXG4gICAgICBjb2wgPSBjb2wuc2xpY2UoMSk7XHJcbiAgICAgIHVzZVBvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCBudW0gPSBwYXJzZUludChjb2wsMTYpO1xyXG4gICAgbGV0IHIgPSAobnVtID4+IDE2KSArIGFtdDtcclxuICAgIGlmIChyID4gMjU1KSByID0gMjU1O1xyXG4gICAgZWxzZSBpZiAociA8IDApIHIgPSAwO1xyXG4gICAgbGV0IGIgPSAoKG51bSA+PiA4KSAmIDB4MDBGRikgKyBhbXQ7XHJcbiAgICBpZiAoYiA+IDI1NSkgYiA9IDI1NTtcclxuICAgIGVsc2UgaWYgKGIgPCAwKSBiID0gMDtcclxuICAgIGxldCBnID0gKG51bSApICsgYW10O1xyXG4gICAgaWYgKGcgPiAyNTUpIGcgPSAyNTU7XHJcbiAgICBlbHNlIGlmIChnIDwgMCkgZyA9IDA7XHJcbiAgICByZXR1cm4gKHVzZVBvdW5kP1wiI1wiOlwiXCIpICsgKGcgfCAoYiA8PCA4KSB8IChyIDw8IDE2KSkudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=