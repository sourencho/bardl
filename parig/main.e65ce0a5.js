this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
    "use strict";

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function o(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e
    }

    function n(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s, e
    }

    function r(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), a && l(e, a)
    }

    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a, e
        })(e, a)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new(Function.bind.apply(e, t));
            return s && l(o, s.prototype), o
        }).apply(null, arguments)
    }

    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
            var s;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e)) return a.get(e);
                a.set(e, t)
            }

            function t() {
                return u(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(t, e)
        })(e)
    }

    function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
    }

    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else s = t.apply(this, arguments);
            return m(this, s)
        }
    }

    function y(e, a) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s) return;
            var t, o, n = [],
                r = !0,
                i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, a) || b(e, a) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, a) {
        if (e) {
            if ("string" == typeof e) return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }

    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                        bubbles: !0,
                        composed: !0
                    }))), e._render()
                })), this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letter":
                        if (s === a) break;
                        var t = "null" === s ? "" : s;
                        this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                        break;
                    case "evaluation":
                        if (!s) break;
                        this._state = s;
                        break;
                    case "reveal":
                        this._animation = "flip-in", this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e._letters = "", e._evaluation = [], e._length, e
        }
        return o(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }), 300 * s)
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                        var s = document.createElement("game-tile"),
                            t = e._letters[a];
                        (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                            s.setAttribute("reveal", "")
                        }), 100 * a));
                        a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                    }, s = 0; s < this._length; s++) a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letters":
                        this._letters = s || "";
                        break;
                    case "length":
                        this._length = parseInt(s, 10);
                        break;
                    case "win":
                        if (null === s) {
                            this.$tiles.forEach((function(e) {
                                e.classList.remove("win")
                            }));
                            break
                        }
                        this.$tiles.forEach((function(e, a) {
                            e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                        }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
        S = "colorBlindTheme",
        _ = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({
                    mode: "open"
                });
                var o = JSON.parse(window.localStorage.getItem(j)),
                    r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                    i = JSON.parse(window.localStorage.getItem(S));
                return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
            }
            return o(t, [{
                key: "setDarkTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked;
                        switch (t) {
                            case "dark-theme":
                                return void e.setDarkTheme(o);
                            case "color-blind-theme":
                                return void e.setColorBlindTheme(o)
                        }
                    }))
                }
            }]), t
        }(c(HTMLElement));

    function q(e, a) {
        return e === a || e != e && a != a
    }

    function E(e, a) {
        for (var s = e.length; s--;)
            if (q(e[s][0], a)) return s;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;

    function C(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    C.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, C.prototype.delete = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
    }, C.prototype.get = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }, C.prototype.has = function(e) {
        return E(this.__data__, e) > -1
    }, C.prototype.set = function(e, a) {
        var s = this.__data__,
            t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
    };
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
        T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
        I = L || T || Function("return this")(),
        M = I.Symbol,
        O = Object.prototype,
        R = O.hasOwnProperty,
        P = O.toString,
        $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;

    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
            var a = R.call(e, $),
                s = e[$];
            try {
                e[$] = void 0;
                var t = !0
            } catch (e) {}
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]), o
        }(e) : function(e) {
            return H.call(e)
        }(e)
    }

    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }

    function B(e) {
        if (!G(e)) return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var F, W = I["__core-js_shared__"],
        Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
        X = Function.prototype,
        V = Object.prototype,
        K = X.toString,
        Q = V.hasOwnProperty,
        Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ee(e) {
        return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
            if (null != e) {
                try {
                    return J.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var a
    }

    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map"),
        te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;

    function re(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    function ie(e, s) {
        var t, o, n = e.__data__;
        return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
    }

    function le(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {}, this.size = 0
    }, re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0, a
    }, re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return oe.call(a, e) ? a[e] : void 0
    }, re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e)
    }, re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
    }, le.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new re,
            map: new(se || C),
            string: new re
        }
    }, le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0, a
    }, le.prototype.get = function(e) {
        return ie(this, e).get(e)
    }, le.prototype.has = function(e) {
        return ie(this, e).has(e)
    }, le.prototype.set = function(e, a) {
        var s = ie(this, e),
            t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };

    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new C, this.size = 0
    }, de.prototype.delete = function(e) {
        var a = this.__data__,
            s = a.delete(e);
        return this.size = a.size, s
    }, de.prototype.get = function(e) {
        return this.__data__.get(e)
    }, de.prototype.has = function(e) {
        return this.__data__.has(e)
    }, de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ue = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }();

    function ce(e, a, s) {
        "__proto__" == a && ue ? ue(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }

    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me, he = function(e, a, s) {
            for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
                var i = n[me ? r : ++t];
                if (!1 === a(o[i], i, o)) break
            }
            return e
        },
        ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) {
        var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length)
    }
    var we = Object.create,
        xe = function() {
            function e() {}
            return function(a) {
                if (!G(a)) return {};
                if (we) return we(a);
                e.prototype = a;
                var s = new e;
                return e.prototype = void 0, s
            }
        }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
            return ze(je(e))
        }),
        _e = Object.prototype;

    function qe(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || _e)
    }

    function Ee(e) {
        return null != e && "object" == a(e)
    }

    function Ae(e) {
        return Ee(e) && "[object Arguments]" == D(e)
    }
    var Ce = Object.prototype,
        Le = Ce.hasOwnProperty,
        Te = Ce.propertyIsEnumerable,
        Ie = Ae(function() {
            return arguments
        }()) ? Ae : function(e) {
            return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
        },
        Me = Array.isArray;

    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }

    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }
    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        He = $e && $e.exports === Pe ? I.Buffer : void 0,
        Ne = (He ? He.isBuffer : void 0) || function() {
            return !1
        },
        De = Function.prototype,
        Ge = Object.prototype,
        Be = De.toString,
        Fe = Ge.hasOwnProperty,
        We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Xe = Ue && Ue.exports === Je && L.process,
        Ve = function() {
            try {
                var e = Ue && Ue.require && Ue.require("util").types;
                return e || Xe && Xe.binding && Xe.binding("util")
            } catch (e) {}
        }(),
        Ke = Ve && Ve.isTypedArray,
        Qe = Ke ? function(e) {
            return function(a) {
                return e(a)
            }
        }(Ke) : function(e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)]
        };

    function Ze(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;

    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var oa = Object.prototype.hasOwnProperty;

    function na(e, a) {
        var s = Me(e),
            t = !s && Ie(e),
            o = !s && !t && Ne(e),
            n = !s && !t && !o && Qe(e),
            r = s || t || o || n,
            i = r ? function(e, a) {
                for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
                return t
            }(e.length, String) : [],
            l = i.length;
        for (var d in e) !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
        if (!G(e)) return function(e) {
            var a = [];
            if (null != e)
                for (var s in Object(e)) a.push(s);
            return a
        }(e);
        var a = qe(e),
            s = [];
        for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }

    function la(e) {
        return Re(e) ? na(e, !0) : ia(e)
    }

    function da(e) {
        return function(e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r;) {
                var i = a[n],
                    l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }

    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s),
            l = Ze(a, s),
            d = r.get(l);
        if (d) pe(e, s, d);
        else {
            var u, c = n ? n(i, l, s + "", e, a, r) : void 0,
                p = void 0 === c;
            if (p) {
                var m = Me(l),
                    h = !m && Ne(l),
                    y = !m && !h && Qe(l);
                c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                    var s = -1,
                        t = e.length;
                    for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                    return a
                }(i) : h ? (p = !1, c = function(e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                        t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
                    if (!Ee(e) || "[object Object]" != D(e)) return !1;
                    var a = Se(e);
                    if (null === a) return !0;
                    var s = Fe.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == We
                }(l) || Ie(l) ? (c = i, Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c)
        }
    }

    function ca(e, a, s, t, o) {
        e !== a && he(a, (function(n, r) {
            if (o || (o = new de), G(n)) ua(e, a, r, s, ca, t, o);
            else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n), pe(e, r, i)
            }
        }), la)
    }

    function pa(e) {
        return e
    }

    function ma(e, a, s) {
        switch (s.length) {
            case 0:
                return e.call(a);
            case 1:
                return e.call(a, s[0]);
            case 2:
                return e.call(a, s[0], s[1]);
            case 3:
                return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ue ? function(e, a) {
            return ue(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: (s = a, function() {
                    return s
                }),
                writable: !0
            });
            var s
        } : pa,
        ga = Date.now;
    var ba = function(e) {
        var a = 0,
            s = 0;
        return function() {
            var t = ga(),
                o = 16 - (t - s);
            if (s = t, o > 0) {
                if (++a >= 800) return arguments[0]
            } else a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);

    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
                function() {
                    for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) r[o] = t[a + o];
                    o = -1;
                    for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                    return i[a] = s(r), ma(e, this, i)
                }
        }(e, a, pa), e + "")
    }
    var ka, va = (ka = function(e, a, s) {
            ca(e, a, s)
        }, fa((function(e, s) {
            var t = -1,
                o = s.length,
                n = o > 1 ? s[o - 1] : void 0,
                r = o > 2 ? s[2] : void 0;
            for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0, r && function(e, s, t) {
                    if (!G(t)) return !1;
                    var o = a(s);
                    return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
                }(s[0], s[1], r) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++t < o;) {
                var i = s[t];
                i && ka(e, i, t, n)
            }
            return e
        }))),
        wa = "gameState",
        xa = {
            boardState: null,
            evaluations: null,
            rowIndex: null,
            solution: null,
            gameStatus: null,
            lastPlayedTs: null,
            lastCompletedTs: null,
            restoringFromLocalStorage: null,
            hardMode: !1
        };

    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }

    function ja(e) {
        var a = za();
        ! function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }
    var Sa = document.createElement("template");
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Դժուարացնել</div>\n          <div class="description">Ճիշդ գուշակուած տառերը պէտք է յաջորդ փորձին գործածուին:</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Մթնցնել</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Գունակոյր</div>\n          <div class="description">Բարձր հակադրութեամբ գոյներ:</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Արձագանք</div>\n        </div>\n        <div class="control">\n          <a href="mailto:shahen.books@gmail.com" title="shahen.books@gmail.com">Email</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=ThePoliticsWand" target="blank" title="@ThePoliticsWand">Twitter</a>\n        </div>\n      </div>\n    </section>\n </div>\n <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Արեւելահայերէն</div>\n        </div>\n        <div class="control">\n          <a href="https://gagikm.github.io/bardl/" title="Bardl">Bardl</a>\n        </div>\n      </div>\n    </section>\n </div>  <div id="footnote">\n    <div>\n   \n  <div style="text-align:left"><a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>-էն պատշաճեցուած: </div>\n </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: o,
                            disabled: n
                        }
                    })), a.render()
                })), this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea, Aa = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), n(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                    a.classList.add("fade")
                }), this._duration), a.addEventListener("transitionend", (function(a) {
                    e.parentNode.removeChild(e)
                }))
            }
        }]), t
    }(c(HTMLElement));

    function Ca() {
        dataLayer.push(arguments)
    }
    customElements.define("game-toast", Aa), window.dataLayer = window.dataLayer || [], Ca("js", new Date);
    Ca("config", "G-2SSGMHY3NP", {
        app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    });
    var La = ['գտնել', 'այսօր', 'երկիր', 'կրկին', 'անգամ', 'կարող', 'ցուրտ', 'որոնք', 'բանակ', 'առջեւ', 'արձակ', 'հազար', 'ուղիղ', 'զգալի', 'աւելի', 'դուրս', 'հաջող', 'խաղաղ', 'յաճախ', 'ուժեղ', 'երկար', 'դեղին', 'միջոց', 'բժիշկ', 'բարեւ', 'լուրջ', 'սկսիլ', 'բարձր', 'առանց', 'անդամ', 'ամուր', 'բերել', 'սկսաւ', 'հեռու', 'կանաչ', 'թեթեւ', 'անկախ', 'ծանօթ', 'կողմը', 'ուրիշ', 'քաղաք', 'միայն', 'հազիւ', 'համար', 'տեսակ', 'գնում', 'բոլոր', 'կեանք', 'նուրբ', 'օգնել', 'խումբ', 'աղքատ', 'սկսած', 'շուրջ', 'խոշոր', 'երկու', 'յաճախ', 'անուն', 'դպրոց', 'լեզու', 'վայրի', 'զաւակ', 'շրջան', 'աղջիկ'],
        Ta = ['սթրել', 'զեղել', 'մսալի', 'ծիծակ', 'երկար', 'գնչու', 'անձեւ', 'աղետի', 'սոխակ', 'հաւու', 'խշշալ', 'ճմթել', 'բերրի', 'տեսքը', 'օսաքա', 'նմուշ', 'կուռք', 'տեղայ', 'թողեց', 'կաղին', 'թաւիշ', 'հագել', 'հոլթը', 'տանէր', 'բացիլ', 'կրոնի', 'մաշկի', 'էդնան', 'կաշառ', 'կերայ', 'արթօն', 'խլիրդ', 'գուաշ', 'եզրակ', 'կրակը', 'գխտար', 'արամն', 'օժտած', 'ականի', 'պահակ', 'գլխու', 'էաբան', 'կերաւ', 'նարդի', 'դիտեն', 'գոցել', 'խոփիկ', 'կոկոս', 'շչիւն', 'ատոնց', 'հպում', 'վանքն', 'քոյրը', 'գրէին', 'տենտի', 'խոսել', 'բազայ', 'նիհար', 'լեմոն', 'նշեեն', 'բեւեռ', 'վայրն', 'ցորեն', 'քոլոզ', 'հիմնէ', 'աքլոր', 'ծաղկի', 'ջրվար', 'թալակ', 'օգուտ', 'իսպառ', 'սթեյք', 'վիթել', 'փողոտ', 'զսպիչ', 'թորիլ', 'էսպէս', 'քնարբ', 'փորակ', 'թքնել', 'խաղին', 'տկլոր', 'խաչով', 'երինջ', 'ռեհան', 'բողոճ', 'ուզել', 'վայոց', 'սպորտ', 'իրենը', 'քմայք', 'ղեկին', 'ճաղար', 'կացնի', 'շահող', 'արշին', 'էգերը', 'թաղել', 'ձէթով', 'սապատ', 'մոդալ', 'ջրտար', 'փոխեց', 'ծուէն', 'ծագիլ', 'աշուղ', 'խաղիկ', 'թառակ', 'լծված', 'լծկապ', 'հիշել', 'եփելէ', 'գլուլ', 'վարդի', 'մետաղ', 'կնիքի', 'գնման', 'շքերթ', 'ոսկել', 'դպնալ', 'նշանի', 'լոբու', 'բազիս', 'քաղաք', 'ծորակ', 'կղզիի', 'արայի', 'մթնիլ', 'կիսել', 'սուին', 'մլուկ', 'իրբեւ', 'յոյսի', 'չմփոց', 'բռռոց', 'կախիչ', 'լացիք', 'խելօք', 'ղեղազ', 'նեղիչ', 'թէյէն', 'կնճիթ', 'կարսը', 'շղարշ', 'սեռէն', 'պետին', 'փաթոթ', 'ֆշշալ', 'կրծքի', 'նանտի', 'արեւի', 'գրման', 'շինող', 'ժամին', 'արինք', 'թզկել', 'սպասք', 'փրկած', 'կաթին', 'շաւաղ', 'մուտք', 'լոկալ', 'շղթան', 'մրտիմ', 'կտրել', 'հոլով', 'սնարք', 'հեկել', 'ջրսահ', 'գծերն', 'էլենի', 'իրենձ', 'յատակ', 'գեյշա', 'քիքին', 'նստայ', 'ուխայ', 'հաւատ', 'բառին', 'կիսով', 'արիայ', 'տուրը', 'սերոտ', 'զնդան', 'տռփոտ', 'սիլաս', 'ջրում', 'հոռոմ', 'ճաշել', 'բևեռի', 'գոչոց', 'դուռն', 'սամիր', 'դորակ', 'ոճերը', 'խաշան', 'ծառեր', 'գաղթը', 'շոուն', 'սալոր', 'գռփել', 'ռենին', 'հալոց', 'ինկան', 'խույս', 'փալան', 'տղաքը', 'այրել', 'մոտով', 'գագար', 'զիրար', 'մաւեր', 'դդմիլ', 'արբած', 'անօթի', 'կողով', 'նուաղ', 'տողել', 'գամմա', 'անեզր', 'բերին', 'թաթիկ', 'խազել', 'կտրող', 'սերիլ', 'թերևս', 'հարոս', 'փողակ', 'սնձնի', 'իրանի', 'ճլերք', 'բիլլի', 'պատիւ', 'հորատ', 'անհալ', 'նոտար', 'մեխակ', 'իչհոն', 'վնասէ', 'գրողի', 'բացեց', 'զգաստ', 'մեջքի', 'նաղաշ', 'հացիկ', 'օքսիդ', 'երգին', 'բերքը', 'մախոխ', 'միմոս', 'խաչեր', 'օճախը', 'առջեւ', 'վազան', 'ցցուի', 'օծում', 'ճտերը', 'բջիջի', 'անձրև', 'խռթոց', 'եռաչք', 'քամիչ', 'քոլիկ', 'ժխտած', 'նժոյգ', 'վիճիլ', 'սիբեխ', 'չմպալ', 'ոճում', 'մոլոր', 'մռռոց', 'անպէտ', 'լարել', 'անվէճ', 'իշխան', 'սկսաք', 'մժուժ', 'չուտէ', 'անտիկ', 'ճոկան', 'գմփոց', 'ժամվա', 'սլուլ', 'առտու', 'մօտէն', 'կտրիճ', 'սոցապ', 'լափել', 'շաղիլ', 'թողիր', 'ժահրի', 'ժայռն', 'գզում', 'տղայի', 'տոպազ', 'դատին', 'շենքն', 'պաշաղ', 'բինայ', 'կույս', 'հովիվ', 'ցունց', 'համակ', 'դիմեց', 'փակիլ', 'կանեփ', 'բուալ', 'կպնել', 'կարիճ', 'թևերի', 'փորձն', 'գրախտ', 'հողէն', 'գաղձը', 'նախնի', 'մոդայ', 'փնջել', 'սրտին', 'ուռաւ', 'տոմատ', 'մրցիլ', 'ցանցը', 'թանձր', 'կրէկի', 'ծխանի', 'ձգանք', 'ջիղին', 'երկան', 'լալեի', 'ակնիկ', 'գետին', 'զոյգը', 'հիւսն', 'ծրտոտ', 'թոռչի', 'բոշայ', 'ծլուլ', 'դացին', 'խոցեր', 'տողան', 'անալի', 'ուրիշ', 'չեզոք', 'յետին', 'չթթոց', 'քաթան', 'կըսէր', 'լակել', 'քերել', 'փաշայ', 'դեղձի', 'փսիաթ', 'անյագ', 'բացիր', 'թողեր', 'քիսիկ', 'քայլը', 'զառիկ', 'պտկիլ', 'տռփալ', 'ասսատ', 'դենդի', 'անցաւ', 'մառան', 'գագաթ', 'հետեւ', 'ջրարջ', 'մխրճէ', 'պարտք', 'վսսալ', 'ճռռան', 'ըղձալ', 'օճառի', 'երկին', 'դիպան', 'մեկով', 'ինչու', 'կազով', 'ֆալչի', 'բլանդ', 'հատիչ', 'ռեյդի', 'կապով', 'իրերն', 'թիթիզ', 'կսկիծ', 'քտնէլ', 'զարդն', 'գուղձ', 'գրգիռ', 'գովքը', 'ասոլի', 'թշշոց', 'ազնիւ', 'մղված', 'տեսավ', 'ճիլոպ', 'հանաք', 'անխաւ', 'ծպպոց', 'տզզալ', 'գոյնը', 'հողին', 'մահիճ', 'միակը', 'ֆոնդը', 'հազիլ', 'ջոկել', 'խառատ', 'ամպիկ', 'մեդիա', 'ելնել', 'լացաւ', 'ընկած', 'ցցվող', 'դռներ', 'հենած', 'աթլաս', 'բեմից', 'ծերից', 'նեխիչ', 'վստահ', 'անթիւ', 'սատակ', 'նկատի', 'ամորֆ', 'անջատ', 'ճնշակ', 'ողորկ', 'էդտեղ', 'միտէր', 'ուսած', 'այլևս', 'բորան', 'վառած', 'ճեպով', 'հուշտ', 'վագոն', 'ձյուն', 'թեւակ', 'սեղան', 'օրէնք', 'սնոտի', 'ոսկու', 'ճնկոց', 'դիզել', 'քացախ', 'խռթալ', 'փորձի', 'թմբիկ', 'սրինգ', 'էանալ', 'թախիծ', 'գազից', 'ծուփք', 'որքան', 'հրթիռ', 'թնկոց', 'հիրիկ', 'չքմեղ', 'արժան', 'իզուր', 'հոսկէ', 'ցայլք', 'հառաչ', 'արշաւ', 'խնդիր', 'դիմած', 'կղզու', 'գազար', 'հիպատ', 'օրգան', 'քամպօ', 'գոռեխ', 'ճլուզ', 'արդէն', 'պնդեց', 'խռռալ', 'գիտէի', 'դիետա', 'տասնի', 'գետեր', 'գռռոց', 'ուղիի', 'հեքիմ', 'ուժին', 'վազքի', 'հատող', 'ծուոց', 'խորով', 'մուխի', 'վահան', 'պայիկ', 'տանձի', 'բեհեզ', 'եղինջ', 'մնտել', 'անգեղ', 'ցնդիլ', 'տօննէ', 'խոտէն', 'փորել', 'գրքից', 'հնչող', 'սրտիք', 'գլանի', 'կոպալ', 'արկեր', 'ծռում', 'իշուկ', 'հովիկ', 'թխպած', 'աճուկ', 'կոկոզ', 'փայլի', 'կաւով', 'իշխած', 'լոյսի', 'լոպար', 'ճէյմս', 'քաշըը', 'հարցի', 'կաճեն', 'նոպայ', 'տարիի', 'բույն', 'կեքսի', 'գողեր', 'նորեկ', 'շուէտ', 'օրերի', 'թաւայ', 'կոծել', 'ասդին', 'հասած', 'պզտիկ', 'անոտք', 'տաւար', 'վախէն', 'հասակ', 'ձկներ', 'ունակ', 'սազիլ', 'մկկալ', 'հոնեղ', 'քնկոտ', 'տեղակ', 'թաղին', 'շաբաշ', 'հոգայ', 'աղբոտ', 'անդիկ', 'ոսկին', 'գովել', 'գինու', 'հասաս', 'անողի', 'հատած', 'անճէտ', 'դժնիկ', 'անճաշ', 'էպոլա', 'խորին', 'զտուի', 'րոպէի', 'փաշան', 'լոյսը', 'կաշին', 'ճնարը', 'վռչոց', 'հերան', 'մատաղ', 'կոծոծ', 'նշոյլ', 'միաթի', 'սուաղ', 'բոյսի', 'հալաւ', 'պիեսը', 'ջնջիչ', 'դնչիկ', 'տեւեն', 'լակոտ', 'եղանք', 'կակաօ', 'դրոշը', 'ցիտատ', 'խչմար', 'լարիչ', 'խաւար', 'հիմար', 'կրպակ', 'օրերն', 'վարդը', 'գինով', 'գրքին', 'ֆօտոյ', 'խտրել', 'պուէտ', 'քասախ', 'ժանրի', 'ձորակ', 'քանակ', 'ջրչոր', 'խավեր', 'ձիերը', 'փթահը', 'դասած', 'տարոն', 'պնդիչ', 'ընծայ', 'աթենն', 'մահով', 'դնդեղ', 'ռուսը', 'աղիքի', 'վառիլ', 'ողբեր', 'խնդրէ', 'ռինգը', 'սկսար', 'դուետ', 'վտանգ', 'տանին', 'փոսեր', 'կաղալ', 'մեղու', 'բովել', 'ծագող', 'հոտով', 'պատվո', 'ճմռել', 'կանչէ', 'գրվել', 'ավազը', 'գզրար', 'պիեսի', 'նիզար', 'տեսնի', 'երեսը', 'ջնջել', 'դանիա', 'կռում', 'բողոք', 'ճարել', 'գղձիկ', 'դստեր', 'նորիք', 'գիտեք', 'յամառ', 'սատին', 'անթեւ', 'յուղի', 'զաւկի', 'լեզու', 'տորթը', 'հարայ', 'մնջոտ', 'մողէս', 'ցարին', 'մուրը', 'թաղիք', 'մարզն', 'լիճին', 'սլենգ', 'յոյսը', 'ծուաղ', 'բոճակ', 'ակռայ', 'յիշոց', 'ափերի', 'աղինճ', 'ստաշխ', 'դրոշմ', 'տեւեց', 'կազմը', 'ոզնիկ', 'լպիրշ', 'հալալ', 'փշուտ', 'ներսի', 'դիտէր', 'արջառ', 'իդիշի', 'ուզած', 'բերէր', 'շինեց', 'ոտմաշ', 'կեռիլ', 'փափաք', 'հայիլ', 'դայակ', 'պարիկ', 'քղորն', 'լոյսն', 'անհաճ', 'հարար', 'ջեռակ', 'ֆանդի', 'սպիրտ', 'թեմայ', 'կայսր', 'լամոն', 'ճպուռ', 'թրթիռ', 'անքան', 'մգդակ', 'զիջել', 'հալէպ', 'թմբել', 'գացած', 'շեղիլ', 'գռփիչ', 'տոներ', 'քանդէ', 'խորոզ', 'նանիկ', 'քաղքի', 'հակակ', 'խաչել', 'վարսք', 'տնանկ', 'թամբը', 'ջրհաւ', 'ստորի', 'ռապախ', 'սրբել', 'բխկոց', 'անդէպ', 'նորոգ', 'արվել', 'խոզան', 'լիմպա', 'քաշով', 'տունկ', 'ամփոփ', 'կայիր', 'գարնի', 'այլոց', 'ջրխոտ', 'բոզեի', 'բաժակ', 'նորաճ', 'տկռիլ', 'մատակ', 'սափոր', 'կոստղ', 'միրաբ', 'ամեայ', 'դարեր', 'շոճիի', 'գիտէր', 'ներէն', 'ճեղքը', 'տորթի', 'քովին', 'խոպան', 'չորսը', 'սարեկ', 'տառեղ', 'ադոնց', 'սերոբ', 'բարդի', 'սրբոց', 'լամել', 'գեղմն', 'դրդեց', 'տիպին', 'խոտան', 'բարեւ', 'ստլիկ', 'աստղի', 'մասից', 'մէկով', 'պրուս', 'ճակատ', 'լևինը', 'զրկել', 'բոլոր', 'կտտոր', 'ականջ', 'թանչը', 'ասվել', 'ղժժոց', 'աղանձ', 'ասուի', 'հրկէզ', 'արված', 'նուան', 'կոխան', 'թռչնի', 'շինեն', 'չափել', 'խթում', 'լիճեր', 'պիցցա', 'կեսար', 'թքանք', 'դեպքն', 'հըլու', 'նորել', 'ուսել', 'առիթի', 'կապիչ', 'էֆեկտ', 'դէսից', 'խաւոտ', 'պժգալ', 'ոճերի', 'ձիագի', 'ճշտիւ', 'հոսող', 'պշկել', 'աաջին', 'զարան', 'օվալի', 'ճաքիլ', 'ամրան', 'թնչալ', 'նկարն', 'թուիլ', 'սրվել', 'թռչել', 'պարեկ', 'էյմսի', 'անսին', 'խտրոց', 'հօրով', 'քչերը', 'մոլոշ', 'հոյթէ', 'դեղել', 'տիրան', 'արժէք', 'գօտին', 'կիշխէ', 'մէկէն', 'դէմքի', 'ոջլոտ', 'թակել', 'ծախել', 'կիսող', 'բարդը', 'ազգին', 'կրթել', 'ելքեր', 'թխսել', 'լոկին', 'հրշէջ', 'սնձան', 'բաւիղ', 'կտորի', 'այծիկ', 'առում', 'քաշեն', 'հերթը', 'նուալ', 'ժպտիր', 'վուդը', 'դառնա', 'գրիչի', 'ցաւիլ', 'թանաք', 'առակը', 'խախաց', 'լքեալ', 'դինար', 'խնձոր', 'դարէն', 'պատմէ', 'բռնկի', 'գորիս', 'ձմռան', 'առոյգ', 'կշռակ', 'տեսնէ', 'շաղիչ', 'խժում', 'էստոն', 'երթալ', 'աւազը', 'իւղով', 'կատիկ', 'դոփել', 'հատիկ', 'կըսեն', 'գրչին', 'տոնին', 'լաւայ', 'ջրցեխ', 'լավաշ', 'այգիի', 'հանձն', 'չամիչ', 'բխում', 'չգտան', 'լծկան', 'անշեղ', 'անաչք', 'կունդ', 'աւարի', 'ճմլել', 'շարքն', 'նորէն', 'օրեայ', 'դիտակ', 'ատիկա', 'մրրիկ', 'լանջի', 'քոսոտ', 'նայթը', 'գզրոց', 'ցանել', 'զէնքի', 'խժժոց', 'լիզան', 'նստիք', 'իջնել', 'բանան', 'ծնողք', 'շուշի', 'տիսքօ', 'անյան', 'նստաւ', 'կրում', 'սադաֆ', 'աւարտ', 'գլխին', 'ծաղիկ', 'խնոցի', 'աղտոտ', 'շիթիլ', 'ճզմել', 'շերտի', 'օդում', 'սոթոտ', 'լեզգի', 'օգնեն', 'ռադիո', 'ձաւար', 'մոմոտ', 'ջնջոց', 'խունկ', 'պղտոր', 'ազդեց', 'ասանկ', 'դանակ', 'անձին', 'ֆշշան', 'մոգել', 'մղվող', 'ուշիմ', 'ձիւնի', 'խաժկն', 'միջել', 'գևորգ', 'բրդօշ', 'մերժէ', 'թարէք', 'շփերթ', 'ջրպետ', 'եղալի', 'մեկնի', 'տանիք', 'եռում', 'սկսէր', 'փօլիօ', 'տոկոս', 'ջրքամ', 'կուլի', 'ստեղն', 'հիմքի', 'նովել', 'հարող', 'պոպոզ', 'ձիթոտ', 'ժամից', 'ցցված', 'պճռել', 'անհամ', 'երանք', 'քերիչ', 'չափեր', 'լճակն', 'սորիլ', 'խցկել', 'կնկայ', 'իմաստ', 'խօսած', 'առակի', 'բանկի', 'զօդել', 'քոլեջ', 'խօսին', 'ազդրի', 'աքցան', 'եռաձի', 'թպպալ', 'տանից', 'ճիւղը', 'տային', 'բաներ', 'բույր', 'բաժնէ', 'գրգոտ', 'տեղեր', 'սոված', 'ծխնիկ', 'քաղիկ', 'իրիսը', 'խպիպի', 'սուրբ', 'պանիր', 'որոնց', 'ճմլոց', 'կօգնէ', 'փաստը', 'պոկել', 'ինջու', 'աբուռ', 'ինչից', 'իդիոմ', 'ֆրանք', 'խժռոց', 'խալիֆ', 'գագիկ', 'պնդեր', 'լիրիկ', 'ձերին', 'բոկեղ', 'արկղը', 'էյսան', 'ցեղից', 'սեւադ', 'աւագն', 'այտիկ', 'հուլա', 'շախից', 'ոռնոց', 'պատժի', 'օրհնի', 'գմբէթ', 'ուծիլ', 'կտակը', 'խրձել', 'արթեն', 'մասեր', 'սիմակ', 'խեցատ', 'բառից', 'մաղախ', 'պտուտ', 'դրոյթ', 'պնդեն', 'ապակի', 'գիրով', 'շողակ', 'ջխտել', 'ճշրիտ', 'սոճին', 'վճռել', 'ճանկը', 'ամայի', 'վարկը', 'լողան', 'պեպէն', 'ողերն', 'մտնել', 'շառափ', 'ականթ', 'ծամել', 'բռնչի', 'շտաբը', 'նմանի', 'անգին', 'հօրմէ', 'թյուն', 'կողմն', 'արքայ', 'կէտեր', 'ռեժիմ', 'մարտը', 'պաճիճ', 'էտեղի', 'դերեը', 'լողալ', 'հսկայ', 'չստիկ', 'անեղծ', 'խածել', 'հուրի', 'չգտնի', 'վզկապ', 'աթինա', 'խաշիլ', 'անսազ', 'մժեղը', 'շաղոտ', 'քշտել', 'նետած', 'խմիչք', 'դհոլի', 'տաջիկ', 'համին', 'տուիք', 'պարող', 'առկայ', 'սաժեն', 'չլինի', 'խոռել', 'աղիւս', 'աղանդ', 'սկում', 'խաղաց', 'լիմոն', 'բղղոց', 'խտտել', 'հոկեյ', 'որրան', 'փարատ', 'զնգոց', 'չոչել', 'կիբեր', 'աղէտի', 'փախել', 'ընկաք', 'խոհեր', 'բրդել', 'կացել', 'ետևից', 'բղղալ', 'հոսել', 'հեծել', 'կիներ', 'վոլոֆ', 'սիպահ', 'էրճաս', 'յղում', 'փշեայ', 'ծղրիդ', 'բաբան', 'իյնայ', 'նավով', 'դժոխք', 'ափկից', 'փռում', 'փայել', 'փախաւ', 'լոնգի', 'դողիկ', 'դրօշի', 'ծնկան', 'մոտիկ', 'առանց', 'ցանոտ', 'դժխեմ', 'փաթեթ', 'շերտը', 'անթիվ', 'այրու', 'օգտին', 'թոռոմ', 'գերիչ', 'անէծք', 'քունի', 'սղոցի', 'կէսօր', 'կուպր', 'պակաս', 'խոթել', 'բիթրի', 'պարեր', 'թեյեր', 'թշվառ', 'վազող', 'չիլիկ', 'դրանց', 'երազը', 'թօզոտ', 'լճում', 'հասան', 'տափակ', 'աշխէտ', 'ծուիչ', 'էնտեղ', 'խյուս', 'տաւիղ', 'քորել', 'ախորժ', 'գացին', 'էշարք', 'արուն', 'օրիայ', 'ասլան', 'մրուր', 'փափախ', 'լոնգը', 'քալել', 'կարծե', 'առնէտ', 'գոգել', 'կռճօն', 'սիրտի', 'ավագի', 'ուսից', 'լինէր', 'սերել', 'խմելէ', 'ձգված', 'խմորի', 'օջախն', 'գանգը', 'փորիչ', 'ջհուդ', 'պիլկի', 'կմախք', 'զավակ', 'էջերը', 'քույր', 'զէնքը', 'բլրոտ', 'խնչոց', 'ախպէր', 'քիրազ', 'փքում', 'թրքոտ', 'ցնցել', 'շափաղ', 'բալամ', 'ամսին', 'շլդիկ', 'բոյնը', 'լքում', 'զնգալ', 'կտցել', 'ծակոց', 'ջամբէ', 'քիվին', 'արարք', 'դակիչ', 'ալիան', 'թվերի', 'շնչատ', 'տոտիկ', 'անթեփ', 'անինք', 'զօրքը', 'կատվի', 'խժժալ', 'տակից', 'ցեղեր', 'թիւեր', 'քստոտ', 'սիրեն', 'գացիր', 'օրերս', 'թխման', 'վիտէօ', 'հրձիգ', 'գմփիլ', 'քանոն', 'յոպոպ', 'գերել', 'ամլիկ', 'ինչին', 'կառնէ', 'ցօղիկ', 'երդիկ', 'քորիչ', 'յարնէ', 'անծոտ', 'դղորդ', 'դդմակ', 'օրհաս', 'օրինի', 'ափսէի', 'իրէնց', 'դասակ', 'լարած', 'առաջք', 'ֆռռալ', 'թաղած', 'զոպայ', 'փետել', 'այրած', 'փական', 'ատոնք', 'ռիսկը', 'ապառք', 'արշակ', 'շալկէ', 'գնվել', 'թղթին', 'քջուջ', 'ֆագոտ', 'գունդ', 'հյուր', 'պաշար', 'գորքի', 'անմեղ', 'մաշան', 'խաղան', 'սնչիկ', 'ջանայ', 'թոթով', 'քարոզ', 'բոցել', 'թամահ', 'պալատ', 'ջնջեց', 'տեսան', 'դպրաց', 'քուրդ', 'խօսիմ', 'խորիզ', 'ծարաւ', 'բլթակ', 'խաղայ', 'ներսը', 'բանալ', 'վառեն', 'իւղոտ', 'ափերն', 'ղաչաղ', 'գալու', 'իրմով', 'օսլայ', 'ակնայ', 'վերստ', 'ջահեր', 'բերել', 'քլորը', 'պրկել', 'ուժակ', 'լեարդ', 'լաչառ', 'մորթը', 'թորիչ', 'ուրկէ', 'կրօնն', 'երազէ', 'այրող', 'ապչու', 'ղրիմի', 'խորոտ', 'սկիզբ', 'ցավեր', 'հանիկ', 'կանչը', 'աթէնք', 'հրշեջ', 'յետոյ', 'ջրփոս', 'ծեծել', 'ապրող', 'այսպէ', 'կաճին', 'կրցած', 'փշրել', 'զգոյշ', 'նաւեր', 'վարձք', 'կրկէս', 'պաննո', 'ոտնել', 'իրենց', 'արխիվ', 'բարու', 'կետեր', 'բարիի', 'մերոյ', 'ռաշիդ', 'կարամ', 'թրախկ', 'ցեխոտ', 'բոսոր', 'հովեկ', 'փաթիլ', 'առինք', 'ծունգ', 'միջով', 'վրացի', 'թռնիլ', 'աբբաս', 'սրտոտ', 'զենքը', 'սահել', 'ղալաթ', 'բացաւ', 'բակին', 'ոունի', 'ցուրտ', 'սկզբը', 'օազիս', 'փառքի', 'մխում', 'փռէին', 'նալել', 'վերձը', 'սլլան', 'սաւան', 'նուրբ', 'գայլի', 'անկամ', 'զէնքն', 'կեռիկ', 'հոտից', 'վառել', 'գամփռ', 'գչրակ', 'ֆավնի', 'սառիլ', 'ծանոթ', 'ճաւայ', 'ննջիլ', 'կարիք', 'պահած', 'զիջիլ', 'թմրիլ', 'կորած', 'քատիս', 'ոզնին', 'զօրու', 'կածան', 'լրում', 'օթեակ', 'ձուղպ', 'մնջիկ', 'անցնի', 'թեքիլ', 'վճռեց', 'ապրոն', 'դիակը', 'ոգիին', 'կզգամ', 'շարքը', 'տիպար', 'ղրփել', 'սօսին', 'ծռված', 'խղճալ', 'անմար', 'պակտը', 'բադիկ', 'ծղխնի', 'մթնել', 'զուրկ', 'բանէն', 'սուգի', 'անմազ', 'սոմառ', 'ցաւեր', 'փորձը', 'աւիւն', 'հնձիչ', 'գահին', 'չանաք', 'էմոյի', 'ջրբեր', 'նավից', 'քելիի', 'անտառ', 'շփվել', 'ձեւիչ', 'ցոլակ', 'մրգեր', 'մաքրէ', 'գուրզ', 'յարկի', 'հետևի', 'խորակ', 'մայոց', 'աշոտը', 'փարախ', 'դեկան', 'արձակ', 'եղծել', 'թեմէն', 'բնկալ', 'կարդա', 'կտուր', 'նւագէ', 'կառքը', 'սոնետ', 'ինչեր', 'հարգի', 'սիկհը', 'հեյսը', 'նորին', 'լուծը', 'ծախած', 'ճպռոտ', 'միջոց', 'ածանց', 'լացիր', 'պոեմն', 'փրկել', 'մղվել', 'դրսեկ', 'պղնձէ', 'մագիլ', 'շերամ', 'երկիր', 'դեպքի', 'աստառ', 'կեղևի', 'գրողն', 'ըսածը', 'բռնած', 'ֆոլիի', 'ճիճու', 'անվար', 'փաքսի', 'ճկռել', 'յօշել', 'փոճոկ', 'մկանը', 'ասպետ', 'կորով', 'ապրիմ', 'պչրել', 'թշշալ', 'գուֆը', 'ծնված', 'կենաց', 'աղքատ', 'սղկել', 'լինիլ', 'սոֆիա', 'իրերի', 'մարկը', 'թողած', 'շուրթ', 'չեչոտ', 'աւելի', 'նաւազ', 'չափիչ', 'սկսիլ', 'գցում', 'մղմեղ', 'ճաղել', 'մաճար', 'ալրոտ', 'գոտին', 'փշուր', 'սագիկ', 'պատառ', 'դիզեց', 'փողից', 'պապին', 'ժանսը', 'աբասի', 'շարքի', 'կարոն', 'ըլլար', 'լսում', 'երգիչ', 'ծովափ', 'հիւթը', 'ֆետիշ', 'անբեղ', 'սորոր', 'բղխել', 'ծխչոր', 'կայքի', 'լծուի', 'ցցհար', 'չղջիկ', 'մռայլ', 'արշտա', 'կսմիթ', 'պոտաշ', 'բեկոր', 'շիշակ', 'կետին', 'ֆրթոց', 'երազս', 'մղորդ', 'սապոն', 'ձգելի', 'նուշը', 'տիարա', 'գուռզ', 'բառով', 'ձկնիկ', 'գոմել', 'ամպեր', 'աթոռը', 'կաշիէ', 'կարծր', 'փօփին', 'սպանդ', 'կշռոց', 'լոսոց', 'անշող', 'տրոլը', 'արմաւ', 'վճռած', 'դունչ', 'դասել', 'վէզիր', 'ժանիք', 'փլչել', 'սուէզ', 'տողէն', 'ասում', 'պահից', 'տեմպը', 'մեխեց', 'փառքն', 'սիւժէ', 'երկաթ', 'խնդալ', 'ջունի', 'ուռիլ', 'եղնիկ', 'հողեր', 'վագրը', 'խրիմի', 'գազել', 'զինքի', 'փիծծա', 'վսսոց', 'նստար', 'հռինդ', 'բլոգը', 'շալախ', 'ետեւը', 'տիոնի', 'տները', 'ճագար', 'վարակ', 'տեմպե', 'քթթել', 'քաւել', 'խռռոց', 'վավեր', 'նշխար', 'բրդեա', 'հոգալ', 'ջրարբ', 'ածելի', 'դաշան', 'բերիք', 'սովետ', 'հատեն', 'ծակել', 'տեղէն', 'վոկալ', 'հոգան', 'խմելը', 'երգած', 'յանցն', 'նուազ', 'հաբէշ', 'մեղքի', 'բայից', 'ժայռի', 'չափէն', 'գրկել', 'բաթաթ', 'սռնակ', 'առնաս', 'սաղմի', 'ինտիմ', 'սահքի', 'անանկ', 'հոսքի', 'ֆիլմն', 'ծծկան', 'սեռին', 'սիրեր', 'լլկել', 'ցնծալ', 'մաղձի', 'ակրատ', 'վարիչ', 'տանող', 'մասրե', 'վիրապ', 'վախել', 'շփում', 'մահիկ', 'փալաս', 'թերաճ', 'ղարիբ', 'հետքն', 'խմբից', 'վերաճ', 'սեւակ', 'տղմոտ', 'գիտեմ', 'սալոն', 'ծախսէ', 'տողով', 'սրահէ', 'թերթն', 'հոբբի', 'ծրարը', 'ճոլին', 'քուսպ', 'մոկքի', 'աբբայ', 'խաչիկ', 'մկրատ', 'կաւատ', 'բրնձի', 'շորոր', 'ոսկրի', 'շլինք', 'բակից', 'իշխեց', 'գոմէշ', 'նօրէն', 'սահիլ', 'տաշեղ', 'շիջիլ', 'տօնով', 'տափան', 'կոանք', 'պիեսն', 'ջրցան', 'վժժան', 'կտուց', 'փայտե', 'կոզակ', 'յղացք', 'քչերն', 'գացիք', 'օրերը', 'քցում', 'խռովք', 'կույտ', 'նավթն', 'կռվեց', 'սառաւ', 'էկրան', 'կճպել', 'թակած', 'ճէյմի', 'ապակե', 'սղում', 'քներգ', 'գնդել', 'քուրտ', 'փակոց', 'յետեւ', 'մէջքը', 'գաջել', 'ծուիլ', 'քունք', 'գոհար', 'խաթար', 'մղիչը', 'նշենք', 'կլիշէ', 'սիրեմ', 'ուսաւ', 'օգնեց', 'դրոյք', 'կայքն', 'ոտքին', 'յստակ', 'էդքան', 'շաբաթ', 'բրուտ', 'շալակ', 'բտում', 'տեխնո', 'կրիկի', 'ֆսսոց', 'խոխոջ', 'անուշ', 'ջանալ', 'որմով', 'անքար', 'ծնգիլ', 'մակետ', 'բլուլ', 'թխէին', 'շարֆի', 'հրիայ', 'շաղախ', 'ծանօթ', 'ովեւէ', 'մահակ', 'ուղին', 'նրբին', 'հօտաղ', 'վառող', 'ծախքը', 'ջիւան', 'գրենք', 'գինիի', 'ջլախտ', 'կաճառ', 'ծիրէն', 'ռոքին', 'քաքաօ', 'ըմպան', 'պաղիչ', 'ճոռիկ', 'քոչոր', 'կամաց', 'առթիվ', 'խշիւն', 'ճապաղ', 'ցանիչ', 'խաշին', 'պաչիկ', 'արտեր', 'անխաշ', 'մօտիկ', 'միջեվ', 'էստեղ', 'յովազ', 'անտոք', 'մղելէ', 'բնոյթ', 'տօներ', 'ջրկից', 'քալեն', 'թիքայ', 'թունդ', 'լցոնը', 'անծալ', 'ըլլալ', 'ծոփոր', 'նշէին', 'ռազմի', 'ծունկ', 'բիթիի', 'լիցքը', 'կեղեւ', 'խիզան', 'անշահ', 'զրկած', 'թերթի', 'գանձը', 'գոյժը', 'կրօնք', 'թրջեն', 'խոսքն', 'մժղիկ', 'զարնէ', 'կարող', 'ռամիկ', 'ալոկն', 'շահին', 'փուռի', 'քարից', 'ահալի', 'պարան', 'բրինձ', 'առիւծ', 'հեռու', 'նկուն', 'յենած', 'կրիան', 'փոխան', 'դեպքը', 'նախօր', 'անկախ', 'խաւեր', 'դողալ', 'անայգ', 'բանչը', 'մեթոդ', 'դիմաց', 'վուշէ', 'վարքն', 'անծախ', 'զենիթ', 'յուղը', 'մեռել', 'չուառ', 'փոստի', 'բադան', 'խելքի', 'անեցի', 'որդու', 'բնդիռ', 'անշէն', 'ցինկէ', 'շուէդ', 'ֆասադ', 'սխտոր', 'բրդոտ', 'քոզառ', 'եռեակ', 'հրեայ', 'նայած', 'ըմբիշ', 'հատակ', 'յարգի', 'անցան', 'ատենը', 'հողոտ', 'տանկը', 'դրախմ', 'ինչով', 'ծէսին', 'օլգան', 'գոչել', 'էապես', 'գդակը', 'հագագ', 'քայլք', 'զսպան', 'ուրախ', 'ամոլը', 'ջրերը', 'տուտն', 'նռնակ', 'սատապ', 'դասից', 'նկատէ', 'յէտոյ', 'զինկը', 'էջում', 'ճառել', 'թափառ', 'դրդիչ', 'շռինդ', 'զխկիլ', 'փշալի', 'պտուկ', 'փորձէ', 'անգիր', 'չիփակ', 'էապէս', 'նաւվը', 'մանէթ', 'լողափ', 'կանոն', 'ազոտի', 'փերին', 'թսսալ', 'ամրոց', 'ինչևէ', 'դռնակ', 'դէմքը', 'ճաթիլ', 'ոժերն', 'քրջոտ', 'կաւար', 'իրենք', 'հիւլէ', 'ֆերմա', 'էսսեն', 'մեդալ', 'անագը', 'դահիճ', 'քերած', 'սքեմը', 'դաւիլ', 'աղուտ', 'որպէս', 'ինկող', 'ախմախ', 'սպասէ', 'կիփսի', 'ֆոբիա', 'պայէր', 'աւանս', 'անագի', 'ժողով', 'շրջիլ', 'ըսենք', 'ոչինչ', 'եզրեր', 'գիտակ', 'հատոր', 'ղժղոց', 'սածիլ', 'պահքն', 'կոկոն', 'կոկետ', 'հնարք', 'գիւտը', 'օթյակ', 'էսքան', 'եռալը', 'շապիկ', 'ունին', 'գալար', 'շաղափ', 'բարձի', 'իշխել', 'բնում', 'թուխս', 'դմփոց', 'յղկել', 'հրաշք', 'մինչեւ', 'համառ', 'ուտեն', 'կռռալ', 'քննել', 'ծուան', 'խոփեր', 'դրամը', 'ոստրէ', 'նոյնը', 'մաշիկ', 'մեռած', 'հինիչ', 'քաշեց', 'ճիպոտ', 'խռչակ', 'կիզել', 'ճնշել', 'ուժով', 'մակաղ', 'մելիք', 'խշկիլ', 'ջաղաց', 'կռուի', 'ձախող', 'լճերը', 'ծլթոց', 'մակար', 'արուի', 'նորոն', 'հովվի', 'ճահիճ', 'ամուր', 'պիծակ', 'անկոխ', 'աքսոր', 'գոլէճ', 'մարդն', 'դնէին', 'գնդիկ', 'վկայէ', 'կիտել', 'ոսկիի', 'ծախեց', 'պշում', 'բլրիկ', 'հծծել', 'թվերը', 'անդամ', 'երգէր', 'նայել', 'կռինչ', 'սրտով', 'անցավ', 'չուխա', 'բոպիկ', 'շշուկ', 'խարաֆ', 'ղազախ', 'մնանք', 'ասածի', 'քրամպ', 'բտիլն', 'գերան', 'կկզիլ', 'կապող', 'գիտեն', 'կխտար', 'կրծող', 'տեքստ', 'ստորև', 'հմայք', 'արժել', 'վիլակ', 'գները', 'չնչին', 'ձիրքը', 'երբեք', 'հարկէ', 'ծնկոտ', 'վէպեր', 'կռթալ', 'րոպեի', 'կեղտը', 'չուստ', 'յարիլ', 'շաղիկ', 'ղրկեն', 'դդում', 'սուրը', 'արմէն', 'ոտքով', 'ապուր', 'թռչիլ', 'շնչին', 'սնման', 'գիքրը', 'եռաթի', 'թեփոտ', 'պոչիկ', 'վագրն', 'նստեց', 'ճկոյթ', 'սմբակ', 'անթել', 'աղացք', 'բացից', 'պարոս', 'ուժատ', 'թրչել', 'ծախէր', 'մտածէ', 'հոլիկ', 'սնդիկ', 'սաղմը', 'կատակ', 'պիջակ', 'ջրդեղ', 'բեղիկ', 'գացող', 'խզզոց', 'իջնող', 'կռնակ', 'հարցն', 'փրկեց', 'մուշկ', 'գոլֆի', 'գրբաց', 'քնջիթ', 'վասալ', 'անրակ', 'բերան', 'քունգ', 'կապառ', 'խշտել', 'ուժեղ', 'կճճիկ', 'կողքը', 'ղշլաղ', 'պահեր', 'դարին', 'բախտն', 'գնդակ', 'բակեր', 'ժնգոց', 'վզզոց', 'դրամի', 'սրանք', 'մգլիլ', 'գետնի', 'հինգը', 'մասէն', 'տրամա', 'խօսէր', 'նժարը', 'ագենտ', 'նստին', 'ումբր', 'շխկալ', 'դրվել', 'յառաջ', 'քոթակ', 'գառան', 'ազգէն', 'հնուց', 'մոծակ', 'տոկայ', 'շշերը', 'օգնած', 'ամենի', 'անկոչ', 'հալիմ', 'մղում', 'քաշել', 'պայթի', 'տառեր', 'թեւիկ', 'վշտոտ', 'աքսել', 'շիւան', 'միջատ', 'տեմբր', 'փլում', 'ղազան', 'դնգոց', 'շողիք', 'նշելի', 'արինճ', 'խաղէն', 'աչքէն', 'ուղտի', 'մգլած', 'նավեր', 'միւսը', 'քրոջը', 'լոռիի', 'խնամք', 'մտներ', 'բուռն', 'բուստ', 'բլանկ', 'անցած', 'մահու', 'ամոթը', 'ալիքի', 'հաջել', 'խաշած', 'նոխազ', 'անխաչ', 'արեթա', 'հարել', 'ղշլայ', 'կավից', 'ձեռաց', 'կուրս', 'շիրայ', 'հոնկէ', 'խլախտ', 'ճաշակ', 'հասաւ', 'մասով', 'ծրտել', 'շիրիմ', 'անժամ', 'մարած', 'աղբէր', 'գամիկ', 'մորֆի', 'շասսի', 'կոթոց', 'ալեւի', 'դաման', 'միսով', 'սեզոն', 'տրվող', 'բնդոց', 'ցավոք', 'հայեր', 'չանաղ', 'գիտես', 'խեփոր', 'անարգ', 'ծլանք', 'սեւաչ', 'կայէն', 'գինին', 'փայտը', 'հանել', 'բոբող', 'կերոն', 'օնիքս', 'դրդել', 'մինաս', 'թեւեր', 'դրանք', 'քարէն', 'գտնայ', 'ուշքի', 'ֆիտիլ', 'գիհիի', 'համեմ', 'պատիր', 'քըշայ', 'գոյնն', 'պասիւ', 'շրջէր', 'ջղջիկ', 'ցնցեց', 'պտոյտ', 'օհայո', 'տոհմէ', 'թակիչ', 'հայոց', 'եւրոն', 'լեռան', 'տեղալ', 'անբառ', 'սմքիլ', 'փթռակ', 'կոլոտ', 'խլշել', 'զղջալ', 'ոմանց', 'զիջիր', 'նինան', 'խռպոտ', 'պաճոյ', 'ծառայ', 'շնորհ', 'խոլոռ', 'կօշիկ', 'բլթել', 'փափագ', 'լոլիկ', 'ամողջ', 'բլուր', 'հողան', 'վարոց', 'հսկել', 'լաստը', 'տրուի', 'խորէն', 'թափեն', 'կխժռի', 'թորած', 'դուքս', 'վերին', 'աւանէ', 'ցրման', 'հարիչ', 'վախով', 'ներեր', 'մթերք', 'նշված', 'նշուտ', 'հանած', 'կիթառ', 'մտնեն', 'չուան', 'ջազից', 'մայոր', 'քուրք', 'կուրծ', 'խփում', 'քէշան', 'խթանէ', 'հօրից', 'ֆավնը', 'ջլուտ', 'լագան', 'տակէն', 'միհրը', 'եղեամ', 'աղտոր', 'անծեփ', 'տիրոջ', 'ծակիչ', 'արատի', 'լմնալ', 'ձէնով', 'հալած', 'լազեր', 'ջրհոս', 'շենքը', 'սրակն', 'կաւիճ', 'ճարակ', 'անթաղ', 'լոքել', 'ոստոտ', 'ծառին', 'աթոսի', 'լիլիթ', 'խմելի', 'գիծով', 'հողից', 'կապել', 'տեսել', 'վայրի', 'վիճին', 'ռոկեղ', 'ծնոտի', 'նյութ', 'ագոյց', 'ծամոն', 'եռուն', 'թոշակ', 'խղճին', 'գավառ', 'սլացք', 'թևերը', 'նազան', 'ռաման', 'ռեյնը', 'պարկն', 'պրծած', 'սուշի', 'վակաս', 'փոքրը', 'հնչել', 'տօնած', 'հրէշը', 'քինոտ', 'անձիք', 'չքնել', 'երբէք', 'տիրած', 'կակաո', 'բնդեռ', 'լցնել', 'լոուն', 'հաճիլ', 'թխկոց', 'դրդած', 'ընկեր', 'ջահէլ', 'քիթին', 'տպված', 'ծէսէն', 'թիւին', 'դժժոց', 'գետափ', 'մեկու', 'քակել', 'վխտալ', 'դռնից', 'պարել', 'պորտը', 'բերքի', 'ծիտիկ', 'ինկաք', 'սնանկ', 'եզրիկ', 'թաբեց', 'ժանրը', 'եղելէ', 'շարեն', 'բոռալ', 'տալիք', 'լապշա', 'հաուս', 'արեւը', 'սխալի', 'կնիքը', 'հոտած', 'լայիք', 'աշուն', 'տիպիկ', 'քոսայ', 'կռճիկ', 'հազիւ', 'թութք', 'բալիկ', 'վժժոց', 'խրթին', 'սադափ', 'դիջեյ', 'արիւն', 'անցար', 'եղերգ', 'պատիճ', 'աղգատ', 'վանել', 'դրացի', 'նամոտ', 'հաւաս', 'մորթէ', 'փակիչ', 'բխկալ', 'վարէն', 'ստերջ', 'անգամ', 'իւղել', 'ալբոմ', 'յիշած', 'պատին', 'առողջ', 'նայիլ', 'գրգլի', 'հաշիվ', 'վարքը', 'հոտիլ', 'չերին', 'կրօնը', 'պապիկ', 'հատել', 'ասոնց', 'նստիլ', 'ազդած', 'անչար', 'հմուտ', 'թրըմբ', 'սողալ', 'մէկնը', 'փորոք', 'մշուշ', 'փակեն', 'տնեցի', 'յենել', 'ֆշշոց', 'ճլզել', 'կրնալ', 'քիմքի', 'մեղքը', 'գիրքի', 'խոտոց', 'ածովի', 'ցանեն', 'յարէր', 'գետով', 'պատվի', 'պղնձի', 'որսալ', 'կլպել', 'տիրող', 'ասոնք', 'զանգը', 'տաճառ', 'պրասն', 'ցոլիլ', 'ունիք', 'ջրթափ', 'պիպիչ', 'փթթիլ', 'մածիկ', 'օրրան', 'անձեռ', 'բացել', 'երաշտ', 'բկլիկ', 'կապար', 'կնճիռ', 'ձախից', 'իւանը', 'խոտով', 'բրդյա', 'թւում', 'տարիք', 'անիմե', 'մկնիկ', 'երգել', 'ծածկէ', 'գետակ', 'միակն', 'սլաքի', 'պճղել', 'ժահրը', 'ճանճը', 'սրում', 'դմբոց', 'անտաշ', 'թեպետ', 'պարոր', 'ոտքից', 'սպայի', 'ուժեր', 'սիանը', 'երեւի', 'շունը', 'ընկել', 'տարով', 'գաւաթ', 'լսելի', 'ապագա', 'շեշտն', 'զիբիլ', 'չարչի', 'շահել', 'ասորի', 'խմորը', 'տօնէն', 'մոմով', 'եղբօր', 'արվեց', 'աղբել', 'թշշան', 'ամբոխ', 'հեզիկ', 'պարեխ', 'զարդը', 'ծովեր', 'շնդող', 'կամքի', 'գազեր', 'սիրել', 'աբխազ', 'նեարդ', 'կոլֆը', 'կիսան', 'ճառեր', 'ճրճիմ', 'նշմար', 'քամին', 'կենայ', 'շրշոց', 'պտռել', 'կացաւ', 'կեպիի', 'սուտի', 'թրքել', 'առկող', 'վիժակ', 'ջրհոր', 'հղկել', 'աբսիդ', 'ջլբաց', 'մասոն', 'վաֆլի', 'փնչալ', 'երկու', 'մորին', 'զեւսի', 'խաղով', 'անխօս', 'մահից', 'կրծօն', 'պարապ', 'հագին', 'բոցոտ', 'երթեր', 'տոֆու', 'նպաստ', 'բուիճ', 'տակով', 'կռտել', 'փեսայ', 'կռիւը', 'սառին', 'կադրի', 'գիլան', 'սատափ', 'ոսկրը', 'կաթէն', 'ճչիւն', 'մռութ', 'դնդալ', 'բերեց', 'համար', 'չիման', 'պարէն', 'սլլալ', 'սարքր', 'թակոց', 'նշտար', 'խաժակ', 'վճիռն', 'կերել', 'օծուն', 'ռոմբի', 'զրընգ', 'քալած', 'ատեան', 'հավատ', 'բուրգ', 'փոշին', 'մրկել', 'մտոցը', 'ակրան', 'անփակ', 'զօդիչ', 'ջրերի', 'թափան', 'կատու', 'հագած', 'գոշան', 'պատով', 'բերչի', 'գինոտ', 'տեւէն', 'ցմփոր', 'ալիքն', 'կտցար', 'ճկում', 'կախած', 'սոտան', 'ցփնել', 'կաննի', 'անսեռ', 'յիշել', 'վանիչ', 'զօռել', 'ընկավ', 'ուղեղ', 'փիարօ', 'կոշիկ', 'դրկից', 'անկոփ', 'թողել', 'սիլոս', 'ծառով', 'ճղփոց', 'չռթել', 'փտնել', 'մառեն', 'թրջոց', 'վժժալ', 'խոսքը', 'տուբը', 'ժիհատ', 'սենատ', 'քեչայ', 'ներքև', 'եփված', 'լիգայ', 'ստեղի', 'գալով', 'միայն', 'ամիսը', 'վրանն', 'հաչոց', 'մեռնի', 'սալաթ', 'բանգի', 'կացին', 'ճահճի', 'պտուղ', 'զոհել', 'ճաշեր', 'պարէտ', 'ողբալ', 'գաղթի', 'լիճէն', 'նոճու', 'քարել', 'պրկոց', 'մական', 'գիծեր', 'արձան', 'շարժը', 'աոանց', 'բակէն', 'աղերս', 'որձակ', 'փախան', 'ամէնք', 'զաթար', 'ծագել', 'նիւթի', 'ցինիկ', 'բլուզ', 'կշիռք', 'մագոգ', 'ասիոյ', 'ներսն', 'վազել', 'վնգալ', 'թափիլ', 'օպերա', 'բաժան', 'անճար', 'բարձր', 'դեմքը', 'հաշիւ', 'պէքոֆ', 'սկսած', 'կշռել', 'հադին', 'արնոտ', 'զոլել', 'շևենի', 'կարագ', 'մորեխ', 'ունէր', 'սլկել', 'հայցը', 'գրելէ', 'թեփիկ', 'ստանա', 'չմքել', 'թէյել', 'սռռալ', 'լիրան', 'կճուճ', 'շլացք', 'հորել', 'ցռուկ', 'ալիքը', 'պլանի', 'սեւիկ', 'կտրեց', 'պապից', 'գռռալ', 'բանին', 'այրիլ', 'կառափ', 'ֆայհա', 'շարոց', 'շունն', 'մարել', 'խաղաղ', 'մարաղ', 'կռվել', 'խրդին', 'մրսել', 'սանիկ', 'ծակոտ', 'տուրք', 'ատաղձ', 'կրելն', 'ծովու', 'կրթած', 'տեսքի', 'ուռած', 'կիրճի', 'սեւրի', 'մոնեն', 'համեղ', 'կրոնը', 'ծորան', 'գուալ', 'տումի', 'փախած', 'ճայակ', 'այսօր', 'յօդին', 'ղամիշ', 'դիրքի', 'չինար', 'էթնիկ', 'ցրտել', 'փշշալ', 'տամայ', 'սաշան', 'ածխոտ', 'շիլայ', 'նօթոտ', 'բնտրէ', 'տևում', 'տզերը', 'մայրն', 'զսպող', 'ամուլ', 'անդակ', 'ռեզին', 'տեսած', 'տնտես', 'փոխեն', 'ծլում', 'ընտիր', 'անանց', 'հեծիկ', 'հարկը', 'բնազդ', 'նօտար', 'փսխել', 'քարտե', 'թթվով', 'դրօշը', 'դիզած', 'խրկել', 'նաֆթը', 'լպիրծ', 'շոլցը', 'թողէք', 'խոլոր', 'համով', 'փայտէ', 'ծծուկ', 'հաջող', 'տաքսի', 'ինկած', 'ինչոց', 'նիստն', 'բայազ', 'շեփոր', 'դրված', 'տիտիկ', 'պապակ', 'տղուն', 'վռչալ', 'ձայնն', 'կռելի', 'մենակ', 'դիտել', 'երգող', 'վաւաշ', 'պաչել', 'զսպել', 'մետալ', 'շուար', 'կռզու', 'տհոլը', 'հաճար', 'տուկն', 'ծփանք', 'ջրվէժ', 'հաճած', 'բորակ', 'ֆոլկի', 'թրեպի', 'սովին', 'սերին', 'կնկան', 'հարկի', 'հիւթի', 'արքատ', 'արկան', 'ճկուն', 'երիցս', 'մեղքէ', 'շվաբը', 'անմաշ', 'լքասը', 'հռոմի', 'թխենի', 'փունջ', 'խմբով', 'պողոճ', 'տուֆը', 'արշավ', 'բարիք', 'զգում', 'հույն', 'քնձոտ', 'ռայոն', 'կաֆել', 'խշշոց', 'կռթոց', 'կղղոց', 'հթիռը', 'մակաճ', 'ռունգ', 'աբրայ', 'բալադ', 'մարշը', 'մեկից', 'ծոցեր', 'բառէն', 'ծերատ', 'ռետին', 'քուրջ', 'սիգար', 'սալիկ', 'նեխած', 'կխլեն', 'եղնար', 'շուաք', 'վեղար', 'խմբեր', 'բանար', 'խուռն', 'աթոռի', 'իմանի', 'կոտակ', 'սկսեր', 'փանաք', 'քրքիջ', 'ջրլից', 'վառակ', 'սփռոց', 'չթեայ', 'թույն', 'դարափ', 'ոսկիէ', 'թմբիր', 'մարաշ', 'փչովի', 'ուսէն', 'նկարէ', 'օրերէ', 'թանագ', 'կախել', 'տունէ', 'հանեց', 'մանկօ', 'քաղոց', 'նոթեր', 'ոսկոր', 'հինայ', 'նշեալ', 'ասացի', 'թեւին', 'կրիոն', 'փխրել', 'ջրիկն', 'ապսիդ', 'բոյսը', 'ձիրքն', 'ծնգոց', 'քարաղ', 'արծիւ', 'շշմոլ', 'խրուտ', 'խոցոտ', 'սիլլա', 'ոգիով', 'լիսեռ', 'տնքալ', 'վերեւ', 'թաւշէ', 'թերին', 'դեղեր', 'րարքը', 'լիզել', 'պլշել', 'շոշոտ', 'մեղայ', 'հնոցն', 'կրեմը', 'հավով', 'սալսա', 'սկիւթ', 'կախեն', 'դալար', 'մահեն', 'ջուխտ', 'եզակն', 'կռվող', 'կազմի', 'խմորէ', 'սիբան', 'ամեհի', 'տոչոր', 'կծկիլ', 'տարեց', 'ըլլայ', 'սպառէ', 'քավեր', 'էնդիի', 'լաւաշ', 'չալիկ', 'քջջել', 'մաջառ', 'վերջն', 'տռճիկ', 'շամամ', 'օտինը', 'տոտալ', 'խրոխտ', 'դպչիլ', 'խոցիչ', 'խճեայ', 'գռում', 'կորեկ', 'արքան', 'թրեքի', 'ատլաս', 'միտքը', 'տնկած', 'շուիկ', 'մանրէ', 'սրահն', 'անտէր', 'նեղել', 'օինակ', 'խածաւ', 'գարին', 'ցինկի', 'տեղին', 'փեկոն', 'ավագը', 'անյօդ', 'խաղող', 'չդնել', 'ժպտար', 'եվայի', 'պլուզ', 'կոխել', 'պատել', 'դմփիկ', 'վշշալ', 'դատել', 'պտղին', 'նետեն', 'եռքոր', 'կքում', 'մզում', 'ջրտու', 'առածի', 'եղիցի', 'անգէտ', 'խշուր', 'կերար', 'առկան', 'կրցաւ', 'բացիք', 'ռիթմի', 'գօտիկ', 'ուսեղ', 'հոգոց', 'նամակ', 'կրօնի', 'ֆէսին', 'շրշիլ', 'հսկած', 'վարգի', 'մնայէ', 'ֆրանց', 'խաթեր', 'ծովից', 'սկիւռ', 'անմիտ', 'լղճել', 'թոքեր', 'խշտիկ', 'կեանք', 'պոռոչ', 'սիրոն', 'անհոգ', 'մկանի', 'չարիք', 'մոլար', 'խորոմ', 'արկած', 'պարոք', 'ոստան', 'խէժոտ', 'բիլսը', 'աստղը', 'գերբն', 'փշտով', 'պառակ', 'մտքին', 'զեման', 'վիշապ', 'վճարը', 'հաւար', 'կողմը', 'լիոնը', 'սթեդի', 'հնաոճ', 'սկիհը', 'անխոհ', 'չխկոց', 'կրիփը', 'այրեր', 'մտքէն', 'տարրն', 'կընէր', 'հիմեն', 'թափօն', 'շոգել', 'նիստը', 'փուխր', 'ըսինք', 'թելիկ', 'ուստր', 'անքէն', 'քոթոթ', 'կլանի', 'անկաթ', 'ծովիկ', 'նստաք', 'բոբոխ', 'պտտել', 'չորել', 'հիմնը', 'խճճել', 'թենիս', 'բիրնի', 'սփիւռ', 'կծում', 'կողքի', 'դերէն', 'սյանը', 'խոցել', 'հոտեր', 'ահւալ', 'նիզակ', 'դիւան', 'խորան', 'դերով', 'ընտայ', 'պատիժ', 'ադչու', 'քլեյը', 'գոցեն', 'փլվել', 'կցում', 'գորգի', 'ցրցամ', 'ղժժան', 'յաճախ', 'մութը', 'բռնեն', 'պահիկ', 'յանգի', 'կլանչ', 'փուլը', 'դիմեն', 'նշման', 'տրդատ', 'գետառ', 'ձիուն', 'մշակէ', 'ծամոց', 'արփին', 'տունն', 'անհէր', 'դզում', 'բերդի', 'ցանքի', 'իվանը', 'պղերգ', 'վարող', 'ոմանք', 'յղկիչ', 'կարել', 'պտղիլ', 'իմամը', 'ամառը', 'գներն', 'զենքն', 'դզզոց', 'ատում', 'մորթե', 'գրելը', 'ցանկը', 'կոմիկ', 'հոլակ', 'դերին', 'միացք', 'անդէմ', 'ուշով', 'ծեծով', 'ճեմել', 'դագաղ', 'գիշեր', 'ձգտել', 'լինեն', 'տկճոր', 'հարավ', 'կոտոշ', 'անաղի', 'դարից', 'երշիկ', 'ձագար', 'հեծան', 'իրարո', 'ապասը', 'տէմին', 'եզնիկ', 'շրդան', 'ոտքեր', 'ղրկել', 'օդերի', 'կտրօն', 'քրոջս', 'ոտնակ', 'հորից', 'փրչոտ', 'կաշվե', 'թմբիչ', 'խնչել', 'թուեր', 'սնուէ', 'զգանք', 'տարայ', 'խոսքի', 'տմբալ', 'բասրա', 'ձեւին', 'բադամ', 'վշշոց', 'մորից', 'մօրմէ', 'ծայրը', 'խորքը', 'խոտել', 'լուծի', 'գանկը', 'դրժել', 'ծնկել', 'թուրծ', 'այգու', 'տենդի', 'ջրվեժ', 'պատից', 'սեքսի', 'ըրինք', 'ցամաք', 'յածիլ', 'բրնձը', 'սկսան', 'բոքոն', 'անծին', 'երազի', 'անթեմ', 'կնձնի', 'անում', 'ֆրակի', 'պճճալ', 'թողիք', 'զատիկ', 'բերիր', 'ջղախտ', 'խոկալ', 'գրաւէ', 'մազոտ', 'մահին', 'միտիլ', 'ձեւեր', 'նետիկ', 'կոպար', 'կիկան', 'բոռոց', 'կապրի', 'դարան', 'մանել', 'էպոսի', 'բուոց', 'դեղոտ', 'տառին', 'լցվել', 'չոռոտ', 'ձևերի', 'գլդոն', 'լեղակ', 'յառած', 'տեւել', 'ծնկին', 'նեյթը', 'հակին', 'փուստ', 'սիգալ', 'սղղալ', 'թիթեռ', 'կովեր', 'կաթից', 'թուրն', 'կաբել', 'իկթան', 'գավթի', 'ալիսա', 'միջից', 'դիւոտ', 'սիրով', 'տաթևի', 'սիրող', 'փքալի', 'գրպան', 'խափան', 'ցեւով', 'թղթիկ', 'ծիծաղ', 'ազգեր', 'լսենք', 'ծռանց', 'սառատ', 'կական', 'թզուկ', 'նետել', 'անմաս', 'իպսեն', 'խուրձ', 'քիմոն', 'ծառան', 'տեռոր', 'անամպ', 'անքաշ', 'մեթոտ', 'ջրալի', 'լազաթ', 'թիմեր', 'սալար', 'խնթոց', 'նաֆաս', 'պասիվ', 'հենել', 'պիտակ', 'խելքը', 'վիժել', 'թուզը', 'կտաւի', 'ամենը', 'կոդեր', 'կարաս', 'ձգտիլ', 'մէծէն', 'այգով', 'ճաշէն', 'սովոր', 'ալանի', 'ժորժն', 'աւլել', 'կոկիկ', 'գութը', 'պաղիլ', 'մաշիլ', 'ասպար', 'լանջք', 'նաւով', 'դխկոց', 'ուտիք', 'պետիի', 'գրչակ', 'սոկաս', 'անհետ', 'օտեան', 'դռռան', 'պպզիլ', 'կցորդ', 'գրոսը', 'ճաղատ', 'գիտէք', 'կիզիչ', 'ճռռալ', 'խելառ', 'շինեմ', 'կուլտ', 'ցցում', 'մեթրն', 'զինքը', 'երթայ', 'գային', 'անկար', 'քշպել', 'սարքի', 'օձերի', 'կաքաւ', 'ծեփան', 'բազար', 'չռռալ', 'կոկիչ', 'ելման', 'աղինջ', 'եռանդ', 'վշտից', 'հակած', 'յատնի', 'հողել', 'գանգի', 'սոուս', 'ապրեր', 'տքնիլ', 'քծնող', 'շրջան', 'վարազ', 'մաղթէ', 'նշվել', 'շմփոց', 'վարել', 'ավարտ', 'ջերմէ', 'տինքի', 'տուաւ', 'ջրհան', 'թսկել', 'մացառ', 'շառոտ', 'սինգլ', 'անճառ', 'ետեւի', 'ասիկա', 'կուշտ', 'թնգոց', 'կաղնի', 'փառքը', 'դեւոտ', 'նալիկ', 'ծեսեր', 'դմբալ', 'կուրտ', 'ղոնաղ', 'աղեղը', 'սիրէր', 'անջիլ', 'մկնոռ', 'մունջ', 'զամշէ', 'ուլիկ', 'պրծան', 'երգով', 'աջում', 'ջուրէ', 'հինել', 'դիպել', 'ծալել', 'լուրթ', 'զգեստ', 'լծորդ', 'տալով', 'սրբան', 'գազան', 'տրաստ', 'գոճան', 'սթեդը', 'տուֆէ', 'կլինի', 'գրերը', 'հիդրո', 'տաշած', 'բրեան', 'պրևոն', 'նայող', 'կռնատ', 'գույն', 'ճոպան', 'ոտքել', 'հյուն', 'թաթեր', 'գիրքն', 'դնում', 'կրողը', 'բերաւ', 'բախիլ', 'շղթայ', 'լայիր', 'տիրել', 'շոգին', 'գծերը', 'դաբաղ', 'նորից', 'էրոցք', 'բառաչ', 'բարեն', 'թուրմ', 'էրկան', 'տարափ', 'կթում', 'կոծիկ', 'խոխոմ', 'թովել', 'հեզար', 'երազն', 'ֆրիզի', 'դխկալ', 'տայիր', 'դաջել', 'անուժ', 'իրինց', 'շիւար', 'մսուր', 'վերջի', 'տածել', 'կապոտ', 'ելակը', 'հերոս', 'ըմպակ', 'օսեյջ', 'տարրի', 'թնդոց', 'եզրից', 'ֆոնտը', 'շշիւն', 'անմեռ', 'խտուտ', 'կերտէ', 'գալիք', 'փոքրն', 'համաս', 'գայիր', 'միզել', 'տափել', 'ձմրան', 'սևերի', 'ջրթող', 'տաճար', 'հազար', 'փայակ', 'ցնորք', 'վանայ', 'այրին', 'բնդել', 'հրատը', 'ճնկալ', 'թուալ', 'քուչի', 'գաւին', 'հռեայ', 'անզէն', 'մկկոց', 'էփսին', 'թմրած', 'տվյալ', 'դարձի', 'ջարդը', 'դառան', 'հոգու', 'մտգով', 'թաւալ', 'տողեր', 'ճռզած', 'միջին', 'մատիկ', 'սիպիլ', 'ժխտել', 'անղեկ', 'շարել', 'տայիք', 'փայիկ', 'մերլի', 'շողոտ', 'վարար', 'չարայ', 'կրիայ', 'ճմուտ', 'կտորը', 'չեչիլ', 'կապեր', 'հրարկ', 'թրըխկ', 'յառել', 'քայլի', 'մարզէ', 'նուոց', 'թեթեւ', 'գրաֆը', 'լային', 'մանգա', 'բուտի', 'պլանը', 'թռնել', 'միսին', 'օղակի', 'գլխել', 'տարեխ', 'էրինջ', 'հեղեղ', 'տուփը', 'հրատի', 'նրանց', 'անփող', 'կարլը', 'գայլը', 'պլոկը', 'զարըգ', 'թրծել', 'աւրել', 'անբոց', 'անհաց', 'երկնք', 'անտակ', 'զինել', 'վարեց', 'թառամ', 'մինակ', 'կեսէն', 'ագցան', 'տնկել', 'ծովէն', 'պատած', 'ամօթի', 'յեսան', 'զառամ', 'աչքին', 'վզնոց', 'ըլլան', 'հրում', 'ֆունտ', 'թերթը', 'ամրակ', 'խռփալ', 'փոփոլ', 'վայել', 'քաոսի', 'բժշկի', 'որոշէ', 'թնգալ', 'բացեն', 'հաշվի', 'կողակ', 'անդեղ', 'տնքոց', 'զույգ', 'բօթել', 'երկալ', 'օղաձև', 'փխլել', 'մոդել', 'նազիկ', 'նստէր', 'զտում', 'շաչել', 'ռեգգի', 'ճաշոց', 'գնացի', 'գրուի', 'երգից', 'ագռաւ', 'նժդեհ', 'շափել', 'դիմել', 'խարամ', 'անթոց', 'հասցէ', 'սգերգ', 'երկրէ', 'քշէին', 'դոլար', 'կոլոն', 'կամեո', 'շեղաչ', 'դռնէն', 'մեռոն', 'զոնայ', 'կոթող', 'բեկել', 'որմել', 'չարվի', 'բորոր', 'արամէ', 'սիրոյ', 'պարով', 'վանեն', 'շոփէն', 'պարին', 'պղպեղ', 'ձմեռը', 'գրածը', 'փրկեն', 'կապայ', 'ծամիկ', 'որեւէ', 'գեհեն', 'պտկիկ', 'գտանք', 'լցուկ', 'շտրիխ', 'վիգէն', 'սակառ', 'ճոռոմ', 'տարազ', 'լողաթ', 'ղալիմ', 'խալոտ', 'այծեր', 'փսարա', 'հարու', 'եղուկ', 'կառան', 'հնձել', 'դաւան', 'վիճակ', 'ձգտին', 'այրիչ', 'ապրիլ', 'անմահ', 'ափերը', 'շփփալ', 'սուրճ', 'ուտես', 'պարած', 'քարեր', 'անուն', 'բզզալ', 'ինկայ', 'օգնել', 'որձատ', 'հասավ', 'անկան', 'ադամը', 'ազդու', 'խնդրի', 'ճռինչ', 'առջևի', 'դուրճ', 'բռնակ', 'տիֆով', 'կամայ', 'ցուլը', 'դժմիտ', 'շէնքէ', 'ծոցափ', 'ռելիէ', 'քայլն', 'հոգին', 'ճռթոց', 'իխտիս', 'գլխատ', 'առթիւ', 'սրքան', 'ձիւնը', 'բերնէ', 'կրակէ', 'մեջքը', 'հաւաք', 'ճշտել', 'ծովակ', 'քանին', 'ծմրոց', 'անջիղ', 'շիլան', 'թացան', 'բարեի', 'որդոտ', 'պարզէ', 'տորան', 'որսին', 'ակորդ', 'ցածիկ', 'ձուիկ', 'իշխող', 'շաքիլ', 'ապազը', 'վարքի', 'ցանցն', 'ճռռոց', 'փապար', 'ջրփախ', 'կպրիչ', 'որքին', 'միաձի', 'աճում', 'կաշվի', 'չոմախ', 'կերան', 'հոսիլ', 'կային', 'գղթոր', 'նաֆտի', 'պահոց', 'վեգան', 'լուրջ', 'թովիչ', 'հեկթօ', 'ծափիկ', 'լինին', 'ղժժալ', 'բալետ', 'անհատ', 'հրեշի', 'տպուի', 'մաշկը', 'թուէր', 'մտնող', 'ապուշ', 'էթելը', 'կակազ', 'պահեն', 'քլթոց', 'նավթի', 'մաներ', 'հիացք', 'ուրագ', 'հինդի', 'գերբի', 'թխպել', 'թավոտ', 'ստորը', 'ձեւել', 'ասկից', 'օփերա', 'ղասաբ', 'ոլոռն', 'ատամը', 'սալթա', 'սառցե', 'ջուրն', 'պտտին', 'կարօտ', 'սնում', 'սերմը', 'ջուտն', 'չախալ', 'պեղել', 'լատիշ', 'փոխել', 'ալիւր', 'ագահը', 'անութ', 'պեկից', 'երանի', 'խոռոչ', 'դնովի', 'փռուի', 'բալայ', 'անշառ', 'սխալը', 'չմփալ', 'հորոր', 'գտնեն', 'ժպիրհ', 'էտքան', 'աղման', 'փուքս', 'պանան', 'կողեր', 'ախյալ', 'ծծկեր', 'բաժին', 'նզովք', 'կապալ', 'եղծիչ', 'լալիկ', 'հիմքն', 'անթեղ', 'կսկսի', 'խօջայ', 'անքակ', 'կապոց', 'թպպոց', 'քուրձ', 'օգնող', 'բարակ', 'անշէջ', 'նազիլ', 'կորքի', 'խօսող', 'չգիտի', 'մեկին', 'խրճիթ', 'ներկը', 'ծամիչ', 'կոպիճ', 'իւղիչ', 'ջրոսպ', 'ժիւրի', 'չիբան', 'խզում', 'իտէալ', 'անհոտ', 'ամենէ', 'խարազ', 'ուտիճ', 'հացով', 'խէթել', 'հունտ', 'դնգալ', 'ձգտէր', 'ջեռոց', 'գործն', 'աճման', 'տուին', 'աւերը', 'լիդեր', 'տուֆի', 'հումք', 'մուկը', 'փոշոտ', 'խժռել', 'փոթոթ', 'խիժոտ', 'մարիլ', 'ձողիկ', 'լայնք', 'զարկի', 'ընկան', 'փռված', 'տարաւ', 'քննիչ', 'վրայի', 'արծաթ', 'սեպել', 'մարտի', 'ագուռ', 'անսէր', 'կանտի', 'ճնշիչ', 'գաջոտ', 'տհոլի', 'բդեշխ', 'խմում', 'կռռոց', 'տուած', 'դրեցի', 'կատար', 'զուսպ', 'փլուզ', 'դալալ', 'թուրք', 'խօսիր', 'տների', 'գնացք', 'առնել', 'ճուոց', 'ուղիղ', 'վագրի', 'ծմրիլ', 'փորիկ', 'հոգիի', 'միոզի', 'մնալէ', 'փախիլ', 'կնոջն', 'դպրոց', 'վաշտի', 'ծաղրն', 'գամեց', 'ներքո', 'փտման', 'բժիշկ', 'աղեղի', 'անուր', 'տարիֆ', 'կրծել', 'փրկիչ', 'թխկին', 'կադետ', 'փեթակ', 'կայքը', 'տեսաւ', 'տաշել', 'տաճիկ', 'թփուտ', 'կինայ', 'թաւոտ', 'յարկը', 'գազոն', 'պահէր', 'ելլեն', 'սկսաւ', 'ոնրիշ', 'ձիթել', 'ճգնիլ', 'քունն', 'տիկին', 'կարան', 'չափից', 'ժպտիլ', 'գրաստ', 'ձիերի', 'դարձը', 'բարոն', 'հերիք', 'սէզոտ', 'զօրեղ', 'արանք', 'կրտել', 'ուզող', 'ձգվել', 'բոված', 'անփառ', 'կպրոտ', 'եռակի', 'թամամ', 'գոլին', 'շառաչ', 'զօրել', 'լուալ', 'ներքը', 'փրենի', 'հարին', 'շալէր', 'քերոց', 'ցաւօք', 'թոնիր', 'հազիվ', 'գխտոր', 'ձգում', 'կոմսը', 'սեռով', 'նիքիի', 'թնդիլ', 'գաւառ', 'երեքը', 'հացին', 'սղղան', 'սովէն', 'լույս', 'բազազ', 'շողիկ', 'ստոյգ', 'աչում', 'բախտի', 'սարած', 'կրանյ', 'մշեցի', 'կեցցէ', 'ջոնսը', 'խոնավ', 'գանիլ', 'օգիեն', 'սոֆին', 'որդան', 'խոտոր', 'չմտած', 'դշխեմ', 'պինայ', 'պճնել', 'ոսկրէ', 'նաֆթի', 'պետեր', 'թրջել', 'դօդօշ', 'բռինչ', 'սօսափ', 'նստած', 'մեջքն', 'բուրդ', 'դաշտը', 'թրմոց', 'սերով', 'երթին', 'եզերք', 'ծլինգ', 'ննջող', 'ազատը', 'առնոն', 'վիպակ', 'անտիպ', 'ելքին', 'երանգ', 'լխտիկ', 'եուրո', 'վիճող', 'ցրված', 'եթերք', 'գնում', 'լաւիտ', 'կելլէ', 'բանտը', 'դժգոհ', 'մերին', 'կռիւի', 'դառած', 'ծորիլ', 'բարոք', 'բախած', 'հատաւ', 'մզկիթ', 'կերաք', 'զօրքի', 'կաթով', 'փորին', 'ցուլի', 'լրտես', 'դիմող', 'զմփալ', 'բանայ', 'մայիս', 'կայան', 'վառօդ', 'կայտի', 'ընչեղ', 'ջորջը', 'լատին', 'հեղել', 'վասիլ', 'վիզայ', 'արջեր', 'սեանը', 'արճիճ', 'սակաւ', 'արենի', 'տխրիլ', 'կարապ', 'շահիլ', 'վէպին', 'որչափ', 'ձթենի', 'օժտել', 'տժժոց', 'որբեր', 'ցրվել', 'տուիր', 'ստինք', 'լուիճ', 'մուրճ', 'քնելը', 'մեռաւ', 'բաւել', 'խաւիծ', 'թափիչ', 'խռկոց', 'բացին', 'լծակը', 'իստակ', 'պոպոք', 'վիրոտ', 'կեռաս', 'տրեբլ', 'շատեր', 'մարզը', 'ցնցող', 'կրքոտ', 'գրեգը', 'գոռոց', 'ջեյնը', 'շունչ', 'մաքոք', 'ծնեալ', 'պոմպի', 'աշոտի', 'բերդը', 'ձգուի', 'նեղոս', 'ամպոտ', 'սուան', 'վնգոց', 'բաբախ', 'լաստի', 'ճարպի', 'սմքին', 'կտտիլ', 'ծոցին', 'ճղփալ', 'մարագ', 'գրոհը', 'խորքի', 'անկապ', 'դեմքի', 'ոլորք', 'ճանար', 'շահած', 'մեծաւ', 'խոհիլ', 'լողով', 'տեսիլ', 'թանին', 'յենու', 'խստիւ', 'յաւէտ', 'փուլի', 'հասնի', 'ոչխար', 'աստծո', 'նուագ', 'բաքոս', 'սամիթ', 'կայիք', 'ցաքատ', 'շռռալ', 'թաղար', 'վերան', 'բոսխի', 'ծփում', 'ռիսկի', 'կրթիչ', 'գրելն', 'ձևերը', 'ծէգել', 'ապշիլ', 'յօդել', 'կշռար', 'կազակ', 'պամիա', 'յենոց', 'գհուկ', 'խռնել', 'սովել', 'նուէր', 'մզրախ', 'տեղով', 'ծեփել', 'ումով', 'վրձին', 'չպետք', 'քամայ', 'զօծել', 'տօնել', 'կուղբ', 'գողօն', 'էգանը', 'մետրօ', 'անխաբ', 'խռփոց', 'խրթել', 'զտման', 'խաղալ', 'վռթալ', 'ձուկը', 'յօժար', 'հսկեն', 'սնվել', 'ընտրէ', 'վնասի', 'պոլիս', 'գեննա', 'շինած', 'տենդը', 'ստելը', 'վթարի', 'մերել', 'դրինք', 'միտքի', 'բորոտ', 'չլսեց', 'զմփոց', 'տժժալ', 'թխլիկ', 'ծիծառ', 'ամեակ', 'գողտր', 'կտավն', 'բերող', 'սրբիչ', 'նիւթը', 'բզզան', 'պահքը', 'ծեծէր', 'ամռան', 'լճեզր', 'շառատ', 'ետեւէ', 'օսկոր', 'ձգտած', 'կրէին', 'թռանք', 'դուրը', 'մրցին', 'աւիշի', 'դպչին', 'թեւատ', 'տարել', 'չխկալ', 'ժամեր', 'աշխօր', 'խմբին', 'սոդայ', 'ակտեր', 'կերգէ', 'տամար', 'դիմակ', 'կոպիտ', 'խլինք', 'արածն', 'փոյին', 'թմփալ', 'դասին', 'կոճակ', 'մազեր', 'նշում', 'լերան', 'խլնոտ', 'ճխլել', 'չխմեց', 'ռասայ', 'կազեր', 'հարոց', 'անդին', 'փքախտ', 'տիտան', 'կապիկ', 'գոռալ', 'ֆրենչ', 'հակիլ', 'փակել', 'դաժան', 'տեւած', 'խխմիլ', 'խիլոտ', 'տեղից', 'պէմօլ', 'թուղթ', 'ճիգին', 'պահքի', 'պսակը', 'կույր', 'բուհը', 'ակասի', 'քրդեր', 'ճաշից', 'խաբար', 'նոտայ', 'հալիլ', 'պաթոս', 'թողին', 'մոմել', 'գոյին', 'մեխել', 'սմբատ', 'բանով', 'շնչեղ', 'կակաչ', 'նեխիլ', 'գիհին', 'տերևն', 'նազիր', 'լաւիկ', 'ռոմեո', 'խզզալ', 'շոյիչ', 'գյուղ', 'թորակ', 'գցեցի', 'հազոց', 'ուրան', 'կապեն', 'ասուպ', 'իոսիֆ', 'հոտոտ', 'ալպոմ', 'անձեր', 'շլմոր', 'թէյին', 'ցավից', 'ըսուի', 'բերեն', 'աղուն', 'ծծմոր', 'ներել', 'շահէն', 'դակել', 'պլզել', 'ընտրի', 'ցրում', 'դողոց', 'աչքեր', 'քծնիլ', 'բախին', 'չքնաղ', 'բայոց', 'չրթել', 'պարկի', 'շռայլ', 'ճեպել', 'հոտին', 'որկոր', 'ծագած', 'տանել', 'հիւկօ', 'խօսքի', 'տաղեր', 'սկսկի', 'ջրոգի', 'քարով', 'ռադիօ', 'դրւած', 'ուտել', 'ցնցիչ', 'քուրմ', 'տանքա', 'կնձիկ', 'զորքը', 'հէրին', 'այդկէ', 'սրանց', 'բղխիլ', 'ծլթալ', 'գովքն', 'շիներ', 'դողիլ', 'հօտին', 'մահէն', 'հինէն', 'թևիսի', 'տարրը', 'ամէնը', 'մտքով', 'ղալամ', 'խոզակ', 'ձախէն', 'թափել', 'դժժալ', 'փրթիլ', 'պատեր', 'ճնշող', 'շրջած', 'ջրդար', 'բումը', 'ծռերը', 'վիզին', 'պնդել', 'ճօճիլ', 'թափով', 'բանից', 'շրջել', 'քաչալ', 'ցցւիլ', 'բռնել', 'չոդառ', 'կազին', 'էթիկա', 'եղէգն', 'թխկալ', 'թանից', 'ցօղիլ', 'տեղմը', 'խրում', 'սիրած', 'ռիատի', 'կախան', 'կնքած', 'բումբ', 'զոհեր', 'ակամա', 'ծկթել', 'ձնձեղ', 'ծեփիչ', 'պանրի', 'ակաևի', 'շոուի', 'փախչի', 'թրջիլ', 'մորթի', 'տարիէ', 'շրջիկ', 'ճմլիչ', 'ռիթմը', 'առնող', 'հնում', 'հերու', 'ճխտել', 'շագին', 'նռենի', 'տապար', 'փստալ', 'քամել', 'աւանդ', 'հոբոյ', 'օսկար', 'ռիոյի', 'դամար', 'կուպէ', 'խռկալ', 'վտակն', 'ինձմէ', 'դաշտի', 'եղերդ', 'եաբու', 'շմփալ', 'պատան', 'ոհմակ', 'հնչած', 'կոթառ', 'ձորափ', 'անպոզ', 'նիկել', 'բլրակ', 'մտքեր', 'թխպոտ', 'դրուի', 'ձիուց', 'էոլիթ', 'մլուլ', 'թիմոլ', 'տատից', 'կտաւէ', 'սգերթ', 'ցաւոտ', 'չաթու', 'անդրի', 'մատիտ', 'պակեթ', 'խալաթ', 'արտել', 'մլեհը', 'տարաք', 'պնչատ', 'տեղիք', 'աննան', 'բիցցա', 'սկսայ', 'շիրոտ', 'կնիւն', 'թէպէտ', 'քսում', 'ներկա', 'տեւեր', 'եչկար', 'խմբել', 'լևոնի', 'քերին', 'թխում', 'էտում', 'ծլկիլ', 'անչափ', 'ճնշէր', 'ձնհալ', 'շարժի', 'պիտոյ', 'ըմպել', 'ունիմ', 'տոկալ', 'ցնցած', 'գրողը', 'երկձի', 'գուցէ', 'որակը', 'շուկա', 'բոժոժ', 'կարծէ', 'կողին', 'վճիռը', 'ամբար', 'իրենն', 'սիսեռ', 'հիւսք', 'ուծին', 'պղծիչ', 'ծածկն', 'կոփել', 'թասակ', 'օտենի', 'լցում', 'քաղցր', 'ձգտող', 'դուրգ', 'լացին', 'կապից', 'գրեմի', 'մոտիվ', 'վերևի', 'ֆալակ', 'ջանիկ', 'գտնէր', 'ծլլալ', 'կղղալ', 'խաղար', 'ֆոնդի', 'ամանի', 'կտրիչ', 'օղակը', 'մատնէ', 'կրծեն', 'սարիկ', 'ատելի', 'դաղել', 'մինոր', 'ահեակ', 'ալիբի', 'պոչատ', 'սիրտը', 'վաֆլե', 'հարաւ', 'բացատ', 'լքված', 'անվան', 'էդպէս', 'կնորս', 'պոռալ', 'ջանար', 'թալան', 'օծման', 'պղծել', 'խեղել', 'թթախտ', 'տաղիկ', 'անարի', 'սեղմէ', 'ազդել', 'լողակ', 'զաւակ', 'թփերի', 'առիթն', 'արժեք', 'խոզեր', 'ցատկէ', 'անբեր', 'վազեր', 'կճղակ', 'անդատ', 'վզզալ', 'անլաց', 'զատել', 'հովոց', 'վշշան', 'կապած', 'պոռոց', 'յաճակ', 'կալոց', 'չափեց', 'եփվող', 'ելոյթ', 'կշեռք', 'գլխոց', 'լսեցի', 'վաշտը', 'փէշակ', 'դուռը', 'ջրերն', 'կրճոն', 'ռոճիկ', 'դրախտ', 'ողորմ', 'արյան', 'լխպոր', 'ոլորտ', 'տզզան', 'գլխիկ', 'կոչեն', 'կաւոտ', 'ռոուզ', 'զեւսը', 'մռռալ', 'դրինդ', 'ճղճիմ', 'օգներ', 'կենալ', 'թզենի', 'տապակ', 'անծիլ', 'քոչել', 'սունկ', 'բնորդ', 'դարակ', 'ձգէին', 'դեռես', 'չրըխկ', 'տմբոց', 'ունէի', 'պահէն', 'լոսել', 'ներկի', 'քնախտ', 'ակութ', 'լամայ', 'բունը', 'գերաճ', 'փաստն', 'աճուն', 'չբանի', 'ովքեր', 'նըւէօ', 'նիւթն', 'գչրել', 'բժիղկ', 'ձորան', 'էթնիք', 'վառիչ', 'ումից', 'հովիտ', 'ջհուտ', 'կիսրդ', 'փուռը', 'ճստիկ', 'մորիս', 'ձեռքի', 'օմանը', 'թաթառ', 'բշտել', 'էսքիզ', 'ունիս', 'նամազ', 'ձօնել', 'կոզռն', 'պսակի', 'լայտը', 'չինթա', 'նական', 'գլխով', 'տմարդ', 'կլիմա', 'կիսատ', 'խնկոտ', 'խոժոռ', 'չմնաց', 'ձեռքն', 'իշիաս', 'այլոք', 'գահից', 'հովիւ', 'ամառն', 'սանդի', 'լիսէի', 'ձողան', 'ոտկապ', 'կաթոց', 'սերեր', 'լացող', 'չպէտք', 'կգնամ', 'հաշիշ', 'քելեխ', 'պարոն', 'խխում', 'կրկին', 'եղեռն', 'անքաղ', 'բացած', 'ռատիօ', 'տեսակ', 'վտանք', 'ժշխել', 'դոնոր', 'լիներ', 'երեկո', 'երեքն', 'տակին', 'նախշը', 'մազին', 'հավեր', 'կապան', 'աբոնը', 'լաքել', 'անվախ', 'զրկեց', 'գոռոզ', 'սատար', 'զգալի', 'հաճոյ', 'լեգալ', 'սոնիճ', 'մոխրի', 'ճյուղ', 'ֆիդես', 'կցուկ', 'մաժոր', 'հարամ', 'անգոհ', 'քունը', 'աղուր', 'վեպեր', 'թուով', 'դադրի', 'եղբոր', 'իրերը', 'անծոր', 'խճճոց', 'խիզախ', 'ոստիկ', 'կապին', 'կեցած', 'ալբան', 'բրոնզ', 'կրակի', 'թազբէ', 'իներտ', 'լինող', 'չորոց', 'առլէզ', 'ցանցի', 'հրդեհ', 'խոշոր', 'հայու', 'գուցե', 'հարցը', 'տածեր', 'տարած', 'հարեմ', 'մախաթ', 'փքանք', 'ազնիվ', 'տայգա', 'էական', 'աուլը', 'շիտակ', 'քարտի', 'սկսող', 'քղանց', 'հնդիկ', 'կաշու', 'իւղին', 'մարքի', 'տենչը', 'կնոջը', 'ծախսը', 'թոքին', 'պիրսն', 'մատով', 'հետին', 'նշանը', 'օրբիտ', 'ելլող', 'անզօր', 'լսէին', 'բիւջէ', 'խնամի', 'չէզոք', 'ծպտիլ', 'հնչակ', 'ռեփին', 'ռայսի', 'ծաւալ', 'դեղին', 'տխմար', 'կամար', 'հատով', 'մէջէն', 'հենէր', 'սանտր', 'բծերի', 'խումբ', 'ծղծամ', 'բագին', 'պինար', 'հռչակ', 'բազան', 'երեսի', 'խշրել', 'պրծար', 'գլասը', 'շողոմ', 'արոյր', 'սեքսը', 'հայրն', 'մաժել', 'հեւալ', 'թխված', 'շանյի', 'հացէն', 'մասիա', 'հոսքը', 'ցեխել', 'գիսակ', 'շնիկի', 'անպոչ', 'երևալ', 'տզզոց', 'մնալը', 'դրոշի', 'կթռչի', 'անբան', 'բալիշ', 'շտաբի', 'մղլակ', 'թափօր', 'բոռեխ', 'նստոց', 'մոմեր', 'ֆորտէ', 'ջրցօղ', 'սրահը', 'տառեխ', 'ջլթիկ', 'որբիկ', 'կոհակ', 'գաւակ', 'յաջող', 'գջլել', 'ֆինիշ', 'փոխած', 'նաւակ', 'շեշտը', 'խաթայ', 'պատատ', 'դիրքն', 'կպչել', 'տատիկ', 'տռզել', 'լալան', 'ամոմց', 'արմատ', 'խարակ', 'կորեխ', 'ինկաւ', 'պչրոտ', 'մղվեց', 'մեղվի', 'ծնոքը', 'կրճիկ', 'բանակ', 'պլոմբ', 'բիւրօ', 'ձայնը', 'անդող', 'ճաշին', 'անգար', 'ծածան', 'բռռալ', 'թիւրք', 'ապրիք', 'նկուղ', 'ամսից', 'արզնի', 'թաբախ', 'պրծիլ', 'ձուոտ', 'կաճէր', 'կուզէ', 'ջրգող', 'գիտեր', 'չատեր', 'չուել', 'ֆրիկը', 'անկոթ', 'թառիլ', 'փշշոց', 'քիմիա', 'ոճիրի', 'ջիրիթ', 'ջրփող', 'աշնան', 'ոճերն', 'շերեփ', 'հեբեյ', 'խոհեմ', 'նշուի', 'հնձան', 'ճստալ', 'ուզեց', 'նրանք', 'փղախտ', 'չարթի', 'հնչեղ', 'քամու', 'զատիչ', 'բացիկ', 'շլորի', 'տուող', 'թևերն', 'գարթը', 'կտավը', 'նոյնն', 'ձձում', 'յիմար', 'հնչէր', 'զանգի', 'անծիր', 'մարալ', 'անտես', 'ապուռ', 'կորիզ', 'շինել', 'արդար', 'պոլոզ', 'կորել', 'առաջի', 'պոզատ', 'այգին', 'եփում', 'լացել', 'խաւին', 'մսխիլ', 'մեղրի', 'դադար', 'սաներ', 'կոպեկ', 'կոչել', 'ճնշեն', 'կոտեմ', 'թումբ', 'եկանք', 'աւշակ', 'վիշտը', 'փարոս', 'երիզը', 'բեմին', 'բոցեղ', 'ձայնի', 'կնքել', 'ծպտոց', 'կտածը', 'փնչոց', 'մէկիկ', 'զօռով', 'գաթայ', 'շնաբն', 'ճիրան', 'կարգը', 'գնորդ', 'շփման', 'խոպոպ', 'քարափ', 'տոհմի', 'անբաւ', 'փախստ', 'կաթիլ', 'ակտիւ', 'կարատ', 'շաքար', 'տաբատ', 'ազոտը', 'ծխանք', 'չեղած', 'շարան', 'ափկալ', 'որոնք', 'սառիր', 'ցեղին', 'հսկող', 'իրրեւ', 'տուէք', 'քեմոն', 'դոզայ', 'փչում', 'կետով', 'հինին', 'պոեմը', 'թուրը', 'խօսքը', 'աղեղն', 'տարան', 'լխկիլ', 'ցոյցը', 'գանկի', 'կանալ', 'կարոս', 'աղջիկ', 'քչնալ', 'բկլատ', 'ավագն', 'տալէն', 'տրված', 'թէզեր', 'գուռի', 'եզրին', 'էնպէս', 'քէֆով', 'տեսայ', 'ցերեկ', 'վառեկ', 'մաղիլ', 'լաչակ', 'բրդից', 'շենքի', 'նշենի', 'ուտող', 'թեքատ', 'վոքալ', 'տալու', 'բուէճ', 'երբեմ', 'հույս', 'ջոկատ', 'տորոն', 'արկին', 'փոկել', 'նաբաթ', 'մայրս', 'անթիք', 'վզիկի', 'ռաջայ', 'գամել', 'փտում', 'կրնաք', 'քամոտ', 'ճուալ', 'բներգ', 'ծրում', 'երթան', 'տարար', 'վեջին', 'տոմար', 'աղօթք', 'խշտիք', 'կռիվը', 'բոբիկ', 'ֆոնին', 'դիակի', 'շրիտա', 'կլանէ', 'սուսր', 'այլեւ', 'թաղյա', 'ֆրոնտ', 'հաչել', 'միսէն', 'կրճատ', 'միրէյ', 'ցայել', 'կպչան', 'անխնա', 'վարէր', 'չարու', 'անձաւ', 'որտեղ', 'անմոռ', 'վաթան', 'մտնէր', 'անսպի', 'հաւիկ', 'ոջիլը', 'աճիւն', 'շուրջ', 'պղինձ', 'հռոմը', 'նստան', 'ջրհատ', 'զատեն', 'չէինք', 'սուգը', 'արևոտ', 'լմփատ', 'էնքան', 'օծեալ', 'ղմմաթ', 'հարած', 'սրագի', 'խնթալ', 'տորֆի', 'քոսակ', 'տոմսի', 'տակառ', 'բետոն', 'ընկաւ', 'ջոդին', 'ցցորմ', 'անհող', 'գոզալ', 'բիոմի', 'շտկել', 'աղճատ', 'դիտած', 'զննել', 'ազդակ', 'բուրջ', 'կէսին', 'շարաւ', 'թիթեղ', 'մյւոս', 'դղիրդ', 'ծիրան', 'իսլամ', 'արփիկ', 'եռման', 'տապան', 'էլիսի', 'մերան', 'աղցան', 'զատկի', 'խաշու', 'թխակն', 'վրանը', 'նարեկ', 'լփռոտ', 'հասու', 'թաթար', 'ճիւղի', 'խաբել', 'խաղից', 'բաղեղ', 'բիրին', 'խօսիլ', 'էսչափ', 'թելել', 'երգեց', 'հաւան', 'կէսէմ', 'պզուկ', 'պարտի', 'բանիլ', 'պայտի', 'ազդող', 'տրցակ', 'երգչի', 'ռումբ', 'թժչին', 'շշմած', 'էտիւդ', 'սիւիտ', 'ամենա', 'թոդան', 'փակեղ', 'հյութ', 'պստիկ', 'տնպահ', 'դէպքը', 'ոսպիկ', 'նազար', 'փռենի', 'տխեղծ', 'ուսին', 'փրթիկ', 'ֆսսալ', 'անքիս', 'արգամ', 'յենակ', 'շպարի', 'ծխուկ', 'բերնի', 'զաման', 'թորին', 'չգտաւ', 'փարիլ', 'ճիմին', 'կռճել', 'ճումբ', 'արխիւ', 'զիջեց', 'ելլել', 'պառաւ', 'պալէի', 'աջլիկ', 'նստել', 'անհաս', 'թղթել', 'գայիք', 'բեգար', 'սալակ', 'նշաձև', 'ծածկի', 'ասինք', 'նշանն', 'լեմբը', 'թխուի', 'բեմբի', 'մազեղ', 'իզմիր', 'պղնձե', 'կտաւն', 'վհուկ', 'կոճատ', 'սքոթը', 'վարեն', 'տեւիի', 'մարսի', 'լարան', 'առկախ', 'տօնեն', 'ուրար', 'ակնոց', 'ցիկլի', 'թասիբ', 'կպում', 'զրոյց', 'կարսի', 'նմոյշ', 'փիլաւ', 'մեզմէ', 'թուխպ', 'կեսին', 'բուշտ', 'լորիկ', 'թացոտ', 'բզզոց', 'եկչել', 'անխոց', 'դէպքի', 'անլար', 'ոսկյա', 'լնգալ', 'գիծին', 'ձվերը', 'թփերը', 'սերած', 'գտնել', 'նաւթի', 'թռչող', 'քակած', 'մախաղ', 'բաժնի', 'կարժէ', 'որսով', 'քսուք', 'տակաւ', 'մետիա', 'երկեր', 'մէկու', 'թառափ', 'բայել', 'որակի', 'քաւոր', 'դղեակ', 'չաթալ', 'պալար', 'հաշու', 'ձեռքէ', 'ափեզր', 'կոչած', 'քնում', 'շնչել', 'շաւիղ', 'քաղել', 'պիսակ', 'լարով', 'տոհմը', 'դռռոց', 'տխուր', 'փաթաթ', 'ծիծեռ', 'ձուկի', 'ինչքի', 'ֆրանկ', 'խարել', 'տժժան', 'դոփոց', 'անզեն', 'կէյթց', 'անուս', 'տրվել', 'ընկայ', 'խախտի', 'պահել', 'պոռոտ', 'օդուժ', 'յուղն', 'ցայտք', 'ոռնալ', 'ամիսն', 'կոյտի', 'գօտիի', 'սնկիկ', 'դափնի', 'թարախ', 'տօնին', 'հեւոց', 'կողմի', 'խեցին', 'սնանի', 'կալան', 'բեմէն', 'գարաժ', 'կիրքը', 'ափսոս', 'տանիլ', 'ցրտից', 'ծածկը', 'միջակ', 'սառած', 'դարով', 'շեղբի', 'մտրակ', 'ցցչոր', 'ճանառ', 'ադրիկ', 'պրոնզ', 'խմրիլ', 'որդել', 'քոշակ', 'տիրէր', 'գիջին', 'դիպակ', 'բախոց', 'ծլանգ', 'սարքը', 'ջուրք', 'յօդեր', 'հազին', 'խմբակ', 'իրանը', 'կոլոր', 'ջուալ', 'աթլետ', 'այնեղ', 'ափիոն', 'մանիշ', 'կէսէն', 'փաստի', 'զենքի', 'խարան', 'փոսիկ', 'եզակի', 'ճառով', 'քորոց', 'ճչում', 'բառեր', 'ճիւաղ', 'ինկար', 'նաւել', 'բշտոտ', 'ընկար', 'սնուի', 'վեհեր', 'փլված', 'փայլը', 'հօտով', 'գալէն', 'թիմին', 'բարով', 'խաղեր', 'գոտու', 'լցոնն', 'չփոխէ', 'կրցան', 'գծում', 'գաճաճ', 'ալեակ', 'չաման', 'քերծէ', 'քանզի', 'տերեւ', 'իրաքի', 'դմփիլ', 'էդիթը', 'երգէն', 'շարլֆ', 'խռուկ', 'փախար', 'դդմաճ', 'բիձայ', 'պելլը', 'լուրը', 'ներու', 'գրեցի', 'ժաժիկ', 'մինիկ', 'նարօտ', 'դուրս', 'տատէն', 'կամքը', 'փողոց', 'ցրդոն', 'բայէն', 'ուտիչ', 'պտտան', 'գաւիթ', 'հպարտ', 'ժպիտը', 'փոստը', 'շէնքի', 'դիպաւ', 'ծլոնգ', 'թողու', 'պաճոտ', 'թիրախ', 'թռիչք', 'բանտի', 'բլիթի', 'խեւիկ', 'գծերի', 'գլուխ', 'պրտու', 'ցանքս', 'չոքել', 'անհօտ', 'բիբար', 'դռռալ', 'ճտերի', 'ոգուն', 'սփռել', 'ժխտող', 'միազմ', 'խոնաւ', 'տոտեմ', 'թթենի', 'շողալ', 'ծնողի', 'լեսան', 'դժկամ', 'ածուխ', 'կախոց', 'փնջիկ', 'վերէն', 'խճուճ', 'կռվին', 'ջիգան', 'գորով', 'սրտէն', 'ուէսթ', 'երբևէ', 'այրոց', 'շոյել', 'կորավ', 'ծախու', 'ուղու', 'կանաչ', 'տուղտ', 'դրըխկ', 'հսկիչ', 'փորեղ', 'մանած', 'շաման', 'հիւրը', 'կեղևը', 'ավազի', 'ամպել', 'ապտակ', 'զեռալ', 'ասոյթ', 'ճայիկ', 'հետոյ', 'կծղիլ', 'նիքին', 'չեչեն'],
        Ia = "present",
        Ma = "correct",
        Oa = "absent";
    var Ra = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };

    function Pa(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var o = 0; o < e.length; o++) {
                    var n = e[o],
                        r = a[t][o],
                        i = s[n] || "unknown";
                    Ra[r] > Ra[i] && (s[n] = r)
                }
        })), s
    }

    function $a(e) {
        var a = ["th", "st", "nd", "rd"],
            s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ha = new Date(2021, 12, 24, 0, 0, 0, 0);

    function Na(e, a) {
        var s = new Date(e),
            t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }

    function Da(e) {
        var a, s = Ga(e);
        return a = s % La.length, La[a]
    }

    function Ga(e) {
        return Na(Ha, e)
    }
    var Ba = "ճւերտյւիոպասդֆգհձկլզխծվբնմչէռթօփըշջղժցքև",
        Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics",
        Ja = "fail",
        Ua = {
            currentStreak: 0,
            maxStreak: 0,
            guesses: n({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }, Ja, 0),
            winPercentage: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            averageGuesses: 0
        };

    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
        return JSON.parse(e)
    }

    function Va(e) {
        var a = e.isWin,
            s = e.isStreak,
            t = e.numGuesses,
            o = Xa();
        a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
                var s = y(a, 2),
                    t = s[0],
                    o = s[1];
                return t !== Ja ? e += t * o : e
            }), 0) / o.gamesWon),
            function(e) {
                window.localStorage.setItem(Ya, JSON.stringify(e))
            }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         Բառիկ\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
        es = "WIN",
        as = "FAIL",
        ss = ["Հանճար", "Հոյակապ", "Տպաւորիչ", "Փայլուն", "Հիանալի", "Հազիւ"],
        ts = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "tileIndex", 0), n(p(e), "rowIndex", 0), n(p(e), "solution", void 0), n(p(e), "boardState", void 0), n(p(e), "evaluations", void 0), n(p(e), "canInput", !0), n(p(e), "gameStatus", Za), n(p(e), "letterEvaluations", {}), n(p(e), "$board", void 0), n(p(e), "$keyboard", void 0), n(p(e), "$game", void 0), n(p(e), "today", void 0), n(p(e), "lastPlayedTs", void 0), n(p(e), "lastCompletedTs", void 0), n(p(e), "hardMode", void 0), n(p(e), "dayOffset", void 0), e.attachShadow({
                    mode: "open"
                }), e.today = new Date;
                var o = za();
                return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                }), Ca("event", "level_start", {
                    level_name: Wa(e.solution)
                })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = Pa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }
            return o(t, [{
                key: "evaluateRow",
                value: function() {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                            console.log(a, s);
                        if (e = s, !Ta.includes(e) && !La.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Բառերու ցանկին մէջ չկայ");
                        if (this.hardMode) {
                            var t = function(e, a, s) {
                                    if (!e || !a || !s) return {
                                        validGuess: !0
                                    };
                                    for (var t = 0; t < s.length; t++)
                                        if (s[t] === Ma && e[t] !== a[t]) return {
                                            validGuess: !1,
                                            errorMessage: "".concat($a(t + 1), " տառը պէտք է ըլլայ ").concat(a[t])
                                        };
                                    for (var o = {}, n = 0; n < s.length; n++)[Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                                    var r = e.split("").reduce((function(e, a) {
                                        return e[a] ? e[a] += 1 : e[a] = 1, e
                                    }), {});
                                    for (var i in o)
                                        if ((r[i] || 0) < o[i]) return {
                                            validGuess: !1,
                                            errorMessage: i.concat(" տառը պէտք է ըլլայ փորձիդ մէջ։")
                                        };
                                    return {
                                        validGuess: !0
                                    }
                                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                o = t.validGuess,
                                n = t.errorMessage;
                            if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Վավեր չէ դժվար կերպով")
                        }
                        var r = function(e, a) {
                            for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (t[r])
                                    for (var l = 0; l < a.length; l++) {
                                        var d = a[l];
                                        if (o[l] && i === d) {
                                            s[r] = Ia, o[l] = !1;
                                            break
                                        }
                                    }
                            }
                            return s
                        }(s, this.solution);
                        this.evaluations[this.rowIndex] = r, this.letterEvaluations = Pa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                        var i = this.rowIndex >= 6,
                            l = r.every((function(e) {
                                return "correct" === e
                            }));
                        if (i || l) Va({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }), ja({
                            lastCompletedTs: Date.now()
                        }), this.gameStatus = l ? es : as, Ca("event", "level_end", {
                            level_name: Wa(this.solution),
                            num_guesses: this.rowIndex,
                            success: l
                        });
                        this.tileIndex = 0, this.canInput = !1, ja({
                            rowIndex: this.rowIndex,
                            boardState: this.boardState,
                            evaluations: this.evaluations,
                            solution: this.solution,
                            gameStatus: this.gameStatus,
                            lastPlayedTs: Date.now()
                        })
                    }
                }
            }, {
                key: "addLetter",
                value: function(e) {
                    this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
                }
            }, {
                key: "removeLetter",
                value: function() {
                    if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess",
                value: function() {
                    if (this.gameStatus === Za && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Տառերը քիչ են");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast",
                value: function(e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function() {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal"),
                        a = document.createElement("game-stats");
                    this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                        return e.showHelpModal()
                    }), 100);
                    for (var a = 0; a < 6; a++) {
                        var s = document.createElement("game-row");
                        s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                    }
                    this.$game.addEventListener("game-key-press", (function(a) {
                        var s = a.detail.key;
                        "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                    })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                        e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution, 1 / 0), setTimeout((function() {
                            e.showStatsModal()
                        }), 2500))), e.restoringFromLocalStorage = !1)
                    })), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            o = s.checked,
                            n = s.disabled;
                        switch (t) {
                            case "hard-mode":
                                return void(n ? e.addToast("Միայն խաղին սկիզբը կրնաս դժուար կերպը միացնել։", 1500, !0) : (e.hardMode = o, ja({
                                    hardMode: o
                                })))
                        }
                    })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("Նախընտրանքներ");
                        s.appendChild(t);
                        var o = document.createElement("game-settings");
                        o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-page"),
                            t = document.createTextNode("Խաղի Կանոնները");
                        s.appendChild(t);
                        var o = document.createElement("game-help");
                        o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                        e.showStatsModal()
                    })), window.addEventListener("resize", this.sizeBoard.bind(this))
                }
            }, {
                key: "disconnectedCallback",
                value: function() {}
            }, {
                key: "debugTools",
                value: function() {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                        e.addToast("hello world")
                    })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz", s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                        e.evaluateRow()
                    })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                    })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                    }))
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n <style>\n #keyboard {\n margin: 0 8px;\n user-select: none;\n }\n \n .row {\n display: flex;\n width: 100%;\n margin: 0 auto 8px;\n /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n touch-action: manipulation;\n }\n \n button {\n font-family: inherit;\n font-size: 20px;\n font-weight: 500;\n border: 0;\n padding: 0;\n margin: 0 6px 0 0;\n height: 44px;\n border-radius: 4px;\n cursor: pointer;\n user-select: none;\n background-color: var(--key-bg);\n color: var(--key-text-color);\n flex: 1;\n display: flex;\n justify-content: center;\n align-items: center;\n -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n }\n\n button:focus {\n outline: none;\n }\n\n button.fade {\n transition: background-color 0.1s ease, color 0.1s ease;\n }\n \n button:last-of-type {\n margin: 0;\n }\n \n .half {\n flex: 0.5;\n }\n \n .one {\n flex: 1;\n }\n\n .one-and-a-half {\n flex: 1.5;\n font-size: 14px;\n }\n \n .two {\n flex: 2;\n }\n\n button[data-state='correct'] {\n background-color: var(--key-bg-correct);\n color: var(--key-evaluated-text-color);\n }\n\n button[data-state='present'] {\n background-color: var(--key-bg-present);\n color: var(--key-evaluated-text-color);\n }\n\n button[data-state='absent'] {\n background-color: var(--key-bg-absent);\n color: var(--key-evaluated-text-color);\n }\n\n </style>\n <div id=\"keyboard\"></div>\n"; 
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [
            ["↵", "ձ", "յ", "օ", "ռ", "ժ", "←"],
            ["խ", "վ", "է", "ր", "դ", "ե", "ը", "ի", "ո", "բ", "չ", "ջ"],
            ["ա", "ս", "տ", "ֆ", "կ", "հ", "ճ", "ք", "լ", "թ", "փ"],
            ["զ", "ց", "գ", "ւ", "պ", "ն", "մ", "շ", "ղ", "ծ"],
        ],
        us = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "letterEvaluations",
                set: function(e) {
                    this._letterEvaluations = e, this._render()
                }
            }, {
                key: "dispatchKeyPressEvent",
                value: function(e) {
                	console.log(e);
                    this.dispatchEvent(new CustomEvent("game-key-press", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            key: e
                        }
                    }))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })), window.addEventListener("keydown", (function(a) {
                        if (!0 !== a.repeat) {
                            var s = a.key,
                                t = a.metaKey,
                                o = a.ctrlKey;
                            t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })), ds.forEach((function(a) {
                        var s = document.createElement("div");
                        s.classList.add("row"), a.forEach((function(e) {
                            var a;
                            if (e >= "a" && e <= "z" || e >= "ա" && e <= "ֆ" || "←" === e || "↵" === e) {
                                if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                                }
                                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                            } else(a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })), e.$keyboard.appendChild(s)
                    })), this._render()
                }
            }, {
                key: "_render",	
                value: function() {
                    for (var e in this._letterEvaluations) {
                        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                    }
                }
            }]), t
        }(c(HTMLElement));
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function cs(e, a, s, t) {
        return new(s || (s = Promise))((function(o, n) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
                    e(a)
                }))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }))
    }

    function ps(e, a) {
        var s, t, o, n, r = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function i(n) {
            return function(i) {
                return function(n) {
                    if (s) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done) return o;
                        switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, t = n[1], n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < o[1]) {
                                    r.label = o[1], o = n;
                                    break
                                }
                                if (o && r.label < o[2]) {
                                    r.label = o[2], r.ops.push(n);
                                    break
                                }
                                o[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        n = a.call(e, r)
                    } catch (e) {
                        n = [6, e], t = 0
                    } finally {
                        s = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    }
    customElements.define("game-keyboard", us),
        function() {
            (console.warn || console.log).apply(console, arguments)
        }.bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator,
        fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
        vs = "undefined" == typeof window ? void 0 : window,
        ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function() {
        this.success = !1
    };

    function zs(e, a, s) {
        for (var t in e.success = !0, a) {
            var o = a[t],
                n = s.clipboardData;
            n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }

    function js(e) {
        var a = new xs,
            s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }

    function Ss(e, a) {
        _s(e);
        var s = js(a);
        return qs(), s
    }

    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
        }
    }

    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }

    function Es(e) {
        return cs(this, void 0, void 0, (function() {
            var a;
            return ps(this, (function(s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                    if (!a) throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"], ws.clipboardData.setData("Text", t)) return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a), s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e, s.appendChild(t), document.body.appendChild(a), _s(t);
                    var o = document.execCommand("copy");
                    return qs(), document.body.removeChild(a), o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }))
        }))
    }

    function As(e, a, s) {
        try {
            t = navigator.userAgent || navigator.vendor || window.opera, !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
                return cs(this, void 0, void 0, (function() {
                    return ps(this, (function(a) {
                        if (ks) return [2, ks(e)];
                        if (!Es(function(e) {
                                var a = {};
                                return a["text/plain"] = e, a
                            }(e))) throw new Error("writeText() failed");
                        return [2]
                    }))
                }))
            }(e.text).then(a, s) : navigator.share(e)
        } catch (e) {
            s()
        }
        var t
    }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1; padding: 0 7px;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>ՎԻՃԱԿԱԳՐՈՒԹԻՒՆ</h1>\n    <div id="statistics"></div>\n    <h1>ՓՈՐՁԵՐՈՒ ՀԱՇԻՒԸ</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>ՅԱՋՈՐԴ ԲԱՌԸ</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      ԲԱԺՆԵԼ <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
            currentStreak: "Ընթացիկ յաղթական շարքը",
            maxStreak: "Ամէնէն երկար յաղթական շարքը",
            winPercentage: "Լուծուած %",
            gamesPlayed: "Խաղցած",
            gamesWon: "Won",
            averageGuesses: "Av. Guesses"
        },
        Os = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({
                    mode: "open"
                }), e.stats = Xa(), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                    var a = this.shadowRoot.getElementById("statistics"),
                        s = this.shadowRoot.getElementById("guess-distribution"),
                        t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                    if (Object.values(this.stats.guesses).every((function(e) {
                            return 0 === e
                        }))) {
                        var o = document.createElement("div");
                        o.classList.add("no-data"), o.innerText = "No Data", s.appendChild(o)
                    } else
                        for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                            var r = n,
                                i = this.stats.guesses[n],
                                l = Ts.content.cloneNode(!0),
                                d = Math.max(7, Math.round(i / t * 100));
                            l.querySelector(".guess").textContent = r;
                            var u = l.querySelector(".graph-bar");
                            if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
                                l.querySelector(".num-guesses").textContent = i, i > 0 && u.classList.add("align-right");
                                var c = parseInt(this.getAttribute("highlight-guess"), 10);
                                c && n === c && u.classList.add("highlight")
                            }
                            s.appendChild(l)
                        }
                    if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                            var t = Ms[s],
                                o = e.stats[s],
                                n = Ls.content.cloneNode(!0);
                            n.querySelector(".label").textContent = t, n.querySelector(".statistic").textContent = o, a.appendChild(n)
                        })), this.gameApp.gameStatus !== Za) {
                        var p = this.shadowRoot.querySelector(".footer"),
                            m = Is.content.cloneNode(!0);
                        p.appendChild(m), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                            a.preventDefault(), a.stopPropagation();
                            As(function(e) {
                                var a = e.evaluations,
                                    s = e.dayOffset,
                                    t = e.rowIndex,
                                    o = e.isHardMode,
                                    n = e.isWin,
                                    r = JSON.parse(window.localStorage.getItem(j)),
                                    i = JSON.parse(window.localStorage.getItem(S)),
                                    l = "Բառիկ ".concat(s);
                                l += " ".concat(n ? t : "X", "/").concat(6), o && (l += "*");
                                var d = "";
                                return a.forEach((function(e) {
                                    e && (e.forEach((function(e) {
                                        if (e) {
                                            var a = "";
                                            switch (e) {
                                                case Ma:
                                                    a = function(e) {
                                                        return e ? "🟧" : "🟩"
                                                    }(i);
                                                    break;
                                                case Ia:
                                                    a = function(e) {
                                                        return e ? "🟦" : "🟨"
                                                    }(i);
                                                    break;
                                                case Oa:
                                                    a = function(e) {
                                                        return e ? "⬛" : "⬜"
                                                    }(r)
                                            }
                                            d += a
                                        }
                                    })), d += "\n")
                                })), {
                                    text: "".concat(l, "\n\n").concat(d.trimEnd())
                                }
                            }({
                                evaluations: e.gameApp.evaluations,
                                dayOffset: e.gameApp.dayOffset,
                                rowIndex: e.gameApp.rowIndex,
                                isHardMode: e.gameApp.hardMode,
                                isWin: e.gameApp.gameStatus === es
                            }), (function() {
                                e.gameApp.addToast("Copied", 2e3, !0)
                            }), (function() {
                                e.gameApp.addToast("Share failed", 2e3, !0)
                            }))
                        }))
                    }
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 62px;\n    height: 62px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Կռահէ Բառիկը 6 փորձերով։</p>\n      <p>Ամէն մէկ փորձը պէտք է 5-տառնոց բառ մը ըլլայ։ Enter կոխէ որպէսզի փորձես այդ բառը։</p>\n      <p>Ամէն մէկ կռահումէ ետք, տուփիկներուն գոյները կը փոխուին ցոյց տալու համար որքան մօտեցած ես պատասխանին։</p>\n      <div class="examples">\n        <p><strong>Օրինակ</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="շ" evaluation="correct" reveal></game-tile>\n            <game-tile letter="ե"></game-tile>\n            <game-tile letter="ր"></game-tile>\n            <game-tile letter="ե"></game-tile>\n            <game-tile letter="փ"></game-tile>\n          </div>\n          <p><strong>շ</strong> տառը կանաչ է որովհետեւ ճիշդ տառ մըն է, ճիշդ տուփիկին մէջ:</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="թ"></game-tile>\n            <game-tile letter="ո" evaluation="present" reveal></game-tile>\n            <game-tile letter="ւ"></game-tile>\n            <game-tile letter="ղ"></game-tile>\n            <game-tile letter="թ"></game-tile>\n          </div>\n          <p><strong>ո</strong> տառը դեղին է որովհետեւ ճիշդ տառ մըն է, բայց տուփիկը սխալ։</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="շ"></game-tile>\n            <game-tile letter="ա"></game-tile>\n            <game-tile letter="պ"></game-tile>\n            <game-tile letter="ի" evaluation="absent" reveal></game-tile>\n            <game-tile letter="կ"></game-tile>\n          </div>\n          <p><strong>ի</strong> տառը մոխրագոյն է որովհետեւ այսօրուան Բառիկին մէջ ի չկայ։</p>\n        </div>\n      </div>\n      <p><strong>Նոր Բառիկներ պիտի ըլլան ամէն օր։ Բարի վայելում։ 🙂<strong></p>\n    </div>\n  </section>\n'
    var Hs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {

                this.shadowRoot.appendChild($s.content.cloneNode(!0))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    })), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
            help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
            settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
            backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
            close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
            share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
            statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
        },
        Fs = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({
                    mode: "open"
                }), e
            }
            return o(t, [{
                key: "connectedCallback",
                value: function() {
                    this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                    var e = this.getAttribute("icon");
                    this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                }
            }]), t
        }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
        Js = 36e5,
        Us = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), n(p(e = a.call(this)), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({
                    mode: "open"
                });
                var o = new Date;
                return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
            }
            return o(t, [{
                key: "padDigit",
                value: function(e) {
                    return e.toString().padStart(2, "0")
                }
            }, {
                key: "updateTimer",
                value: function() {
                    var e, a = (new Date).getTime(),
                        s = Math.floor(this.targetEpochMS - a);
                    if (s <= 0) e = "00:00:00";
                    else {
                        var t = Math.floor(s % 864e5 / Js),
                            o = Math.floor(s % Js / Ys),
                            n = Math.floor(s % Ys / 1e3);
                        e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                    }
                    this.$timer.textContent = e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ws.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                        e.updateTimer()
                    }), 200)
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }]), t
        }(c(HTMLElement));
    return customElements.define("countdown-timer", Us), e.CountdownTimer = Us, e.GameApp = ts, e.GameHelp = Hs, e.GameIcon = Fs, e.GameKeyboard = us, e.GameModal = ns, e.GamePage = Ds, e.GameRow = x, e.GameSettings = _a, e.GameStats = Os, e.GameSwitch = Ps, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Aa, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
