(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ji = {
  id: "spinwheels",
  display_type: "canvas",
  debug: !1,
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 505, height: 505 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function re(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Qi(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Cr(t) {
  let e, n, r;
  t.length !== 2 ? (e = re, n = (s, c) => re(t(s), c), r = (s, c) => t(s) - c) : (e = t === re || t === Qi ? t : ji, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && r(s[f - 1], c) > -r(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function ji() {
  return 0;
}
function ta(t) {
  return t === null ? NaN : +t;
}
const ea = Cr(re), na = ea.right;
Cr(ta).center;
const ra = Math.sqrt(50), ia = Math.sqrt(10), aa = Math.sqrt(2);
function le(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ra ? 10 : a >= ia ? 5 : a >= aa ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? le(t, e, n * 2) : [s, c, u];
}
function oa(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? le(e, t, n) : le(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Je(t, e, n) {
  return e = +e, t = +t, n = +n, le(t, e, n)[2];
}
function sa(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Je(e, t, n) : Je(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Kt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function ca(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var ua = { value: () => {
} };
function wn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ie(n);
}
function ie(t) {
  this._ = t;
}
function fa(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ie.prototype = wn.prototype = {
  constructor: ie,
  on: function(t, e) {
    var n = this._, r = fa(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = la(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Bn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Bn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ie(t);
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
function la(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Bn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ua, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Qe = "http://www.w3.org/1999/xhtml";
const Xn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Me(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Xn.hasOwnProperty(e) ? { space: Xn[e], local: t } : t;
}
function ha(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Qe && e.documentElement.namespaceURI === Qe ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function da(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function kr(t) {
  var e = Me(t);
  return (e.local ? da : ha)(e);
}
function pa() {
}
function xn(t) {
  return t == null ? pa : function() {
    return this.querySelector(t);
  };
}
function ba(t) {
  typeof t != "function" && (t = xn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new C(r, this._parents);
}
function ga(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ya() {
  return [];
}
function Rr(t) {
  return t == null ? ya : function() {
    return this.querySelectorAll(t);
  };
}
function _a(t) {
  return function() {
    return ga(t.apply(this, arguments));
  };
}
function ma(t) {
  typeof t == "function" ? t = _a(t) : t = Rr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new C(r, i);
}
function Fr(t) {
  return function() {
    return this.matches(t);
  };
}
function Lr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var va = Array.prototype.find;
function wa(t) {
  return function() {
    return va.call(this.children, t);
  };
}
function xa() {
  return this.firstElementChild;
}
function Ma(t) {
  return this.select(t == null ? xa : wa(typeof t == "function" ? t : Lr(t)));
}
var $a = Array.prototype.filter;
function Ta() {
  return Array.from(this.children);
}
function Aa(t) {
  return function() {
    return $a.call(this.children, t);
  };
}
function Sa(t) {
  return this.selectAll(t == null ? Ta : Aa(typeof t == "function" ? t : Lr(t)));
}
function Pa(t) {
  typeof t != "function" && (t = Fr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new C(r, this._parents);
}
function Dr(t) {
  return new Array(t.length);
}
function Ea() {
  return new C(this._enter || this._groups.map(Dr), this._parents);
}
function he(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
he.prototype = {
  constructor: he,
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
function Na(t) {
  return function() {
    return t;
  };
}
function Oa(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new he(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function Ia(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, f = a.length, h = new Array(l), p;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (h[s] = p = o.call(c, c.__data__, s, e) + "", u.has(p) ? i[s] = c : u.set(p, c));
  for (s = 0; s < f; ++s)
    p = o.call(t, a[s], s, a) + "", (c = u.get(p)) ? (r[s] = c, c.__data__ = a[s], u.delete(p)) : n[s] = new he(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(h[s]) === c && (i[s] = c);
}
function za(t) {
  return t.__data__;
}
function Ca(t, e) {
  if (!arguments.length) return Array.from(this, za);
  var n = e ? Ia : Oa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Na(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], f = i[u], h = f.length, p = ka(t.call(l, l && l.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), g = c[u] = new Array(h);
    n(l, f, y, w, g, p, e);
    for (var x = 0, $ = 0, b, m; x < d; ++x)
      if (b = y[x]) {
        for (x >= $ && ($ = x + 1); !(m = w[$]) && ++$ < d; ) ;
        b._next = m || null;
      }
  }
  return o = new C(o, r), o._enter = s, o._exit = c, o;
}
function ka(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ra() {
  return new C(this._exit || this._groups.map(Dr), this._parents);
}
function Fa(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function La(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], f = u.length, h = s[c] = new Array(f), p, d = 0; d < f; ++d)
      (p = u[d] || l[d]) && (h[d] = p);
  for (; c < i; ++c)
    s[c] = n[c];
  return new C(s, this._parents);
}
function Da() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ha(t) {
  t || (t = qa);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new C(i, this._parents).order();
}
function qa(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ba() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Xa() {
  return Array.from(this);
}
function Ua() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ga() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Ya() {
  return !this.node();
}
function Ka(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Va(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Wa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Za(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Ja(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Qa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ja(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function to(t, e) {
  var n = Me(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Wa : Va : typeof e == "function" ? n.local ? ja : Qa : n.local ? Ja : Za)(n, e));
}
function Hr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function eo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function no(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ro(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function io(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? eo : typeof e == "function" ? ro : no)(t, e, n ?? "")) : $t(this.node(), t);
}
function $t(t, e) {
  return t.style.getPropertyValue(e) || Hr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ao(t) {
  return function() {
    delete this[t];
  };
}
function oo(t, e) {
  return function() {
    this[t] = e;
  };
}
function so(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function co(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ao : typeof e == "function" ? so : oo)(t, e)) : this.node()[t];
}
function qr(t) {
  return t.trim().split(/^|\s+/);
}
function Mn(t) {
  return t.classList || new Br(t);
}
function Br(t) {
  this._node = t, this._names = qr(t.getAttribute("class") || "");
}
Br.prototype = {
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
function Xr(t, e) {
  for (var n = Mn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Ur(t, e) {
  for (var n = Mn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function uo(t) {
  return function() {
    Xr(this, t);
  };
}
function fo(t) {
  return function() {
    Ur(this, t);
  };
}
function lo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Xr : Ur)(this, t);
  };
}
function ho(t, e) {
  var n = qr(t + "");
  if (arguments.length < 2) {
    for (var r = Mn(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? lo : e ? uo : fo)(n, e));
}
function po() {
  this.textContent = "";
}
function bo(t) {
  return function() {
    this.textContent = t;
  };
}
function go(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function yo(t) {
  return arguments.length ? this.each(t == null ? po : (typeof t == "function" ? go : bo)(t)) : this.node().textContent;
}
function _o() {
  this.innerHTML = "";
}
function mo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function vo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function wo(t) {
  return arguments.length ? this.each(t == null ? _o : (typeof t == "function" ? vo : mo)(t)) : this.node().innerHTML;
}
function xo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mo() {
  return this.each(xo);
}
function $o() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function To() {
  return this.each($o);
}
function Ao(t) {
  var e = typeof t == "function" ? t : kr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function So() {
  return null;
}
function Po(t, e) {
  var n = typeof t == "function" ? t : kr(t), r = e == null ? So : typeof e == "function" ? e : xn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function No() {
  return this.each(Eo);
}
function Oo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Io() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function zo(t) {
  return this.select(t ? Io : Oo);
}
function Co(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ko(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ro(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Fo(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Lo(t, e, n) {
  return function() {
    var r = this.__on, i, a = ko(e);
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
function Do(t, e, n) {
  var r = Ro(t + ""), i, a = r.length, o;
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
  for (s = e ? Lo : Fo, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Gr(t, e, n) {
  var r = Hr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Ho(t, e) {
  return function() {
    return Gr(this, t, e);
  };
}
function qo(t, e) {
  return function() {
    return Gr(this, t, e.apply(this, arguments));
  };
}
function Bo(t, e) {
  return this.each((typeof e == "function" ? qo : Ho)(t, e));
}
function* Xo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Yr = [null];
function C(t, e) {
  this._groups = t, this._parents = e;
}
function Bt() {
  return new C([[document.documentElement]], Yr);
}
function Uo() {
  return this;
}
C.prototype = Bt.prototype = {
  constructor: C,
  select: ba,
  selectAll: ma,
  selectChild: Ma,
  selectChildren: Sa,
  filter: Pa,
  data: Ca,
  enter: Ea,
  exit: Ra,
  join: Fa,
  merge: La,
  selection: Uo,
  order: Da,
  sort: Ha,
  call: Ba,
  nodes: Xa,
  node: Ua,
  size: Ga,
  empty: Ya,
  each: Ka,
  attr: to,
  style: io,
  property: co,
  classed: ho,
  text: yo,
  html: wo,
  raise: Mo,
  lower: To,
  append: Ao,
  insert: Po,
  remove: No,
  clone: zo,
  datum: Co,
  on: Do,
  dispatch: Bo,
  [Symbol.iterator]: Xo
};
function S(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], Yr);
}
function Go(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function je(t, e) {
  if (t = Go(t), e === void 0 && (e = t.currentTarget), e) {
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
const Yo = { passive: !1 }, Ct = { capture: !0, passive: !1 };
function Be(t) {
  t.stopImmediatePropagation();
}
function xt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ko(t) {
  var e = t.document.documentElement, n = S(t).on("dragstart.drag", xt, Ct);
  "onselectstart" in e ? n.on("selectstart.drag", xt, Ct) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Vo(t, e) {
  var n = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  e && (r.on("click.drag", xt, Ct), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Vt = (t) => () => t;
function tn(t, {
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
tn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Wo(t) {
  return !t.ctrlKey && !t.button;
}
function Zo() {
  return this.parentNode;
}
function Jo(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function Qo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function jo() {
  var t = Wo, e = Zo, n = Jo, r = Qo, i = {}, a = wn("start", "drag", "end"), o = 0, s, c, u, l, f = 0;
  function h(b) {
    b.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", g, Yo).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(b, m) {
    if (!(l || !t.call(this, b, m))) {
      var T = $(this, e.call(this, b, m), b, m, "mouse");
      T && (S(b.view).on("mousemove.drag", d, Ct).on("mouseup.drag", y, Ct), Ko(b.view), Be(b), u = !1, s = b.clientX, c = b.clientY, T("start", b));
    }
  }
  function d(b) {
    if (xt(b), !u) {
      var m = b.clientX - s, T = b.clientY - c;
      u = m * m + T * T > f;
    }
    i.mouse("drag", b);
  }
  function y(b) {
    S(b.view).on("mousemove.drag mouseup.drag", null), Vo(b.view, u), xt(b), i.mouse("end", b);
  }
  function w(b, m) {
    if (t.call(this, b, m)) {
      var T = b.changedTouches, P = e.call(this, b, m), N = T.length, B, V;
      for (B = 0; B < N; ++B)
        (V = $(this, P, b, m, T[B].identifier, T[B])) && (Be(b), V("start", b, T[B]));
    }
  }
  function g(b) {
    var m = b.changedTouches, T = m.length, P, N;
    for (P = 0; P < T; ++P)
      (N = i[m[P].identifier]) && (xt(b), N("drag", b, m[P]));
  }
  function x(b) {
    var m = b.changedTouches, T = m.length, P, N;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), P = 0; P < T; ++P)
      (N = i[m[P].identifier]) && (Be(b), N("end", b, m[P]));
  }
  function $(b, m, T, P, N, B) {
    var V = a.copy(), v = je(B || T, m), X, O, F;
    if ((F = n.call(b, new tn("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: N,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), P)) != null)
      return X = F.x - v[0] || 0, O = F.y - v[1] || 0, function Yt(rt, ut, vt) {
        var R = v, qe;
        switch (rt) {
          case "start":
            i[N] = Yt, qe = o++;
            break;
          case "end":
            delete i[N], --o;
          // falls through
          case "drag":
            v = je(vt || ut, m), qe = o;
            break;
        }
        V.call(
          rt,
          b,
          new tn(rt, {
            sourceEvent: ut,
            subject: F,
            target: h,
            identifier: N,
            active: qe,
            x: v[0] + X,
            y: v[1] + O,
            dx: v[0] - R[0],
            dy: v[1] - R[1],
            dispatch: V
          }),
          P
        );
      };
  }
  return h.filter = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Vt(!!b), h) : t;
  }, h.container = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Vt(b), h) : e;
  }, h.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Vt(b), h) : n;
  }, h.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Vt(!!b), h) : r;
  }, h.on = function() {
    var b = a.on.apply(a, arguments);
    return b === a ? h : b;
  }, h.clickDistance = function(b) {
    return arguments.length ? (f = (b = +b) * b, h) : Math.sqrt(f);
  }, h;
}
function $n(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Kr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Xt() {
}
var kt = 0.7, de = 1 / kt, Mt = "\\s*([+-]?\\d+)\\s*", Rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ts = /^#([0-9a-f]{3,8})$/, es = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), ns = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), rs = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Rt}\\)$`), is = new RegExp(`^rgba\\(${U},${U},${U},${Rt}\\)$`), as = new RegExp(`^hsl\\(${Rt},${U},${U}\\)$`), os = new RegExp(`^hsla\\(${Rt},${U},${U},${Rt}\\)$`), Un = {
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
$n(Xt, pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Gn,
  // Deprecated! Use color.formatHex.
  formatHex: Gn,
  formatHex8: ss,
  formatHsl: cs,
  formatRgb: Yn,
  toString: Yn
});
function Gn() {
  return this.rgb().formatHex();
}
function ss() {
  return this.rgb().formatHex8();
}
function cs() {
  return Vr(this).formatHsl();
}
function Yn() {
  return this.rgb().formatRgb();
}
function pt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ts.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Kn(e) : n === 3 ? new I(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Wt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Wt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = es.exec(t)) ? new I(e[1], e[2], e[3], 1) : (e = ns.exec(t)) ? new I(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = rs.exec(t)) ? Wt(e[1], e[2], e[3], e[4]) : (e = is.exec(t)) ? Wt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = as.exec(t)) ? Zn(e[1], e[2] / 100, e[3] / 100, 1) : (e = os.exec(t)) ? Zn(e[1], e[2] / 100, e[3] / 100, e[4]) : Un.hasOwnProperty(t) ? Kn(Un[t]) : t === "transparent" ? new I(NaN, NaN, NaN, 0) : null;
}
function Kn(t) {
  return new I(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Wt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new I(t, e, n, r);
}
function us(t) {
  return t instanceof Xt || (t = pt(t)), t ? (t = t.rgb(), new I(t.r, t.g, t.b, t.opacity)) : new I();
}
function pe(t, e, n, r) {
  return arguments.length === 1 ? us(t) : new I(t, e, n, r ?? 1);
}
function I(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
$n(I, pe, Kr(Xt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new I(ht(this.r), ht(this.g), ht(this.b), be(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Vn,
  // Deprecated! Use color.formatHex.
  formatHex: Vn,
  formatHex8: fs,
  formatRgb: Wn,
  toString: Wn
}));
function Vn() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}`;
}
function fs() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}${lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wn() {
  const t = be(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function be(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function lt(t) {
  return t = ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Zn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new D(t, e, n, r);
}
function Vr(t) {
  if (t instanceof D) return new D(t.h, t.s, t.l, t.opacity);
  if (t instanceof Xt || (t = pt(t)), !t) return new D();
  if (t instanceof D) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new D(o, s, c, t.opacity);
}
function ls(t, e, n, r) {
  return arguments.length === 1 ? Vr(t) : new D(t, e, n, r ?? 1);
}
function D(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
$n(D, ls, Kr(Xt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new I(
      Xe(t >= 240 ? t - 240 : t + 120, i, r),
      Xe(t, i, r),
      Xe(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new D(Jn(this.h), Zt(this.s), Zt(this.l), be(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = be(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Jn(this.h)}, ${Zt(this.s) * 100}%, ${Zt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Jn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Zt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Xe(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Tn = (t) => () => t;
function hs(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ds(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ps(t) {
  return (t = +t) == 1 ? Wr : function(e, n) {
    return n - e ? ds(e, n, t) : Tn(isNaN(e) ? n : e);
  };
}
function Wr(t, e) {
  var n = e - t;
  return n ? hs(t, n) : Tn(isNaN(t) ? e : t);
}
const it = function t(e) {
  var n = ps(e);
  function r(i, a) {
    var o = n((i = pe(i)).r, (a = pe(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Wr(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function bs(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function gs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ys(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = $e(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function _s(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function L(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function ms(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = $e(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var en = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ue = new RegExp(en.source, "g");
function vs(t) {
  return function() {
    return t;
  };
}
function ws(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Zr(t, e) {
  var n = en.lastIndex = Ue.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = en.exec(t)) && (i = Ue.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: L(r, i) })), n = Ue.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ws(c[0].x) : vs(e) : (e = c.length, function(u) {
    for (var l = 0, f; l < e; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function $e(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Tn(e) : (n === "number" ? L : n === "string" ? (r = pt(e)) ? (e = r, it) : Zr : e instanceof pt ? it : e instanceof Date ? _s : gs(e) ? bs : Array.isArray(e) ? ys : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? ms : L)(t, e);
}
function xs(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Qn = 180 / Math.PI, nn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Jr(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Qn,
    skewX: Math.atan(c) * Qn,
    scaleX: o,
    scaleY: s
  };
}
var Jt;
function Ms(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? nn : Jr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function $s(t) {
  return t == null || (Jt || (Jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jt.setAttribute("transform", t), !(t = Jt.transform.baseVal.consolidate())) ? nn : (t = t.matrix, Jr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Qr(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, f, h, p, d) {
    if (u !== f || l !== h) {
      var y = p.push("translate(", null, e, null, n);
      d.push({ i: y - 4, x: L(u, f) }, { i: y - 2, x: L(l, h) });
    } else (f || h) && p.push("translate(" + f + e + h + n);
  }
  function o(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: L(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: L(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, p, d) {
    if (u !== f || l !== h) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: L(u, f) }, { i: y - 2, x: L(l, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, f, h), o(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(p) {
      for (var d = -1, y = h.length, w; ++d < y; ) f[(w = h[d]).i] = w.x(p);
      return f.join("");
    };
  };
}
var Ts = Qr(Ms, "px, ", "px)", "deg)"), As = Qr($s, ", ", ")", ")");
function Qt(t, e) {
  e === void 0 && (e = t, t = $e);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var Tt = 0, Nt = 0, Pt = 0, jr = 1e3, ge, Ot, ye = 0, bt = 0, Te = 0, Ft = typeof performance == "object" && performance.now ? performance : Date, ti = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ae() {
  return bt || (ti(Ss), bt = Ft.now() + Te);
}
function Ss() {
  bt = 0;
}
function Lt() {
  this._call = this._time = this._next = null;
}
Lt.prototype = ei.prototype = {
  constructor: Lt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ae() : +n) + (e == null ? 0 : +e), !this._next && Ot !== this && (Ot ? Ot._next = this : ge = this, Ot = this), this._call = t, this._time = n, rn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rn());
  }
};
function ei(t, e, n) {
  var r = new Lt();
  return r.restart(t, e, n), r;
}
function Ps() {
  Ae(), ++Tt;
  for (var t = ge, e; t; )
    (e = bt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Tt;
}
function jn() {
  bt = (ye = Ft.now()) + Te, Tt = Nt = 0;
  try {
    Ps();
  } finally {
    Tt = 0, Ns(), bt = 0;
  }
}
function Es() {
  var t = Ft.now(), e = t - ye;
  e > jr && (Te -= e, ye = t);
}
function Ns() {
  for (var t, e = ge, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ge = n);
  Ot = t, rn(r);
}
function rn(t) {
  if (!Tt) {
    Nt && (Nt = clearTimeout(Nt));
    var e = t - bt;
    e > 24 ? (t < 1 / 0 && (Nt = setTimeout(jn, t - Ft.now() - Te)), Pt && (Pt = clearInterval(Pt))) : (Pt || (ye = Ft.now(), Pt = setInterval(Es, jr)), Tt = 1, ti(jn));
  }
}
function tr(t, e, n) {
  var r = new Lt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Os(t, e, n) {
  var r = new Lt(), i = e;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Ae() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, e, n), r;
}
var Is = wn("start", "end", "cancel", "interrupt"), zs = [], ni = 0, er = 1, an = 2, ae = 3, nr = 4, on = 5, oe = 6;
function Se(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  Cs(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Is,
    tween: zs,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ni
  });
}
function An(t, e) {
  var n = H(t, e);
  if (n.state > ni) throw new Error("too late; already scheduled");
  return n;
}
function K(t, e) {
  var n = H(t, e);
  if (n.state > ae) throw new Error("too late; already running");
  return n;
}
function H(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Cs(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ei(a, 0, n.time);
  function a(u) {
    n.state = er, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, f, h, p;
    if (n.state !== er) return c();
    for (l in r)
      if (p = r[l], p.name === n.name) {
        if (p.state === ae) return tr(o);
        p.state === nr ? (p.state = oe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[l]) : +l < e && (p.state = oe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[l]);
      }
    if (tr(function() {
      n.state === ae && (n.state = nr, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = an, n.on.call("start", t, t.__data__, n.index, n.group), n.state === an) {
      for (n.state = ae, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l)
        (p = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = on, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    n.state === on && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = oe, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function ks(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > an && r.state < on, r.state = oe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Rs(t) {
  return this.each(function() {
    ks(this, t);
  });
}
function Fs(t, e) {
  var n, r;
  return function() {
    var i = K(this, t), a = i.tween;
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
function Ls(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = K(this, t), o = a.tween;
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
function Ds(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = H(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Fs : Ls)(n, t, e));
}
function Sn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return H(i, r).value[e];
  };
}
function ri(t, e) {
  var n;
  return (typeof e == "number" ? L : e instanceof pt ? it : (n = pt(e)) ? (e = n, it) : Zr)(t, e);
}
function Hs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Bs(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Xs(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Us(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Gs(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Ys(t, e) {
  var n = Me(t), r = n === "transform" ? As : ri;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Gs : Us)(n, r, Sn(this, "attr." + t, e)) : e == null ? (n.local ? qs : Hs)(n) : (n.local ? Xs : Bs)(n, r, e));
}
function Ks(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Vs(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Ws(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Vs(t, a)), n;
  }
  return i._value = e, i;
}
function Zs(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Ks(t, a)), n;
  }
  return i._value = e, i;
}
function Js(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Me(t);
  return this.tween(n, (r.local ? Ws : Zs)(r, e));
}
function Qs(t, e) {
  return function() {
    An(this, t).delay = +e.apply(this, arguments);
  };
}
function js(t, e) {
  return e = +e, function() {
    An(this, t).delay = e;
  };
}
function tc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qs : js)(e, t)) : H(this.node(), e).delay;
}
function ec(t, e) {
  return function() {
    K(this, t).duration = +e.apply(this, arguments);
  };
}
function nc(t, e) {
  return e = +e, function() {
    K(this, t).duration = e;
  };
}
function rc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ec : nc)(e, t)) : H(this.node(), e).duration;
}
function ic(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    K(this, t).ease = e;
  };
}
function ac(t) {
  var e = this._id;
  return arguments.length ? this.each(ic(e, t)) : H(this.node(), e).ease;
}
function oc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    K(this, t).ease = n;
  };
}
function sc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(oc(this._id, t));
}
function cc(t) {
  typeof t != "function" && (t = Fr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Q(r, this._parents, this._name, this._id);
}
function uc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, f = o[s] = new Array(l), h, p = 0; p < l; ++p)
      (h = c[p] || u[p]) && (f[p] = h);
  for (; s < r; ++s)
    o[s] = e[s];
  return new Q(o, this._parents, this._name, this._id);
}
function fc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function lc(t, e, n) {
  var r, i, a = fc(e) ? An : K;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function hc(t, e) {
  var n = this._id;
  return arguments.length < 2 ? H(this.node(), n).on.on(t) : this.each(lc(n, t, e));
}
function dc(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function pc() {
  return this.on("end.remove", dc(this._id));
}
function bc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = xn(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, Se(u[h], e, n, h, u, H(l, n)));
  return new Q(a, this._parents, e, n);
}
function gc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Rr(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), p, d = H(l, n), y = 0, w = h.length; y < w; ++y)
          (p = h[y]) && Se(p, e, n, y, h, d);
        a.push(h), o.push(l);
      }
  return new Q(a, o, e, n);
}
var yc = Bt.prototype.constructor;
function _c() {
  return new yc(this._groups, this._parents);
}
function mc(t, e) {
  var n, r, i;
  return function() {
    var a = $t(this, t), o = (this.style.removeProperty(t), $t(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function ii(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vc(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = $t(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function wc(t, e, n) {
  var r, i, a;
  return function() {
    var o = $t(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), $t(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function xc(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = K(this, t), u = c.on, l = c.value[a] == null ? s || (s = ii(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function Mc(t, e, n) {
  var r = (t += "") == "transform" ? Ts : ri;
  return e == null ? this.styleTween(t, mc(t, r)).on("end.style." + t, ii(t)) : typeof e == "function" ? this.styleTween(t, wc(t, r, Sn(this, "style." + t, e))).each(xc(this._id, t)) : this.styleTween(t, vc(t, r, e), n).on("end.style." + t, null);
}
function $c(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Tc(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && $c(t, o, n)), r;
  }
  return a._value = e, a;
}
function Ac(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Tc(t, e, n ?? ""));
}
function Sc(t) {
  return function() {
    this.textContent = t;
  };
}
function Pc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ec(t) {
  return this.tween("text", typeof t == "function" ? Pc(Sn(this, "text", t)) : Sc(t == null ? "" : t + ""));
}
function Nc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Oc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Nc(i)), e;
  }
  return r._value = t, r;
}
function Ic(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Oc(t));
}
function zc() {
  for (var t = this._name, e = this._id, n = ai(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = H(c, e);
        Se(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new Q(r, this._parents, t, n);
}
function Cc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = K(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var kc = 0;
function Q(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ai() {
  return ++kc;
}
var W = Bt.prototype;
Q.prototype = {
  constructor: Q,
  select: bc,
  selectAll: gc,
  selectChild: W.selectChild,
  selectChildren: W.selectChildren,
  filter: cc,
  merge: uc,
  selection: _c,
  transition: zc,
  call: W.call,
  nodes: W.nodes,
  node: W.node,
  size: W.size,
  empty: W.empty,
  each: W.each,
  on: hc,
  attr: Ys,
  attrTween: Js,
  style: Mc,
  styleTween: Ac,
  text: Ec,
  textTween: Ic,
  remove: pc,
  tween: Ds,
  delay: tc,
  duration: rc,
  ease: ac,
  easeVarying: sc,
  end: Cc,
  [Symbol.iterator]: W[Symbol.iterator]
};
function Rc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Fc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Rc
};
function Lc(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Dc(t) {
  var e, n;
  t instanceof Q ? (e = t._id, t = t._name) : (e = ai(), (n = Fc).time = Ae(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Se(c, t, e, u, o, n || Lc(c, e));
  return new Q(r, this._parents, t, e);
}
Bt.prototype.interrupt = Rs;
Bt.prototype.transition = Dc;
const sn = Math.PI, cn = 2 * sn, ft = 1e-6, Hc = cn - ft;
function oi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function qc(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return oi;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class si {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? oi : qc(e);
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
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, f = s - n, h = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > ft) if (!(Math.abs(f * c - u * l) > ft) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - o, d = i - s, y = c * c + u * u, w = p * p + d * d, g = Math.sqrt(y), x = Math.sqrt(h), $ = a * Math.tan((sn - Math.acos((y + h - w) / (2 * g * x))) / 2), b = $ / x, m = $ / g;
      Math.abs(b - 1) > ft && this._append`L${e + b * l},${n + b * f}`, this._append`A${a},${a},0,0,${+(f * p > l * d)},${this._x1 = e + m * c},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > ft || Math.abs(this._y1 - l) > ft) && this._append`L${u},${l}`, r && (h < 0 && (h = h % cn + cn), h > Hc ? this._append`A${r},${r},0,1,${f},${e - s},${n - c}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > ft && this._append`A${r},${r},0,${+(h >= sn)},${f},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new si();
}
q.prototype = si.prototype;
function Bc(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function _e(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function At(t) {
  return t = _e(Math.abs(t)), t ? t[1] : NaN;
}
function Xc(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Uc(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Gc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function me(t) {
  if (!(e = Gc.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Pn({
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
me.prototype = Pn.prototype;
function Pn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Pn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Yc(t) {
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
var ci;
function Kc(t, e) {
  var n = _e(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (ci = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + _e(t, Math.max(0, e + a - 1))[0];
}
function rr(t, e) {
  var n = _e(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ir = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Bc,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => rr(t * 100, e),
  r: rr,
  s: Kc,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ar(t) {
  return t;
}
var or = Array.prototype.map, sr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Vc(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ar : Xc(or.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ar : Uc(or.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = me(f);
    var h = f.fill, p = f.align, d = f.sign, y = f.symbol, w = f.zero, g = f.width, x = f.comma, $ = f.precision, b = f.trim, m = f.type;
    m === "n" ? (x = !0, m = "g") : ir[m] || ($ === void 0 && ($ = 12), b = !0, m = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var T = y === "$" ? n : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(m) ? o : "", N = ir[m], B = /[defgprs%]/.test(m);
    $ = $ === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function V(v) {
      var X = T, O = P, F, Yt, rt;
      if (m === "c")
        O = N(v) + O, v = "";
      else {
        v = +v;
        var ut = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? c : N(Math.abs(v), $), b && (v = Yc(v)), ut && +v == 0 && d !== "+" && (ut = !1), X = (ut ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + X, O = (m === "s" ? sr[8 + ci / 3] : "") + O + (ut && d === "(" ? ")" : ""), B) {
          for (F = -1, Yt = v.length; ++F < Yt; )
            if (rt = v.charCodeAt(F), 48 > rt || rt > 57) {
              O = (rt === 46 ? i + v.slice(F + 1) : v.slice(F)) + O, v = v.slice(0, F);
              break;
            }
        }
      }
      x && !w && (v = e(v, 1 / 0));
      var vt = X.length + v.length + O.length, R = vt < g ? new Array(g - vt + 1).join(h) : "";
      switch (x && w && (v = e(R + v, R.length ? g - O.length : 1 / 0), R = ""), p) {
        case "<":
          v = X + v + O + R;
          break;
        case "=":
          v = X + R + v + O;
          break;
        case "^":
          v = R.slice(0, vt = R.length >> 1) + X + v + O + R.slice(vt);
          break;
        default:
          v = R + X + v + O;
          break;
      }
      return a(v);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function l(f, h) {
    var p = u((f = me(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(At(h) / 3))) * 3, y = Math.pow(10, -d), w = sr[8 + d / 3];
    return function(g) {
      return p(y * g) + w;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var jt, Pe, ui;
Wc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Wc(t) {
  return jt = Vc(t), Pe = jt.format, ui = jt.formatPrefix, jt;
}
function Zc(t) {
  return Math.max(0, -At(Math.abs(t)));
}
function Jc(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(At(e) / 3))) * 3 - At(Math.abs(t)));
}
function Qc(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, At(e) - At(t)) + 1;
}
function jc(t, e) {
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
function tu(t) {
  return function() {
    return t;
  };
}
function eu(t) {
  return +t;
}
var cr = [0, 1];
function wt(t) {
  return t;
}
function un(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : tu(isNaN(e) ? NaN : 0.5);
}
function nu(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function ru(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = un(i, r), a = n(o, a)) : (r = un(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function iu(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = un(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = na(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function au(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ou() {
  var t = cr, e = cr, n = $e, r, i, a, o = wt, s, c, u;
  function l() {
    var h = Math.min(t.length, e.length);
    return o !== wt && (o = nu(t[0], t[h - 1])), s = h > 2 ? iu : ru, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(t.map(r), e, n)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(e, t.map(r), L)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, eu), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), l()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = xs, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : wt, l()) : o !== wt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, l()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, p) {
    return r = h, i = p, l();
  };
}
function su() {
  return ou()(wt, wt);
}
function cu(t, e, n, r) {
  var i = sa(t, e, n), a;
  switch (r = me(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Jc(i, o)) && (r.precision = a), ui(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Qc(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Zc(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Pe(r);
}
function uu(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return oa(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return cu(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Je(o, s, n), u === c)
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
function G() {
  var t = su();
  return t.copy = function() {
    return au(t, G());
  }, jc.apply(t, arguments), uu(t);
}
var te = pe(), fu = Math.PI / 3, lu = Math.PI * 2 / 3;
function hu(t) {
  var e;
  return t = (0.5 - t) * Math.PI, te.r = 255 * (e = Math.sin(t)) * e, te.g = 255 * (e = Math.sin(t + fu)) * e, te.b = 255 * (e = Math.sin(t + lu)) * e, te + "";
}
function It(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
It.prototype = {
  constructor: It,
  scale: function(t) {
    return t === 1 ? this : new It(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new It(this.k, this.x + this.k * t, this.y + this.k * e);
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
It.prototype;
var fi = typeof global == "object" && global && global.Object === Object && global, du = typeof self == "object" && self && self.Object === Object && self, tt = fi || du || Function("return this")(), Y = tt.Symbol, li = Object.prototype, pu = li.hasOwnProperty, bu = li.toString, Et = Y ? Y.toStringTag : void 0;
function gu(t) {
  var e = pu.call(t, Et), n = t[Et];
  try {
    t[Et] = void 0;
    var r = !0;
  } catch {
  }
  var i = bu.call(t);
  return r && (e ? t[Et] = n : delete t[Et]), i;
}
var yu = Object.prototype, _u = yu.toString;
function mu(t) {
  return _u.call(t);
}
var vu = "[object Null]", wu = "[object Undefined]", ur = Y ? Y.toStringTag : void 0;
function yt(t) {
  return t == null ? t === void 0 ? wu : vu : ur && ur in Object(t) ? gu(t) : mu(t);
}
function ct(t) {
  return t != null && typeof t == "object";
}
var xu = "[object Symbol]";
function Ee(t) {
  return typeof t == "symbol" || ct(t) && yt(t) == xu;
}
function Ut(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var k = Array.isArray, fr = Y ? Y.prototype : void 0, lr = fr ? fr.toString : void 0;
function hi(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return Ut(t, hi) + "";
  if (Ee(t))
    return lr ? lr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Mu = /\s/;
function $u(t) {
  for (var e = t.length; e-- && Mu.test(t.charAt(e)); )
    ;
  return e;
}
var Tu = /^\s+/;
function Au(t) {
  return t && t.slice(0, $u(t) + 1).replace(Tu, "");
}
function j(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var hr = NaN, Su = /^[-+]0x[0-9a-f]+$/i, Pu = /^0b[01]+$/i, Eu = /^0o[0-7]+$/i, Nu = parseInt;
function Ou(t) {
  if (typeof t == "number")
    return t;
  if (Ee(t))
    return hr;
  if (j(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Au(t);
  var n = Pu.test(t);
  return n || Eu.test(t) ? Nu(t.slice(2), n ? 2 : 8) : Su.test(t) ? hr : +t;
}
var Iu = 1 / 0, zu = 17976931348623157e292;
function Ge(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Ou(t), t === Iu || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * zu;
  }
  return t === t ? t : 0;
}
function Ne(t) {
  return t;
}
var Cu = "[object AsyncFunction]", ku = "[object Function]", Ru = "[object GeneratorFunction]", Fu = "[object Proxy]";
function di(t) {
  if (!j(t))
    return !1;
  var e = yt(t);
  return e == ku || e == Ru || e == Cu || e == Fu;
}
var Ye = tt["__core-js_shared__"], dr = function() {
  var t = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Lu(t) {
  return !!dr && dr in t;
}
var Du = Function.prototype, Hu = Du.toString;
function _t(t) {
  if (t != null) {
    try {
      return Hu.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var qu = /[\\^$.*+?()[\]{}|]/g, Bu = /^\[object .+?Constructor\]$/, Xu = Function.prototype, Uu = Object.prototype, Gu = Xu.toString, Yu = Uu.hasOwnProperty, Ku = RegExp(
  "^" + Gu.call(Yu).replace(qu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vu(t) {
  if (!j(t) || Lu(t))
    return !1;
  var e = di(t) ? Ku : Bu;
  return e.test(_t(t));
}
function Wu(t, e) {
  return t == null ? void 0 : t[e];
}
function mt(t, e) {
  var n = Wu(t, e);
  return Vu(n) ? n : void 0;
}
var fn = mt(tt, "WeakMap");
function Zu(t, e, n) {
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
var Ju = 800, Qu = 16, ju = Date.now;
function tf(t) {
  var e = 0, n = 0;
  return function() {
    var r = ju(), i = Qu - (r - n);
    if (n = r, i > 0) {
      if (++e >= Ju)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function ef(t) {
  return function() {
    return t;
  };
}
var ve = function() {
  try {
    var t = mt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), nf = ve ? function(t, e) {
  return ve(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ef(e),
    writable: !0
  });
} : Ne, rf = tf(nf);
function af(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var of = 9007199254740991, sf = /^(?:0|[1-9]\d*)$/;
function Oe(t, e) {
  var n = typeof t;
  return e = e ?? of, !!e && (n == "number" || n != "symbol" && sf.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function cf(t, e, n) {
  e == "__proto__" && ve ? ve(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Ie(t, e) {
  return t === e || t !== t && e !== e;
}
var uf = Object.prototype, ff = uf.hasOwnProperty;
function lf(t, e, n) {
  var r = t[e];
  (!(ff.call(t, e) && Ie(r, n)) || n === void 0 && !(e in t)) && cf(t, e, n);
}
var pr = Math.max;
function hf(t, e, n) {
  return e = pr(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, a = pr(r.length - e, 0), o = Array(a); ++i < a; )
      o[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(o), Zu(t, this, s);
  };
}
function df(t, e) {
  return rf(hf(t, e, Ne), t + "");
}
var pf = 9007199254740991;
function En(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pf;
}
function St(t) {
  return t != null && En(t.length) && !di(t);
}
function bf(t, e, n) {
  if (!j(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? St(n) && Oe(e, n.length) : r == "string" && e in n) ? Ie(n[e], t) : !1;
}
var gf = Object.prototype;
function pi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || gf;
  return t === n;
}
function bi(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var yf = "[object Arguments]";
function br(t) {
  return ct(t) && yt(t) == yf;
}
var gi = Object.prototype, _f = gi.hasOwnProperty, mf = gi.propertyIsEnumerable, Nn = br(/* @__PURE__ */ function() {
  return arguments;
}()) ? br : function(t) {
  return ct(t) && _f.call(t, "callee") && !mf.call(t, "callee");
};
function vf() {
  return !1;
}
var yi = typeof exports == "object" && exports && !exports.nodeType && exports, gr = yi && typeof module == "object" && module && !module.nodeType && module, wf = gr && gr.exports === yi, yr = wf ? tt.Buffer : void 0, xf = yr ? yr.isBuffer : void 0, ln = xf || vf, Mf = "[object Arguments]", $f = "[object Array]", Tf = "[object Boolean]", Af = "[object Date]", Sf = "[object Error]", Pf = "[object Function]", Ef = "[object Map]", Nf = "[object Number]", Of = "[object Object]", If = "[object RegExp]", zf = "[object Set]", Cf = "[object String]", kf = "[object WeakMap]", Rf = "[object ArrayBuffer]", Ff = "[object DataView]", Lf = "[object Float32Array]", Df = "[object Float64Array]", Hf = "[object Int8Array]", qf = "[object Int16Array]", Bf = "[object Int32Array]", Xf = "[object Uint8Array]", Uf = "[object Uint8ClampedArray]", Gf = "[object Uint16Array]", Yf = "[object Uint32Array]", M = {};
M[Lf] = M[Df] = M[Hf] = M[qf] = M[Bf] = M[Xf] = M[Uf] = M[Gf] = M[Yf] = !0;
M[Mf] = M[$f] = M[Rf] = M[Tf] = M[Ff] = M[Af] = M[Sf] = M[Pf] = M[Ef] = M[Nf] = M[Of] = M[If] = M[zf] = M[Cf] = M[kf] = !1;
function Kf(t) {
  return ct(t) && En(t.length) && !!M[yt(t)];
}
function Vf(t) {
  return function(e) {
    return t(e);
  };
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, zt = _i && typeof module == "object" && module && !module.nodeType && module, Wf = zt && zt.exports === _i, Ke = Wf && fi.process, _r = function() {
  try {
    var t = zt && zt.require && zt.require("util").types;
    return t || Ke && Ke.binding && Ke.binding("util");
  } catch {
  }
}(), mr = _r && _r.isTypedArray, mi = mr ? Vf(mr) : Kf, Zf = Object.prototype, Jf = Zf.hasOwnProperty;
function vi(t, e) {
  var n = k(t), r = !n && Nn(t), i = !n && !r && ln(t), a = !n && !r && !i && mi(t), o = n || r || i || a, s = o ? bi(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || Jf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Oe(u, c))) && s.push(u);
  return s;
}
function wi(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Qf = wi(Object.keys, Object), jf = Object.prototype, tl = jf.hasOwnProperty;
function el(t) {
  if (!pi(t))
    return Qf(t);
  var e = [];
  for (var n in Object(t))
    tl.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function ze(t) {
  return St(t) ? vi(t) : el(t);
}
function nl(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var rl = Object.prototype, il = rl.hasOwnProperty;
function al(t) {
  if (!j(t))
    return nl(t);
  var e = pi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !il.call(t, r)) || n.push(r);
  return n;
}
function ol(t) {
  return St(t) ? vi(t, !0) : al(t);
}
var sl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cl = /^\w*$/;
function On(t, e) {
  if (k(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ee(t) ? !0 : cl.test(t) || !sl.test(t) || e != null && t in Object(e);
}
var Dt = mt(Object, "create");
function ul() {
  this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
}
function fl(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ll = "__lodash_hash_undefined__", hl = Object.prototype, dl = hl.hasOwnProperty;
function pl(t) {
  var e = this.__data__;
  if (Dt) {
    var n = e[t];
    return n === ll ? void 0 : n;
  }
  return dl.call(e, t) ? e[t] : void 0;
}
var bl = Object.prototype, gl = bl.hasOwnProperty;
function yl(t) {
  var e = this.__data__;
  return Dt ? e[t] !== void 0 : gl.call(e, t);
}
var _l = "__lodash_hash_undefined__";
function ml(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Dt && e === void 0 ? _l : e, this;
}
function gt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = ul;
gt.prototype.delete = fl;
gt.prototype.get = pl;
gt.prototype.has = yl;
gt.prototype.set = ml;
function vl() {
  this.__data__ = [], this.size = 0;
}
function Ce(t, e) {
  for (var n = t.length; n--; )
    if (Ie(t[n][0], e))
      return n;
  return -1;
}
var wl = Array.prototype, xl = wl.splice;
function Ml(t) {
  var e = this.__data__, n = Ce(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : xl.call(e, n, 1), --this.size, !0;
}
function $l(t) {
  var e = this.__data__, n = Ce(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Tl(t) {
  return Ce(this.__data__, t) > -1;
}
function Al(t, e) {
  var n = this.__data__, r = Ce(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function et(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = vl;
et.prototype.delete = Ml;
et.prototype.get = $l;
et.prototype.has = Tl;
et.prototype.set = Al;
var Ht = mt(tt, "Map");
function Sl() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (Ht || et)(),
    string: new gt()
  };
}
function Pl(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ke(t, e) {
  var n = t.__data__;
  return Pl(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function El(t) {
  var e = ke(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Nl(t) {
  return ke(this, t).get(t);
}
function Ol(t) {
  return ke(this, t).has(t);
}
function Il(t, e) {
  var n = ke(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function nt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = Sl;
nt.prototype.delete = El;
nt.prototype.get = Nl;
nt.prototype.has = Ol;
nt.prototype.set = Il;
var zl = "Expected a function";
function In(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(zl);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (In.Cache || nt)(), n;
}
In.Cache = nt;
var Cl = 500;
function kl(t) {
  var e = In(t, function(r) {
    return n.size === Cl && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Rl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fl = /\\(\\)?/g, Ll = kl(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Rl, function(n, r, i, a) {
    e.push(i ? a.replace(Fl, "$1") : r || n);
  }), e;
});
function Re(t) {
  return t == null ? "" : hi(t);
}
function Fe(t, e) {
  return k(t) ? t : On(t, e) ? [t] : Ll(Re(t));
}
function Gt(t) {
  if (typeof t == "string" || Ee(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function zn(t, e) {
  e = Fe(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Gt(e[n++])];
  return n && n == r ? t : void 0;
}
function Dl(t, e, n) {
  var r = t == null ? void 0 : zn(t, e);
  return r === void 0 ? n : r;
}
function Cn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var vr = Y ? Y.isConcatSpreadable : void 0;
function Hl(t) {
  return k(t) || Nn(t) || !!(vr && t && t[vr]);
}
function ql(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = Hl), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Cn(i, s) : i[i.length] = s;
  }
  return i;
}
function Bl(t) {
  var e = t == null ? 0 : t.length;
  return e ? ql(t) : [];
}
var Xl = wi(Object.getPrototypeOf, Object);
function Ul(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Gl(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, Ul(t, e, n);
}
var Yl = "\\ud800-\\udfff", Kl = "\\u0300-\\u036f", Vl = "\\ufe20-\\ufe2f", Wl = "\\u20d0-\\u20ff", Zl = Kl + Vl + Wl, Jl = "\\ufe0e\\ufe0f", Ql = "\\u200d", jl = RegExp("[" + Ql + Yl + Zl + Jl + "]");
function xi(t) {
  return jl.test(t);
}
function th(t) {
  return t.split("");
}
var Mi = "\\ud800-\\udfff", eh = "\\u0300-\\u036f", nh = "\\ufe20-\\ufe2f", rh = "\\u20d0-\\u20ff", ih = eh + nh + rh, ah = "\\ufe0e\\ufe0f", oh = "[" + Mi + "]", hn = "[" + ih + "]", dn = "\\ud83c[\\udffb-\\udfff]", sh = "(?:" + hn + "|" + dn + ")", $i = "[^" + Mi + "]", Ti = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ai = "[\\ud800-\\udbff][\\udc00-\\udfff]", ch = "\\u200d", Si = sh + "?", Pi = "[" + ah + "]?", uh = "(?:" + ch + "(?:" + [$i, Ti, Ai].join("|") + ")" + Pi + Si + ")*", fh = Pi + Si + uh, lh = "(?:" + [$i + hn + "?", hn, Ti, Ai, oh].join("|") + ")", hh = RegExp(dn + "(?=" + dn + ")|" + lh + fh, "g");
function dh(t) {
  return t.match(hh) || [];
}
function ph(t) {
  return xi(t) ? dh(t) : th(t);
}
function bh(t) {
  return function(e) {
    e = Re(e);
    var n = xi(e) ? ph(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Gl(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var gh = bh("toUpperCase");
function yh(t) {
  return gh(Re(t).toLowerCase());
}
function _h() {
  this.__data__ = new et(), this.size = 0;
}
function mh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function vh(t) {
  return this.__data__.get(t);
}
function wh(t) {
  return this.__data__.has(t);
}
var xh = 200;
function Mh(t, e) {
  var n = this.__data__;
  if (n instanceof et) {
    var r = n.__data__;
    if (!Ht || r.length < xh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new nt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function J(t) {
  var e = this.__data__ = new et(t);
  this.size = e.size;
}
J.prototype.clear = _h;
J.prototype.delete = mh;
J.prototype.get = vh;
J.prototype.has = wh;
J.prototype.set = Mh;
function kn(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function Ei() {
  return [];
}
var $h = Object.prototype, Th = $h.propertyIsEnumerable, wr = Object.getOwnPropertySymbols, Ni = wr ? function(t) {
  return t == null ? [] : (t = Object(t), kn(wr(t), function(e) {
    return Th.call(t, e);
  }));
} : Ei, Ah = Object.getOwnPropertySymbols, Sh = Ah ? function(t) {
  for (var e = []; t; )
    Cn(e, Ni(t)), t = Xl(t);
  return e;
} : Ei;
function Oi(t, e, n) {
  var r = e(t);
  return k(t) ? r : Cn(r, n(t));
}
function xr(t) {
  return Oi(t, ze, Ni);
}
function Ph(t) {
  return Oi(t, ol, Sh);
}
var pn = mt(tt, "DataView"), bn = mt(tt, "Promise"), gn = mt(tt, "Set"), Mr = "[object Map]", Eh = "[object Object]", $r = "[object Promise]", Tr = "[object Set]", Ar = "[object WeakMap]", Sr = "[object DataView]", Nh = _t(pn), Oh = _t(Ht), Ih = _t(bn), zh = _t(gn), Ch = _t(fn), Z = yt;
(pn && Z(new pn(new ArrayBuffer(1))) != Sr || Ht && Z(new Ht()) != Mr || bn && Z(bn.resolve()) != $r || gn && Z(new gn()) != Tr || fn && Z(new fn()) != Ar) && (Z = function(t) {
  var e = yt(t), n = e == Eh ? t.constructor : void 0, r = n ? _t(n) : "";
  if (r)
    switch (r) {
      case Nh:
        return Sr;
      case Oh:
        return Mr;
      case Ih:
        return $r;
      case zh:
        return Tr;
      case Ch:
        return Ar;
    }
  return e;
});
var Pr = tt.Uint8Array, kh = "__lodash_hash_undefined__";
function Rh(t) {
  return this.__data__.set(t, kh), this;
}
function Fh(t) {
  return this.__data__.has(t);
}
function we(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new nt(); ++e < n; )
    this.add(t[e]);
}
we.prototype.add = we.prototype.push = Rh;
we.prototype.has = Fh;
function Lh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Dh(t, e) {
  return t.has(e);
}
var Hh = 1, qh = 2;
function Ii(t, e, n, r, i, a) {
  var o = n & Hh, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var f = -1, h = !0, p = n & qh ? new we() : void 0;
  for (a.set(t, e), a.set(e, t); ++f < s; ) {
    var d = t[f], y = e[f];
    if (r)
      var w = o ? r(y, d, f, e, t, a) : r(d, y, f, t, e, a);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Lh(e, function(g, x) {
        if (!Dh(p, x) && (d === g || i(d, g, n, r, a)))
          return p.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === y || i(d, y, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), h;
}
function zi(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Bh(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Xh = 1, Uh = 2, Gh = "[object Boolean]", Yh = "[object Date]", Kh = "[object Error]", Vh = "[object Map]", Wh = "[object Number]", Zh = "[object RegExp]", Jh = "[object Set]", Qh = "[object String]", jh = "[object Symbol]", td = "[object ArrayBuffer]", ed = "[object DataView]", Er = Y ? Y.prototype : void 0, Ve = Er ? Er.valueOf : void 0;
function nd(t, e, n, r, i, a, o) {
  switch (n) {
    case ed:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case td:
      return !(t.byteLength != e.byteLength || !a(new Pr(t), new Pr(e)));
    case Gh:
    case Yh:
    case Wh:
      return Ie(+t, +e);
    case Kh:
      return t.name == e.name && t.message == e.message;
    case Zh:
    case Qh:
      return t == e + "";
    case Vh:
      var s = zi;
    case Jh:
      var c = r & Xh;
      if (s || (s = Bh), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= Uh, o.set(t, e);
      var l = Ii(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case jh:
      if (Ve)
        return Ve.call(t) == Ve.call(e);
  }
  return !1;
}
var rd = 1, id = Object.prototype, ad = id.hasOwnProperty;
function od(t, e, n, r, i, a) {
  var o = n & rd, s = xr(t), c = s.length, u = xr(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in e : ad.call(e, h)))
      return !1;
  }
  var p = a.get(t), d = a.get(e);
  if (p && d)
    return p == e && d == t;
  var y = !0;
  a.set(t, e), a.set(e, t);
  for (var w = o; ++f < c; ) {
    h = s[f];
    var g = t[h], x = e[h];
    if (r)
      var $ = o ? r(x, g, h, e, t, a) : r(g, x, h, t, e, a);
    if (!($ === void 0 ? g === x || i(g, x, n, r, a) : $)) {
      y = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (y && !w) {
    var b = t.constructor, m = e.constructor;
    b != m && "constructor" in t && "constructor" in e && !(typeof b == "function" && b instanceof b && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(e), y;
}
var sd = 1, Nr = "[object Arguments]", Or = "[object Array]", ee = "[object Object]", cd = Object.prototype, Ir = cd.hasOwnProperty;
function ud(t, e, n, r, i, a) {
  var o = k(t), s = k(e), c = o ? Or : Z(t), u = s ? Or : Z(e);
  c = c == Nr ? ee : c, u = u == Nr ? ee : u;
  var l = c == ee, f = u == ee, h = c == u;
  if (h && ln(t)) {
    if (!ln(e))
      return !1;
    o = !0, l = !1;
  }
  if (h && !l)
    return a || (a = new J()), o || mi(t) ? Ii(t, e, n, r, i, a) : nd(t, e, c, n, r, i, a);
  if (!(n & sd)) {
    var p = l && Ir.call(t, "__wrapped__"), d = f && Ir.call(e, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? e.value() : e;
      return a || (a = new J()), i(y, w, n, r, a);
    }
  }
  return h ? (a || (a = new J()), od(t, e, n, r, i, a)) : !1;
}
function Rn(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ct(t) && !ct(e) ? t !== t && e !== e : ud(t, e, n, r, Rn, i);
}
var fd = 1, ld = 2;
function hd(t, e, n, r) {
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
      var l = new J(), f;
      if (!(f === void 0 ? Rn(u, c, fd | ld, r, l) : f))
        return !1;
    }
  }
  return !0;
}
function Ci(t) {
  return t === t && !j(t);
}
function dd(t) {
  for (var e = ze(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Ci(i)];
  }
  return e;
}
function ki(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function pd(t) {
  var e = dd(t);
  return e.length == 1 && e[0][2] ? ki(e[0][0], e[0][1]) : function(n) {
    return n === t || hd(n, t, e);
  };
}
function bd(t, e) {
  return t != null && e in Object(t);
}
function Ri(t, e, n) {
  e = Fe(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Gt(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && En(i) && Oe(o, i) && (k(t) || Nn(t)));
}
function gd(t, e) {
  return t != null && Ri(t, e, bd);
}
var yd = 1, _d = 2;
function md(t, e) {
  return On(t) && Ci(e) ? ki(Gt(t), e) : function(n) {
    var r = Dl(n, t);
    return r === void 0 && r === e ? gd(n, t) : Rn(e, r, yd | _d);
  };
}
function Fi(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function vd(t) {
  return function(e) {
    return zn(e, t);
  };
}
function wd(t) {
  return On(t) ? Fi(Gt(t)) : vd(t);
}
function Le(t) {
  return typeof t == "function" ? t : t == null ? Ne : typeof t == "object" ? k(t) ? md(t[0], t[1]) : pd(t) : wd(t);
}
function xd(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var Md = xd();
function $d(t, e) {
  return t && Md(t, e, ze);
}
function Td(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!St(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Fn = Td($d);
function Ad(t) {
  return ct(t) && St(t);
}
function Sd(t) {
  return typeof t == "function" ? t : Ne;
}
function yn(t, e) {
  var n = k(t) ? af : Fn;
  return n(t, Sd(e));
}
function Pd(t, e) {
  return Ut(e, function(n) {
    return [n, t[n]];
  });
}
function Ed(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Nd = "[object Map]", Od = "[object Set]";
function Id(t) {
  return function(e) {
    var n = Z(e);
    return n == Nd ? zi(e) : n == Od ? Ed(e) : Pd(e, t(e));
  };
}
var zd = Id(ze);
function Cd(t, e) {
  var n = [];
  return Fn(t, function(r, i, a) {
    e(r, i, a) && n.push(r);
  }), n;
}
function kd(t, e) {
  var n = k(t) ? kn : Cd;
  return n(t, Le(e));
}
function Rd(t, e) {
  var n = -1, r = St(t) ? Array(t.length) : [];
  return Fn(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function qt(t, e) {
  var n = k(t) ? Ut : Rd;
  return n(t, Le(e));
}
var Fd = Object.prototype, Ld = Fd.hasOwnProperty;
function Dd(t, e) {
  return t != null && Ld.call(t, e);
}
function Hd(t, e) {
  return t != null && Ri(t, e, Dd);
}
var qd = "[object Boolean]";
function Bd(t) {
  return t === !0 || t === !1 || ct(t) && yt(t) == qd;
}
function Xd(t, e) {
  for (var n, r = -1, i = t.length; ++r < i; ) {
    var a = e(t[r]);
    a !== void 0 && (n = n === void 0 ? a : n + a);
  }
  return n;
}
function Ud(t, e, n, r) {
  if (!j(t))
    return t;
  e = Fe(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Gt(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = j(l) ? l : Oe(e[i + 1]) ? [] : {});
    }
    lf(s, c, u), s = s[c];
  }
  return t;
}
function Gd(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = zn(t, o);
    n(s, o) && Ud(a, Fe(o, t), s);
  }
  return a;
}
function Li(t, e) {
  if (t == null)
    return {};
  var n = Ut(Ph(t), function(r) {
    return [r];
  });
  return e = Le(e), Gd(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Yd = Math.ceil, Kd = Math.max;
function Vd(t, e, n, r) {
  for (var i = -1, a = Kd(Yd((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function Wd(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && bf(e, n, r) && (n = r = void 0), e = Ge(e), n === void 0 ? (n = e, e = 0) : n = Ge(n), r = r === void 0 ? e < n ? 1 : -1 : Ge(r), Vd(e, n, r);
  };
}
var Ln = Wd();
function Zd() {
  var t = arguments, e = Re(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function se(t, e) {
  return t && t.length ? Xd(t, Le(e)) : 0;
}
var Jd = Math.max;
function Qd(t) {
  if (!(t && t.length))
    return [];
  var e = 0;
  return t = kn(t, function(n) {
    if (Ad(n))
      return e = Jd(n.length, e), !0;
  }), bi(e, function(n) {
    return Ut(t, Fi(n));
  });
}
var xe = df(Qd);
const jd = (t, e, n = 12, r = 12) => {
  const i = G().domain([0, n]).range([0, t]), a = G().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Ln((n + 1) * (r + 1)).map(function(c) {
        return { m: c % (n + 1), n: Math.floor(c / (n + 1)), x: i(c % (n + 1)), y: a(Math.floor(c / (n + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const l = Bl(qt(u, function(f) {
        return qt(
          c,
          function(h) {
            return { x: i(h), y: a(f) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, t0 = "_widget_18g36_1", e0 = "_label_18g36_19", n0 = "_lit_18g36_24", r0 = "_button_18g36_29", i0 = "_symbol_18g36_29", a0 = "_radio_18g36_29", o0 = "_radiobutton_18g36_29", s0 = "_selected_18g36_35", c0 = "_toggle_18g36_35", u0 = "_slider_18g36_44", f0 = "_track_18g36_44", l0 = "_track_overlay_18g36_48", h0 = "_handle_18g36_55", _ = {
  widget: t0,
  label: e0,
  lit: n0,
  button: r0,
  symbol: i0,
  radio: a0,
  radiobutton: o0,
  selected: s0,
  toggle: c0,
  slider: u0,
  track: f0,
  track_overlay: l0,
  handle: h0
}, Dn = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Hn = (t, e, n) => {
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
}, d0 = (t = 1) => {
  const e = q();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, p0 = (t = 1) => {
  const e = q(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, b0 = (t = 1) => {
  const e = q();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, g0 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = q();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, y0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, _0 = (t = 1) => {
  const e = q(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, m0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, v0 = (t = 1) => {
  var e = q(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, w0 = (t = 1) => {
  const e = q(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, _n = (t) => {
  switch (t) {
    case "play":
      return d0;
    case "forward":
      return p0;
    case "back":
      return b0;
    case "pause":
      return g0;
    case "reload":
      return y0;
    case "capture":
      return _0;
    case "rewind":
      return m0;
    case "stop":
      return v0;
    case "push":
      return w0;
  }
}, qn = () => {
  const t = "button";
  var e = Dn(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(d) {
  }, l = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % l.length, u(), S(this.parentNode).select("." + _.symbol).attr("d", _n(l[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % l.length, u(), d.select("#button_" + e).select("." + _.symbol).attr("d", _n(l[f])(r * n));
    }
  };
}, x0 = () => {
  const t = "slider", e = Pe(".3f");
  var n = Dn(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, l = function(g) {
  }, f = function(g) {
  }, h = [0, 1], p = 0, d = null, y = G().domain(h).range([0, r]).clamp(!0);
  const w = function(g, x, $ = h) {
    const b = g.select("#slider_" + n);
    y.domain($), p = x, b.selectAll("." + _.handle).transition().attr("cx", y(x)), o && b.select("." + _.label).text(d + " = " + e(p)), l(), f();
  };
  return {
    type: t,
    scale: y,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return l = g, this;
      l(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    range: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: w,
    click: w
  };
}, M0 = () => {
  const t = "toggle";
  var e = Dn(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(f) {
  }, c = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    click: function() {
      c = !c;
      const f = S(this.parentNode);
      f.select("." + _.handle).transition().attr("cx", c ? 2 * n : 0), f.classed(_.selected, c), s();
    },
    reset: function(f, h) {
      c = h;
      const p = f.select("#toggle_" + e);
      p.selectAll("." + _.handle).transition().attr("cx", c ? 2 * n : 0), p.classed(_.selected, c), s();
    }
  };
}, $0 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = S(a).attr("class", _.widget + " " + _.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", _.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(_.lit, !0), S(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(_.lit, !1), S(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), o.append("path").attr("d", _n(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", _.symbol), r) {
    const c = Hn(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", _.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Di = (t, e) => {
  const n = q();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, T0 = (t, e) => {
  const n = Pe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(c).attr("class", _.widget + " " + _.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Di(t.size(), t.girth())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", _.track_overlay).on("click", function(d) {
    const y = je(d, this)[0];
    t.value(o.invert(y)), t.update(), t.update_end(), s.selectAll("." + _.handle).attr("cx", o(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + n(t.value()));
  }).call(
    jo().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + _.handle).attr("cx", o(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var l, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Kt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Kt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Kt([t.girth() / 2, t.knob()]) + 7 : -Kt([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", _.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + f + ")"), c;
}, A0 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(o).attr("class", _.widget + " " + _.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(_.selected, t.value() == 1);
  if (s.append("path").attr("d", Di(2 * t.size(), 2 * t.size())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", _.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Hn(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", _.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, S0 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ca(o), c = G().domain([0, o - 1]).range([0, t.size()]), u = G().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(l).attr("class", _.widget + " " + _.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + _.radiobutton).data(s).enter().append("g").attr("class", _.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + u(w) + ")" : "translate(" + c(w) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), p.attr("class", _.background).on("mouseover", function() {
    S(this).classed(_.lit, !0), S(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(_.lit, !1), S(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), d.attr("class", _.symbol), d.filter((w) => w == t.value()).classed(_.selected, !0), h.on("click", t.click);
  const y = Hn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", _.label).text(function(w, g) {
    return t.choices()[g];
  }).attr("alignment-baseline", y.valign).attr("transform", "translate(" + y.x + "," + y.y + ")").style("font-size", t.fontsize()).attr("text-anchor", y.anchor), l;
}, We = (t, e) => {
  switch (t.type) {
    case "button":
      return $0(t);
    case "slider":
      return T0(t);
    case "radio":
      return S0(t);
    case "toggle":
      return A0(t);
  }
}, P0 = (t, e) => {
  const n = jd(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = S("#" + t).classed(e.id + " " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && a.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && a.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: n };
}, A = {
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
}, E = {
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
}, Hi = (t) => qt(zd(t), (e) => (e[1].id = e[0], e[1].label = Zd(yh(e[0]), /_/g, " "), e[1])), qi = (t, e) => yn(t, (n, r) => n.widget = e[r]), Bi = (t) => Li(t, (e) => Hd(e, "range")), Xi = (t) => Li(t, (e) => Bd(e.default));
G().domain([0, 360]).range([0, 2 * Math.PI]);
G().range([0, 360]).domain([0, 2 * Math.PI]);
const Ui = Hi(Bi(E)), Gi = Hi(Xi(E)), ce = qt(
  Ui,
  (t) => x0().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob)
), mn = qt(
  Gi,
  (t) => M0().id(t.id).label(t.label).value(t.default)
);
qi(Gi, mn);
qi(Ui, ce);
const at = qn().actions(["play", "pause"]), De = qn().actions(["back"]), He = qn().actions(["rewind"]), E0 = [at, De, He], N0 = (t, e) => {
  const n = e.position(A.widgets.slider_anchor.x, Ln(ce.length).map((i) => A.widgets.slider_anchor.y + A.widgets.slider_gap * i)), r = e.position(A.widgets.toggle_anchor.x, A.widgets.toggle_anchor.y);
  ce.forEach((i, a) => i.position(n[a])), mn[0].position(r).labelposition(A.widgets.toggle_label_pos), at.position(e.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), He.position(e.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), De.position(e.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(ce).enter().append(We), t.selectAll(null).data(mn).enter().append(We), t.selectAll(null).data(E0).enter().append(We);
}, O0 = (t) => {
  yn(Bi(E), (e) => e.widget.reset(t, e.default)), yn(Xi(E), (e) => e.widget.reset(t, e.default));
};
function Yi(t, e) {
  return [t % e, Math.floor(t / e)];
}
const I0 = {
  n4: xe([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: xe([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Ze(t, e, n = "periodic", r = "n8") {
  const i = [];
  return I0[r].forEach((a) => {
    var o = a[1], s = a[0];
    const c = Yi(t, e), u = c[0], l = c[1], f = u + s, h = l + o;
    (n == "dirichlet" ? !(o == 0 && s == 0) && f < e && h < e && f >= 0 && h >= 0 : !(o == 0 && s == 0)) && i.push(e * ((h + e) % e) + (f + e) % e);
  }), i;
}
const z0 = function(t) {
  var e = "periodic", n = 1, r = "n8";
  const i = 2 * t + 1;
  var a = n / i, o = a;
  const s = Ln(i * i).map(function(h) {
    const p = Yi(h, i);
    return {
      m: p[0],
      n: p[1],
      x: a * (p[0] + 0.5) - n / 2,
      y: o * (p[1] + 0.5) - n / 2
    };
  });
  s.forEach(function(h, p) {
    h.neighbors = Ze(p, i, e, r).map((d) => s[d]), h.cell = () => [
      { x: h.x + a / 2, y: h.y + o / 2 },
      { x: h.x - a / 2, y: h.y + o / 2 },
      { x: h.x - a / 2, y: h.y - o / 2 },
      { x: h.x + a / 2, y: h.y - o / 2 },
      { x: h.x + a / 2, y: h.y + o / 2 }
    ], h.random_interior_point = () => ({
      x: h.x + a * (Math.random() - 0.5),
      y: h.y + o * (Math.random() - 0.5)
    });
  });
  const c = function(h) {
    return typeof h < "u" ? (s.forEach(function(p) {
      p.x = (p.m + 0.5) * h / i - h / 2, p.y = (p.n + 0.5) * h / i - h / 2;
    }), n = h, a = n / i, o = n / i, this.L = n, this) : n;
  }, u = function(h) {
    return typeof h < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Ze(d, i, h, r).map((y) => s[y]);
    }), e = h, s.forEach((p) => {
      p.is_boundary = e == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : e;
  }, l = function(h) {
    return typeof h < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Ze(d, i, e, h).map((y) => s[y]);
    }), r = h, this) : r;
  }, f = function() {
    return e === "periodic" ? null : kd(s, (h) => h.n == 0 || h.n == 2 * t || h.m == 0 || h.m == 2 * t);
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
    boundary_cells: f
  };
};
xe([-1, 1, 0, 0], [0, 0, -1, 1]), xe([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const C0 = E.dt, k0 = E.N;
var dt = [], vn = [];
function Ki(t) {
  vn = [], t.forEach((e) => {
    e.sing = 0;
    const n = e.neighbors, r = se(n, (o) => Math.cos(o.theta)), i = se(n, (o) => Math.sin(o.theta)), a = 1 / (r ** 2 + i ** 2);
    e.sing = a > E.pinwheel_threshold && se(n, (o) => o.sing) == 0 ? 1 : 0, e.sing == 1 && vn.push(e);
  });
}
const R0 = () => {
  E.timer = {}, E.tick = 0, dt = z0(k0).boundary("periodic").nodes, dt.forEach((e) => {
    e.theta = Math.random() * 2 * Math.PI, e.domega = 2 * Math.random() - 1;
  }), Ki(dt);
}, F0 = () => {
  E.tick++;
  const t = E.oscillator_speed.widget.value(), e = E.oscillator_heterogeneity.widget.value(), n = E.coupling_strength.widget.value();
  dt.forEach((r) => {
    r.theta += C0 * (t * (1 + e * r.domega) + n * se(r.neighbors, function(i) {
      return Math.sin(i.theta - r.theta);
    })), r.theta = r.theta % (2 * Math.PI);
  }), Ki(dt);
}, ne = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, L0 = {
  roma: Qt(it, ne.romaO),
  vik: Qt(it, ne.vikO),
  broc: Qt(it, ne.brocO),
  bam: Qt(it, ne.bamO),
  sinebow: hu
}, Vi = L0[A.simulation.colormap];
E.N;
const ot = G().domain([-0.5, 0.5]), st = G().domain([-0.5, 0.5]);
var z, ue, fe;
function D0() {
  var t = E.show_pinwheels.widget.value() ? A.simulation.pinwheel_opacity : 0;
  z.fillStyle = "rgba(255, 255, 255," + t + ")", z.strokeStyle = "rgba(0, 0, 0," + t + ")", vn.forEach((e) => {
    z.beginPath(), z.arc(ot(e.x), st(e.y), 20, 0, 2 * Math.PI), z.fill(), z.stroke();
  });
}
const H0 = (t, e) => {
  ue = e.display_size.width, fe = e.display_size.height, ot.range([0, ue]), st.range([0, fe]), z = t.node().getContext("2d"), z.clearRect(0, 0, ue, fe), dt.forEach((n) => {
    const r = n.cell();
    z.fillStyle = Vi(n.theta / 2 / Math.PI), z.fillRect(ot(r[2].x), st(r[2].y), ot(r[0].x) - ot(r[2].x), st(r[0].y) - st(r[2].y));
  });
}, Wi = (t, e) => {
  z.clearRect(0, 0, ue, fe), dt.forEach((n) => {
    const r = n.cell();
    z.fillStyle = Vi(n.theta / 2 / Math.PI), z.fillRect(ot(r[2].x), st(r[2].y), ot(r[0].x) - ot(r[2].x), st(r[0].y) - st(r[2].y));
  }), D0();
};
function q0(t, e) {
  F0(), Wi();
}
function Zi(t, e) {
  R0(), H0(t, e);
}
function B0(t, e) {
  Wi();
}
var zr = {};
const X0 = (t, e) => {
  at.value() == 1 ? zr = Os(() => q0(), A.simulation.delay) : zr.stop();
}, U0 = (t, e, n) => {
  He.update(() => O0(e)), at.update(() => X0()), De.update(() => Zi(t, n)), E.show_pinwheels.widget.update(() => B0());
}, G0 = {
  name: "@explorables/spinwheels",
  title: "Spin Wheels",
  subtitle: "Phase coupled oscillators on a lattice",
  description: "This explorable is a spatial implementation of the Kuramoto Model for phase coupled oscillators. It illustrates spatial synchronization and the dynamics of phase singularities.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Y0(t, e = Ji) {
  const n = P0(t, e), r = n.display, i = n.controls, a = n.grid;
  return N0(i, a), U0(r, i, e), Zi(r, e), {
    halt() {
      at.value() === 1 && at.press(i);
    },
    reset() {
      at.value() === 1 && at.press(i), He.press(i), De.press(i);
    },
    config: e,
    meta: G0
  };
}
export {
  Ji as config,
  Y0 as default,
  Y0 as load,
  G0 as meta
};
