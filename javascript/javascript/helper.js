/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function basename(b, p) {
    var l = b,
        e = l.charAt(l.length - 1);
    if ("/" === e || "\\" === e) l = l.slice(0, -1);
    l = l.replace(/^.*[\/\\]/g, "");
    "string" === typeof p && l.substr(l.length - p.length) == p && (l = l.substr(0, l.length - p.length));
    return l
}

function function_exists(b) {
    "string" === typeof b && (b = this.window[b]);
    return "function" === typeof b
}

function print_r(b, p) {
    var l = "",
        e = this.window.document;
    repeat_char = function(b, e) {
        for (var m = "", g = 0; g < b; g++) m += e;
        return m
    };
    formatArray = function(b, e, m, g) {
        0 < e && e++;
        var l = repeat_char(m * e, g),
            v = repeat_char(m * (e + 1), g),
            n = "",
            k;
        if (k = "object" === typeof b && null !== b && b.constructor) k = (k = /\W*function\s+([\w\$]+)\s*\(/.exec(b.constructor)) ? k[1] : "(Anonymous)", k = "PHPJS_Resource" !== k;
        if (k) {
            var n = n + ("Array\n" + l + "(\n"),
                p;
            for (p in b) n = "[object Array]" === Object.prototype.toString.call(b[p]) ? n + (v + "[" + p + "] => " + formatArray(b[p],
                e + 1, m, g)) : n + (v + "[" + p + "] => " + b[p] + "\n");
            n += l + ")\n"
        } else n = null === b || void 0 === b ? "" : b.toString();
        return n
    };
    l = formatArray(b, 0, 4, " ");
    if (!0 !== p) {
        if (e.body) this.echo(l);
        else try {
            e = XULDocument, this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">' + l + "</pre>")
        } catch (g) {
            this.echo(l)
        }
        return !0
    }
    return l
}

function round(b, p, l) {
    var e, g, u;
    p = Math.pow(10, p | 0);
    b *= p;
    u = 0 < b | -(0 > b);
    g = b % 1 === .5 * u;
    e = Math.floor(b);
    if (g) switch (l) {
        case "PHP_ROUND_HALF_DOWN":
            b = e + (0 > u);
            break;
        case "PHP_ROUND_HALF_EVEN":
            b = e + e % 2 * u;
            break;
        case "PHP_ROUND_HALF_ODD":
            b = e + !(e % 2);
            break;
        default:
            b = e + (0 < u)
    }
    return (g ? b : Math.round(b)) / p
}

function abs(b) {
    return Math.abs(b) || 0
}

function stristr(b, p, l) {
    var e = 0;
    b += "";
    e = b.toLowerCase().indexOf((p + "").toLowerCase());
    return -1 == e ? !1 : l ? b.substr(0, e) : b.slice(e)
}

function time() {
    return Math.floor((new Date).getTime() / 1E3)
}

function strtotime(b, p) {
    function l(b) {
        var e = b.split(" ");
        b = e[0];
        var n = e[1].substring(0, 3),
            k = /\d+/.test(b),
            g = ("last" === b ? -1 : 1) * ("ago" === e[2] ? -1 : 1);
        k && (g *= parseInt(b, 10));
        if (m.hasOwnProperty(n) && !e[1].match(/^mon(day|\.)?$/i)) return u["set" + m[n]](u["get" + m[n]]() + g);
        if ("wee" === n) return u.setDate(u.getDate() + 7 * g);
        if ("next" === b || "last" === b) e = g, n = s[n], "undefined" !== typeof n && (n -= u.getDay(), 0 === n ? n = 7 * e : 0 < n && "last" === b ? n -= 7 : 0 > n && "next" === b && (n += 7), u.setDate(u.getDate() + n));
        else if (!k) return !1;
        return !0
    }
    var e,
        g, u, s, m, w;
    if (!b) return !1;
    b = b.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase();
    if ((e = b.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/)) && e[2] === e[4])
        if (1901 < e[1]) switch (e[2]) {
                case "-":
                    return 12 < e[3] || 31 < e[5] ? !1 : new Date(e[1], parseInt(e[3], 10) - 1, e[5], e[6] || 0, e[7] || 0, e[8] || 0, e[9] || 0) / 1E3;
                case ".":
                    return !1;
                case "/":
                    return 12 < e[3] || 31 < e[5] ? !1 : new Date(e[1], parseInt(e[3], 10) - 1, e[5], e[6] || 0, e[7] || 0, e[8] ||
                        0, e[9] || 0) / 1E3
            } else if (1901 < e[5]) switch (e[2]) {
                case "-":
                    return 12 < e[3] || 31 < e[1] ? !1 : new Date(e[5], parseInt(e[3], 10) - 1, e[1], e[6] || 0, e[7] || 0, e[8] || 0, e[9] || 0) / 1E3;
                case ".":
                    return 12 < e[3] || 31 < e[1] ? !1 : new Date(e[5], parseInt(e[3], 10) - 1, e[1], e[6] || 0, e[7] || 0, e[8] || 0, e[9] || 0) / 1E3;
                case "/":
                    return 12 < e[1] || 31 < e[3] ? !1 : new Date(e[5], parseInt(e[1], 10) - 1, e[3], e[6] || 0, e[7] || 0, e[8] || 0, e[9] || 0) / 1E3
            } else switch (e[2]) {
                case "-":
                    if (12 < e[3] || 31 < e[5] || 70 > e[1] && 38 < e[1]) return !1;
                    g = 0 <= e[1] && 38 >= e[1] ? +e[1] + 2E3 : e[1];
                    return new Date(g,
                        parseInt(e[3], 10) - 1, e[5], e[6] || 0, e[7] || 0, e[8] || 0, e[9] || 0) / 1E3;
                case ".":
                    if (70 <= e[5]) return 12 < e[3] || 31 < e[1] ? !1 : new Date(e[5], parseInt(e[3], 10) - 1, e[1], e[6] || 0, e[7] || 0, e[8] || 0, e[9] || 0) / 1E3;
                    if (60 > e[5] && !e[6]) {
                        if (23 < e[1] || 59 < e[3]) return !1;
                        g = new Date;
                        return new Date(g.getFullYear(), g.getMonth(), g.getDate(), e[1] || 0, e[3] || 0, e[5] || 0, e[9] || 0) / 1E3
                    }
                    return !1;
                case "/":
                    if (12 < e[1] || 31 < e[3] || 70 > e[5] && 38 < e[5]) return !1;
                    g = 0 <= e[5] && 38 >= e[5] ? +e[5] + 2E3 : e[5];
                    return new Date(g, parseInt(e[1], 10) - 1, e[3], e[6] || 0, e[7] || 0, e[8] ||
                        0, e[9] || 0) / 1E3;
                case ":":
                    if (23 < e[1] || 59 < e[3] || 59 < e[5]) return !1;
                    g = new Date;
                    return new Date(g.getFullYear(), g.getMonth(), g.getDate(), e[1] || 0, e[3] || 0, e[5] || 0) / 1E3
            }
            if ("now" === b) return null === p || isNaN(p) ? (new Date).getTime() / 1E3 | 0 : p | 0;
    if (!isNaN(e = Date.parse(b))) return e / 1E3 | 0;
    if (e = b.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/))
        if ("z" == e[4] ? e[4] = "Z" : e[4].match(/^([\+-][0-9]{2})$/) && (e[4] += ":00"), !isNaN(e = Date.parse(e[1] + "T" + e[2] + e[4]))) return e /
            1E3 | 0;
    u = p ? new Date(1E3 * p) : new Date;
    s = {
        sun: 0,
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6
    };
    m = {
        yea: "FullYear",
        mon: "Month",
        day: "Date",
        hou: "Hours",
        min: "Minutes",
        sec: "Seconds"
    };
    e = b.match(/([+-]?\d+\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\.?|monday|mon\.?|tuesday|tue\.?|wednesday|wed\.?|thursday|thu\.?|friday|fri\.?|saturday|sat\.?)|(last|next)\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\.?|monday|mon\.?|tuesday|tue\.?|wednesday|wed\.?|thursday|thu\.?|friday|fri\.?|saturday|sat\.?))(\sago)?/gi);
    if (!e) return !1;
    w = 0;
    for (g = e.length; w < g; w++)
        if (!l(e[w])) return !1;
    return u.getTime() / 1E3
}

function date(b, p) {
    var l, e, g = "Sun Mon Tues Wednes Thurs Fri Satur January February March April May June July August September October November December".split(" "),
        u = /\\?(.?)/gi,
        s = function(b, m) {
            return e[b] ? e[b]() : m
        },
        m = function(b, e) {
            for (b = String(b); b.length < e;) b = "0" + b;
            return b
        };
    e = {
        d: function() {
            return m(e.j(), 2)
        },
        D: function() {
            return e.l().slice(0, 3)
        },
        j: function() {
            return l.getDate()
        },
        l: function() {
            return g[e.w()] + "day"
        },
        N: function() {
            return e.w() || 7
        },
        S: function() {
            var b = e.j(),
                m = b % 10;
            3 >= m && 1 == parseInt(b %
                100 / 10, 10) && (m = 0);
            return ["st", "nd", "rd"][m - 1] || "th"
        },
        w: function() {
            return l.getDay()
        },
        z: function() {
            var b = new Date(e.Y(), e.n() - 1, e.j()),
                m = new Date(e.Y(), 0, 1);
            return Math.round((b - m) / 864E5)
        },
        W: function() {
            var b = new Date(e.Y(), e.n() - 1, e.j() - e.N() + 3),
                g = new Date(b.getFullYear(), 0, 4);
            return m(1 + Math.round((b - g) / 864E5 / 7), 2)
        },
        F: function() {
            return g[6 + e.n()]
        },
        m: function() {
            return m(e.n(), 2)
        },
        M: function() {
            return e.F().slice(0, 3)
        },
        n: function() {
            return l.getMonth() + 1
        },
        t: function() {
            return (new Date(e.Y(), e.n(), 0)).getDate()
        },
        L: function() {
            var b = e.Y();
            return 0 === b % 4 & 0 !== b % 100 | 0 === b % 400
        },
        o: function() {
            var b = e.n(),
                m = e.W();
            return e.Y() + (12 === b && 9 > m ? 1 : 1 === b && 9 < m ? -1 : 0)
        },
        Y: function() {
            return l.getFullYear()
        },
        y: function() {
            return e.Y().toString().slice(-2)
        },
        a: function() {
            return 11 < l.getHours() ? "pm" : "am"
        },
        A: function() {
            return e.a().toUpperCase()
        },
        B: function() {
            var b = 3600 * l.getUTCHours(),
                e = 60 * l.getUTCMinutes(),
                v = l.getUTCSeconds();
            return m(Math.floor((b + e + v + 3600) / 86.4) % 1E3, 3)
        },
        g: function() {
            return e.G() % 12 || 12
        },
        G: function() {
            return l.getHours()
        },
        h: function() {
            return m(e.g(), 2)
        },
        H: function() {
            return m(e.G(), 2)
        },
        i: function() {
            return m(l.getMinutes(), 2)
        },
        s: function() {
            return m(l.getSeconds(), 2)
        },
        u: function() {
            return m(1E3 * l.getMilliseconds(), 6)
        },
        e: function() {
            throw "Not supported (see source code of date() for timezone on how to add support)";
        },
        I: function() {
            var b = new Date(e.Y(), 0),
                m = Date.UTC(e.Y(), 0),
                v = new Date(e.Y(), 6),
                n = Date.UTC(e.Y(), 6);
            return b - m !== v - n ? 1 : 0
        },
        O: function() {
            var b = l.getTimezoneOffset(),
                e = Math.abs(b);
            return (0 < b ? "-" : "+") + m(100 * Math.floor(e /
                60) + e % 60, 4)
        },
        P: function() {
            var b = e.O();
            return b.substr(0, 3) + ":" + b.substr(3, 2)
        },
        T: function() {
            return "UTC"
        },
        Z: function() {
            return 60 * -l.getTimezoneOffset()
        },
        c: function() {
            return "Y-m-d\\TH:i:sP".replace(u, s)
        },
        r: function() {
            return "D, d M Y H:i:s O".replace(u, s)
        },
        U: function() {
            return l / 1E3 | 0
        }
    };
    this.date = function(b, e) {
        l = void 0 === e ? new Date : e instanceof Date ? new Date(e) : new Date(1E3 * e);
        return b.replace(u, s)
    };
    return this.date(b, p)
}

function wordwrap(b, p, l, e) {
    var g = 2 <= arguments.length ? arguments[1] : 75,
        u = 3 <= arguments.length ? arguments[2] : "\n",
        s = 4 <= arguments.length ? arguments[3] : !1,
        m, w, y, v, n;
    b += "";
    if (1 > g) return b;
    m = -1;
    for (y = (n = b.split(/\r\n|\n|\r/)).length; ++m < y; n[m] += v)
        for (v = n[m], n[m] = ""; v.length > g; n[m] += v.slice(0, w) + ((v = v.slice(w)).length ? u : "")) w = 2 == s || (w = v.slice(0, g + 1).match(/\S*(\s)?$/))[1] ? g : w.input.length - w[0].length || 1 == s && g || w.input.length + (w = v.slice(g).match(/^\S*/))[0].length;
    return n.join("\n")
}

function trim(b, p) {
    var l, e = 0,
        g = 0;
    b += "";
    l = p ? (p + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    e = b.length;
    for (g = 0; g < e; g++)
        if (-1 === l.indexOf(b.charAt(g))) {
            b = b.substring(g);
            break
        }
    e = b.length;
    for (g = e - 1; 0 <= g; g--)
        if (-1 === l.indexOf(b.charAt(g))) {
            b = b.substring(0, g + 1);
            break
        }
    return -1 === l.indexOf(b.charAt(0)) ? b : ""
}

function rtrim(b, p) {
    p = p ? (p + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "\\$1") : " \\s\u00a0";
    return (b + "").replace(new RegExp("[" + p + "]+$", "g"), "")
}

function ltrim(b, p) {
    p = p ? (p + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \\s\u00a0";
    return (b + "").replace(new RegExp("^[" + p + "]+", "g"), "")
}

function str_replace(b, p, l, e) {
    var g = 0,
        u = 0,
        s = "",
        m = "",
        w = 0,
        y = 0,
        v = [].concat(b),
        n = [].concat(p),
        k = "[object Array]" === Object.prototype.toString.call(n),
        x = "[object Array]" === Object.prototype.toString.call(l);
    l = [].concat(l);
    if ("object" === typeof b && "string" === typeof p) {
        s = p;
        p = [];
        for (g = 0; g < b.length; g += 1) p[g] = s;
        n = [].concat(p);
        k = "[object Array]" === Object.prototype.toString.call(n)
    }
    e && (this.window[e] = 0);
    g = 0;
    for (w = l.length; g < w; g++)
        if ("" !== l[g])
            for (u = 0, y = v.length; u < y; u++) s = l[g] + "", m = k ? void 0 !== n[u] ? n[u] : "" : n[0], l[g] =
                s.split(v[u]).join(m), e && (this.window[e] += s.split(v[u]).length - 1);
    return x ? l : l[0]
}

function number_format(b, p, l, e) {
    b = (b + "").replace(/[^0-9+\-Ee.]/g, "");
    b = isFinite(+b) ? +b : 0;
    p = isFinite(+p) ? Math.abs(p) : 0;
    e = "undefined" === typeof e ? "," : e;
    l = "undefined" === typeof l ? "." : l;
    var g = "",
        g = function(b, e) {
            var m = Math.pow(10, e);
            return "" + (Math.round(b * m) / m).toFixed(e)
        },
        g = (p ? g(b, p) : "" + Math.round(b)).split(".");
    3 < g[0].length && (g[0] = g[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
    (g[1] || "").length < p && (g[1] = g[1] || "", g[1] += Array(p - g[1].length + 1).join("0"));
    return g.join(l)
}

function ucwords(b) {
    return (b + "").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function(b) {
        return b.toUpperCase()
    })
}

function sprintf() {
    var b = arguments,
        p = 0,
        l = function(b, e, g, l) {
            g || (g = " ");
            e = b.length >= e ? "" : Array(1 + e - b.length >>> 0).join(g);
            return l ? b + e : e + b
        },
        e = function(b, e, g, p, v, n) {
            var k = p - b.length;
            0 < k && (b = g || !v ? l(b, p, n, g) : b.slice(0, e.length) + l("", k, "0", !0) + b.slice(e.length));
            return b
        },
        g = function(b, m, g, p, v, n, k) {
            b >>>= 0;
            g = g && b && {
                2: "0b",
                8: "0",
                16: "0x"
            }[m] || "";
            b = g + l(b.toString(m), n || 0, "0", !1);
            return e(b, g, p, v, k)
        },
        u = function(b, m, g, l, v, n) {
            null !== l && void 0 !== l && (b = b.slice(0, l));
            return e(b, "", m, g, v, n)
        };
    return b[p++].replace(/%%|%(\d+\$)?([\-+\'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
        function(s, m, w, y, v, n) {
            var k, x;
            if ("%%" === s) return "%";
            var z = !1;
            k = "";
            var C = !1;
            x = !1;
            var a = " ",
                c = w.length,
                d;
            for (d = 0; w && d < c; d++) switch (w.charAt(d)) {
                case " ":
                    k = " ";
                    break;
                case "+":
                    k = "+";
                    break;
                case "-":
                    z = !0;
                    break;
                case "'":
                    a = w.charAt(d + 1);
                    break;
                case "0":
                    C = !0;
                    a = "0";
                    break;
                case "#":
                    x = !0
            }
            y = y ? "*" === y ? +b[p++] : "*" === y.charAt(0) ? +b[y.slice(1, -1)] : +y : 0;
            0 > y && (y = -y, z = !0);
            if (!isFinite(y)) throw Error("sprintf: (minimum-)width must be finite");
            v = v ? "*" === v ? +b[p++] : "*" === v.charAt(0) ? +b[v.slice(1, -1)] : +v : -1 < "fFeE".indexOf(n) ?
                6 : "d" === n ? 0 : void 0;
            m = m ? b[m.slice(0, -1)] : b[p++];
            switch (n) {
                case "s":
                    return u(String(m), z, y, v, C, a);
                case "c":
                    return u(String.fromCharCode(+m), z, y, v, C);
                case "b":
                    return g(m, 2, x, z, y, v, C);
                case "o":
                    return g(m, 8, x, z, y, v, C);
                case "x":
                    return g(m, 16, x, z, y, v, C);
                case "X":
                    return g(m, 16, x, z, y, v, C).toUpperCase();
                case "u":
                    return g(m, 10, x, z, y, v, C);
                case "i":
                case "d":
                    return s = +m || 0, s = Math.round(s - s % 1), k = 0 > s ? "-" : k, m = k + l(String(Math.abs(s)), v, "0", !1), e(m, k, z, y, C);
                case "e":
                case "E":
                case "f":
                case "F":
                case "g":
                case "G":
                    return s = +m, k = 0 > s ? "-" : k, x = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(n.toLowerCase())], n = ["toString", "toUpperCase"]["eEfFgG".indexOf(n) % 2], m = k + Math.abs(s)[x](v), e(m, k, z, y, C)[n]();
                default:
                    return s
            }
        })
}

function vsprintf(b, p) {
    return this.sprintf.apply(this, [b].concat(p))
}

function explode(b, p, l) {
    if (2 > arguments.length || "undefined" === typeof b || "undefined" === typeof p) return null;
    if ("" === b || !1 === b || null === b) return !1;
    if ("function" === typeof b || "object" === typeof b || "function" === typeof p || "object" === typeof p) return {
        0: ""
    };
    !0 === b && (b = "1");
    b += "";
    var e = (p + "").split(b);
    if ("undefined" === typeof l) return e;
    0 === l && (l = 1);
    if (0 < l) return l >= e.length ? e : e.slice(0, l - 1).concat([e.slice(l - 1).join(b)]);
    if (-l >= e.length) return [];
    e.splice(e.length + l);
    return e
}

function array_merge() {
    var b = Array.prototype.slice.call(arguments),
        p = b.length,
        l, e = {},
        g = "",
        u = 0,
        s = 0,
        m = 0,
        w = 0,
        y = Object.prototype.toString;
    l = !0;
    for (m = 0; m < p; m++)
        if ("[object Array]" !== y.call(b[m])) {
            l = !1;
            break
        }
    if (l) {
        l = [];
        for (m = 0; m < p; m++) l = l.concat(b[m]);
        return l
    }
    for (w = m = 0; m < p; m++)
        if (l = b[m], "[object Array]" === y.call(l))
            for (s = 0, u = l.length; s < u; s++) e[w++] = l[s];
        else
            for (g in l) l.hasOwnProperty(g) && (parseInt(g, 10) + "" === g ? e[w++] = l[g] : e[g] = l[g]);
    return e
}

function in_array(b, p, l) {
    var e = "";
    if (l)
        for (e in p) {
            if (p[e] === b) return !0
        } else
            for (e in p)
                if (p[e] == b) return !0;
    return !1
}

function urlencode(b) {
    b = (b + "").toString();
    return encodeURIComponent(b).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}

function urldecode(b) {
    return decodeURIComponent((b + "").replace(/%(?![\da-f]{2})/gi, function() {
        return "%25"
    }).replace(/\+/g, "%20"))
}

function parse_str(b, p) {
    var l = String(b).replace(/^&/, "").replace(/&$/, "").split("&"),
        e = l.length,
        g, u, s, m, w, y, v, n, k;
    p || (p = this.window);
    for (g = 0; g < e; g++) {
        u = l[g].split("=");
        s = decodeURIComponent(u[0].replace(/\+/g, "%20"));
        for (v = 2 > u.length ? "" : decodeURIComponent(u[1].replace(/\+/g, "%20"));
            " " === s.charAt(0);) s = s.slice(1); - 1 < s.indexOf("\x00") && (s = s.slice(0, s.indexOf("\x00")));
        if (s && "[" !== s.charAt(0)) {
            n = [];
            for (u = y = 0; u < s.length; u++)
                if ("[" === s.charAt(u) && !y) y = u + 1;
                else if ("]" === s.charAt(u) && y && (n.length || n.push(s.slice(0,
                    y - 1)), n.push(s.substr(y, u - y)), y = 0, "[" !== s.charAt(u + 1))) break;
            n.length || (n = [s]);
            for (u = 0; u < n[0].length; u++) {
                y = n[0].charAt(u);
                if (" " === y || "." === y || "[" === y) n[0] = n[0].substr(0, u) + "_" + n[0].substr(u + 1);
                if ("[" === y) break
            }
            y = p;
            u = 0;
            for (k = n.length; u < k; u++)
                if (s = n[u].replace(/^['"]/, "").replace(/['"]$/, ""), w = y, "" !== s && " " !== s || 0 === u) void 0 === y[s] && (y[s] = {}), y = y[s];
                else {
                    s = -1;
                    for (m in y) y.hasOwnProperty(m) && +m > s && m.match(/^\d+$/g) && (s = +m);
                    s += 1
                }
            w[s] = v
        }
    }
}

function substr(b, p, l) {
    var e = 0,
        g = !0,
        u = 0,
        s = 0,
        m = 0,
        s = "";
    b += "";
    m = b.length;
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    switch (this.php_js.ini["unicode.semantics"] && this.php_js.ini["unicode.semantics"].local_value.toLowerCase()) {
        case "on":
            for (e = 0; e < b.length; e++)
                if (/[\uD800-\uDBFF]/.test(b.charAt(e)) && /[\uDC00-\uDFFF]/.test(b.charAt(e + 1))) {
                    g = !1;
                    break
                }
            if (!g) {
                if (0 > p)
                    for (e = m - 1, u = p += m; e >= u; e--) /[\uDC00-\uDFFF]/.test(b.charAt(e)) && /[\uD800-\uDBFF]/.test(b.charAt(e - 1)) && (p--, u--);
                else
                    for (e =
                        /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; null != e.exec(b);)
                        if (e.lastIndex - 2 < p) p++;
                        else break; if (p >= m || 0 > p) return !1;
                if (0 > l) {
                    e = m - 1;
                    for (s = m += l; e >= s; e--) /[\uDC00-\uDFFF]/.test(b.charAt(e)) && /[\uD800-\uDBFF]/.test(b.charAt(e - 1)) && (m--, s--);
                    return p > m ? !1 : b.slice(p, m)
                }
                m = p + l;
                for (e = p; e < m; e++) s += b.charAt(e), /[\uD800-\uDBFF]/.test(b.charAt(e)) && /[\uDC00-\uDFFF]/.test(b.charAt(e + 1)) && m++;
                return s
            }
        default:
            return 0 > p && (p += m), m = "undefined" === typeof l ? m : 0 > l ? l + m : l + p, p >= b.length || 0 > p || p > m ? !1 : b.slice(p, m)
    }
}

function http_build_query(b, p, l) {
    var e, g, u = [],
        s = this,
        m = function(b, e, g) {
            var n, k = [];
            !0 === e ? e = "1" : !1 === e && (e = "0");
            if (null != e) {
                if ("object" === typeof e) {
                    for (n in e) null != e[n] && k.push(m(b + "[" + n + "]", e[n], g));
                    return k.join(g)
                }
                if ("function" !== typeof e) return s.urlencode(b) + "=" + s.urlencode(e);
                throw Error("There was an error processing for http_build_query().");
            }
            return ""
        };
    l || (l = "&");
    for (g in b) e = b[g], p && !isNaN(g) && (g = String(p) + g), e = m(g, e, l), "" !== e && u.push(e);
    return u.join(l)
}

function version_compare(b, p, l) {
    this.php_js = this.php_js || {};
    this.php_js.ENV = this.php_js.ENV || {};
    var e, g, u = 0,
        s = {
            dev: -6,
            alpha: -5,
            a: -5,
            beta: -4,
            b: -4,
            RC: -3,
            rc: -3,
            "#": -2,
            p: 1,
            pl: 1
        };
    e = function(b) {
        b = ("" + b).replace(/[_\-+]/g, ".");
        b = b.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
        return b.length ? b.split(".") : [-8]
    };
    var m = function(b) {
        return b ? isNaN(b) ? s[b] || -7 : parseInt(b, 10) : 0
    };
    b = e(b);
    p = e(p);
    g = Math.max(b.length, p.length);
    for (e = 0; e < g; e++)
        if (b[e] != p[e])
            if (b[e] = m(b[e]), p[e] = m(p[e]), b[e] < p[e]) {
                u = -1;
                break
            } else if (b[e] >
        p[e]) {
        u = 1;
        break
    }
    if (!l) return u;
    switch (l) {
        case ">":
        case "gt":
            return 0 < u;
        case ">=":
        case "ge":
            return 0 <= u;
        case "<=":
        case "le":
            return 0 >= u;
        case "==":
        case "=":
        case "eq":
            return 0 === u;
        case "<>":
        case "!=":
        case "ne":
            return 0 !== u;
        case "":
        case "<":
        case "lt":
            return 0 > u;
        default:
            return null
    }
}

function func_num_args() {
    if (!arguments.callee.caller) try {
        throw Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
    } catch (b) {
        return !1
    }
    return arguments.callee.caller.arguments.length
}

function func_get_arg(b) {
    if (!arguments.callee.caller) try {
        throw Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
    } catch (p) {
        return !1
    }
    if (b > arguments.callee.caller.arguments.length - 1) try {
        throw Error("Argument number is greater than the number of arguments actually passed");
    } catch (l) {
        return !1
    }
    return arguments.callee.caller.arguments[b]
}



