(function () {
  "use strict";
  var e = {5439: function (e, t, s) {
    var a = s(9242), o = s(3396);
    const r = {id: "app"};
    function l(e, t, s, a, l, i) {
      const n = (0, o.up)("router-view");
      return (0, o.wg)(), (0, o.iD)("div", r, [(0, o.Wm)(n)]);
    }
    var i = {name: "App"}, n = s(89);
    const c = (0, n.Z)(i, [["render", l]]);
    var u = c, d = s(2483), g = s(7139);
    const p = e => ((0, o.dD)("data-v-5375f4f6"), e = e(), (0, o.Cn)(), e), h = {class: "bg-gray-100 min-h-screen p-8"}, m = {class: "bg-blue-500 text-white p-4"}, f = {key: 0, class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4", role: "alert"}, b = p(() => (0, o._)("strong", {class: "font-bold"}, "Error!", -1)), y = p(() => (0, o._)("br", null, null, -1)), w = {class: "block sm:inline"}, v = {class: "absolute top-0 bottom-0 right-0 px-4 py-3"}, x = p(() => (0, o._)("title", null, "Close", -1)), _ = p(() => (0, o._)("path", {d: "M14.348 14.849a1 1 0 0 1-1.414 0L10 11.414l-2.93 2.93a1 1 0 1 1-1.414-1.414l2.93-2.93-2.93-2.93a1 1 0 1 1 \n                    1.414-1.414l2.93 2.93 2.93-2.93a1 1 0 1 1 1.414 1.414l-2.93 2.93 2.93 2.93a1 1 0 0 1 0 1.414z"}, null, -1)), D = [x, _], k = {class: "bg-white p-6 rounded-lg shadow-lg mt-4"}, P = p(() => (0, o._)("h2", {class: "text-2xl font-semibold mb-4"}, "API Explorer", -1)), I = {class: "rounded-lg p-4 mb-4 bg-green-200"}, C = {class: "flex items-center justify-between"}, R = p(() => (0, o._)("div", {class: "w-12 h-12 flex items-center justify-center bg-green-500 text-white font-semibold rounded-lg"}, " GET", -1)), j = {class: "flex items-center"}, O = p(() => (0, o._)("h3", {class: "text-lg font-semibold"}, "/image", -1)), T = {key: 0, class: "bg-white rounded p-4 mt-2"}, W = (0, o.uE)('<p class="text-gray-600" data-v-5375f4f6>Returns a random cat or dog image from the trained dataset.</p><div class="mt-4" data-v-5375f4f6><h4 class="text-lg font-semibold" data-v-5375f4f6>Request Headers</h4><ul class="list-disc ml-4" data-v-5375f4f6><li data-v-5375f4f6>Content-Type: application/json</li></ul></div><div class="mt-4" data-v-5375f4f6><h4 class="text-lg font-semibold" data-v-5375f4f6>Response Types</h4><ul class="list-disc ml-4" data-v-5375f4f6><li data-v-5375f4f6>Image/jpeg</li></ul></div>', 3), q = {class: "mt-4"}, U = ["href"], $ = ["src"], A = p(() => (0, o._)("br", {class: "clear-both"}, null, -1)), M = {class: "rounded-lg p-4 mb-4 bg-purple-200"}, G = {class: "flex items-center justify-between"}, E = p(() => (0, o._)("div", {class: "w-12 h-12 flex items-center justify-center bg-purple-500 text-white font-semibold rounded-lg"}, " POST", -1)), S = {class: "flex items-center"}, B = p(() => (0, o._)("h3", {class: "text-lg font-semibold"}, "/classify", -1)), K = {key: 0, class: "bg-white rounded p-4 mt-2"}, z = p(() => (0, o._)("p", {class: "text-gray-600"}, "Determine whether the supplied image is a dog or a cat using superior AI technology. Returns undetermined in any other case.", -1)), H = {class: "mt-4"}, Z = p(() => (0, o._)("h4", {class: "text-lg font-semibold"}, "Paid API", -1)), L = p(() => (0, o._)("p", {class: "text-gray-600"}, "This API endpoint is only available to our paying users. A demo that can only be used on this site is available below.", -1)), J = {class: "mt-4"}, F = p(() => (0, o._)("h4", {class: "text-lg font-semibold"}, "Request Headers", -1)), N = {class: "list-disc ml-4"}, V = p(() => (0, o._)("li", null, "Content-Type: multipart/form-data", -1)), X = p(() => (0, o._)("div", {class: "mt-4"}, [(0, o._)("h4", {class: "text-lg font-semibold"}, "Response Types"), (0, o._)("ul", {class: "list-disc ml-4"}, [(0, o._)("li", null, "JSON")])], -1)), Q = {class: "mt-4"}, Y = {key: 0, class: "text-red-500 text-sm mt-2"}, ee = {key: 1, class: "mt-4"}, te = p(() => (0, o._)("h4", {class: "text-lg font-semibold"}, "Classification Result", -1)), se = {class: "text-gray-600"}, ae = {class: "font-semibold"}, oe = ["disabled"], re = p(() => (0, o._)("br", {class: "clear-both"}, null, -1));
    function le(e, t, s, r, l, i) {
      const n = (0, o.up)("router-link");
      return (0, o.wg)(), (0, o.iD)("div", h, [(0, o._)("header", m, [(0, o.Wm)(n, {to: "/pricing", class: "mr-4 hover:underline"}, {default: (0, o.w5)(() => [(0, o.Uk)("Pricing")]), _: 1}), (0, o.Wm)(n, {to: "/about", class: "mr-4 hover:underline"}, {default: (0, o.w5)(() => [(0, o.Uk)("About")]), _: 1})]), l.errorMessage ? ((0, o.wg)(), (0, o.iD)("div", f, [b, y, (0, o._)("span", w, (0, g.zw)(l.errorMessage), 1), (0, o._)("span", v, [((0, o.wg)(), (0, o.iD)("svg", {onClick: t[0] || (t[0] = e => l.errorMessage = null), class: "fill-current h-6 w-6 text-red-500", role: "button", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20"}, D))])])) : (0, o.kq)("", true), (0, o._)("div", k, [P, (0, o._)("div", I, [(0, o._)("div", C, [R, (0, o._)("div", j, [O, (0, o._)("button", {onClick: t[1] || (t[1] = (...e) => i.toggleGetDetails && i.toggleGetDetails(...e)), class: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-4"}, "Toggle")])]), l.showGetDetails ? ((0, o.wg)(), (0, o.iD)("div", T, [W, (0, o._)("div", q, [l.imageData ? ((0, o.wg)(), (0, o.iD)("a", {key: 0, href: l.imageData, download: "image.jpg"}, [l.imageData ? ((0, o.wg)(), (0, o.iD)("img", {key: 0, src: l.imageData, class: "w-64 mx-auto shadow-lg rounded"}, null, 8, $)) : (0, o.kq)("", true)], 8, U)) : (0, o.kq)("", true)]), (0, o._)("button", {onClick: t[2] || (t[2] = (...e) => i.tryGetRequest && i.tryGetRequest(...e)), class: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4 float-right"}, " Try It "), A])) : (0, o.kq)("", true)]), (0, o._)("div", M, [(0, o._)("div", G, [E, (0, o._)("div", S, [B, (0, o._)("button", {onClick: t[3] || (t[3] = (...e) => i.togglePostDetails && i.togglePostDetails(...e)), class: "px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 ml-4"}, "Toggle")])]), l.showPostDetails ? ((0, o.wg)(), (0, o.iD)("div", K, [z, (0, o._)("div", H, [Z, L, (0, o.Wm)(n, {to: "/pricing", class: "text-blue-500"}, {default: (0, o.w5)(() => [(0, o.Uk)("Upgrade to Pro")]), _: 1})]), (0, o._)("div", J, [F, (0, o._)("ul", N, [V, (0, o._)("li", null, "Authorization: Bearer " + (0, g.zw)(l.apiKey), 1)])]), X, (0, o._)("div", Q, [(0, o.wy)((0, o._)("input", {"onUpdate:modelValue": t[4] || (t[4] = e => l.apiKey = e), class: "w-full border rounded p-2", placeholder: "Enter API Key"}, null, 512), [[a.nr, l.apiKey]])]), (0, o._)("input", {type: "file", ref: "imageInput", class: "mt-4", accept: "image/*", onChange: t[5] || (t[5] = (...e) => i.handleImageChange && i.handleImageChange(...e))}, null, 544), l.selectedImage && "image/jpeg" !== l.selectedImage.type ? ((0, o.wg)(), (0, o.iD)("label", Y, "Only JPEG images are supported")) : (0, o.kq)("", true), l.classificationResult ? ((0, o.wg)(), (0, o.iD)("div", ee, [te, (0, o._)("p", se, [(0, o.Uk)("The image is "), (0, o._)("span", ae, (0, g.zw)(l.classificationResult), 1), (0, o.Uk)(". ")])])) : (0, o.kq)("", true), (0, o._)("button", {onClick: t[6] || (t[6] = (...e) => i.tryPostRequest && i.tryPostRequest(...e)), disabled: l.tryOutPostDisabled, class: (0, g.C_)(["bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mt-4 float-right", {"opacity-50 cursor-not-allowed": l.tryOutPostDisabled}])}, " Try It ", 10, oe), re])) : (0, o.kq)("", true)])])]);
    }
    s(8858), s(1318), s(3228);
    var ie = {data() {
      return {showGetDetails: false, showPostDetails: false, apiKey: "", selectedImage: null, classificationResult: null, imageData: null, tryOutPostDisabled: true, errorMessage: null};
    }, methods: {toggleGetDetails() {
      this.showGetDetails = !this.showGetDetails, this.showPostDetails = false, this.errorMessage = null;
    }, togglePostDetails() {
      this.showPostDetails = !this.showPostDetails, this.showGetDetails = false, this.errorMessage = null, this.classificationResult = null;
    }, async tryGetRequest() {
      try {
        const e = await this.$http.get("/image", {responseType: "arraybuffer"}), t = new Blob([e.data], {type: "image/jpeg"}), s = URL.createObjectURL(t);
        this.imageData = s, this.errorMessage = null;
      } catch (e) {
        console.error("Error fetching random image:", e), this.errorMessage = e.message;
      }
    }, async tryPostRequest() {
      const e = new FormData;
      e.append("image", this.selectedImage);
      const t = {headers: {"Content-Type": "multipart/form-data"}};
      try {
        let s;
        if (this.apiKey) t.headers.Authorization = `Bearer ${this.apiKey}`, s = await this.$http.post("/classify", e, t); else {
          t.headers["X-Playground"] = "true";
          const a = `/proxy?url=http://${this.siteDomain}/classify`;
          s = await this.$proxy.post(a, e, t);
        }
        this.classificationResult = s.data, this.errorMessage = null;
      } catch (s) {
        console.error("Error classifying image:", s), this.errorMessage = s.message, s.response && (this.errorMessage += `: - ${s.response.data}`), this.classificationResult = null;
      }
    }, handleImageChange(e) {
      this.selectedImage = e.target.files[0], this.tryOutPostDisabled = null === this.selectedImage || "image/jpeg" !== this.selectedImage.type;
    }}};
    const ne = (0, n.Z)(ie, [["render", le], ["__scopeId", "data-v-5375f4f6"]]);
    var ce = ne;
    const ue = {class: "bg-gray-100 min-h-screen p-8"}, de = {class: "bg-blue-500 text-white p-4"}, ge = {class: "bg-gray-100 p-6 rounded-lg shadow-lg"}, pe = (0, o._)("h2", {class: "text-2xl font-semibold mb-4"}, "Pricing", -1), he = {class: "flex justify-between"}, me = {class: "w-48 p-4 rounded-lg bg-blue-200"}, fe = (0, o._)("h3", {class: "text-lg font-semibold text-blue-500 mb-2"}, "Basic Plan", -1), be = (0, o._)("p", {class: "text-gray-600 mb-2"}, "Perfect for small teams and individuals.", -1), ye = (0, o._)("p", {class: "text-2xl font-semibold text-blue-500"}, "$9.99/mo", -1), we = {class: "w-48 p-4 rounded-lg bg-purple-200"}, ve = (0, o._)("h3", {class: "text-lg font-semibold text-purple-500 mb-2"}, "Pro Plan", -1), xe = (0, o._)("p", {class: "text-gray-600 mb-2"}, "Ideal for businesses and large teams.", -1), _e = (0, o._)("p", {class: "text-2xl font-semibold text-purple-500"}, "$29.99/mo", -1);
    function De(e, t, s, a, r, l) {
      const i = (0, o.up)("router-link");
      return (0, o.wg)(), (0, o.iD)("div", ue, [(0, o._)("header", de, [(0, o.Wm)(i, {to: "/", class: "mr-4 hover:underline"}, {default: (0, o.w5)(() => [(0, o.Uk)("Home")]), _: 1}), (0, o.Wm)(i, {to: "/about", class: "mr-4 hover:underline"}, {default: (0, o.w5)(() => [(0, o.Uk)("About")]), _: 1})]), (0, o._)("div", ge, [pe, (0, o._)("div", he, [(0, o._)("div", me, [fe, be, ye, (0, o._)("button", {class: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2", onClick: t[0] || (t[0] = (...e) => l.getStarted && l.getStarted(...e))}, "Contact us")]), (0, o._)("div", we, [ve, xe, _e, (0, o._)("button", {class: "bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mt-2", onClick: t[1] || (t[1] = (...e) => l.getStarted && l.getStarted(...e))}, "Contact us")])])])]);
    }
    var ke = {name: "PricingPage", methods: {getStarted() {
      window.location.href = "mailto:whoami@honeylab.hu";
    }}};
    const Pe = (0, n.Z)(ke, [["render", De]]);
    var Ie = Pe;
    const Ce = {class: "bg-gray-100 min-h-screen p-8"}, Re = {class: "bg-blue-500 text-white p-4"}, je = {class: "bg-gray-100 p-6 rounded-lg shadow-lg"}, Oe = (0, o._)("h2", {class: "text-3xl font-semibold text-blue-500 mb-4"}, "Welcome to Whoami", -1), Te = {class: "prose lg:prose-xl lg:prose-xl bg-gray-100"}, We = (0, o.uE)('<p>Dive into the extraordinary world of pet recognition with Whoami, a cutting-edge creation by Honeylab Technologies. TM</p><br class="clear-both"><p>Immerse yourself in a realm where technology meets your pets, where we decode the language of tails, purrs, and barks. Whoami isn&#39;t just a product; it&#39;s a pet lover&#39;s dream come true.</p><p>Our revolutionary AI algorithms are on a mission to understand the unique personalities of your cats and dogs. With every pawprint and whisker, Whoami becomes a better friend to your furry companions.</p><br class="clear-both"><p>🐾 <strong>Join the Beta Journey:</strong> Whoami is currently in its beta phase, and our AI is eager to learn. Be part of this exciting adventure as we train and refine Whoami. Help us shape the future of pet interaction. </p><br class="clear-both"><p>🎉 <strong>Subscribe Today:</strong> Unlock the power of Whoami and embark on an enchanting journey with your pets. Subscribe now and witness the magic of pet recognition unfold.</p><br class="clear-both"><p>Whoami: Bringing pet owners and their four-legged family members closer than ever before. Discover the extraordinary in the ordinary.</p><br class="clear-both">', 11), qe = (0, o._)("p", null, [(0, o._)("strong", null, "This project is currently in a beta phase. In order to get your own API key, you must contact the sales team at the Pricing page.")], -1);
    function Ue(e, t, s, a, r, l) {
      const i = (0, o.up)("router-link"), n = (0, o.up)("center");
      return (0, o.wg)(), (0, o.iD)("div", Ce, [(0, o._)("header", Re, [(0, o.Wm)(i, {to: "/", class: "mr-4 hover:underline"}, {default: (0, o.w5)(() => [(0, o.Uk)("Home")]), _: 1}), (0, o.Wm)(i, {to: "/pricing", class: "mr-4 hover:underline"}, {default: (0, o.w5)(() => [(0, o.Uk)("Pricing")]), _: 1})]), (0, o._)("div", je, [Oe, (0, o._)("article", Te, [We, (0, o.Wm)(n, null, {default: (0, o.w5)(() => [qe]), _: 1})])])]);
    }
    var $e = {name: "AboutCompany"};
    const Ae = (0, n.Z)($e, [["render", Ue]]);
    var Me = Ae;
    const Ge = [{path: "/", component: ce}, {path: "/pricing", component: Ie}, {path: "/about", component: Me}], Ee = (0, d.p7)({history: (0, d.r5)(), routes: Ge});
    var Se = Ee, Be = s(4161);
    const Ke = (0, a.ri)(u), ze = 53499, He = 25998, Ze = `${window.location.protocol}//${window.location.hostname}:${ze}`, Le = `${window.location.protocol}//${window.location.hostname}:${He}`;
    Ke.config.globalProperties.siteDomain = "whoami.honeylab.hu", Ke.config.globalProperties.$http = Be.Z.create({baseURL: Ze}), Ke.config.globalProperties.$proxy = Be.Z.create({baseURL: Le}), Ke.use(Se), Ke.mount("#app");
  }}, t = {};
  function s(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var r = t[a] = {exports: {}};
    return e[a].call(r.exports, r, r.exports, s), r.exports;
  }
  s.m = e, function () {
    var e = [];
    s.O = function (t, a, o, r) {
      if (!a) {
        var l = Infinity;
        for (u = 0; u < e.length; u++) {
          a = e[u][0], o = e[u][1], r = e[u][2];
          for (var i = true, n = 0; n < a.length; n++) (false & r || l >= r) && Object.keys(s.O).every(function (e) {
            return s.O[e](a[n]);
          }) ? a.splice(n--, 1) : (i = false, r < l && (l = r));
          if (i) {
            e.splice(u--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      r = r || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
      e[u] = [a, o, r];
    };
  }(), function () {
    s.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return s.d(t, {a: t}), t;
    };
  }(), function () {
    s.d = function (e, t) {
      for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, {enumerable: true, get: t[a]});
    };
  }(), function () {
    s.g = function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    }();
  }(), function () {
    s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
  }(), function () {
    var e = {143: 0};
    s.O.j = function (t) {
      return 0 === e[t];
    };
    var t = function (t, a) {
      var o, r, l = a[0], i = a[1], n = a[2], c = 0;
      if (l.some(function (t) {
        return 0 !== e[t];
      })) {
        for (o in i) s.o(i, o) && (s.m[o] = i[o]);
        if (n) var u = n(s);
      }
      for (t && t(a); c < l.length; c++) r = l[c], s.o(e, r) && e[r] && e[r][0](), e[r] = 0;
      return s.O(u);
    }, a = self.webpackChunkwhoami = self.webpackChunkwhoami || [];
    a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a));
  }();
  var a = s.O(void 0, [998], function () {
    return s(5439);
  });
  a = s.O(a);
}());
