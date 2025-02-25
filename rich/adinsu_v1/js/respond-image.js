/*------- Responsive Image Change --------*/
/*----------------------------------------*/

function makeImagesResponsive() {
    var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      , t = document.getElementsByTagName("body")[0].getElementsByTagName("img");
    if (t.length === 0)
        return;
    var n;
    t[0].hasAttribute ? n = function(e, t) {
        return e.hasAttribute(t)
    }
    : n = function(e, t) {
        return e.getAttribute(t) !== null
    }
    ;
    var r = window.devicePixelRatio ? window.devicePixelRatio >= 1.2 ? 1 : 0 : 0;
    for (var i = 0; i < t.length; i++) {
        var s = t[i]
          , o = r && n(s, "data-src2x") ? "data-src2x" : "data-src"
          , u = r && n(s, "data-src-base2x") ? "data-src-base2x" : "data-src-base";
        if (!n(s, o))
            continue;
        var a = n(s, u) ? s.getAttribute(u) : ""
          , f = s.getAttribute(o)
          , l = f.split(",");
        for (var c = 0; c < l.length; c++) {
            var h = l[c].split(":"), p = h[0], d = h[1], v, m;
            if (p.indexOf("<") !== -1) {
                v = p.split("<");
                if (l[c - 1]) {
                    var g = l[c - 1].split(/:(.+)/)
                      , y = g[0].split("<");
                    m = e <= v[1] && e > y[1]
                } else
                    m = e <= v[1]
            } else {
                v = p.split(">");
                if (l[c + 1]) {
                    var b = l[c + 1].split(/:(.+)/)
                      , w = b[0].split(">");
                    m = e >= v[1] && e < w[1]
                } else
                    m = e >= v[1]
            }
            if (m) {
                var E = a + d;
                s.src !== E && s.setAttribute("src", E);
                break
            }
        }
    }
}
if (window.addEventListener) {
    window.addEventListener("load", makeImagesResponsive, !1);
    window.addEventListener("resize", makeImagesResponsive, !1)
} else {
    window.attachEvent("onload", makeImagesResponsive);
    window.attachEvent("onresize", makeImagesResponsive)
}
;