const xe = (l) => (f, h, d) => {
  const w = d.value;
  d.value = (...y) => {
    const [p, b] = y, m = p.headers;
    if (m && m.authorization === `Bearer ${l}`)
      return w.apply(void 0, y);
    b.status(401).json({ error: "Not Authorized" });
  };
};
var te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ne;
(function(l) {
  (function(f) {
    var h = typeof te == "object" ? te : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), d = w(l);
    typeof h.Reflect > "u" ? h.Reflect = l : d = w(h.Reflect, d), f(d);
    function w(y, p) {
      return function(b, m) {
        typeof y[b] != "function" && Object.defineProperty(y, b, { configurable: !0, writable: !0, value: m }), p && p(b, m);
      };
    }
  })(function(f) {
    var h = Object.prototype.hasOwnProperty, d = typeof Symbol == "function", w = d && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", y = d && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", p = typeof Object.create == "function", b = { __proto__: [] } instanceof Array, m = !p && !b, O = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: p ? function() {
        return B(/* @__PURE__ */ Object.create(null));
      } : b ? function() {
        return B({ __proto__: null });
      } : function() {
        return B({});
      },
      has: m ? function(e, t) {
        return h.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: m ? function(e, t) {
        return h.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, A = Object.getPrototypeOf(Function), q = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", S = !q && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ge(), I = !q && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), D = !q && typeof WeakMap == "function" ? WeakMap : Oe(), k = new D();
    function R(e, t, n, r) {
      if (v(n)) {
        if (!J(e))
          throw new TypeError();
        if (!X(t))
          throw new TypeError();
        return le(e, t);
      } else {
        if (!J(e))
          throw new TypeError();
        if (!_(t))
          throw new TypeError();
        if (!_(r) && !v(r) && !j(r))
          throw new TypeError();
        return j(r) && (r = void 0), n = T(n), he(e, t, n, r);
      }
    }
    f("decorate", R);
    function E(e, t) {
      function n(r, a) {
        if (!_(r))
          throw new TypeError();
        if (!v(a) && !we(a))
          throw new TypeError();
        z(e, t, r, a);
      }
      return n;
    }
    f("metadata", E);
    function F(e, t, n, r) {
      if (!_(n))
        throw new TypeError();
      return v(r) || (r = T(r)), z(e, t, n, r);
    }
    f("defineMetadata", F);
    function ae(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return v(n) || (n = T(n)), N(e, t, n);
    }
    f("hasMetadata", ae);
    function oe(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return v(n) || (n = T(n)), W(e, t, n);
    }
    f("hasOwnMetadata", oe);
    function ie(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return v(n) || (n = T(n)), $(e, t, n);
    }
    f("getMetadata", ie);
    function ue(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return v(n) || (n = T(n)), H(e, t, n);
    }
    f("getOwnMetadata", ue);
    function fe(e, t) {
      if (!_(e))
        throw new TypeError();
      return v(t) || (t = T(t)), Q(e, t);
    }
    f("getMetadataKeys", fe);
    function se(e, t) {
      if (!_(e))
        throw new TypeError();
      return v(t) || (t = T(t)), Y(e, t);
    }
    f("getOwnMetadataKeys", se);
    function ce(e, t, n) {
      if (!_(t))
        throw new TypeError();
      v(n) || (n = T(n));
      var r = U(
        t,
        n,
        /*Create*/
        !1
      );
      if (v(r) || !r.delete(e))
        return !1;
      if (r.size > 0)
        return !0;
      var a = k.get(t);
      return a.delete(n), a.size > 0 || k.delete(t), !0;
    }
    f("deleteMetadata", ce);
    function le(e, t) {
      for (var n = e.length - 1; n >= 0; --n) {
        var r = e[n], a = r(t);
        if (!v(a) && !j(a)) {
          if (!X(a))
            throw new TypeError();
          t = a;
        }
      }
      return t;
    }
    function he(e, t, n, r) {
      for (var a = e.length - 1; a >= 0; --a) {
        var M = e[a], i = M(t, n, r);
        if (!v(i) && !j(i)) {
          if (!_(i))
            throw new TypeError();
          r = i;
        }
      }
      return r;
    }
    function U(e, t, n) {
      var r = k.get(e);
      if (v(r)) {
        if (!n)
          return;
        r = new S(), k.set(e, r);
      }
      var a = r.get(t);
      if (v(a)) {
        if (!n)
          return;
        a = new S(), r.set(t, a);
      }
      return a;
    }
    function N(e, t, n) {
      var r = W(e, t, n);
      if (r)
        return !0;
      var a = L(t);
      return j(a) ? !1 : N(e, a, n);
    }
    function W(e, t, n) {
      var r = U(
        t,
        n,
        /*Create*/
        !1
      );
      return v(r) ? !1 : pe(r.has(e));
    }
    function $(e, t, n) {
      var r = W(e, t, n);
      if (r)
        return H(e, t, n);
      var a = L(t);
      if (!j(a))
        return $(e, a, n);
    }
    function H(e, t, n) {
      var r = U(
        t,
        n,
        /*Create*/
        !1
      );
      if (!v(r))
        return r.get(e);
    }
    function z(e, t, n, r) {
      var a = U(
        n,
        r,
        /*Create*/
        !0
      );
      a.set(e, t);
    }
    function Q(e, t) {
      var n = Y(e, t), r = L(e);
      if (r === null)
        return n;
      var a = Q(r, t);
      if (a.length <= 0)
        return n;
      if (n.length <= 0)
        return a;
      for (var M = new I(), i = [], u = 0, o = n; u < o.length; u++) {
        var s = o[u], c = M.has(s);
        c || (M.add(s), i.push(s));
      }
      for (var x = 0, ee = a; x < ee.length; x++) {
        var s = ee[x], c = M.has(s);
        c || (M.add(s), i.push(s));
      }
      return i;
    }
    function Y(e, t) {
      var n = [], r = U(
        e,
        t,
        /*Create*/
        !1
      );
      if (v(r))
        return n;
      for (var a = r.keys(), M = Me(a), i = 0; ; ) {
        var u = be(M);
        if (!u)
          return n.length = i, n;
        var o = me(u);
        try {
          n[i] = o;
        } catch (s) {
          try {
            ke(M);
          } finally {
            throw s;
          }
        }
        i++;
      }
    }
    function Z(e) {
      if (e === null)
        return 1;
      switch (typeof e) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return e === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function v(e) {
      return e === void 0;
    }
    function j(e) {
      return e === null;
    }
    function de(e) {
      return typeof e == "symbol";
    }
    function _(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function ye(e, t) {
      switch (Z(e)) {
        case 0:
          return e;
        case 1:
          return e;
        case 2:
          return e;
        case 3:
          return e;
        case 4:
          return e;
        case 5:
          return e;
      }
      var n = t === 3 ? "string" : t === 5 ? "number" : "default", r = K(e, w);
      if (r !== void 0) {
        var a = r.call(e, n);
        if (_(a))
          throw new TypeError();
        return a;
      }
      return ve(e, n === "default" ? "number" : n);
    }
    function ve(e, t) {
      if (t === "string") {
        var n = e.toString;
        if (P(n)) {
          var r = n.call(e);
          if (!_(r))
            return r;
        }
        var a = e.valueOf;
        if (P(a)) {
          var r = a.call(e);
          if (!_(r))
            return r;
        }
      } else {
        var a = e.valueOf;
        if (P(a)) {
          var r = a.call(e);
          if (!_(r))
            return r;
        }
        var M = e.toString;
        if (P(M)) {
          var r = M.call(e);
          if (!_(r))
            return r;
        }
      }
      throw new TypeError();
    }
    function pe(e) {
      return !!e;
    }
    function _e(e) {
      return "" + e;
    }
    function T(e) {
      var t = ye(
        e,
        3
        /* String */
      );
      return de(t) ? t : _e(t);
    }
    function J(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function P(e) {
      return typeof e == "function";
    }
    function X(e) {
      return typeof e == "function";
    }
    function we(e) {
      switch (Z(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function K(e, t) {
      var n = e[t];
      if (n != null) {
        if (!P(n))
          throw new TypeError();
        return n;
      }
    }
    function Me(e) {
      var t = K(e, y);
      if (!P(t))
        throw new TypeError();
      var n = t.call(e);
      if (!_(n))
        throw new TypeError();
      return n;
    }
    function me(e) {
      return e.value;
    }
    function be(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function ke(e) {
      var t = e.return;
      t && t.call(e);
    }
    function L(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === A || t !== A)
        return t;
      var n = e.prototype, r = n && Object.getPrototypeOf(n);
      if (r == null || r === Object.prototype)
        return t;
      var a = r.constructor;
      return typeof a != "function" || a === e ? t : a;
    }
    function ge() {
      var e = {}, t = [], n = (
        /** @class */
        function() {
          function i(u, o, s) {
            this._index = 0, this._keys = u, this._values = o, this._selector = s;
          }
          return i.prototype["@@iterator"] = function() {
            return this;
          }, i.prototype[y] = function() {
            return this;
          }, i.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var o = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: o, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, i.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), u;
          }, i.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: u, done: !0 };
          }, i;
        }()
      );
      return (
        /** @class */
        function() {
          function i() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(i.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, i.prototype.get = function(u) {
            var o = this._find(
              u,
              /*insert*/
              !1
            );
            return o >= 0 ? this._values[o] : void 0;
          }, i.prototype.set = function(u, o) {
            var s = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[s] = o, this;
          }, i.prototype.delete = function(u) {
            var o = this._find(
              u,
              /*insert*/
              !1
            );
            if (o >= 0) {
              for (var s = this._keys.length, c = o + 1; c < s; c++)
                this._keys[c - 1] = this._keys[c], this._values[c - 1] = this._values[c];
              return this._keys.length--, this._values.length--, u === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, i.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, i.prototype.keys = function() {
            return new n(this._keys, this._values, r);
          }, i.prototype.values = function() {
            return new n(this._keys, this._values, a);
          }, i.prototype.entries = function() {
            return new n(this._keys, this._values, M);
          }, i.prototype["@@iterator"] = function() {
            return this.entries();
          }, i.prototype[y] = function() {
            return this.entries();
          }, i.prototype._find = function(u, o) {
            return this._cacheKey !== u && (this._cacheIndex = this._keys.indexOf(this._cacheKey = u)), this._cacheIndex < 0 && o && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, i;
        }()
      );
      function r(i, u) {
        return i;
      }
      function a(i, u) {
        return u;
      }
      function M(i, u) {
        return [i, u];
      }
    }
    function Te() {
      return (
        /** @class */
        function() {
          function e() {
            this._map = new S();
          }
          return Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.has = function(t) {
            return this._map.has(t);
          }, e.prototype.add = function(t) {
            return this._map.set(t, t), this;
          }, e.prototype.delete = function(t) {
            return this._map.delete(t);
          }, e.prototype.clear = function() {
            this._map.clear();
          }, e.prototype.keys = function() {
            return this._map.keys();
          }, e.prototype.values = function() {
            return this._map.values();
          }, e.prototype.entries = function() {
            return this._map.entries();
          }, e.prototype["@@iterator"] = function() {
            return this.keys();
          }, e.prototype[y] = function() {
            return this.keys();
          }, e;
        }()
      );
    }
    function Oe() {
      var e = 16, t = O.create(), n = r();
      return (
        /** @class */
        function() {
          function o() {
            this._key = r();
          }
          return o.prototype.has = function(s) {
            var c = a(
              s,
              /*create*/
              !1
            );
            return c !== void 0 ? O.has(c, this._key) : !1;
          }, o.prototype.get = function(s) {
            var c = a(
              s,
              /*create*/
              !1
            );
            return c !== void 0 ? O.get(c, this._key) : void 0;
          }, o.prototype.set = function(s, c) {
            var x = a(
              s,
              /*create*/
              !0
            );
            return x[this._key] = c, this;
          }, o.prototype.delete = function(s) {
            var c = a(
              s,
              /*create*/
              !1
            );
            return c !== void 0 ? delete c[this._key] : !1;
          }, o.prototype.clear = function() {
            this._key = r();
          }, o;
        }()
      );
      function r() {
        var o;
        do
          o = "@@WeakMap@@" + u();
        while (O.has(t, o));
        return t[o] = !0, o;
      }
      function a(o, s) {
        if (!h.call(o, n)) {
          if (!s)
            return;
          Object.defineProperty(o, n, { value: O.create() });
        }
        return o[n];
      }
      function M(o, s) {
        for (var c = 0; c < s; ++c)
          o[c] = Math.random() * 255 | 0;
        return o;
      }
      function i(o) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(o)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(o)) : M(new Uint8Array(o), o) : M(new Array(o), o);
      }
      function u() {
        var o = i(e);
        o[6] = o[6] & 79 | 64, o[8] = o[8] & 191 | 128;
        for (var s = "", c = 0; c < e; ++c) {
          var x = o[c];
          (c === 4 || c === 6 || c === 8) && (s += "-"), x < 16 && (s += "0"), s += x.toString(16).toLowerCase();
        }
        return s;
      }
    }
    function B(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(ne || (ne = {}));
const Ie = (l = "") => (f) => {
  Reflect.defineMetadata("prefix", l, f), Reflect.hasMetadata("routes", f) || Reflect.defineMetadata("routes", [], f);
};
var C = /* @__PURE__ */ ((l) => (l.get = "get", l.post = "post", l.put = "put", l.delete = "delete", l))(C || {}), g = /* @__PURE__ */ ((l) => (l.param = "param", l.query = "query", l.req = "req", l.res = "res", l.body = "body", l))(g || {});
const G = (l) => (f) => (h, d, w) => {
  Reflect.hasMetadata("routes", h.constructor) || Reflect.defineMetadata("routes", [], h.constructor);
  const y = Reflect.getMetadata("routes", h.constructor);
  y.push({
    method: l,
    path: f,
    handlerName: d
  }), Reflect.defineMetadata("routes", y, h.constructor);
  const p = Reflect.getMetadata(g.req, h[d]), b = Reflect.getMetadata(g.res, h[d]), m = Reflect.getMetadata(g.param, h[d]), O = Reflect.getMetadata(g.query, h[d]), A = Reflect.getMetadata(g.body, h[d]), q = w.value;
  w.value = (...S) => {
    const [I, D] = S, k = [...S];
    if (p && (k[p.index] = I), b && (k[b.index] = D), m) {
      const { key: R, index: E } = m;
      k[E] = I.params[R];
    }
    if (O) {
      const { key: R, schema: E, index: F } = O;
      k[F] = R ? E.parse(I.query[R]) : E.parse(I.query);
    }
    if (A) {
      const { schema: R, index: E } = A;
      k[E] = R.parse(I.body);
    }
    return q.apply(void 0, k);
  };
}, Se = G(C.get), je = G(C.post), Pe = G(C.put), Ae = G(C.delete), V = (l) => (f) => (h, d, w) => {
  const y = h[d], p = {
    key: f == null ? void 0 : f.key,
    schema: f == null ? void 0 : f.schema,
    index: w
  };
  Reflect.defineMetadata(l, p, y);
}, re = (l) => (f, h, d) => {
  const w = f[h];
  Reflect.defineMetadata(l, { index: d }, w);
}, qe = V(g.param), Ue = V(g.query), Ce = re(g.req), Ge = re(g.res), De = V(g.body), Re = ["User"], Fe = (l) => (f, h, d) => {
  const w = d.value;
  d.value = (...y) => {
    const [, p] = y;
    if (Re.some((m) => m === l))
      return w.apply(void 0, y);
    p.status(403).json({ error: "Forbidden" });
  };
}, Ee = require("express"), We = (l) => {
  const f = Ee.Router();
  return l.forEach((h) => {
    const d = new h(), w = Reflect.getMetadata("prefix", h);
    Reflect.getMetadata("routes", h).forEach((p) => {
      f[p.method](`${w}${p.path}`, (b, m) => {
        d[p.handlerName](b, m);
      });
    });
  }), f;
};
export {
  xe as AuthGuard,
  De as Body,
  Ie as Controller,
  Ae as Delete,
  Se as Get,
  C as Method,
  qe as Param,
  g as Parameter,
  je as Post,
  Pe as Put,
  Ue as Query,
  Ce as Req,
  Ge as Res,
  Fe as RoleGuard,
  We as getRouter
};
