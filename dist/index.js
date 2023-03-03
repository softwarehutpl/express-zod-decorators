const Ae = (i) => (f, d, h) => {
  const M = h.value;
  h.value = (...y) => {
    const [p, m] = y, b = p.headers;
    if (b && b.authorization === `Bearer ${i}`)
      return M.apply(void 0, y);
    m.status(401).json({ error: "Not Authorized" });
  };
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(i) {
  (function(f) {
    var d = typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), h = M(i);
    typeof d.Reflect > "u" ? d.Reflect = i : h = M(d.Reflect, h), f(h);
    function M(y, p) {
      return function(m, b) {
        typeof y[m] != "function" && Object.defineProperty(y, m, { configurable: !0, writable: !0, value: b }), p && p(m, b);
      };
    }
  })(function(f) {
    var d = Object.prototype.hasOwnProperty, h = typeof Symbol == "function", M = h && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", y = h && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", p = typeof Object.create == "function", m = { __proto__: [] } instanceof Array, b = !p && !m, R = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: p ? function() {
        return L(/* @__PURE__ */ Object.create(null));
      } : m ? function() {
        return L({ __proto__: null });
      } : function() {
        return L({});
      },
      has: b ? function(e, t) {
        return d.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: b ? function(e, t) {
        return d.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, q = Object.getPrototypeOf(Function), P = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", I = !P && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), A = !P && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), U = !P && typeof WeakMap == "function" ? WeakMap : Ee(), k = new U();
    function E(e, t, r, n) {
      if (v(r)) {
        if (!X(e))
          throw new TypeError();
        if (!K(t))
          throw new TypeError();
        return de(e, t);
      } else {
        if (!X(e))
          throw new TypeError();
        if (!_(t))
          throw new TypeError();
        if (!_(n) && !v(n) && !S(n))
          throw new TypeError();
        return S(n) && (n = void 0), r = T(r), he(e, t, r, n);
      }
    }
    f("decorate", E);
    function O(e, t) {
      function r(n, a) {
        if (!_(n))
          throw new TypeError();
        if (!v(a) && !Me(a))
          throw new TypeError();
        Q(e, t, n, a);
      }
      return r;
    }
    f("metadata", O);
    function F(e, t, r, n) {
      if (!_(r))
        throw new TypeError();
      return v(n) || (n = T(n)), Q(e, t, r, n);
    }
    f("defineMetadata", F);
    function oe(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), N(e, t, r);
    }
    f("hasMetadata", oe);
    function ie(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), W(e, t, r);
    }
    f("hasOwnMetadata", ie);
    function ue(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), $(e, t, r);
    }
    f("getMetadata", ue);
    function se(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), H(e, t, r);
    }
    f("getOwnMetadata", se);
    function fe(e, t) {
      if (!_(e))
        throw new TypeError();
      return v(t) || (t = T(t)), Y(e, t);
    }
    f("getMetadataKeys", fe);
    function ce(e, t) {
      if (!_(e))
        throw new TypeError();
      return v(t) || (t = T(t)), Z(e, t);
    }
    f("getOwnMetadataKeys", ce);
    function le(e, t, r) {
      if (!_(t))
        throw new TypeError();
      v(r) || (r = T(r));
      var n = C(
        t,
        r,
        /*Create*/
        !1
      );
      if (v(n) || !n.delete(e))
        return !1;
      if (n.size > 0)
        return !0;
      var a = k.get(t);
      return a.delete(r), a.size > 0 || k.delete(t), !0;
    }
    f("deleteMetadata", le);
    function de(e, t) {
      for (var r = e.length - 1; r >= 0; --r) {
        var n = e[r], a = n(t);
        if (!v(a) && !S(a)) {
          if (!K(a))
            throw new TypeError();
          t = a;
        }
      }
      return t;
    }
    function he(e, t, r, n) {
      for (var a = e.length - 1; a >= 0; --a) {
        var w = e[a], u = w(t, r, n);
        if (!v(u) && !S(u)) {
          if (!_(u))
            throw new TypeError();
          n = u;
        }
      }
      return n;
    }
    function C(e, t, r) {
      var n = k.get(e);
      if (v(n)) {
        if (!r)
          return;
        n = new I(), k.set(e, n);
      }
      var a = n.get(t);
      if (v(a)) {
        if (!r)
          return;
        a = new I(), n.set(t, a);
      }
      return a;
    }
    function N(e, t, r) {
      var n = W(e, t, r);
      if (n)
        return !0;
      var a = z(t);
      return S(a) ? !1 : N(e, a, r);
    }
    function W(e, t, r) {
      var n = C(
        t,
        r,
        /*Create*/
        !1
      );
      return v(n) ? !1 : _e(n.has(e));
    }
    function $(e, t, r) {
      var n = W(e, t, r);
      if (n)
        return H(e, t, r);
      var a = z(t);
      if (!S(a))
        return $(e, a, r);
    }
    function H(e, t, r) {
      var n = C(
        t,
        r,
        /*Create*/
        !1
      );
      if (!v(n))
        return n.get(e);
    }
    function Q(e, t, r, n) {
      var a = C(
        r,
        n,
        /*Create*/
        !0
      );
      a.set(e, t);
    }
    function Y(e, t) {
      var r = Z(e, t), n = z(e);
      if (n === null)
        return r;
      var a = Y(n, t);
      if (a.length <= 0)
        return r;
      if (r.length <= 0)
        return a;
      for (var w = new A(), u = [], s = 0, o = r; s < o.length; s++) {
        var c = o[s], l = w.has(c);
        l || (w.add(c), u.push(c));
      }
      for (var x = 0, te = a; x < te.length; x++) {
        var c = te[x], l = w.has(c);
        l || (w.add(c), u.push(c));
      }
      return u;
    }
    function Z(e, t) {
      var r = [], n = C(
        e,
        t,
        /*Create*/
        !1
      );
      if (v(n))
        return r;
      for (var a = n.keys(), w = me(a), u = 0; ; ) {
        var s = ke(w);
        if (!s)
          return r.length = u, r;
        var o = be(s);
        try {
          r[u] = o;
        } catch (c) {
          try {
            ge(w);
          } finally {
            throw c;
          }
        }
        u++;
      }
    }
    function J(e) {
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
    function S(e) {
      return e === null;
    }
    function ye(e) {
      return typeof e == "symbol";
    }
    function _(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function ve(e, t) {
      switch (J(e)) {
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
      var r = t === 3 ? "string" : t === 5 ? "number" : "default", n = ee(e, M);
      if (n !== void 0) {
        var a = n.call(e, r);
        if (_(a))
          throw new TypeError();
        return a;
      }
      return pe(e, r === "default" ? "number" : r);
    }
    function pe(e, t) {
      if (t === "string") {
        var r = e.toString;
        if (j(r)) {
          var n = r.call(e);
          if (!_(n))
            return n;
        }
        var a = e.valueOf;
        if (j(a)) {
          var n = a.call(e);
          if (!_(n))
            return n;
        }
      } else {
        var a = e.valueOf;
        if (j(a)) {
          var n = a.call(e);
          if (!_(n))
            return n;
        }
        var w = e.toString;
        if (j(w)) {
          var n = w.call(e);
          if (!_(n))
            return n;
        }
      }
      throw new TypeError();
    }
    function _e(e) {
      return !!e;
    }
    function we(e) {
      return "" + e;
    }
    function T(e) {
      var t = ve(
        e,
        3
        /* String */
      );
      return ye(t) ? t : we(t);
    }
    function X(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function j(e) {
      return typeof e == "function";
    }
    function K(e) {
      return typeof e == "function";
    }
    function Me(e) {
      switch (J(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ee(e, t) {
      var r = e[t];
      if (r != null) {
        if (!j(r))
          throw new TypeError();
        return r;
      }
    }
    function me(e) {
      var t = ee(e, y);
      if (!j(t))
        throw new TypeError();
      var r = t.call(e);
      if (!_(r))
        throw new TypeError();
      return r;
    }
    function be(e) {
      return e.value;
    }
    function ke(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function ge(e) {
      var t = e.return;
      t && t.call(e);
    }
    function z(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === q || t !== q)
        return t;
      var r = e.prototype, n = r && Object.getPrototypeOf(r);
      if (n == null || n === Object.prototype)
        return t;
      var a = n.constructor;
      return typeof a != "function" || a === e ? t : a;
    }
    function Re() {
      var e = {}, t = [], r = (
        /** @class */
        function() {
          function u(s, o, c) {
            this._index = 0, this._keys = s, this._values = o, this._selector = c;
          }
          return u.prototype["@@iterator"] = function() {
            return this;
          }, u.prototype[y] = function() {
            return this;
          }, u.prototype.next = function() {
            var s = this._index;
            if (s >= 0 && s < this._keys.length) {
              var o = this._selector(this._keys[s], this._values[s]);
              return s + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: o, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, u.prototype.throw = function(s) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), s;
          }, u.prototype.return = function(s) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: s, done: !0 };
          }, u;
        }()
      );
      return (
        /** @class */
        function() {
          function u() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(u.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), u.prototype.has = function(s) {
            return this._find(
              s,
              /*insert*/
              !1
            ) >= 0;
          }, u.prototype.get = function(s) {
            var o = this._find(
              s,
              /*insert*/
              !1
            );
            return o >= 0 ? this._values[o] : void 0;
          }, u.prototype.set = function(s, o) {
            var c = this._find(
              s,
              /*insert*/
              !0
            );
            return this._values[c] = o, this;
          }, u.prototype.delete = function(s) {
            var o = this._find(
              s,
              /*insert*/
              !1
            );
            if (o >= 0) {
              for (var c = this._keys.length, l = o + 1; l < c; l++)
                this._keys[l - 1] = this._keys[l], this._values[l - 1] = this._values[l];
              return this._keys.length--, this._values.length--, s === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, u.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, u.prototype.keys = function() {
            return new r(this._keys, this._values, n);
          }, u.prototype.values = function() {
            return new r(this._keys, this._values, a);
          }, u.prototype.entries = function() {
            return new r(this._keys, this._values, w);
          }, u.prototype["@@iterator"] = function() {
            return this.entries();
          }, u.prototype[y] = function() {
            return this.entries();
          }, u.prototype._find = function(s, o) {
            return this._cacheKey !== s && (this._cacheIndex = this._keys.indexOf(this._cacheKey = s)), this._cacheIndex < 0 && o && (this._cacheIndex = this._keys.length, this._keys.push(s), this._values.push(void 0)), this._cacheIndex;
          }, u;
        }()
      );
      function n(u, s) {
        return u;
      }
      function a(u, s) {
        return s;
      }
      function w(u, s) {
        return [u, s];
      }
    }
    function Te() {
      return (
        /** @class */
        function() {
          function e() {
            this._map = new I();
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
    function Ee() {
      var e = 16, t = R.create(), r = n();
      return (
        /** @class */
        function() {
          function o() {
            this._key = n();
          }
          return o.prototype.has = function(c) {
            var l = a(
              c,
              /*create*/
              !1
            );
            return l !== void 0 ? R.has(l, this._key) : !1;
          }, o.prototype.get = function(c) {
            var l = a(
              c,
              /*create*/
              !1
            );
            return l !== void 0 ? R.get(l, this._key) : void 0;
          }, o.prototype.set = function(c, l) {
            var x = a(
              c,
              /*create*/
              !0
            );
            return x[this._key] = l, this;
          }, o.prototype.delete = function(c) {
            var l = a(
              c,
              /*create*/
              !1
            );
            return l !== void 0 ? delete l[this._key] : !1;
          }, o.prototype.clear = function() {
            this._key = n();
          }, o;
        }()
      );
      function n() {
        var o;
        do
          o = "@@WeakMap@@" + s();
        while (R.has(t, o));
        return t[o] = !0, o;
      }
      function a(o, c) {
        if (!d.call(o, r)) {
          if (!c)
            return;
          Object.defineProperty(o, r, { value: R.create() });
        }
        return o[r];
      }
      function w(o, c) {
        for (var l = 0; l < c; ++l)
          o[l] = Math.random() * 255 | 0;
        return o;
      }
      function u(o) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(o)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(o)) : w(new Uint8Array(o), o) : w(new Array(o), o);
      }
      function s() {
        var o = u(e);
        o[6] = o[6] & 79 | 64, o[8] = o[8] & 191 | 128;
        for (var c = "", l = 0; l < e; ++l) {
          var x = o[l];
          (l === 4 || l === 6 || l === 8) && (c += "-"), x < 16 && (c += "0"), c += x.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function L(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(ne || (ne = {}));
const Ie = (i = "") => (f) => {
  Reflect.defineMetadata("prefix", i, f), Reflect.hasMetadata("routes", f) || Reflect.defineMetadata("routes", [], f);
};
var G = /* @__PURE__ */ ((i) => (i.get = "get", i.post = "post", i.put = "put", i.delete = "delete", i))(G || {}), g = /* @__PURE__ */ ((i) => (i.param = "param", i.query = "query", i.req = "req", i.res = "res", i.body = "body", i))(g || {});
const D = (i) => (f) => (d, h, M) => {
  Reflect.hasMetadata("routes", d.constructor) || Reflect.defineMetadata("routes", [], d.constructor);
  const y = Reflect.getMetadata("routes", d.constructor);
  y.push({
    method: i,
    path: f,
    handlerName: h
  }), Reflect.defineMetadata("routes", y, d.constructor);
  const p = Reflect.getMetadata(g.req, d[h]), m = Reflect.getMetadata(g.res, d[h]), b = Reflect.getMetadata(g.param, d[h]), R = Reflect.getMetadata(g.query, d[h]), q = Reflect.getMetadata(g.body, d[h]), P = M.value;
  M.value = (...I) => {
    const [A, U] = I, k = [...I];
    if (p && (k[p.index] = A), m && (k[m.index] = U), b) {
      const { key: E, index: O } = b;
      k[O] = A.params[E];
    }
    if (R) {
      const { key: E, zod: O, index: F } = R;
      k[F] = E ? O.parse(A.query[E]) : O.parse(A.query);
    }
    if (q) {
      const { zod: E, index: O } = q;
      k[O] = E.parse(A.body);
    }
    return P.apply(void 0, k);
  };
}, Se = D(G.get), je = D(G.post), qe = D(G.put), Pe = D(G.delete), B = (i) => (f) => (d, h, M) => {
  const y = d[h], p = {
    key: f == null ? void 0 : f.key,
    zod: f == null ? void 0 : f.zod,
    index: M
  };
  Reflect.defineMetadata(i, p, y);
}, ae = (i) => (f, d, h) => {
  const M = f[d];
  Reflect.defineMetadata(i, { index: h }, M);
}, Ce = B(g.param), Ge = B(g.query), De = ae(g.req), Ue = ae(g.res), Fe = B(g.body);
var V = /* @__PURE__ */ ((i) => (i.and = "and", i.or = "or", i))(V || {});
const Oe = (i) => {
  const f = Array.isArray(i.userRoles) ? i.userRoles : [i.userRoles], d = Array.isArray(i.requiredRoles) ? i.requiredRoles : [i.requiredRoles];
  return i.operator === V.and ? f.every((h) => d.includes(h)) : f.some((h) => d.includes(h));
}, We = ({ userRoles: i, requiredRoles: f, operator: d = V.or }) => (h, M, y) => {
  const p = y.value;
  y.value = (...m) => {
    const [, b] = m;
    return Oe({ userRoles: i, requiredRoles: f, operator: d }) ? p.apply(void 0, m) : b.status(403).json({ error: "Forbidden" });
  };
}, xe = require("express"), ze = (i) => {
  const f = xe.Router();
  return i.forEach((d) => {
    const h = new d(), M = Reflect.getMetadata("prefix", d);
    Reflect.getMetadata("routes", d).forEach((p) => {
      f[p.method](`${M}${p.path}`, (m, b) => {
        h[p.handlerName](m, b);
      });
    });
  }), f;
};
export {
  Ae as AuthGuard,
  Fe as Body,
  Ie as Controller,
  Pe as Delete,
  Se as Get,
  G as Method,
  V as Operator,
  Ce as Param,
  g as Parameter,
  je as Post,
  qe as Put,
  Ge as Query,
  De as Req,
  Ue as Res,
  We as RoleGuard,
  ze as getRouter
};
