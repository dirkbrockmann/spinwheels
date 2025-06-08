(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_vbymn_3,._controlPanel_vbymn_8{display:block}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const qu = {
  id: "spinwheels",
  display_type: "canvas",
  debug: !1,
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 505, height: 505 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "d3-widgets tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Qe(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ju(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $o(t) {
  let e, n, r;
  t.length !== 2 ? (e = Qe, n = (s, c) => Qe(t(s), c), r = (s, c) => t(s) - c) : (e = t === Qe || t === ju ? t : Fu, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Fu() {
  return 0;
}
function Du(t) {
  return t === null ? NaN : +t;
}
const Lu = $o(Qe), Hu = Lu.right;
$o(Du).center;
const Bu = Math.sqrt(50), Xu = Math.sqrt(10), Uu = Math.sqrt(2);
function hn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Bu ? 10 : a >= Xu ? 5 : a >= Uu ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? hn(t, e, n * 2) : [s, c, u];
}
function Yu(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? hn(e, t, n) : hn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Mr(t, e, n) {
  return e = +e, t = +t, n = +n, hn(t, e, n)[2];
}
function Gu(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Mr(e, t, n) : Mr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Vu = { value: () => {
} };
function No() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new tn(n);
}
function tn(t) {
  this._ = t;
}
function Ku(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
tn.prototype = No.prototype = {
  constructor: tn,
  on: function(t, e) {
    var n = this._, r = Ku(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Wu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Li(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Li(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new tn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function Wu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Li(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Vu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ar = "http://www.w3.org/1999/xhtml";
const Hi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ar,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function In(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Hi.hasOwnProperty(e) ? { space: Hi[e], local: t } : t;
}
function Zu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ar && e.documentElement.namespaceURI === Ar ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ju(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function To(t) {
  var e = In(t);
  return (e.local ? Ju : Zu)(e);
}
function Qu() {
}
function ai(t) {
  return t == null ? Qu : function() {
    return this.querySelector(t);
  };
}
function tc(t) {
  typeof t != "function" && (t = ai(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new D(r, this._parents);
}
function ec(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function nc() {
  return [];
}
function So(t) {
  return t == null ? nc : function() {
    return this.querySelectorAll(t);
  };
}
function rc(t) {
  return function() {
    return ec(t.apply(this, arguments));
  };
}
function ic(t) {
  typeof t == "function" ? t = rc(t) : t = So(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new D(r, i);
}
function Po(t) {
  return function() {
    return this.matches(t);
  };
}
function Eo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var ac = Array.prototype.find;
function oc(t) {
  return function() {
    return ac.call(this.children, t);
  };
}
function sc() {
  return this.firstElementChild;
}
function uc(t) {
  return this.select(t == null ? sc : oc(typeof t == "function" ? t : Eo(t)));
}
var cc = Array.prototype.filter;
function lc() {
  return Array.from(this.children);
}
function fc(t) {
  return function() {
    return cc.call(this.children, t);
  };
}
function hc(t) {
  return this.selectAll(t == null ? lc : fc(typeof t == "function" ? t : Eo(t)));
}
function dc(t) {
  typeof t != "function" && (t = Po(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new D(r, this._parents);
}
function ko(t) {
  return new Array(t.length);
}
function pc() {
  return new D(this._enter || this._groups.map(ko), this._parents);
}
function dn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
dn.prototype = {
  constructor: dn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function gc(t) {
  return function() {
    return t;
  };
}
function bc(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new dn(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function yc(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = a.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = o.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = o.call(t, a[s], s, a) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = a[s], u.delete(d)) : n[s] = new dn(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function _c(t) {
  return t.__data__;
}
function vc(t, e) {
  if (!arguments.length) return Array.from(this, _c);
  var n = e ? yc : bc, r = this._parents, i = this._groups;
  typeof t != "function" && (t = gc(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, d = mc(t.call(l, l && l.__data__, u, r)), p = d.length, b = s[u] = new Array(p), m = o[u] = new Array(p), y = c[u] = new Array(f);
    n(l, h, b, m, y, d, e);
    for (var x = 0, M = 0, g, v; x < p; ++x)
      if (g = b[x]) {
        for (x >= M && (M = x + 1); !(v = m[M]) && ++M < p; ) ;
        g._next = v || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = c, o;
}
function mc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wc() {
  return new D(this._exit || this._groups.map(ko), this._parents);
}
function xc(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Mc(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, p = 0; p < h; ++p)
      (d = u[p] || l[p]) && (f[p] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new D(s, this._parents);
}
function Ac() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function $c(t) {
  t || (t = Nc);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new D(i, this._parents).order();
}
function Nc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Tc() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Sc() {
  return Array.from(this);
}
function Pc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ec() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function kc() {
  return !this.node();
}
function Oc(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function zc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Cc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ic(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Rc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function qc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function jc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Fc(t, e) {
  var n = In(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Cc : zc : typeof e == "function" ? n.local ? jc : qc : n.local ? Rc : Ic)(n, e));
}
function Oo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Dc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Lc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Hc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Bc(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Dc : typeof e == "function" ? Hc : Lc)(t, e, n ?? "")) : Kt(this.node(), t);
}
function Kt(t, e) {
  return t.style.getPropertyValue(e) || Oo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Xc(t) {
  return function() {
    delete this[t];
  };
}
function Uc(t, e) {
  return function() {
    this[t] = e;
  };
}
function Yc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Gc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Xc : typeof e == "function" ? Yc : Uc)(t, e)) : this.node()[t];
}
function zo(t) {
  return t.trim().split(/^|\s+/);
}
function oi(t) {
  return t.classList || new Co(t);
}
function Co(t) {
  this._node = t, this._names = zo(t.getAttribute("class") || "");
}
Co.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Io(t, e) {
  for (var n = oi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Ro(t, e) {
  for (var n = oi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Vc(t) {
  return function() {
    Io(this, t);
  };
}
function Kc(t) {
  return function() {
    Ro(this, t);
  };
}
function Wc(t, e) {
  return function() {
    (e.apply(this, arguments) ? Io : Ro)(this, t);
  };
}
function Zc(t, e) {
  var n = zo(t + "");
  if (arguments.length < 2) {
    for (var r = oi(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Wc : e ? Vc : Kc)(n, e));
}
function Jc() {
  this.textContent = "";
}
function Qc(t) {
  return function() {
    this.textContent = t;
  };
}
function tl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function el(t) {
  return arguments.length ? this.each(t == null ? Jc : (typeof t == "function" ? tl : Qc)(t)) : this.node().textContent;
}
function nl() {
  this.innerHTML = "";
}
function rl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function il(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function al(t) {
  return arguments.length ? this.each(t == null ? nl : (typeof t == "function" ? il : rl)(t)) : this.node().innerHTML;
}
function ol() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sl() {
  return this.each(ol);
}
function ul() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cl() {
  return this.each(ul);
}
function ll(t) {
  var e = typeof t == "function" ? t : To(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function fl() {
  return null;
}
function hl(t, e) {
  var n = typeof t == "function" ? t : To(t), r = e == null ? fl : typeof e == "function" ? e : ai(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function pl() {
  return this.each(dl);
}
function gl() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function bl() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function yl(t) {
  return this.select(t ? bl : gl);
}
function _l(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function vl(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ml(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function wl(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function xl(t, e, n) {
  return function() {
    var r = this.__on, i, a = vl(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ml(t, e, n) {
  var r = ml(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? xl : wl, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function qo(t, e, n) {
  var r = Oo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Al(t, e) {
  return function() {
    return qo(this, t, e);
  };
}
function $l(t, e) {
  return function() {
    return qo(this, t, e.apply(this, arguments));
  };
}
function Nl(t, e) {
  return this.each((typeof e == "function" ? $l : Al)(t, e));
}
function* Tl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var jo = [null];
function D(t, e) {
  this._groups = t, this._parents = e;
}
function ke() {
  return new D([[document.documentElement]], jo);
}
function Sl() {
  return this;
}
D.prototype = ke.prototype = {
  constructor: D,
  select: tc,
  selectAll: ic,
  selectChild: uc,
  selectChildren: hc,
  filter: dc,
  data: vc,
  enter: pc,
  exit: wc,
  join: xc,
  merge: Mc,
  selection: Sl,
  order: Ac,
  sort: $c,
  call: Tc,
  nodes: Sc,
  node: Pc,
  size: Ec,
  empty: kc,
  each: Oc,
  attr: Fc,
  style: Bc,
  property: Gc,
  classed: Zc,
  text: el,
  html: al,
  raise: sl,
  lower: cl,
  append: ll,
  insert: hl,
  remove: pl,
  clone: yl,
  datum: _l,
  on: Ml,
  dispatch: Nl,
  [Symbol.iterator]: Tl
};
function Pl(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], jo);
}
function si(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Fo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Oe() {
}
var ve = 0.7, pn = 1 / ve, Yt = "\\s*([+-]?\\d+)\\s*", me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", El = /^#([0-9a-f]{3,8})$/, kl = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), Ol = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), zl = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${me}\\)$`), Cl = new RegExp(`^rgba\\(${et},${et},${et},${me}\\)$`), Il = new RegExp(`^hsl\\(${me},${et},${et}\\)$`), Rl = new RegExp(`^hsla\\(${me},${et},${et},${me}\\)$`), Bi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
si(Oe, Ct, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xi,
  // Deprecated! Use color.formatHex.
  formatHex: Xi,
  formatHex8: ql,
  formatHsl: jl,
  formatRgb: Ui,
  toString: Ui
});
function Xi() {
  return this.rgb().formatHex();
}
function ql() {
  return this.rgb().formatHex8();
}
function jl() {
  return Do(this).formatHsl();
}
function Ui() {
  return this.rgb().formatRgb();
}
function Ct(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = El.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Yi(e) : n === 3 ? new R(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? je(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? je(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = kl.exec(t)) ? new R(e[1], e[2], e[3], 1) : (e = Ol.exec(t)) ? new R(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = zl.exec(t)) ? je(e[1], e[2], e[3], e[4]) : (e = Cl.exec(t)) ? je(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Il.exec(t)) ? Ki(e[1], e[2] / 100, e[3] / 100, 1) : (e = Rl.exec(t)) ? Ki(e[1], e[2] / 100, e[3] / 100, e[4]) : Bi.hasOwnProperty(t) ? Yi(Bi[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Yi(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function je(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new R(t, e, n, r);
}
function Fl(t) {
  return t instanceof Oe || (t = Ct(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function gn(t, e, n, r) {
  return arguments.length === 1 ? Fl(t) : new R(t, e, n, r ?? 1);
}
function R(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
si(R, gn, Fo(Oe, {
  brighter(t) {
    return t = t == null ? pn : Math.pow(pn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ve : Math.pow(ve, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(kt(this.r), kt(this.g), kt(this.b), bn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Gi,
  // Deprecated! Use color.formatHex.
  formatHex: Gi,
  formatHex8: Dl,
  formatRgb: Vi,
  toString: Vi
}));
function Gi() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function Dl() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Vi() {
  const t = bn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${kt(this.r)}, ${kt(this.g)}, ${kt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function bn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function kt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Pt(t) {
  return t = kt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ki(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new K(t, e, n, r);
}
function Do(t) {
  if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity);
  if (t instanceof Oe || (t = Ct(t)), !t) return new K();
  if (t instanceof K) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new K(o, s, c, t.opacity);
}
function Ll(t, e, n, r) {
  return arguments.length === 1 ? Do(t) : new K(t, e, n, r ?? 1);
}
function K(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
si(K, Ll, Fo(Oe, {
  brighter(t) {
    return t = t == null ? pn : Math.pow(pn, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ve : Math.pow(ve, t), new K(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new R(
      ur(t >= 240 ? t - 240 : t + 120, i, r),
      ur(t, i, r),
      ur(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new K(Wi(this.h), Fe(this.s), Fe(this.l), bn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = bn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Wi(this.h)}, ${Fe(this.s) * 100}%, ${Fe(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Wi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Fe(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ur(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ui = (t) => () => t;
function Hl(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Bl(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Xl(t) {
  return (t = +t) == 1 ? Lo : function(e, n) {
    return n - e ? Bl(e, n, t) : ui(isNaN(e) ? n : e);
  };
}
function Lo(t, e) {
  var n = e - t;
  return n ? Hl(t, n) : ui(isNaN(t) ? e : t);
}
const wt = function t(e) {
  var n = Xl(e);
  function r(i, a) {
    var o = n((i = gn(i)).r, (a = gn(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Lo(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ul(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Yl(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Gl(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Rn(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function Vl(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function G(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Kl(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Rn(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var $r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cr = new RegExp($r.source, "g");
function Wl(t) {
  return function() {
    return t;
  };
}
function Zl(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ho(t, e) {
  var n = $r.lastIndex = cr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = $r.exec(t)) && (i = cr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: G(r, i) })), n = cr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Zl(c[0].x) : Wl(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function Rn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ui(e) : (n === "number" ? G : n === "string" ? (r = Ct(e)) ? (e = r, wt) : Ho : e instanceof Ct ? wt : e instanceof Date ? Vl : Yl(e) ? Ul : Array.isArray(e) ? Gl : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Kl : G)(t, e);
}
function Jl(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Zi = 180 / Math.PI, Nr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bo(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Zi,
    skewX: Math.atan(c) * Zi,
    scaleX: o,
    scaleY: s
  };
}
var De;
function Ql(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Nr : Bo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function tf(t) {
  return t == null || (De || (De = document.createElementNS("http://www.w3.org/2000/svg", "g")), De.setAttribute("transform", t), !(t = De.transform.baseVal.consolidate())) ? Nr : (t = t.matrix, Bo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Xo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, d, p) {
    if (u !== h || l !== f) {
      var b = d.push("translate(", null, e, null, n);
      p.push({ i: b - 4, x: G(u, h) }, { i: b - 2, x: G(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: G(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: G(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, p) {
    if (u !== h || l !== f) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: G(u, h) }, { i: b - 2, x: G(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var p = -1, b = f.length, m; ++p < b; ) h[(m = f[p]).i] = m.x(d);
      return h.join("");
    };
  };
}
var ef = Xo(Ql, "px, ", "px)", "deg)"), nf = Xo(tf, ", ", ")", ")");
function Le(t, e) {
  e === void 0 && (e = t, t = Rn);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var Wt = 0, fe = 0, se = 0, Uo = 1e3, yn, he, _n = 0, It = 0, qn = 0, we = typeof performance == "object" && performance.now ? performance : Date, Yo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function jn() {
  return It || (Yo(rf), It = we.now() + qn);
}
function rf() {
  It = 0;
}
function xe() {
  this._call = this._time = this._next = null;
}
xe.prototype = Go.prototype = {
  constructor: xe,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? jn() : +n) + (e == null ? 0 : +e), !this._next && he !== this && (he ? he._next = this : yn = this, he = this), this._call = t, this._time = n, Tr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Tr());
  }
};
function Go(t, e, n) {
  var r = new xe();
  return r.restart(t, e, n), r;
}
function af() {
  jn(), ++Wt;
  for (var t = yn, e; t; )
    (e = It - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Wt;
}
function Ji() {
  It = (_n = we.now()) + qn, Wt = fe = 0;
  try {
    af();
  } finally {
    Wt = 0, sf(), It = 0;
  }
}
function of() {
  var t = we.now(), e = t - _n;
  e > Uo && (qn -= e, _n = t);
}
function sf() {
  for (var t, e = yn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : yn = n);
  he = t, Tr(r);
}
function Tr(t) {
  if (!Wt) {
    fe && (fe = clearTimeout(fe));
    var e = t - It;
    e > 24 ? (t < 1 / 0 && (fe = setTimeout(Ji, t - we.now() - qn)), se && (se = clearInterval(se))) : (se || (_n = we.now(), se = setInterval(of, Uo)), Wt = 1, Yo(Ji));
  }
}
function Qi(t, e, n) {
  var r = new xe();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function uf(t, e, n) {
  var r = new xe(), i = e;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? jn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, e, n), r;
}
var cf = No("start", "end", "cancel", "interrupt"), lf = [], Vo = 0, ta = 1, Sr = 2, en = 3, ea = 4, Pr = 5, nn = 6;
function Fn(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  ff(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: cf,
    tween: lf,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Vo
  });
}
function ci(t, e) {
  var n = J(t, e);
  if (n.state > Vo) throw new Error("too late; already scheduled");
  return n;
}
function it(t, e) {
  var n = J(t, e);
  if (n.state > en) throw new Error("too late; already running");
  return n;
}
function J(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function ff(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Go(a, 0, n.time);
  function a(u) {
    n.state = ta, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, h, f, d;
    if (n.state !== ta) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === en) return Qi(o);
        d.state === ea ? (d.state = nn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = nn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Qi(function() {
      n.state === en && (n.state = ea, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Sr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Sr) {
      for (n.state = en, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Pr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Pr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = nn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function hf(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Sr && r.state < Pr, r.state = nn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function df(t) {
  return this.each(function() {
    hf(this, t);
  });
}
function pf(t, e) {
  var n, r;
  return function() {
    var i = it(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function gf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = it(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function bf(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = J(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? pf : gf)(n, t, e));
}
function li(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = it(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return J(i, r).value[e];
  };
}
function Ko(t, e) {
  var n;
  return (typeof e == "number" ? G : e instanceof Ct ? wt : (n = Ct(e)) ? (e = n, wt) : Ho)(t, e);
}
function yf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function _f(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function vf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function mf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function wf(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function xf(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Mf(t, e) {
  var n = In(t), r = n === "transform" ? nf : Ko;
  return this.attrTween(t, typeof e == "function" ? (n.local ? xf : wf)(n, r, li(this, "attr." + t, e)) : e == null ? (n.local ? _f : yf)(n) : (n.local ? mf : vf)(n, r, e));
}
function Af(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function $f(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Nf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && $f(t, a)), n;
  }
  return i._value = e, i;
}
function Tf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Af(t, a)), n;
  }
  return i._value = e, i;
}
function Sf(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = In(t);
  return this.tween(n, (r.local ? Nf : Tf)(r, e));
}
function Pf(t, e) {
  return function() {
    ci(this, t).delay = +e.apply(this, arguments);
  };
}
function Ef(t, e) {
  return e = +e, function() {
    ci(this, t).delay = e;
  };
}
function kf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Pf : Ef)(e, t)) : J(this.node(), e).delay;
}
function Of(t, e) {
  return function() {
    it(this, t).duration = +e.apply(this, arguments);
  };
}
function zf(t, e) {
  return e = +e, function() {
    it(this, t).duration = e;
  };
}
function Cf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Of : zf)(e, t)) : J(this.node(), e).duration;
}
function If(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    it(this, t).ease = e;
  };
}
function Rf(t) {
  var e = this._id;
  return arguments.length ? this.each(If(e, t)) : J(this.node(), e).ease;
}
function qf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    it(this, t).ease = n;
  };
}
function jf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(qf(this._id, t));
}
function Ff(t) {
  typeof t != "function" && (t = Po(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new ft(r, this._parents, this._name, this._id);
}
function Df(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = o[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new ft(o, this._parents, this._name, this._id);
}
function Lf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Hf(t, e, n) {
  var r, i, a = Lf(e) ? ci : it;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function Bf(t, e) {
  var n = this._id;
  return arguments.length < 2 ? J(this.node(), n).on.on(t) : this.each(Hf(n, t, e));
}
function Xf(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Uf() {
  return this.on("end.remove", Xf(this._id));
}
function Yf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ai(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Fn(u[f], e, n, f, u, J(l, n)));
  return new ft(a, this._parents, e, n);
}
function Gf(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = So(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, p = J(l, n), b = 0, m = f.length; b < m; ++b)
          (d = f[b]) && Fn(d, e, n, b, f, p);
        a.push(f), o.push(l);
      }
  return new ft(a, o, e, n);
}
var Vf = ke.prototype.constructor;
function Kf() {
  return new Vf(this._groups, this._parents);
}
function Wf(t, e) {
  var n, r, i;
  return function() {
    var a = Kt(this, t), o = (this.style.removeProperty(t), Kt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Wo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Kt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Jf(t, e, n) {
  var r, i, a;
  return function() {
    var o = Kt(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Kt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function Qf(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = it(this, t), u = c.on, l = c.value[a] == null ? s || (s = Wo(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function th(t, e, n) {
  var r = (t += "") == "transform" ? ef : Ko;
  return e == null ? this.styleTween(t, Wf(t, r)).on("end.style." + t, Wo(t)) : typeof e == "function" ? this.styleTween(t, Jf(t, r, li(this, "style." + t, e))).each(Qf(this._id, t)) : this.styleTween(t, Zf(t, r, e), n).on("end.style." + t, null);
}
function eh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function nh(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && eh(t, o, n)), r;
  }
  return a._value = e, a;
}
function rh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, nh(t, e, n ?? ""));
}
function ih(t) {
  return function() {
    this.textContent = t;
  };
}
function ah(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function oh(t) {
  return this.tween("text", typeof t == "function" ? ah(li(this, "text", t)) : ih(t == null ? "" : t + ""));
}
function sh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function uh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && sh(i)), e;
  }
  return r._value = t, r;
}
function ch(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, uh(t));
}
function lh() {
  for (var t = this._name, e = this._id, n = Zo(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = J(c, e);
        Fn(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new ft(r, this._parents, t, n);
}
function fh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = it(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var hh = 0;
function ft(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Zo() {
  return ++hh;
}
var ot = ke.prototype;
ft.prototype = {
  constructor: ft,
  select: Yf,
  selectAll: Gf,
  selectChild: ot.selectChild,
  selectChildren: ot.selectChildren,
  filter: Ff,
  merge: Df,
  selection: Kf,
  transition: lh,
  call: ot.call,
  nodes: ot.nodes,
  node: ot.node,
  size: ot.size,
  empty: ot.empty,
  each: ot.each,
  on: Bf,
  attr: Mf,
  attrTween: Sf,
  style: th,
  styleTween: rh,
  text: oh,
  textTween: ch,
  remove: Uf,
  tween: bf,
  delay: kf,
  duration: Cf,
  ease: Rf,
  easeVarying: jf,
  end: fh,
  [Symbol.iterator]: ot[Symbol.iterator]
};
function dh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ph = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: dh
};
function gh(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function bh(t) {
  var e, n;
  t instanceof ft ? (e = t._id, t = t._name) : (e = Zo(), (n = ph).time = jn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Fn(c, t, e, u, o, n || gh(c, e));
  return new ft(r, this._parents, t, e);
}
ke.prototype.interrupt = df;
ke.prototype.transition = bh;
function yh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function vn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Zt(t) {
  return t = vn(Math.abs(t)), t ? t[1] : NaN;
}
function _h(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function vh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var mh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mn(t) {
  if (!(e = mh.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new fi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
mn.prototype = fi.prototype;
function fi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
fi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function wh(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Jo;
function xh(t, e) {
  var n = vn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (Jo = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + vn(t, Math.max(0, e + a - 1))[0];
}
function na(t, e) {
  var n = vn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ra = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: yh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => na(t * 100, e),
  r: na,
  s: xh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ia(t) {
  return t;
}
var aa = Array.prototype.map, oa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Mh(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ia : _h(aa.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ia : vh(aa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = mn(h);
    var f = h.fill, d = h.align, p = h.sign, b = h.symbol, m = h.zero, y = h.width, x = h.comma, M = h.precision, g = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : ra[v] || (M === void 0 && (M = 12), g = !0, v = "g"), (m || f === "0" && d === "=") && (m = !0, f = "0", d = "=");
    var S = b === "$" ? n : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = b === "$" ? r : /[%p]/.test(v) ? o : "", k = ra[v], H = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function B(_) {
      var O = S, A = P, z, Tt, j;
      if (v === "c")
        A = k(_) + A, _ = "";
      else {
        _ = +_;
        var X = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : k(Math.abs(_), M), g && (_ = wh(_)), X && +_ == 0 && p !== "+" && (X = !1), O = (X ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + O, A = (v === "s" ? oa[8 + Jo / 3] : "") + A + (X && p === "(" ? ")" : ""), H) {
          for (z = -1, Tt = _.length; ++z < Tt; )
            if (j = _.charCodeAt(z), 48 > j || j > 57) {
              A = (j === 46 ? i + _.slice(z + 1) : _.slice(z)) + A, _ = _.slice(0, z);
              break;
            }
        }
      }
      x && !m && (_ = e(_, 1 / 0));
      var Y = O.length + _.length + A.length, T = Y < y ? new Array(y - Y + 1).join(f) : "";
      switch (x && m && (_ = e(T + _, T.length ? y - A.length : 1 / 0), T = ""), d) {
        case "<":
          _ = O + _ + A + T;
          break;
        case "=":
          _ = O + T + _ + A;
          break;
        case "^":
          _ = T.slice(0, Y = T.length >> 1) + O + _ + A + T.slice(Y);
          break;
        default:
          _ = T + O + _ + A;
          break;
      }
      return a(_);
    }
    return B.toString = function() {
      return h + "";
    }, B;
  }
  function l(h, f) {
    var d = u((h = mn(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(Zt(f) / 3))) * 3, b = Math.pow(10, -p), m = oa[8 + p / 3];
    return function(y) {
      return d(b * y) + m;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var He, Qo, ts;
Ah({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ah(t) {
  return He = Mh(t), Qo = He.format, ts = He.formatPrefix, He;
}
function $h(t) {
  return Math.max(0, -Zt(Math.abs(t)));
}
function Nh(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Zt(e) / 3))) * 3 - Zt(Math.abs(t)));
}
function Th(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Zt(e) - Zt(t)) + 1;
}
function Sh(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Ph(t) {
  return function() {
    return t;
  };
}
function Eh(t) {
  return +t;
}
var sa = [0, 1];
function Xt(t) {
  return t;
}
function Er(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Ph(isNaN(e) ? NaN : 0.5);
}
function kh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Oh(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Er(i, r), a = n(o, a)) : (r = Er(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function zh(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Er(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Hu(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Ch(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ih() {
  var t = sa, e = sa, n = Rn, r, i, a, o = Xt, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return o !== Xt && (o = kh(t[0], t[f - 1])), s = f > 2 ? zh : Oh, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), G)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Eh), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = Jl, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Xt, l()) : o !== Xt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Rh() {
  return Ih()(Xt, Xt);
}
function qh(t, e, n, r) {
  var i = Gu(t, e, n), a;
  switch (r = mn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Nh(i, o)) && (r.precision = a), ts(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Th(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = $h(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Qo(r);
}
function jh(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Yu(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return qh(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Mr(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function ze() {
  var t = Rh();
  return t.copy = function() {
    return Ch(t, ze());
  }, Sh.apply(t, arguments), jh(t);
}
var Be = gn(), Fh = Math.PI / 3, Dh = Math.PI * 2 / 3;
function Lh(t) {
  var e;
  return t = (0.5 - t) * Math.PI, Be.r = 255 * (e = Math.sin(t)) * e, Be.g = 255 * (e = Math.sin(t + Fh)) * e, Be.b = 255 * (e = Math.sin(t + Dh)) * e, Be + "";
}
function de(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
de.prototype = {
  constructor: de,
  scale: function(t) {
    return t === 1 ? this : new de(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new de(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
de.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1aazq_40{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:16px}._widget_1aazq_40 ._title_1aazq_51{font-size:20px;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1aazq_40 ._label_1aazq_58{fill:var(--color-text);stroke:none}._widget_1aazq_40 ._lit_1aazq_63{fill:var(--color-lit)}._button_1aazq_67>._symbol_1aazq_67,._radio_1aazq_68>._radiobutton_1aazq_68>._symbol_1aazq_67{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74,._toggle_1aazq_75._selected_1aazq_74,._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74._lit_1aazq_63{fill:var(--color-selected)}._widget_1aazq_40 ._symbol_1aazq_67._lit_1aazq_63{fill:var(--color-lit-symbol)}._slider_1aazq_84>._track_1aazq_84,._toggle_1aazq_75>._track_1aazq_84{pointer-events:none}._slider_1aazq_84>._track_overlay_1aazq_89,._toggle_1aazq_75>._track_overlay_1aazq_89{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1aazq_84>._handle_1aazq_97,._toggle_1aazq_75>._handle_1aazq_97{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function rn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Hh(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function es(t) {
  let e, n, r;
  t.length !== 2 ? (e = rn, n = (s, c) => rn(t(s), c), r = (s, c) => t(s) - c) : (e = t === rn || t === Hh ? t : Bh, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Bh() {
  return 0;
}
function Xh(t) {
  return t === null ? NaN : +t;
}
const Uh = es(rn), Yh = Uh.right;
es(Xh).center;
const Gh = Math.sqrt(50), Vh = Math.sqrt(10), Kh = Math.sqrt(2);
function wn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Gh ? 10 : a >= Vh ? 5 : a >= Kh ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? wn(t, e, n * 2) : [s, c, u];
}
function Wh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? wn(e, t, n) : wn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function kr(t, e, n) {
  return e = +e, t = +t, n = +n, wn(t, e, n)[2];
}
function Zh(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? kr(e, t, n) : kr(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Xe(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function Jh(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var Qh = { value: () => {
} };
function hi() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new an(n);
}
function an(t) {
  this._ = t;
}
function td(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
an.prototype = hi.prototype = {
  constructor: an,
  on: function(t, e) {
    var n = this._, r = td(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = ed(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = ua(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ua(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new an(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function ed(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ua(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Qh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Or = "http://www.w3.org/1999/xhtml";
const ca = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Or,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Dn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), ca.hasOwnProperty(e) ? { space: ca[e], local: t } : t;
}
function nd(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Or && e.documentElement.namespaceURI === Or ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function rd(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ns(t) {
  var e = Dn(t);
  return (e.local ? rd : nd)(e);
}
function id() {
}
function di(t) {
  return t == null ? id : function() {
    return this.querySelector(t);
  };
}
function ad(t) {
  typeof t != "function" && (t = di(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new L(r, this._parents);
}
function od(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function sd() {
  return [];
}
function rs(t) {
  return t == null ? sd : function() {
    return this.querySelectorAll(t);
  };
}
function ud(t) {
  return function() {
    return od(t.apply(this, arguments));
  };
}
function cd(t) {
  typeof t == "function" ? t = ud(t) : t = rs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new L(r, i);
}
function is(t) {
  return function() {
    return this.matches(t);
  };
}
function as(t) {
  return function(e) {
    return e.matches(t);
  };
}
var ld = Array.prototype.find;
function fd(t) {
  return function() {
    return ld.call(this.children, t);
  };
}
function hd() {
  return this.firstElementChild;
}
function dd(t) {
  return this.select(t == null ? hd : fd(typeof t == "function" ? t : as(t)));
}
var pd = Array.prototype.filter;
function gd() {
  return Array.from(this.children);
}
function bd(t) {
  return function() {
    return pd.call(this.children, t);
  };
}
function yd(t) {
  return this.selectAll(t == null ? gd : bd(typeof t == "function" ? t : as(t)));
}
function _d(t) {
  typeof t != "function" && (t = is(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new L(r, this._parents);
}
function os(t) {
  return new Array(t.length);
}
function vd() {
  return new L(this._enter || this._groups.map(os), this._parents);
}
function xn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
xn.prototype = {
  constructor: xn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function md(t) {
  return function() {
    return t;
  };
}
function wd(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new xn(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function xd(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = a.length, f = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = d = o.call(c, c.__data__, s, e) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < h; ++s)
    d = o.call(t, a[s], s, a) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = a[s], u.delete(d)) : n[s] = new xn(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function Md(t) {
  return t.__data__;
}
function Ad(t, e) {
  if (!arguments.length) return Array.from(this, Md);
  var n = e ? xd : wd, r = this._parents, i = this._groups;
  typeof t != "function" && (t = md(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, d = $d(t.call(l, l && l.__data__, u, r)), p = d.length, b = s[u] = new Array(p), m = o[u] = new Array(p), y = c[u] = new Array(f);
    n(l, h, b, m, y, d, e);
    for (var x = 0, M = 0, g, v; x < p; ++x)
      if (g = b[x]) {
        for (x >= M && (M = x + 1); !(v = m[M]) && ++M < p; ) ;
        g._next = v || null;
      }
  }
  return o = new L(o, r), o._enter = s, o._exit = c, o;
}
function $d(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Nd() {
  return new L(this._exit || this._groups.map(os), this._parents);
}
function Td(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Sd(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), d, p = 0; p < h; ++p)
      (d = u[p] || l[p]) && (f[p] = d);
  for (; c < i; ++c)
    s[c] = n[c];
  return new L(s, this._parents);
}
function Pd() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ed(t) {
  t || (t = kd);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new L(i, this._parents).order();
}
function kd(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Od() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function zd() {
  return Array.from(this);
}
function Cd() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Id() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Rd() {
  return !this.node();
}
function qd(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function jd(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Fd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Dd(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Ld(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Hd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Bd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Xd(t, e) {
  var n = Dn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Fd : jd : typeof e == "function" ? n.local ? Bd : Hd : n.local ? Ld : Dd)(n, e));
}
function ss(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ud(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yd(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Gd(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Vd(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ud : typeof e == "function" ? Gd : Yd)(t, e, n ?? "")) : Jt(this.node(), t);
}
function Jt(t, e) {
  return t.style.getPropertyValue(e) || ss(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Kd(t) {
  return function() {
    delete this[t];
  };
}
function Wd(t, e) {
  return function() {
    this[t] = e;
  };
}
function Zd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Jd(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Kd : typeof e == "function" ? Zd : Wd)(t, e)) : this.node()[t];
}
function us(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new cs(t);
}
function cs(t) {
  this._node = t, this._names = us(t.getAttribute("class") || "");
}
cs.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ls(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function fs(t, e) {
  for (var n = pi(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Qd(t) {
  return function() {
    ls(this, t);
  };
}
function t0(t) {
  return function() {
    fs(this, t);
  };
}
function e0(t, e) {
  return function() {
    (e.apply(this, arguments) ? ls : fs)(this, t);
  };
}
function n0(t, e) {
  var n = us(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? e0 : e ? Qd : t0)(n, e));
}
function r0() {
  this.textContent = "";
}
function i0(t) {
  return function() {
    this.textContent = t;
  };
}
function a0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function o0(t) {
  return arguments.length ? this.each(t == null ? r0 : (typeof t == "function" ? a0 : i0)(t)) : this.node().textContent;
}
function s0() {
  this.innerHTML = "";
}
function u0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function c0(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function l0(t) {
  return arguments.length ? this.each(t == null ? s0 : (typeof t == "function" ? c0 : u0)(t)) : this.node().innerHTML;
}
function f0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function h0() {
  return this.each(f0);
}
function d0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function p0() {
  return this.each(d0);
}
function g0(t) {
  var e = typeof t == "function" ? t : ns(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function b0() {
  return null;
}
function y0(t, e) {
  var n = typeof t == "function" ? t : ns(t), r = e == null ? b0 : typeof e == "function" ? e : di(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function _0() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function v0() {
  return this.each(_0);
}
function m0() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function w0() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function x0(t) {
  return this.select(t ? w0 : m0);
}
function M0(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function A0(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function $0(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function N0(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function T0(t, e, n) {
  return function() {
    var r = this.__on, i, a = A0(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function S0(t, e, n) {
  var r = $0(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? T0 : N0, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function hs(t, e, n) {
  var r = ss(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function P0(t, e) {
  return function() {
    return hs(this, t, e);
  };
}
function E0(t, e) {
  return function() {
    return hs(this, t, e.apply(this, arguments));
  };
}
function k0(t, e) {
  return this.each((typeof e == "function" ? E0 : P0)(t, e));
}
function* O0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var ds = [null];
function L(t, e) {
  this._groups = t, this._parents = e;
}
function Ce() {
  return new L([[document.documentElement]], ds);
}
function z0() {
  return this;
}
L.prototype = Ce.prototype = {
  constructor: L,
  select: ad,
  selectAll: cd,
  selectChild: dd,
  selectChildren: yd,
  filter: _d,
  data: Ad,
  enter: vd,
  exit: Nd,
  join: Td,
  merge: Sd,
  selection: z0,
  order: Pd,
  sort: Ed,
  call: Od,
  nodes: zd,
  node: Cd,
  size: Id,
  empty: Rd,
  each: qd,
  attr: Xd,
  style: Vd,
  property: Jd,
  classed: n0,
  text: o0,
  html: l0,
  raise: h0,
  lower: p0,
  append: g0,
  insert: y0,
  remove: v0,
  clone: x0,
  datum: M0,
  on: S0,
  dispatch: k0,
  [Symbol.iterator]: O0
};
function C(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], ds);
}
function C0(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function zr(t, e) {
  if (t = C0(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const I0 = { passive: !1 }, Me = { capture: !0, passive: !1 };
function lr(t) {
  t.stopImmediatePropagation();
}
function Gt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function R0(t) {
  var e = t.document.documentElement, n = C(t).on("dragstart.drag", Gt, Me);
  "onselectstart" in e ? n.on("selectstart.drag", Gt, Me) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function q0(t, e) {
  var n = t.document.documentElement, r = C(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Gt, Me), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ue = (t) => () => t;
function Cr(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Cr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function j0(t) {
  return !t.ctrlKey && !t.button;
}
function F0() {
  return this.parentNode;
}
function D0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function L0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function H0() {
  var t = j0, e = F0, n = D0, r = L0, i = {}, a = hi("start", "drag", "end"), o = 0, s, c, u, l, h = 0;
  function f(g) {
    g.on("mousedown.drag", d).filter(r).on("touchstart.drag", m).on("touchmove.drag", y, I0).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(g, v) {
    if (!(l || !t.call(this, g, v))) {
      var S = M(this, e.call(this, g, v), g, v, "mouse");
      S && (C(g.view).on("mousemove.drag", p, Me).on("mouseup.drag", b, Me), R0(g.view), lr(g), u = !1, s = g.clientX, c = g.clientY, S("start", g));
    }
  }
  function p(g) {
    if (Gt(g), !u) {
      var v = g.clientX - s, S = g.clientY - c;
      u = v * v + S * S > h;
    }
    i.mouse("drag", g);
  }
  function b(g) {
    C(g.view).on("mousemove.drag mouseup.drag", null), q0(g.view, u), Gt(g), i.mouse("end", g);
  }
  function m(g, v) {
    if (t.call(this, g, v)) {
      var S = g.changedTouches, P = e.call(this, g, v), k = S.length, H, B;
      for (H = 0; H < k; ++H)
        (B = M(this, P, g, v, S[H].identifier, S[H])) && (lr(g), B("start", g, S[H]));
    }
  }
  function y(g) {
    var v = g.changedTouches, S = v.length, P, k;
    for (P = 0; P < S; ++P)
      (k = i[v[P].identifier]) && (Gt(g), k("drag", g, v[P]));
  }
  function x(g) {
    var v = g.changedTouches, S = v.length, P, k;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), P = 0; P < S; ++P)
      (k = i[v[P].identifier]) && (lr(g), k("end", g, v[P]));
  }
  function M(g, v, S, P, k, H) {
    var B = a.copy(), _ = zr(H || S, v), O, A, z;
    if ((z = n.call(g, new Cr("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: k,
      active: o,
      x: _[0],
      y: _[1],
      dx: 0,
      dy: 0,
      dispatch: B
    }), P)) != null)
      return O = z.x - _[0] || 0, A = z.y - _[1] || 0, function Tt(j, X, Y) {
        var T = _, sr;
        switch (j) {
          case "start":
            i[k] = Tt, sr = o++;
            break;
          case "end":
            delete i[k], --o;
          // falls through
          case "drag":
            _ = zr(Y || X, v), sr = o;
            break;
        }
        B.call(
          j,
          g,
          new Cr(j, {
            sourceEvent: X,
            subject: z,
            target: f,
            identifier: k,
            active: sr,
            x: _[0] + O,
            y: _[1] + A,
            dx: _[0] - T[0],
            dy: _[1] - T[1],
            dispatch: B
          }),
          P
        );
      };
  }
  return f.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Ue(!!g), f) : t;
  }, f.container = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Ue(g), f) : e;
  }, f.subject = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Ue(g), f) : n;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Ue(!!g), f) : r;
  }, f.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, f) : Math.sqrt(h);
  }, f;
}
function gi(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function ps(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ie() {
}
var Ae = 0.7, Mn = 1 / Ae, Vt = "\\s*([+-]?\\d+)\\s*", $e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", B0 = /^#([0-9a-f]{3,8})$/, X0 = new RegExp(`^rgb\\(${Vt},${Vt},${Vt}\\)$`), U0 = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Y0 = new RegExp(`^rgba\\(${Vt},${Vt},${Vt},${$e}\\)$`), G0 = new RegExp(`^rgba\\(${nt},${nt},${nt},${$e}\\)$`), V0 = new RegExp(`^hsl\\(${$e},${nt},${nt}\\)$`), K0 = new RegExp(`^hsla\\(${$e},${nt},${nt},${$e}\\)$`), la = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
gi(Ie, Rt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fa,
  // Deprecated! Use color.formatHex.
  formatHex: fa,
  formatHex8: W0,
  formatHsl: Z0,
  formatRgb: ha,
  toString: ha
});
function fa() {
  return this.rgb().formatHex();
}
function W0() {
  return this.rgb().formatHex8();
}
function Z0() {
  return gs(this).formatHsl();
}
function ha() {
  return this.rgb().formatRgb();
}
function Rt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = B0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? da(e) : n === 3 ? new q(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ye(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ye(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = X0.exec(t)) ? new q(e[1], e[2], e[3], 1) : (e = U0.exec(t)) ? new q(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Y0.exec(t)) ? Ye(e[1], e[2], e[3], e[4]) : (e = G0.exec(t)) ? Ye(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = V0.exec(t)) ? ba(e[1], e[2] / 100, e[3] / 100, 1) : (e = K0.exec(t)) ? ba(e[1], e[2] / 100, e[3] / 100, e[4]) : la.hasOwnProperty(t) ? da(la[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function da(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ye(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new q(t, e, n, r);
}
function J0(t) {
  return t instanceof Ie || (t = Rt(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function Ir(t, e, n, r) {
  return arguments.length === 1 ? J0(t) : new q(t, e, n, r ?? 1);
}
function q(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
gi(q, Ir, ps(Ie, {
  brighter(t) {
    return t = t == null ? Mn : Math.pow(Mn, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ae : Math.pow(Ae, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(Ot(this.r), Ot(this.g), Ot(this.b), An(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: pa,
  // Deprecated! Use color.formatHex.
  formatHex: pa,
  formatHex8: Q0,
  formatRgb: ga,
  toString: ga
}));
function pa() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}`;
}
function Q0() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ga() {
  const t = An(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ot(this.r)}, ${Ot(this.g)}, ${Ot(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function An(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ot(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Et(t) {
  return t = Ot(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ba(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new W(t, e, n, r);
}
function gs(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ie || (t = Rt(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new W(o, s, c, t.opacity);
}
function tp(t, e, n, r) {
  return arguments.length === 1 ? gs(t) : new W(t, e, n, r ?? 1);
}
function W(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
gi(W, tp, ps(Ie, {
  brighter(t) {
    return t = t == null ? Mn : Math.pow(Mn, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ae : Math.pow(Ae, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new q(
      fr(t >= 240 ? t - 240 : t + 120, i, r),
      fr(t, i, r),
      fr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(ya(this.h), Ge(this.s), Ge(this.l), An(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = An(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ya(this.h)}, ${Ge(this.s) * 100}%, ${Ge(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ya(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ge(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function fr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const bi = (t) => () => t;
function ep(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function np(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function rp(t) {
  return (t = +t) == 1 ? bs : function(e, n) {
    return n - e ? np(e, n, t) : bi(isNaN(e) ? n : e);
  };
}
function bs(t, e) {
  var n = e - t;
  return n ? ep(t, n) : bi(isNaN(t) ? e : t);
}
const $n = function t(e) {
  var n = rp(e);
  function r(i, a) {
    var o = n((i = Ir(i)).r, (a = Ir(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = bs(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ip(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function ap(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function op(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = yi(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function sp(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function V(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function up(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = yi(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Rr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, hr = new RegExp(Rr.source, "g");
function cp(t) {
  return function() {
    return t;
  };
}
function lp(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ys(t, e) {
  var n = Rr.lastIndex = hr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Rr.exec(t)) && (i = hr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: V(r, i) })), n = hr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? lp(c[0].x) : cp(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function yi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? bi(e) : (n === "number" ? V : n === "string" ? (r = Rt(e)) ? (e = r, $n) : ys : e instanceof Rt ? $n : e instanceof Date ? sp : ap(e) ? ip : Array.isArray(e) ? op : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? up : V)(t, e);
}
function fp(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var _a = 180 / Math.PI, _s = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vs(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * _a,
    skewX: Math.atan(c) * _a,
    scaleX: o,
    scaleY: s
  };
}
var Ve;
function hp(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? _s : vs(e.a, e.b, e.c, e.d, e.e, e.f);
}
function dp(t) {
  return t == null || (Ve || (Ve = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ve.setAttribute("transform", t), !(t = Ve.transform.baseVal.consolidate())) ? _s : (t = t.matrix, vs(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ms(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, d, p) {
    if (u !== h || l !== f) {
      var b = d.push("translate(", null, e, null, n);
      p.push({ i: b - 4, x: V(u, h) }, { i: b - 2, x: V(l, f) });
    } else (h || f) && d.push("translate(" + h + e + f + n);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, d, p) {
    if (u !== h || l !== f) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: V(u, h) }, { i: b - 2, x: V(l, f) });
    } else (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(d) {
      for (var p = -1, b = f.length, m; ++p < b; ) h[(m = f[p]).i] = m.x(d);
      return h.join("");
    };
  };
}
var pp = ms(hp, "px, ", "px)", "deg)"), gp = ms(dp, ", ", ")", ")"), Qt = 0, pe = 0, ue = 0, ws = 1e3, Nn, ge, Tn = 0, qt = 0, Ln = 0, Ne = typeof performance == "object" && performance.now ? performance : Date, xs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function _i() {
  return qt || (xs(bp), qt = Ne.now() + Ln);
}
function bp() {
  qt = 0;
}
function Sn() {
  this._call = this._time = this._next = null;
}
Sn.prototype = Ms.prototype = {
  constructor: Sn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? _i() : +n) + (e == null ? 0 : +e), !this._next && ge !== this && (ge ? ge._next = this : Nn = this, ge = this), this._call = t, this._time = n, qr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, qr());
  }
};
function Ms(t, e, n) {
  var r = new Sn();
  return r.restart(t, e, n), r;
}
function yp() {
  _i(), ++Qt;
  for (var t = Nn, e; t; )
    (e = qt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Qt;
}
function va() {
  qt = (Tn = Ne.now()) + Ln, Qt = pe = 0;
  try {
    yp();
  } finally {
    Qt = 0, vp(), qt = 0;
  }
}
function _p() {
  var t = Ne.now(), e = t - Tn;
  e > ws && (Ln -= e, Tn = t);
}
function vp() {
  for (var t, e = Nn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Nn = n);
  ge = t, qr(r);
}
function qr(t) {
  if (!Qt) {
    pe && (pe = clearTimeout(pe));
    var e = t - qt;
    e > 24 ? (t < 1 / 0 && (pe = setTimeout(va, t - Ne.now() - Ln)), ue && (ue = clearInterval(ue))) : (ue || (Tn = Ne.now(), ue = setInterval(_p, ws)), Qt = 1, xs(va));
  }
}
function ma(t, e, n) {
  var r = new Sn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var mp = hi("start", "end", "cancel", "interrupt"), wp = [], As = 0, wa = 1, jr = 2, on = 3, xa = 4, Fr = 5, sn = 6;
function Hn(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  xp(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: mp,
    tween: wp,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: As
  });
}
function vi(t, e) {
  var n = Q(t, e);
  if (n.state > As) throw new Error("too late; already scheduled");
  return n;
}
function at(t, e) {
  var n = Q(t, e);
  if (n.state > on) throw new Error("too late; already running");
  return n;
}
function Q(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function xp(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Ms(a, 0, n.time);
  function a(u) {
    n.state = wa, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, h, f, d;
    if (n.state !== wa) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === on) return ma(o);
        d.state === xa ? (d.state = sn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = sn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (ma(function() {
      n.state === on && (n.state = xa, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = jr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === jr) {
      for (n.state = on, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Fr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === Fr && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = sn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Mp(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > jr && r.state < Fr, r.state = sn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Ap(t) {
  return this.each(function() {
    Mp(this, t);
  });
}
function $p(t, e) {
  var n, r;
  return function() {
    var i = at(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Np(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = at(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function Tp(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? $p : Np)(n, t, e));
}
function mi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Q(i, r).value[e];
  };
}
function $s(t, e) {
  var n;
  return (typeof e == "number" ? V : e instanceof Rt ? $n : (n = Rt(e)) ? (e = n, $n) : ys)(t, e);
}
function Sp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ep(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function kp(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Op(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function zp(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Cp(t, e) {
  var n = Dn(t), r = n === "transform" ? gp : $s;
  return this.attrTween(t, typeof e == "function" ? (n.local ? zp : Op)(n, r, mi(this, "attr." + t, e)) : e == null ? (n.local ? Pp : Sp)(n) : (n.local ? kp : Ep)(n, r, e));
}
function Ip(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Rp(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function qp(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Rp(t, a)), n;
  }
  return i._value = e, i;
}
function jp(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Ip(t, a)), n;
  }
  return i._value = e, i;
}
function Fp(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Dn(t);
  return this.tween(n, (r.local ? qp : jp)(r, e));
}
function Dp(t, e) {
  return function() {
    vi(this, t).delay = +e.apply(this, arguments);
  };
}
function Lp(t, e) {
  return e = +e, function() {
    vi(this, t).delay = e;
  };
}
function Hp(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Dp : Lp)(e, t)) : Q(this.node(), e).delay;
}
function Bp(t, e) {
  return function() {
    at(this, t).duration = +e.apply(this, arguments);
  };
}
function Xp(t, e) {
  return e = +e, function() {
    at(this, t).duration = e;
  };
}
function Up(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Bp : Xp)(e, t)) : Q(this.node(), e).duration;
}
function Yp(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    at(this, t).ease = e;
  };
}
function Gp(t) {
  var e = this._id;
  return arguments.length ? this.each(Yp(e, t)) : Q(this.node(), e).ease;
}
function Vp(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    at(this, t).ease = n;
  };
}
function Kp(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Vp(this._id, t));
}
function Wp(t) {
  typeof t != "function" && (t = is(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new ht(r, this._parents, this._name, this._id);
}
function Zp(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = o[s] = new Array(l), f, d = 0; d < l; ++d)
      (f = c[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new ht(o, this._parents, this._name, this._id);
}
function Jp(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Qp(t, e, n) {
  var r, i, a = Jp(e) ? vi : at;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function tg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Q(this.node(), n).on.on(t) : this.each(Qp(n, t, e));
}
function eg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function ng() {
  return this.on("end.remove", eg(this._id));
}
function rg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = di(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Hn(u[f], e, n, f, u, Q(l, n)));
  return new ht(a, this._parents, e, n);
}
function ig(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = rs(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), d, p = Q(l, n), b = 0, m = f.length; b < m; ++b)
          (d = f[b]) && Hn(d, e, n, b, f, p);
        a.push(f), o.push(l);
      }
  return new ht(a, o, e, n);
}
var ag = Ce.prototype.constructor;
function og() {
  return new ag(this._groups, this._parents);
}
function sg(t, e) {
  var n, r, i;
  return function() {
    var a = Jt(this, t), o = (this.style.removeProperty(t), Jt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Ns(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ug(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Jt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function cg(t, e, n) {
  var r, i, a;
  return function() {
    var o = Jt(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Jt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function lg(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = at(this, t), u = c.on, l = c.value[a] == null ? s || (s = Ns(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function fg(t, e, n) {
  var r = (t += "") == "transform" ? pp : $s;
  return e == null ? this.styleTween(t, sg(t, r)).on("end.style." + t, Ns(t)) : typeof e == "function" ? this.styleTween(t, cg(t, r, mi(this, "style." + t, e))).each(lg(this._id, t)) : this.styleTween(t, ug(t, r, e), n).on("end.style." + t, null);
}
function hg(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function dg(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && hg(t, o, n)), r;
  }
  return a._value = e, a;
}
function pg(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, dg(t, e, n ?? ""));
}
function gg(t) {
  return function() {
    this.textContent = t;
  };
}
function bg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function yg(t) {
  return this.tween("text", typeof t == "function" ? bg(mi(this, "text", t)) : gg(t == null ? "" : t + ""));
}
function _g(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function vg(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && _g(i)), e;
  }
  return r._value = t, r;
}
function mg(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, vg(t));
}
function wg() {
  for (var t = this._name, e = this._id, n = Ts(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = Q(c, e);
        Hn(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new ht(r, this._parents, t, n);
}
function xg() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = at(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var Mg = 0;
function ht(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Ts() {
  return ++Mg;
}
var st = Ce.prototype;
ht.prototype = {
  constructor: ht,
  select: rg,
  selectAll: ig,
  selectChild: st.selectChild,
  selectChildren: st.selectChildren,
  filter: Wp,
  merge: Zp,
  selection: og,
  transition: wg,
  call: st.call,
  nodes: st.nodes,
  node: st.node,
  size: st.size,
  empty: st.empty,
  each: st.each,
  on: tg,
  attr: Cp,
  attrTween: Fp,
  style: fg,
  styleTween: pg,
  text: yg,
  textTween: mg,
  remove: ng,
  tween: Tp,
  delay: Hp,
  duration: Up,
  ease: Gp,
  easeVarying: Kp,
  end: xg,
  [Symbol.iterator]: st[Symbol.iterator]
};
function Ag(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var $g = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ag
};
function Ng(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Tg(t) {
  var e, n;
  t instanceof ht ? (e = t._id, t = t._name) : (e = Ts(), (n = $g).time = _i(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Hn(c, t, e, u, o, n || Ng(c, e));
  return new ht(r, this._parents, t, e);
}
Ce.prototype.interrupt = Ap;
Ce.prototype.transition = Tg;
const Dr = Math.PI, Lr = 2 * Dr, St = 1e-6, Sg = Lr - St;
function Ss(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Pg(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Ss;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Ps {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ss : Pg(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, h = s - n, f = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > St) if (!(Math.abs(h * c - u * l) > St) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - o, p = i - s, b = c * c + u * u, m = d * d + p * p, y = Math.sqrt(b), x = Math.sqrt(f), M = a * Math.tan((Dr - Math.acos((b + f - m) / (2 * y * x))) / 2), g = M / x, v = M / y;
      Math.abs(g - 1) > St && this._append`L${e + g * l},${n + g * h}`, this._append`A${a},${a},0,0,${+(h * d > l * p)},${this._x1 = e + v * c},${this._y1 = n + v * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > St || Math.abs(this._y1 - l) > St) && this._append`L${u},${l}`, r && (f < 0 && (f = f % Lr + Lr), f > Sg ? this._append`A${r},${r},0,1,${h},${e - s},${n - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = l}` : f > St && this._append`A${r},${r},0,${+(f >= Dr)},${h},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function tt() {
  return new Ps();
}
tt.prototype = Ps.prototype;
function Eg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Pn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function te(t) {
  return t = Pn(Math.abs(t)), t ? t[1] : NaN;
}
function kg(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Og(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var zg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function En(t) {
  if (!(e = zg.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new wi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
En.prototype = wi.prototype;
function wi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
wi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Cg(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Es;
function Ig(t, e) {
  var n = Pn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (Es = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Pn(t, Math.max(0, e + a - 1))[0];
}
function Ma(t, e) {
  var n = Pn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Aa = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Eg,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Ma(t * 100, e),
  r: Ma,
  s: Ig,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function $a(t) {
  return t;
}
var Na = Array.prototype.map, Ta = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Rg(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? $a : kg(Na.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? $a : Og(Na.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = En(h);
    var f = h.fill, d = h.align, p = h.sign, b = h.symbol, m = h.zero, y = h.width, x = h.comma, M = h.precision, g = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : Aa[v] || (M === void 0 && (M = 12), g = !0, v = "g"), (m || f === "0" && d === "=") && (m = !0, f = "0", d = "=");
    var S = b === "$" ? n : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = b === "$" ? r : /[%p]/.test(v) ? o : "", k = Aa[v], H = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function B(_) {
      var O = S, A = P, z, Tt, j;
      if (v === "c")
        A = k(_) + A, _ = "";
      else {
        _ = +_;
        var X = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : k(Math.abs(_), M), g && (_ = Cg(_)), X && +_ == 0 && p !== "+" && (X = !1), O = (X ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + O, A = (v === "s" ? Ta[8 + Es / 3] : "") + A + (X && p === "(" ? ")" : ""), H) {
          for (z = -1, Tt = _.length; ++z < Tt; )
            if (j = _.charCodeAt(z), 48 > j || j > 57) {
              A = (j === 46 ? i + _.slice(z + 1) : _.slice(z)) + A, _ = _.slice(0, z);
              break;
            }
        }
      }
      x && !m && (_ = e(_, 1 / 0));
      var Y = O.length + _.length + A.length, T = Y < y ? new Array(y - Y + 1).join(f) : "";
      switch (x && m && (_ = e(T + _, T.length ? y - A.length : 1 / 0), T = ""), d) {
        case "<":
          _ = O + _ + A + T;
          break;
        case "=":
          _ = O + T + _ + A;
          break;
        case "^":
          _ = T.slice(0, Y = T.length >> 1) + O + _ + A + T.slice(Y);
          break;
        default:
          _ = T + O + _ + A;
          break;
      }
      return a(_);
    }
    return B.toString = function() {
      return h + "";
    }, B;
  }
  function l(h, f) {
    var d = u((h = En(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(te(f) / 3))) * 3, b = Math.pow(10, -p), m = Ta[8 + p / 3];
    return function(y) {
      return d(b * y) + m;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Ke, Bn, ks;
qg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function qg(t) {
  return Ke = Rg(t), Bn = Ke.format, ks = Ke.formatPrefix, Ke;
}
function jg(t) {
  return Math.max(0, -te(Math.abs(t)));
}
function Fg(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(te(e) / 3))) * 3 - te(Math.abs(t)));
}
function Dg(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, te(e) - te(t)) + 1;
}
function Lg(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Hg(t) {
  return function() {
    return t;
  };
}
function Bg(t) {
  return +t;
}
var Sa = [0, 1];
function Ut(t) {
  return t;
}
function Hr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Hg(isNaN(e) ? NaN : 0.5);
}
function Xg(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Ug(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Hr(i, r), a = n(o, a)) : (r = Hr(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Yg(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Hr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Yh(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Gg(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Vg() {
  var t = Sa, e = Sa, n = yi, r, i, a, o = Ut, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return o !== Ut && (o = Xg(t[0], t[f - 1])), s = f > 2 ? Yg : Ug, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Bg), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = fp, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ut, l()) : o !== Ut;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, d) {
    return r = f, i = d, l();
  };
}
function Kg() {
  return Vg()(Ut, Ut);
}
function Wg(t, e, n, r) {
  var i = Zh(t, e, n), a;
  switch (r = En(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Fg(i, o)) && (r.precision = a), ks(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Dg(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = jg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Bn(r);
}
function Zg(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Wh(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Wg(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = kr(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function ee() {
  var t = Kg();
  return t.copy = function() {
    return Gg(t, ee());
  }, Lg.apply(t, arguments), Zg(t);
}
function be(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
be.prototype = {
  constructor: be,
  scale: function(t) {
    return t === 1 ? this : new be(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new be(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
be.prototype;
var Os = typeof global == "object" && global && global.Object === Object && global, Jg = typeof self == "object" && self && self.Object === Object && self, pt = Os || Jg || Function("return this")(), rt = pt.Symbol, zs = Object.prototype, Qg = zs.hasOwnProperty, t1 = zs.toString, ce = rt ? rt.toStringTag : void 0;
function e1(t) {
  var e = Qg.call(t, ce), n = t[ce];
  try {
    t[ce] = void 0;
    var r = !0;
  } catch {
  }
  var i = t1.call(t);
  return r && (e ? t[ce] = n : delete t[ce]), i;
}
var n1 = Object.prototype, r1 = n1.toString;
function i1(t) {
  return r1.call(t);
}
var a1 = "[object Null]", o1 = "[object Undefined]", Pa = rt ? rt.toStringTag : void 0;
function ie(t) {
  return t == null ? t === void 0 ? o1 : a1 : Pa && Pa in Object(t) ? e1(t) : i1(t);
}
function ne(t) {
  return t != null && typeof t == "object";
}
var s1 = "[object Symbol]";
function Xn(t) {
  return typeof t == "symbol" || ne(t) && ie(t) == s1;
}
function Cs(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var Z = Array.isArray, Ea = rt ? rt.prototype : void 0, ka = Ea ? Ea.toString : void 0;
function Is(t) {
  if (typeof t == "string")
    return t;
  if (Z(t))
    return Cs(t, Is) + "";
  if (Xn(t))
    return ka ? ka.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var u1 = /\s/;
function c1(t) {
  for (var e = t.length; e-- && u1.test(t.charAt(e)); )
    ;
  return e;
}
var l1 = /^\s+/;
function f1(t) {
  return t && t.slice(0, c1(t) + 1).replace(l1, "");
}
function re(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Oa = NaN, h1 = /^[-+]0x[0-9a-f]+$/i, d1 = /^0b[01]+$/i, p1 = /^0o[0-7]+$/i, g1 = parseInt;
function b1(t) {
  if (typeof t == "number")
    return t;
  if (Xn(t))
    return Oa;
  if (re(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = re(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = f1(t);
  var n = d1.test(t);
  return n || p1.test(t) ? g1(t.slice(2), n ? 2 : 8) : h1.test(t) ? Oa : +t;
}
var y1 = 1 / 0, _1 = 17976931348623157e292;
function dr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = b1(t), t === y1 || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * _1;
  }
  return t === t ? t : 0;
}
function v1(t) {
  return t;
}
var m1 = "[object AsyncFunction]", w1 = "[object Function]", x1 = "[object GeneratorFunction]", M1 = "[object Proxy]";
function Rs(t) {
  if (!re(t))
    return !1;
  var e = ie(t);
  return e == w1 || e == x1 || e == m1 || e == M1;
}
var pr = pt["__core-js_shared__"], za = function() {
  var t = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function A1(t) {
  return !!za && za in t;
}
var $1 = Function.prototype, N1 = $1.toString;
function Dt(t) {
  if (t != null) {
    try {
      return N1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var T1 = /[\\^$.*+?()[\]{}|]/g, S1 = /^\[object .+?Constructor\]$/, P1 = Function.prototype, E1 = Object.prototype, k1 = P1.toString, O1 = E1.hasOwnProperty, z1 = RegExp(
  "^" + k1.call(O1).replace(T1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function C1(t) {
  if (!re(t) || A1(t))
    return !1;
  var e = Rs(t) ? z1 : S1;
  return e.test(Dt(t));
}
function I1(t, e) {
  return t == null ? void 0 : t[e];
}
function ae(t, e) {
  var n = I1(t, e);
  return C1(n) ? n : void 0;
}
var Br = ae(pt, "WeakMap"), R1 = 9007199254740991, q1 = /^(?:0|[1-9]\d*)$/;
function xi(t, e) {
  var n = typeof t;
  return e = e ?? R1, !!e && (n == "number" || n != "symbol" && q1.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Mi(t, e) {
  return t === e || t !== t && e !== e;
}
var j1 = 9007199254740991;
function Ai(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= j1;
}
function Un(t) {
  return t != null && Ai(t.length) && !Rs(t);
}
function F1(t, e, n) {
  if (!re(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Un(n) && xi(e, n.length) : r == "string" && e in n) ? Mi(n[e], t) : !1;
}
var D1 = Object.prototype;
function L1(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || D1;
  return t === n;
}
function H1(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var B1 = "[object Arguments]";
function Ca(t) {
  return ne(t) && ie(t) == B1;
}
var qs = Object.prototype, X1 = qs.hasOwnProperty, U1 = qs.propertyIsEnumerable, $i = Ca(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ca : function(t) {
  return ne(t) && X1.call(t, "callee") && !U1.call(t, "callee");
};
function Y1() {
  return !1;
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, Ia = js && typeof module == "object" && module && !module.nodeType && module, G1 = Ia && Ia.exports === js, Ra = G1 ? pt.Buffer : void 0, V1 = Ra ? Ra.isBuffer : void 0, Xr = V1 || Y1, K1 = "[object Arguments]", W1 = "[object Array]", Z1 = "[object Boolean]", J1 = "[object Date]", Q1 = "[object Error]", tb = "[object Function]", eb = "[object Map]", nb = "[object Number]", rb = "[object Object]", ib = "[object RegExp]", ab = "[object Set]", ob = "[object String]", sb = "[object WeakMap]", ub = "[object ArrayBuffer]", cb = "[object DataView]", lb = "[object Float32Array]", fb = "[object Float64Array]", hb = "[object Int8Array]", db = "[object Int16Array]", pb = "[object Int32Array]", gb = "[object Uint8Array]", bb = "[object Uint8ClampedArray]", yb = "[object Uint16Array]", _b = "[object Uint32Array]", $ = {};
$[lb] = $[fb] = $[hb] = $[db] = $[pb] = $[gb] = $[bb] = $[yb] = $[_b] = !0;
$[K1] = $[W1] = $[ub] = $[Z1] = $[cb] = $[J1] = $[Q1] = $[tb] = $[eb] = $[nb] = $[rb] = $[ib] = $[ab] = $[ob] = $[sb] = !1;
function vb(t) {
  return ne(t) && Ai(t.length) && !!$[ie(t)];
}
function mb(t) {
  return function(e) {
    return t(e);
  };
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, ye = Fs && typeof module == "object" && module && !module.nodeType && module, wb = ye && ye.exports === Fs, gr = wb && Os.process, qa = function() {
  try {
    var t = ye && ye.require && ye.require("util").types;
    return t || gr && gr.binding && gr.binding("util");
  } catch {
  }
}(), ja = qa && qa.isTypedArray, Ds = ja ? mb(ja) : vb, xb = Object.prototype, Mb = xb.hasOwnProperty;
function Ab(t, e) {
  var n = Z(t), r = !n && $i(t), i = !n && !r && Xr(t), a = !n && !r && !i && Ds(t), o = n || r || i || a, s = o ? H1(t.length, String) : [], c = s.length;
  for (var u in t)
    Mb.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    xi(u, c))) && s.push(u);
  return s;
}
function $b(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Nb = $b(Object.keys, Object), Tb = Object.prototype, Sb = Tb.hasOwnProperty;
function Pb(t) {
  if (!L1(t))
    return Nb(t);
  var e = [];
  for (var n in Object(t))
    Sb.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ni(t) {
  return Un(t) ? Ab(t) : Pb(t);
}
var Eb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kb = /^\w*$/;
function Ti(t, e) {
  if (Z(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Xn(t) ? !0 : kb.test(t) || !Eb.test(t) || e != null && t in Object(e);
}
var Te = ae(Object, "create");
function Ob() {
  this.__data__ = Te ? Te(null) : {}, this.size = 0;
}
function zb(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Cb = "__lodash_hash_undefined__", Ib = Object.prototype, Rb = Ib.hasOwnProperty;
function qb(t) {
  var e = this.__data__;
  if (Te) {
    var n = e[t];
    return n === Cb ? void 0 : n;
  }
  return Rb.call(e, t) ? e[t] : void 0;
}
var jb = Object.prototype, Fb = jb.hasOwnProperty;
function Db(t) {
  var e = this.__data__;
  return Te ? e[t] !== void 0 : Fb.call(e, t);
}
var Lb = "__lodash_hash_undefined__";
function Hb(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Te && e === void 0 ? Lb : e, this;
}
function jt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
jt.prototype.clear = Ob;
jt.prototype.delete = zb;
jt.prototype.get = qb;
jt.prototype.has = Db;
jt.prototype.set = Hb;
function Bb() {
  this.__data__ = [], this.size = 0;
}
function Yn(t, e) {
  for (var n = t.length; n--; )
    if (Mi(t[n][0], e))
      return n;
  return -1;
}
var Xb = Array.prototype, Ub = Xb.splice;
function Yb(t) {
  var e = this.__data__, n = Yn(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Ub.call(e, n, 1), --this.size, !0;
}
function Gb(t) {
  var e = this.__data__, n = Yn(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Vb(t) {
  return Yn(this.__data__, t) > -1;
}
function Kb(t, e) {
  var n = this.__data__, r = Yn(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function gt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = Bb;
gt.prototype.delete = Yb;
gt.prototype.get = Gb;
gt.prototype.has = Vb;
gt.prototype.set = Kb;
var Se = ae(pt, "Map");
function Wb() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (Se || gt)(),
    string: new jt()
  };
}
function Zb(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Gn(t, e) {
  var n = t.__data__;
  return Zb(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Jb(t) {
  var e = Gn(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Qb(t) {
  return Gn(this, t).get(t);
}
function ty(t) {
  return Gn(this, t).has(t);
}
function ey(t, e) {
  var n = Gn(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = Wb;
bt.prototype.delete = Jb;
bt.prototype.get = Qb;
bt.prototype.has = ty;
bt.prototype.set = ey;
var ny = "Expected a function";
function Si(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(ny);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Si.Cache || bt)(), n;
}
Si.Cache = bt;
var ry = 500;
function iy(t) {
  var e = Si(t, function(r) {
    return n.size === ry && n.clear(), r;
  }), n = e.cache;
  return e;
}
var ay = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oy = /\\(\\)?/g, sy = iy(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(ay, function(n, r, i, a) {
    e.push(i ? a.replace(oy, "$1") : r || n);
  }), e;
});
function uy(t) {
  return t == null ? "" : Is(t);
}
function Ls(t, e) {
  return Z(t) ? t : Ti(t, e) ? [t] : sy(uy(t));
}
function Vn(t) {
  if (typeof t == "string" || Xn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Hs(t, e) {
  e = Ls(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Vn(e[n++])];
  return n && n == r ? t : void 0;
}
function cy(t, e, n) {
  var r = t == null ? void 0 : Hs(t, e);
  return r === void 0 ? n : r;
}
function Bs(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Fa = rt ? rt.isConcatSpreadable : void 0;
function ly(t) {
  return Z(t) || $i(t) || !!(Fa && t && t[Fa]);
}
function fy(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = ly), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Bs(i, s) : i[i.length] = s;
  }
  return i;
}
function hy(t) {
  var e = t == null ? 0 : t.length;
  return e ? fy(t) : [];
}
function dy() {
  this.__data__ = new gt(), this.size = 0;
}
function py(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function gy(t) {
  return this.__data__.get(t);
}
function by(t) {
  return this.__data__.has(t);
}
var yy = 200;
function _y(t, e) {
  var n = this.__data__;
  if (n instanceof gt) {
    var r = n.__data__;
    if (!Se || r.length < yy - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new bt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ct(t) {
  var e = this.__data__ = new gt(t);
  this.size = e.size;
}
ct.prototype.clear = dy;
ct.prototype.delete = py;
ct.prototype.get = gy;
ct.prototype.has = by;
ct.prototype.set = _y;
function vy(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function my() {
  return [];
}
var wy = Object.prototype, xy = wy.propertyIsEnumerable, Da = Object.getOwnPropertySymbols, My = Da ? function(t) {
  return t == null ? [] : (t = Object(t), vy(Da(t), function(e) {
    return xy.call(t, e);
  }));
} : my;
function Ay(t, e, n) {
  var r = e(t);
  return Z(t) ? r : Bs(r, n(t));
}
function La(t) {
  return Ay(t, Ni, My);
}
var Ur = ae(pt, "DataView"), Yr = ae(pt, "Promise"), Gr = ae(pt, "Set"), Ha = "[object Map]", $y = "[object Object]", Ba = "[object Promise]", Xa = "[object Set]", Ua = "[object WeakMap]", Ya = "[object DataView]", Ny = Dt(Ur), Ty = Dt(Se), Sy = Dt(Yr), Py = Dt(Gr), Ey = Dt(Br), mt = ie;
(Ur && mt(new Ur(new ArrayBuffer(1))) != Ya || Se && mt(new Se()) != Ha || Yr && mt(Yr.resolve()) != Ba || Gr && mt(new Gr()) != Xa || Br && mt(new Br()) != Ua) && (mt = function(t) {
  var e = ie(t), n = e == $y ? t.constructor : void 0, r = n ? Dt(n) : "";
  if (r)
    switch (r) {
      case Ny:
        return Ya;
      case Ty:
        return Ha;
      case Sy:
        return Ba;
      case Py:
        return Xa;
      case Ey:
        return Ua;
    }
  return e;
});
var Ga = pt.Uint8Array, ky = "__lodash_hash_undefined__";
function Oy(t) {
  return this.__data__.set(t, ky), this;
}
function zy(t) {
  return this.__data__.has(t);
}
function kn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new bt(); ++e < n; )
    this.add(t[e]);
}
kn.prototype.add = kn.prototype.push = Oy;
kn.prototype.has = zy;
function Cy(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Iy(t, e) {
  return t.has(e);
}
var Ry = 1, qy = 2;
function Xs(t, e, n, r, i, a) {
  var o = n & Ry, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & qy ? new kn() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var p = t[h], b = e[h];
    if (r)
      var m = o ? r(b, p, h, e, t, a) : r(p, b, h, t, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!Cy(e, function(y, x) {
        if (!Iy(d, x) && (p === y || i(p, y, n, r, a)))
          return d.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === b || i(p, b, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function jy(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Fy(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Dy = 1, Ly = 2, Hy = "[object Boolean]", By = "[object Date]", Xy = "[object Error]", Uy = "[object Map]", Yy = "[object Number]", Gy = "[object RegExp]", Vy = "[object Set]", Ky = "[object String]", Wy = "[object Symbol]", Zy = "[object ArrayBuffer]", Jy = "[object DataView]", Va = rt ? rt.prototype : void 0, br = Va ? Va.valueOf : void 0;
function Qy(t, e, n, r, i, a, o) {
  switch (n) {
    case Jy:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Zy:
      return !(t.byteLength != e.byteLength || !a(new Ga(t), new Ga(e)));
    case Hy:
    case By:
    case Yy:
      return Mi(+t, +e);
    case Xy:
      return t.name == e.name && t.message == e.message;
    case Gy:
    case Ky:
      return t == e + "";
    case Uy:
      var s = jy;
    case Vy:
      var c = r & Dy;
      if (s || (s = Fy), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= Ly, o.set(t, e);
      var l = Xs(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case Wy:
      if (br)
        return br.call(t) == br.call(e);
  }
  return !1;
}
var t_ = 1, e_ = Object.prototype, n_ = e_.hasOwnProperty;
function r_(t, e, n, r, i, a) {
  var o = n & t_, s = La(t), c = s.length, u = La(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in e : n_.call(e, f)))
      return !1;
  }
  var d = a.get(t), p = a.get(e);
  if (d && p)
    return d == e && p == t;
  var b = !0;
  a.set(t, e), a.set(e, t);
  for (var m = o; ++h < c; ) {
    f = s[h];
    var y = t[f], x = e[f];
    if (r)
      var M = o ? r(x, y, f, e, t, a) : r(y, x, f, t, e, a);
    if (!(M === void 0 ? y === x || i(y, x, n, r, a) : M)) {
      b = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (b && !m) {
    var g = t.constructor, v = e.constructor;
    g != v && "constructor" in t && "constructor" in e && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (b = !1);
  }
  return a.delete(t), a.delete(e), b;
}
var i_ = 1, Ka = "[object Arguments]", Wa = "[object Array]", We = "[object Object]", a_ = Object.prototype, Za = a_.hasOwnProperty;
function o_(t, e, n, r, i, a) {
  var o = Z(t), s = Z(e), c = o ? Wa : mt(t), u = s ? Wa : mt(e);
  c = c == Ka ? We : c, u = u == Ka ? We : u;
  var l = c == We, h = u == We, f = c == u;
  if (f && Xr(t)) {
    if (!Xr(e))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new ct()), o || Ds(t) ? Xs(t, e, n, r, i, a) : Qy(t, e, c, n, r, i, a);
  if (!(n & i_)) {
    var d = l && Za.call(t, "__wrapped__"), p = h && Za.call(e, "__wrapped__");
    if (d || p) {
      var b = d ? t.value() : t, m = p ? e.value() : e;
      return a || (a = new ct()), i(b, m, n, r, a);
    }
  }
  return f ? (a || (a = new ct()), r_(t, e, n, r, i, a)) : !1;
}
function Pi(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ne(t) && !ne(e) ? t !== t && e !== e : o_(t, e, n, r, Pi, i);
}
var s_ = 1, u_ = 2;
function c_(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new ct(), h;
      if (!(h === void 0 ? Pi(u, c, s_ | u_, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function Us(t) {
  return t === t && !re(t);
}
function l_(t) {
  for (var e = Ni(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Us(i)];
  }
  return e;
}
function Ys(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function f_(t) {
  var e = l_(t);
  return e.length == 1 && e[0][2] ? Ys(e[0][0], e[0][1]) : function(n) {
    return n === t || c_(n, t, e);
  };
}
function h_(t, e) {
  return t != null && e in Object(t);
}
function d_(t, e, n) {
  e = Ls(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Vn(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ai(i) && xi(o, i) && (Z(t) || $i(t)));
}
function p_(t, e) {
  return t != null && d_(t, e, h_);
}
var g_ = 1, b_ = 2;
function y_(t, e) {
  return Ti(t) && Us(e) ? Ys(Vn(t), e) : function(n) {
    var r = cy(n, t);
    return r === void 0 && r === e ? p_(n, t) : Pi(e, r, g_ | b_);
  };
}
function __(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function v_(t) {
  return function(e) {
    return Hs(e, t);
  };
}
function m_(t) {
  return Ti(t) ? __(Vn(t)) : v_(t);
}
function w_(t) {
  return typeof t == "function" ? t : t == null ? v1 : typeof t == "object" ? Z(t) ? y_(t[0], t[1]) : f_(t) : m_(t);
}
function x_(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var M_ = x_();
function A_(t, e) {
  return t && M_(t, e, Ni);
}
function $_(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Un(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var N_ = $_(A_);
function T_(t, e) {
  var n = -1, r = Un(t) ? Array(t.length) : [];
  return N_(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function Ja(t, e) {
  var n = Z(t) ? Cs : T_;
  return n(t, w_(e));
}
var S_ = Math.ceil, P_ = Math.max;
function E_(t, e, n, r) {
  for (var i = -1, a = P_(S_((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function k_(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && F1(e, n, r) && (n = r = void 0), e = dr(e), n === void 0 ? (n = e, e = 0) : n = dr(n), r = r === void 0 ? e < n ? 1 : -1 : dr(r), E_(e, n, r);
  };
}
var O_ = k_();
const z_ = (t, e, n = 12, r = 12) => {
  const i = ee().domain([0, n]).range([0, t]), a = ee().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return O_((n + 1) * (r + 1)).map(function(o) {
        return { m: o % (n + 1), n: Math.floor(o / (n + 1)), x: i(o % (n + 1)), y: a(Math.floor(o / (n + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const c = hy(Ja(s, function(u) {
        return Ja(
          o,
          function(l) {
            return { x: i(l), y: a(u) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, C_ = "_widget_1aazq_40", I_ = "_label_1aazq_58", R_ = "_lit_1aazq_63", q_ = "_button_1aazq_67", j_ = "_symbol_1aazq_67", F_ = "_radio_1aazq_68", D_ = "_radiobutton_1aazq_68", L_ = "_selected_1aazq_74", H_ = "_toggle_1aazq_75", B_ = "_slider_1aazq_84", X_ = "_track_1aazq_84", U_ = "_track_overlay_1aazq_89", Y_ = "_handle_1aazq_97", w = {
  widget: C_,
  label: I_,
  lit: R_,
  button: q_,
  symbol: j_,
  radio: F_,
  radiobutton: D_,
  selected: L_,
  toggle: H_,
  slider: B_,
  track: X_,
  track_overlay: U_,
  handle: Y_
}, Ei = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = t.length;
  let n = "";
  for (let r = 0; r < 10; ++r)
    n += t[Math.floor(Math.random() * e)];
  return n;
}, ki = (t, e, n) => {
  var r, i, a, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, G_ = (t = 1) => {
  const e = tt();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, V_ = (t = 1) => {
  const e = tt(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, K_ = (t = 1) => {
  const e = tt();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, W_ = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = tt();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Z_ = (t = 1) => {
  const e = tt(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, J_ = (t = 1) => {
  const e = tt(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Q_ = (t = 1) => {
  const e = tt(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, tv = (t = 1) => {
  var e = tt(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, ev = (t = 1) => {
  const e = tt(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, Vr = (t) => {
  switch (t) {
    case "play":
      return G_;
    case "forward":
      return V_;
    case "back":
      return K_;
    case "pause":
      return W_;
    case "reload":
      return Z_;
    case "capture":
      return J_;
    case "rewind":
      return Q_;
    case "stop":
      return tv;
    case "push":
      return ev;
  }
}, Oi = () => {
  const t = "button";
  var e = Ei(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(f) {
  }, l = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % l.length, u(), C(this.parentNode).select("." + w.symbol).attr("d", Vr(l[h])(r * n));
    },
    press: function(f) {
      h = (h + 1) % l.length, u(), f.select("#button_" + e).select("." + w.symbol).attr("d", Vr(l[h])(r * n));
    }
  };
}, nv = () => {
  const t = "slider", e = Bn(".3f");
  var n = Ei(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, l = function(y) {
  }, h = function(y) {
  }, f = [0, 1], d = 0, p = null, b = ee().domain(f).range([0, r]).clamp(!0);
  const m = function(y, x, M = f) {
    const g = y.select("#slider_" + n);
    b.domain(M), d = x, g.selectAll("." + w.handle).transition().attr("cx", b(x)), o && g.select("." + w.label).text(p + " = " + e(d)), l(), h();
  };
  return {
    type: t,
    scale: b,
    id: function(y) {
      return typeof y > "u" ? n : (n = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? c : (c = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return l = y, this;
      l(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return h = y, this;
      h(y);
    },
    range: function(y) {
      return typeof y > "u" ? f : (f = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    reset: m,
    click: m
  };
}, rv = () => {
  const t = "toggle";
  var e = Ei(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
  }, c = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? c : (c = u, this);
    },
    click: function() {
      c = !c;
      const u = C(this.parentNode);
      u.select("." + w.handle).transition().attr("cx", c ? 2 * n : 0), u.classed(w.selected, c), s();
    },
    reset: function(u, l) {
      c = l;
      const h = u.select("#toggle_" + e);
      h.selectAll("." + w.handle).transition().attr("cx", c ? 2 * n : 0), h.classed(w.selected, c), s();
    }
  };
}, iv = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = C(a).attr("class", w.widget + " " + w.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", w.background).on("click", t.click).on("mouseover", function() {
    C(this).classed(w.lit, !0), C(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    C(this).classed(w.lit, !1), C(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), o.append("path").attr("d", Vr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", w.symbol), r) {
    const c = ki(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", w.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Gs = (t, e) => {
  const n = tt();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, av = (t, e) => {
  const n = Bn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = C(c).attr("class", w.widget + " " + w.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Gs(t.size(), t.girth())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", w.track_overlay).on("click", function(p) {
    const b = zr(p, this)[0];
    t.value(o.invert(b)), t.update(), t.update_end(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + n(t.value()));
  }).call(
    H0().on("drag", function(p) {
      t.value(o.invert(p.x)), t.update(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var l, h, f, d = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Xe([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Xe([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Xe([t.girth() / 2, t.knob()]) + 7 : -Xe([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", w.label).style("text-anchor", f).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + h + ")"), c;
}, ov = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = C(o).attr("class", w.widget + " " + w.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(w.selected, t.value() == 1);
  if (s.append("path").attr("d", Gs(2 * t.size(), 2 * t.size())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", w.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = ki(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", w.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, sv = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Jh(o), c = ee().domain([0, o - 1]).range([0, t.size()]), u = ee().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = C(l).attr("class", w.widget + " " + w.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + w.radiobutton).data(s).enter().append("g").attr("class", w.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + u(b) + ")" : "translate(" + c(b) + ",0)");
  var f, d;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), f.attr("class", w.background).on("mouseover", function() {
    C(this).classed(w.lit, !0), C(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    C(this).classed(w.lit, !1), C(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), d.attr("class", w.symbol), d.filter((b) => b == t.value()).classed(w.selected, !0), h.on("click", t.click);
  const p = ki(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", w.label).text(function(b, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), l;
}, yr = (t, e) => {
  switch (t.type) {
    case "button":
      return iv(t);
    case "slider":
      return av(t);
    case "radio":
      return sv(t);
    case "toggle":
      return ov(t);
  }
}, uv = "_displayPanel_vbymn_3", cv = "_controlPanel_vbymn_8", Qa = {
  displayPanel: uv,
  controlPanel: cv
}, lv = (t, e) => {
  const n = z_(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = Pl("#" + t).classed(t + " " + e.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", Qa.displayPanel).classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + Qa.controlPanel).classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && s.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && o.style("border", e.display_border), e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (c) => "translate(" + c.x + "," + c.y + ")").style("fill", "black"), { display: o, controls: s, grid: n };
};
var Vs = typeof global == "object" && global && global.Object === Object && global, fv = typeof self == "object" && self && self.Object === Object && self, yt = Vs || fv || Function("return this")(), $t = yt.Symbol, Ks = Object.prototype, hv = Ks.hasOwnProperty, dv = Ks.toString, le = $t ? $t.toStringTag : void 0;
function pv(t) {
  var e = hv.call(t, le), n = t[le];
  try {
    t[le] = void 0;
    var r = !0;
  } catch {
  }
  var i = dv.call(t);
  return r && (e ? t[le] = n : delete t[le]), i;
}
var gv = Object.prototype, bv = gv.toString;
function yv(t) {
  return bv.call(t);
}
var _v = "[object Null]", vv = "[object Undefined]", to = $t ? $t.toStringTag : void 0;
function Lt(t) {
  return t == null ? t === void 0 ? vv : _v : to && to in Object(t) ? pv(t) : yv(t);
}
function Nt(t) {
  return t != null && typeof t == "object";
}
var mv = "[object Symbol]";
function Kn(t) {
  return typeof t == "symbol" || Nt(t) && Lt(t) == mv;
}
function Re(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var U = Array.isArray, eo = $t ? $t.prototype : void 0, no = eo ? eo.toString : void 0;
function Ws(t) {
  if (typeof t == "string")
    return t;
  if (U(t))
    return Re(t, Ws) + "";
  if (Kn(t))
    return no ? no.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var wv = /\s/;
function xv(t) {
  for (var e = t.length; e-- && wv.test(t.charAt(e)); )
    ;
  return e;
}
var Mv = /^\s+/;
function Av(t) {
  return t && t.slice(0, xv(t) + 1).replace(Mv, "");
}
function dt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ro = NaN, $v = /^[-+]0x[0-9a-f]+$/i, Nv = /^0b[01]+$/i, Tv = /^0o[0-7]+$/i, Sv = parseInt;
function Pv(t) {
  if (typeof t == "number")
    return t;
  if (Kn(t))
    return ro;
  if (dt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = dt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Av(t);
  var n = Nv.test(t);
  return n || Tv.test(t) ? Sv(t.slice(2), n ? 2 : 8) : $v.test(t) ? ro : +t;
}
var Ev = 1 / 0, kv = 17976931348623157e292;
function _r(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Pv(t), t === Ev || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * kv;
  }
  return t === t ? t : 0;
}
function Wn(t) {
  return t;
}
var Ov = "[object AsyncFunction]", zv = "[object Function]", Cv = "[object GeneratorFunction]", Iv = "[object Proxy]";
function Zs(t) {
  if (!dt(t))
    return !1;
  var e = Lt(t);
  return e == zv || e == Cv || e == Ov || e == Iv;
}
var vr = yt["__core-js_shared__"], io = function() {
  var t = /[^.]+$/.exec(vr && vr.keys && vr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Rv(t) {
  return !!io && io in t;
}
var qv = Function.prototype, jv = qv.toString;
function Ht(t) {
  if (t != null) {
    try {
      return jv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Fv = /[\\^$.*+?()[\]{}|]/g, Dv = /^\[object .+?Constructor\]$/, Lv = Function.prototype, Hv = Object.prototype, Bv = Lv.toString, Xv = Hv.hasOwnProperty, Uv = RegExp(
  "^" + Bv.call(Xv).replace(Fv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yv(t) {
  if (!dt(t) || Rv(t))
    return !1;
  var e = Zs(t) ? Uv : Dv;
  return e.test(Ht(t));
}
function Gv(t, e) {
  return t == null ? void 0 : t[e];
}
function Bt(t, e) {
  var n = Gv(t, e);
  return Yv(n) ? n : void 0;
}
var Kr = Bt(yt, "WeakMap");
function Vv(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var Kv = 800, Wv = 16, Zv = Date.now;
function Jv(t) {
  var e = 0, n = 0;
  return function() {
    var r = Zv(), i = Wv - (r - n);
    if (n = r, i > 0) {
      if (++e >= Kv)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Qv(t) {
  return function() {
    return t;
  };
}
var On = function() {
  try {
    var t = Bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), tm = On ? function(t, e) {
  return On(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qv(e),
    writable: !0
  });
} : Wn, em = Jv(tm);
function nm(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var rm = 9007199254740991, im = /^(?:0|[1-9]\d*)$/;
function Zn(t, e) {
  var n = typeof t;
  return e = e ?? rm, !!e && (n == "number" || n != "symbol" && im.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function am(t, e, n) {
  e == "__proto__" && On ? On(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Jn(t, e) {
  return t === e || t !== t && e !== e;
}
var om = Object.prototype, sm = om.hasOwnProperty;
function um(t, e, n) {
  var r = t[e];
  (!(sm.call(t, e) && Jn(r, n)) || n === void 0 && !(e in t)) && am(t, e, n);
}
var ao = Math.max;
function cm(t, e, n) {
  return e = ao(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, a = ao(r.length - e, 0), o = Array(a); ++i < a; )
      o[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(o), Vv(t, this, s);
  };
}
function lm(t, e) {
  return em(cm(t, e, Wn), t + "");
}
var fm = 9007199254740991;
function zi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fm;
}
function oe(t) {
  return t != null && zi(t.length) && !Zs(t);
}
function hm(t, e, n) {
  if (!dt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? oe(n) && Zn(e, n.length) : r == "string" && e in n) ? Jn(n[e], t) : !1;
}
var dm = Object.prototype;
function Js(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || dm;
  return t === n;
}
function Qs(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var pm = "[object Arguments]";
function oo(t) {
  return Nt(t) && Lt(t) == pm;
}
var tu = Object.prototype, gm = tu.hasOwnProperty, bm = tu.propertyIsEnumerable, eu = oo(/* @__PURE__ */ function() {
  return arguments;
}()) ? oo : function(t) {
  return Nt(t) && gm.call(t, "callee") && !bm.call(t, "callee");
};
function ym() {
  return !1;
}
var nu = typeof exports == "object" && exports && !exports.nodeType && exports, so = nu && typeof module == "object" && module && !module.nodeType && module, _m = so && so.exports === nu, uo = _m ? yt.Buffer : void 0, vm = uo ? uo.isBuffer : void 0, Wr = vm || ym, mm = "[object Arguments]", wm = "[object Array]", xm = "[object Boolean]", Mm = "[object Date]", Am = "[object Error]", $m = "[object Function]", Nm = "[object Map]", Tm = "[object Number]", Sm = "[object Object]", Pm = "[object RegExp]", Em = "[object Set]", km = "[object String]", Om = "[object WeakMap]", zm = "[object ArrayBuffer]", Cm = "[object DataView]", Im = "[object Float32Array]", Rm = "[object Float64Array]", qm = "[object Int8Array]", jm = "[object Int16Array]", Fm = "[object Int32Array]", Dm = "[object Uint8Array]", Lm = "[object Uint8ClampedArray]", Hm = "[object Uint16Array]", Bm = "[object Uint32Array]", N = {};
N[Im] = N[Rm] = N[qm] = N[jm] = N[Fm] = N[Dm] = N[Lm] = N[Hm] = N[Bm] = !0;
N[mm] = N[wm] = N[zm] = N[xm] = N[Cm] = N[Mm] = N[Am] = N[$m] = N[Nm] = N[Tm] = N[Sm] = N[Pm] = N[Em] = N[km] = N[Om] = !1;
function Xm(t) {
  return Nt(t) && zi(t.length) && !!N[Lt(t)];
}
function Um(t) {
  return function(e) {
    return t(e);
  };
}
var ru = typeof exports == "object" && exports && !exports.nodeType && exports, _e = ru && typeof module == "object" && module && !module.nodeType && module, Ym = _e && _e.exports === ru, mr = Ym && Vs.process, co = function() {
  try {
    var t = _e && _e.require && _e.require("util").types;
    return t || mr && mr.binding && mr.binding("util");
  } catch {
  }
}(), lo = co && co.isTypedArray, iu = lo ? Um(lo) : Xm, Gm = Object.prototype, Vm = Gm.hasOwnProperty;
function au(t, e) {
  var n = U(t), r = !n && eu(t), i = !n && !r && Wr(t), a = !n && !r && !i && iu(t), o = n || r || i || a, s = o ? Qs(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || Vm.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Zn(u, c))) && s.push(u);
  return s;
}
function ou(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Km = ou(Object.keys, Object), Wm = Object.prototype, Zm = Wm.hasOwnProperty;
function Jm(t) {
  if (!Js(t))
    return Km(t);
  var e = [];
  for (var n in Object(t))
    Zm.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Qn(t) {
  return oe(t) ? au(t) : Jm(t);
}
function Qm(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var tw = Object.prototype, ew = tw.hasOwnProperty;
function nw(t) {
  if (!dt(t))
    return Qm(t);
  var e = Js(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !ew.call(t, r)) || n.push(r);
  return n;
}
function rw(t) {
  return oe(t) ? au(t, !0) : nw(t);
}
var iw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, aw = /^\w*$/;
function Ci(t, e) {
  if (U(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Kn(t) ? !0 : aw.test(t) || !iw.test(t) || e != null && t in Object(e);
}
var Pe = Bt(Object, "create");
function ow() {
  this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
}
function sw(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var uw = "__lodash_hash_undefined__", cw = Object.prototype, lw = cw.hasOwnProperty;
function fw(t) {
  var e = this.__data__;
  if (Pe) {
    var n = e[t];
    return n === uw ? void 0 : n;
  }
  return lw.call(e, t) ? e[t] : void 0;
}
var hw = Object.prototype, dw = hw.hasOwnProperty;
function pw(t) {
  var e = this.__data__;
  return Pe ? e[t] !== void 0 : dw.call(e, t);
}
var gw = "__lodash_hash_undefined__";
function bw(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Pe && e === void 0 ? gw : e, this;
}
function Ft(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ft.prototype.clear = ow;
Ft.prototype.delete = sw;
Ft.prototype.get = fw;
Ft.prototype.has = pw;
Ft.prototype.set = bw;
function yw() {
  this.__data__ = [], this.size = 0;
}
function tr(t, e) {
  for (var n = t.length; n--; )
    if (Jn(t[n][0], e))
      return n;
  return -1;
}
var _w = Array.prototype, vw = _w.splice;
function mw(t) {
  var e = this.__data__, n = tr(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : vw.call(e, n, 1), --this.size, !0;
}
function ww(t) {
  var e = this.__data__, n = tr(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function xw(t) {
  return tr(this.__data__, t) > -1;
}
function Mw(t, e) {
  var n = this.__data__, r = tr(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function _t(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = yw;
_t.prototype.delete = mw;
_t.prototype.get = ww;
_t.prototype.has = xw;
_t.prototype.set = Mw;
var Ee = Bt(yt, "Map");
function Aw() {
  this.size = 0, this.__data__ = {
    hash: new Ft(),
    map: new (Ee || _t)(),
    string: new Ft()
  };
}
function $w(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function er(t, e) {
  var n = t.__data__;
  return $w(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Nw(t) {
  var e = er(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Tw(t) {
  return er(this, t).get(t);
}
function Sw(t) {
  return er(this, t).has(t);
}
function Pw(t, e) {
  var n = er(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function vt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = Aw;
vt.prototype.delete = Nw;
vt.prototype.get = Tw;
vt.prototype.has = Sw;
vt.prototype.set = Pw;
var Ew = "Expected a function";
function Ii(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Ew);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Ii.Cache || vt)(), n;
}
Ii.Cache = vt;
var kw = 500;
function Ow(t) {
  var e = Ii(t, function(r) {
    return n.size === kw && n.clear(), r;
  }), n = e.cache;
  return e;
}
var zw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cw = /\\(\\)?/g, Iw = Ow(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(zw, function(n, r, i, a) {
    e.push(i ? a.replace(Cw, "$1") : r || n);
  }), e;
});
function nr(t) {
  return t == null ? "" : Ws(t);
}
function rr(t, e) {
  return U(t) ? t : Ci(t, e) ? [t] : Iw(nr(t));
}
function qe(t) {
  if (typeof t == "string" || Kn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Ri(t, e) {
  e = rr(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[qe(e[n++])];
  return n && n == r ? t : void 0;
}
function Rw(t, e, n) {
  var r = t == null ? void 0 : Ri(t, e);
  return r === void 0 ? n : r;
}
function su(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var qw = ou(Object.getPrototypeOf, Object);
function jw(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Fw(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, jw(t, e, n);
}
var Dw = "\\ud800-\\udfff", Lw = "\\u0300-\\u036f", Hw = "\\ufe20-\\ufe2f", Bw = "\\u20d0-\\u20ff", Xw = Lw + Hw + Bw, Uw = "\\ufe0e\\ufe0f", Yw = "\\u200d", Gw = RegExp("[" + Yw + Dw + Xw + Uw + "]");
function uu(t) {
  return Gw.test(t);
}
function Vw(t) {
  return t.split("");
}
var cu = "\\ud800-\\udfff", Kw = "\\u0300-\\u036f", Ww = "\\ufe20-\\ufe2f", Zw = "\\u20d0-\\u20ff", Jw = Kw + Ww + Zw, Qw = "\\ufe0e\\ufe0f", t2 = "[" + cu + "]", Zr = "[" + Jw + "]", Jr = "\\ud83c[\\udffb-\\udfff]", e2 = "(?:" + Zr + "|" + Jr + ")", lu = "[^" + cu + "]", fu = "(?:\\ud83c[\\udde6-\\uddff]){2}", hu = "[\\ud800-\\udbff][\\udc00-\\udfff]", n2 = "\\u200d", du = e2 + "?", pu = "[" + Qw + "]?", r2 = "(?:" + n2 + "(?:" + [lu, fu, hu].join("|") + ")" + pu + du + ")*", i2 = pu + du + r2, a2 = "(?:" + [lu + Zr + "?", Zr, fu, hu, t2].join("|") + ")", o2 = RegExp(Jr + "(?=" + Jr + ")|" + a2 + i2, "g");
function s2(t) {
  return t.match(o2) || [];
}
function u2(t) {
  return uu(t) ? s2(t) : Vw(t);
}
function c2(t) {
  return function(e) {
    e = nr(e);
    var n = uu(e) ? u2(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Fw(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var l2 = c2("toUpperCase");
function f2(t) {
  return l2(nr(t).toLowerCase());
}
function h2() {
  this.__data__ = new _t(), this.size = 0;
}
function d2(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function p2(t) {
  return this.__data__.get(t);
}
function g2(t) {
  return this.__data__.has(t);
}
var b2 = 200;
function y2(t, e) {
  var n = this.__data__;
  if (n instanceof _t) {
    var r = n.__data__;
    if (!Ee || r.length < b2 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new vt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function lt(t) {
  var e = this.__data__ = new _t(t);
  this.size = e.size;
}
lt.prototype.clear = h2;
lt.prototype.delete = d2;
lt.prototype.get = p2;
lt.prototype.has = g2;
lt.prototype.set = y2;
function qi(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function gu() {
  return [];
}
var _2 = Object.prototype, v2 = _2.propertyIsEnumerable, fo = Object.getOwnPropertySymbols, bu = fo ? function(t) {
  return t == null ? [] : (t = Object(t), qi(fo(t), function(e) {
    return v2.call(t, e);
  }));
} : gu, m2 = Object.getOwnPropertySymbols, w2 = m2 ? function(t) {
  for (var e = []; t; )
    su(e, bu(t)), t = qw(t);
  return e;
} : gu;
function yu(t, e, n) {
  var r = e(t);
  return U(t) ? r : su(r, n(t));
}
function ho(t) {
  return yu(t, Qn, bu);
}
function x2(t) {
  return yu(t, rw, w2);
}
var Qr = Bt(yt, "DataView"), ti = Bt(yt, "Promise"), ei = Bt(yt, "Set"), po = "[object Map]", M2 = "[object Object]", go = "[object Promise]", bo = "[object Set]", yo = "[object WeakMap]", _o = "[object DataView]", A2 = Ht(Qr), $2 = Ht(Ee), N2 = Ht(ti), T2 = Ht(ei), S2 = Ht(Kr), ut = Lt;
(Qr && ut(new Qr(new ArrayBuffer(1))) != _o || Ee && ut(new Ee()) != po || ti && ut(ti.resolve()) != go || ei && ut(new ei()) != bo || Kr && ut(new Kr()) != yo) && (ut = function(t) {
  var e = Lt(t), n = e == M2 ? t.constructor : void 0, r = n ? Ht(n) : "";
  if (r)
    switch (r) {
      case A2:
        return _o;
      case $2:
        return po;
      case N2:
        return go;
      case T2:
        return bo;
      case S2:
        return yo;
    }
  return e;
});
var vo = yt.Uint8Array, P2 = "__lodash_hash_undefined__";
function E2(t) {
  return this.__data__.set(t, P2), this;
}
function k2(t) {
  return this.__data__.has(t);
}
function zn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new vt(); ++e < n; )
    this.add(t[e]);
}
zn.prototype.add = zn.prototype.push = E2;
zn.prototype.has = k2;
function O2(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function z2(t, e) {
  return t.has(e);
}
var C2 = 1, I2 = 2;
function _u(t, e, n, r, i, a) {
  var o = n & C2, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, d = n & I2 ? new zn() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var p = t[h], b = e[h];
    if (r)
      var m = o ? r(b, p, h, e, t, a) : r(p, b, h, t, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!O2(e, function(y, x) {
        if (!z2(d, x) && (p === y || i(p, y, n, r, a)))
          return d.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === b || i(p, b, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function vu(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function R2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var q2 = 1, j2 = 2, F2 = "[object Boolean]", D2 = "[object Date]", L2 = "[object Error]", H2 = "[object Map]", B2 = "[object Number]", X2 = "[object RegExp]", U2 = "[object Set]", Y2 = "[object String]", G2 = "[object Symbol]", V2 = "[object ArrayBuffer]", K2 = "[object DataView]", mo = $t ? $t.prototype : void 0, wr = mo ? mo.valueOf : void 0;
function W2(t, e, n, r, i, a, o) {
  switch (n) {
    case K2:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case V2:
      return !(t.byteLength != e.byteLength || !a(new vo(t), new vo(e)));
    case F2:
    case D2:
    case B2:
      return Jn(+t, +e);
    case L2:
      return t.name == e.name && t.message == e.message;
    case X2:
    case Y2:
      return t == e + "";
    case H2:
      var s = vu;
    case U2:
      var c = r & q2;
      if (s || (s = R2), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= j2, o.set(t, e);
      var l = _u(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case G2:
      if (wr)
        return wr.call(t) == wr.call(e);
  }
  return !1;
}
var Z2 = 1, J2 = Object.prototype, Q2 = J2.hasOwnProperty;
function t3(t, e, n, r, i, a) {
  var o = n & Z2, s = ho(t), c = s.length, u = ho(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in e : Q2.call(e, f)))
      return !1;
  }
  var d = a.get(t), p = a.get(e);
  if (d && p)
    return d == e && p == t;
  var b = !0;
  a.set(t, e), a.set(e, t);
  for (var m = o; ++h < c; ) {
    f = s[h];
    var y = t[f], x = e[f];
    if (r)
      var M = o ? r(x, y, f, e, t, a) : r(y, x, f, t, e, a);
    if (!(M === void 0 ? y === x || i(y, x, n, r, a) : M)) {
      b = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (b && !m) {
    var g = t.constructor, v = e.constructor;
    g != v && "constructor" in t && "constructor" in e && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (b = !1);
  }
  return a.delete(t), a.delete(e), b;
}
var e3 = 1, wo = "[object Arguments]", xo = "[object Array]", Ze = "[object Object]", n3 = Object.prototype, Mo = n3.hasOwnProperty;
function r3(t, e, n, r, i, a) {
  var o = U(t), s = U(e), c = o ? xo : ut(t), u = s ? xo : ut(e);
  c = c == wo ? Ze : c, u = u == wo ? Ze : u;
  var l = c == Ze, h = u == Ze, f = c == u;
  if (f && Wr(t)) {
    if (!Wr(e))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new lt()), o || iu(t) ? _u(t, e, n, r, i, a) : W2(t, e, c, n, r, i, a);
  if (!(n & e3)) {
    var d = l && Mo.call(t, "__wrapped__"), p = h && Mo.call(e, "__wrapped__");
    if (d || p) {
      var b = d ? t.value() : t, m = p ? e.value() : e;
      return a || (a = new lt()), i(b, m, n, r, a);
    }
  }
  return f ? (a || (a = new lt()), t3(t, e, n, r, i, a)) : !1;
}
function ji(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Nt(t) && !Nt(e) ? t !== t && e !== e : r3(t, e, n, r, ji, i);
}
var i3 = 1, a3 = 2;
function o3(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new lt(), h;
      if (!(h === void 0 ? ji(u, c, i3 | a3, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function mu(t) {
  return t === t && !dt(t);
}
function s3(t) {
  for (var e = Qn(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, mu(i)];
  }
  return e;
}
function wu(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function u3(t) {
  var e = s3(t);
  return e.length == 1 && e[0][2] ? wu(e[0][0], e[0][1]) : function(n) {
    return n === t || o3(n, t, e);
  };
}
function c3(t, e) {
  return t != null && e in Object(t);
}
function xu(t, e, n) {
  e = rr(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = qe(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && zi(i) && Zn(o, i) && (U(t) || eu(t)));
}
function l3(t, e) {
  return t != null && xu(t, e, c3);
}
var f3 = 1, h3 = 2;
function d3(t, e) {
  return Ci(t) && mu(e) ? wu(qe(t), e) : function(n) {
    var r = Rw(n, t);
    return r === void 0 && r === e ? l3(n, t) : ji(e, r, f3 | h3);
  };
}
function Mu(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function p3(t) {
  return function(e) {
    return Ri(e, t);
  };
}
function g3(t) {
  return Ci(t) ? Mu(qe(t)) : p3(t);
}
function ir(t) {
  return typeof t == "function" ? t : t == null ? Wn : typeof t == "object" ? U(t) ? d3(t[0], t[1]) : u3(t) : g3(t);
}
function b3(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var y3 = b3();
function _3(t, e) {
  return t && y3(t, e, Qn);
}
function v3(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!oe(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Fi = v3(_3);
function m3(t) {
  return Nt(t) && oe(t);
}
function w3(t) {
  return typeof t == "function" ? t : Wn;
}
function ni(t, e) {
  var n = U(t) ? nm : Fi;
  return n(t, w3(e));
}
function x3(t, e) {
  return Re(e, function(n) {
    return [n, t[n]];
  });
}
function M3(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var A3 = "[object Map]", $3 = "[object Set]";
function N3(t) {
  return function(e) {
    var n = ut(e);
    return n == A3 ? vu(e) : n == $3 ? M3(e) : x3(e, t(e));
  };
}
var T3 = N3(Qn);
function S3(t, e) {
  var n = [];
  return Fi(t, function(r, i, a) {
    e(r, i, a) && n.push(r);
  }), n;
}
function P3(t, e) {
  var n = U(t) ? qi : S3;
  return n(t, ir(e));
}
function E3(t, e) {
  var n = -1, r = oe(t) ? Array(t.length) : [];
  return Fi(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function Di(t, e) {
  var n = U(t) ? Re : E3;
  return n(t, ir(e));
}
var k3 = Object.prototype, O3 = k3.hasOwnProperty;
function z3(t, e) {
  return t != null && O3.call(t, e);
}
function C3(t, e) {
  return t != null && xu(t, e, z3);
}
var I3 = "[object Boolean]";
function R3(t) {
  return t === !0 || t === !1 || Nt(t) && Lt(t) == I3;
}
function q3(t, e) {
  for (var n, r = -1, i = t.length; ++r < i; ) {
    var a = e(t[r]);
    a !== void 0 && (n = n === void 0 ? a : n + a);
  }
  return n;
}
function j3(t, e, n, r) {
  if (!dt(t))
    return t;
  e = rr(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = qe(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = dt(l) ? l : Zn(e[i + 1]) ? [] : {});
    }
    um(s, c, u), s = s[c];
  }
  return t;
}
function F3(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = Ri(t, o);
    n(s, o) && j3(a, rr(o, t), s);
  }
  return a;
}
function Au(t, e) {
  if (t == null)
    return {};
  var n = Re(x2(t), function(r) {
    return [r];
  });
  return e = ir(e), F3(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var D3 = Math.ceil, L3 = Math.max;
function H3(t, e, n, r) {
  for (var i = -1, a = L3(D3((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function B3(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && hm(e, n, r) && (n = r = void 0), e = _r(e), n === void 0 ? (n = e, e = 0) : n = _r(n), r = r === void 0 ? e < n ? 1 : -1 : _r(r), H3(e, n, r);
  };
}
var $u = B3();
function X3() {
  var t = arguments, e = nr(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function un(t, e) {
  return t && t.length ? q3(t, ir(e)) : 0;
}
var U3 = Math.max;
function Y3(t) {
  if (!(t && t.length))
    return [];
  var e = 0;
  return t = qi(t, function(n) {
    if (m3(n))
      return e = U3(n.length, e), !0;
  }), Qs(e, function(n) {
    return Re(t, Mu(n));
  });
}
var Cn = lm(Y3);
const E = {
  widgets: {
    //		fontsize:20,
    slider_size: 400,
    slider_gap: 2,
    slider_girth: 16,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 7.5 },
    toggle_anchor: { x: 7, y: 4 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 }
  },
  simulation: {
    delay: 10,
    colormap: "vik",
    pinwheel_opacity: 0.5
  }
}, I = {
  dt: 0.1,
  N: 50,
  pinwheel_threshold: 0.05,
  oscillator_speed: {
    range: [0, 2],
    default: 1
  },
  coupling_strength: {
    range: [0, 1],
    default: 0
  },
  oscillator_heterogeneity: {
    range: [0, 0.5],
    default: 0
  },
  show_pinwheels: {
    default: !1
  }
}, Nu = (t) => Di(T3(t), (e) => (e[1].id = e[0], e[1].label = X3(f2(e[0]), /_/g, " "), e[1])), Tu = (t, e) => ni(t, (n, r) => n.widget = e[r]), Su = (t) => Au(t, (e) => C3(e, "range")), Pu = (t) => Au(t, (e) => R3(e.default));
ze().domain([0, 360]).range([0, 2 * Math.PI]);
ze().range([0, 360]).domain([0, 2 * Math.PI]);
const Eu = Nu(Su(I)), ku = Nu(Pu(I)), cn = Di(
  Eu,
  (t) => nv().id(t.id).label(t.label).range(t.range).value(t.default).size(E.widgets.slider_size).girth(E.widgets.slider_girth).knob(E.widgets.slider_knob)
), ri = Di(
  ku,
  (t) => rv().id(t.id).label(t.label).value(t.default)
);
Tu(ku, ri);
Tu(Eu, cn);
const xt = Oi().actions(["play", "pause"]), ar = Oi().actions(["back"]), or = Oi().actions(["rewind"]), G3 = [xt, ar, or], V3 = (t, e) => {
  const n = e.position(E.widgets.slider_anchor.x, $u(cn.length).map((i) => E.widgets.slider_anchor.y + E.widgets.slider_gap * i)), r = e.position(E.widgets.toggle_anchor.x, E.widgets.toggle_anchor.y);
  cn.forEach((i, a) => i.position(n[a])), ri[0].position(r).labelposition(E.widgets.toggle_label_pos), xt.position(e.position(E.widgets.playbutton_anchor.x, E.widgets.playbutton_anchor.y)).size(E.widgets.playbutton_size), or.position(e.position(E.widgets.backbutton_anchor.x, E.widgets.backbutton_anchor.y)), ar.position(e.position(E.widgets.resetbutton_anchor.x, E.widgets.resetbutton_anchor.y)), t.selectAll(null).data(cn).enter().append(yr), t.selectAll(null).data(ri).enter().append(yr), t.selectAll(null).data(G3).enter().append(yr);
}, K3 = (t) => {
  ni(Su(I), (e) => e.widget.reset(t, e.default)), ni(Pu(I), (e) => e.widget.reset(t, e.default));
};
function Ou(t, e) {
  return [t % e, Math.floor(t / e)];
}
const W3 = {
  n4: Cn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Cn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function xr(t, e, n = "periodic", r = "n8") {
  const i = [];
  return W3[r].forEach((a) => {
    var o = a[1], s = a[0];
    const c = Ou(t, e), u = c[0], l = c[1], h = u + s, f = l + o;
    (n == "dirichlet" ? !(o == 0 && s == 0) && h < e && f < e && h >= 0 && f >= 0 : !(o == 0 && s == 0)) && i.push(e * ((f + e) % e) + (h + e) % e);
  }), i;
}
const Z3 = function(t) {
  var e = "periodic", n = 1, r = "n8";
  const i = 2 * t + 1;
  var a = n / i, o = a;
  const s = $u(i * i).map(function(f) {
    const d = Ou(f, i);
    return {
      m: d[0],
      n: d[1],
      x: a * (d[0] + 0.5) - n / 2,
      y: o * (d[1] + 0.5) - n / 2
    };
  });
  s.forEach(function(f, d) {
    f.neighbors = xr(d, i, e, r).map((p) => s[p]), f.cell = () => [
      { x: f.x + a / 2, y: f.y + o / 2 },
      { x: f.x - a / 2, y: f.y + o / 2 },
      { x: f.x - a / 2, y: f.y - o / 2 },
      { x: f.x + a / 2, y: f.y - o / 2 },
      { x: f.x + a / 2, y: f.y + o / 2 }
    ], f.random_interior_point = () => ({
      x: f.x + a * (Math.random() - 0.5),
      y: f.y + o * (Math.random() - 0.5)
    });
  });
  const c = function(f) {
    return typeof f < "u" ? (s.forEach(function(d) {
      d.x = (d.m + 0.5) * f / i - f / 2, d.y = (d.n + 0.5) * f / i - f / 2;
    }), n = f, a = n / i, o = n / i, this.L = n, this) : n;
  }, u = function(f) {
    return typeof f < "u" ? (s.forEach(function(d, p) {
      d.neighbors = xr(p, i, f, r).map((b) => s[b]);
    }), e = f, s.forEach((d) => {
      d.is_boundary = e == "dirichlet" && (d.n == 0 || d.n == 2 * t || d.m == 0 || d.m == 2 * t);
    }), this) : e;
  }, l = function(f) {
    return typeof f < "u" ? (s.forEach(function(d, p) {
      d.neighbors = xr(p, i, e, f).map((b) => s[b]);
    }), r = f, this) : r;
  }, h = function() {
    return e === "periodic" ? null : P3(s, (f) => f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
  };
  return {
    type: "square",
    L: n,
    N: t,
    size: i * i,
    hood: l,
    nodes: s,
    scale: c,
    boundary: u,
    boundary_cells: h
  };
};
Cn([-1, 1, 0, 0], [0, 0, -1, 1]), Cn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const J3 = I.dt, Q3 = I.N;
var zt = [], ii = [];
function zu(t) {
  ii = [], t.forEach((e) => {
    e.sing = 0;
    const n = e.neighbors, r = un(n, (o) => Math.cos(o.theta)), i = un(n, (o) => Math.sin(o.theta)), a = 1 / (r ** 2 + i ** 2);
    e.sing = a > I.pinwheel_threshold && un(n, (o) => o.sing) == 0 ? 1 : 0, e.sing == 1 && ii.push(e);
  });
}
const t5 = () => {
  I.timer = {}, I.tick = 0, zt = Z3(Q3).boundary("periodic").nodes, zt.forEach((e) => {
    e.theta = Math.random() * 2 * Math.PI, e.domega = 2 * Math.random() - 1;
  }), zu(zt);
}, e5 = () => {
  I.tick++;
  const t = I.oscillator_speed.widget.value(), e = I.oscillator_heterogeneity.widget.value(), n = I.coupling_strength.widget.value();
  zt.forEach((r) => {
    r.theta += J3 * (t * (1 + e * r.domega) + n * un(r.neighbors, function(i) {
      return Math.sin(i.theta - r.theta);
    })), r.theta = r.theta % (2 * Math.PI);
  }), zu(zt);
}, Je = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, n5 = {
  roma: Le(wt, Je.romaO),
  vik: Le(wt, Je.vikO),
  broc: Le(wt, Je.brocO),
  bam: Le(wt, Je.bamO),
  sinebow: Lh
}, Cu = n5[E.simulation.colormap];
I.N;
const Mt = ze().domain([-0.5, 0.5]), At = ze().domain([-0.5, 0.5]);
var F, ln, fn;
function r5() {
  var t = I.show_pinwheels.widget.value() ? E.simulation.pinwheel_opacity : 0;
  F.fillStyle = "rgba(255, 255, 255," + t + ")", F.strokeStyle = "rgba(0, 0, 0," + t + ")", ii.forEach((e) => {
    F.beginPath(), F.arc(Mt(e.x), At(e.y), 20, 0, 2 * Math.PI), F.fill(), F.stroke();
  });
}
const i5 = (t, e) => {
  ln = e.display_size.width, fn = e.display_size.height, Mt.range([0, ln]), At.range([0, fn]), F = t.node().getContext("2d"), F.clearRect(0, 0, ln, fn), zt.forEach((n) => {
    const r = n.cell();
    F.fillStyle = Cu(n.theta / 2 / Math.PI), F.fillRect(Mt(r[2].x), At(r[2].y), Mt(r[0].x) - Mt(r[2].x), At(r[0].y) - At(r[2].y));
  });
}, Iu = (t, e) => {
  F.clearRect(0, 0, ln, fn), zt.forEach((n) => {
    const r = n.cell();
    F.fillStyle = Cu(n.theta / 2 / Math.PI), F.fillRect(Mt(r[2].x), At(r[2].y), Mt(r[0].x) - Mt(r[2].x), At(r[0].y) - At(r[2].y));
  }), r5();
};
function a5(t, e) {
  e5(), Iu();
}
function Ru(t, e) {
  t5(), i5(t, e);
}
function o5(t, e) {
  Iu();
}
var Ao = {};
const s5 = (t, e) => {
  xt.value() == 1 ? Ao = uf(() => a5(), E.simulation.delay) : Ao.stop();
}, u5 = (t, e, n) => {
  or.update(() => K3(e)), xt.update(() => s5()), ar.update(() => Ru(t, n)), I.show_pinwheels.widget.update(() => o5());
}, c5 = {
  name: "@explorables/spinwheels",
  title: "Spin Wheels",
  subtitle: "Phase coupled oscillators on a lattice",
  description: "This explorable is a spatial implementation of the Kuramoto Model for phase coupled oscillators. It illustrates spatial synchronization and the dynamics of phase singularities.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function l5(t, e = qu) {
  const n = lv(t, e), r = n.display, i = n.controls, a = n.grid;
  return V3(i, a), u5(r, i, e), Ru(r, e), {
    halt() {
      xt.value() === 1 && xt.press(i);
    },
    reset() {
      xt.value() === 1 && xt.press(i), or.press(i), ar.press(i);
    },
    config: e,
    meta: c5
  };
}
export {
  qu as config,
  l5 as default,
  l5 as load,
  c5 as meta
};
