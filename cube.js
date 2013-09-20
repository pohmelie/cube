// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var background, ctx, delta, height, iteration, per_degree, points, rotate, scale, time, width, wx, wy, wz, z_infulece,
      _this = this;
    background = "#293134";
    $("body").css("background", background);
    width = 400;
    height = 400;
    ctx = $("#area")[0].getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    per_degree = Math.PI / 180;
    wx = 40 * per_degree;
    wy = 40 * per_degree;
    wz = 0;
    time = 0;
    delta = 25;
    scale = 1;
    z_infulece = 0.001;
    points = [[[-100, 100, 100], [100, 100, 100], [100, -100, 100], [-100, -100, 100], [-100, 100, 100], [-100, 100, -100], [-100, -100, -100], [100, -100, -100], [100, 100, -100], [-100, 100, -100]], [[-100, -100, 100], [-100, -100, -100]], [[100, -100, 100], [100, -100, -100]], [[100, 100, 100], [100, 100, -100]]];
    rotate = function(x, y, z, alpha, betta, gamma) {
      var ca, cb, cg, sa, sb, sg, _ref, _ref1, _ref2;
      _ref = [Math.sin(alpha), Math.cos(alpha)], sa = _ref[0], ca = _ref[1];
      _ref1 = [Math.sin(betta), Math.cos(betta)], sb = _ref1[0], cb = _ref1[1];
      _ref2 = [Math.sin(gamma), Math.cos(gamma)], sg = _ref2[0], cg = _ref2[1];
      return [x * (cb * cg) + y * (-cb * sg) + z * sb, x * (sa * sb * cg + ca * sg) + y * (-sa * sb * sg + ca * cg) + z * (-sa * cb), x * (-ca * sb * cg + sa * sg) + y * (ca * sb * sg + sa * cg) + z * (ca * cb)];
    };
    iteration = function() {
      var init_point, mx, my, path, rx, ry, rz, sx, sy, x, y, z, _i, _j, _len, _len1, _ref, _ref1;
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);
      for (_i = 0, _len = points.length; _i < _len; _i++) {
        path = points[_i];
        init_point = false;
        for (_j = 0, _len1 = path.length; _j < _len1; _j++) {
          _ref = path[_j], x = _ref[0], y = _ref[1], z = _ref[2];
          _ref1 = rotate(x, y, z, wx * time, wy * time, wz * time), rx = _ref1[0], ry = _ref1[1], rz = _ref1[2];
          sx = (1 + rz * z_infulece) / scale * rx + width / 2;
          sy = (1 + rz * z_infulece) / scale * ry + height / 2;
          if (init_point) {
            ctx.beginPath();
            mx = init_point[0], my = init_point[1];
            ctx.moveTo(mx, my);
            ctx.lineTo(sx, sy);
            ctx.strokeStyle = "#678cb1";
            ctx.stroke();
          }
          init_point = [sx, sy];
          ctx.beginPath();
          ctx.arc(sx, sy, 3, 0, 2 * Math.PI);
          ctx.fillStyle = "#ffcd22";
          ctx.fill();
        }
      }
      time = time + delta / 1000;
      return setTimeout(iteration, delta);
    };
    return iteration();
  });

}).call(this);
