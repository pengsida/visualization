/**
 * Created by pengsida on 2017/5/20.
 */

!function(t) {
    function e() {
        function t(t, n, a) {
            for (var r, o, s, l = ([{
                x: 0,
                y: 0
            }, {
                x: e[0],
                y: e[1]
            }], n.x), i = n.y, d = Math.sqrt(e[0] * e[0] + e[1] * e[1]), h = m(e), f = Math.random() < .5 ? 1 : -1, p = -f; (r = h(p += f)) && (o = ~~r[0], s = ~~r[1], !(Math.min(o, s) > d));)
                if (n.x = l + o, n.y = i + s, !(n.x + n.x0 < 0 || n.y + n.y0 < 0 || n.x + n.x1 > e[0] || n.y + n.y1 > e[1]) && (!a || !u(n, t, e[0])) && (!a || c(n, a))) {
                    for (var y, g = n.sprite, v = n.width >> 5, x = e[0] >> 5, w = n.x - (v << 4), M = 127 & w, b = 32 - M, z = n.y1 - n.y0, k = (n.y + n.y0) * x + (w >> 5), T = 0; z > T; T++) {
                        y = 0;
                        for (var A = 0; v >= A; A++)
                            t[k + A] |= y << b | (v > A ? (y = g[T * v + A]) >>> M : 0);
                        k += x
                    }
                    return delete n.sprite, !0
                }
            return !1
        }
        var e = [256, 256],
            h = n,
            p = a,
            y = r,
            g = o,
            v = s,
            m = d,
            x = [],
            w = 1 / 0,
            b = d3.dispatch("word", "end"),
            z = null,
            k = {};
        return k.start = function() {
            function n() {
                for (var n, s = +new Date; +new Date - s < w && ++u < o && z;)
                    n = d[u], n.x = e[0] * (Math.random() + .5) >> 1, n.y = e[1] * (Math.random() + .5) >> 1, l(n, d, u), t(a, n, r) && (c.push(n), b.word(n), r ? i(r, n) : r = [{
                        x: n.x + n.x0,
                        y: n.y + n.y0
                    }, {
                        x: n.x + n.x1,
                        y: n.y + n.y1
                    }], n.x -= e[0] >> 1, n.y -= e[1] >> 1);
                u >= o && (k.stop(), b.end(c, r))
            }
            var a = f((e[0] >> 5) * e[1]),
                r = null,
                o = x.length,
                u = -1,
                c = [],
                d = x.map(function(t, e) {
                    return {
                        text: h.call(this, t, e),
                        font: p.call(this, t, e),
                        rotate: g.call(this, t, e),
                        size: ~~y.call(this, t, e),
                        padding: s.call(this, t, e)
                    }
                }).sort(function(t, e) {
                    return e.size - t.size
                });
            return z && clearInterval(z), z = setInterval(n, 0), n(), k
        }, k.stop = function() {
            return z && (clearInterval(z), z = null), k
        }, k.timeInterval = function(t) {
            return arguments.length ? (w = null == t ? 1 / 0 : t, k) : w
        }, k.words = function(t) {
            return arguments.length ? (x = t, k) : x
        }, k.size = function(t) {
            return arguments.length ? (e = [+t[0], +t[1]], k) : e
        }, k.font = function(t) {
            return arguments.length ? (p = d3.functor(t), k) : p
        }, k.rotate = function(t) {
            return arguments.length ? (g = d3.functor(t), k) : g
        }, k.text = function(t) {
            return arguments.length ? (h = d3.functor(t), k) : h
        }, k.spiral = function(t) {
            return arguments.length ? (m = M[t + ""] || t, k) : m
        }, k.fontSize = function(t) {
            return arguments.length ? (y = d3.functor(t), k) : y
        }, k.padding = function(t) {
            return arguments.length ? (v = d3.functor(t), k) : v
        }, d3.rebind(k, b, "on")
    }
    function n(t) {
        return t.text
    }
    function a() {
        return "serif"
    }
    function r(t) {
        return Math.sqrt(t.value)
    }
    function o() {
        return 30 * (~~(6 * Math.random()) - 3)
    }
    function s() {
        return 1
    }
    function l(t, e, n) {
        if (!t.sprite) {
            w.clearRect(0, 0, (g << 5) / m, v / m);
            var a = 0,
                r = 0,
                o = 0,
                s = e.length;
            for (n--; ++n < s;) {
                t = e[n], w.save(), w.font = ~~((t.size + 1) / m) + "px " + t.font;
                var l = w.measureText(t.text + "m").width * m,
                    u = t.size << 1;
                if (t.rotate) {
                    var i = Math.sin(t.rotate * y),
                        c = Math.cos(t.rotate * y),
                        d = l * c,
                        h = l * i,
                        f = u * c,
                        p = u * i;
                    l = Math.max(Math.abs(d + p), Math.abs(d - p)) + 31 >> 5 << 5, u = ~~Math.max(Math.abs(h + f), Math.abs(h - f))
                } else
                    l = l + 31 >> 5 << 5;
                if (u > o && (o = u), a + l >= g << 5 && (a = 0, r += o, o = 0), r + u >= v)
                    break;
                w.translate((a + (l >> 1)) / m, (r + (u >> 1)) / m), t.rotate && w.rotate(t.rotate * y), w.fillText(t.text, 0, 0), w.restore(), t.width = l, t.height = u, t.xoff = a, t.yoff = r, t.x1 = l >> 1, t.y1 = u >> 1, t.x0 = -t.x1, t.y0 = -t.y1, a += l
            }
            for (var x = w.getImageData(0, 0, (g << 5) / m, v / m).data, M = []; --n >= 0;) {
                t = e[n];
                for (var l = t.width, b = l >> 5, u = t.y1 - t.y0, z = t.padding, k = 0; u * b > k; k++)
                    M[k] = 0;
                if (a = t.xoff, null == a)
                    return;
                r = t.yoff;
                for (var T = 0, A = -1, C = 0; u > C; C++) {
                    for (var k = 0; l > k; k++) {
                        var S = b * C + (k >> 5),
                            I = x[(r + C) * (g << 5) + (a + k) << 2] ? 1 << 31 - k % 32 : 0;
                        z && (C && (M[S - b] |= I), l - 1 > C && (M[S + b] |= I), I |= I << 1 | I >> 1), M[S] |= I, T |= I
                    }
                    T ? A = C : (t.y0++, u--, C--, r++)
                }
                t.y1 = t.y0 + A, t.sprite = M.slice(0, (t.y1 - t.y0) * b)
            }
        }
    }
    function u(t, e, n) {
        n >>= 5;
        for (var a, r = t.sprite, o = t.width >> 5, s = t.x - (o << 4), l = 127 & s, u = 32 - l, i = t.y1 - t.y0, c = (t.y + t.y0) * n + (s >> 5), d = 0; i > d; d++) {
            a = 0;
            for (var h = 0; o >= h; h++)
                if ((a << u | (o > h ? (a = r[d * o + h]) >>> l : 0)) & e[c + h])
                    return !0;
            c += n
        }
        return !1
    }
    function i(t, e) {
        var n = t[0],
            a = t[1];
        e.x + e.x0 < n.x && (n.x = e.x + e.x0), e.y + e.y0 < n.y && (n.y = e.y + e.y0), e.x + e.x1 > a.x && (a.x = e.x + e.x1), e.y + e.y1 > a.y && (a.y = e.y + e.y1)
    }
    function c(t, e) {
        return t.x + t.x1 > e[0].x && t.x + t.x0 < e[1].x && t.y + t.y1 > e[0].y && t.y + t.y0 < e[1].y
    }
    function d(t) {
        var e = t[0] / t[1];
        return function(t) {
            return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)]
        }
    }
    function h(t) {
        var e = 4,
            n = e * t[0] / t[1],
            a = 0,
            r = 0;
        return function(t) {
            var o = 0 > t ? -1 : 1;
            switch (Math.sqrt(1 + 4 * o * t) - o & 3) {
                case 0:
                    a += n;
                    break;
                case 1:
                    r += e;
                    break;
                case 2:
                    a -= n;
                    break;
                default:
                    r -= e
            }
            return [a, r]
        }
    }
    function f(t) {
        for (var e = [], n = -1; ++n < t;)
            e[n] = 0;
        return e
    }
    var p,
        y = Math.PI / 180,
        g = 64,
        v = 2048,
        m = 1;
    if ("undefined" != typeof document)
        p = document.createElement("canvas"), p.width = 1, p.height = 1, m = Math.sqrt(p.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2), p.width = (g << 5) / m, p.height = v / m;
    else {
        var x = require("canvas");
        p = new x(g << 5, v)
    }
    var w = p.getContext("2d"),
        M = {
            archimedean: d,
            rectangular: h
        };
    w.fillStyle = "red", w.textAlign = "center", t.cloud = e
}("undefined" == typeof exports ? d3.layout || (d3.layout = {}) : exports);