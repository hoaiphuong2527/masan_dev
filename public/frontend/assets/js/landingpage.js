!function (e) {
  function t(t) {
    for (var n, o, r = t[0], a = t[1], s = 0, l = []; s < r.length; s++)
      o = r[s],
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && l.push(i[o][0]),
        i[o] = 0;
    for (n in a)
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (c && c(t); l.length;)
      l.shift()()
  }
  var n = {}
    , o = {
      0: 0
    }
    , i = (o = {
      0: 0
    },
    {
      0: 0
    });
  function r(t) {
    if (n[t])
      return n[t].exports;
    var o = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(o.exports, o, o.exports, r),
      o.l = !0,
      o.exports
  }
  r.e = function (e) {
    var t = []
      , n = {
        1: 1
      };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function (t, n) {
      for (var i = e + "." + {
        1: "7e70b70c5b8f673d4767"
      }[e] + ".style.css", a = r.p + i, s = document.getElementsByTagName("link"), l = 0; l < s.length; l++) {
        var c = (p = s[l]).getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (c === i || c === a))
          return t()
      }
      var u = document.getElementsByTagName("style");
      for (l = 0; l < u.length; l++) {
        var p;
        if ((c = (p = u[l]).getAttribute("data-href")) === i || c === a)
          return t()
      }
      var d = document.createElement("link");
      d.rel = "stylesheet",
        d.type = "text/css",
        d.onload = t,
        d.onerror = function (t) {
          var i = t && t.target && t.target.src || a
            , r = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
          r.code = "CSS_CHUNK_LOAD_FAILED",
            r.request = i,
            delete o[e],
            d.parentNode.removeChild(d),
            n(r)
        }
        ,
        d.href = a,
        document.getElementsByTagName("head")[0].appendChild(d)
    }
    )).then((function () {
      o[e] = 0
    }
    )));
    n = {
      1: 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function (t, n) {
      for (var i = e + "." + {
        1: "7e70b70c5b8f673d4767"
      }[e] + ".style.css", a = r.p + i, s = document.getElementsByTagName("link"), l = 0; l < s.length; l++) {
        var c = (p = s[l]).getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (c === i || c === a))
          return t()
      }
      var u = document.getElementsByTagName("style");
      for (l = 0; l < u.length; l++) {
        var p;
        if ((c = (p = u[l]).getAttribute("data-href")) === i || c === a)
          return t()
      }
      var d = document.createElement("link");
      d.rel = "stylesheet",
        d.type = "text/css",
        d.onload = t,
        d.onerror = function (t) {
          var i = t && t.target && t.target.src || a
            , r = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
          r.code = "CSS_CHUNK_LOAD_FAILED",
            r.request = i,
            delete o[e],
            d.parentNode.removeChild(d),
            n(r)
        }
        ,
        d.href = a,
        document.getElementsByTagName("head")[0].appendChild(d)
    }
    )).then((function () {
      o[e] = 0
    }
    )));
    var a = i[e];
    if (0 !== a)
      if (a)
        t.push(a[2]);
      else {
        var s = new Promise((function (t, n) {
          a = i[e] = [t, n]
        }
        ));
        t.push(a[2] = s);
        var l, c = document.createElement("script");
        c.charset = "utf-8",
          c.timeout = 120,
          r.nc && c.setAttribute("nonce", r.nc),
          c.src = function (e) {
            return r.p + "" + e + ".bundle." + {
              1: "c878e1c8015bea7743c4"
            }[e] + ".js"
          }(e);
        var u = new Error;
        l = function (t) {
          c.onerror = c.onload = null,
            clearTimeout(p);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type)
                , r = t && t.target && t.target.src;
              u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")",
                u.name = "ChunkLoadError",
                u.type = o,
                u.request = r,
                n[1](u)
            }
            i[e] = void 0
          }
        }
          ;
        var p = setTimeout((function () {
          l({
            type: "timeout",
            target: c
          })
        }
        ), 12e4);
        c.onerror = c.onload = l,
          document.head.appendChild(c)
      }
    return Promise.all(t)
  }
    ,
    r.m = e,
    r.c = n,
    r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }
    ,
    r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }
    ,
    r.t = function (e, t) {
      if (1 & t && (e = r(e)),
        8 & t)
        return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (r.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
        for (var o in e)
          r.d(n, o, function (t) {
            return e[t]
          }
            .bind(null, o));
      return n
    }
    ,
    r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      }
        : function () {
          return e
        }
        ;
      return r.d(t, "a", t),
        t
    }
    ,
    r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "dist/",
    r.oe = function (e) {
      throw console.error(e),
      e
    }
    ;
  var a = window.webpackJsonp = window.webpackJsonp || []
    , s = a.push.bind(a);
  a.push = t,
    a = a.slice();
  for (var l = 0; l < a.length; l++)
    t(a[l]);
  var c = s;
  r(r.s = 2)
}([function (e, t, n) {
  "use strict";
  n.d(t, "a", (function () {
    return o
  }
  ));
  const o = {
    MP3_OVERVIEW: {
      viewDisplayText: "IP View"
    },
    MP3_TER_E: {
      viewDisplayText: "TERRACE / ENTRANCE"
    },
    MP3_TER_CENTER: {
      viewDisplayText: "TERRACE / FACTORY CENTER",
      videoId: "gKb-TJUpf78",
      videoTitle: "TERRACE / 360 VIDEO (1 min)"
    },
    MP3_TER_C1: {
      viewDisplayText: "TERRACE / CORNER 1"
    },
    MP3_TER_C2: {
      viewDisplayText: "TERRACE / CORNER 2"
    },
    MP3_TER_O1: {
      viewDisplayText: "TERRACE / OFFICE 1"
    },
    MP3_TER_O2: {
      viewDisplayText: "TERRACE / OFFICE 2"
    },
    MP3_SEMI_E: {
      viewDisplayText: "SEMI - DETACHED / ENTRANCE"
    },
    MP3_SEMI_CENTER: {
      viewDisplayText: "SEMI - DETACHED / FACTORY CENTER",
      videoId: "2E8sAGIvxrY",
      videoTitle: "SEMI - DETACHED / 360 VIDEO (1 min)"
    },
    MP3_SEMI_C1: {
      viewDisplayText: "SEMI - DETACHED / CORNER 1"
    },
    MP3_SEMI_C2: {
      viewDisplayText: "SEMI - DETACHED / CORNER 2"
    },
    MP3_SEMI_O1: {
      viewDisplayText: "SEMI - DETACHED / OFFICE 1"
    },
    MP3_SEMI_O2: {
      viewDisplayText: "SEMI - DETACHED / OFFICE 2"
    },
    MP3_DET_E: {
      viewDisplayText: "DETACHED / ENTRANCE"
    },
    MP3_DET_CENTER: {
      viewDisplayText: "DETACHED / FACTORY CENTER",
      videoId: "mEZgDTyZ654",
      videoTitle: "DETACHED / 360 VIDEO (1 min)"
    },
    MP3_DET_O1: {
      viewDisplayText: "DETACHED / OFFICE 1"
    },
    MP3_DET_O2: {
      viewDisplayText: "DETACHED / OFFICE 2"
    },
    MP3_OUTDOOR_1: {
      viewDisplayText: "OUTDOOR VIEW 1"
    },
    MP3_OUTDOOR_2: {
      viewDisplayText: "OUTDOOR VIEW 2"
    },
    MP3_OUTDOOR_3: {
      viewDisplayText: "OUTDOOR VIEW 3"
    },
    MP3_OUTDOOR_4: {
      viewDisplayText: "OUTDOOR VIEW 4"
    },
    MP3_OUTDOOR_5: {
      viewDisplayText: "OUTDOOR VIEW 5"
    },
    MP3_OUTDOOR_6: {
      viewDisplayText: "OUTDOOR VIEW 6"
    },
    MP3_OUTDOOR_7: {
      viewDisplayText: "OUTDOOR VIEW 7"
    },
    MP3_OUTDOOR_8: {
      viewDisplayText: "OUTDOOR VIEW 8"
    },
    MP3_OUTDOOR_9: {
      viewDisplayText: "OUTDOOR VIEW 9"
    },
    ...{
      BB_OVERVIEW: {
        viewDisplayText: "IP View"
      },
      BB_TER_E1: {
        viewDisplayText: "TERRACE / ENTRANCE 1"
      },
      BB_TER_E2: {
        viewDisplayText: "TERRACE / ENTRANCE 2"
      },
      BB_TER_CENTER: {
        viewDisplayText: "TERRACE / FACTORY CENTER",
        videoId: "BlH4HdrKNdM",
        videoTitle: "TERRACE / 360 VIDEO (1 min)"
      },
      BB_TER_C1: {
        viewDisplayText: "TERRACE / CORNER 1"
      },
      BB_TER_C2: {
        viewDisplayText: "TERRACE / CORNER 2"
      },
      BB_TER_C3: {
        viewDisplayText: "TERRACE / CORNER 3"
      },
      BB_TER_O1: {
        viewDisplayText: "TERRACE / OFFICE 1"
      },
      BB_TER_O2: {
        viewDisplayText: "TERRACE / OFFICE 2"
      },
      BB_SEMI_E1: {
        viewDisplayText: "SEMI - DETACHED / ENTRANCE 1"
      },
      BB_SEMI_E2: {
        viewDisplayText: "SEMI - DETACHED / ENTRANCE 2"
      },
      BB_SEMI_CENTER: {
        viewDisplayText: "SEMI - DETACHED / FACTORY CENTER",
        videoId: "6bDs-avkXrg",
        videoTitle: "SEMI - DETACHED / 360 VIDEO (1 min)"
      },
      BB_SEMI_C1: {
        viewDisplayText: "SEMI - DETACHED / CORNER 1"
      },
      BB_SEMI_C2: {
        viewDisplayText: "SEMI - DETACHED / CORNER 2"
      },
      BB_SEMI_C3: {
        viewDisplayText: "SEMI - DETACHED / CORNER 3"
      },
      BB_SEMI_O1: {
        viewDisplayText: "SEMI - DETACHED / OFFICE 1"
      },
      BB_SEMI_O2: {
        viewDisplayText: "SEMI - DETACHED / OFFICE 2"
      },
      BB_DET_E: {
        viewDisplayText: "DETACHED / ENTRANCE"
      },
      BB_DET_CENTER: {
        viewDisplayText: "DETACHED / FACTORY CENTER",
        videoId: "p6H768rSqJQ",
        videoTitle: "DETACHED / 360 VIDEO (1 min)"
      },
      BB_DET_O: {
        viewDisplayText: "DETACHED / OFFICE"
      },
      BB_OUTDOOR_1: {
        viewDisplayText: "OUTDOOR VIEW 1"
      },
      BB_OUTDOOR_2: {
        viewDisplayText: "OUTDOOR VIEW 2"
      },
      BB_OUTDOOR_3: {
        viewDisplayText: "OUTDOOR VIEW 3"
      },
      BB_OUTDOOR_4: {
        viewDisplayText: "OUTDOOR VIEW 4"
      },
      BB_OUTDOOR_5: {
        viewDisplayText: "OUTDOOR VIEW 5"
      },
      BB_OUTDOOR_6: {
        viewDisplayText: "OUTDOOR VIEW 6"
      }
    }
  }
}
  , function (e, t, n) {
    var o;
    /*!
  * jQuery JavaScript Library v3.5.1
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright JS Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2020-05-04T22:49Z
  */
    !function (t, n) {
      "use strict";
      "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
        if (!e.document)
          throw new Error("jQuery requires a window with a document");
        return n(e)
      }
        : n(t)
    }("undefined" != typeof window ? window : this, (function (n, i) {
      "use strict";
      var r = []
        , a = Object.getPrototypeOf
        , s = r.slice
        , l = r.flat ? function (e) {
          return r.flat.call(e)
        }
          : function (e) {
            return r.concat.apply([], e)
          }
        , c = r.push
        , u = r.indexOf
        , p = {}
        , d = p.toString
        , h = p.hasOwnProperty
        , f = h.toString
        , y = f.call(Object)
        , m = {}
        , g = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType
        }
        , v = function (e) {
          return null != e && e === e.window
        }
        , x = n.document
        , _ = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };
      function E(e, t, n) {
        var o, i, r = (n = n || x).createElement("script");
        if (r.text = e,
          t)
          for (o in _)
            (i = t[o] || t.getAttribute && t.getAttribute(o)) && r.setAttribute(o, i);
        n.head.appendChild(r).parentNode.removeChild(r)
      }
      function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
      }
      var T = function (e, t) {
        return new T.fn.init(e, t)
      };
      function w(e) {
        var t = !!e && "length" in e && e.length
          , n = b(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }
      T.fn = T.prototype = {
        jquery: "3.5.1",
        constructor: T,
        length: 0,
        toArray: function () {
          return s.call(this)
        },
        get: function (e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
          var t = T.merge(this.constructor(), e);
          return t.prevObject = this,
            t
        },
        each: function (e) {
          return T.each(this, e)
        },
        map: function (e) {
          return this.pushStack(T.map(this, (function (t, n) {
            return e.call(t, n, t)
          }
          )))
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
          return this.eq(0)
        },
        last: function () {
          return this.eq(-1)
        },
        even: function () {
          return this.pushStack(T.grep(this, (function (e, t) {
            return (t + 1) % 2
          }
          )))
        },
        odd: function () {
          return this.pushStack(T.grep(this, (function (e, t) {
            return t % 2
          }
          )))
        },
        eq: function (e) {
          var t = this.length
            , n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
          return this.prevObject || this.constructor()
        },
        push: c,
        sort: r.sort,
        splice: r.splice
      },
        T.extend = T.fn.extend = function () {
          var e, t, n, o, i, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
          for ("boolean" == typeof a && (c = a,
            a = arguments[s] || {},
            s++),
            "object" == typeof a || g(a) || (a = {}),
            s === l && (a = this,
              s--); s < l; s++)
            if (null != (e = arguments[s]))
              for (t in e)
                o = e[t],
                  "__proto__" !== t && a !== o && (c && o && (T.isPlainObject(o) || (i = Array.isArray(o))) ? (n = a[t],
                    r = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = T.extend(c, r, o)) : void 0 !== o && (a[t] = o));
          return a
        }
        ,
        T.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e)
          },
          noop: function () { },
          isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && f.call(n) === y)
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e)
              return !1;
            return !0
          },
          globalEval: function (e, t, n) {
            E(e, {
              nonce: t && t.nonce
            }, n)
          },
          each: function (e, t) {
            var n, o = 0;
            if (w(e))
              for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++)
                ;
            else
              for (o in e)
                if (!1 === t.call(e[o], o, e[o]))
                  break;
            return e
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
              n
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
          },
          merge: function (e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n; o++)
              e[i++] = t[o];
            return e.length = i,
              e
          },
          grep: function (e, t, n) {
            for (var o = [], i = 0, r = e.length, a = !n; i < r; i++)
              !t(e[i], i) !== a && o.push(e[i]);
            return o
          },
          map: function (e, t, n) {
            var o, i, r = 0, a = [];
            if (w(e))
              for (o = e.length; r < o; r++)
                null != (i = t(e[r], r, n)) && a.push(i);
            else
              for (r in e)
                null != (i = t(e[r], r, n)) && a.push(i);
            return l(a)
          },
          guid: 1,
          support: m
        }),
        "function" == typeof Symbol && (T.fn[Symbol.iterator] = r[Symbol.iterator]),
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
          p["[object " + t + "]"] = t.toLowerCase()
        }
        ));
      var O = /*!
* Sizzle CSS Selector Engine v2.3.5
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2020-03-14
*/
        function (e) {
          var t, n, o, i, r, a, s, l, c, u, p, d, h, f, y, m, g, v, x, _ = "sizzle" + 1 * new Date, E = e.document, b = 0, T = 0, w = le(), O = le(), j = le(), M = le(), C = function (e, t) {
            return e === t && (p = !0),
              0
          }, R = {}.hasOwnProperty, B = [], D = B.pop, k = B.push, S = B.push, I = B.slice, P = function (e, t) {
            for (var n = 0, o = e.length; n < o; n++)
              if (e[n] === t)
                return n;
            return -1
          }, A = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", L = "\\[" + N + "*(" + H + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + N + "*\\]", V = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)", F = new RegExp(N + "+", "g"), U = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"), q = new RegExp("^" + N + "*," + N + "*"), z = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"), $ = new RegExp(N + "|>"), W = new RegExp(V), X = new RegExp("^" + H + "$"), G = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + L),
            PSEUDO: new RegExp("^" + V),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + A + ")$", "i"),
            needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
          }, Q = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
          }, oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          }, re = function () {
            d()
          }, ae = _e((function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }
          ), {
            dir: "parentNode",
            next: "legend"
          });
          try {
            S.apply(B = I.call(E.childNodes), E.childNodes),
              B[E.childNodes.length].nodeType
          } catch (e) {
            S = {
              apply: B.length ? function (e, t) {
                k.apply(e, I.call(t))
              }
                : function (e, t) {
                  for (var n = e.length, o = 0; e[n++] = t[o++];)
                    ;
                  e.length = n - 1
                }
            }
          }
          function se(e, t, o, i) {
            var r, s, c, u, p, f, g, v = t && t.ownerDocument, E = t ? t.nodeType : 9;
            if (o = o || [],
              "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E)
              return o;
            if (!i && (d(t),
              t = t || h,
              y)) {
              if (11 !== E && (p = Z.exec(e)))
                if (r = p[1]) {
                  if (9 === E) {
                    if (!(c = t.getElementById(r)))
                      return o;
                    if (c.id === r)
                      return o.push(c),
                        o
                  } else if (v && (c = v.getElementById(r)) && x(t, c) && c.id === r)
                    return o.push(c),
                      o
                } else {
                  if (p[2])
                    return S.apply(o, t.getElementsByTagName(e)),
                      o;
                  if ((r = p[3]) && n.getElementsByClassName && t.getElementsByClassName)
                    return S.apply(o, t.getElementsByClassName(r)),
                      o
                }
              if (n.qsa && !M[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                if (g = e,
                  v = t,
                  1 === E && ($.test(e) || z.test(e))) {
                  for ((v = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(oe, ie) : t.setAttribute("id", u = _)),
                    s = (f = a(e)).length; s--;)
                    f[s] = (u ? "#" + u : ":scope") + " " + xe(f[s]);
                  g = f.join(",")
                }
                try {
                  return S.apply(o, v.querySelectorAll(g)),
                    o
                } catch (t) {
                  M(e, !0)
                } finally {
                  u === _ && t.removeAttribute("id")
                }
              }
            }
            return l(e.replace(U, "$1"), t, o, i)
          }
          function le() {
            var e = [];
            return function t(n, i) {
              return e.push(n + " ") > o.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
          }
          function ce(e) {
            return e[_] = !0,
              e
          }
          function ue(e) {
            var t = h.createElement("fieldset");
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
          }
          function pe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;)
              o.attrHandle[n[i]] = t
          }
          function de(e, t) {
            var n = t && e
              , o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o)
              return o;
            if (n)
              for (; n = n.nextSibling;)
                if (n === t)
                  return -1;
            return e ? 1 : -1
          }
          function he(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
            }
          }
          function fe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
            }
          }
          function ye(e) {
            return function (t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
          }
          function me(e) {
            return ce((function (t) {
              return t = +t,
                ce((function (n, o) {
                  for (var i, r = e([], n.length, t), a = r.length; a--;)
                    n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                }
                ))
            }
            ))
          }
          function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
          }
          for (t in n = se.support = {},
            r = se.isXML = function (e) {
              var t = e.namespaceURI
                , n = (e.ownerDocument || e).documentElement;
              return !Q.test(t || n && n.nodeName || "HTML")
            }
            ,
            d = se.setDocument = function (e) {
              var t, i, a = e ? e.ownerDocument || e : E;
              return a != h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement,
                y = !r(h),
                E != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                n.scope = ue((function (e) {
                  return f.appendChild(e).appendChild(h.createElement("div")),
                    void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }
                )),
                n.attributes = ue((function (e) {
                  return e.className = "i",
                    !e.getAttribute("className")
                }
                )),
                n.getElementsByTagName = ue((function (e) {
                  return e.appendChild(h.createComment("")),
                    !e.getElementsByTagName("*").length
                }
                )),
                n.getElementsByClassName = K.test(h.getElementsByClassName),
                n.getById = ue((function (e) {
                  return f.appendChild(e).id = _,
                    !h.getElementsByName || !h.getElementsByName(_).length
                }
                )),
                n.getById ? (o.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t
                  }
                }
                  ,
                  o.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && y) {
                      var n = t.getElementById(e);
                      return n ? [n] : []
                    }
                  }
                ) : (o.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                  }
                }
                  ,
                  o.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && y) {
                      var n, o, i, r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                        for (i = t.getElementsByName(e),
                          o = 0; r = i[o++];)
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r]
                      }
                      return []
                    }
                  }
                  ),
                o.find.TAG = n.getElementsByTagName ? function (e, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                  : function (e, t) {
                    var n, o = [], i = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; n = r[i++];)
                        1 === n.nodeType && o.push(n);
                      return o
                    }
                    return r
                  }
                ,
                o.find.CLASS = n.getElementsByClassName && function (e, t) {
                  if (void 0 !== t.getElementsByClassName && y)
                    return t.getElementsByClassName(e)
                }
                ,
                g = [],
                m = [],
                (n.qsa = K.test(h.querySelectorAll)) && (ue((function (e) {
                  var t;
                  f.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + A + ")"),
                    e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                    (t = h.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || m.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    m.push("[\\r\\n\\f]")
                }
                )),
                  ue((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                      f.appendChild(e).disabled = !0,
                      2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      m.push(",.*:")
                  }
                  ))),
                (n.matchesSelector = K.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue((function (e) {
                  n.disconnectedMatch = v.call(e, "*"),
                    v.call(e, "[s!='']:x"),
                    g.push("!=", V)
                }
                )),
                m = m.length && new RegExp(m.join("|")),
                g = g.length && new RegExp(g.join("|")),
                t = K.test(f.compareDocumentPosition),
                x = t || K.test(f.contains) ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e
                    , o = t && t.parentNode;
                  return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                }
                  : function (e, t) {
                    if (t)
                      for (; t = t.parentNode;)
                        if (t === e)
                          return !0;
                    return !1
                  }
                ,
                C = t ? function (e, t) {
                  if (e === t)
                    return p = !0,
                      0;
                  var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return o || (1 & (o = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === o ? e == h || e.ownerDocument == E && x(E, e) ? -1 : t == h || t.ownerDocument == E && x(E, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & o ? -1 : 1)
                }
                  : function (e, t) {
                    if (e === t)
                      return p = !0,
                        0;
                    var n, o = 0, i = e.parentNode, r = t.parentNode, a = [e], s = [t];
                    if (!i || !r)
                      return e == h ? -1 : t == h ? 1 : i ? -1 : r ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === r)
                      return de(e, t);
                    for (n = e; n = n.parentNode;)
                      a.unshift(n);
                    for (n = t; n = n.parentNode;)
                      s.unshift(n);
                    for (; a[o] === s[o];)
                      o++;
                    return o ? de(a[o], s[o]) : a[o] == E ? -1 : s[o] == E ? 1 : 0
                  }
                ,
                h) : h
            }
            ,
            se.matches = function (e, t) {
              return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function (e, t) {
              if (d(e),
                n.matchesSelector && y && !M[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t)))
                try {
                  var o = v.call(e, t);
                  if (o || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                    return o
                } catch (e) {
                  M(t, !0)
                }
              return se(t, h, null, [e]).length > 0
            }
            ,
            se.contains = function (e, t) {
              return (e.ownerDocument || e) != h && d(e),
                x(e, t)
            }
            ,
            se.attr = function (e, t) {
              (e.ownerDocument || e) != h && d(e);
              var i = o.attrHandle[t.toLowerCase()]
                , r = i && R.call(o.attrHandle, t.toLowerCase()) ? i(e, t, !y) : void 0;
              return void 0 !== r ? r : n.attributes || !y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            se.escape = function (e) {
              return (e + "").replace(oe, ie)
            }
            ,
            se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function (e) {
              var t, o = [], i = 0, r = 0;
              if (p = !n.detectDuplicates,
                u = !n.sortStable && e.slice(0),
                e.sort(C),
                p) {
                for (; t = e[r++];)
                  t === e[r] && (i = o.push(r));
                for (; i--;)
                  e.splice(o[i], 1)
              }
              return u = null,
                e
            }
            ,
            i = se.getText = function (e) {
              var t, n = "", o = 0, r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent)
                    return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                    n += i(e)
                } else if (3 === r || 4 === r)
                  return e.nodeValue
              } else
                for (; t = e[o++];)
                  n += i(t);
              return n
            }
            ,
            (o = se.selectors = {
              cacheLength: 50,
              createPseudo: ce,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0
                },
                " ": {
                  dir: "parentNode"
                },
                "+": {
                  dir: "previousSibling",
                  first: !0
                },
                "~": {
                  dir: "previousSibling"
                }
              },
              preFilter: {
                ATTR: function (e) {
                  return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function (e) {
                  return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                      e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                      e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function (e) {
                  var t, n = !e[6] && e[2];
                  return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e ? function () {
                    return !0
                  }
                    : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                  var t = w[e + " "];
                  return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && w(e, (function (e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                  }
                  ))
                },
                ATTR: function (e, t, n) {
                  return function (o) {
                    var i = se.attr(o, e);
                    return null == i ? "!=" === t : !t || (i += "",
                      "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                  }
                },
                CHILD: function (e, t, n, o, i) {
                  var r = "nth" !== e.slice(0, 3)
                    , a = "last" !== e.slice(-4)
                    , s = "of-type" === t;
                  return 1 === o && 0 === i ? function (e) {
                    return !!e.parentNode
                  }
                    : function (t, n, l) {
                      var c, u, p, d, h, f, y = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode, g = s && t.nodeName.toLowerCase(), v = !l && !s, x = !1;
                      if (m) {
                        if (r) {
                          for (; y;) {
                            for (d = t; d = d[y];)
                              if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
                                return !1;
                            f = y = "only" === e && !f && "nextSibling"
                          }
                          return !0
                        }
                        if (f = [a ? m.firstChild : m.lastChild],
                          a && v) {
                          for (x = (h = (c = (u = (p = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === b && c[1]) && c[2],
                            d = h && m.childNodes[h]; d = ++h && d && d[y] || (x = h = 0) || f.pop();)
                            if (1 === d.nodeType && ++x && d === t) {
                              u[e] = [b, h, x];
                              break
                            }
                        } else if (v && (x = h = (c = (u = (p = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === b && c[1]),
                          !1 === x)
                          for (; (d = ++h && d && d[y] || (x = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++x || (v && ((u = (p = d[_] || (d[_] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] = [b, x]),
                            d !== t));)
                            ;
                        return (x -= i) === o || x % o == 0 && x / o >= 0
                      }
                    }
                },
                PSEUDO: function (e, t) {
                  var n, i = o.pseudos[e] || o.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                  return i[_] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    o.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                      for (var o, r = i(e, t), a = r.length; a--;)
                        e[o = P(e, r[a])] = !(n[o] = r[a])
                    }
                    )) : function (e) {
                      return i(e, 0, n)
                    }
                  ) : i
                }
              },
              pseudos: {
                not: ce((function (e) {
                  var t = []
                    , n = []
                    , o = s(e.replace(U, "$1"));
                  return o[_] ? ce((function (e, t, n, i) {
                    for (var r, a = o(e, null, i, []), s = e.length; s--;)
                      (r = a[s]) && (e[s] = !(t[s] = r))
                  }
                  )) : function (e, i, r) {
                    return t[0] = e,
                      o(t, null, r, n),
                      t[0] = null,
                      !n.pop()
                  }
                }
                )),
                has: ce((function (e) {
                  return function (t) {
                    return se(e, t).length > 0
                  }
                }
                )),
                contains: ce((function (e) {
                  return e = e.replace(te, ne),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: ce((function (e) {
                  return X.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function (t) {
                      var n;
                      do {
                        if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                          return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      } while ((t = t.parentNode) && 1 === t.nodeType); return !1
                    }
                }
                )),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
                },
                root: function (e) {
                  return e === f
                },
                focus: function (e) {
                  return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ye(!1),
                disabled: ye(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6)
                      return !1;
                  return !0
                },
                parent: function (e) {
                  return !o.pseudos.empty(e)
                },
                header: function (e) {
                  return J.test(e.nodeName)
                },
                input: function (e) {
                  return Y.test(e.nodeName)
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me((function () {
                  return [0]
                }
                )),
                last: me((function (e, t) {
                  return [t - 1]
                }
                )),
                eq: me((function (e, t, n) {
                  return [n < 0 ? n + t : n]
                }
                )),
                even: me((function (e, t) {
                  for (var n = 0; n < t; n += 2)
                    e.push(n);
                  return e
                }
                )),
                odd: me((function (e, t) {
                  for (var n = 1; n < t; n += 2)
                    e.push(n);
                  return e
                }
                )),
                lt: me((function (e, t, n) {
                  for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0;)
                    e.push(o);
                  return e
                }
                )),
                gt: me((function (e, t, n) {
                  for (var o = n < 0 ? n + t : n; ++o < t;)
                    e.push(o);
                  return e
                }
                ))
              }
            }).pseudos.nth = o.pseudos.eq,
          {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          })
            o.pseudos[t] = he(t);
          for (t in {
            submit: !0,
            reset: !0
          })
            o.pseudos[t] = fe(t);
          function ve() { }
          function xe(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++)
              o += e[t].value;
            return o
          }
          function _e(e, t, n) {
            var o = t.dir
              , i = t.next
              , r = i || o
              , a = n && "parentNode" === r
              , s = T++;
            return t.first ? function (t, n, i) {
              for (; t = t[o];)
                if (1 === t.nodeType || a)
                  return e(t, n, i);
              return !1
            }
              : function (t, n, l) {
                var c, u, p, d = [b, s];
                if (l) {
                  for (; t = t[o];)
                    if ((1 === t.nodeType || a) && e(t, n, l))
                      return !0
                } else
                  for (; t = t[o];)
                    if (1 === t.nodeType || a)
                      if (u = (p = t[_] || (t[_] = {}))[t.uniqueID] || (p[t.uniqueID] = {}),
                        i && i === t.nodeName.toLowerCase())
                        t = t[o] || t;
                      else {
                        if ((c = u[r]) && c[0] === b && c[1] === s)
                          return d[2] = c[2];
                        if (u[r] = d,
                          d[2] = e(t, n, l))
                          return !0
                      }
                return !1
              }
          }
          function Ee(e) {
            return e.length > 1 ? function (t, n, o) {
              for (var i = e.length; i--;)
                if (!e[i](t, n, o))
                  return !1;
              return !0
            }
              : e[0]
          }
          function be(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (r = e[s]) && (n && !n(r, o, i) || (a.push(r),
                c && t.push(s)));
            return a
          }
          function Te(e, t, n, o, i, r) {
            return o && !o[_] && (o = Te(o)),
              i && !i[_] && (i = Te(i, r)),
              ce((function (r, a, s, l) {
                var c, u, p, d = [], h = [], f = a.length, y = r || function (e, t, n) {
                  for (var o = 0, i = t.length; o < i; o++)
                    se(e, t[o], n);
                  return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !r && t ? y : be(y, d, e, s, l), g = n ? i || (r ? e : f || o) ? [] : a : m;
                if (n && n(m, g, s, l),
                  o)
                  for (c = be(g, h),
                    o(c, [], s, l),
                    u = c.length; u--;)
                    (p = c[u]) && (g[h[u]] = !(m[h[u]] = p));
                if (r) {
                  if (i || e) {
                    if (i) {
                      for (c = [],
                        u = g.length; u--;)
                        (p = g[u]) && c.push(m[u] = p);
                      i(null, g = [], c, l)
                    }
                    for (u = g.length; u--;)
                      (p = g[u]) && (c = i ? P(r, p) : d[u]) > -1 && (r[c] = !(a[c] = p))
                  }
                } else
                  g = be(g === a ? g.splice(f, g.length) : g),
                    i ? i(null, a, g, l) : S.apply(a, g)
              }
              ))
          }
          function we(e) {
            for (var t, n, i, r = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, u = _e((function (e) {
              return e === t
            }
            ), s, !0), p = _e((function (e) {
              return P(t, e) > -1
            }
            ), s, !0), d = [function (e, n, o) {
              var i = !a && (o || n !== c) || ((t = n).nodeType ? u(e, n, o) : p(e, n, o));
              return t = null,
                i
            }
            ]; l < r; l++)
              if (n = o.relative[e[l].type])
                d = [_e(Ee(d), n)];
              else {
                if ((n = o.filter[e[l].type].apply(null, e[l].matches))[_]) {
                  for (i = ++l; i < r && !o.relative[e[i].type]; i++)
                    ;
                  return Te(l > 1 && Ee(d), l > 1 && xe(e.slice(0, l - 1).concat({
                    value: " " === e[l - 2].type ? "*" : ""
                  })).replace(U, "$1"), n, l < i && we(e.slice(l, i)), i < r && we(e = e.slice(i)), i < r && xe(e))
                }
                d.push(n)
              }
            return Ee(d)
          }
          return ve.prototype = o.filters = o.pseudos,
            o.setFilters = new ve,
            a = se.tokenize = function (e, t) {
              var n, i, r, a, s, l, c, u = O[e + " "];
              if (u)
                return t ? 0 : u.slice(0);
              for (s = e,
                l = [],
                c = o.preFilter; s;) {
                for (a in n && !(i = q.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                  l.push(r = [])),
                  n = !1,
                  (i = z.exec(s)) && (n = i.shift(),
                    r.push({
                      value: n,
                      type: i[0].replace(U, " ")
                    }),
                    s = s.slice(n.length)),
                  o.filter)
                  !(i = G[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(),
                    r.push({
                      value: n,
                      type: a,
                      matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                  break
              }
              return t ? s.length : s ? se.error(e) : O(e, l).slice(0)
            }
            ,
            s = se.compile = function (e, t) {
              var n, i = [], r = [], s = j[e + " "];
              if (!s) {
                for (t || (t = a(e)),
                  n = t.length; n--;)
                  (s = we(t[n]))[_] ? i.push(s) : r.push(s);
                (s = j(e, function (e, t) {
                  var n = t.length > 0
                    , i = e.length > 0
                    , r = function (r, a, s, l, u) {
                      var p, f, m, g = 0, v = "0", x = r && [], _ = [], E = c, T = r || i && o.find.TAG("*", u), w = b += null == E ? 1 : Math.random() || .1, O = T.length;
                      for (u && (c = a == h || a || u); v !== O && null != (p = T[v]); v++) {
                        if (i && p) {
                          for (f = 0,
                            a || p.ownerDocument == h || (d(p),
                              s = !y); m = e[f++];)
                            if (m(p, a || h, s)) {
                              l.push(p);
                              break
                            }
                          u && (b = w)
                        }
                        n && ((p = !m && p) && g--,
                          r && x.push(p))
                      }
                      if (g += v,
                        n && v !== g) {
                        for (f = 0; m = t[f++];)
                          m(x, _, a, s);
                        if (r) {
                          if (g > 0)
                            for (; v--;)
                              x[v] || _[v] || (_[v] = D.call(l));
                          _ = be(_)
                        }
                        S.apply(l, _),
                          u && !r && _.length > 0 && g + t.length > 1 && se.uniqueSort(l)
                      }
                      return u && (b = w,
                        c = E),
                        x
                    };
                  return n ? ce(r) : r
                }(r, i))).selector = e
              }
              return s
            }
            ,
            l = se.select = function (e, t, n, i) {
              var r, l, c, u, p, d = "function" == typeof e && e, h = !i && a(e = d.selector || e);
              if (n = n || [],
                1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && y && o.relative[l[1].type]) {
                  if (!(t = (o.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                    return n;
                  d && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (r = G.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                  !o.relative[u = c.type]);)
                  if ((p = o.find[u]) && (i = p(c.matches[0].replace(te, ne), ee.test(l[0].type) && ge(t.parentNode) || t))) {
                    if (l.splice(r, 1),
                      !(e = i.length && xe(l)))
                      return S.apply(n, i),
                        n;
                    break
                  }
              }
              return (d || s(e, h))(i, t, !y, n, !t || ee.test(e) && ge(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = _.split("").sort(C).join("") === _,
            n.detectDuplicates = !!p,
            d(),
            n.sortDetached = ue((function (e) {
              return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            }
            )),
            ue((function (e) {
              return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }
            )) || pe("type|href|height|width", (function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }
            )),
            n.attributes && ue((function (e) {
              return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }
            )) || pe("value", (function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
            }
            )),
            ue((function (e) {
              return null == e.getAttribute("disabled")
            }
            )) || pe(A, (function (e, t, n) {
              var o;
              if (!n)
                return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }
            )),
            se
        }(n);
      T.find = O,
        T.expr = O.selectors,
        T.expr[":"] = T.expr.pseudos,
        T.uniqueSort = T.unique = O.uniqueSort,
        T.text = O.getText,
        T.isXMLDoc = O.isXML,
        T.contains = O.contains,
        T.escapeSelector = O.escape;
      var j = function (e, t, n) {
        for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && T(e).is(n))
              break;
            o.push(e)
          }
        return o
      }
        , M = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n
        }
        , C = T.expr.match.needsContext;
      function R(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function D(e, t, n) {
        return g(t) ? T.grep(e, (function (e, o) {
          return !!t.call(e, o, e) !== n
        }
        )) : t.nodeType ? T.grep(e, (function (e) {
          return e === t !== n
        }
        )) : "string" != typeof t ? T.grep(e, (function (e) {
          return u.call(t, e) > -1 !== n
        }
        )) : T.filter(t, e, n)
      }
      T.filter = function (e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === o.nodeType ? T.find.matchesSelector(o, e) ? [o] : [] : T.find.matches(e, T.grep(t, (function (e) {
            return 1 === e.nodeType
          }
          )))
      }
        ,
        T.fn.extend({
          find: function (e) {
            var t, n, o = this.length, i = this;
            if ("string" != typeof e)
              return this.pushStack(T(e).filter((function () {
                for (t = 0; t < o; t++)
                  if (T.contains(i[t], this))
                    return !0
              }
              )));
            for (n = this.pushStack([]),
              t = 0; t < o; t++)
              T.find(e, i[t], n);
            return o > 1 ? T.uniqueSort(n) : n
          },
          filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
          },
          not: function (e) {
            return this.pushStack(D(this, e || [], !0))
          },
          is: function (e) {
            return !!D(this, "string" == typeof e && C.test(e) ? T(e) : e || [], !1).length
          }
        });
      var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (T.fn.init = function (e, t, n) {
        var o, i;
        if (!e)
          return this;
        if (n = n || k,
          "string" == typeof e) {
          if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : S.exec(e)) || !o[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (o[1]) {
            if (t = t instanceof T ? t[0] : t,
              T.merge(this, T.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
              B.test(o[1]) && T.isPlainObject(t))
              for (o in t)
                g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this
          }
          return (i = x.getElementById(o[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
          this.length = 1,
          this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
      }
      ).prototype = T.fn,
        k = T(x);
      var I = /^(?:parents|prev(?:Until|All))/
        , P = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
      function A(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
          ;
        return e
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this)
            , n = t.length;
          return this.filter((function () {
            for (var e = 0; e < n; e++)
              if (T.contains(this, t[e]))
                return !0
          }
          ))
        },
        closest: function (e, t) {
          var n, o = 0, i = this.length, r = [], a = "string" != typeof e && T(e);
          if (!C.test(e))
            for (; o < i; o++)
              for (n = this[o]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                  r.push(n);
                  break
                }
          return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r)
        },
        index: function (e) {
          return e ? "string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }),
        T.each({
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
          },
          parents: function (e) {
            return j(e, "parentNode")
          },
          parentsUntil: function (e, t, n) {
            return j(e, "parentNode", n)
          },
          next: function (e) {
            return A(e, "nextSibling")
          },
          prev: function (e) {
            return A(e, "previousSibling")
          },
          nextAll: function (e) {
            return j(e, "nextSibling")
          },
          prevAll: function (e) {
            return j(e, "previousSibling")
          },
          nextUntil: function (e, t, n) {
            return j(e, "nextSibling", n)
          },
          prevUntil: function (e, t, n) {
            return j(e, "previousSibling", n)
          },
          siblings: function (e) {
            return M((e.parentNode || {}).firstChild, e)
          },
          children: function (e) {
            return M(e.firstChild)
          },
          contents: function (e) {
            return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (R(e, "template") && (e = e.content || e),
              T.merge([], e.childNodes))
          }
        }, (function (e, t) {
          T.fn[e] = function (n, o) {
            var i = T.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n),
              o && "string" == typeof o && (i = T.filter(o, i)),
              this.length > 1 && (P[e] || T.uniqueSort(i),
                I.test(e) && i.reverse()),
              this.pushStack(i)
          }
        }
        ));
      var N = /[^\x20\t\r\n\f]+/g;
      function H(e) {
        return e
      }
      function L(e) {
        throw e
      }
      function V(e, t, n, o) {
        var i;
        try {
          e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }
      T.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return T.each(e.match(N) || [], (function (e, n) {
            t[n] = !0
          }
          )),
            t
        }(e) : T.extend({}, e);
        var t, n, o, i, r = [], a = [], s = -1, l = function () {
          for (i = i || e.once,
            o = t = !0; a.length; s = -1)
            for (n = a.shift(); ++s < r.length;)
              !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length,
                n = !1);
          e.memory || (n = !1),
            t = !1,
            i && (r = n ? [] : "")
        }, c = {
          add: function () {
            return r && (n && !t && (s = r.length - 1,
              a.push(n)),
              function t(n) {
                T.each(n, (function (n, o) {
                  g(o) ? e.unique && c.has(o) || r.push(o) : o && o.length && "string" !== b(o) && t(o)
                }
                ))
              }(arguments),
              n && !t && l()),
              this
          },
          remove: function () {
            return T.each(arguments, (function (e, t) {
              for (var n; (n = T.inArray(t, r, n)) > -1;)
                r.splice(n, 1),
                  n <= s && s--
            }
            )),
              this
          },
          has: function (e) {
            return e ? T.inArray(e, r) > -1 : r.length > 0
          },
          empty: function () {
            return r && (r = []),
              this
          },
          disable: function () {
            return i = a = [],
              r = n = "",
              this
          },
          disabled: function () {
            return !r
          },
          lock: function () {
            return i = a = [],
              n || t || (r = n = ""),
              this
          },
          locked: function () {
            return !!i
          },
          fireWith: function (e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n],
              a.push(n),
              t || l()),
              this
          },
          fire: function () {
            return c.fireWith(this, arguments),
              this
          },
          fired: function () {
            return !!o
          }
        };
        return c
      }
        ,
        T.extend({
          Deferred: function (e) {
            var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , i = {
                state: function () {
                  return o
                },
                always: function () {
                  return r.done(arguments).fail(arguments),
                    this
                },
                catch: function (e) {
                  return i.then(null, e)
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred((function (n) {
                    T.each(t, (function (t, o) {
                      var i = g(e[o[4]]) && e[o[4]];
                      r[o[1]]((function () {
                        var e = i && i.apply(this, arguments);
                        e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this, i ? [e] : arguments)
                      }
                      ))
                    }
                    )),
                      e = null
                  }
                  )).promise()
                },
                then: function (e, o, i) {
                  var r = 0;
                  function a(e, t, o, i) {
                    return function () {
                      var s = this
                        , l = arguments
                        , c = function () {
                          var n, c;
                          if (!(e < r)) {
                            if ((n = o.apply(s, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                              g(c) ? i ? c.call(n, a(r, t, H, i), a(r, t, L, i)) : (r++,
                                c.call(n, a(r, t, H, i), a(r, t, L, i), a(r, t, H, t.notifyWith))) : (o !== H && (s = void 0,
                                  l = [n]),
                                  (i || t.resolveWith)(s, l))
                          }
                        }
                        , u = i ? c : function () {
                          try {
                            c()
                          } catch (n) {
                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, u.stackTrace),
                              e + 1 >= r && (o !== L && (s = void 0,
                                l = [n]),
                                t.rejectWith(s, l))
                          }
                        }
                        ;
                      e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()),
                        n.setTimeout(u))
                    }
                  }
                  return T.Deferred((function (n) {
                    t[0][3].add(a(0, n, g(i) ? i : H, n.notifyWith)),
                      t[1][3].add(a(0, n, g(e) ? e : H)),
                      t[2][3].add(a(0, n, g(o) ? o : L))
                  }
                  )).promise()
                },
                promise: function (e) {
                  return null != e ? T.extend(e, i) : i
                }
              }
              , r = {};
            return T.each(t, (function (e, n) {
              var a = n[2]
                , s = n[5];
              i[n[1]] = a.add,
                s && a.add((function () {
                  o = s
                }
                ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                a.add(n[3].fire),
                r[n[0]] = function () {
                  return r[n[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[n[0] + "With"] = a.fireWith
            }
            )),
              i.promise(r),
              e && e.call(r, r),
              r
          },
          when: function (e) {
            var t = arguments.length
              , n = t
              , o = Array(n)
              , i = s.call(arguments)
              , r = T.Deferred()
              , a = function (e) {
                return function (n) {
                  o[e] = this,
                    i[e] = arguments.length > 1 ? s.call(arguments) : n,
                    --t || r.resolveWith(o, i)
                }
              };
            if (t <= 1 && (V(e, r.done(a(n)).resolve, r.reject, !t),
              "pending" === r.state() || g(i[n] && i[n].then)))
              return r.then();
            for (; n--;)
              V(i[n], a(n), r.reject);
            return r.promise()
          }
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      T.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
      }
        ,
        T.readyException = function (e) {
          n.setTimeout((function () {
            throw e
          }
          ))
        }
        ;
      var U = T.Deferred();
      function q() {
        x.removeEventListener("DOMContentLoaded", q),
          n.removeEventListener("load", q),
          T.ready()
      }
      T.fn.ready = function (e) {
        return U.then(e).catch((function (e) {
          T.readyException(e)
        }
        )),
          this
      }
        ,
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0,
              !0 !== e && --T.readyWait > 0 || U.resolveWith(x, [T]))
          }
        }),
        T.ready.then = U.then,
        "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(T.ready) : (x.addEventListener("DOMContentLoaded", q),
          n.addEventListener("load", q));
      var z = function (e, t, n, o, i, r, a) {
        var s = 0
          , l = e.length
          , c = null == n;
        if ("object" === b(n))
          for (s in i = !0,
            n)
            z(e, t, s, n[s], !0, r, a);
        else if (void 0 !== o && (i = !0,
          g(o) || (a = !0),
          c && (a ? (t.call(e, o),
            t = null) : (c = t,
              t = function (e, t, n) {
                return c.call(T(e), n)
              }
            )),
          t))
          for (; s < l; s++)
            t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
      }
        , $ = /^-ms-/
        , W = /-([a-z])/g;
      function X(e, t) {
        return t.toUpperCase()
      }
      function G(e) {
        return e.replace($, "ms-").replace(W, X)
      }
      var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
      function Y() {
        this.expando = T.expando + Y.uid++
      }
      Y.uid = 1,
        Y.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return t || (t = {},
              Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
              }))),
              t
          },
          set: function (e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t)
              i[G(t)] = n;
            else
              for (o in t)
                i[G(o)] = t[o];
            return i
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
          },
          access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
              void 0 !== n ? n : t)
          },
          remove: function (e, t) {
            var n, o = e[this.expando];
            if (void 0 !== o) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in o ? [t] : t.match(N) || []).length;
                for (; n--;)
                  delete o[t[n]]
              }
              (void 0 === t || T.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
          }
        };
      var J = new Y
        , K = new Y
        , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , ee = /[A-Z]/g;
      function te(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
          if (o = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(o))) {
            try {
              n = function (e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
              }(n)
            } catch (e) { }
            K.set(e, t, n)
          } else
            n = void 0;
        return n
      }
      T.extend({
        hasData: function (e) {
          return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
          return K.access(e, t, n)
        },
        removeData: function (e, t) {
          K.remove(e, t)
        },
        _data: function (e, t, n) {
          return J.access(e, t, n)
        },
        _removeData: function (e, t) {
          J.remove(e, t)
        }
      }),
        T.fn.extend({
          data: function (e, t) {
            var n, o, i, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
              if (this.length && (i = K.get(r),
                1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
                for (n = a.length; n--;)
                  a[n] && 0 === (o = a[n].name).indexOf("data-") && (o = G(o.slice(5)),
                    te(r, o, i[o]));
                J.set(r, "hasDataAttrs", !0)
              }
              return i
            }
            return "object" == typeof e ? this.each((function () {
              K.set(this, e)
            }
            )) : z(this, (function (t) {
              var n;
              if (r && void 0 === t)
                return void 0 !== (n = K.get(r, e)) || void 0 !== (n = te(r, e)) ? n : void 0;
              this.each((function () {
                K.set(this, e, t)
              }
              ))
            }
            ), null, t, arguments.length > 1, null, !0)
          },
          removeData: function (e) {
            return this.each((function () {
              K.remove(this, e)
            }
            ))
          }
        }),
        T.extend({
          queue: function (e, t, n) {
            var o;
            if (e)
              return t = (t || "fx") + "queue",
                o = J.get(e, t),
                n && (!o || Array.isArray(n) ? o = J.access(e, t, T.makeArray(n)) : o.push(n)),
                o || []
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t)
              , o = n.length
              , i = n.shift()
              , r = T._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
              o--),
              i && ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                i.call(e, (function () {
                  T.dequeue(e, t)
                }
                ), r)),
              !o && r && r.empty.fire()
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
              empty: T.Callbacks("once memory").add((function () {
                J.remove(e, [t + "queue", n])
              }
              ))
            })
          }
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
              e = "fx",
              n--),
              arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = T.queue(this, e, t);
                T._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
              }
              ))
          },
          dequeue: function (e) {
            return this.each((function () {
              T.dequeue(this, e)
            }
            ))
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", [])
          },
          promise: function (e, t) {
            var n, o = 1, i = T.Deferred(), r = this, a = this.length, s = function () {
              --o || i.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
              e = void 0),
              e = e || "fx"; a--;)
              (n = J.get(r[a], e + "queueHooks")) && n.empty && (o++,
                n.empty.add(s));
            return s(),
              i.promise(t)
          }
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , oe = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i")
        , ie = ["Top", "Right", "Bottom", "Left"]
        , re = x.documentElement
        , ae = function (e) {
          return T.contains(e.ownerDocument, e)
        }
        , se = {
          composed: !0
        };
      re.getRootNode && (ae = function (e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
      }
      );
      var le = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === T.css(e, "display")
      };
      function ce(e, t, n, o) {
        var i, r, a = 20, s = o ? function () {
          return o.cur()
        }
          : function () {
            return T.css(e, t, "")
          }
          , l = s(), c = n && n[3] || (T.cssNumber[t] ? "" : "px"), u = e.nodeType && (T.cssNumber[t] || "px" !== c && +l) && oe.exec(T.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2,
            c = c || u[3],
            u = +l || 1; a--;)
            T.style(e, t, u + c),
              (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0),
              u /= r;
          u *= 2,
            T.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
          i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
          o && (o.unit = c,
            o.start = u,
            o.end = i)),
          i
      }
      var ue = {};
      function pe(e) {
        var t, n = e.ownerDocument, o = e.nodeName, i = ue[o];
        return i || (t = n.body.appendChild(n.createElement(o)),
          i = T.css(t, "display"),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          ue[o] = i,
          i)
      }
      function de(e, t) {
        for (var n, o, i = [], r = 0, a = e.length; r < a; r++)
          (o = e[r]).style && (n = o.style.display,
            t ? ("none" === n && (i[r] = J.get(o, "display") || null,
              i[r] || (o.style.display = "")),
              "" === o.style.display && le(o) && (i[r] = pe(o))) : "none" !== n && (i[r] = "none",
                J.set(o, "display", n)));
        for (r = 0; r < a; r++)
          null != i[r] && (e[r].style.display = i[r]);
        return e
      }
      T.fn.extend({
        show: function () {
          return de(this, !0)
        },
        hide: function () {
          return de(this)
        },
        toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
            le(this) ? T(this).show() : T(this).hide()
          }
          ))
        }
      });
      var he, fe, ye = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ge = /^$|^module$|\/(?:java|ecma)script/i;
      he = x.createDocumentFragment().appendChild(x.createElement("div")),
        (fe = x.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        he.appendChild(fe),
        m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
        he.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue,
        he.innerHTML = "<option></option>",
        m.option = !!he.lastChild;
      var ve = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      function xe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
          void 0 === t || t && R(e, t) ? T.merge([e], n) : n
      }
      function _e(e, t) {
        for (var n = 0, o = e.length; n < o; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
      }
      ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
        ve.th = ve.td,
        m.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
      var Ee = /<|&#?\w+;/;
      function be(e, t, n, o, i) {
        for (var r, a, s, l, c, u, p = t.createDocumentFragment(), d = [], h = 0, f = e.length; h < f; h++)
          if ((r = e[h]) || 0 === r)
            if ("object" === b(r))
              T.merge(d, r.nodeType ? [r] : r);
            else if (Ee.test(r)) {
              for (a = a || p.appendChild(t.createElement("div")),
                s = (me.exec(r) || ["", ""])[1].toLowerCase(),
                l = ve[s] || ve._default,
                a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                u = l[0]; u--;)
                a = a.lastChild;
              T.merge(d, a.childNodes),
                (a = p.firstChild).textContent = ""
            } else
              d.push(t.createTextNode(r));
        for (p.textContent = "",
          h = 0; r = d[h++];)
          if (o && T.inArray(r, o) > -1)
            i && i.push(r);
          else if (c = ae(r),
            a = xe(p.appendChild(r), "script"),
            c && _e(a),
            n)
            for (u = 0; r = a[u++];)
              ge.test(r.type || "") && n.push(r);
        return p
      }
      var Te = /^key/
        , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Oe = /^([^.]*)(?:\.(.+)|)/;
      function je() {
        return !0
      }
      function Me() {
        return !1
      }
      function Ce(e, t) {
        return e === function () {
          try {
            return x.activeElement
          } catch (e) { }
        }() == ("focus" === t)
      }
      function Re(e, t, n, o, i, r) {
        var a, s;
        if ("object" == typeof t) {
          for (s in "string" != typeof n && (o = o || n,
            n = void 0),
            t)
            Re(e, s, n, o, t[s], r);
          return e
        }
        if (null == o && null == i ? (i = n,
          o = n = void 0) : null == i && ("string" == typeof n ? (i = o,
            o = void 0) : (i = o,
              o = n,
              n = void 0)),
          !1 === i)
          i = Me;
        else if (!i)
          return e;
        return 1 === r && (a = i,
          (i = function (e) {
            return T().off(e),
              a.apply(this, arguments)
          }
          ).guid = a.guid || (a.guid = T.guid++)),
          e.each((function () {
            T.event.add(this, t, i, o, n)
          }
          ))
      }
      function Be(e, t, n) {
        n ? (J.set(e, t, !1),
          T.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
              var o, i, r = J.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                if (r.length)
                  (T.event.special[t] || {}).delegateType && e.stopPropagation();
                else if (r = s.call(arguments),
                  J.set(this, t, r),
                  o = n(this, t),
                  this[t](),
                  r !== (i = J.get(this, t)) || o ? J.set(this, t, !1) : i = {},
                  r !== i)
                  return e.stopImmediatePropagation(),
                    e.preventDefault(),
                    i.value
              } else
                r.length && (J.set(this, t, {
                  value: T.event.trigger(T.extend(r[0], T.Event.prototype), r.slice(1), this)
                }),
                  e.stopImmediatePropagation())
            }
          })) : void 0 === J.get(e, t) && T.event.add(e, t, je)
      }
      T.event = {
        global: {},
        add: function (e, t, n, o, i) {
          var r, a, s, l, c, u, p, d, h, f, y, m = J.get(e);
          if (Q(e))
            for (n.handler && (n = (r = n).handler,
              i = r.selector),
              i && T.find.matchesSelector(re, i),
              n.guid || (n.guid = T.guid++),
              (l = m.events) || (l = m.events = Object.create(null)),
              (a = m.handle) || (a = m.handle = function (t) {
                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
              }
              ),
              c = (t = (t || "").match(N) || [""]).length; c--;)
              h = y = (s = Oe.exec(t[c]) || [])[1],
                f = (s[2] || "").split(".").sort(),
                h && (p = T.event.special[h] || {},
                  h = (i ? p.delegateType : p.bindType) || h,
                  p = T.event.special[h] || {},
                  u = T.extend({
                    type: h,
                    origType: y,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && T.expr.match.needsContext.test(i),
                    namespace: f.join(".")
                  }, r),
                  (d = l[h]) || ((d = l[h] = []).delegateCount = 0,
                    p.setup && !1 !== p.setup.call(e, o, f, a) || e.addEventListener && e.addEventListener(h, a)),
                  p.add && (p.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  T.event.global[h] = !0)
        },
        remove: function (e, t, n, o, i) {
          var r, a, s, l, c, u, p, d, h, f, y, m = J.hasData(e) && J.get(e);
          if (m && (l = m.events)) {
            for (c = (t = (t || "").match(N) || [""]).length; c--;)
              if (h = y = (s = Oe.exec(t[c]) || [])[1],
                f = (s[2] || "").split(".").sort(),
                h) {
                for (p = T.event.special[h] || {},
                  d = l[h = (o ? p.delegateType : p.bindType) || h] || [],
                  s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = r = d.length; r--;)
                  u = d[r],
                    !i && y !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (d.splice(r, 1),
                      u.selector && d.delegateCount--,
                      p.remove && p.remove.call(e, u));
                a && !d.length && (p.teardown && !1 !== p.teardown.call(e, f, m.handle) || T.removeEvent(e, h, m.handle),
                  delete l[h])
              } else
                for (h in l)
                  T.event.remove(e, h + t[c], n, o, !0);
            T.isEmptyObject(l) && J.remove(e, "handle events")
          }
        },
        dispatch: function (e) {
          var t, n, o, i, r, a, s = new Array(arguments.length), l = T.event.fix(e), c = (J.get(this, "events") || Object.create(null))[l.type] || [], u = T.event.special[l.type] || {};
          for (s[0] = l,
            t = 1; t < arguments.length; t++)
            s[t] = arguments[t];
          if (l.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
            for (a = T.event.handlers.call(this, l, c),
              t = 0; (i = a[t++]) && !l.isPropagationStopped();)
              for (l.currentTarget = i.elem,
                n = 0; (r = i.handlers[n++]) && !l.isImmediatePropagationStopped();)
                l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                  l.data = r.data,
                  void 0 !== (o = ((T.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (l.result = o) && (l.preventDefault(),
                    l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l),
              l.result
          }
        },
        handlers: function (e, t) {
          var n, o, i, r, a, s = [], l = t.delegateCount, c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [],
                  a = {},
                  n = 0; n < l; n++)
                  void 0 === a[i = (o = t[n]).selector + " "] && (a[i] = o.needsContext ? T(i, this).index(c) > -1 : T.find(i, this, null, [c]).length),
                    a[i] && r.push(o);
                r.length && s.push({
                  elem: c,
                  handlers: r
                })
              }
          return c = this,
            l < t.length && s.push({
              elem: c,
              handlers: t.slice(l)
            }),
            s
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: g(t) ? function () {
              if (this.originalEvent)
                return t(this.originalEvent)
            }
              : function () {
                if (this.originalEvent)
                  return this.originalEvent[e]
              }
            ,
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              })
            }
          })
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e)
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function (e) {
              var t = this || e;
              return ye.test(t.type) && t.click && R(t, "input") && Be(t, "click", je),
                !1
            },
            trigger: function (e) {
              var t = this || e;
              return ye.test(t.type) && t.click && R(t, "input") && Be(t, "click"),
                !0
            },
            _default: function (e) {
              var t = e.target;
              return ye.test(t.type) && t.click && R(t, "input") && J.get(t, "click") || R(t, "a")
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      },
        T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        T.Event = function (e, t) {
          if (!(this instanceof T.Event))
            return new T.Event(e, t);
          e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? je : Me,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && T.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[T.expando] = !0
        }
        ,
        T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Me,
          isPropagationStopped: Me,
          isImmediatePropagationStopped: Me,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = je,
              e && !this.isSimulated && e.preventDefault()
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = je,
              e && !this.isSimulated && e.stopPropagation()
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = je,
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation()
          }
        },
        T.each({
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
          }
        }, T.event.addProp),
        T.each({
          focus: "focusin",
          blur: "focusout"
        }, (function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Be(this, e, Ce),
                !1
            },
            trigger: function () {
              return Be(this, e),
                !0
            },
            delegateType: t
          }
        }
        )),
        T.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, (function (e, t) {
          T.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n, o = this, i = e.relatedTarget, r = e.handleObj;
              return i && (i === o || T.contains(o, i)) || (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
          }
        }
        )),
        T.fn.extend({
          on: function (e, t, n, o) {
            return Re(this, e, t, n, o)
          },
          one: function (e, t, n, o) {
            return Re(this, e, t, n, o, 1)
          },
          off: function (e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj)
              return o = e.handleObj,
                T(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                this;
            if ("object" == typeof e) {
              for (i in e)
                this.off(i, t, e[i]);
              return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
              t = void 0),
              !1 === n && (n = Me),
              this.each((function () {
                T.event.remove(this, e, n, t)
              }
              ))
          }
        });
      var De = /<script|<style|<link/i
        , ke = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Ie(e, t) {
        return R(e, "table") && R(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
      }
      function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
          e
      }
      function Ae(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
          e
      }
      function Ne(e, t) {
        var n, o, i, r, a, s;
        if (1 === t.nodeType) {
          if (J.hasData(e) && (s = J.get(e).events))
            for (i in J.remove(t, "handle events"),
              s)
              for (n = 0,
                o = s[i].length; n < o; n++)
                T.event.add(t, i, s[i][n]);
          K.hasData(e) && (r = K.access(e),
            a = T.extend({}, r),
            K.set(t, a))
        }
      }
      function He(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ye.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }
      function Le(e, t, n, o) {
        t = l(t);
        var i, r, a, s, c, u, p = 0, d = e.length, h = d - 1, f = t[0], y = g(f);
        if (y || d > 1 && "string" == typeof f && !m.checkClone && ke.test(f))
          return e.each((function (i) {
            var r = e.eq(i);
            y && (t[0] = f.call(this, i, r.html())),
              Le(r, t, n, o)
          }
          ));
        if (d && (r = (i = be(t, e[0].ownerDocument, !1, e, o)).firstChild,
          1 === i.childNodes.length && (i = r),
          r || o)) {
          for (s = (a = T.map(xe(i, "script"), Pe)).length; p < d; p++)
            c = i,
              p !== h && (c = T.clone(c, !0, !0),
                s && T.merge(a, xe(c, "script"))),
              n.call(e[p], c, p);
          if (s)
            for (u = a[a.length - 1].ownerDocument,
              T.map(a, Ae),
              p = 0; p < s; p++)
              c = a[p],
                ge.test(c.type || "") && !J.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, {
                  nonce: c.nonce || c.getAttribute("nonce")
                }, u) : E(c.textContent.replace(Se, ""), c, u))
        }
        return e
      }
      function Ve(e, t, n) {
        for (var o, i = t ? T.filter(t, e) : e, r = 0; null != (o = i[r]); r++)
          n || 1 !== o.nodeType || T.cleanData(xe(o)),
            o.parentNode && (n && ae(o) && _e(xe(o, "script")),
              o.parentNode.removeChild(o));
        return e
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e
        },
        clone: function (e, t, n) {
          var o, i, r, a, s = e.cloneNode(!0), l = ae(e);
          if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
            for (a = xe(s),
              o = 0,
              i = (r = xe(e)).length; o < i; o++)
              He(r[o], a[o]);
          if (t)
            if (n)
              for (r = r || xe(e),
                a = a || xe(s),
                o = 0,
                i = r.length; o < i; o++)
                Ne(r[o], a[o]);
            else
              Ne(e, s);
          return (a = xe(s, "script")).length > 0 && _e(a, !l && xe(e, "script")),
            s
        },
        cleanData: function (e) {
          for (var t, n, o, i = T.event.special, r = 0; void 0 !== (n = e[r]); r++)
            if (Q(n)) {
              if (t = n[J.expando]) {
                if (t.events)
                  for (o in t.events)
                    i[o] ? T.event.remove(n, o) : T.removeEvent(n, o, t.handle);
                n[J.expando] = void 0
              }
              n[K.expando] && (n[K.expando] = void 0)
            }
        }
      }),
        T.fn.extend({
          detach: function (e) {
            return Ve(this, e, !0)
          },
          remove: function (e) {
            return Ve(this, e)
          },
          text: function (e) {
            return z(this, (function (e) {
              return void 0 === e ? T.text(this) : this.empty().each((function () {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              }
              ))
            }
            ), null, e, arguments.length)
          },
          append: function () {
            return Le(this, arguments, (function (e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
            }
            ))
          },
          prepend: function () {
            return Le(this, arguments, (function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Ie(this, e);
                t.insertBefore(e, t.firstChild)
              }
            }
            ))
          },
          before: function () {
            return Le(this, arguments, (function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
          },
          after: function () {
            return Le(this, arguments, (function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (T.cleanData(xe(e, !1)),
                e.textContent = "");
            return this
          },
          clone: function (e, t) {
            return e = null != e && e,
              t = null == t ? e : t,
              this.map((function () {
                return T.clone(this, e, t)
              }
              ))
          },
          html: function (e) {
            return z(this, (function (e) {
              var t = this[0] || {}
                , n = 0
                , o = this.length;
              if (void 0 === e && 1 === t.nodeType)
                return t.innerHTML;
              if ("string" == typeof e && !De.test(e) && !ve[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = T.htmlPrefilter(e);
                try {
                  for (; n < o; n++)
                    1 === (t = this[n] || {}).nodeType && (T.cleanData(xe(t, !1)),
                      t.innerHTML = e);
                  t = 0
                } catch (e) { }
              }
              t && this.empty().append(e)
            }
            ), null, e, arguments.length)
          },
          replaceWith: function () {
            var e = [];
            return Le(this, arguments, (function (t) {
              var n = this.parentNode;
              T.inArray(this, e) < 0 && (T.cleanData(xe(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
          }
        }),
        T.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, (function (e, t) {
          T.fn[e] = function (e) {
            for (var n, o = [], i = T(e), r = i.length - 1, a = 0; a <= r; a++)
              n = a === r ? this : this.clone(!0),
                T(i[a])[t](n),
                c.apply(o, n.get());
            return this.pushStack(o)
          }
        }
        ));
      var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i")
        , Ue = function (e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
        , qe = function (e, t, n) {
          var o, i, r = {};
          for (i in t)
            r[i] = e.style[i],
              e.style[i] = t[i];
          for (i in o = n.call(e),
            t)
            e.style[i] = r[i];
          return o
        }
        , ze = new RegExp(ie.join("|"), "i");
      function $e(e, t, n) {
        var o, i, r, a, s = e.style;
        return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = T.style(e, t)),
          !m.pixelBoxStyles() && Fe.test(a) && ze.test(t) && (o = s.width,
            i = s.minWidth,
            r = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = o,
            s.minWidth = i,
            s.maxWidth = r)),
          void 0 !== a ? a + "" : a
      }
      function We(e, t) {
        return {
          get: function () {
            if (!e())
              return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }
      !function () {
        function e() {
          if (u) {
            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
              u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
              re.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            o = "1%" !== e.top,
              l = 12 === t(e.marginLeft),
              u.style.right = "60%",
              a = 36 === t(e.right),
              i = 36 === t(e.width),
              u.style.position = "absolute",
              r = 12 === t(u.offsetWidth / 3),
              re.removeChild(c),
              u = null
          }
        }
        function t(e) {
          return Math.round(parseFloat(e))
        }
        var o, i, r, a, s, l, c = x.createElement("div"), u = x.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
          u.cloneNode(!0).style.backgroundClip = "",
          m.clearCloneStyle = "content-box" === u.style.backgroundClip,
          T.extend(m, {
            boxSizingReliable: function () {
              return e(),
                i
            },
            pixelBoxStyles: function () {
              return e(),
                a
            },
            pixelPosition: function () {
              return e(),
                o
            },
            reliableMarginLeft: function () {
              return e(),
                l
            },
            scrollboxSize: function () {
              return e(),
                r
            },
            reliableTrDimensions: function () {
              var e, t, o, i;
              return null == s && (e = x.createElement("table"),
                t = x.createElement("tr"),
                o = x.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                o.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(o),
                i = n.getComputedStyle(t),
                s = parseInt(i.height) > 3,
                re.removeChild(e)),
                s
            }
          }))
      }();
      var Xe = ["Webkit", "Moz", "ms"]
        , Ge = x.createElement("div").style
        , Qe = {};
      function Ye(e) {
        var t = T.cssProps[e] || Qe[e];
        return t || (e in Ge ? e : Qe[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
            if ((e = Xe[n] + t) in Ge)
              return e
        }(e) || e)
      }
      var Je = /^(none|table(?!-c[ea]).+)/
        , Ke = /^--/
        , Ze = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        }
        , et = {
          letterSpacing: "0",
          fontWeight: "400"
        };
      function tt(e, t, n) {
        var o = oe.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
      }
      function nt(e, t, n, o, i, r) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (o ? "border" : "content"))
          return 0;
        for (; a < 4; a += 2)
          "margin" === n && (l += T.css(e, n + ie[a], !0, i)),
            o ? ("content" === n && (l -= T.css(e, "padding" + ie[a], !0, i)),
              "margin" !== n && (l -= T.css(e, "border" + ie[a] + "Width", !0, i))) : (l += T.css(e, "padding" + ie[a], !0, i),
                "padding" !== n ? l += T.css(e, "border" + ie[a] + "Width", !0, i) : s += T.css(e, "border" + ie[a] + "Width", !0, i));
        return !o && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0),
          l
      }
      function ot(e, t, n) {
        var o = Ue(e)
          , i = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, o)
          , r = i
          , a = $e(e, t, o)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(a)) {
          if (!n)
            return a;
          a = "auto"
        }
        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && R(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, o)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, o),
          (r = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) + nt(e, t, n || (i ? "border" : "content"), r, o, a) + "px"
      }
      function it(e, t, n, o, i) {
        return new it.prototype.init(e, t, n, o, i)
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = $e(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, o) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i, r, a, s = G(t), l = Ke.test(t), c = e.style;
            if (l || (t = Ye(s)),
              a = T.cssHooks[t] || T.cssHooks[s],
              void 0 === n)
              return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : c[t];
            "string" === (r = typeof n) && (i = oe.exec(n)) && i[1] && (n = ce(e, t, i),
              r = "number"),
              null != n && n == n && ("number" !== r || l || (n += i && i[3] || (T.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l ? c.setProperty(t, n) : c[t] = n))
          }
        },
        css: function (e, t, n, o) {
          var i, r, a, s = G(t);
          return Ke.test(t) || (t = Ye(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = $e(e, t, o)),
            "normal" === i && t in et && (i = et[t]),
            "" === n || n ? (r = parseFloat(i),
              !0 === n || isFinite(r) ? r || 0 : i) : i
        }
      }),
        T.each(["height", "width"], (function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, o) {
              if (n)
                return !Je.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, o) : qe(e, Ze, (function () {
                  return ot(e, t, o)
                }
                ))
            },
            set: function (e, n, o) {
              var i, r = Ue(e), a = !m.scrollboxSize() && "absolute" === r.position, s = (a || o) && "border-box" === T.css(e, "boxSizing", !1, r), l = o ? nt(e, t, o, s, r) : 0;
              return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - .5)),
                l && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                  n = T.css(e, t)),
                tt(0, n, l)
            }
          }
        }
        )),
        T.cssHooks.marginLeft = We(m.reliableMarginLeft, (function (e, t) {
          if (t)
            return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
              marginLeft: 0
            }, (function () {
              return e.getBoundingClientRect().left
            }
            ))) + "px"
        }
        )),
        T.each({
          margin: "",
          padding: "",
          border: "Width"
        }, (function (e, t) {
          T.cssHooks[e + t] = {
            expand: function (n) {
              for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++)
                i[e + ie[o] + t] = r[o] || r[o - 2] || r[0];
              return i
            }
          },
            "margin" !== e && (T.cssHooks[e + t].set = tt)
        }
        )),
        T.fn.extend({
          css: function (e, t) {
            return z(this, (function (e, t, n) {
              var o, i, r = {}, a = 0;
              if (Array.isArray(t)) {
                for (o = Ue(e),
                  i = t.length; a < i; a++)
                  r[t[a]] = T.css(e, t[a], !1, o);
                return r
              }
              return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }
            ), e, t, arguments.length > 1)
          }
        }),
        T.Tween = it,
        it.prototype = {
          constructor: it,
          init: function (e, t, n, o, i, r) {
            this.elem = e,
              this.prop = n,
              this.easing = i || T.easing._default,
              this.options = t,
              this.start = this.now = this.cur(),
              this.end = o,
              this.unit = r || (T.cssNumber[n] ? "" : "px")
          },
          cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this)
          },
          run: function (e) {
            var t, n = it.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
              this.now = (this.end - this.start) * t + this.start,
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : it.propHooks._default.set(this),
              this
          }
        },
        it.prototype.init.prototype = it.prototype,
        it.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
              T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
          }
        },
        it.propHooks.scrollTop = it.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
        },
        T.easing = {
          linear: function (e) {
            return e
          },
          swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          },
          _default: "swing"
        },
        T.fx = it.prototype.init,
        T.fx.step = {};
      var rt, at, st = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
      function ct() {
        at && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, T.fx.interval),
          T.fx.tick())
      }
      function ut() {
        return n.setTimeout((function () {
          rt = void 0
        }
        )),
          rt = Date.now()
      }
      function pt(e, t) {
        var n, o = 0, i = {
          height: e
        };
        for (t = t ? 1 : 0; o < 4; o += 2 - t)
          i["margin" + (n = ie[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
          i
      }
      function dt(e, t, n) {
        for (var o, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, a = i.length; r < a; r++)
          if (o = i[r].call(n, t, e))
            return o
      }
      function ht(e, t, n) {
        var o, i, r = 0, a = ht.prefilters.length, s = T.Deferred().always((function () {
          delete l.elem
        }
        )), l = function () {
          if (i)
            return !1;
          for (var t = rt || ut(), n = Math.max(0, c.startTime + c.duration - t), o = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++)
            c.tweens[r].run(o);
          return s.notifyWith(e, [c, o, n]),
            o < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]),
              s.resolveWith(e, [c]),
              !1)
        }, c = s.promise({
          elem: e,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: rt || ut(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var o = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(o),
              o
          },
          stop: function (t) {
            var n = 0
              , o = t ? c.tweens.length : 0;
            if (i)
              return this;
            for (i = !0; n < o; n++)
              c.tweens[n].run(1);
            return t ? (s.notifyWith(e, [c, 1, 0]),
              s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
              this
          }
        }), u = c.props;
        for (!function (e, t) {
          var n, o, i, r, a;
          for (n in e)
            if (i = t[o = G(n)],
              r = e[n],
              Array.isArray(r) && (i = r[1],
                r = e[n] = r[0]),
              n !== o && (e[o] = r,
                delete e[n]),
              (a = T.cssHooks[o]) && "expand" in a)
              for (n in r = a.expand(r),
                delete e[o],
                r)
                n in e || (e[n] = r[n],
                  t[n] = i);
            else
              t[o] = i
        }(u, c.opts.specialEasing); r < a; r++)
          if (o = ht.prefilters[r].call(c, e, u, c.opts))
            return g(o.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)),
              o;
        return T.map(u, dt, c),
          g(c.opts.start) && c.opts.start.call(e, c),
          c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
          T.fx.timer(T.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
          })),
          c
      }
      T.Animation = T.extend(ht, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return ce(n.elem, e, oe.exec(t), n),
              n
          }
          ]
        },
        tweener: function (e, t) {
          g(e) ? (t = e,
            e = ["*"]) : e = e.match(N);
          for (var n, o = 0, i = e.length; o < i; o++)
            n = e[o],
              ht.tweeners[n] = ht.tweeners[n] || [],
              ht.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
          var o, i, r, a, s, l, c, u, p = "width" in t || "height" in t, d = this, h = {}, f = e.style, y = e.nodeType && le(e), m = J.get(e, "fxshow");
          for (o in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function () {
              a.unqueued || s()
            }
          ),
            a.unqueued++,
            d.always((function () {
              d.always((function () {
                a.unqueued--,
                  T.queue(e, "fx").length || a.empty.fire()
              }
              ))
            }
            ))),
            t)
            if (i = t[o],
              st.test(i)) {
              if (delete t[o],
                r = r || "toggle" === i,
                i === (y ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[o])
                  continue;
                y = !0
              }
              h[o] = m && m[o] || T.style(e, o)
            }
          if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
            for (o in p && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
              null == (c = m && m.display) && (c = J.get(e, "display")),
              "none" === (u = T.css(e, "display")) && (c ? u = c : (de([e], !0),
                c = e.style.display || c,
                u = T.css(e, "display"),
                de([e]))),
              ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (d.done((function () {
                f.display = c
              }
              )),
                null == c && (u = f.display,
                  c = "none" === u ? "" : u)),
                f.display = "inline-block")),
              n.overflow && (f.overflow = "hidden",
                d.always((function () {
                  f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                }
                ))),
              l = !1,
              h)
              l || (m ? "hidden" in m && (y = m.hidden) : m = J.access(e, "fxshow", {
                display: c
              }),
                r && (m.hidden = !y),
                y && de([e], !0),
                d.done((function () {
                  for (o in y || de([e]),
                    J.remove(e, "fxshow"),
                    h)
                    T.style(e, o, h[o])
                }
                ))),
                l = dt(y ? m[o] : 0, o, d),
                o in m || (m[o] = l.start,
                  y && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function (e, t) {
          t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
        }
      }),
        T.speed = function (e, t, n) {
          var o = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
          };
          return T.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in T.fx.speeds ? o.duration = T.fx.speeds[o.duration] : o.duration = T.fx.speeds._default),
            null != o.queue && !0 !== o.queue || (o.queue = "fx"),
            o.old = o.complete,
            o.complete = function () {
              g(o.old) && o.old.call(this),
                o.queue && T.dequeue(this, o.queue)
            }
            ,
            o
        }
        ,
        T.fn.extend({
          fadeTo: function (e, t, n, o) {
            return this.filter(le).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, o)
          },
          animate: function (e, t, n, o) {
            var i = T.isEmptyObject(e)
              , r = T.speed(t, n, o)
              , a = function () {
                var t = ht(this, T.extend({}, e), r);
                (i || J.get(this, "finish")) && t.stop(!0)
              };
            return a.finish = a,
              i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
          },
          stop: function (e, t, n) {
            var o = function (e) {
              var t = e.stop;
              delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
              t = e,
              e = void 0),
              t && this.queue(e || "fx", []),
              this.each((function () {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , r = T.timers
                  , a = J.get(this);
                if (i)
                  a[i] && a[i].stop && o(a[i]);
                else
                  for (i in a)
                    a[i] && a[i].stop && lt.test(i) && o(a[i]);
                for (i = r.length; i--;)
                  r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n),
                    t = !1,
                    r.splice(i, 1));
                !t && n || T.dequeue(this, e)
              }
              ))
          },
          finish: function (e) {
            return !1 !== e && (e = e || "fx"),
              this.each((function () {
                var t, n = J.get(this), o = n[e + "queue"], i = n[e + "queueHooks"], r = T.timers, a = o ? o.length : 0;
                for (n.finish = !0,
                  T.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = r.length; t--;)
                  r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < a; t++)
                  o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish
              }
              ))
          }
        }),
        T.each(["toggle", "show", "hide"], (function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, o, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, o, i)
          }
        }
        )),
        T.each({
          slideDown: pt("show"),
          slideUp: pt("hide"),
          slideToggle: pt("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, (function (e, t) {
          T.fn[e] = function (e, n, o) {
            return this.animate(t, e, n, o)
          }
        }
        )),
        T.timers = [],
        T.fx.tick = function () {
          var e, t = 0, n = T.timers;
          for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(),
            rt = void 0
        }
        ,
        T.fx.timer = function (e) {
          T.timers.push(e),
            T.fx.start()
        }
        ,
        T.fx.interval = 13,
        T.fx.start = function () {
          at || (at = !0,
            ct())
        }
        ,
        T.fx.stop = function () {
          at = null
        }
        ,
        T.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        },
        T.fn.delay = function (e, t) {
          return e = T.fx && T.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, (function (t, o) {
              var i = n.setTimeout(t, e);
              o.stop = function () {
                n.clearTimeout(i)
              }
            }
            ))
        }
        ,
        function () {
          var e = x.createElement("input")
            , t = x.createElement("select").appendChild(x.createElement("option"));
          e.type = "checkbox",
            m.checkOn = "" !== e.value,
            m.optSelected = t.selected,
            (e = x.createElement("input")).value = "t",
            e.type = "radio",
            m.radioValue = "t" === e.value
        }();
      var ft, yt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return z(this, T.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
          return this.each((function () {
            T.removeAttr(this, e)
          }
          ))
        }
      }),
        T.extend({
          attr: function (e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === r && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ft : void 0)),
                void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""),
                  n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = T.find.attr(e, t)) ? void 0 : o)
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && R(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t),
                    n && (e.value = n),
                    t
                }
              }
            }
          },
          removeAttr: function (e, t) {
            var n, o = 0, i = t && t.match(N);
            if (i && 1 === e.nodeType)
              for (; n = i[o++];)
                e.removeAttribute(n)
          }
        }),
        ft = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
              n
          }
        },
        T.each(T.expr.match.bool.source.match(/\w+/g), (function (e, t) {
          var n = yt[t] || T.find.attr;
          yt[t] = function (e, t, o) {
            var i, r, a = t.toLowerCase();
            return o || (r = yt[a],
              yt[a] = i,
              i = null != n(e, t, o) ? a : null,
              yt[a] = r),
              i
          }
        }
        ));
      var mt = /^(?:input|select|textarea|button)$/i
        , gt = /^(?:a|area)$/i;
      function vt(e) {
        return (e.match(N) || []).join(" ")
      }
      function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }
      function _t(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
      }
      T.fn.extend({
        prop: function (e, t) {
          return z(this, T.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
          return this.each((function () {
            delete this[T.propFix[e] || e]
          }
          ))
        }
      }),
        T.extend({
          prop: function (e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return 1 === r && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                i = T.propHooks[t]),
                void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : mt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
              }
            }
          },
          propFix: {
            for: "htmlFor",
            class: "className"
          }
        }),
        m.optSelected || (T.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
              null
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
              t.parentNode && t.parentNode.selectedIndex)
          }
        }),
        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
          T.propFix[this.toLowerCase()] = this
        }
        )),
        T.fn.extend({
          addClass: function (e) {
            var t, n, o, i, r, a, s, l = 0;
            if (g(e))
              return this.each((function (t) {
                T(this).addClass(e.call(this, t, xt(this)))
              }
              ));
            if ((t = _t(e)).length)
              for (; n = this[l++];)
                if (i = xt(n),
                  o = 1 === n.nodeType && " " + vt(i) + " ") {
                  for (a = 0; r = t[a++];)
                    o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                  i !== (s = vt(o)) && n.setAttribute("class", s)
                }
            return this
          },
          removeClass: function (e) {
            var t, n, o, i, r, a, s, l = 0;
            if (g(e))
              return this.each((function (t) {
                T(this).removeClass(e.call(this, t, xt(this)))
              }
              ));
            if (!arguments.length)
              return this.attr("class", "");
            if ((t = _t(e)).length)
              for (; n = this[l++];)
                if (i = xt(n),
                  o = 1 === n.nodeType && " " + vt(i) + " ") {
                  for (a = 0; r = t[a++];)
                    for (; o.indexOf(" " + r + " ") > -1;)
                      o = o.replace(" " + r + " ", " ");
                  i !== (s = vt(o)) && n.setAttribute("class", s)
                }
            return this
          },
          toggleClass: function (e, t) {
            var n = typeof e
              , o = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function (n) {
              T(this).toggleClass(e.call(this, n, xt(this), t), t)
            }
            )) : this.each((function () {
              var t, i, r, a;
              if (o)
                for (i = 0,
                  r = T(this),
                  a = _t(e); t = a[i++];)
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                void 0 !== e && "boolean" !== n || ((t = xt(this)) && J.set(this, "__className__", t),
                  this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            }
            ))
          },
          hasClass: function (e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++];)
              if (1 === n.nodeType && (" " + vt(xt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1
          }
        });
      var Et = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t, n, o, i = this[0];
          return arguments.length ? (o = g(e),
            this.each((function (n) {
              var i;
              1 === this.nodeType && (null == (i = o ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, (function (e) {
                return null == e ? "" : e + ""
              }
              ))),
                (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }
            ))) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Et, "") : null == n ? "" : n : void 0
        }
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : vt(T.text(e))
              }
            },
            select: {
              get: function (e) {
                var t, n, o, i = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? r + 1 : i.length;
                for (o = r < 0 ? l : a ? r : 0; o < l; o++)
                  if (((n = i[o]).selected || o === r) && !n.disabled && (!n.parentNode.disabled || !R(n.parentNode, "optgroup"))) {
                    if (t = T(n).val(),
                      a)
                      return t;
                    s.push(t)
                  }
                return s
              },
              set: function (e, t) {
                for (var n, o, i = e.options, r = T.makeArray(t), a = i.length; a--;)
                  ((o = i[a]).selected = T.inArray(T.valHooks.option.get(o), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1),
                  r
              }
            }
          }
        }),
        T.each(["radio", "checkbox"], (function () {
          T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return e.checked = T.inArray(T(e).val(), t) > -1
            }
          },
            m.checkOn || (T.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }
        )),
        m.focusin = "onfocusin" in n;
      var bt = /^(?:focusinfocus|focusoutblur)$/
        , Tt = function (e) {
          e.stopPropagation()
        };
      T.extend(T.event, {
        trigger: function (e, t, o, i) {
          var r, a, s, l, c, u, p, d, f = [o || x], y = h.call(e, "type") ? e.type : e, m = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (a = d = s = o = o || x,
            3 !== o.nodeType && 8 !== o.nodeType && !bt.test(y + T.event.triggered) && (y.indexOf(".") > -1 && (m = y.split("."),
              y = m.shift(),
              m.sort()),
              c = y.indexOf(":") < 0 && "on" + y,
              (e = e[T.expando] ? e : new T.Event(y, "object" == typeof e && e)).isTrigger = i ? 2 : 3,
              e.namespace = m.join("."),
              e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
              e.result = void 0,
              e.target || (e.target = o),
              t = null == t ? [e] : T.makeArray(t, [e]),
              p = T.event.special[y] || {},
              i || !p.trigger || !1 !== p.trigger.apply(o, t))) {
            if (!i && !p.noBubble && !v(o)) {
              for (l = p.delegateType || y,
                bt.test(l + y) || (a = a.parentNode); a; a = a.parentNode)
                f.push(a),
                  s = a;
              s === (o.ownerDocument || x) && f.push(s.defaultView || s.parentWindow || n)
            }
            for (r = 0; (a = f[r++]) && !e.isPropagationStopped();)
              d = a,
                e.type = r > 1 ? l : p.bindType || y,
                (u = (J.get(a, "events") || Object.create(null))[e.type] && J.get(a, "handle")) && u.apply(a, t),
                (u = c && a[c]) && u.apply && Q(a) && (e.result = u.apply(a, t),
                  !1 === e.result && e.preventDefault());
            return e.type = y,
              i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), t) || !Q(o) || c && g(o[y]) && !v(o) && ((s = o[c]) && (o[c] = null),
                T.event.triggered = y,
                e.isPropagationStopped() && d.addEventListener(y, Tt),
                o[y](),
                e.isPropagationStopped() && d.removeEventListener(y, Tt),
                T.event.triggered = void 0,
                s && (o[c] = s)),
              e.result
          }
        },
        simulate: function (e, t, n) {
          var o = T.extend(new T.Event, n, {
            type: e,
            isSimulated: !0
          });
          T.event.trigger(o, null, t)
        }
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each((function () {
              T.event.trigger(e, t, this)
            }
            ))
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n)
              return T.event.trigger(e, t, n, !0)
          }
        }),
        m.focusin || T.each({
          focus: "focusin",
          blur: "focusout"
        }, (function (e, t) {
          var n = function (e) {
            T.event.simulate(t, e.target, T.event.fix(e))
          };
          T.event.special[t] = {
            setup: function () {
              var o = this.ownerDocument || this.document || this
                , i = J.access(o, t);
              i || o.addEventListener(e, n, !0),
                J.access(o, t, (i || 0) + 1)
            },
            teardown: function () {
              var o = this.ownerDocument || this.document || this
                , i = J.access(o, t) - 1;
              i ? J.access(o, t, i) : (o.removeEventListener(e, n, !0),
                J.remove(o, t))
            }
          }
        }
        ));
      var wt = n.location
        , Ot = {
          guid: Date.now()
        }
        , jt = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e)
          return null;
        try {
          t = (new n.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
          t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e),
          t
      }
        ;
      var Mt = /\[\]$/
        , Ct = /\r?\n/g
        , Rt = /^(?:submit|button|image|reset|file)$/i
        , Bt = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, o) {
        var i;
        if (Array.isArray(t))
          T.each(t, (function (t, i) {
            n || Mt.test(e) ? o(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
          }
          ));
        else if (n || "object" !== b(t))
          o(e, t);
        else
          for (i in t)
            Dt(e + "[" + i + "]", t[i], n, o)
      }
      T.param = function (e, t) {
        var n, o = [], i = function (e, t) {
          var n = g(t) ? t() : t;
          o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
          return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
          T.each(e, (function () {
            i(this.name, this.value)
          }
          ));
        else
          for (n in e)
            Dt(n, e[n], t, i);
        return o.join("&")
      }
        ,
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray())
          },
          serializeArray: function () {
            return this.map((function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this
            }
            )).filter((function () {
              var e = this.type;
              return this.name && !T(this).is(":disabled") && Bt.test(this.nodeName) && !Rt.test(e) && (this.checked || !ye.test(e))
            }
            )).map((function (e, t) {
              var n = T(this).val();
              return null == n ? null : Array.isArray(n) ? T.map(n, (function (e) {
                return {
                  name: t.name,
                  value: e.replace(Ct, "\r\n")
                }
              }
              )) : {
                  name: t.name,
                  value: n.replace(Ct, "\r\n")
                }
            }
            )).get()
          }
        });
      var kt = /%20/g
        , St = /#.*$/
        , It = /([?&])_=[^&]*/
        , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , At = /^(?:GET|HEAD)$/
        , Nt = /^\/\//
        , Ht = {}
        , Lt = {}
        , Vt = "*/".concat("*")
        , Ft = x.createElement("a");
      function Ut(e) {
        return function (t, n) {
          "string" != typeof t && (n = t,
            t = "*");
          var o, i = 0, r = t.toLowerCase().match(N) || [];
          if (g(n))
            for (; o = r[i++];)
              "+" === o[0] ? (o = o.slice(1) || "*",
                (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
      }
      function qt(e, t, n, o) {
        var i = {}
          , r = e === Lt;
        function a(s) {
          var l;
          return i[s] = !0,
            T.each(e[s] || [], (function (e, s) {
              var c = s(t, n, o);
              return "string" != typeof c || r || i[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                a(c),
                !1)
            }
            )),
            l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
      }
      function zt(e, t) {
        var n, o, i = T.ajaxSettings.flatOptions || {};
        for (n in t)
          void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
        return o && T.extend(!0, e, o),
          e
      }
      Ft.href = wt.href,
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Vt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML
            },
            flatOptions: {
              url: !0,
              context: !0
            }
          },
          ajaxSetup: function (e, t) {
            return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e)
          },
          ajaxPrefilter: Ut(Ht),
          ajaxTransport: Ut(Lt),
          ajax: function (e, t) {
            "object" == typeof e && (t = e,
              e = void 0),
              t = t || {};
            var o, i, r, a, s, l, c, u, p, d, h = T.ajaxSetup({}, t), f = h.context || h, y = h.context && (f.nodeType || f.jquery) ? T(f) : T.event, m = T.Deferred(), g = T.Callbacks("once memory"), v = h.statusCode || {}, _ = {}, E = {}, b = "canceled", w = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (c) {
                  if (!a)
                    for (a = {}; t = Pt.exec(r);)
                      a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = a[e.toLowerCase() + " "]
                }
                return null == t ? null : t.join(", ")
              },
              getAllResponseHeaders: function () {
                return c ? r : null
              },
              setRequestHeader: function (e, t) {
                return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e,
                  _[e] = t),
                  this
              },
              overrideMimeType: function (e) {
                return null == c && (h.mimeType = e),
                  this
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (c)
                    w.always(e[w.status]);
                  else
                    for (t in e)
                      v[t] = [v[t], e[t]];
                return this
              },
              abort: function (e) {
                var t = e || b;
                return o && o.abort(t),
                  O(0, t),
                  this
              }
            };
            if (m.promise(w),
              h.url = ((e || h.url || wt.href) + "").replace(Nt, wt.protocol + "//"),
              h.type = t.method || t.type || h.method || h.type,
              h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""],
              null == h.crossDomain) {
              l = x.createElement("a");
              try {
                l.href = h.url,
                  l.href = l.href,
                  h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
              } catch (e) {
                h.crossDomain = !0
              }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)),
              qt(Ht, h, t, w),
              c)
              return w;
            for (p in (u = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
              h.type = h.type.toUpperCase(),
              h.hasContent = !At.test(h.type),
              i = h.url.replace(St, ""),
              h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (d = h.url.slice(i.length),
                h.data && (h.processData || "string" == typeof h.data) && (i += (jt.test(i) ? "&" : "?") + h.data,
                  delete h.data),
                !1 === h.cache && (i = i.replace(It, "$1"),
                  d = (jt.test(i) ? "&" : "?") + "_=" + Ot.guid++ + d),
                h.url = i + d),
              h.ifModified && (T.lastModified[i] && w.setRequestHeader("If-Modified-Since", T.lastModified[i]),
                T.etag[i] && w.setRequestHeader("If-None-Match", T.etag[i])),
              (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && w.setRequestHeader("Content-Type", h.contentType),
              w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : h.accepts["*"]),
              h.headers)
              w.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || c))
              return w.abort();
            if (b = "abort",
              g.add(h.complete),
              w.done(h.success),
              w.fail(h.error),
              o = qt(Lt, h, t, w)) {
              if (w.readyState = 1,
                u && y.trigger("ajaxSend", [w, h]),
                c)
                return w;
              h.async && h.timeout > 0 && (s = n.setTimeout((function () {
                w.abort("timeout")
              }
              ), h.timeout));
              try {
                c = !1,
                  o.send(_, O)
              } catch (e) {
                if (c)
                  throw e;
                O(-1, e)
              }
            } else
              O(-1, "No Transport");
            function O(e, t, a, l) {
              var p, d, x, _, E, b = t;
              c || (c = !0,
                s && n.clearTimeout(s),
                o = void 0,
                r = l || "",
                w.readyState = e > 0 ? 4 : 0,
                p = e >= 200 && e < 300 || 304 === e,
                a && (_ = function (e, t, n) {
                  for (var o, i, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
                    l.shift(),
                      void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (o)
                    for (i in s)
                      if (s[i] && s[i].test(o)) {
                        l.unshift(i);
                        break
                      }
                  if (l[0] in n)
                    r = l[0];
                  else {
                    for (i in n) {
                      if (!l[0] || e.converters[i + " " + l[0]]) {
                        r = i;
                        break
                      }
                      a || (a = i)
                    }
                    r = r || a
                  }
                  if (r)
                    return r !== l[0] && l.unshift(r),
                      n[r]
                }(h, w, a)),
                !p && T.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () { }
                ),
                _ = function (e, t, n, o) {
                  var i, r, a, s, l, c = {}, u = e.dataTypes.slice();
                  if (u[1])
                    for (a in e.converters)
                      c[a.toLowerCase()] = e.converters[a];
                  for (r = u.shift(); r;)
                    if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      l = r,
                      r = u.shift())
                      if ("*" === r)
                        r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r]))
                          for (i in c)
                            if ((s = i.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                              !0 === a ? a = c[i] : !0 !== c[i] && (r = s[0],
                                u.unshift(s[1]));
                              break
                            }
                        if (!0 !== a)
                          if (a && e.throws)
                            t = a(t);
                          else
                            try {
                              t = a(t)
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + l + " to " + r
                              }
                            }
                      }
                  return {
                    state: "success",
                    data: t
                  }
                }(h, _, w, p),
                p ? (h.ifModified && ((E = w.getResponseHeader("Last-Modified")) && (T.lastModified[i] = E),
                  (E = w.getResponseHeader("etag")) && (T.etag[i] = E)),
                  204 === e || "HEAD" === h.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = _.state,
                    d = _.data,
                    p = !(x = _.error))) : (x = b,
                      !e && b || (b = "error",
                        e < 0 && (e = 0))),
                w.status = e,
                w.statusText = (t || b) + "",
                p ? m.resolveWith(f, [d, b, w]) : m.rejectWith(f, [w, b, x]),
                w.statusCode(v),
                v = void 0,
                u && y.trigger(p ? "ajaxSuccess" : "ajaxError", [w, h, p ? d : x]),
                g.fireWith(f, [w, b]),
                u && (y.trigger("ajaxComplete", [w, h]),
                  --T.active || T.event.trigger("ajaxStop")))
            }
            return w
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json")
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script")
          }
        }),
        T.each(["get", "post"], (function (e, t) {
          T[t] = function (e, n, o, i) {
            return g(n) && (i = i || o,
              o = n,
              n = void 0),
              T.ajax(T.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
              }, T.isPlainObject(e) && e))
          }
        }
        )),
        T.ajaxPrefilter((function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }
        )),
        T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
              "text script": function () { }
            },
            dataFilter: function (e) {
              T.globalEval(e, t, n)
            }
          })
        }
        ,
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
              t = T(e, this[0].ownerDocument).eq(0).clone(!0),
              this[0].parentNode && t.insertBefore(this[0]),
              t.map((function () {
                for (var e = this; e.firstElementChild;)
                  e = e.firstElementChild;
                return e
              }
              )).append(this)),
              this
          },
          wrapInner: function (e) {
            return g(e) ? this.each((function (t) {
              T(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function () {
              var t = T(this)
                , n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
          },
          wrap: function (e) {
            var t = g(e);
            return this.each((function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
          },
          unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
              T(this).replaceWith(this.childNodes)
            }
            )),
              this
          }
        }),
        T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e)
        }
        ,
        T.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest
          } catch (e) { }
        }
        ;
      var $t = {
        0: 200,
        1223: 204
      }
        , Wt = T.ajaxSettings.xhr();
      m.cors = !!Wt && "withCredentials" in Wt,
        m.ajax = Wt = !!Wt,
        T.ajaxTransport((function (e) {
          var t, o;
          if (m.cors || Wt && !e.crossDomain)
            return {
              send: function (i, r) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                  for (a in e.xhrFields)
                    s[a] = e.xhrFields[a];
                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                  e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                  i)
                  s.setRequestHeader(a, i[a]);
                t = function (e) {
                  return function () {
                    t && (t = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                      "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                        binary: s.response
                      } : {
                          text: s.responseText
                        }, s.getAllResponseHeaders()))
                  }
                }
                  ,
                  s.onload = t(),
                  o = s.onerror = s.ontimeout = t("error"),
                  void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function () {
                    4 === s.readyState && n.setTimeout((function () {
                      t && o()
                    }
                    ))
                  }
                  ,
                  t = t("abort");
                try {
                  s.send(e.hasContent && e.data || null)
                } catch (e) {
                  if (t)
                    throw e
                }
              },
              abort: function () {
                t && t()
              }
            }
        }
        )),
        T.ajaxPrefilter((function (e) {
          e.crossDomain && (e.contents.script = !1)
        }
        )),
        T.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function (e) {
              return T.globalEval(e),
                e
            }
          }
        }),
        T.ajaxPrefilter("script", (function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }
        )),
        T.ajaxTransport("script", (function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (o, i) {
                t = T("<script>").attr(e.scriptAttrs || {}).prop({
                  charset: e.scriptCharset,
                  src: e.url
                }).on("load error", n = function (e) {
                  t.remove(),
                    n = null,
                    e && i("error" === e.type ? 404 : 200, e.type)
                }
                ),
                  x.head.appendChild(t[0])
              },
              abort: function () {
                n && n()
              }
            }
        }
        ));
      var Xt, Gt = [], Qt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || T.expando + "_" + Ot.guid++;
          return this[e] = !0,
            e
        }
      }),
        T.ajaxPrefilter("json jsonp", (function (e, t, o) {
          var i, r, a, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
          if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
              s ? e[s] = e[s].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              e.converters["script json"] = function () {
                return a || T.error(i + " was not called"),
                  a[0]
              }
              ,
              e.dataTypes[0] = "json",
              r = n[i],
              n[i] = function () {
                a = arguments
              }
              ,
              o.always((function () {
                void 0 === r ? T(n).removeProp(i) : n[i] = r,
                  e[i] && (e.jsonpCallback = t.jsonpCallback,
                    Gt.push(i)),
                  a && g(r) && r(a[0]),
                  a = r = void 0
              }
              )),
              "script"
        }
        )),
        m.createHTMLDocument = ((Xt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
          2 === Xt.childNodes.length),
        T.parseHTML = function (e, t, n) {
          return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (m.createHTMLDocument ? ((o = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href,
              t.head.appendChild(o)) : t = x),
            r = !n && [],
            (i = B.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, r),
              r && r.length && T(r).remove(),
              T.merge([], i.childNodes)));
          var o, i, r
        }
        ,
        T.fn.load = function (e, t, n) {
          var o, i, r, a = this, s = e.indexOf(" ");
          return s > -1 && (o = vt(e.slice(s)),
            e = e.slice(0, s)),
            g(t) ? (n = t,
              t = void 0) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 && T.ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t
            }).done((function (e) {
              r = arguments,
                a.html(o ? T("<div>").append(T.parseHTML(e)).find(o) : e)
            }
            )).always(n && function (e, t) {
              a.each((function () {
                n.apply(this, r || [e.responseText, t, e])
              }
              ))
            }
            ),
            this
        }
        ,
        T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, (function (t) {
            return e === t.elem
          }
          )).length
        }
        ,
        T.offset = {
          setOffset: function (e, t, n) {
            var o, i, r, a, s, l, c = T.css(e, "position"), u = T(e), p = {};
            "static" === c && (e.style.position = "relative"),
              s = u.offset(),
              r = T.css(e, "top"),
              l = T.css(e, "left"),
              ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (o = u.position()).top,
                i = o.left) : (a = parseFloat(r) || 0,
                  i = parseFloat(l) || 0),
              g(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (p.top = t.top - s.top + a),
              null != t.left && (p.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, p) : ("number" == typeof p.top && (p.top += "px"),
                "number" == typeof p.left && (p.left += "px"),
                u.css(p))
          }
        },
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e ? this : this.each((function (t) {
                T.offset.setOffset(this, e, t)
              }
              ));
            var t, n, o = this[0];
            return o ? o.getClientRects().length ? (t = o.getBoundingClientRect(),
              n = o.ownerDocument.defaultView,
            {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
              } : void 0
          },
          position: function () {
            if (this[0]) {
              var e, t, n, o = this[0], i = {
                top: 0,
                left: 0
              };
              if ("fixed" === T.css(o, "position"))
                t = o.getBoundingClientRect();
              else {
                for (t = this.offset(),
                  n = o.ownerDocument,
                  e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");)
                  e = e.parentNode;
                e && e !== o && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                  i.left += T.css(e, "borderLeftWidth", !0))
              }
              return {
                top: t.top - i.top - T.css(o, "marginTop", !0),
                left: t.left - i.left - T.css(o, "marginLeft", !0)
              }
            }
          },
          offsetParent: function () {
            return this.map((function () {
              for (var e = this.offsetParent; e && "static" === T.css(e, "position");)
                e = e.offsetParent;
              return e || re
            }
            ))
          }
        }),
        T.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
        }, (function (e, t) {
          var n = "pageYOffset" === t;
          T.fn[e] = function (o) {
            return z(this, (function (e, o, i) {
              var r;
              if (v(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === i)
                return r ? r[t] : e[o];
              r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[o] = i
            }
            ), e, o, arguments.length)
          }
        }
        )),
        T.each(["top", "left"], (function (e, t) {
          T.cssHooks[t] = We(m.pixelPosition, (function (e, n) {
            if (n)
              return n = $e(e, t),
                Fe.test(n) ? T(e).position()[t] + "px" : n
          }
          ))
        }
        )),
        T.each({
          Height: "height",
          Width: "width"
        }, (function (e, t) {
          T.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
          }, (function (n, o) {
            T.fn[o] = function (i, r) {
              var a = arguments.length && (n || "boolean" != typeof i)
                , s = n || (!0 === i || !0 === r ? "margin" : "border");
              return z(this, (function (t, n, i) {
                var r;
                return v(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                  Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? T.css(t, n, s) : T.style(t, n, i, s)
              }
              ), t, a ? i : void 0, a)
            }
          }
          ))
        }
        )),
        T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
          T.fn[t] = function (e) {
            return this.on(t, e)
          }
        }
        )),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n)
          },
          unbind: function (e, t) {
            return this.off(e, null, t)
          },
          delegate: function (e, t, n, o) {
            return this.on(t, e, n, o)
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
          }
        }),
        T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
          T.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
          }
        }
        ));
      var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      T.proxy = function (e, t) {
        var n, o, i;
        if ("string" == typeof t && (n = e[t],
          t = e,
          e = n),
          g(e))
          return o = s.call(arguments, 2),
            (i = function () {
              return e.apply(t || this, o.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || T.guid++,
            i
      }
        ,
        T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0)
        }
        ,
        T.isArray = Array.isArray,
        T.parseJSON = JSON.parse,
        T.nodeName = R,
        T.isFunction = g,
        T.isWindow = v,
        T.camelCase = G,
        T.type = b,
        T.now = Date.now,
        T.isNumeric = function (e) {
          var t = T.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        T.trim = function (e) {
          return null == e ? "" : (e + "").replace(Yt, "")
        }
        ,
        void 0 === (o = function () {
          return T
        }
          .apply(t, [])) || (e.exports = o);
      var Jt = n.jQuery
        , Kt = n.$;
      return T.noConflict = function (e) {
        return n.$ === T && (n.$ = Kt),
          e && n.jQuery === T && (n.jQuery = Jt),
          T
      }
        ,
        void 0 === i && (n.jQuery = n.$ = T),
        T
    }
    ))
  }
  , function (e, t, n) {
    n(3),
      n(7),
      n(5),
      n(6),
      n.e(1).then(n.t.bind(null, 8, 7))
  }
  , function (e, t) {
    AFRAME.components["look-controls"].Component.prototype.onTouchMove = function (e) {
      var t, n, o = this.el.sceneEl.canvas, i = this.yawObject;
      if (this.touchStarted && this.data.touchEnabled) {
        n = 2 * Math.PI * (e.touches[0].pageX - this.touchStart.x) / o.clientWidth;
        var r = 2 * Math.PI * (e.touches[0].pageY - this.touchStart.y) / o.clientHeight;
        t = this.data.reverseTouchDrag ? 1 : -1,
          i.rotation.y -= .5 * n * t,
          this.pitchObject.rotation.x -= .5 * r * t,
          this.touchStart = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          }
      }
    }
  }
  , function (e, t, n) {
    var o;
    "undefined" != typeof self && self,
      o = function () {
        return function (e) {
          var t = {};
          function n(o) {
            if (t[o])
              return t[o].exports;
            var i = t[o] = {
              i: o,
              l: !1,
              exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n),
              i.l = !0,
              i.exports
          }
          return n.m = e,
            n.c = t,
            n.d = function (e, t, o) {
              n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: o
              })
            }
            ,
            n.r = function (e) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              })
            }
            ,
            n.n = function (e) {
              var t = e && e.__esModule ? function () {
                return e.default
              }
                : function () {
                  return e
                }
                ;
              return n.d(t, "a", t),
                t
            }
            ,
            n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 0)
        }({
          "./dist/icons.json": /*!*************************!*\
!*** ./dist/icons.json ***!
\*************************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            function (e) {
              e.exports = {
                activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
              }
            },
          "./node_modules/classnames/dedupe.js": /*!*******************************************!*\
!*** ./node_modules/classnames/dedupe.js ***!
\*******************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o;
              /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
              !function () {
                "use strict";
                var n = function () {
                  function e() { }
                  function t(e, t) {
                    for (var n = t.length, o = 0; o < n; ++o)
                      i(e, t[o])
                  }
                  e.prototype = Object.create(null);
                  var n = {}.hasOwnProperty
                    , o = /\s+/;
                  function i(e, i) {
                    if (i) {
                      var r = typeof i;
                      "string" === r ? function (e, t) {
                        for (var n = t.split(o), i = n.length, r = 0; r < i; ++r)
                          e[n[r]] = !0
                      }(e, i) : Array.isArray(i) ? t(e, i) : "object" === r ? function (e, t) {
                        for (var o in t)
                          n.call(t, o) && (e[o] = !!t[o])
                      }(e, i) : "number" === r && function (e, t) {
                        e[t] = !0
                      }(e, i)
                    }
                  }
                  return function () {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                      o[i] = arguments[i];
                    var r = new e;
                    t(r, o);
                    var a = [];
                    for (var s in r)
                      r[s] && a.push(s);
                    return a.join(" ")
                  }
                }();
                void 0 !== e && e.exports ? e.exports = n : void 0 === (o = function () {
                  return n
                }
                  .apply(t, [])) || (e.exports = o)
              }()
            },
          "./node_modules/core-js/es/array/from.js": /*!***********************************************!*\
!*** ./node_modules/core-js/es/array/from.js ***!
\***********************************************/
            /*! no static exports found */
            function (e, t, n) {
              n(/*! ../../modules/es.string.iterator */
                "./node_modules/core-js/modules/es.string.iterator.js"),
                n(/*! ../../modules/es.array.from */
                  "./node_modules/core-js/modules/es.array.from.js");
              var o = n(/*! ../../internals/path */
                "./node_modules/core-js/internals/path.js");
              e.exports = o.Array.from
            },
          "./node_modules/core-js/internals/a-function.js": /*!******************************************************!*\
!*** ./node_modules/core-js/internals/a-function.js ***!
\******************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = function (e) {
                if ("function" != typeof e)
                  throw TypeError(String(e) + " is not a function");
                return e
              }
            },
          "./node_modules/core-js/internals/an-object.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/an-object.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js");
              e.exports = function (e) {
                if (!o(e))
                  throw TypeError(String(e) + " is not an object");
                return e
              }
            },
          "./node_modules/core-js/internals/array-from.js": /*!******************************************************!*\
!*** ./node_modules/core-js/internals/array-from.js ***!
\******************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = n(/*! ../internals/bind-context */
                "./node_modules/core-js/internals/bind-context.js")
                , i = n(/*! ../internals/to-object */
                  "./node_modules/core-js/internals/to-object.js")
                , r = n(/*! ../internals/call-with-safe-iteration-closing */
                  "./node_modules/core-js/internals/call-with-safe-iteration-closing.js")
                , a = n(/*! ../internals/is-array-iterator-method */
                  "./node_modules/core-js/internals/is-array-iterator-method.js")
                , s = n(/*! ../internals/to-length */
                  "./node_modules/core-js/internals/to-length.js")
                , l = n(/*! ../internals/create-property */
                  "./node_modules/core-js/internals/create-property.js")
                , c = n(/*! ../internals/get-iterator-method */
                  "./node_modules/core-js/internals/get-iterator-method.js");
              e.exports = function (e) {
                var t, n, u, p, d = i(e), h = "function" == typeof this ? this : Array, f = arguments.length, y = f > 1 ? arguments[1] : void 0, m = void 0 !== y, g = 0, v = c(d);
                if (m && (y = o(y, f > 2 ? arguments[2] : void 0, 2)),
                  null == v || h == Array && a(v))
                  for (n = new h(t = s(d.length)); t > g; g++)
                    l(n, g, m ? y(d[g], g) : d[g]);
                else
                  for (p = v.call(d),
                    n = new h; !(u = p.next()).done; g++)
                    l(n, g, m ? r(p, y, [u.value, g], !0) : u.value);
                return n.length = g,
                  n
              }
            },
          "./node_modules/core-js/internals/array-includes.js": /*!**********************************************************!*\
!*** ./node_modules/core-js/internals/array-includes.js ***!
\**********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js")
                , i = n(/*! ../internals/to-length */
                  "./node_modules/core-js/internals/to-length.js")
                , r = n(/*! ../internals/to-absolute-index */
                  "./node_modules/core-js/internals/to-absolute-index.js");
              e.exports = function (e) {
                return function (t, n, a) {
                  var s, l = o(t), c = i(l.length), u = r(a, c);
                  if (e && n != n) {
                    for (; c > u;)
                      if ((s = l[u++]) != s)
                        return !0
                  } else
                    for (; c > u; u++)
                      if ((e || u in l) && l[u] === n)
                        return e || u || 0;
                  return !e && -1
                }
              }
            },
          "./node_modules/core-js/internals/bind-context.js": /*!********************************************************!*\
!*** ./node_modules/core-js/internals/bind-context.js ***!
\********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/a-function */
                "./node_modules/core-js/internals/a-function.js");
              e.exports = function (e, t, n) {
                if (o(e),
                  void 0 === t)
                  return e;
                switch (n) {
                  case 0:
                    return function () {
                      return e.call(t)
                    }
                      ;
                  case 1:
                    return function (n) {
                      return e.call(t, n)
                    }
                      ;
                  case 2:
                    return function (n, o) {
                      return e.call(t, n, o)
                    }
                      ;
                  case 3:
                    return function (n, o, i) {
                      return e.call(t, n, o, i)
                    }
                }
                return function () {
                  return e.apply(t, arguments)
                }
              }
            },
          "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": /*!****************************************************************************!*\
!*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
\****************************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js");
              e.exports = function (e, t, n, i) {
                try {
                  return i ? t(o(n)[0], n[1]) : t(n)
                } catch (t) {
                  var r = e.return;
                  throw void 0 !== r && o(r.call(e)),
                  t
                }
              }
            },
          "./node_modules/core-js/internals/check-correctness-of-iteration.js": /*!**************************************************************************!*\
!*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
\**************************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js")("iterator")
                , i = !1;
              try {
                var r = 0
                  , a = {
                    next: function () {
                      return {
                        done: !!r++
                      }
                    },
                    return: function () {
                      i = !0
                    }
                  };
                a[o] = function () {
                  return this
                }
                  ,
                  Array.from(a, (function () {
                    throw 2
                  }
                  ))
              } catch (e) { }
              e.exports = function (e, t) {
                if (!t && !i)
                  return !1;
                var n = !1;
                try {
                  var r = {};
                  r[o] = function () {
                    return {
                      next: function () {
                        return {
                          done: n = !0
                        }
                      }
                    }
                  }
                    ,
                    e(r)
                } catch (e) { }
                return n
              }
            },
          "./node_modules/core-js/internals/classof-raw.js": /*!*******************************************************!*\
!*** ./node_modules/core-js/internals/classof-raw.js ***!
\*******************************************************/
            /*! no static exports found */
            function (e, t) {
              var n = {}.toString;
              e.exports = function (e) {
                return n.call(e).slice(8, -1)
              }
            },
          "./node_modules/core-js/internals/classof.js": /*!***************************************************!*\
!*** ./node_modules/core-js/internals/classof.js ***!
\***************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js")
                , i = n(/*! ../internals/well-known-symbol */
                  "./node_modules/core-js/internals/well-known-symbol.js")("toStringTag")
                , r = "Arguments" == o(function () {
                  return arguments
                }());
              e.exports = function (e) {
                var t, n, a;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                  try {
                    return e[t]
                  } catch (e) { }
                }(t = Object(e), i)) ? n : r ? o(t) : "Object" == (a = o(t)) && "function" == typeof t.callee ? "Arguments" : a
              }
            },
          "./node_modules/core-js/internals/copy-constructor-properties.js": /*!***********************************************************************!*\
!*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
\***********************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/has */
                "./node_modules/core-js/internals/has.js")
                , i = n(/*! ../internals/own-keys */
                  "./node_modules/core-js/internals/own-keys.js")
                , r = n(/*! ../internals/object-get-own-property-descriptor */
                  "./node_modules/core-js/internals/object-get-own-property-descriptor.js")
                , a = n(/*! ../internals/object-define-property */
                  "./node_modules/core-js/internals/object-define-property.js");
              e.exports = function (e, t) {
                for (var n = i(t), s = a.f, l = r.f, c = 0; c < n.length; c++) {
                  var u = n[c];
                  o(e, u) || s(e, u, l(t, u))
                }
              }
            },
          "./node_modules/core-js/internals/correct-prototype-getter.js": /*!********************************************************************!*\
!*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
\********************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js");
              e.exports = !o((function () {
                function e() { }
                return e.prototype.constructor = null,
                  Object.getPrototypeOf(new e) !== e.prototype
              }
              ))
            },
          "./node_modules/core-js/internals/create-iterator-constructor.js": /*!***********************************************************************!*\
!*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
\***********************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = n(/*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype
                , i = n(/*! ../internals/object-create */
                  "./node_modules/core-js/internals/object-create.js")
                , r = n(/*! ../internals/create-property-descriptor */
                  "./node_modules/core-js/internals/create-property-descriptor.js")
                , a = n(/*! ../internals/set-to-string-tag */
                  "./node_modules/core-js/internals/set-to-string-tag.js")
                , s = n(/*! ../internals/iterators */
                  "./node_modules/core-js/internals/iterators.js")
                , l = function () {
                  return this
                };
              e.exports = function (e, t, n) {
                var c = t + " Iterator";
                return e.prototype = i(o, {
                  next: r(1, n)
                }),
                  a(e, c, !1, !0),
                  s[c] = l,
                  e
              }
            },
          "./node_modules/core-js/internals/create-property-descriptor.js": /*!**********************************************************************!*\
!*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
\**********************************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = function (e, t) {
                return {
                  enumerable: !(1 & e),
                  configurable: !(2 & e),
                  writable: !(4 & e),
                  value: t
                }
              }
            },
          "./node_modules/core-js/internals/create-property.js": /*!***********************************************************!*\
!*** ./node_modules/core-js/internals/create-property.js ***!
\***********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = n(/*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js")
                , i = n(/*! ../internals/object-define-property */
                  "./node_modules/core-js/internals/object-define-property.js")
                , r = n(/*! ../internals/create-property-descriptor */
                  "./node_modules/core-js/internals/create-property-descriptor.js");
              e.exports = function (e, t, n) {
                var a = o(t);
                a in e ? i.f(e, a, r(0, n)) : e[a] = n
              }
            },
          "./node_modules/core-js/internals/define-iterator.js": /*!***********************************************************!*\
!*** ./node_modules/core-js/internals/define-iterator.js ***!
\***********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = n(/*! ../internals/export */
                "./node_modules/core-js/internals/export.js")
                , i = n(/*! ../internals/create-iterator-constructor */
                  "./node_modules/core-js/internals/create-iterator-constructor.js")
                , r = n(/*! ../internals/object-get-prototype-of */
                  "./node_modules/core-js/internals/object-get-prototype-of.js")
                , a = n(/*! ../internals/object-set-prototype-of */
                  "./node_modules/core-js/internals/object-set-prototype-of.js")
                , s = n(/*! ../internals/set-to-string-tag */
                  "./node_modules/core-js/internals/set-to-string-tag.js")
                , l = n(/*! ../internals/hide */
                  "./node_modules/core-js/internals/hide.js")
                , c = n(/*! ../internals/redefine */
                  "./node_modules/core-js/internals/redefine.js")
                , u = n(/*! ../internals/well-known-symbol */
                  "./node_modules/core-js/internals/well-known-symbol.js")
                , p = n(/*! ../internals/is-pure */
                  "./node_modules/core-js/internals/is-pure.js")
                , d = n(/*! ../internals/iterators */
                  "./node_modules/core-js/internals/iterators.js")
                , h = n(/*! ../internals/iterators-core */
                  "./node_modules/core-js/internals/iterators-core.js")
                , f = h.IteratorPrototype
                , y = h.BUGGY_SAFARI_ITERATORS
                , m = u("iterator")
                , g = function () {
                  return this
                };
              e.exports = function (e, t, n, u, h, v, x) {
                i(n, t, u);
                var _, E, b, T = function (e) {
                  if (e === h && C)
                    return C;
                  if (!y && e in j)
                    return j[e];
                  switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                      return function () {
                        return new n(this, e)
                      }
                  }
                  return function () {
                    return new n(this)
                  }
                }, w = t + " Iterator", O = !1, j = e.prototype, M = j[m] || j["@@iterator"] || h && j[h], C = !y && M || T(h), R = "Array" == t && j.entries || M;
                if (R && (_ = r(R.call(new e)),
                  f !== Object.prototype && _.next && (p || r(_) === f || (a ? a(_, f) : "function" != typeof _[m] && l(_, m, g)),
                    s(_, w, !0, !0),
                    p && (d[w] = g))),
                  "values" == h && M && "values" !== M.name && (O = !0,
                    C = function () {
                      return M.call(this)
                    }
                  ),
                  p && !x || j[m] === C || l(j, m, C),
                  d[t] = C,
                  h)
                  if (E = {
                    values: T("values"),
                    keys: v ? C : T("keys"),
                    entries: T("entries")
                  },
                    x)
                    for (b in E)
                      (y || O || !(b in j)) && c(j, b, E[b]);
                  else
                    o({
                      target: t,
                      proto: !0,
                      forced: y || O
                    }, E);
                return E
              }
            },
          "./node_modules/core-js/internals/descriptors.js": /*!*******************************************************!*\
!*** ./node_modules/core-js/internals/descriptors.js ***!
\*******************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js");
              e.exports = !o((function () {
                return 7 != Object.defineProperty({}, "a", {
                  get: function () {
                    return 7
                  }
                }).a
              }
              ))
            },
          "./node_modules/core-js/internals/document-create-element.js": /*!*******************************************************************!*\
!*** ./node_modules/core-js/internals/document-create-element.js ***!
\*******************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/is-object */
                  "./node_modules/core-js/internals/is-object.js")
                , r = o.document
                , a = i(r) && i(r.createElement);
              e.exports = function (e) {
                return a ? r.createElement(e) : {}
              }
            },
          "./node_modules/core-js/internals/enum-bug-keys.js": /*!*********************************************************!*\
!*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
\*********************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
          "./node_modules/core-js/internals/export.js": /*!**************************************************!*\
!*** ./node_modules/core-js/internals/export.js ***!
\**************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/object-get-own-property-descriptor */
                  "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f
                , r = n(/*! ../internals/hide */
                  "./node_modules/core-js/internals/hide.js")
                , a = n(/*! ../internals/redefine */
                  "./node_modules/core-js/internals/redefine.js")
                , s = n(/*! ../internals/set-global */
                  "./node_modules/core-js/internals/set-global.js")
                , l = n(/*! ../internals/copy-constructor-properties */
                  "./node_modules/core-js/internals/copy-constructor-properties.js")
                , c = n(/*! ../internals/is-forced */
                  "./node_modules/core-js/internals/is-forced.js");
              e.exports = function (e, t) {
                var n, u, p, d, h, f = e.target, y = e.global, m = e.stat;
                if (n = y ? o : m ? o[f] || s(f, {}) : (o[f] || {}).prototype)
                  for (u in t) {
                    if (d = t[u],
                      p = e.noTargetGet ? (h = i(n, u)) && h.value : n[u],
                      !c(y ? u : f + (m ? "." : "#") + u, e.forced) && void 0 !== p) {
                      if (typeof d == typeof p)
                        continue;
                      l(d, p)
                    }
                    (e.sham || p && p.sham) && r(d, "sham", !0),
                      a(n, u, d, e)
                  }
              }
            },
          "./node_modules/core-js/internals/fails.js": /*!*************************************************!*\
!*** ./node_modules/core-js/internals/fails.js ***!
\*************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = function (e) {
                try {
                  return !!e()
                } catch (e) {
                  return !0
                }
              }
            },
          "./node_modules/core-js/internals/function-to-string.js": /*!**************************************************************!*\
!*** ./node_modules/core-js/internals/function-to-string.js ***!
\**************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js");
              e.exports = o("native-function-to-string", Function.toString)
            },
          "./node_modules/core-js/internals/get-iterator-method.js": /*!***************************************************************!*\
!*** ./node_modules/core-js/internals/get-iterator-method.js ***!
\***************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/classof */
                "./node_modules/core-js/internals/classof.js")
                , i = n(/*! ../internals/iterators */
                  "./node_modules/core-js/internals/iterators.js")
                , r = n(/*! ../internals/well-known-symbol */
                  "./node_modules/core-js/internals/well-known-symbol.js")("iterator");
              e.exports = function (e) {
                if (null != e)
                  return e[r] || e["@@iterator"] || i[o(e)]
              }
            },
          "./node_modules/core-js/internals/global.js": /*!**************************************************!*\
!*** ./node_modules/core-js/internals/global.js ***!
\**************************************************/
            /*! no static exports found */
            function (e, t, n) {
              (function (t) {
                var n = "object"
                  , o = function (e) {
                    return e && e.Math == Math && e
                  };
                e.exports = o(typeof globalThis == n && globalThis) || o(typeof window == n && window) || o(typeof self == n && self) || o(typeof t == n && t) || Function("return this")()
              }
              ).call(this, n(/*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"))
            },
          "./node_modules/core-js/internals/has.js": /*!***********************************************!*\
!*** ./node_modules/core-js/internals/has.js ***!
\***********************************************/
            /*! no static exports found */
            function (e, t) {
              var n = {}.hasOwnProperty;
              e.exports = function (e, t) {
                return n.call(e, t)
              }
            },
          "./node_modules/core-js/internals/hidden-keys.js": /*!*******************************************************!*\
!*** ./node_modules/core-js/internals/hidden-keys.js ***!
\*******************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = {}
            },
          "./node_modules/core-js/internals/hide.js": /*!************************************************!*\
!*** ./node_modules/core-js/internals/hide.js ***!
\************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js")
                , i = n(/*! ../internals/object-define-property */
                  "./node_modules/core-js/internals/object-define-property.js")
                , r = n(/*! ../internals/create-property-descriptor */
                  "./node_modules/core-js/internals/create-property-descriptor.js");
              e.exports = o ? function (e, t, n) {
                return i.f(e, t, r(1, n))
              }
                : function (e, t, n) {
                  return e[t] = n,
                    e
                }
            },
          "./node_modules/core-js/internals/html.js": /*!************************************************!*\
!*** ./node_modules/core-js/internals/html.js ***!
\************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js").document;
              e.exports = o && o.documentElement
            },
          "./node_modules/core-js/internals/ie8-dom-define.js": /*!**********************************************************!*\
!*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
\**********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js")
                , i = n(/*! ../internals/fails */
                  "./node_modules/core-js/internals/fails.js")
                , r = n(/*! ../internals/document-create-element */
                  "./node_modules/core-js/internals/document-create-element.js");
              e.exports = !o && !i((function () {
                return 7 != Object.defineProperty(r("div"), "a", {
                  get: function () {
                    return 7
                  }
                }).a
              }
              ))
            },
          "./node_modules/core-js/internals/indexed-object.js": /*!**********************************************************!*\
!*** ./node_modules/core-js/internals/indexed-object.js ***!
\**********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js")
                , i = n(/*! ../internals/classof-raw */
                  "./node_modules/core-js/internals/classof-raw.js")
                , r = "".split;
              e.exports = o((function () {
                return !Object("z").propertyIsEnumerable(0)
              }
              )) ? function (e) {
                return "String" == i(e) ? r.call(e, "") : Object(e)
              }
                : Object
            },
          "./node_modules/core-js/internals/internal-state.js": /*!**********************************************************!*\
!*** ./node_modules/core-js/internals/internal-state.js ***!
\**********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o, i, r, a = n(/*! ../internals/native-weak-map */
                "./node_modules/core-js/internals/native-weak-map.js"), s = n(/*! ../internals/global */
                  "./node_modules/core-js/internals/global.js"), l = n(/*! ../internals/is-object */
                    "./node_modules/core-js/internals/is-object.js"), c = n(/*! ../internals/hide */
                      "./node_modules/core-js/internals/hide.js"), u = n(/*! ../internals/has */
                        "./node_modules/core-js/internals/has.js"), p = n(/*! ../internals/shared-key */
                          "./node_modules/core-js/internals/shared-key.js"), d = n(/*! ../internals/hidden-keys */
                            "./node_modules/core-js/internals/hidden-keys.js"), h = s.WeakMap;
              if (a) {
                var f = new h
                  , y = f.get
                  , m = f.has
                  , g = f.set;
                o = function (e, t) {
                  return g.call(f, e, t),
                    t
                }
                  ,
                  i = function (e) {
                    return y.call(f, e) || {}
                  }
                  ,
                  r = function (e) {
                    return m.call(f, e)
                  }
              } else {
                var v = p("state");
                d[v] = !0,
                  o = function (e, t) {
                    return c(e, v, t),
                      t
                  }
                  ,
                  i = function (e) {
                    return u(e, v) ? e[v] : {}
                  }
                  ,
                  r = function (e) {
                    return u(e, v)
                  }
              }
              e.exports = {
                set: o,
                get: i,
                has: r,
                enforce: function (e) {
                  return r(e) ? i(e) : o(e, {})
                },
                getterFor: function (e) {
                  return function (t) {
                    var n;
                    if (!l(t) || (n = i(t)).type !== e)
                      throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                  }
                }
              }
            },
          "./node_modules/core-js/internals/is-array-iterator-method.js": /*!********************************************************************!*\
!*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
\********************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js")
                , i = n(/*! ../internals/iterators */
                  "./node_modules/core-js/internals/iterators.js")
                , r = o("iterator")
                , a = Array.prototype;
              e.exports = function (e) {
                return void 0 !== e && (i.Array === e || a[r] === e)
              }
            },
          "./node_modules/core-js/internals/is-forced.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/is-forced.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js")
                , i = /#|\.prototype\./
                , r = function (e, t) {
                  var n = s[a(e)];
                  return n == c || n != l && ("function" == typeof t ? o(t) : !!t)
                }
                , a = r.normalize = function (e) {
                  return String(e).replace(i, ".").toLowerCase()
                }
                , s = r.data = {}
                , l = r.NATIVE = "N"
                , c = r.POLYFILL = "P";
              e.exports = r
            },
          "./node_modules/core-js/internals/is-object.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/is-object.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
              }
            },
          "./node_modules/core-js/internals/is-pure.js": /*!***************************************************!*\
!*** ./node_modules/core-js/internals/is-pure.js ***!
\***************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = !1
            },
          "./node_modules/core-js/internals/iterators-core.js": /*!**********************************************************!*\
!*** ./node_modules/core-js/internals/iterators-core.js ***!
\**********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o, i, r, a = n(/*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"), s = n(/*! ../internals/hide */
                  "./node_modules/core-js/internals/hide.js"), l = n(/*! ../internals/has */
                    "./node_modules/core-js/internals/has.js"), c = n(/*! ../internals/well-known-symbol */
                      "./node_modules/core-js/internals/well-known-symbol.js"), u = n(/*! ../internals/is-pure */
                        "./node_modules/core-js/internals/is-pure.js"), p = c("iterator"), d = !1;
              [].keys && ("next" in (r = [].keys()) ? (i = a(a(r))) !== Object.prototype && (o = i) : d = !0),
                null == o && (o = {}),
                u || l(o, p) || s(o, p, (function () {
                  return this
                }
                )),
                e.exports = {
                  IteratorPrototype: o,
                  BUGGY_SAFARI_ITERATORS: d
                }
            },
          "./node_modules/core-js/internals/iterators.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/iterators.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = {}
            },
          "./node_modules/core-js/internals/native-symbol.js": /*!*********************************************************!*\
!*** ./node_modules/core-js/internals/native-symbol.js ***!
\*********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js");
              e.exports = !!Object.getOwnPropertySymbols && !o((function () {
                return !String(Symbol())
              }
              ))
            },
          "./node_modules/core-js/internals/native-weak-map.js": /*!***********************************************************!*\
!*** ./node_modules/core-js/internals/native-weak-map.js ***!
\***********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/function-to-string */
                  "./node_modules/core-js/internals/function-to-string.js")
                , r = o.WeakMap;
              e.exports = "function" == typeof r && /native code/.test(i.call(r))
            },
          "./node_modules/core-js/internals/object-create.js": /*!*********************************************************!*\
!*** ./node_modules/core-js/internals/object-create.js ***!
\*********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js")
                , i = n(/*! ../internals/object-define-properties */
                  "./node_modules/core-js/internals/object-define-properties.js")
                , r = n(/*! ../internals/enum-bug-keys */
                  "./node_modules/core-js/internals/enum-bug-keys.js")
                , a = n(/*! ../internals/hidden-keys */
                  "./node_modules/core-js/internals/hidden-keys.js")
                , s = n(/*! ../internals/html */
                  "./node_modules/core-js/internals/html.js")
                , l = n(/*! ../internals/document-create-element */
                  "./node_modules/core-js/internals/document-create-element.js")
                , c = n(/*! ../internals/shared-key */
                  "./node_modules/core-js/internals/shared-key.js")("IE_PROTO")
                , u = function () { }
                , p = function () {
                  var e, t = l("iframe"), n = r.length;
                  for (t.style.display = "none",
                    s.appendChild(t),
                    t.src = String("javascript:"),
                    (e = t.contentWindow.document).open(),
                    e.write("<script>document.F=Object<\/script>"),
                    e.close(),
                    p = e.F; n--;)
                    delete p.prototype[r[n]];
                  return p()
                };
              e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (u.prototype = o(e),
                  n = new u,
                  u.prototype = null,
                  n[c] = e) : n = p(),
                  void 0 === t ? n : i(n, t)
              }
                ,
                a[c] = !0
            },
          "./node_modules/core-js/internals/object-define-properties.js": /*!********************************************************************!*\
!*** ./node_modules/core-js/internals/object-define-properties.js ***!
\********************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js")
                , i = n(/*! ../internals/object-define-property */
                  "./node_modules/core-js/internals/object-define-property.js")
                , r = n(/*! ../internals/an-object */
                  "./node_modules/core-js/internals/an-object.js")
                , a = n(/*! ../internals/object-keys */
                  "./node_modules/core-js/internals/object-keys.js");
              e.exports = o ? Object.defineProperties : function (e, t) {
                r(e);
                for (var n, o = a(t), s = o.length, l = 0; s > l;)
                  i.f(e, n = o[l++], t[n]);
                return e
              }
            },
          "./node_modules/core-js/internals/object-define-property.js": /*!******************************************************************!*\
!*** ./node_modules/core-js/internals/object-define-property.js ***!
\******************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js")
                , i = n(/*! ../internals/ie8-dom-define */
                  "./node_modules/core-js/internals/ie8-dom-define.js")
                , r = n(/*! ../internals/an-object */
                  "./node_modules/core-js/internals/an-object.js")
                , a = n(/*! ../internals/to-primitive */
                  "./node_modules/core-js/internals/to-primitive.js")
                , s = Object.defineProperty;
              t.f = o ? s : function (e, t, n) {
                if (r(e),
                  t = a(t, !0),
                  r(n),
                  i)
                  try {
                    return s(e, t, n)
                  } catch (e) { }
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value),
                  e
              }
            },
          "./node_modules/core-js/internals/object-get-own-property-descriptor.js": /*!******************************************************************************!*\
!*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
\******************************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js")
                , i = n(/*! ../internals/object-property-is-enumerable */
                  "./node_modules/core-js/internals/object-property-is-enumerable.js")
                , r = n(/*! ../internals/create-property-descriptor */
                  "./node_modules/core-js/internals/create-property-descriptor.js")
                , a = n(/*! ../internals/to-indexed-object */
                  "./node_modules/core-js/internals/to-indexed-object.js")
                , s = n(/*! ../internals/to-primitive */
                  "./node_modules/core-js/internals/to-primitive.js")
                , l = n(/*! ../internals/has */
                  "./node_modules/core-js/internals/has.js")
                , c = n(/*! ../internals/ie8-dom-define */
                  "./node_modules/core-js/internals/ie8-dom-define.js")
                , u = Object.getOwnPropertyDescriptor;
              t.f = o ? u : function (e, t) {
                if (e = a(e),
                  t = s(t, !0),
                  c)
                  try {
                    return u(e, t)
                  } catch (e) { }
                if (l(e, t))
                  return r(!i.f.call(e, t), e[t])
              }
            },
          "./node_modules/core-js/internals/object-get-own-property-names.js": /*!*************************************************************************!*\
!*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
\*************************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js")
                , i = n(/*! ../internals/enum-bug-keys */
                  "./node_modules/core-js/internals/enum-bug-keys.js").concat("length", "prototype");
              t.f = Object.getOwnPropertyNames || function (e) {
                return o(e, i)
              }
            },
          "./node_modules/core-js/internals/object-get-own-property-symbols.js": /*!***************************************************************************!*\
!*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
\***************************************************************************/
            /*! no static exports found */
            function (e, t) {
              t.f = Object.getOwnPropertySymbols
            },
          "./node_modules/core-js/internals/object-get-prototype-of.js": /*!*******************************************************************!*\
!*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
\*******************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/has */
                "./node_modules/core-js/internals/has.js")
                , i = n(/*! ../internals/to-object */
                  "./node_modules/core-js/internals/to-object.js")
                , r = n(/*! ../internals/shared-key */
                  "./node_modules/core-js/internals/shared-key.js")
                , a = n(/*! ../internals/correct-prototype-getter */
                  "./node_modules/core-js/internals/correct-prototype-getter.js")
                , s = r("IE_PROTO")
                , l = Object.prototype;
              e.exports = a ? Object.getPrototypeOf : function (e) {
                return e = i(e),
                  o(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null
              }
            },
          "./node_modules/core-js/internals/object-keys-internal.js": /*!****************************************************************!*\
!*** ./node_modules/core-js/internals/object-keys-internal.js ***!
\****************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/has */
                "./node_modules/core-js/internals/has.js")
                , i = n(/*! ../internals/to-indexed-object */
                  "./node_modules/core-js/internals/to-indexed-object.js")
                , r = n(/*! ../internals/array-includes */
                  "./node_modules/core-js/internals/array-includes.js")
                , a = n(/*! ../internals/hidden-keys */
                  "./node_modules/core-js/internals/hidden-keys.js")
                , s = r(!1);
              e.exports = function (e, t) {
                var n, r = i(e), l = 0, c = [];
                for (n in r)
                  !o(a, n) && o(r, n) && c.push(n);
                for (; t.length > l;)
                  o(r, n = t[l++]) && (~s(c, n) || c.push(n));
                return c
              }
            },
          "./node_modules/core-js/internals/object-keys.js": /*!*******************************************************!*\
!*** ./node_modules/core-js/internals/object-keys.js ***!
\*******************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js")
                , i = n(/*! ../internals/enum-bug-keys */
                  "./node_modules/core-js/internals/enum-bug-keys.js");
              e.exports = Object.keys || function (e) {
                return o(e, i)
              }
            },
          "./node_modules/core-js/internals/object-property-is-enumerable.js": /*!*************************************************************************!*\
!*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
\*************************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = {}.propertyIsEnumerable
                , i = Object.getOwnPropertyDescriptor
                , r = i && !o.call({
                  1: 2
                }, 1);
              t.f = r ? function (e) {
                var t = i(this, e);
                return !!t && t.enumerable
              }
                : o
            },
          "./node_modules/core-js/internals/object-set-prototype-of.js": /*!*******************************************************************!*\
!*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
\*******************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/validate-set-prototype-of-arguments */
                "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
              e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var e, t = !1, n = {};
                try {
                  (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                    t = n instanceof Array
                } catch (e) { }
                return function (n, i) {
                  return o(n, i),
                    t ? e.call(n, i) : n.__proto__ = i,
                    n
                }
              }() : void 0)
            },
          "./node_modules/core-js/internals/own-keys.js": /*!****************************************************!*\
!*** ./node_modules/core-js/internals/own-keys.js ***!
\****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/object-get-own-property-names */
                  "./node_modules/core-js/internals/object-get-own-property-names.js")
                , r = n(/*! ../internals/object-get-own-property-symbols */
                  "./node_modules/core-js/internals/object-get-own-property-symbols.js")
                , a = n(/*! ../internals/an-object */
                  "./node_modules/core-js/internals/an-object.js")
                , s = o.Reflect;
              e.exports = s && s.ownKeys || function (e) {
                var t = i.f(a(e))
                  , n = r.f;
                return n ? t.concat(n(e)) : t
              }
            },
          "./node_modules/core-js/internals/path.js": /*!************************************************!*\
!*** ./node_modules/core-js/internals/path.js ***!
\************************************************/
            /*! no static exports found */
            function (e, t, n) {
              e.exports = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
            },
          "./node_modules/core-js/internals/redefine.js": /*!****************************************************!*\
!*** ./node_modules/core-js/internals/redefine.js ***!
\****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/shared */
                  "./node_modules/core-js/internals/shared.js")
                , r = n(/*! ../internals/hide */
                  "./node_modules/core-js/internals/hide.js")
                , a = n(/*! ../internals/has */
                  "./node_modules/core-js/internals/has.js")
                , s = n(/*! ../internals/set-global */
                  "./node_modules/core-js/internals/set-global.js")
                , l = n(/*! ../internals/function-to-string */
                  "./node_modules/core-js/internals/function-to-string.js")
                , c = n(/*! ../internals/internal-state */
                  "./node_modules/core-js/internals/internal-state.js")
                , u = c.get
                , p = c.enforce
                , d = String(l).split("toString");
              i("inspectSource", (function (e) {
                return l.call(e)
              }
              )),
                (e.exports = function (e, t, n, i) {
                  var l = !!i && !!i.unsafe
                    , c = !!i && !!i.enumerable
                    , u = !!i && !!i.noTargetGet;
                  "function" == typeof n && ("string" != typeof t || a(n, "name") || r(n, "name", t),
                    p(n).source = d.join("string" == typeof t ? t : "")),
                    e !== o ? (l ? !u && e[t] && (c = !0) : delete e[t],
                      c ? e[t] = n : r(e, t, n)) : c ? e[t] = n : s(t, n)
                }
                )(Function.prototype, "toString", (function () {
                  return "function" == typeof this && u(this).source || l.call(this)
                }
                ))
            },
          "./node_modules/core-js/internals/require-object-coercible.js": /*!********************************************************************!*\
!*** ./node_modules/core-js/internals/require-object-coercible.js ***!
\********************************************************************/
            /*! no static exports found */
            function (e, t) {
              e.exports = function (e) {
                if (null == e)
                  throw TypeError("Can't call method on " + e);
                return e
              }
            },
          "./node_modules/core-js/internals/set-global.js": /*!******************************************************!*\
!*** ./node_modules/core-js/internals/set-global.js ***!
\******************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/hide */
                  "./node_modules/core-js/internals/hide.js");
              e.exports = function (e, t) {
                try {
                  i(o, e, t)
                } catch (n) {
                  o[e] = t
                }
                return t
              }
            },
          "./node_modules/core-js/internals/set-to-string-tag.js": /*!*************************************************************!*\
!*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
\*************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js").f
                , i = n(/*! ../internals/has */
                  "./node_modules/core-js/internals/has.js")
                , r = n(/*! ../internals/well-known-symbol */
                  "./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");
              e.exports = function (e, t, n) {
                e && !i(e = n ? e : e.prototype, r) && o(e, r, {
                  configurable: !0,
                  value: t
                })
              }
            },
          "./node_modules/core-js/internals/shared-key.js": /*!******************************************************!*\
!*** ./node_modules/core-js/internals/shared-key.js ***!
\******************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js")
                , i = n(/*! ../internals/uid */
                  "./node_modules/core-js/internals/uid.js")
                , r = o("keys");
              e.exports = function (e) {
                return r[e] || (r[e] = i(e))
              }
            },
          "./node_modules/core-js/internals/shared.js": /*!**************************************************!*\
!*** ./node_modules/core-js/internals/shared.js ***!
\**************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/set-global */
                  "./node_modules/core-js/internals/set-global.js")
                , r = n(/*! ../internals/is-pure */
                  "./node_modules/core-js/internals/is-pure.js")
                , a = o["__core-js_shared__"] || i("__core-js_shared__", {});
              (e.exports = function (e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {})
              }
              )("versions", []).push({
                version: "3.1.3",
                mode: r ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
              })
            },
          "./node_modules/core-js/internals/string-at.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/string-at.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js")
                , i = n(/*! ../internals/require-object-coercible */
                  "./node_modules/core-js/internals/require-object-coercible.js");
              e.exports = function (e, t, n) {
                var r, a, s = String(i(e)), l = o(t), c = s.length;
                return l < 0 || l >= c ? n ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? n ? s.charAt(l) : r : n ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
              }
            },
          "./node_modules/core-js/internals/to-absolute-index.js": /*!*************************************************************!*\
!*** ./node_modules/core-js/internals/to-absolute-index.js ***!
\*************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js")
                , i = Math.max
                , r = Math.min;
              e.exports = function (e, t) {
                var n = o(e);
                return n < 0 ? i(n + t, 0) : r(n, t)
              }
            },
          "./node_modules/core-js/internals/to-indexed-object.js": /*!*************************************************************!*\
!*** ./node_modules/core-js/internals/to-indexed-object.js ***!
\*************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js")
                , i = n(/*! ../internals/require-object-coercible */
                  "./node_modules/core-js/internals/require-object-coercible.js");
              e.exports = function (e) {
                return o(i(e))
              }
            },
          "./node_modules/core-js/internals/to-integer.js": /*!******************************************************!*\
!*** ./node_modules/core-js/internals/to-integer.js ***!
\******************************************************/
            /*! no static exports found */
            function (e, t) {
              var n = Math.ceil
                , o = Math.floor;
              e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
              }
            },
          "./node_modules/core-js/internals/to-length.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/to-length.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js")
                , i = Math.min;
              e.exports = function (e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0
              }
            },
          "./node_modules/core-js/internals/to-object.js": /*!*****************************************************!*\
!*** ./node_modules/core-js/internals/to-object.js ***!
\*****************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js");
              e.exports = function (e) {
                return Object(o(e))
              }
            },
          "./node_modules/core-js/internals/to-primitive.js": /*!********************************************************!*\
!*** ./node_modules/core-js/internals/to-primitive.js ***!
\********************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js");
              e.exports = function (e, t) {
                if (!o(e))
                  return e;
                var n, i;
                if (t && "function" == typeof (n = e.toString) && !o(i = n.call(e)))
                  return i;
                if ("function" == typeof (n = e.valueOf) && !o(i = n.call(e)))
                  return i;
                if (!t && "function" == typeof (n = e.toString) && !o(i = n.call(e)))
                  return i;
                throw TypeError("Can't convert object to primitive value")
              }
            },
          "./node_modules/core-js/internals/uid.js": /*!***********************************************!*\
!*** ./node_modules/core-js/internals/uid.js ***!
\***********************************************/
            /*! no static exports found */
            function (e, t) {
              var n = 0
                , o = Math.random();
              e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
              }
            },
          "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": /*!*******************************************************************************!*\
!*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
\*******************************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js")
                , i = n(/*! ../internals/an-object */
                  "./node_modules/core-js/internals/an-object.js");
              e.exports = function (e, t) {
                if (i(e),
                  !o(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype")
              }
            },
          "./node_modules/core-js/internals/well-known-symbol.js": /*!*************************************************************!*\
!*** ./node_modules/core-js/internals/well-known-symbol.js ***!
\*************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/global */
                "./node_modules/core-js/internals/global.js")
                , i = n(/*! ../internals/shared */
                  "./node_modules/core-js/internals/shared.js")
                , r = n(/*! ../internals/uid */
                  "./node_modules/core-js/internals/uid.js")
                , a = n(/*! ../internals/native-symbol */
                  "./node_modules/core-js/internals/native-symbol.js")
                , s = o.Symbol
                , l = i("wks");
              e.exports = function (e) {
                return l[e] || (l[e] = a && s[e] || (a ? s : r)("Symbol." + e))
              }
            },
          "./node_modules/core-js/modules/es.array.from.js": /*!*******************************************************!*\
!*** ./node_modules/core-js/modules/es.array.from.js ***!
\*******************************************************/
            /*! no static exports found */
            function (e, t, n) {
              var o = n(/*! ../internals/export */
                "./node_modules/core-js/internals/export.js")
                , i = n(/*! ../internals/array-from */
                  "./node_modules/core-js/internals/array-from.js");
              o({
                target: "Array",
                stat: !0,
                forced: !n(/*! ../internals/check-correctness-of-iteration */
                  "./node_modules/core-js/internals/check-correctness-of-iteration.js")((function (e) {
                    Array.from(e)
                  }
                  ))
              }, {
                from: i
              })
            },
          "./node_modules/core-js/modules/es.string.iterator.js": /*!************************************************************!*\
!*** ./node_modules/core-js/modules/es.string.iterator.js ***!
\************************************************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = n(/*! ../internals/string-at */
                "./node_modules/core-js/internals/string-at.js")
                , i = n(/*! ../internals/internal-state */
                  "./node_modules/core-js/internals/internal-state.js")
                , r = n(/*! ../internals/define-iterator */
                  "./node_modules/core-js/internals/define-iterator.js")
                , a = i.set
                , s = i.getterFor("String Iterator");
              r(String, "String", (function (e) {
                a(this, {
                  type: "String Iterator",
                  string: String(e),
                  index: 0
                })
              }
              ), (function () {
                var e, t = s(this), n = t.string, i = t.index;
                return i >= n.length ? {
                  value: void 0,
                  done: !0
                } : (e = o(n, i, !0),
                  t.index += e.length,
                {
                  value: e,
                  done: !1
                })
              }
              ))
            },
          "./node_modules/webpack/buildin/global.js": /*!***********************************!*\
!*** (webpack)/buildin/global.js ***!
\***********************************/
            /*! no static exports found */
            function (e, t) {
              var n;
              n = function () {
                return this
              }();
              try {
                n = n || Function("return this")() || (0,
                  eval)("this")
              } catch (e) {
                "object" == typeof window && (n = window)
              }
              e.exports = n
            },
          "./src/default-attrs.json": /*!********************************!*\
!*** ./src/default-attrs.json ***!
\********************************/
            /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
            function (e) {
              e.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }
            },
          "./src/icon.js": /*!*********************!*\
!*** ./src/icon.js ***!
\*********************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
              }
                , i = function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n),
                      o && e(t, o),
                      t
                  }
                }()
                , r = s(n(/*! classnames/dedupe */
                  "./node_modules/classnames/dedupe.js"))
                , a = s(n(/*! ./default-attrs.json */
                  "./src/default-attrs.json"));
              function s(e) {
                return e && e.__esModule ? e : {
                  default: e
                }
              }
              function l(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }
              var c = function () {
                function e(t, n) {
                  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                  l(this, e),
                    this.name = t,
                    this.contents = n,
                    this.tags = i,
                    this.attrs = o({}, a.default, {
                      class: "feather feather-" + t
                    })
                }
                return i(e, [{
                  key: "toSvg",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = o({}, this.attrs, e, {
                        class: (0,
                          r.default)(this.attrs.class, e.class)
                      });
                    return "<svg " + u(t) + ">" + this.contents + "</svg>"
                  }
                }, {
                  key: "toString",
                  value: function () {
                    return this.contents
                  }
                }]),
                  e
              }();
              function u(e) {
                return Object.keys(e).map((function (t) {
                  return t + '="' + e[t] + '"'
                }
                )).join(" ")
              }
              t.default = c
            },
          "./src/icons.js": /*!**********************!*\
!*** ./src/icons.js ***!
\**********************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var o = a(n(/*! ./icon */
                "./src/icon.js"))
                , i = a(n(/*! ../dist/icons.json */
                  "./dist/icons.json"))
                , r = a(n(/*! ./tags.json */
                  "./src/tags.json"));
              function a(e) {
                return e && e.__esModule ? e : {
                  default: e
                }
              }
              t.default = Object.keys(i.default).map((function (e) {
                return new o.default(e, i.default[e], r.default[e])
              }
              )).reduce((function (e, t) {
                return e[t.name] = t,
                  e
              }
              ), {})
            },
          "./src/index.js": /*!**********************!*\
!*** ./src/index.js ***!
\**********************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              var o = a(n(/*! ./icons */
                "./src/icons.js"))
                , i = a(n(/*! ./to-svg */
                  "./src/to-svg.js"))
                , r = a(n(/*! ./replace */
                  "./src/replace.js"));
              function a(e) {
                return e && e.__esModule ? e : {
                  default: e
                }
              }
              e.exports = {
                icons: o.default,
                toSvg: i.default,
                replace: r.default
              }
            },
          "./src/replace.js": /*!************************!*\
!*** ./src/replace.js ***!
\************************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
              }
                , i = a(n(/*! classnames/dedupe */
                  "./node_modules/classnames/dedupe.js"))
                , r = a(n(/*! ./icons */
                  "./src/icons.js"));
              function a(e) {
                return e && e.__esModule ? e : {
                  default: e
                }
              }
              function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = l(e)
                  , a = n["data-feather"];
                delete n["data-feather"];
                var s = r.default[a].toSvg(o({}, t, n, {
                  class: (0,
                    i.default)(t.class, n.class)
                }))
                  , c = (new DOMParser).parseFromString(s, "image/svg+xml")
                  , u = c.querySelector("svg");
                e.parentNode.replaceChild(u, e)
              }
              function l(e) {
                return Array.from(e.attributes).reduce((function (e, t) {
                  return e[t.name] = t.value,
                    e
                }
                ), {})
              }
              t.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("undefined" == typeof document)
                  throw new Error("`feather.replace()` only works in a browser environment.");
                var t = document.querySelectorAll("[data-feather]");
                Array.from(t).forEach((function (t) {
                  return s(t, e)
                }
                ))
              }
            },
          "./src/tags.json": /*!***********************!*\
!*** ./src/tags.json ***!
\***********************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            function (e) {
              e.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning", "alert", "danger"],
                "alert-octagon": ["warning", "alert", "danger"],
                "alert-triangle": ["warning", "alert", "danger"],
                "align-center": ["text alignment", "center"],
                "align-justify": ["text alignment", "justified"],
                "align-left": ["text alignment", "left"],
                "align-right": ["text alignment", "right"],
                anchor: [],
                archive: ["index", "box"],
                "at-sign": ["mention", "at", "email", "message"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                "bar-chart": ["statistics", "diagram", "graph"],
                "bar-chart-2": ["statistics", "diagram", "graph"],
                battery: ["power", "electricity"],
                "battery-charging": ["power", "electricity"],
                bell: ["alarm", "notification", "sound"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read", "library"],
                book: ["read", "dictionary", "booklet", "magazine", "library"],
                bookmark: ["read", "clip", "marker", "tag"],
                box: ["cube"],
                briefcase: ["work", "bag", "baggage", "folder"],
                calendar: ["date"],
                camera: ["photo"],
                cast: ["chromecast", "airplay"],
                circle: ["off", "zero", "record"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                codesandbox: ["logo"],
                code: ["source", "programming"],
                coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
                columns: ["layout"],
                command: ["keyboard", "cmd", "terminal", "prompt"],
                compass: ["navigation", "safari", "travel", "direction"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow", "return"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                cpu: ["processor", "technology"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage", "memory"],
                delete: ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch", "hide", "hidden"],
                "external-link": ["outbound"],
                facebook: ["logo", "social"],
                "fast-forward": ["music"],
                figma: ["logo", "design", "tool"],
                "file-minus": ["delete", "remove", "erase"],
                "file-plus": ["add", "create", "new"],
                "file-text": ["data", "txt", "pdf"],
                film: ["movie", "video"],
                filter: ["funnel", "hopper"],
                flag: ["report"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                framer: ["logo", "design", "tool"],
                frown: ["emoji", "face", "bad", "sad", "emotion"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                globe: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server", "memory", "data"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio", "sound"],
                heart: ["like", "love", "emotion"],
                "help-circle": ["question mark"],
                hexagon: ["shape", "node.js", "logo"],
                home: ["house", "living"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                key: ["password", "login", "authentication", "secure"],
                layers: ["stack"],
                layout: ["window", "webpage"],
                "life-bouy": ["help", "life ring", "support"],
                link: ["chain", "url"],
                "link-2": ["chain", "url"],
                linkedin: ["logo", "social media"],
                list: ["options"],
                lock: ["security", "password", "secure"],
                "log-in": ["sign in", "arrow", "enter"],
                "log-out": ["sign out", "arrow", "exit"],
                mail: ["email", "message"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows", "expand"],
                meh: ["emoji", "face", "neutral", "emotion"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record", "sound", "mute"],
                mic: ["record", "sound", "listen"],
                minimize: ["exit fullscreen", "close"],
                "minimize-2": ["exit fullscreen", "arrows", "close"],
                minus: ["subtract"],
                monitor: ["tv", "screen", "display"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                "mouse-pointer": ["arrow", "cursor"],
                move: ["arrows"],
                music: ["note"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                package: ["box", "container"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "audio", "stop"],
                "pen-tool": ["vector", "drawing"],
                percent: ["discount"],
                "phone-call": ["ring"],
                "phone-forwarded": ["call"],
                "phone-incoming": ["call"],
                "phone-missed": ["call"],
                "phone-off": ["call", "mute"],
                "phone-outgoing": ["call"],
                phone: ["call"],
                play: ["music", "start"],
                "pie-chart": ["statistics", "diagram"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                printer: ["fax", "office", "device"],
                radio: ["signal"],
                "refresh-cw": ["synchronise", "arrows"],
                "refresh-ccw": ["arrows"],
                repeat: ["loop", "arrows"],
                rewind: ["music"],
                "rotate-ccw": ["arrow"],
                "rotate-cw": ["arrow"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                scissors: ["cut"],
                search: ["find", "magnifier", "magnifying glass"],
                send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
                settings: ["cog", "edit", "gear", "preferences"],
                "share-2": ["network", "connections"],
                shield: ["security", "secure"],
                "shield-off": ["security", "insecure"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slack: ["logo"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                smartphone: ["cellphone", "device"],
                smile: ["emoji", "face", "happy", "good", "emotion"],
                speaker: ["audio", "music"],
                star: ["bookmark", "favorite", "like"],
                "stop-circle": ["media", "music"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather", "time", "morning", "day"],
                sunset: ["weather", "time", "evening", "night"],
                tablet: ["device"],
                tag: ["label"],
                target: ["logo", "bullseye"],
                terminal: ["code", "command line", "prompt"],
                thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                "thumbs-down": ["dislike", "bad", "emotion"],
                "thumbs-up": ["like", "good", "emotion"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                tool: ["settings", "spanner"],
                trash: ["garbage", "delete", "remove", "bin"],
                "trash-2": ["garbage", "delete", "remove", "bin"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping", "transport", "lorry"],
                tv: ["television", "stream"],
                twitch: ["logo"],
                twitter: ["logo", "social"],
                type: ["text"],
                umbrella: ["rain", "weather"],
                unlock: ["security"],
                "user-check": ["followed", "subscribed"],
                "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                "user-plus": ["new", "add", "create", "follow", "subscribe"],
                "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
                user: ["person", "account"],
                users: ["group"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                "wifi-off": ["disabled"],
                wifi: ["connection", "signal", "wireless"],
                wind: ["weather", "air"],
                "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
                "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
                "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
                x: ["cancel", "close", "delete", "remove", "times", "clear"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"],
                "zoom-in": ["magnifying glass"],
                "zoom-out": ["magnifying glass"]
              }
            },
          "./src/to-svg.js": /*!***********************!*\
!*** ./src/to-svg.js ***!
\***********************/
            /*! no static exports found */
            function (e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var o, i = n(/*! ./icons */
                "./src/icons.js"), r = (o = i) && o.__esModule ? o : {
                  default: o
                };
              t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),
                  !e)
                  throw new Error("The required `key` (icon name) parameter is missing.");
                if (!r.default[e])
                  throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
                return r.default[e].toSvg(t)
              }
            },
          0: /*!**************************************************!*\
!*** multi core-js/es/array/from ./src/index.js ***!
\**************************************************/
            /*! no static exports found */
            function (e, t, n) {
              n(/*! core-js/es/array/from */
                "./node_modules/core-js/es/array/from.js"),
                e.exports = n(/*! /home/travis/build/feathericons/feather/src/index.js */
                  "./src/index.js")
            }
        })
      }
      ,
      e.exports = o()
  }
  , function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0);
    document.addEventListener("DOMContentLoaded", (function () {
      let e = 0;
      $("#previous-btn").click(s),
        $("#next-btn").click(a),
        $("#zoom-in-btn").mousedown(() => e = setInterval(() => r("in"), 5)),
        $("#zoom-out-btn").mousedown(() => e = setInterval(() => r("out"), 5)),
        $("#zoom-in-btn, #zoom-out-btn").on("mouseleave mouseup", (function () {
          setTimeout(() => clearTimeout(e), 500)
        }
        )),
        $(".nav-link").on("click", e => {
          0 != $("iframe#yt-player").length && $(".skip-video-button").click();
          $(e.currentTarget).data("enable-video");
          l($(e.currentTarget).data("view-id"))
        }
        ),
        $(".nav-item-group").on("mouseleave", e => {
          window.sr.clean($(".view-selector, .view-selector span")),
            $(".view-selector, .view-selector span").css("visibility", "hidden")
        }
        ),
        $(".nav-item-group").on("click mouseenter", e => {
          let t = $(e.currentTarget).children(".view-selector");
          "hidden" === t.css("visibility") ? (window.sr.clean($(".view-selector, .view-selector span")),
            $(".view-selector, .view-selector span").css("visibility", "hidden"),
            window.sr.reveal(t, {
              origin: "right",
              distance: "50px"
            }),
            window.sr.reveal(t.children("span"), {
              delay: 100,
              interval: 50,
              origin: "right",
              distance: "50px"
            })) : (window.sr.clean(t),
              window.sr.clean(t.children("span")),
              $(".view-selector, .view-selector span").css("visibility", "hidden"))
        }
        ),
        $(".skip-video-button").click((function () {
          $("#yt-video").fadeOut(),
            $("#yt-player").remove(),
            $("#yt-video").append('<div id="yt-player"></div>'),
            $(this).css("visibility", "hidden"),
            $(".controls").fadeIn(),
            $(".logo").fadeIn(),
            window.changeViewName(document.querySelector("a-tour").components.tour.data.current_pano_id)
        }
        )),
        $("#view-name>#title").on("click", () => {
          let e = document.querySelector("a-tour").components.tour
            , t = e.data.current_pano_id
            , n = e.getInitialViewId();
          t && t != n && (0 != $("iframe#yt-player").length && $(".skip-video-button").click(),
            l(n))
        }
        ),
        $("#description-text").on("click", () => {
          if (0 == $("iframe#yt-player").length) {
            let e = document.querySelector("a-tour").components.tour.data.current_pano_id.split("_");
            if ("TER" == e[1] || "SEMI" == e[1] || "DET" == e[1]) {
              if ("CENTER" == e[2])
                return;
              e[2] = "CENTER",
                l(e.join("_"))
            }
          }
        }
        ),
        $(window).on("wheel touchmove", (function () {
          const e = Math.sign(event.deltaY);
          console.log(e),
            1 == e && ($(window).off("wheel touchmove"),
              i())
        }
        )),
        $(".amenities, .intro").one("click", i)
    }
    ), !1);
    let i = () => {
      $(".intro").fadeOut();
      let e = document.querySelector("a-tour").components.tour;
      setTimeout((function () {
        e.setHotspotsVisible()
      }
      ), 100),
        window.sr.reveal(".amenity", {
          delay: 200,
          interval: 100,
          origin: "left",
          distance: "50px"
        }),
        window.sr.reveal(".control", {
          delay: 200,
          interval: 100,
          scale: .85
        }),
        $("#view-name").delay(200).fadeIn(),
        $("html, body").css({
          overflow: "hidden",
          height: "100%"
        }),
        setTimeout(() => {
          $(window).on("wheel", (function () {
            if (0 == $("iframe#yt-player").length) {
              const e = Math.sign(event.deltaY);
              1 == e ? r("in") : -1 == e && r("out")
            }
          }
          ))
        }
          , 1500)
    }
      , r = e => {
        let t = document.querySelector("a-camera")
          , n = t.getAttribute("zoom");
        n = "in" == e ? n < 3 ? parseFloat(n) + .02 : 3 : n > .8 ? parseFloat(n) - .02 : .8,
          t.setAttribute("zoom", n)
      }
      , a = () => {
        let e = document.querySelector("a-panorama#main").components.panorama.data.next;
        e && l(e)
      }
      , s = () => {
        let e = document.querySelector("a-tour").components.tour
          , t = [...e.data.previous_pano_ids]
          , n = t.pop();
        n && (e.el.setAttribute("tour", "previous_pano_ids", t),
          e.loadSceneId(n))
      }
      , l = e => {
        if (e) {
          var t = document.querySelector("a-tour").components.tour;
          t.pushPreviousPanoIds(),
            t.loadSceneId(e, !1)
        }
      }
      ;
    window.displayDimention = e => {
      $("#dimention-info").empty();
      let t = e.split("_")
        , n = e.slice(-2);
      if ("ER" == n || "C1" == n || "C2" == n || "C3" == n) {
        let t = `assets/info/${e.split("_").slice(0, 2).join("_")}.png`;
        $("#dimention-info").append(`<img src="${t}" alt="Dimention" />`)
      }
      let i = $("#video-play-link");
      if ("TER" == t[1] || "SEMI" == t[1] || "DET" == t[1]) {
        let e = document.querySelector("a-tour").components.tour.data.current_pano_id
          , t = `https://www.youtube.com/embed/${o.a[e].videoId}?fs=1&autoplay=1`;
        i.fadeIn(),
          i.parent().attr("href", t)
      } else
        i.fadeOut()
    }
      ,
      window.changeViewName = e => {
        var t = o.a[e].viewDisplayText;
        t && 0 == $("iframe#yt-player").length && $("#description-text").text(t),
          "MP3_OVERVIEW" == e || "BB_OVERVIEW" == e ? ($("#view-name").children().removeClass("effect-underline"),
            $("#view-name h3").removeAttr("data-balloon-pos"),
            $("#view-name p").removeAttr("data-balloon-pos")) : ($("#view-name").children().addClass("effect-underline"),
              $("#view-name h3").attr("data-balloon-pos", "right"),
              $("#view-name p").attr("data-balloon-pos", "right"))
      }
      ,
      window.addEventListener("keypress", (function (e) {
        32 == e.keyCode && 0 != $("iframe#yt-player").length && (1 == window.ytPlayer.getPlayerState() ? window.ytPlayer.pauseVideo() : window.ytPlayer.playVideo())
      }
      ))
  }
  , function (e, t) {
    !function (e) {
      function t(o) {
        if (n[o])
          return n[o].exports;
        var i = n[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t),
          i.l = !0,
          i.exports
      }
      var n = {};
      t.m = e,
        t.c = n,
        t.i = function (e) {
          return e
        }
        ,
        t.d = function (e, n, o) {
          t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
          })
        }
        ,
        t.n = function (e) {
          var n = e && e.__esModule ? function () {
            return e.default
          }
            : function () {
              return e
            }
            ;
          return t.d(n, "a", n),
            n
        }
        ,
        t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 46)
    }([function (e, t) {
      var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n)
    }
      , function (e, t, n) {
        var o = n(37)("wks")
          , i = n(40)
          , r = n(0).Symbol
          , a = "function" == typeof r;
        (e.exports = function (e) {
          return o[e] || (o[e] = a && r[e] || (a ? r : i)("Symbol." + e))
        }
        ).store = o
      }
      , function (e, t) {
        var n = e.exports = {
          version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
      }
      , function (e, t, n) {
        var o = n(8);
        e.exports = function (e) {
          if (!o(e))
            throw TypeError(e + " is not an object!");
          return e
        }
      }
      , function (e, t, n) {
        e.exports = !n(16)((function () {
          return 7 != Object.defineProperty({}, "a", {
            get: function () {
              return 7
            }
          }).a
        }
        ))
      }
      , function (e, t, n) {
        var o = n(0)
          , i = n(2)
          , r = n(7)
          , a = n(6)
          , s = n(13)
          , l = function (e, t, n) {
            var c, u, p, d = e & l.F, h = e & l.G, f = e & l.S, y = e & l.P, m = e & l.B, g = e & l.W, v = h ? i : i[t] || (i[t] = {}), x = v.prototype, _ = h ? o : f ? o[t] : (o[t] || {}).prototype;
            for (c in h && (n = t),
              n)
              (u = !d && _ && void 0 !== _[c]) && s(v, c) || (p = u ? _[c] : n[c],
                v[c] = h && "function" != typeof _[c] ? n[c] : m && u ? r(p, o) : g && _[c] == p ? function (e) {
                  var t = function (t, n, o) {
                    if (this instanceof e) {
                      switch (arguments.length) {
                        case 0:
                          return new e;
                        case 1:
                          return new e(t);
                        case 2:
                          return new e(t, n)
                      }
                      return new e(t, n, o)
                    }
                    return e.apply(this, arguments)
                  };
                  return t.prototype = e.prototype,
                    t
                }(p) : y && "function" == typeof p ? r(Function.call, p) : p,
                y && ((v.virtual || (v.virtual = {}))[c] = p,
                  e & l.R && x && !x[c] && a(x, c, p)))
          };
        l.F = 1,
          l.G = 2,
          l.S = 4,
          l.P = 8,
          l.B = 16,
          l.W = 32,
          l.U = 64,
          l.R = 128,
          e.exports = l
      }
      , function (e, t, n) {
        var o = n(10)
          , i = n(19);
        e.exports = n(4) ? function (e, t, n) {
          return o.f(e, t, i(1, n))
        }
          : function (e, t, n) {
            return e[t] = n,
              e
          }
      }
      , function (e, t, n) {
        var o = n(11);
        e.exports = function (e, t, n) {
          if (o(e),
            void 0 === t)
            return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n)
              }
                ;
            case 2:
              return function (n, o) {
                return e.call(t, n, o)
              }
                ;
            case 3:
              return function (n, o, i) {
                return e.call(t, n, o, i)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        }
      }
      , function (e, t) {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
        }
      }
      , function (e, t) {
        e.exports = {}
      }
      , function (e, t, n) {
        var o = n(3)
          , i = n(60)
          , r = n(77)
          , a = Object.defineProperty;
        t.f = n(4) ? Object.defineProperty : function (e, t, n) {
          if (o(e),
            t = r(t, !0),
            o(n),
            i)
            try {
              return a(e, t, n)
            } catch (e) { }
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value),
            e
        }
      }
      , function (e, t) {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
          return e
        }
      }
      , function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
          return n.call(e).slice(8, -1)
        }
      }
      , function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
          return n.call(e, t)
        }
      }
      , function (e, t) {
        e.exports = function (e) {
          if (null == e)
            throw TypeError("Can't call method on  " + e);
          return e
        }
      }
      , function (e, t, n) {
        var o = n(8)
          , i = n(0).document
          , r = o(i) && o(i.createElement);
        e.exports = function (e) {
          return r ? i.createElement(e) : {}
        }
      }
      , function (e, t) {
        e.exports = function (e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        }
      }
      , function (e, t) {
        e.exports = !0
      }
      , function (e, t, n) {
        "use strict";
        function o(e) {
          var t, n;
          this.promise = new e((function (e, o) {
            if (void 0 !== t || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            t = e,
              n = o
          }
          )),
            this.resolve = i(t),
            this.reject = i(n)
        }
        var i = n(11);
        e.exports.f = function (e) {
          return new o(e)
        }
      }
      , function (e, t) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          }
        }
      }
      , function (e, t, n) {
        var o = n(10).f
          , i = n(13)
          , r = n(1)("toStringTag");
        e.exports = function (e, t, n) {
          e && !i(e = n ? e : e.prototype, r) && o(e, r, {
            configurable: !0,
            value: t
          })
        }
      }
      , function (e, t, n) {
        var o = n(37)("keys")
          , i = n(40);
        e.exports = function (e) {
          return o[e] || (o[e] = i(e))
        }
      }
      , function (e, t) {
        var n = Math.ceil
          , o = Math.floor;
        e.exports = function (e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
        }
      }
      , function (e, t, n) {
        var o = n(29)
          , i = n(14);
        e.exports = function (e) {
          return o(i(e))
        }
      }
      , function (e, t, n) {
        var o = n(22)
          , i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(o(e), 9007199254740991) : 0
        }
      }
      , function (e, t, n) {
        var o = n(14);
        e.exports = function (e) {
          return Object(o(e))
        }
      }
      , function (e, t, n) {
        var o = n(12)
          , i = n(1)("toStringTag")
          , r = "Arguments" == o(function () {
            return arguments
          }());
        e.exports = function (e) {
          var t, n, a;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
              return e[t]
            } catch (e) { }
          }(t = Object(e), i)) ? n : r ? o(t) : "Object" == (a = o(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
      }
      , function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
      }
      , function (e, t, n) {
        var o = n(0).document;
        e.exports = o && o.documentElement
      }
      , function (e, t, n) {
        var o = n(12);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
          return "String" == o(e) ? e.split("") : Object(e)
        }
      }
      , function (e, t, n) {
        var o = n(9)
          , i = n(1)("iterator")
          , r = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (o.Array === e || r[i] === e)
        }
      }
      , function (e, t, n) {
        var o = n(3);
        e.exports = function (e, t, n, i) {
          try {
            return i ? t(o(n)[0], n[1]) : t(n)
          } catch (t) {
            var r = e.return;
            throw void 0 !== r && o(r.call(e)),
            t
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var o = n(17)
          , i = n(5)
          , r = n(73)
          , a = n(6)
          , s = n(9)
          , l = n(62)
          , c = n(20)
          , u = n(69)
          , p = n(1)("iterator")
          , d = !([].keys && "next" in [].keys())
          , h = function () {
            return this
          };
        e.exports = function (e, t, n, f, y, m, g) {
          l(n, t, f);
          var v, x, _, E = function (e) {
            if (!d && e in O)
              return O[e];
            switch (e) {
              case "keys":
              case "values":
                return function () {
                  return new n(this, e)
                }
            }
            return function () {
              return new n(this, e)
            }
          }, b = t + " Iterator", T = "values" == y, w = !1, O = e.prototype, j = O[p] || O["@@iterator"] || y && O[y], M = j || E(y), C = y ? T ? E("entries") : M : void 0, R = "Array" == t && O.entries || j;
          if (R && (_ = u(R.call(new e))) !== Object.prototype && _.next && (c(_, b, !0),
            o || "function" == typeof _[p] || a(_, p, h)),
            T && j && "values" !== j.name && (w = !0,
              M = function () {
                return j.call(this)
              }
            ),
            o && !g || !d && !w && O[p] || a(O, p, M),
            s[t] = M,
            s[b] = h,
            y)
            if (v = {
              values: T ? M : E("values"),
              keys: m ? M : E("keys"),
              entries: C
            },
              g)
              for (x in v)
                x in O || r(O, x, v[x]);
            else
              i(i.P + i.F * (d || w), t, v);
          return v
        }
      }
      , function (e, t, n) {
        var o = n(1)("iterator")
          , i = !1;
        try {
          var r = [7][o]();
          r.return = function () {
            i = !0
          }
            ,
            Array.from(r, (function () {
              throw 2
            }
            ))
        } catch (e) { }
        e.exports = function (e, t) {
          if (!t && !i)
            return !1;
          var n = !1;
          try {
            var r = [7]
              , a = r[o]();
            a.next = function () {
              return {
                done: n = !0
              }
            }
              ,
              r[o] = function () {
                return a
              }
              ,
              e(r)
          } catch (e) { }
          return n
        }
      }
      , function (e, t, n) {
        var o = n(70)
          , i = n(27);
        e.exports = Object.keys || function (e) {
          return o(e, i)
        }
      }
      , function (e, t) {
        e.exports = function (e) {
          try {
            return {
              e: !1,
              v: e()
            }
          } catch (e) {
            return {
              e: !0,
              v: e
            }
          }
        }
      }
      , function (e, t, n) {
        var o = n(3)
          , i = n(8)
          , r = n(18);
        e.exports = function (e, t) {
          if (o(e),
            i(t) && t.constructor === e)
            return t;
          var n = r.f(e);
          return (0,
            n.resolve)(t),
            n.promise
        }
      }
      , function (e, t, n) {
        var o = n(2)
          , i = n(0)
          , r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
          return r[e] || (r[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
          version: o.version,
          mode: n(17) ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
      }
      , function (e, t, n) {
        var o = n(3)
          , i = n(11)
          , r = n(1)("species");
        e.exports = function (e, t) {
          var n, a = o(e).constructor;
          return void 0 === a || null == (n = o(a)[r]) ? t : i(n)
        }
      }
      , function (e, t, n) {
        var o, i, r, a = n(7), s = n(61), l = n(28), c = n(15), u = n(0), p = u.process, d = u.setImmediate, h = u.clearImmediate, f = u.MessageChannel, y = u.Dispatch, m = 0, g = {}, v = function () {
          var e = +this;
          if (g.hasOwnProperty(e)) {
            var t = g[e];
            delete g[e],
              t()
          }
        }, x = function (e) {
          v.call(e.data)
        };
        d && h || (d = function (e) {
          for (var t = [], n = 1; arguments.length > n;)
            t.push(arguments[n++]);
          return g[++m] = function () {
            s("function" == typeof e ? e : Function(e), t)
          }
            ,
            o(m),
            m
        }
          ,
          h = function (e) {
            delete g[e]
          }
          ,
          "process" == n(12)(p) ? o = function (e) {
            p.nextTick(a(v, e, 1))
          }
            : y && y.now ? o = function (e) {
              y.now(a(v, e, 1))
            }
              : f ? (r = (i = new f).port2,
                i.port1.onmessage = x,
                o = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function (e) {
                  u.postMessage(e + "", "*")
                }
                  ,
                  u.addEventListener("message", x, !1)) : o = "onreadystatechange" in c("script") ? function (e) {
                    l.appendChild(c("script")).onreadystatechange = function () {
                      l.removeChild(this),
                        v.call(e)
                    }
                  }
                    : function (e) {
                      setTimeout(a(v, e, 1), 0)
                    }
        ),
          e.exports = {
            set: d,
            clear: h
          }
      }
      , function (e, t) {
        var n = 0
          , o = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
        }
      }
      , function (e, t, n) {
        var o = n(26)
          , i = n(1)("iterator")
          , r = n(9);
        e.exports = n(2).getIteratorMethod = function (e) {
          if (null != e)
            return e[i] || e["@@iterator"] || r[o(e)]
        }
      }
      , function (e, t, n) {
        "use strict";
        var o = n(75)(!0);
        n(32)(String, "String", (function (e) {
          this._t = String(e),
            this._i = 0
        }
        ), (function () {
          var e, t = this._t, n = this._i;
          return n >= t.length ? {
            value: void 0,
            done: !0
          } : (e = o(t, n),
            this._i += e.length,
          {
            value: e,
            done: !1
          })
        }
        ))
      }
      , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }),
          t.default = function (e) {
            var t = Math.PI / 180;
            e.transformSVGPath = function (e) {
              function n() {
                for (var t, n = void 0, o = !1, a = void 0; i < r && (44 === (n = e.charCodeAt(i)) || 32 === n);)
                  i++;
                for (t = 45 === n ? i++ : i; i < r;)
                  if (48 <= (n = e.charCodeAt(i)) && n <= 57)
                    i++;
                  else {
                    if (46 !== n)
                      return a = e.substring(t, i),
                        o ? parseFloat(a) : parseInt(a);
                    i++,
                      o = !0
                  }
                return a = e.substring(t),
                  o ? parseFloat(a) : parseInt(a)
              }
              var o = new AFRAME.THREE.Shape
                , i = 1
                , r = e.length
                , a = void 0
                , s = 0
                , l = 0
                , c = 0
                , u = 0
                , p = null
                , d = null
                , h = 0
                , f = 0
                , y = 0
                , m = 0
                , g = 0
                , v = 0
                , x = 0
                , _ = 0
                , E = 0
                , b = void 0
                , T = void 0
                , w = void 0;
              for (a = e[0]; i <= r;) {
                switch (w = !0,
                a) {
                  case "M":
                    s = n(),
                      l = n(),
                      o.moveTo(s, l),
                      a = "L";
                    break;
                  case "m":
                    s += n(),
                      l += n(),
                      o.moveTo(s, l),
                      a = "l";
                    break;
                  case "Z":
                  case "z":
                    w = !1,
                      s === p && l === d || o.lineTo(p, d);
                    break;
                  case "L":
                  case "H":
                  case "V":
                    c = "V" === a ? s : n(),
                      u = "H" === a ? l : n(),
                      o.lineTo(c, u),
                      s = c,
                      l = u;
                    break;
                  case "l":
                  case "h":
                  case "v":
                    c = "v" === a ? s : s + n(),
                      u = "h" === a ? l : l + n(),
                      o.lineTo(c, u),
                      s = c,
                      l = u;
                    break;
                  case "C":
                    h = n(),
                      y = n();
                  case "S":
                    "S" === a && (h = 2 * s - f,
                      y = 2 * l - m),
                      f = n(),
                      m = n(),
                      c = n(),
                      u = n(),
                      o.bezierCurveTo(h, y, f, m, c, u),
                      s = c,
                      l = u;
                    break;
                  case "c":
                    h = s + n(),
                      y = l + n();
                  case "s":
                    "s" === a && (h = 2 * s - f,
                      y = 2 * l - m),
                      f = s + n(),
                      m = l + n(),
                      c = s + n(),
                      u = l + n(),
                      o.bezierCurveTo(h, y, f, m, c, u),
                      s = c,
                      l = u;
                    break;
                  case "Q":
                    h = n(),
                      y = n();
                  case "T":
                    "T" === a && (h = 2 * s - h,
                      y = 2 * l - y),
                      c = n(),
                      u = n(),
                      o.quadraticCurveTo(h, y, c, u),
                      s = c,
                      l = u;
                    break;
                  case "q":
                    h = s + n(),
                      y = l + n();
                  case "t":
                    "t" === a && (h = 2 * s - h,
                      y = 2 * l - y),
                      c = s + n(),
                      u = l + n(),
                      o.quadraticCurveTo(h, y, c, u),
                      s = c,
                      l = u;
                    break;
                  case "A":
                    g = n(),
                      v = n(),
                      x = n() * t,
                      _ = n(),
                      E = n(),
                      c = n(),
                      u = n(),
                      g !== v && console.warn("Forcing elliptical arc to be a circular one :(", g, v),
                      h = Math.cos(x) * (s - c) / 2 + Math.sin(x) * (l - u) / 2,
                      y = -Math.sin(x) * (s - c) / 2 + Math.cos(x) * (l - u) / 2;
                    var O = Math.sqrt((g * g * v * v - g * g * y * y - v * v * h * h) / (g * g * y * y + v * v * h * h));
                    _ === E && (O = -O),
                      f = O * g * y / v,
                      m = O * -v * h / g,
                      b = Math.cos(x) * f - Math.sin(x) * m + (s + c) / 2,
                      T = Math.sin(x) * f + Math.cos(x) * m + (l + u) / 2;
                    var j = new AFRAME.THREE.Vector2(1, 0)
                      , M = new AFRAME.THREE.Vector2((h - f) / g, (y - m) / v)
                      , C = Math.acos(j.dot(M) / j.length() / M.length());
                    j.x * M.y - j.y * M.x < 0 && (C = -C),
                      j.x = (-h - f) / g,
                      j.y = (-y - m) / v;
                    var R = Math.acos(M.dot(j) / M.length() / j.length());
                    M.x * j.y - M.y * j.x < 0 && (R = -R),
                      !E && R > 0 && (R -= 2 * Math.PI),
                      E && R < 0 && (R += 2 * Math.PI),
                      o.absarc(b, T, g, C, C + R, E),
                      s = c,
                      l = u
                }
                null === p && (p = s,
                  d = l),
                  w && function () {
                    for (var t = void 0; i < r && (44 === (t = e.charCodeAt(i)) || 32 === t);)
                      i++;
                    return 45 === (t = e.charCodeAt(i)) || 48 <= t && t <= 57
                  }() || (a = e[i++])
              }
              return o
            }
          }
      }
      , function (e, t, n) {
        "use strict";
        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = o(n(50))
          , r = o(n(88))
          , a = o(n(47));
        t.default = function (e) {
          return new i.default((function (t, n) {
            return (0,
              r.default)(e, (function (e, o) {
                if (e)
                  throw n(e);
                return t((0,
                  a.default)(o))
              }
              ))
          }
          ))
        }
      }
      , function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(n(49));
        t.default = o.default || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }
      }
      , function (e, t, n) {
        "use strict";
        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var i = o(n(45))
          , r = o(n(44))
          , a = o(n(43));
        if ("undefined" == typeof AFRAME)
          throw new Error("Component attempted to register before AFRAME was available.");
        AFRAME.registerPrimitive("a-svg", {
          defaultComponents: {
            svg: {}
          },
          mappings: {
            src: "svg.src",
            "proportional-scale": "svg.proportionalScale",
            "override-color": "svg.overrideColor",
            "z-factor": "svg.zFactor",
            extrude: "svg.extrude"
          }
        }),
          AFRAME.registerComponent("svg", {
            schema: {
              src: {
                type: "string"
              },
              proportionalScale: {
                type: "number",
                default: 1
              },
              extrude: {
                type: "number",
                default: .1
              },
              zFactor: {
                type: "number",
                default: .005
              },
              overrideColor: {
                type: "string"
              }
            },
            $d3g: {},
            init: function () {
              this.el.setObject3D("mesh", new AFRAME.THREE.Object3D),
                (0,
                  a.default)(this.$d3g)
            },
            update: function () {
              var e = this;
              if (this.data.src) {
                var t = document.querySelector(this.data.src).attributes.src.value
                  , n = new AFRAME.THREE.Group;
                return this.data.extrude = 0 === this.data.extrude ? .001 : this.data.extrude,
                  this.data.zFactor = 0 === this.data.zFactor ? .001 : this.data.zFactor,
                  (0,
                    r.default)(t).then((function (t) {
                      if (t.length > 0) {
                        t.map((function (t) {
                          return (0,
                            i.default)({}, t, {
                              material: new AFRAME.THREE.MeshBasicMaterial({
                                shader: "flat",
                                side: AFRAME.THREE.DoubleSide,
                                color: e.data.overrideColor ? e.data.overrideColor : t.fill
                              })
                            })
                        }
                        )).map((function (t) {
                          return (0,
                            i.default)({}, t, {
                              shape: e.$d3g.transformSVGPath(t.path)
                            })
                        }
                        )).map((function (t) {
                          return (0,
                            i.default)({}, t, {
                              shape: new AFRAME.THREE.ExtrudeBufferGeometry(t.shape, {
                                amount: e.data.extrude,
                                bevelEnabled: !1
                              })
                            })
                        }
                        )).map((function (e) {
                          return new AFRAME.THREE.Mesh(e.shape, e.material)
                        }
                        )).forEach((function (t, o, i) {
                          t.scale.x = .0095 * e.data.proportionalScale,
                            t.scale.y = .0095 * e.data.proportionalScale,
                            t.scale.z = e.data.overrideColor ? e.data.extrude : e.data.extrude + o * e.data.zFactor,
                            t.rotation.x = Math.PI,
                            n.add(t)
                        }
                        )),
                          e.el.setObject3D("mesh", n),
                          e.el.getObject3D("mesh").position.z = 0;
                        var o = {
                          min: new AFRAME.THREE.Vector3(Number.MAX_VALUE),
                          max: new AFRAME.THREE.Vector3(Number.MIN_VALUE)
                        }
                          , r = new AFRAME.THREE.Vector3;
                        n.children.forEach((function (t) {
                          var n = t.geometry;
                          n.computeBoundingBox();
                          var i = n.boundingBox.getCenter();
                          o.min.x = Math.min(i.x, o.min.x),
                            o.min.y = Math.min(i.y, o.min.y),
                            o.min.z = e.data.extrude,
                            o.max.x = Math.max(i.x, o.max.x),
                            o.max.y = Math.max(2 * i.y, o.max.y),
                            o.max.z = e.data.extrude
                        }
                        )),
                          r.addVectors(o.min, o.max),
                          r.multiplyScalar(-.5),
                          n.children.forEach((function (e) {
                            e.geometry.applyMatrix((new AFRAME.THREE.Matrix4).makeTranslation(r.x, r.y, r.z)),
                              e.geometry.computeBoundingBox()
                          }
                          ))
                      }
                    }
                    ))
              }
            }
          })
      }
      , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(n(51));
        t.default = function (e) {
          if ("string" == typeof e && (e = function (e) {
            if (void 0 !== self.DOMParser)
              return function (e) {
                return (new self.DOMParser).parseFromString(e, "application/xml")
              }
          }()),
            !e || "function" != typeof e.getElementsByTagName)
            throw new Error("could not get an XML document from the specified SVG contents");
          return [].slice.call(e.getElementsByTagName("path")).reduce((function (e, t) {
            var n = t.getAttribute("d") || ""
              , i = t.getAttribute("fill") || "";
            return [].concat((0,
              o.default)(e), [{
                path: n.replace(/\s+/g, " ").trim(),
                fill: i
              }])
          }
          ), [])
        }
      }
      , function (e, t, n) {
        e.exports = {
          default: n(52),
          __esModule: !0
        }
      }
      , function (e, t, n) {
        e.exports = {
          default: n(53),
          __esModule: !0
        }
      }
      , function (e, t, n) {
        e.exports = {
          default: n(54),
          __esModule: !0
        }
      }
      , function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(n(48));
        t.default = function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n
          }
          return (0,
            o.default)(e)
        }
      }
      , function (e, t, n) {
        n(42),
          n(79),
          e.exports = n(2).Array.from
      }
      , function (e, t, n) {
        n(81),
          e.exports = n(2).Object.assign
      }
      , function (e, t, n) {
        n(82),
          n(42),
          n(86),
          n(83),
          n(84),
          n(85),
          e.exports = n(2).Promise
      }
      , function (e, t) {
        e.exports = function () { }
      }
      , function (e, t) {
        e.exports = function (e, t, n, o) {
          if (!(e instanceof t) || void 0 !== o && o in e)
            throw TypeError(n + ": incorrect invocation!");
          return e
        }
      }
      , function (e, t, n) {
        var o = n(23)
          , i = n(24)
          , r = n(76);
        e.exports = function (e) {
          return function (t, n, a) {
            var s, l = o(t), c = i(l.length), u = r(a, c);
            if (e && n != n) {
              for (; c > u;)
                if ((s = l[u++]) != s)
                  return !0
            } else
              for (; c > u; u++)
                if ((e || u in l) && l[u] === n)
                  return e || u || 0;
            return !e && -1
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var o = n(10)
          , i = n(19);
        e.exports = function (e, t, n) {
          t in e ? o.f(e, t, i(0, n)) : e[t] = n
        }
      }
      , function (e, t, n) {
        var o = n(7)
          , i = n(31)
          , r = n(30)
          , a = n(3)
          , s = n(24)
          , l = n(41)
          , c = {}
          , u = {};
        (t = e.exports = function (e, t, n, p, d) {
          var h, f, y, m, g = d ? function () {
            return e
          }
            : l(e), v = o(n, p, t ? 2 : 1), x = 0;
          if ("function" != typeof g)
            throw TypeError(e + " is not iterable!");
          if (r(g)) {
            for (h = s(e.length); h > x; x++)
              if ((m = t ? v(a(f = e[x])[0], f[1]) : v(e[x])) === c || m === u)
                return m
          } else
            for (y = g.call(e); !(f = y.next()).done;)
              if ((m = i(y, v, f.value, t)) === c || m === u)
                return m
        }
        ).BREAK = c,
          t.RETURN = u
      }
      , function (e, t, n) {
        e.exports = !n(4) && !n(16)((function () {
          return 7 != Object.defineProperty(n(15)("div"), "a", {
            get: function () {
              return 7
            }
          }).a
        }
        ))
      }
      , function (e, t) {
        e.exports = function (e, t, n) {
          var o = void 0 === n;
          switch (t.length) {
            case 0:
              return o ? e() : e.call(n);
            case 1:
              return o ? e(t[0]) : e.call(n, t[0]);
            case 2:
              return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
              return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
              return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
          }
          return e.apply(n, t)
        }
      }
      , function (e, t, n) {
        "use strict";
        var o = n(66)
          , i = n(19)
          , r = n(20)
          , a = {};
        n(6)(a, n(1)("iterator"), (function () {
          return this
        }
        )),
          e.exports = function (e, t, n) {
            e.prototype = o(a, {
              next: i(1, n)
            }),
              r(e, t + " Iterator")
          }
      }
      , function (e, t) {
        e.exports = function (e, t) {
          return {
            value: t,
            done: !!e
          }
        }
      }
      , function (e, t, n) {
        var o = n(0)
          , i = n(39).set
          , r = o.MutationObserver || o.WebKitMutationObserver
          , a = o.process
          , s = o.Promise
          , l = "process" == n(12)(a);
        e.exports = function () {
          var e, t, n, c = function () {
            var o, i;
            for (l && (o = a.domain) && o.exit(); e;) {
              i = e.fn,
                e = e.next;
              try {
                i()
              } catch (o) {
                throw e ? n() : t = void 0,
                o
              }
            }
            t = void 0,
              o && o.enter()
          };
          if (l)
            n = function () {
              a.nextTick(c)
            }
              ;
          else if (!r || o.navigator && o.navigator.standalone)
            if (s && s.resolve) {
              var u = s.resolve(void 0);
              n = function () {
                u.then(c)
              }
            } else
              n = function () {
                i.call(o, c)
              }
                ;
          else {
            var p = !0
              , d = document.createTextNode("");
            new r(c).observe(d, {
              characterData: !0
            }),
              n = function () {
                d.data = p = !p
              }
          }
          return function (o) {
            var i = {
              fn: o,
              next: void 0
            };
            t && (t.next = i),
              e || (e = i,
                n()),
              t = i
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var o = n(4)
          , i = n(34)
          , r = n(68)
          , a = n(71)
          , s = n(25)
          , l = n(29)
          , c = Object.assign;
        e.exports = !c || n(16)((function () {
          var e = {}
            , t = {}
            , n = Symbol()
            , o = "abcdefghijklmnopqrst";
          return e[n] = 7,
            o.split("").forEach((function (e) {
              t[e] = e
            }
            )),
            7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != o
        }
        )) ? function (e, t) {
          for (var n = s(e), c = arguments.length, u = 1, p = r.f, d = a.f; c > u;)
            for (var h, f = l(arguments[u++]), y = p ? i(f).concat(p(f)) : i(f), m = y.length, g = 0; m > g;)
              h = y[g++],
                o && !d.call(f, h) || (n[h] = f[h]);
          return n
        }
          : c
      }
      , function (e, t, n) {
        var o = n(3)
          , i = n(67)
          , r = n(27)
          , a = n(21)("IE_PROTO")
          , s = function () { }
          , l = function () {
            var e, t = n(15)("iframe"), o = r.length;
            for (t.style.display = "none",
              n(28).appendChild(t),
              t.src = "javascript:",
              (e = t.contentWindow.document).open(),
              e.write("<script>document.F=Object<\/script>"),
              e.close(),
              l = e.F; o--;)
              delete l.prototype[r[o]];
            return l()
          };
        e.exports = Object.create || function (e, t) {
          var n;
          return null !== e ? (s.prototype = o(e),
            n = new s,
            s.prototype = null,
            n[a] = e) : n = l(),
            void 0 === t ? n : i(n, t)
        }
      }
      , function (e, t, n) {
        var o = n(10)
          , i = n(3)
          , r = n(34);
        e.exports = n(4) ? Object.defineProperties : function (e, t) {
          i(e);
          for (var n, a = r(t), s = a.length, l = 0; s > l;)
            o.f(e, n = a[l++], t[n]);
          return e
        }
      }
      , function (e, t) {
        t.f = Object.getOwnPropertySymbols
      }
      , function (e, t, n) {
        var o = n(13)
          , i = n(25)
          , r = n(21)("IE_PROTO")
          , a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
          return e = i(e),
            o(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
      }
      , function (e, t, n) {
        var o = n(13)
          , i = n(23)
          , r = n(57)(!1)
          , a = n(21)("IE_PROTO");
        e.exports = function (e, t) {
          var n, s = i(e), l = 0, c = [];
          for (n in s)
            n != a && o(s, n) && c.push(n);
          for (; t.length > l;)
            o(s, n = t[l++]) && (~r(c, n) || c.push(n));
          return c
        }
      }
      , function (e, t) {
        t.f = {}.propertyIsEnumerable
      }
      , function (e, t, n) {
        var o = n(6);
        e.exports = function (e, t, n) {
          for (var i in t)
            n && e[i] ? e[i] = t[i] : o(e, i, t[i]);
          return e
        }
      }
      , function (e, t, n) {
        e.exports = n(6)
      }
      , function (e, t, n) {
        "use strict";
        var o = n(0)
          , i = n(2)
          , r = n(10)
          , a = n(4)
          , s = n(1)("species");
        e.exports = function (e) {
          var t = "function" == typeof i[e] ? i[e] : o[e];
          a && t && !t[s] && r.f(t, s, {
            configurable: !0,
            get: function () {
              return this
            }
          })
        }
      }
      , function (e, t, n) {
        var o = n(22)
          , i = n(14);
        e.exports = function (e) {
          return function (t, n) {
            var r, a, s = String(i(t)), l = o(n), c = s.length;
            return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
          }
        }
      }
      , function (e, t, n) {
        var o = n(22)
          , i = Math.max
          , r = Math.min;
        e.exports = function (e, t) {
          return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t)
        }
      }
      , function (e, t, n) {
        var o = n(8);
        e.exports = function (e, t) {
          if (!o(e))
            return e;
          var n, i;
          if (t && "function" == typeof (n = e.toString) && !o(i = n.call(e)))
            return i;
          if ("function" == typeof (n = e.valueOf) && !o(i = n.call(e)))
            return i;
          if (!t && "function" == typeof (n = e.toString) && !o(i = n.call(e)))
            return i;
          throw TypeError("Can't convert object to primitive value")
        }
      }
      , function (e, t, n) {
        var o = n(0).navigator;
        e.exports = o && o.userAgent || ""
      }
      , function (e, t, n) {
        "use strict";
        var o = n(7)
          , i = n(5)
          , r = n(25)
          , a = n(31)
          , s = n(30)
          , l = n(24)
          , c = n(58)
          , u = n(41);
        i(i.S + i.F * !n(33)((function (e) {
          Array.from(e)
        }
        )), "Array", {
          from: function (e) {
            var t, n, i, p, d = r(e), h = "function" == typeof this ? this : Array, f = arguments.length, y = f > 1 ? arguments[1] : void 0, m = void 0 !== y, g = 0, v = u(d);
            if (m && (y = o(y, f > 2 ? arguments[2] : void 0, 2)),
              null == v || h == Array && s(v))
              for (n = new h(t = l(d.length)); t > g; g++)
                c(n, g, m ? y(d[g], g) : d[g]);
            else
              for (p = v.call(d),
                n = new h; !(i = p.next()).done; g++)
                c(n, g, m ? a(p, y, [i.value, g], !0) : i.value);
            return n.length = g,
              n
          }
        })
      }
      , function (e, t, n) {
        "use strict";
        var o = n(55)
          , i = n(63)
          , r = n(9)
          , a = n(23);
        e.exports = n(32)(Array, "Array", (function (e, t) {
          this._t = a(e),
            this._i = 0,
            this._k = t
        }
        ), (function () {
          var e = this._t
            , t = this._k
            , n = this._i++;
          return !e || n >= e.length ? (this._t = void 0,
            i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }
        ), "values"),
          r.Arguments = r.Array,
          o("keys"),
          o("values"),
          o("entries")
      }
      , function (e, t, n) {
        var o = n(5);
        o(o.S + o.F, "Object", {
          assign: n(65)
        })
      }
      , function (e, t) { }
      , function (e, t, n) {
        "use strict";
        var o, i, r, a, s = n(17), l = n(0), c = n(7), u = n(26), p = n(5), d = n(8), h = n(11), f = n(56), y = n(59), m = n(38), g = n(39).set, v = n(64)(), x = n(18), _ = n(35), E = n(78), b = n(36), T = l.TypeError, w = l.process, O = w && w.versions, j = O && O.v8 || "", M = l.Promise, C = "process" == u(w), R = function () { }, B = i = x.f, D = !!function () {
          try {
            var e = M.resolve(1)
              , t = (e.constructor = {})[n(1)("species")] = function (e) {
                e(R, R)
              }
              ;
            return (C || "function" == typeof PromiseRejectionEvent) && e.then(R) instanceof t && 0 !== j.indexOf("6.6") && -1 === E.indexOf("Chrome/66")
          } catch (e) { }
        }(), k = function (e) {
          var t;
          return !(!d(e) || "function" != typeof (t = e.then)) && t
        }, S = function (e, t) {
          if (!e._n) {
            e._n = !0;
            var n = e._c;
            v((function () {
              for (var o = e._v, i = 1 == e._s, r = 0; n.length > r;)
                !function (t) {
                  var n, r, a, s = i ? t.ok : t.fail, l = t.resolve, c = t.reject, u = t.domain;
                  try {
                    s ? (i || (2 == e._h && A(e),
                      e._h = 1),
                      !0 === s ? n = o : (u && u.enter(),
                        n = s(o),
                        u && (u.exit(),
                          a = !0)),
                      n === t.promise ? c(T("Promise-chain cycle")) : (r = k(n)) ? r.call(n, l, c) : l(n)) : c(o)
                  } catch (e) {
                    u && !a && u.exit(),
                      c(e)
                  }
                }(n[r++]);
              e._c = [],
                e._n = !1,
                t && !e._h && I(e)
            }
            ))
          }
        }, I = function (e) {
          g.call(l, (function () {
            var t, n, o, i = e._v, r = P(e);
            if (r && (t = _((function () {
              C ? w.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({
                promise: e,
                reason: i
              }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", i)
            }
            )),
              e._h = C || P(e) ? 2 : 1),
              e._a = void 0,
              r && t.e)
              throw t.v
          }
          ))
        }, P = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length
        }, A = function (e) {
          g.call(l, (function () {
            var t;
            C ? w.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
              promise: e,
              reason: e._v
            })
          }
          ))
        }, N = function (e) {
          var t = this;
          t._d || (t._d = !0,
            (t = t._w || t)._v = e,
            t._s = 2,
            t._a || (t._a = t._c.slice()),
            S(t, !0))
        }, H = function (e) {
          var t, n = this;
          if (!n._d) {
            n._d = !0,
              n = n._w || n;
            try {
              if (n === e)
                throw T("Promise can't be resolved itself");
              (t = k(e)) ? v((function () {
                var o = {
                  _w: n,
                  _d: !1
                };
                try {
                  t.call(e, c(H, o, 1), c(N, o, 1))
                } catch (e) {
                  N.call(o, e)
                }
              }
              )) : (n._v = e,
                n._s = 1,
                S(n, !1))
            } catch (e) {
              N.call({
                _w: n,
                _d: !1
              }, e)
            }
          }
        };
        D || (M = function (e) {
          f(this, M, "Promise", "_h"),
            h(e),
            o.call(this);
          try {
            e(c(H, this, 1), c(N, this, 1))
          } catch (e) {
            N.call(this, e)
          }
        }
          ,
          (o = function (e) {
            this._c = [],
              this._a = void 0,
              this._s = 0,
              this._d = !1,
              this._v = void 0,
              this._h = 0,
              this._n = !1
          }
          ).prototype = n(72)(M.prototype, {
            then: function (e, t) {
              var n = B(m(this, M));
              return n.ok = "function" != typeof e || e,
                n.fail = "function" == typeof t && t,
                n.domain = C ? w.domain : void 0,
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && S(this, !1),
                n.promise
            },
            catch: function (e) {
              return this.then(void 0, e)
            }
          }),
          r = function () {
            var e = new o;
            this.promise = e,
              this.resolve = c(H, e, 1),
              this.reject = c(N, e, 1)
          }
          ,
          x.f = B = function (e) {
            return e === M || e === a ? new r(e) : i(e)
          }
        ),
          p(p.G + p.W + p.F * !D, {
            Promise: M
          }),
          n(20)(M, "Promise"),
          n(74)("Promise"),
          a = n(2).Promise,
          p(p.S + p.F * !D, "Promise", {
            reject: function (e) {
              var t = B(this);
              return (0,
                t.reject)(e),
                t.promise
            }
          }),
          p(p.S + p.F * (s || !D), "Promise", {
            resolve: function (e) {
              return b(s && this === a ? M : this, e)
            }
          }),
          p(p.S + p.F * !(D && n(33)((function (e) {
            M.all(e).catch(R)
          }
          ))), "Promise", {
            all: function (e) {
              var t = this
                , n = B(t)
                , o = n.resolve
                , i = n.reject
                , r = _((function () {
                  var n = []
                    , r = 0
                    , a = 1;
                  y(e, !1, (function (e) {
                    var s = r++
                      , l = !1;
                    n.push(void 0),
                      a++,
                      t.resolve(e).then((function (e) {
                        l || (l = !0,
                          n[s] = e,
                          --a || o(n))
                      }
                      ), i)
                  }
                  )),
                    --a || o(n)
                }
                ));
              return r.e && i(r.v),
                n.promise
            },
            race: function (e) {
              var t = this
                , n = B(t)
                , o = n.reject
                , i = _((function () {
                  y(e, !1, (function (e) {
                    t.resolve(e).then(n.resolve, o)
                  }
                  ))
                }
                ));
              return i.e && o(i.v),
                n.promise
            }
          })
      }
      , function (e, t, n) {
        "use strict";
        var o = n(5)
          , i = n(2)
          , r = n(0)
          , a = n(38)
          , s = n(36);
        o(o.P + o.R, "Promise", {
          finally: function (e) {
            var t = a(this, i.Promise || r.Promise)
              , n = "function" == typeof e;
            return this.then(n ? function (n) {
              return s(t, e()).then((function () {
                return n
              }
              ))
            }
              : e, n ? function (n) {
                return s(t, e()).then((function () {
                  throw n
                }
                ))
              }
              : e)
          }
        })
      }
      , function (e, t, n) {
        "use strict";
        var o = n(5)
          , i = n(18)
          , r = n(35);
        o(o.S, "Promise", {
          try: function (e) {
            var t = i.f(this)
              , n = r(e);
            return (n.e ? t.reject : t.resolve)(n.v),
              t.promise
          }
        })
      }
      , function (e, t, n) {
        n(80);
        for (var o = n(0), i = n(6), r = n(9), a = n(1)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
          var c = s[l]
            , u = o[c]
            , p = u && u.prototype;
          p && !p[a] && i(p, a, c),
            r[c] = r.Array
        }
      }
      , function (e, t, n) {
        (function (t) {
          var n;
          n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            e.exports = n
        }
        ).call(t, n(91))
      }
      , function (e, t, n) {
        var o = n(92);
        e.exports = function (e, t) {
          "string" == typeof e && (e = {
            uri: e
          }),
            o(e, (function (e, n, o) {
              if (e)
                return t(e);
              if (!/^2/.test(n.statusCode))
                return t(new Error("http status code: " + n.statusCode));
              var i = document.createElement("div");
              i.innerHTML = o;
              var r = i.querySelector("svg");
              if (!r)
                return t(new Error("svg not present in resource"));
              t(null, r)
            }
            ))
        }
      }
      , function (e, t) {
        function n(e) {
          var t = !1;
          return function () {
            if (!t)
              return t = !0,
                e.apply(this, arguments)
          }
        }
        e.exports = n,
          n.proto = n((function () {
            Object.defineProperty(Function.prototype, "once", {
              value: function () {
                return n(this)
              },
              configurable: !0
            })
          }
          ))
      }
      , function (e, t) {
        var n = function (e) {
          return e.replace(/^\s+|\s+$/g, "")
        }
          , o = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          };
        e.exports = function (e) {
          if (!e)
            return {};
          for (var t = {}, i = n(e).split("\n"), r = 0; r < i.length; r++) {
            var a = i[r]
              , s = a.indexOf(":")
              , l = n(a.slice(0, s)).toLowerCase()
              , c = n(a.slice(s + 1));
            void 0 === t[l] ? t[l] = c : o(t[l]) ? t[l].push(c) : t[l] = [t[l], c]
          }
          return t
        }
      }
      , function (e, t) {
        var n;
        n = function () {
          return this
        }();
        try {
          n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
          "object" == typeof window && (n = window)
        }
        e.exports = n
      }
      , function (e, t, n) {
        function o() { }
        var i = n(87)
          , r = n(89)
          , a = n(90)
          , s = {
            0: "Internal XMLHttpRequest Error",
            4: "4xx Client Error",
            5: "5xx Server Error"
          }
          , l = i.XMLHttpRequest || o
          , c = "withCredentials" in new l ? l : i.XDomainRequest;
        e.exports = function (e, t) {
          function n() {
            var e = null;
            if (p.response ? e = p.response : "text" !== p.responseType && p.responseType || (e = p.responseText || p.responseXML),
              v)
              try {
                e = JSON.parse(e)
              } catch (e) { }
            return e
          }
          function i() {
            return 1223 === p.status ? 204 : p.status
          }
          function u(e, t) {
            var n = null;
            if (0 === e || e >= 400 && e < 600) {
              var o = "string" == typeof t && t || s[String(e).charAt(0)];
              (n = new Error(o)).statusCode = e
            }
            return n
          }
          "string" == typeof e && (e = {
            uri: e
          }),
            e = e || {},
            t = r(t);
          var p = e.xhr || null;
          p || (p = e.cors || e.useXDR ? new c : new l);
          var d, h = p.url = e.uri || e.url, f = p.method = e.method || "GET", y = e.body || e.data, m = p.headers = e.headers || {}, g = !!e.sync, v = !1, x = e.response ? function () {
            var e = i()
              , o = n()
              , r = u(e, o)
              , s = {
                body: o,
                statusCode: e,
                statusText: p.statusText,
                raw: p
              };
            p.getAllResponseHeaders ? s.headers = a(p.getAllResponseHeaders()) : s.headers = {},
              t(r, s, s.body)
          }
            : function () {
              var e = i()
                , o = u(e);
              p.status = p.statusCode = e,
                p.body = n(),
                p.headers = a(p.getAllResponseHeaders()),
                t(o, p, p.body)
            }
            ;
          if ("json" in e && (v = !0,
            m.Accept = "application/json",
            "GET" !== f && "HEAD" !== f && (m["Content-Type"] = "application/json",
              y = JSON.stringify(e.json))),
            p.onreadystatechange = function () {
              4 === p.readyState && x()
            }
            ,
            p.onload = x,
            p.onerror = function (e) {
              t(e, p)
            }
            ,
            p.onprogress = function () { }
            ,
            p.ontimeout = o,
            p.open(f, h, !g),
            (e.withCredentials || e.cors && !1 !== e.withCredentials) && (p.withCredentials = !0),
            g || (p.timeout = "timeout" in e ? e.timeout : 5e3),
            p.setRequestHeader)
            for (d in m)
              m.hasOwnProperty(d) && p.setRequestHeader(d, m[d]);
          else if (e.headers)
            throw new Error("Headers cannot be set on an XDomainRequest object");
          return "responseType" in e && (p.responseType = e.responseType),
            "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(p),
            p.send(y),
            p
        }
      }
    ])
  }
  , function (e, t, n) {
    "use strict";
    n.r(t);
    const o = {
      MP3_OVERVIEW: {
        viewId: "MP3_OVERVIEW",
        src: "assets/MP3_OVERVIEW.jpg",
        rotation: "0 90 0",
        xvalue: -.6,
        next: null
      },
      MP3_TER_E: {
        viewId: "MP3_TER_E",
        src: "assets/myphuoc/terrace/MP3_TER_E.jpg",
        rotation: "0 195 0",
        next: "MP3_TER_CENTER",
        xvalue: null
      },
      MP3_TER_CENTER: {
        viewId: "MP3_TER_CENTER",
        src: "assets/myphuoc/terrace/MP3_TER_CENTER.jpg",
        rotation: "0 100 0",
        next: "MP3_TER_C1",
        xvalue: null
      },
      MP3_TER_C1: {
        viewId: "MP3_TER_C1",
        src: "assets/myphuoc/terrace/MP3_TER_C1.jpg",
        rotation: "0 100 0",
        next: "MP3_TER_C2",
        xvalue: null
      },
      MP3_TER_C2: {
        viewId: "MP3_TER_C2",
        src: "assets/myphuoc/terrace/MP3_TER_C2.jpg",
        rotation: "0 100 0",
        next: "MP3_TER_O1",
        xvalue: null
      },
      MP3_TER_O1: {
        viewId: "MP3_TER_O1",
        src: "assets/myphuoc/terrace/MP3_TER_O1.jpg",
        rotation: "0 -90 0",
        next: "MP3_TER_O2",
        xvalue: null
      },
      MP3_TER_O2: {
        viewId: "MP3_TER_O2",
        src: "assets/myphuoc/terrace/MP3_TER_O2.jpg",
        rotation: "0 210 0",
        next: "MP3_TER_CENTER",
        xvalue: null
      },
      MP3_SEMI_E: {
        viewId: "MP3_SEMI_E",
        src: "assets/myphuoc/semi/MP3_SEMI_E.jpg",
        rotation: "0 145 0",
        next: "MP3_SEMI_CENTER",
        xvalue: null
      },
      MP3_SEMI_CENTER: {
        viewId: "MP3_SEMI_CENTER",
        src: "assets/myphuoc/semi/MP3_SEMI_CENTER.jpg",
        rotation: "0 100 0",
        next: "MP3_SEMI_C1",
        xvalue: null
      },
      MP3_SEMI_C1: {
        viewId: "MP3_SEMI_C1",
        src: "assets/myphuoc/semi/MP3_SEMI_C1.jpg",
        rotation: "0 150 0",
        next: "MP3_SEMI_C2",
        xvalue: null
      },
      MP3_SEMI_C2: {
        viewId: "MP3_SEMI_C2",
        src: "assets/myphuoc/semi/MP3_SEMI_C2.jpg",
        rotation: "0 100 0",
        next: "MP3_SEMI_O1",
        xvalue: null
      },
      MP3_SEMI_O1: {
        viewId: "MP3_SEMI_O1",
        src: "assets/myphuoc/semi/MP3_SEMI_O1.jpg",
        rotation: "0 0 0",
        next: "MP3_SEMI_O2",
        xvalue: null
      },
      MP3_SEMI_O2: {
        viewId: "MP3_SEMI_O2",
        src: "assets/myphuoc/semi/MP3_SEMI_O2.jpg",
        rotation: "0 180 0",
        next: "MP3_SEMI_CENTER",
        xvalue: null
      },
      MP3_DET_E: {
        viewId: "MP3_DET_E",
        src: "assets/myphuoc/det/MP3_DET_E.jpg",
        rotation: "0 100 0",
        next: "MP3_DET_CENTER",
        xvalue: null
      },
      MP3_DET_CENTER: {
        viewId: "MP3_DET_CENTER",
        src: "assets/myphuoc/det/MP3_DET_CENTER.jpg",
        rotation: "0 53 0",
        next: "MP3_DET_O1",
        xvalue: null
      },
      MP3_DET_O1: {
        viewId: "MP3_DET_O1",
        src: "assets/myphuoc/det/MP3_DET_O1.jpg",
        rotation: "0 -25 0",
        next: "MP3_DET_O2",
        xvalue: null
      },
      MP3_DET_O2: {
        viewId: "MP3_DET_O2",
        src: "assets/myphuoc/det/MP3_DET_O2.jpg",
        rotation: "0 180 0",
        next: "MP3_DET_CENTER",
        xvalue: null
      },
      MP3_OUTDOOR_1: {
        viewId: "MP3_OUTDOOR_1",
        src: "assets/outdoor/MP3_VIEW1.jpg",
        rotation: "0 -100 0",
        xvalue: null,
        next: "MP3_OUTDOOR_2"
      },
      MP3_OUTDOOR_2: {
        viewId: "MP3_OUTDOOR_2",
        src: "assets/outdoor/MP3_VIEW2.jpg",
        rotation: "0 90 0",
        xvalue: -.2,
        next: "MP3_OUTDOOR_3"
      },
      MP3_OUTDOOR_3: {
        viewId: "MP3_OUTDOOR_3",
        src: "assets/outdoor/MP3_VIEW3.jpg",
        rotation: "0 85 0",
        xvalue: -.2,
        next: "MP3_OUTDOOR_4"
      },
      MP3_OUTDOOR_4: {
        viewId: "MP3_OUTDOOR_4",
        src: "assets/outdoor/MP3_VIEW4.jpg",
        rotation: "0 90 0",
        xvalue: -.2,
        next: "MP3_OUTDOOR_5"
      },
      MP3_OUTDOOR_5: {
        viewId: "MP3_OUTDOOR_5",
        src: "assets/outdoor/MP3_VIEW5.jpg",
        rotation: "0 90 0",
        xvalue: -.3,
        next: "MP3_OUTDOOR_6"
      },
      MP3_OUTDOOR_6: {
        viewId: "MP3_OUTDOOR_6",
        src: "assets/outdoor/MP3_VIEW6.jpg",
        rotation: "0 90 0",
        xvalue: -.3,
        next: "MP3_OUTDOOR_7"
      },
      MP3_OUTDOOR_7: {
        viewId: "MP3_OUTDOOR_7",
        src: "assets/outdoor/MP3_VIEW7.jpg",
        rotation: "0 -175 0",
        xvalue: -.5,
        next: "MP3_OUTDOOR_8"
      },
      MP3_OUTDOOR_8: {
        viewId: "MP3_OUTDOOR_8",
        src: "assets/outdoor/MP3_VIEW8.jpg",
        rotation: "0 95 0",
        xvalue: -.5,
        next: "MP3_OUTDOOR_9"
      },
      MP3_OUTDOOR_9: {
        viewId: "MP3_OUTDOOR_9",
        src: "assets/outdoor/MP3_VIEW9.jpg",
        rotation: "0 80 0",
        xvalue: -.5,
        next: "MP3_OUTDOOR_1"
      },
      ...{
        BB_OVERVIEW: {
          viewId: "BB_OVERVIEW",
          src: "assets/baubang/BB_OVERVIEW.jpg",
          rotation: "0 100 0",
          xvalue: -.6,
          next: null
        },
        BB_DET_E: {
          viewId: "BB_DET_E",
          src: "assets/baubang/BB_DET_E.jpg",
          rotation: "0 120 0",
          next: "BB_DET_CENTER",
          xvalue: null
        },
        BB_DET_CENTER: {
          viewId: "BB_DET_CENTER",
          src: "assets/baubang/BB_DET_CENTER.jpg",
          rotation: "0 0 0",
          next: "BB_DET_O",
          xvalue: null
        },
        BB_DET_O: {
          viewId: "BB_DET_O",
          src: "assets/baubang/BB_DET_O.jpg",
          rotation: "0 0 0",
          next: "BB_DET_CENTER",
          xvalue: null
        },
        BB_TER_E1: {
          viewId: "BB_TER_E1",
          src: "assets/baubang/BB_TER_E1.jpg",
          rotation: "0 95 0",
          next: "BB_TER_CENTER",
          xvalue: null
        },
        BB_TER_E2: {
          viewId: "BB_TER_E2",
          src: "assets/baubang/BB_TER_E2.jpg",
          rotation: "0 130 0",
          next: "BB_TER_CENTER",
          xvalue: null
        },
        BB_TER_CENTER: {
          viewId: "BB_TER_CENTER",
          src: "assets/baubang/BB_TER_CENTER.jpg",
          rotation: "0 -40 0",
          next: "BB_TER_C1",
          xvalue: null
        },
        BB_TER_C1: {
          viewId: "BB_TER_C1",
          src: "assets/baubang/BB_TER_C1.jpg",
          rotation: "0 0 0",
          next: "BB_TER_C2",
          xvalue: null
        },
        BB_TER_C2: {
          viewId: "BB_TER_C2",
          src: "assets/baubang/BB_TER_C2.jpg",
          rotation: "0 -70 0",
          next: "BB_TER_C3",
          xvalue: null
        },
        BB_TER_C3: {
          viewId: "BB_TER_C3",
          src: "assets/baubang/BB_TER_C3.jpg",
          rotation: "0 0 0",
          next: "BB_TER_O1",
          xvalue: null
        },
        BB_TER_O1: {
          viewId: "BB_TER_O1",
          src: "assets/baubang/BB_TER_O1.jpg",
          rotation: "0 195 0",
          next: "BB_TER_O2",
          xvalue: null
        },
        BB_TER_O2: {
          viewId: "BB_TER_O2",
          src: "assets/baubang/BB_TER_O2.jpg",
          rotation: "0 30 0",
          next: "BB_TER_CENTER",
          xvalue: null
        },
        BB_SEMI_E1: {
          viewId: "BB_SEMI_E1",
          src: "assets/baubang/BB_SEMI_E1.jpg",
          rotation: "0 102 0",
          next: "BB_SEMI_CENTER",
          xvalue: null
        },
        BB_SEMI_E2: {
          viewId: "BB_SEMI_E2",
          src: "assets/baubang/BB_SEMI_E2.jpg",
          rotation: "0 130 0",
          next: "BB_SEMI_CENTER",
          xvalue: null
        },
        BB_SEMI_CENTER: {
          viewId: "BB_SEMI_CENTER",
          src: "assets/baubang/BB_SEMI_CENTER.jpg",
          rotation: "0 160 0",
          next: "BB_SEMI_C1",
          xvalue: null
        },
        BB_SEMI_C1: {
          viewId: "BB_SEMI_C1",
          src: "assets/baubang/BB_SEMI_C1.jpg",
          rotation: "0 70 0",
          next: "BB_SEMI_C2",
          xvalue: null
        },
        BB_SEMI_C2: {
          viewId: "BB_SEMI_C2",
          src: "assets/baubang/BB_SEMI_C2.jpg",
          rotation: "0 100 0",
          next: "BB_SEMI_C3",
          xvalue: null
        },
        BB_SEMI_C3: {
          viewId: "BB_SEMI_C3",
          src: "assets/baubang/BB_SEMI_C3.jpg",
          rotation: "0 0 0",
          next: "BB_SEMI_O1",
          xvalue: null
        },
        BB_SEMI_O1: {
          viewId: "BB_SEMI_O1",
          src: "assets/baubang/BB_SEMI_O1.jpg",
          rotation: "0 100 0",
          next: "BB_SEMI_O2",
          xvalue: null
        },
        BB_SEMI_O2: {
          viewId: "BB_SEMI_O2",
          src: "assets/baubang/BB_SEMI_O2.jpg",
          rotation: "0 90 0",
          next: "BB_SEMI_CENTER",
          xvalue: null
        },
        BB_OUTDOOR_1: {
          viewId: "BB_OUTDOOR_1",
          src: "assets/baubang/BB_VIEW1.jpg",
          rotation: "0 90 0",
          xvalue: -.2,
          next: "BB_OUTDOOR_2"
        },
        BB_OUTDOOR_2: {
          viewId: "BB_OUTDOOR_2",
          src: "assets/baubang/BB_VIEW2.jpg",
          rotation: "0 90 0",
          xvalue: -.2,
          next: "BB_OUTDOOR_3"
        },
        BB_OUTDOOR_3: {
          viewId: "BB_OUTDOOR_3",
          src: "assets/baubang/BB_VIEW3.jpg",
          rotation: "0 75 0",
          xvalue: 0,
          next: "BB_OUTDOOR_4"
        },
        BB_OUTDOOR_4: {
          viewId: "BB_OUTDOOR_4",
          src: "assets/baubang/BB_VIEW4.jpg",
          rotation: "0 100 0",
          xvalue: -.3,
          next: "BB_OUTDOOR_5"
        },
        BB_OUTDOOR_5: {
          viewId: "BB_OUTDOOR_5",
          src: "assets/baubang/BB_VIEW5.jpg",
          rotation: "0 -140 0",
          xvalue: -.3,
          next: "BB_OUTDOOR_6"
        },
        BB_OUTDOOR_6: {
          viewId: "BB_OUTDOOR_6",
          src: "assets/baubang/BB_VIEW6.jpg",
          rotation: "0 -240 0",
          xvalue: -1,
          next: "BB_OUTDOOR_1"
        }
      }
    };
    const i = {
      MP3_OVERVIEW: ['<a-hotspot\n      visible="false"\n      id="MP3_OVERVIEW_TO_TER_CENTER"\n      to="MP3_TER_CENTER"\n      position="-14.39 -4.65 1.24"\n      look-at="[camera]"\n      scale="3 3 3"\n    >\n      <a-svg\n        src="#hotspot-icon-svg"\n        proportional-scale="0.75"\n        extrude="1"\n        z-factor="0"\n      >\n      <a-text\n        value="TERRACE"\n        align="center"\n        color="#696969"\n        position="0 0.38 -0.05"\n        rotation="0 0 -2.5"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-text\n        value="TERRACE"\n        align="center"\n        rotation="0 0 -2.5"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 1 0.5 1; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.5 0.25 0.5; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 0.4 0"\n        geometry="primitive: box; width: 0.8; height: 0.5; depth: 0.5"\n        material="opacity: 0;"\n      ></a-entity>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OVERVIEW_TO_DETACHED"\n      to="MP3_DET_CENTER"\n      position="-8.12 -5.47 0.35"\n      look-at="[camera]"\n      scale="2.25 2.25 2.25"\n    >\n      <a-svg\n        src="#hotspot-icon-svg"\n        proportional-scale="0.75"\n        extrude="1"\n        z-factor="0"\n      >\n      <a-text\n        value="DETACHED"\n        align="center"\n        color="#696969"\n        position="0 0.38 -0.05"\n        rotation="0 0 -2.5"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-text\n        value="DETACHED"\n        align="center"\n        rotation="0 0 -2.5"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 1 0.5 1; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.5 0.25 0.5; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 0.4 0"\n        geometry="primitive: box; width: 0.8; height: 0.5; depth: 0.5"\n        material="opacity: 0;"\n      ></a-entity>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OVERVIEW_TO_SEMI_CENTER"\n      look-at="[camera]"\n      scale="3.5 3.5 3.5"\n      to="MP3_SEMI_CENTER"\n      position="-18.86 -3.8 -3.67"\n      rotation="0 90 0"\n    >\n      <a-svg\n        src="#hotspot-icon-svg"\n        proportional-scale="0.75"\n        extrude="1"\n        z-factor="0"\n      >\n      <a-text\n        value="SEMI DETACHED"\n        align="center"\n        color="#696969"\n        position="0 0.38 -0.05"\n        rotation="0 0 2.5"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-text\n        value="SEMI DETACHED"\n        align="center"\n        rotation="0 0 2.5"\n        mixin="hotspot-top-text">\n      </a-text>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 1 0.5 1; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.5 0.25 0.5; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 0.4 0"\n        geometry="primitive: box; width: 0.8; height: 0.5; depth: 0.5"\n        material="opacity: 0;"\n      ></a-entity>\n    </a-hotspot>', '<a-entity\n      visible="false"\n      id="HIGHWAY"\n      position="-15.39 -2.65 1.24"\n      look-at="[camera]" scale="1.75 1.75 1.75"\n    >\n      <a-image\n        width="4"\n        height="4"\n        src="assets/tanvanhighway.png" >\n      </a-image>\n    </a-entity>'],
      BB_OVERVIEW: ['<a-hotspot\n      visible="false"\n      id="BB_OVERVIEW_TO_TER_CENTER"\n      to="BB_TER_CENTER"\n      position="-7.5 -4.85 1"\n      look-at="[camera]"\n      scale="2.5 2.5 2.5"\n    >\n      <a-svg\n        src="#hotspot-icon-svg"\n        proportional-scale="0.75"\n        extrude="1"\n        z-factor="0"\n      >\n      <a-text\n        value="TERRACE"\n        align="center"\n        color="#696969"\n        position="0 0.48 -0.05"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-text\n        value="TERRACE"\n        align="center"\n        color="#ffffff"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.75 0.5 0.75; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.5 0.25 0.5; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 0.4 0"\n        geometry="primitive: box; width: 0.8; height: 0.5; depth: 0.5"\n        material="opacity: 0;"\n      ></a-entity>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OVERVIEW_TO_DET_CENTER"\n      to="BB_DET_CENTER"\n      position="-10 -3.65 1.5"\n      look-at="[camera]"\n      scale="2.3 2.3 2.3"\n    >\n      <a-svg\n        src="#hotspot-icon-svg"\n        proportional-scale="0.75"\n        extrude="1"\n        z-factor="0"\n      >\n      <a-text\n        value="DETACHED"\n        align="center"\n        color="#696969"\n        position="0 0.48 -0.05"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-text\n        value="DETACHED"\n        align="center"\n        color="#ffffff"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.75 0.5 0.75; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.5 0.25 0.5; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 0.4 0"\n        geometry="primitive: box; width: 0.8; height: 0.5; depth: 0.5"\n        material="opacity: 0;"\n      ></a-entity>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OVERVIEW_TO_SEMI_CENTER"\n      look-at="[camera]"\n      scale="2.5 2.5 2.5"\n      to="BB_SEMI_CENTER"\n      position="-10.39 -5.65 5"\n    >\n      <a-svg\n        src="#hotspot-icon-svg"\n        proportional-scale="0.75"\n        extrude="1"\n        z-factor="0"\n      >\n      <a-text\n        value="SEMI DETACHED"\n        align="center"\n        color="#696969"\n        rotation="0 0 -6"\n        position="0 0.48 -0.05"\n        mixin="hotspot-top-text"\n      ></a-text>\n      <a-text\n        value="SEMI DETACHED"\n        align="center"\n        color="#ffffff"\n        rotation="0 0 -6"\n        mixin="hotspot-top-text">\n      </a-text>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.75 0.5 0.75; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 -0.2 -0.2"\n        material="side: double; color: white; shader: flat; opacity: 0"\n        geometry="primitive: ring; radiusInner: 0.45; radiusOuter: 0.5"\n        animation__grow="property: scale; from: 0 0 0; to: 0.5 0.25 0.5; loop: true; easing: easeInOutQuad; dur: 1200"\n        animation__fade="property: material.opacity; to: 1; loop: true; easing: easeInOutQuad; dir: alternate; dur: 600"\n      ></a-entity>\n      <a-entity\n        position="0 0.4 0"\n        geometry="primitive: box; width: 0.8; height: 0.5; depth: 0.5"\n        material="opacity: 0;"\n      ></a-entity>\n    </a-hotspot>', '<a-entity\n      visible="false"\n      id="HIGHWAY"\n      position="-15.39 -2.65 1.24"\n      look-at="[camera]" scale="1.75 1.75 1.75"\n    >\n      <a-image\n        width="4"\n        height="4"\n        src="assets/tanvanhighwayBB.png" >\n      </a-image>\n    </a-entity>'],
      ...{
        MP3_OUTDOOR_1: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_1_TO_2"\n      to="MP3_OUTDOOR_2"\n      look-at="[camera]"\n      position="12.75 0.49 2.49"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_1_TO_9"\n      to="MP3_OUTDOOR_9"\n      look-at="[camera]"\n      position="2.29 0.04 -10.76"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 9"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_2: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_2_TO_1"\n      to="MP3_OUTDOOR_1"\n      look-at="[camera]"\n      position="1.24 -1.75 10.02"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_2_TO_3"\n      to="MP3_OUTDOOR_3"\n      look-at="[camera]"\n      position="2.17 -1.98 -9.82"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 3"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_2_TO_4"\n      to="MP3_OUTDOOR_4"\n      look-at="[camera]"\n      position="-9.24 -1.82 -0.06"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 4"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_3: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_3_TO_2"\n      to="MP3_OUTDOOR_2"\n      look-at="[camera]"\n      position="-0.51 -2.28 9.47"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_2_TO_7"\n      to="MP3_OUTDOOR_7"\n      look-at="[camera]"\n      position="-9.49 -1.98 -1.00"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 7"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_4: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_4_TO_2"\n      to="MP3_OUTDOOR_2"\n      look-at="[camera]"\n      position="9.50 0.09 0"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_4_TO_5"\n      to="MP3_OUTDOOR_5"\n      look-at="[camera]"\n      position="-9.49 -0.51 -0.02"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 5"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_5: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_5_TO_4"\n      to="MP3_OUTDOOR_4"\n      look-at="[camera]"\n      position="10.98 -4.10 0.85"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 4"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_5_TO_6"\n      to="MP3_OUTDOOR_6"\n      look-at="[camera]"\n      position="-0.61 -2.36 -9.96"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 6"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_6: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_6_TO_1"\n      to="MP3_OUTDOOR_1"\n      look-at="[camera]"\n      position="-0.06 -2.13 -6.93"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', ' <a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_6_TO_5"\n      to="MP3_OUTDOOR_5"\n      look-at="[camera]"\n      position="-8.58 -2.73 -0.00"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 5"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_6_TO_9"\n      to="MP3_OUTDOOR_9"\n      look-at="[camera]"\n      position="-0.01 -2.63 9.13"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 9"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_7: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_7_TO_3"\n      to="MP3_OUTDOOR_3"\n      look-at="[camera]"\n      position="9.08 -3.47 -0.77"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 3"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_7_TO_8"\n      to="MP3_OUTDOOR_8"\n      look-at="[camera]"\n      position="-8.43 -3.09 0.64"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 8"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_8: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_8_TO_7"\n      to="MP3_OUTDOOR_7"\n      look-at="[camera]"\n      position="-9.52 -4.96 0.51"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 7"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_8_TO_9"\n      to="MP3_OUTDOOR_9"\n      look-at="[camera]"\n      position="-0.64 -4.11 -9.91"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 9"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        MP3_OUTDOOR_9: ['<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_9_TO_1"\n      to="MP3_OUTDOOR_1"\n      look-at="[camera]"\n      position="-11.08 -5.32 -2.28"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 -20"\n      ></a-image>\n      <a-text\n        value="View 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_OUTDOOR_9_TO_8"\n      to="MP3_OUTDOOR_8"\n      look-at="[camera]"\n      position="-9.04 -4.84 7.15"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 20"\n      ></a-image>\n      <a-text\n        value="View 8"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>']
      },
      ...{
        MP3_TER_E: ['<a-hotspot\n      visible="false"\n      id="MP3_TER_E_TO_CENTER" to="MP3_TER_CENTER" look-at="[camera]"\n      position="2.2 1 10" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_TER_CENTER: ['<a-hotspot\n      visible="false"\n      id="MP3_TER_CENTER_TO_E" to="MP3_TER_E" position="-6 0.5 1" look-at="[camera]"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0" scale="1.5 1.5 1.5"></a-image>\n      <a-text value="Entrance" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_TER_CENTER_TO_C1"\n      to="MP3_TER_C1"\n      position="1 0.5 6"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="2 2 2"\n      ></a-image>\n      <a-text value="Corner 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_TER_CENTER_TO_C2"\n      to="MP3_TER_C2"\n      position="-1.3 0.5 -8"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Corner 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_TER_CENTER_TO_O1"\n      to="MP3_TER_O1"\n      position="-8 1 -3"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Office 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_TER_CENTER_TO_O2"\n      to="MP3_TER_O2"\n      position="-7.2 0.73 6"\n\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.7 1.7 1.7"\n      ></a-image>\n      <a-text value="Office 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_TER_C1: ['<a-hotspot\n      visible="false"\n      id="MP3_TER_C1_TO_CENTER"\n      to="MP3_TER_CENTER"\n      position="-6.37 0.45 -10.74"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_TER_C1_TO_O1"\n      to="MP3_TER_O1"\n      position="-12.25 0.47 -2.45"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        MP3_TER_C2: ['<a-hotspot\n      visible="false"\n      id="MP3_TER_C2_TO_CENTER"\n      to="MP3_TER_CENTER"\n      position="-2.17 0.42 12.05"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_TER_C1_TO_O2"\n      to="MP3_TER_O2"\n      position="-10.85 0.51 5.66"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        MP3_TER_O1: ['<a-hotspot\n      visible="false"\n      id="MP3_TER_O1_TO_CENTER"\n      to="MP3_TER_CENTER"\n      position="7 0 0"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        MP3_TER_O2: ['\n    <a-hotspot\n      visible="false"\n      id="MP3_TER_O2_TO_CENTER"\n      to="MP3_TER_CENTER"\n      position="2 0 7"s\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>']
      },
      ...{
        MP3_SEMI_E: ['<a-hotspot\n      visible="false"\n      id="MP3_SEMI_E_TO_CENTER"\n      to="MP3_SEMI_CENTER"\n      look-at="[camera]"\n      position="-3.87 -0.01 5.53"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_SEMI_CENTER: ['<a-hotspot\n      visible="false"\n      id="MP3_SEMI_CENTER_TO_E"\n      to="MP3_SEMI_E"\n      position="-16.04 0.81 2.50"\n      look-at="[camera]"\n      scale="2 2 2"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0" scale="1.5 1.5 1.5"></a-image>\n      <a-text value="Entrance" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_SEMI_CENTER_TO_C1"\n      to="MP3_SEMI_C1"\n      position="-7.01 0.70 13.52"\n      look-at="[camera]"\n      scale="1.5 1.5 1.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="2 2 2"\n      ></a-image>\n      <a-text value="Corner 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_SEMI_CENTER_TO_C2"\n      to="MP3_SEMI_C2"\n      position="13.40 0.06 -6.74"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Corner 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_SEMI_CENTER_TO_O1"\n      to="MP3_SEMI_O1"\n      position="-19.92 0.85 9.88"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Office 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_SEMI_CENTER_TO_O2"\n      to="MP3_SEMI_O2"\n      position="-22.50 0.64 -4.74"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.7 1.7 1.7"\n      ></a-image>\n      <a-text value="Office 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_SEMI_C1: ['<a-hotspot\n      visible="false"\n      id="MP3_SEMI_C1_TO_E"\n      to="MP3_SEMI_E"\n      look-at="[camera]"\n      position="-10.63 0.77 4.94"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Entrance" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_SEMI_C1_TO_O1"\n      to="MP3_SEMI_O1"\n      look-at="[camera]"\n      position="-7.13 0.09 9.34"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Office 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_SEMI_C1_TO_CENTER"\n      to="MP3_SEMI_CENTER"\n      look-at="[camera]"\n      position="-7.74 0.35 -8.83"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_SEMI_C2: ['<a-hotspot\n      visible="false"\n      id="MP3_SEMI_C2_TO_CENTER"\n      to="MP3_SEMI_CENTER"\n      position="-9.40 0.61 8.59"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        MP3_SEMI_O1: ['<a-hotspot\n      visible="false"\n      id="MP3_SEMI_O1_TO_CENTER"\n      to="MP3_SEMI_CENTER"\n      position="0.19 0.46 7.23"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        MP3_SEMI_O2: ['\n    <a-hotspot\n      visible="false"\n      id="MP3_SEMI_O2_TO_CENTER"\n      to="MP3_SEMI_CENTER"\n      position="-0.27 0.08 -8.50"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>']
      },
      ...{
        MP3_DET_E: ['<a-hotspot\n      visible="false"\n      id="MP3_DET_E_TO_CENTER"\n      to="MP3_DET_CENTER"\n      look-at="[camera]"\n      position="-9.60 -0.00 1.69"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_DET_CENTER: ['<a-hotspot\n      visible="false"\n      id="MP3_DET_CENTER_TO_E"\n      to="MP3_DET_E"\n      position="-13.98 0.00 -9.68"\n      look-at="[camera]"\n      scale="2 2 2"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0" scale="1.5 1.5 1.5"></a-image>\n      <a-text value="Entrance" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_DET_CENTER_TO_O1"\n      to="MP3_DET_O1"\n      position="-11.12 0.37 -12.86"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Office 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        MP3_DET_O1: ['<a-hotspot\n      visible="false"\n      id="MP3_DET_O1_TO_CENTER"\n      to="MP3_DET_CENTER"\n      position="-0.87 0.15 4.92"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_DET_O1_TO_O2"\n      to="MP3_DET_O2"\n      position="3.56 -0.07 -6.31"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        MP3_DET_O2: ['<a-hotspot\n      visible="false"\n      id="MP3_DET_O2_TO_CENTER"\n      to="MP3_DET_CENTER"\n      position="10.23 -0.47 9.17"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="MP3_DET_O2_TO_O1"\n      to="MP3_DET_O1"\n      position="3.69 -0.05 4.73"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>']
      },
      ...{
        BB_TER_E1: ['<a-hotspot\n      visible="false"\n      id="BB_TER_E1_TO_CENTER" to="BB_TER_CENTER" look-at="[camera]"\n      position="-12.43 -0.10 1.36" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_E1_TO_E2" to="BB_TER_E2" look-at="[camera]"\n      position="0.37 0.65 11.98" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Entrance 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_TER_E2: ['<a-hotspot\n      visible="false"\n      id="BB_TER_E2_TO_CENTER" to="BB_TER_CENTER" look-at="[camera]"\n      position="-9.55 0.31 7.26" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_E2_TO_E1" to="BB_TER_E1" look-at="[camera]"\n      position="-7.33 0.41 -9.50" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Entrance 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_TER_CENTER: ['<a-hotspot\n      visible="false"\n      id="BB_TER_CENTER_TO_E1" to="BB_TER_E1" position="12.03 0.89 -4.12" look-at="[camera]"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0" scale="1.5 1.5 1.5"></a-image>\n      <a-text value="Entrance 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_CENTER_TO_E2"\n      to="BB_TER_E2"\n      position="1.25 0.69 12.67"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="2 2 2"\n      ></a-image>\n      <a-text value="Entrance 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_CENTER_TO_C1"\n      to="BB_TER_C1"\n      position="3.60 0.69 -12.21"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="2 2 2"\n      ></a-image>\n      <a-text value="Corner 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_CENTER_TO_C3"\n      to="BB_TER_C3"\n      position="-5.95 0.71 11.25"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Corner 3" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_CENTER_TO_O2"\n      to="BB_TER_O2"\n      position="9.42 0.49 10.00"\n\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.7 1.7 1.7"\n      ></a-image>\n      <a-text value="Office 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_TER_C1: ['<a-hotspot\n      visible="false"\n      id="BB_TER_C1_TO_CENTER"\n      to="BB_TER_CENTER"\n      position="0.28 0.80 12.47"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_C1_TO_O1"\n      to="BB_TER_O1"\n      position="11.43 0.61 -5.62"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_C1_TO_E1"\n      to="BB_TER_E1"\n      position="12.03 0.84 4.14"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Entrance 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_C1_TO_C2"\n      to="BB_TER_C2"\n      position="-0.41 0.69 -12.72"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Corner 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_TER_C2: ['<a-hotspot\n      visible="false"\n      id="BB_TER_C3_TO_C1"\n      to="BB_TER_C1"\n      position="0.29 0.56 11.23"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Corner 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_TER_C3: ['<a-hotspot\n      visible="false"\n      id="BB_TER_C2_TO_CENTER"\n      to="BB_TER_CENTER"\n      position="-2.43 0.66 -11.99"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_C2_TO_E2"\n      to="BB_TER_E2"\n      position="12.18 0.64 1.19"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Entrance 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_TER_C2_TO_O2"\n      to="BB_TER_O2"\n      position="9.60 0.47 -7.59"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_TER_O1: ['<a-hotspot\n      visible="false"\n      id="BB_TER_O1_TO_CENTER"\n      to="BB_TER_CENTER"\n      position="-5.91 -1.05 -4.50"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_TER_O2: ['\n    <a-hotspot\n      visible="false"\n      id="BB_TER_O2_TO_CENTER"\n      to="BB_TER_CENTER"\n      position="-7.15 0.20 -12.33"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>']
      },
      ...{
        BB_DET_E: ['<a-hotspot\n      visible="false"\n      id="BB_DET_E_TO_CENTER"\n      to="BB_DET_CENTER"\n      look-at="[camera]"\n      position="-10.26 0.18 7.99"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_DET_CENTER: ['<a-hotspot\n      visible="false"\n      id="BB_DET_CENTER_TO_E"\n      to="BB_DET_E"\n      position="6.85 0.63 -12.48"\n      look-at="[camera]"\n      scale="2 2 2"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0" scale="1.5 1.5 1.5"></a-image>\n      <a-text value="Entrance" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_DET_CENTER_TO_O"\n      to="BB_DET_O"\n      position="-5.57 0.63 -13.10"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Office" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_DET_O: ['<a-hotspot\n      visible="false"\n      id="BB_DET_O1_TO_CENTER"\n      to="BB_DET_CENTER"\n      position="-5.00 -0.85 -11.43"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_DET_O1_TO_E"\n      to="BB_DET_E"\n      position="5.51 -0.97 9.47"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Entrance"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>']
      },
      ...{
        BB_OUTDOOR_1: ['<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_1_TO_2"\n      to="BB_OUTDOOR_2"\n      look-at="[camera]"\n      position="-11.94 -1.10 -0.43"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        BB_OUTDOOR_2: ['<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_2_TO_1"\n      to="BB_OUTDOOR_1"\n      look-at="[camera]"\n      position="12.23 -0.66 0.35"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_2_TO_3"\n      to="BB_OUTDOOR_3"\n      look-at="[camera]"\n      position="0.06 -0.54 -12.24"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 3"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_2_TO_5"\n      to="BB_OUTDOOR_5"\n      look-at="[camera]"\n      position="-12.25 -0.15 -0.12"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 5"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        BB_OUTDOOR_3: ['<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_3_TO_6"\n      to="BB_OUTDOOR_6"\n      look-at="[camera]"\n      position="-11.88 0.64 -2.91"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 6"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        BB_OUTDOOR_4: ['<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_4_TO_6"\n      to="BB_OUTDOOR_6"\n      look-at="[camera]"\n      position="-12.12 -1.35 2.77"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 6"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        BB_OUTDOOR_5: ['<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_5_TO_2"\n      to="BB_OUTDOOR_2"\n      look-at="[camera]"\n      position="-8.72 -1.45 8.84"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_5_TO_6"\n      to="BB_OUTDOOR_6"\n      look-at="[camera]"\n      position="8.96 -1.57 8.57"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 6"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>'],
        BB_OUTDOOR_6: ['<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_6_TO_3"\n      to="BB_OUTDOOR_3"\n      look-at="[camera]"\n      position="-10.21 -7.19 10.01"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 3"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_6_TO_5"\n      to="BB_OUTDOOR_5"\n      look-at="[camera]"\n      position="-9.22 -9.40 -9.09"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 5"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_OUTDOOR_6_TO_4"\n      to="BB_OUTDOOR_4"\n      look-at="[camera]"\n      position="9.93 -7.70 9.90"\n      scale="2.5 2.5 2.5"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="View 4"\n        align="center"\n        mixin="hotspot-bottom-text"\n        ></a-text>\n    </a-hotspot>']
      },
      ...{
        BB_SEMI_E1: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_E1_TO_CENTER" to="BB_SEMI_CENTER" look-at="[camera]"\n      position="-11.91 0.10 2.86" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_E1_TO_E2" to="BB_SEMI_E2" look-at="[camera]"\n      position="-2.84 0.39 -11.91" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Entrance 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_SEMI_E2: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_E2_TO_CENTER" to="BB_SEMI_CENTER" look-at="[camera]"\n      position="-10.38 0.39 2.76  " scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Factory Center" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_E2_TO_E1" to="BB_SEMI_E1" look-at="[camera]"\n      position="-8.78 0.45 7.80" scale="2.5 2.5 2.5"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0"></a-image>\n      <a-text value="Entrance 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_SEMI_CENTER: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_CENTER_TO_E1"\n      to="BB_SEMI_E1"\n      position="0.44 0.53 9.47"\n      look-at="[camera]"\n    >\n      <a-image width="0.5" height="0.5" src="#hotspot-staight-icon" rotation="-60 0 0" scale="1.5 1.5 1.5"></a-image>\n      <a-text value="Entrance 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_CENTER_TO_C1"\n      to="BB_SEMI_C1"\n      position="-8.45 0.22 3.76"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="2 2 2"\n      ></a-image>\n      <a-text value="Corner 1" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_CENTER_TO_C3"\n      to="BB_SEMI_C3"\n      position="8.54 0.35 -3.53"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Corner 3" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_CENTER_TO_O2"\n      to="BB_SEMI_O2"\n      position="6.77 0.65 6.27"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n        scale="1.5 1.5 1.5"\n      ></a-image>\n      <a-text value="Office 2" align="center" mixin="hotspot-bottom-text"></a-text>\n    </a-hotspot>'],
        BB_SEMI_C1: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_C1_TO_CENTER"\n      to="BB_SEMI_CENTER"\n      position="-4.07 0.62 10.20"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_C1_TO_O1"\n      to="BB_SEMI_O1"\n      position="-7.68 0.42 -7.86"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_C1_TO_C2"\n      to="BB_SEMI_C2"\n      position="3.89 0.46 -10.28"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Corner 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_SEMI_C2: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_C3_TO_C1"\n      to="BB_SEMI_C1"\n      position="-8.83 0.90 5.12"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Corner 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_SEMI_C3: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_C2_TO_CENTER"\n      to="BB_SEMI_CENTER"\n      position="-3.50 0.70 -9.34"\n      scale="2 2 2"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Factory Center"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_C2_TO_E2"\n      to="BB_SEMI_E2"\n      position="-7.62 0.62 6.45"\n      scale="1.5 1.5 1.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Entrance 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_C2_TO_O2"\n      to="BB_SEMI_O2"\n      position="-9.91 0.80 -1.06"\n      scale="1.5 1.5 1.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Office 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_SEMI_O1: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_O1_TO_C1"\n      to="BB_SEMI_C1"\n      position="-10.09 0.29 2.89"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Corner 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_O1_TO_E1"\n      to="BB_SEMI_E1"\n      position="9.71 -0.82 -3.91"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Entrance 1"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>'],
        BB_SEMI_O2: ['<a-hotspot\n      visible="false"\n      id="BB_SEMI_O2_TO_C2"\n      to="BB_SEMI_C2"\n      position="10.90 0.07 1.50"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Corner 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>', '<a-hotspot\n      visible="false"\n      id="BB_SEMI_O2_TO_E2"\n      to="BB_SEMI_E2"\n      position="-10.77 -0.31 -2.22"\n      scale="2.5 2.5 2.5"\n      look-at="[camera]"\n    >\n      <a-image\n        width="0.5"\n        height="0.5"\n        src="#hotspot-staight-icon"\n        rotation="-60 0 0"\n      ></a-image>\n      <a-text\n        value="Entrance 2"\n        align="center"\n        mixin="hotspot-bottom-text"\n      ></a-text>\n    </a-hotspot>']
      }
    };
    n(0);
    /*! @license is-dom-node v1.0.4
  
  Copyright 2018 Fisssion LLC.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  
  */
    var r = function (e) {
      return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    };
    /*! @license is-dom-node-list v1.2.1
  
  Copyright 2018 Fisssion LLC.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  
  */
    var a = function (e) {
      var t = Object.prototype.toString.call(e);
      return "object" == typeof window.NodeList ? e instanceof window.NodeList : null !== e && "object" == typeof e && "number" == typeof e.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && (0 === e.length || r(e[0]))
    };
    /*! @license Tealight v0.3.6
  
  Copyright 2018 Fisssion LLC.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  
  */
    var s = function (e, t) {
      if (void 0 === t && (t = document),
        e instanceof Array)
        return e.filter(r);
      if (r(e))
        return [e];
      if (a(e))
        return Array.prototype.slice.call(e);
      if ("string" == typeof e)
        try {
          var n = t.querySelectorAll(e);
          return Array.prototype.slice.call(n)
        } catch (e) {
          return []
        }
      return []
    };
    /*! @license Rematrix v0.3.0
  
  Copyright 2018 Julian Lloyd.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */
    function l(e) {
      if (e.constructor !== Array)
        throw new TypeError("Expected array.");
      if (16 === e.length)
        return e;
      if (6 === e.length) {
        var t = c();
        return t[0] = e[0],
          t[1] = e[1],
          t[4] = e[2],
          t[5] = e[3],
          t[12] = e[4],
          t[13] = e[5],
          t
      }
      throw new RangeError("Expected array with either 6 or 16 values.")
    }
    function c() {
      for (var e = [], t = 0; t < 16; t++)
        t % 5 == 0 ? e.push(1) : e.push(0);
      return e
    }
    function u(e, t) {
      for (var n = l(e), o = l(t), i = [], r = 0; r < 4; r++)
        for (var a = [n[r], n[r + 4], n[r + 8], n[r + 12]], s = 0; s < 4; s++) {
          var c = 4 * s
            , u = [o[c], o[c + 1], o[c + 2], o[c + 3]]
            , p = a[0] * u[0] + a[1] * u[1] + a[2] * u[2] + a[3] * u[3];
          i[r + c] = p
        }
      return i
    }
    function p(e) {
      if ("string" == typeof e) {
        var t = e.match(/matrix(3d)?\(([^)]+)\)/);
        if (t)
          return l(t[2].split(", ").map(parseFloat))
      }
      return c()
    }
    function d(e) {
      var t = Math.PI / 180 * e
        , n = c();
      return n[0] = n[5] = Math.cos(t),
        n[1] = n[4] = Math.sin(t),
        n[4] *= -1,
        n
    }
    function h(e, t) {
      var n = c();
      return n[0] = e,
        n[5] = "number" == typeof t ? t : e,
        n
    }
    /*! @license miniraf v1.0.0
  
  Copyright 2018 Fisssion LLC.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  
  */
    var f, y = (f = Date.now(),
      function (e) {
        var t = Date.now();
        t - f > 16 ? (f = t,
          e(t)) : setTimeout((function () {
            return y(e)
          }
          ), 0)
      }
    ), m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || y, g = {
      delay: 0,
      distance: "0",
      duration: 600,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      interval: 0,
      opacity: 0,
      origin: "bottom",
      rotate: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: 1,
      cleanup: !1,
      container: document.documentElement,
      desktop: !0,
      mobile: !0,
      reset: !1,
      useDelay: "always",
      viewFactor: 0,
      viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      afterReset: function () { },
      afterReveal: function () { },
      beforeReset: function () { },
      beforeReveal: function () { }
    };
    var v = {
      success: function () {
        document.documentElement.classList.add("sr"),
          document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", (function () {
            document.body.style.height = "100%"
          }
          ))
      },
      failure: function () {
        return document.documentElement.classList.remove("sr"),
        {
          clean: function () { },
          destroy: function () { },
          reveal: function () { },
          sync: function () { },
          get noop() {
            return !0
          }
        }
      }
    };
    function x(e) {
      return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e))
    }
    function _(e, t) {
      if (x(e))
        return Object.keys(e).forEach((function (n) {
          return t(e[n], n, e)
        }
        ));
      if (e instanceof Array)
        return e.forEach((function (n, o) {
          return t(n, o, e)
        }
        ));
      throw new TypeError("Expected either an array or object literal.")
    }
    function E(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;)
        t[n] = arguments[n + 1];
      if (this.constructor.debug && console) {
        var o = "%cScrollReveal: " + e;
        t.forEach((function (e) {
          return o += "\n — " + e
        }
        )),
          console.log(o, "color: #ea654b;")
      }
    }
    function b() {
      var e = this
        , t = {
          active: [],
          stale: []
        }
        , n = {
          active: [],
          stale: []
        }
        , o = {
          active: [],
          stale: []
        };
      try {
        _(s("[data-sr-id]"), (function (e) {
          var n = parseInt(e.getAttribute("data-sr-id"));
          t.active.push(n)
        }
        ))
      } catch (e) {
        throw e
      }
      _(this.store.elements, (function (e) {
        -1 === t.active.indexOf(e.id) && t.stale.push(e.id)
      }
      )),
        _(t.stale, (function (t) {
          return delete e.store.elements[t]
        }
        )),
        _(this.store.elements, (function (e) {
          -1 === o.active.indexOf(e.containerId) && o.active.push(e.containerId),
            e.hasOwnProperty("sequence") && -1 === n.active.indexOf(e.sequence.id) && n.active.push(e.sequence.id)
        }
        )),
        _(this.store.containers, (function (e) {
          -1 === o.active.indexOf(e.id) && o.stale.push(e.id)
        }
        )),
        _(o.stale, (function (t) {
          var n = e.store.containers[t].node;
          n.removeEventListener("scroll", e.delegate),
            n.removeEventListener("resize", e.delegate),
            delete e.store.containers[t]
        }
        )),
        _(this.store.sequences, (function (e) {
          -1 === n.active.indexOf(e.id) && n.stale.push(e.id)
        }
        )),
        _(n.stale, (function (t) {
          return delete e.store.sequences[t]
        }
        ))
    }
    function T(e) {
      var t, n = this;
      try {
        _(s(e), (function (e) {
          var o = e.getAttribute("data-sr-id");
          if (null !== o) {
            t = !0;
            var i = n.store.elements[o];
            i.callbackTimer && window.clearTimeout(i.callbackTimer.clock),
              e.setAttribute("style", i.styles.inline.generated),
              e.removeAttribute("data-sr-id"),
              delete n.store.elements[o]
          }
        }
        ))
      } catch (e) {
        return E.call(this, "Clean failed.", e.message)
      }
      if (t)
        try {
          b.call(this)
        } catch (e) {
          return E.call(this, "Clean failed.", e.message)
        }
    }
    function w() {
      var e = this;
      _(this.store.elements, (function (e) {
        e.node.setAttribute("style", e.styles.inline.generated),
          e.node.removeAttribute("data-sr-id")
      }
      )),
        _(this.store.containers, (function (t) {
          var n = t.node === document.documentElement ? window : t.node;
          n.removeEventListener("scroll", e.delegate),
            n.removeEventListener("resize", e.delegate)
        }
        )),
        this.store = {
          containers: {},
          elements: {},
          history: [],
          sequences: {}
        }
    }
    var O = function () {
      var e = {}
        , t = document.documentElement.style;
      function n(n, o) {
        if (void 0 === o && (o = t),
          n && "string" == typeof n) {
          if (e[n])
            return e[n];
          if ("string" == typeof o[n])
            return e[n] = n;
          if ("string" == typeof o["-webkit-" + n])
            return e[n] = "-webkit-" + n;
          throw new RangeError('Unable to find "' + n + '" style property.')
        }
        throw new TypeError("Expected a string.")
      }
      return n.clearCache = function () {
        return e = {}
      }
        ,
        n
    }();
    function j(e) {
      var t = window.getComputedStyle(e.node)
        , n = t.position
        , o = e.config
        , i = {}
        , r = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
      i.computed = r ? r.map((function (e) {
        return e.trim()
      }
      )).join("; ") + ";" : "",
        i.generated = r.some((function (e) {
          return e.match(/visibility\s?:\s?visible/i)
        }
        )) ? i.computed : r.concat(["visibility: visible"]).map((function (e) {
          return e.trim()
        }
        )).join("; ") + ";";
      var a, s, l, f = parseFloat(t.opacity), y = isNaN(parseFloat(o.opacity)) ? parseFloat(t.opacity) : parseFloat(o.opacity), m = {
        computed: f !== y ? "opacity: " + f + ";" : "",
        generated: f !== y ? "opacity: " + y + ";" : ""
      }, g = [];
      if (parseFloat(o.distance)) {
        var v = "top" === o.origin || "bottom" === o.origin ? "Y" : "X"
          , x = o.distance;
        "top" !== o.origin && "left" !== o.origin || (x = /^-/.test(x) ? x.substr(1) : "-" + x);
        var _ = x.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g)
          , E = _[0];
        switch (_[1]) {
          case "em":
            x = parseInt(t.fontSize) * E;
            break;
          case "px":
            x = E;
            break;
          case "%":
            x = "Y" === v ? e.node.getBoundingClientRect().height * E / 100 : e.node.getBoundingClientRect().width * E / 100;
            break;
          default:
            throw new RangeError("Unrecognized or missing distance unit.")
        }
        "Y" === v ? g.push(function (e) {
          var t = c();
          return t[13] = e,
            t
        }(x)) : g.push(function (e) {
          var t = c();
          return t[12] = e,
            t
        }(x))
      }
      o.rotate.x && g.push((a = o.rotate.x,
        s = Math.PI / 180 * a,
        (l = c())[5] = l[10] = Math.cos(s),
        l[6] = l[9] = Math.sin(s),
        l[9] *= -1,
        l)),
        o.rotate.y && g.push(function (e) {
          var t = Math.PI / 180 * e
            , n = c();
          return n[0] = n[10] = Math.cos(t),
            n[2] = n[8] = Math.sin(t),
            n[2] *= -1,
            n
        }(o.rotate.y)),
        o.rotate.z && g.push(d(o.rotate.z)),
        1 !== o.scale && (0 === o.scale ? g.push(h(2e-4)) : g.push(h(o.scale)));
      var b = {};
      if (g.length) {
        b.property = O("transform"),
          b.computed = {
            raw: t[b.property],
            matrix: p(t[b.property])
          },
          g.unshift(b.computed.matrix);
        var T = g.reduce(u);
        b.generated = {
          initial: b.property + ": matrix3d(" + T.join(", ") + ");",
          final: b.property + ": matrix3d(" + b.computed.matrix.join(", ") + ");"
        }
      } else
        b.generated = {
          initial: "",
          final: ""
        };
      var w = {};
      if (m.generated || b.generated.initial) {
        w.property = O("transition"),
          w.computed = t[w.property],
          w.fragments = [];
        var j = o.delay
          , M = o.duration
          , C = o.easing;
        m.generated && w.fragments.push({
          delayed: "opacity " + M / 1e3 + "s " + C + " " + j / 1e3 + "s",
          instant: "opacity " + M / 1e3 + "s " + C + " 0s"
        }),
          b.generated.initial && w.fragments.push({
            delayed: b.property + " " + M / 1e3 + "s " + C + " " + j / 1e3 + "s",
            instant: b.property + " " + M / 1e3 + "s " + C + " 0s"
          }),
          w.computed && !w.computed.match(/all 0s|none 0s/) && w.fragments.unshift({
            delayed: w.computed,
            instant: w.computed
          });
        var R = w.fragments.reduce((function (e, t, n) {
          return e.delayed += 0 === n ? t.delayed : ", " + t.delayed,
            e.instant += 0 === n ? t.instant : ", " + t.instant,
            e
        }
        ), {
          delayed: "",
          instant: ""
        });
        w.generated = {
          delayed: w.property + ": " + R.delayed + ";",
          instant: w.property + ": " + R.instant + ";"
        }
      } else
        w.generated = {
          delayed: "",
          instant: ""
        };
      return {
        inline: i,
        opacity: m,
        position: n,
        transform: b,
        transition: w
      }
    }
    function M(e, t) {
      void 0 === t && (t = {});
      var n = t.pristine || this.pristine
        , o = "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen
        , i = e.visible && !e.revealed
        , r = !e.visible && e.revealed && e.config.reset;
      return t.reveal || i ? C.call(this, e, o) : t.reset || r ? R.call(this, e) : void 0
    }
    function C(e, t) {
      var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
      t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant),
        e.revealed = e.seen = !0,
        e.node.setAttribute("style", n.filter((function (e) {
          return "" !== e
        }
        )).join(" ")),
        B.call(this, e, t)
    }
    function R(e) {
      var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
      e.revealed = !1,
        e.node.setAttribute("style", t.filter((function (e) {
          return "" !== e
        }
        )).join(" ")),
        B.call(this, e)
    }
    function B(e, t) {
      var n = this
        , o = t ? e.config.duration + e.config.delay : e.config.duration
        , i = e.revealed ? e.config.beforeReveal : e.config.beforeReset
        , r = e.revealed ? e.config.afterReveal : e.config.afterReset
        , a = 0;
      e.callbackTimer && (a = Date.now() - e.callbackTimer.start,
        window.clearTimeout(e.callbackTimer.clock)),
        i(e.node),
        e.callbackTimer = {
          start: Date.now(),
          clock: window.setTimeout((function () {
            r(e.node),
              e.callbackTimer = null,
              e.revealed && !e.config.reset && e.config.cleanup && T.call(n, e.node)
          }
          ), o - a)
        }
    }
    var D, k = (D = 0,
      function () {
        return D++
      }
    );
    function S(e, t) {
      if (void 0 === t && (t = this.pristine),
        !e.visible && e.revealed && e.config.reset)
        return M.call(this, e, {
          reset: !0
        });
      var n = this.store.sequences[e.sequence.id]
        , o = e.sequence.index;
      if (n) {
        var i = new P(n, "visible", this.store)
          , r = new P(n, "revealed", this.store);
        if (n.models = {
          visible: i,
          revealed: r
        },
          !r.body.length) {
          var a = n.members[i.body[0]]
            , s = this.store.elements[a];
          if (s)
            return A.call(this, n, i.body[0], -1, t),
              A.call(this, n, i.body[0], 1, t),
              M.call(this, s, {
                reveal: !0,
                pristine: t
              })
        }
        if (!n.blocked.head && o === [].concat(r.head).pop() && o >= [].concat(i.body).shift())
          return A.call(this, n, o, -1, t),
            M.call(this, e, {
              reveal: !0,
              pristine: t
            });
        if (!n.blocked.foot && o === [].concat(r.foot).shift() && o <= [].concat(i.body).pop())
          return A.call(this, n, o, 1, t),
            M.call(this, e, {
              reveal: !0,
              pristine: t
            })
      }
    }
    function I(e) {
      var t = Math.abs(e);
      if (isNaN(t))
        throw new RangeError("Invalid sequence interval.");
      this.id = k(),
        this.interval = Math.max(t, 16),
        this.members = [],
        this.models = {},
        this.blocked = {
          head: !1,
          foot: !1
        }
    }
    function P(e, t, n) {
      var o = this;
      this.head = [],
        this.body = [],
        this.foot = [],
        _(e.members, (function (e, i) {
          var r = n.elements[e];
          r && r[t] && o.body.push(i)
        }
        )),
        this.body.length && _(e.members, (function (e, i) {
          var r = n.elements[e];
          r && !r[t] && (i < o.body[0] ? o.head.push(i) : o.foot.push(i))
        }
        ))
    }
    function A(e, t, n, o) {
      var i = this
        , r = ["head", null, "foot"][1 + n]
        , a = e.members[t + n]
        , s = this.store.elements[a];
      e.blocked[r] = !0,
        setTimeout((function () {
          e.blocked[r] = !1,
            s && S.call(i, s, o)
        }
        ), e.interval)
    }
    function N() {
      var e = this;
      b.call(this),
        _(this.store.elements, (function (e) {
          var t = [e.styles.inline.generated];
          e.visible ? (t.push(e.styles.opacity.computed),
            t.push(e.styles.transform.generated.final),
            e.revealed = !0) : (t.push(e.styles.opacity.generated),
              t.push(e.styles.transform.generated.initial),
              e.revealed = !1),
            e.node.setAttribute("style", t.filter((function (e) {
              return "" !== e
            }
            )).join(" "))
        }
        )),
        _(this.store.containers, (function (t) {
          var n = t.node === document.documentElement ? window : t.node;
          n.addEventListener("scroll", e.delegate),
            n.addEventListener("resize", e.delegate)
        }
        )),
        this.delegate(),
        this.initTimeout = null
    }
    function H(e) {
      return void 0 === e && (e = navigator.userAgent),
        /Android|iPhone|iPad|iPod/i.test(e)
    }
    function L(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;)
        t[n] = arguments[n + 1];
      if (x(e))
        return _(t, (function (t) {
          _(t, (function (t, n) {
            x(t) ? (e[n] && x(e[n]) || (e[n] = {}),
              L(e[n], t)) : e[n] = t
          }
          ))
        }
        )),
          e;
      throw new TypeError("Target must be an object literal.")
    }
    function V(e, t, n) {
      var o = this;
      void 0 === t && (t = {}),
        void 0 === n && (n = !1);
      var i, r = [], a = t.interval || g.interval;
      try {
        a && (i = new I(a));
        var l = s(e);
        if (!l.length)
          throw new Error("Invalid reveal target.");
        var c = l.reduce((function (e, n) {
          var a = {}
            , l = n.getAttribute("data-sr-id");
          l ? (L(a, o.store.elements[l]),
            a.node.setAttribute("style", a.styles.inline.computed)) : (a.id = k(),
              a.node = n,
              a.seen = !1,
              a.revealed = !1,
              a.visible = !1);
          var c = L({}, a.config || o.defaults, t);
          if (!c.mobile && H() || !c.desktop && !H())
            return l && T.call(o, a),
              e;
          var u, p = s(c.container)[0];
          if (!p)
            throw new Error("Invalid container.");
          return p.contains(n) ? (null === (u = function (e) {
            var t = []
              , n = arguments.length - 1;
            for (; n-- > 0;)
              t[n] = arguments[n + 1];
            var o = null;
            return _(t, (function (t) {
              _(t, (function (t) {
                null === o && t.node === e && (o = t.id)
              }
              ))
            }
            )),
              o
          }(p, r, o.store.containers)) && (u = k(),
            r.push({
              id: u,
              node: p
            })),
            a.config = c,
            a.containerId = u,
            a.styles = j(a),
            i && (a.sequence = {
              id: i.id,
              index: i.members.length
            },
              i.members.push(a.id)),
            e.push(a),
            e) : e
        }
        ), []);
        _(c, (function (e) {
          o.store.elements[e.id] = e,
            e.node.setAttribute("data-sr-id", e.id)
        }
        ))
      } catch (e) {
        return E.call(this, "Reveal failed.", e.message)
      }
      _(r, (function (e) {
        o.store.containers[e.id] = {
          id: e.id,
          node: e.node
        }
      }
      )),
        i && (this.store.sequences[i.id] = i),
        !0 !== n && (this.store.history.push({
          target: e,
          options: t
        }),
          this.initTimeout && window.clearTimeout(this.initTimeout),
          this.initTimeout = window.setTimeout(N.bind(this), 0))
    }
    function F() {
      var e = this;
      _(this.store.history, (function (t) {
        V.call(e, t.target, t.options, !0)
      }
      )),
        N.call(this)
    }
    var U = Math.sign || function (e) {
      return (e > 0) - (e < 0) || +e
    }
      ;
    function q(e, t) {
      var n = t ? e.node.clientHeight : e.node.offsetHeight
        , o = t ? e.node.clientWidth : e.node.offsetWidth
        , i = 0
        , r = 0
        , a = e.node;
      do {
        isNaN(a.offsetTop) || (i += a.offsetTop),
          isNaN(a.offsetLeft) || (r += a.offsetLeft),
          a = a.offsetParent
      } while (a); return {
        bounds: {
          top: i,
          right: r + o,
          bottom: i + n,
          left: r
        },
        height: n,
        width: o
      }
    }
    function z(e) {
      var t, n;
      return e.node === document.documentElement ? (t = window.pageYOffset,
        n = window.pageXOffset) : (t = e.node.scrollTop,
          n = e.node.scrollLeft),
      {
        top: t,
        left: n
      }
    }
    function W(e) {
      void 0 === e && (e = {});
      var t = this.store.containers[e.containerId];
      if (t) {
        var n = Math.max(0, Math.min(1, e.config.viewFactor))
          , o = e.config.viewOffset
          , i = e.geometry.bounds.top + e.geometry.height * n
          , r = e.geometry.bounds.right - e.geometry.width * n
          , a = e.geometry.bounds.bottom - e.geometry.height * n
          , s = e.geometry.bounds.left + e.geometry.width * n
          , l = t.geometry.bounds.top + t.scroll.top + o.top
          , c = t.geometry.bounds.right + t.scroll.left - o.right
          , u = t.geometry.bounds.bottom + t.scroll.top - o.bottom
          , p = t.geometry.bounds.left + t.scroll.left + o.left;
        return i < u && r > p && a > l && s < c || "fixed" === e.styles.position
      }
    }
    function X(e, t) {
      var n = this;
      void 0 === e && (e = {
        type: "init"
      }),
        void 0 === t && (t = this.store.elements),
        m((function () {
          var o = "init" === e.type || "resize" === e.type;
          _(n.store.containers, (function (e) {
            o && (e.geometry = q.call(n, e, !0));
            var t = z.call(n, e);
            e.scroll && (e.direction = {
              x: U(t.left - e.scroll.left),
              y: U(t.top - e.scroll.top)
            }),
              e.scroll = t
          }
          )),
            _(t, (function (e) {
              o && (e.geometry = q.call(n, e)),
                e.visible = W.call(n, e)
            }
            )),
            _(t, (function (e) {
              e.sequence ? S.call(n, e) : M.call(n, e)
            }
            )),
            n.pristine = !1
        }
        ))
    }
    var G, Q, Y, J, K, Z, ee, te;
    function ne(e) {
      var t;
      if (void 0 === e && (e = {}),
        void 0 === this || Object.getPrototypeOf(this) !== ne.prototype)
        return new ne(e);
      if (!ne.isSupported())
        return E.call(this, "Instantiation failed.", "This browser is not supported."),
          v.failure();
      try {
        t = L({}, Z || g, e)
      } catch (e) {
        return E.call(this, "Invalid configuration.", e.message),
          v.failure()
      }
      try {
        if (!s(t.container)[0])
          throw new Error("Invalid container.")
      } catch (e) {
        return E.call(this, e.message),
          v.failure()
      }
      return !(Z = t).mobile && H() || !Z.desktop && !H() ? (E.call(this, "This device is disabled.", "desktop: " + Z.desktop, "mobile: " + Z.mobile),
        v.failure()) : (v.success(),
          this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {}
          },
          this.pristine = !0,
          G = G || X.bind(this),
          Q = Q || w.bind(this),
          Y = Y || V.bind(this),
          J = J || T.bind(this),
          K = K || F.bind(this),
          Object.defineProperty(this, "delegate", {
            get: function () {
              return G
            }
          }),
          Object.defineProperty(this, "destroy", {
            get: function () {
              return Q
            }
          }),
          Object.defineProperty(this, "reveal", {
            get: function () {
              return Y
            }
          }),
          Object.defineProperty(this, "clean", {
            get: function () {
              return J
            }
          }),
          Object.defineProperty(this, "sync", {
            get: function () {
              return K
            }
          }),
          Object.defineProperty(this, "defaults", {
            get: function () {
              return Z
            }
          }),
          Object.defineProperty(this, "version", {
            get: function () {
              return "4.0.6"
            }
          }),
          Object.defineProperty(this, "noop", {
            get: function () {
              return !1
            }
          }),
          te || (te = this))
    }
    ne.isSupported = function () {
      return function () {
        var e = document.documentElement.style;
        return "transform" in e || "WebkitTransform" in e
      }() && function () {
        var e = document.documentElement.style;
        return "transition" in e || "WebkitTransition" in e
      }()
    }
      ,
      Object.defineProperty(ne, "debug", {
        get: function () {
          return ee || !1
        },
        set: function (e) {
          return ee = "boolean" == typeof e ? e : ee
        }
      }),
      ne();
    var oe = ne;
    n(1);
    window.sr = oe(),
      window.$ = n(1);
    const ie = n(4);
    AFRAME.registerPrimitive("a-tour", {
      defaultComponents: {
        tour: {}
      }
    }),
      AFRAME.registerComponent("tour", {
        schema: {
          current_pano_id: {
            type: "string"
          },
          previous_pano_ids: {
            type: "array"
          }
        },
        init: function () {
          this.sky = document.createElement("a-sky"),
            this.sky.setAttribute("id", "sky"),
            this.sky.setAttribute("animation__fadein", "property:material.opacity;to:1;dur:500;startEvents:skyFadeIn"),
            this.sky.setAttribute("animation__fadeout", "property:material.opacity;to:0;dur:1000;startEvents:skyFadeOut"),
            this.el.appendChild(this.sky);
          var e = document.getElementById("camera")
            , t = this.setCamera.bind(this)
            , n = this.setHotspots.bind(this)
            , o = this.setHotspotsVisible.bind(this);
          e.addEventListener("animationcomplete", (function (e) {
            if ("animation__zoomin" == e.detail.name) {
              document.querySelector("a-tour").components.tour.updateSkyImage()
            }
          }
          )),
            this.sky.addEventListener("materialtextureloaded", (function (i) {
              (e = document.getElementById("camera")).emit("zoomout"),
                sky.emit("skyFadeIn"),
                t(),
                n(),
                $(".intro").is(":visible") || setTimeout(o, 2e3),
                window.sr.reveal(".heading-content", {
                  delay: 100,
                  interval: 50,
                  origin: "left",
                  distance: "50px"
                }),
                window.sr.reveal(".scrolldown-indicator .sv", {
                  delay: 150,
                  interval: 50,
                  origin: "left",
                  distance: "50px"
                }),
                window.sr.reveal(".highlight .point", {
                  interval: 50,
                  origin: "bottom",
                  distance: "50px"
                })
            }
            )),
            this.loadSceneId(this.getInitialViewId(), !0)
        },
        getInitialViewId: function () {
          return "myphuoc" == this.el.getAttribute("name") ? "MP3_OVERVIEW" : "BB_OVERVIEW"
        },
        loadSceneId: function (e, t) {
          const n = this.el.querySelector("a-panorama#main");
          n.components.panorama.updateData(e),
            this.clearHotspots(),
            this.el.setAttribute("tour", "current_pano_id", n.getAttribute("view-id")),
            this.loadImage(t),
            t || ("MP3_OVERVIEW" !== e ? $(".amenities").hide() : $(".amenities").fadeIn()),
            "MP3_SEMI_DETACHED" === e && oe().reveal(".skip-video-button", {
              scale: .5,
              reset: !0
            })
        },
        loadImage: function (e) {
          let t = this.sky
            , n = document.getElementById("camera");
          e ? this.updateSkyImage() : (n.emit("zoomin"),
            t.emit("skyFadeOut"),
            $(".spinner").show())
        },
        updateSkyImage: function () {
          let e = this.data.current_pano_id
            , t = this.el.querySelector("a-panorama#main").components.panorama.data.src;
          this.sky.setAttribute("src", t),
            window.displayDimention(e),
            window.changeViewName(e)
        },
        setHotspots: function () {
          let e = this.data.current_pano_id;
          i[e].forEach((function (e) {
            $(e).appendTo("#hotspot-group")
          }
          ))
        },
        setHotspotsVisible: function () {
          $("#hotspot-group").children().attr("visible", !0)
        },
        clearHotspots: function () {
          $("#hotspot-group").empty()
        },
        setCamera: function () {
          this.data.current_pano_id;
          let e = this.el.querySelector("a-panorama#main").components.panorama.data
            , t = this.el.sceneEl.camera.el;
          t.parentEl.setAttribute("rotation", e.rotation),
            t.parentEl.setAttribute("position", e.position);
          let n = e.xvalue ? parseFloat(e.xvalue) : 0;
          t.components["look-controls"].pitchObject.rotation.x = n,
            t.components["look-controls"].yawObject.rotation.y = 0
        },
        pushPreviousPanoIds: function () {
          "" != this.data.current_pano_id && this.el.setAttribute("tour", "previous_pano_ids", [...this.data.previous_pano_ids, this.data.current_pano_id])
        }
      }),
      AFRAME.registerPrimitive("a-panorama", {
        defaultComponents: {
          panorama: {}
        }
      }),
      AFRAME.registerComponent("panorama", {
        schema: {
          rotation: {
            type: "vec3"
          },
          position: {
            type: "vec3"
          },
          xvalue: {
            type: "number",
            default: 0
          },
          src: {
            type: "string"
          },
          next: {
            type: "string",
            default: ""
          },
          viewId: {
            type: "string"
          }
        },
        updateData: function (e) {
          let t = o[e];
          this.el.setAttribute("panorama", t),
            this.el.setAttribute("view-id", e)
        }
      }),
      AFRAME.registerPrimitive("a-hotspot", {
        defaultComponents: {
          hotspot: {}
        },
        mappings: {
          for: "hotspot.for",
          to: "hotspot.to",
          clickable: "hotspot.clickable",
          "enable-video": "hotspot.enable-video"
        }
      }),
      AFRAME.registerComponent("hotspot", {
        schema: {
          for: {
            type: "string"
          },
          to: {
            type: "string"
          },
          "enable-video": {
            type: "boolean",
            default: !1
          },
          clickable: {
            type: "boolean",
            default: !0
          },
          enable: {
            type: "boolean",
            default: !1
          },
          positioning: {
            type: "boolean",
            default: !1
          }
        },
        init: function () {
          this.tour = document.querySelector("a-tour"),
            this.data.clickable && this.el.addEventListener("click", this.handleClick.bind(this))
        },
        handleClick: function () {
          if (!this.data.positioning) {
            var e = this.tour.components.tour;
            e.pushPreviousPanoIds(),
              e.loadSceneId(this.data.to, !1)
          }
        }
      }),
      $((function () {
        var e;
        ie.replace(),
          $(".nav .menu-toggler").mouseenter((function () {
            $(".extended-nav").css("display", "flex"),
              $("#overlay").show()
          }
          )),
          $(".extended-nav .menu-toggler, #overlay, .intro").click((function () {
            $(".extended-nav").css("display", "none"),
              $("#overlay").hide()
          }
          )),
          $(".extended-nav").mouseover((function () {
            clearTimeout(e)
          }
          )).mouseleave((function () {
            e = setTimeout((function () {
              $(".extended-nav").css("display", "none"),
                $("#overlay").hide()
            }
            ), 500)
          }
          ))
      }
      ))
    $((function () {
      var e;
      ie.replace(),
        $("#phone-hover").mouseenter((function () {

          $(".extended-phone").css("top", $(this).position().top);
          $(".extended-phone").css("display", "flex")
        }
        )),
        $(".extended-phone .menu-toggler, #overlay, .intro").click((function () {
          $(".extended-phone").css("display", "none")
        }
        )),
        $(".extended-phone,#phone-hover").mouseover((function () {
          clearTimeout(e)
        }
        )).mouseleave((function () {
          e = setTimeout((function () {
            $(".extended-phone").css("display", "none")
          }
          ), 500)
        }
        ))
    }
    ))
    $((function () {
      var e;
      ie.replace(),
        $("#mail-hover").mouseenter((function () {
          $(".extended-mail").css("top", $(this).position().top);
          $(".extended-mail").css("display", "flex")
        }
        )),
        $(".extended-mail .menu-toggler, #overlay, .intro").click((function () {
          $(".extended-mail").css("display", "none")
        }
        )),
        $(".extended-mail,#mail-hover").mouseover((function () {
          clearTimeout(e)
        }
        )).mouseleave((function () {
          e = setTimeout((function () {
            $(".extended-mail").css("display", "none")
          }
          ), 500)
        }
        ))
    }
    ))
  }
]);