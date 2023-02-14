const Re = (l) => (c, h, d) => {
  const w = d.value;
  d.value = (...v) => {
    const [M, b] = v, m = M.headers;
    if (m && m.authorization === `Bearer ${l}`)
      return w.apply(void 0, v);
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
  (function(c) {
    var h = typeof te == "object" ? te : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), d = w(l);
    typeof h.Reflect > "u" ? h.Reflect = l : d = w(h.Reflect, d), c(d);
    function w(v, M) {
      return function(b, m) {
        typeof v[b] != "function" && Object.defineProperty(v, b, { configurable: !0, writable: !0, value: m }), M && M(b, m);
      };
    }
  })(function(c) {
    var h = Object.prototype.hasOwnProperty, d = typeof Symbol == "function", w = d && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", v = d && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", M = typeof Object.create == "function", b = { __proto__: [] } instanceof Array, m = !M && !b, O = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: M ? function() {
        return L(/* @__PURE__ */ Object.create(null));
      } : b ? function() {
        return L({ __proto__: null });
      } : function() {
        return L({});
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
    }, A = Object.getPrototypeOf(Function), q = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", S = !q && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ge(), I = !q && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), G = !q && typeof WeakMap == "function" ? WeakMap : Oe(), k = new G();
    function E(e, t, n, r) {
      if (y(n)) {
        if (!J(e))
          throw new TypeError();
        if (!X(t))
          throw new TypeError();
        return le(e, t);
      } else {
        if (!J(e))
          throw new TypeError();
        if (!p(t))
          throw new TypeError();
        if (!p(r) && !y(r) && !j(r))
          throw new TypeError();
        return j(r) && (r = void 0), n = T(n), he(e, t, n, r);
      }
    }
    c("decorate", E);
    function R(e, t) {
      function n(r, a) {
        if (!p(r))
          throw new TypeError();
        if (!y(a) && !we(a))
          throw new TypeError();
        $(e, t, r, a);
      }
      return n;
    }
    c("metadata", R);
    function D(e, t, n, r) {
      if (!p(n))
        throw new TypeError();
      return y(r) || (r = T(r)), $(e, t, n, r);
    }
    c("defineMetadata", D);
    function ae(e, t, n) {
      if (!p(t))
        throw new TypeError();
      return y(n) || (n = T(n)), H(e, t, n);
    }
    c("hasMetadata", ae);
    function ie(e, t, n) {
      if (!p(t))
        throw new TypeError();
      return y(n) || (n = T(n)), F(e, t, n);
    }
    c("hasOwnMetadata", ie);
    function oe(e, t, n) {
      if (!p(t))
        throw new TypeError();
      return y(n) || (n = T(n)), N(e, t, n);
    }
    c("getMetadata", oe);
    function ue(e, t, n) {
      if (!p(t))
        throw new TypeError();
      return y(n) || (n = T(n)), z(e, t, n);
    }
    c("getOwnMetadata", ue);
    function fe(e, t) {
      if (!p(e))
        throw new TypeError();
      return y(t) || (t = T(t)), Q(e, t);
    }
    c("getMetadataKeys", fe);
    function se(e, t) {
      if (!p(e))
        throw new TypeError();
      return y(t) || (t = T(t)), Y(e, t);
    }
    c("getOwnMetadataKeys", se);
    function ce(e, t, n) {
      if (!p(t))
        throw new TypeError();
      y(n) || (n = T(n));
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      if (y(r) || !r.delete(e))
        return !1;
      if (r.size > 0)
        return !0;
      var a = k.get(t);
      return a.delete(n), a.size > 0 || k.delete(t), !0;
    }
    c("deleteMetadata", ce);
    function le(e, t) {
      for (var n = e.length - 1; n >= 0; --n) {
        var r = e[n], a = r(t);
        if (!y(a) && !j(a)) {
          if (!X(a))
            throw new TypeError();
          t = a;
        }
      }
      return t;
    }
    function he(e, t, n, r) {
      for (var a = e.length - 1; a >= 0; --a) {
        var _ = e[a], o = _(t, n, r);
        if (!y(o) && !j(o)) {
          if (!p(o))
            throw new TypeError();
          r = o;
        }
      }
      return r;
    }
    function C(e, t, n) {
      var r = k.get(e);
      if (y(r)) {
        if (!n)
          return;
        r = new S(), k.set(e, r);
      }
      var a = r.get(t);
      if (y(a)) {
        if (!n)
          return;
        a = new S(), r.set(t, a);
      }
      return a;
    }
    function H(e, t, n) {
      var r = F(e, t, n);
      if (r)
        return !0;
      var a = W(t);
      return j(a) ? !1 : H(e, a, n);
    }
    function F(e, t, n) {
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      return y(r) ? !1 : pe(r.has(e));
    }
    function N(e, t, n) {
      var r = F(e, t, n);
      if (r)
        return z(e, t, n);
      var a = W(t);
      if (!j(a))
        return N(e, a, n);
    }
    function z(e, t, n) {
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      if (!y(r))
        return r.get(e);
    }
    function $(e, t, n, r) {
      var a = C(
        n,
        r,
        /*Create*/
        !0
      );
      a.set(e, t);
    }
    function Q(e, t) {
      var n = Y(e, t), r = W(e);
      if (r === null)
        return n;
      var a = Q(r, t);
      if (a.length <= 0)
        return n;
      if (n.length <= 0)
        return a;
      for (var _ = new I(), o = [], u = 0, i = n; u < i.length; u++) {
        var f = i[u], s = _.has(f);
        s || (_.add(f), o.push(f));
      }
      for (var x = 0, ee = a; x < ee.length; x++) {
        var f = ee[x], s = _.has(f);
        s || (_.add(f), o.push(f));
      }
      return o;
    }
    function Y(e, t) {
      var n = [], r = C(
        e,
        t,
        /*Create*/
        !1
      );
      if (y(r))
        return n;
      for (var a = r.keys(), _ = Me(a), o = 0; ; ) {
        var u = be(_);
        if (!u)
          return n.length = o, n;
        var i = me(u);
        try {
          n[o] = i;
        } catch (f) {
          try {
            ke(_);
          } finally {
            throw f;
          }
        }
        o++;
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
    function y(e) {
      return e === void 0;
    }
    function j(e) {
      return e === null;
    }
    function de(e) {
      return typeof e == "symbol";
    }
    function p(e) {
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
        if (p(a))
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
          if (!p(r))
            return r;
        }
        var a = e.valueOf;
        if (P(a)) {
          var r = a.call(e);
          if (!p(r))
            return r;
        }
      } else {
        var a = e.valueOf;
        if (P(a)) {
          var r = a.call(e);
          if (!p(r))
            return r;
        }
        var _ = e.toString;
        if (P(_)) {
          var r = _.call(e);
          if (!p(r))
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
      var t = K(e, v);
      if (!P(t))
        throw new TypeError();
      var n = t.call(e);
      if (!p(n))
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
    function W(e) {
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
          function o(u, i, f) {
            this._index = 0, this._keys = u, this._values = i, this._selector = f;
          }
          return o.prototype["@@iterator"] = function() {
            return this;
          }, o.prototype[v] = function() {
            return this;
          }, o.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var i = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, o.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), u;
          }, o.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: u, done: !0 };
          }, o;
        }()
      );
      return (
        /** @class */
        function() {
          function o() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, o.prototype.get = function(u) {
            var i = this._find(
              u,
              /*insert*/
              !1
            );
            return i >= 0 ? this._values[i] : void 0;
          }, o.prototype.set = function(u, i) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = i, this;
          }, o.prototype.delete = function(u) {
            var i = this._find(
              u,
              /*insert*/
              !1
            );
            if (i >= 0) {
              for (var f = this._keys.length, s = i + 1; s < f; s++)
                this._keys[s - 1] = this._keys[s], this._values[s - 1] = this._values[s];
              return this._keys.length--, this._values.length--, u === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, o.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, o.prototype.keys = function() {
            return new n(this._keys, this._values, r);
          }, o.prototype.values = function() {
            return new n(this._keys, this._values, a);
          }, o.prototype.entries = function() {
            return new n(this._keys, this._values, _);
          }, o.prototype["@@iterator"] = function() {
            return this.entries();
          }, o.prototype[v] = function() {
            return this.entries();
          }, o.prototype._find = function(u, i) {
            return this._cacheKey !== u && (this._cacheIndex = this._keys.indexOf(this._cacheKey = u)), this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, o;
        }()
      );
      function r(o, u) {
        return o;
      }
      function a(o, u) {
        return u;
      }
      function _(o, u) {
        return [o, u];
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
          }, e.prototype[v] = function() {
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
          function i() {
            this._key = r();
          }
          return i.prototype.has = function(f) {
            var s = a(
              f,
              /*create*/
              !1
            );
            return s !== void 0 ? O.has(s, this._key) : !1;
          }, i.prototype.get = function(f) {
            var s = a(
              f,
              /*create*/
              !1
            );
            return s !== void 0 ? O.get(s, this._key) : void 0;
          }, i.prototype.set = function(f, s) {
            var x = a(
              f,
              /*create*/
              !0
            );
            return x[this._key] = s, this;
          }, i.prototype.delete = function(f) {
            var s = a(
              f,
              /*create*/
              !1
            );
            return s !== void 0 ? delete s[this._key] : !1;
          }, i.prototype.clear = function() {
            this._key = r();
          }, i;
        }()
      );
      function r() {
        var i;
        do
          i = "@@WeakMap@@" + u();
        while (O.has(t, i));
        return t[i] = !0, i;
      }
      function a(i, f) {
        if (!h.call(i, n)) {
          if (!f)
            return;
          Object.defineProperty(i, n, { value: O.create() });
        }
        return i[n];
      }
      function _(i, f) {
        for (var s = 0; s < f; ++s)
          i[s] = Math.random() * 255 | 0;
        return i;
      }
      function o(i) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(i)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(i)) : _(new Uint8Array(i), i) : _(new Array(i), i);
      }
      function u() {
        var i = o(e);
        i[6] = i[6] & 79 | 64, i[8] = i[8] & 191 | 128;
        for (var f = "", s = 0; s < e; ++s) {
          var x = i[s];
          (s === 4 || s === 6 || s === 8) && (f += "-"), x < 16 && (f += "0"), f += x.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function L(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(ne || (ne = {}));
const xe = (l = "") => (c) => {
  Reflect.defineMetadata("prefix", l, c), Reflect.hasMetadata("routes", c) || Reflect.defineMetadata("routes", [], c);
};
var U = /* @__PURE__ */ ((l) => (l.get = "get", l.post = "post", l.put = "put", l))(U || {}), g = /* @__PURE__ */ ((l) => (l.param = "param", l.query = "query", l.req = "req", l.res = "res", l.body = "body", l))(g || {});
const B = (l) => (c) => (h, d, w) => {
  Reflect.hasMetadata("routes", h.constructor) || Reflect.defineMetadata("routes", [], h.constructor);
  const v = Reflect.getMetadata("routes", h.constructor);
  v.push({
    method: l,
    path: c,
    handlerName: d
  }), Reflect.defineMetadata("routes", v, h.constructor);
  const M = Reflect.getMetadata(g.req, h[d]), b = Reflect.getMetadata(g.res, h[d]), m = Reflect.getMetadata(g.param, h[d]), O = Reflect.getMetadata(g.query, h[d]), A = Reflect.getMetadata(g.body, h[d]), q = w.value;
  w.value = (...S) => {
    const [I, G] = S, k = [...S];
    if (M && (k[M.index] = I), b && (k[b.index] = G), m) {
      const { key: E, index: R } = m;
      k[R] = I.params[E];
    }
    if (O) {
      const { key: E, schema: R, index: D } = O;
      k[D] = E ? R.parse(I.query[E]) : R.parse(I.query);
    }
    if (A) {
      const { schema: E, index: R } = A;
      k[R] = E.parse(I.body);
    }
    return q.apply(void 0, k);
  };
}, Ie = B(U.get), Se = B(U.post), je = B(U.put), V = (l) => (c) => (h, d, w) => {
  const v = h[d], M = {
    key: c == null ? void 0 : c.key,
    schema: c == null ? void 0 : c.schema,
    index: w
  };
  Reflect.defineMetadata(l, M, v);
}, re = (l) => (c, h, d) => {
  const w = c[h];
  Reflect.defineMetadata(l, { index: d }, w);
}, Pe = V(g.param), Ae = V(g.query), qe = re(g.req), Ce = re(g.res), Ue = V(g.body), Ee = ["User"], Ge = (l) => (c, h, d) => {
  const w = d.value;
  d.value = (...v) => {
    const [, M] = v;
    if (Ee.some((m) => m === l))
      return w.apply(void 0, v);
    M.status(403).json({ error: "Forbidden" });
  };
};
export {
  Re as AuthGuard,
  Ue as Body,
  xe as Controller,
  Ie as Get,
  Pe as Param,
  Se as Post,
  je as Put,
  Ae as Query,
  qe as Req,
  Ce as Res,
  Ge as RoleGuard
};
