class Vec2 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add (v) {
    return new Vec2(this.x+v.x, this.y+v.y);
  }

  sub (v) {
    return new Vec2(this.x-v.x, this.y-v.y);
  }

  len () {
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }

  norm() {
    var len = this.len();
    return new Vec2(this.x / len, this.y / len);
  }

  distance (v) {
    return this.sub(v).len();
  }

  dot (v) {
    return this.x*v.x + this.y*v.y;
  }

  cross (v) {
    return new Vec2(this.x*v.y - this.y*v.x, this.y*v.x-this.x*v.y);
  }

  angleBetween (v) {
    return (Math.atan2(this.y, this.x) - Math.atan2(v.y, v.x));
  }

  angleBetweenDeg (v) {
    var ret = this.angleBetween(v);
    if (ret<0) ret += (2*Math.PI);
    return ret * 180 / Math.PI;
  }


}




module.exports = {
  Vec2
}
