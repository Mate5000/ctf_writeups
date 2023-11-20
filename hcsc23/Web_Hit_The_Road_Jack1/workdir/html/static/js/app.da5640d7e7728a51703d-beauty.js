webpackJsonp([1], {
    "4viP": function(e, r) {},
    NHnr: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = t("7+uW"),
            s = {
                render: function() {
                    var e = this.$createElement,
                        r = this._self._c || e;
                    return r("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [r("router-view")], 1)
                },
                staticRenderFns: []
            };
        var i = t("VU/8")({
                name: "App"
            }, s, !1, function(e) {
                t("4viP")
            }, null, null).exports,
            o = t("/ocq"),
            n = t("Xxa5"),
            l = t.n(n),
            d = t("mvHQ"),
            u = t.n(d),
            v = t("exGp"),
            c = t.n(v),
            m = {
                data: function() {
                    return {
                        number: "Loading...",
                        guess: null,
                        showForm: !1,
                        showResult: !1,
                        showStatus: !0,
                        result: null,
                        status: "Establishing connection...",
                        randomColor: "#000000",
                        inverseColor: "#FFFFFF",
                        cardNumber: "",
                        cardName: "",
                        expiryDate: "",
                        cvv: "",
                        isCardNumberValid: !1,
                        isCardNameValid: !1,
                        isExpiryDateValid: !1,
                        isCvvValid: !1,
                        showCardNumberError: !0,
                        showCardNameError: !0,
                        showExpDateError: !0,
                        showCvvError: !0
                    }
                },
                created: function() {
                    var e = this,
                        r = "ws://" + window.location.host.split(":")[0] + ":53530/ws/numbers",
                        t = new WebSocket(r);
                    this.showStatus = !1, t.onmessage = function(r) {
                        var t = JSON.parse(r.data);
                        "newNumber" === t.type && (e.number = t.value, e.showForm = !0, e.showResult = !1, e.result = null, e.randomColor = "#" + Math.floor(16777215 * Math.random()).toString(16), e.inverseColor = "#" + (16777215 ^ parseInt(e.randomColor.substring(1), 16)).toString(16))
                    }, t.onclose = function() {
                        e.number = "Connection closed", e.randomColor = "black", e.inverseColor = "red", e.showForm = !1, e.showResult = !1
                    }
                },
                computed: {
                    isFormValid: function() {
                        return this.isCardNumberValid && this.isCardNameValid && this.isExpiryDateValid && this.isCvvValid
                    }
                },
                methods: {
                    formatCardNumber: function() {
                        var e = this.cardNumber.replace(/\s/g, "");
                        16 !== e.length && (this.isCardNumberValid = !1, this.showCardNumberError = !0), this.cardNumber = e.replace(/(\d{4})/g, "$1 ").trim(), this.isCardNumberValid = 16 === e.length, this.isCardNumberValid && (this.showCardNumberError = !1)
                    },
                    formatExpiryDate: function() {
                        var e = this.expiryDate.replace(/\s/g, "").replace(/\//g, "");
                        if (4 !== e.length) return this.isExpiryDateValid = !1, void(this.showExpDateError = !0);
                        this.expiryDate = e.replace(/(\d{2})(\d{2})/, "$1/$2").trim(), this.isExpiryDateValid = !0, this.showExpDateError = !1
                    },
                    formatName: function() {
                        this.showCardNameError = 0 === this.cardName.length, this.isCardNameValid = !this.showCardNameError
                    },
                    formatCvv: function() {
                        var e = this.cvv.replace(/\s/g, "");
                        if (3 !== e.length) return this.isCvvValid = !1, void(this.showCvvError = !0);
                        this.cvv = e, this.isCvvValid = 3 === e.length, this.isCvvValid && (this.showCvvError = !1)
                    },
                    submitGuess: function() {
                        var e = this;
                        return c()(l.a.mark(function r() {
                            var t, a, s;
                            return l.a.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, t = "http://" + window.location.host.split(":")[0] + ":53530/post/send_number", r.next = 4, fetch(t, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: u()({
                                                number: e.guess,
                                                cardNumber: e.cardNumber,
                                                cardName: e.cardName,
                                                expiryDate: e.expiryDate,
                                                cvv: e.cvv
                                            })
                                        });
                                    case 4:
                                        return a = r.sent, r.next = 7, a.text();
                                    case 7:
                                        s = r.sent, e.result = s, e.showResult = !0, e.showForm = !0, r.next = 16;
                                        break;
                                    case 13:
                                        r.prev = 13, r.t0 = r.catch(0), console.error(r.t0);
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }, r, e, [
                                [0, 13]
                            ])
                        }))()
                    }
                }
            },
            p = {
                render: function() {
                    var e = this,
                        r = e.$createElement,
                        t = e._self._c || r;
                    return t("div", {
                        staticClass: "casino"
                    }, [t("h1", {
                        staticClass: "title"
                    }, [e._v("Hit the road Jack Casino")]), e._v(" "), e._m(0), e._v(" "), t("br"), e._v(" "), e.showStatus ? t("p", [e._v("Status: " + e._s(e.status))]) : e._e(), e._v(" "), t("p", {
                        staticClass: "next"
                    }, [e._v("Ă°Ĺ¸Ĺ˝â€° The last winner number: "), t("span", {
                        style: {
                            color: e.randomColor,
                            backgroundColor: e.inverseColor
                        }
                    }, [e._v(e._s(e.number))])]), e._v(" "), e.showForm ? t("form", {
                        on: {
                            submit: function(r) {
                                return r.preventDefault(), e.submitGuess.apply(null, arguments)
                            }
                        }
                    }, [t("label", {
                        attrs: {
                            for: "guess"
                        }
                    }, [e._v("Guess the next number:")]), e._v(" "), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.number",
                            value: e.guess,
                            expression: "guess",
                            modifiers: {
                                number: !0
                            }
                        }],
                        attrs: {
                            type: "number",
                            id: "guess",
                            required: ""
                        },
                        domProps: {
                            value: e.guess
                        },
                        on: {
                            input: function(r) {
                                r.target.composing || (e.guess = e._n(r.target.value))
                            },
                            blur: function(r) {
                                return e.$forceUpdate()
                            }
                        }
                    }), e._v(" "), t("label", {
                        attrs: {
                            for: "card-number"
                        }
                    }, [e._v("Card Number:")]), e._v(" "), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.cardNumber,
                            expression: "cardNumber"
                        }],
                        class: {
                            "is-invalid": !e.isCardNumberValid
                        },
                        attrs: {
                            id: "card-number",
                            type: "text",
                            placeholder: "XXXX XXXX XXXX XXXX",
                            maxlength: "19"
                        },
                        domProps: {
                            value: e.cardNumber
                        },
                        on: {
                            input: [function(r) {
                                r.target.composing || (e.cardNumber = r.target.value)
                            }, e.formatCardNumber]
                        }
                    }), e._v(" "), e.showCardNumberError ? t("div", {
                        staticClass: "invalid-feedback"
                    }, [e._v("Please enter a valid card number.")]) : e._e(), e._v(" "), t("label", {
                        attrs: {
                            for: "card-name"
                        }
                    }, [e._v("Name on Card:")]), e._v(" "), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.cardName,
                            expression: "cardName"
                        }],
                        class: {
                            "is-invalid": !e.isCardNameValid
                        },
                        attrs: {
                            id: "card-name",
                            type: "text",
                            placeholder: "John Doe"
                        },
                        domProps: {
                            value: e.cardName
                        },
                        on: {
                            input: [function(r) {
                                r.target.composing || (e.cardName = r.target.value)
                            }, e.formatName]
                        }
                    }), e._v(" "), e.showCardNameError ? t("div", {
                        staticClass: "invalid-feedback"
                    }, [e._v("Please enter the name on the card.")]) : e._e(), e._v(" "), t("label", {
                        attrs: {
                            for: "expiry-date"
                        }
                    }, [e._v("Expiry Date:")]), e._v(" "), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.expiryDate,
                            expression: "expiryDate"
                        }],
                        class: {
                            "is-invalid": !e.isExpiryDateValid
                        },
                        attrs: {
                            id: "expiry-date",
                            type: "text",
                            placeholder: "12/23",
                            maxlength: "5"
                        },
                        domProps: {
                            value: e.expiryDate
                        },
                        on: {
                            input: [function(r) {
                                r.target.composing || (e.expiryDate = r.target.value)
                            }, e.formatExpiryDate]
                        }
                    }), e._v(" "), e.showExpDateError ? t("div", {
                        staticClass: "invalid-feedback"
                    }, [e._v("Please enter a valid expiry date in MM/YY format.")]) : e._e(), e._v(" "), t("label", {
                        attrs: {
                            for: "cvv"
                        }
                    }, [e._v("CVV:")]), e._v(" "), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.cvv,
                            expression: "cvv"
                        }],
                        class: {
                            "is-invalid": !e.isCvvValid
                        },
                        attrs: {
                            id: "cvv",
                            type: "text",
                            placeholder: "123",
                            maxlength: "3"
                        },
                        domProps: {
                            value: e.cvv
                        },
                        on: {
                            input: [function(r) {
                                r.target.composing || (e.cvv = r.target.value)
                            }, e.formatCvv]
                        }
                    }), e._v(" "), e.showCvvError ? t("div", {
                        staticClass: "invalid-feedback"
                    }, [e._v("Please enter a valid CVV code.")]) : e._e(), e._v(" "), t("button", {
                        staticClass: "btn",
                        attrs: {
                            type: "submit",
                            disabled: !e.isFormValid
                        }
                    }, [e._v("Submit")])]) : e._e(), e._v(" "), e.showResult ? t("p", [e._v(e._s(e.result))]) : e._e(), e._v(" "), t("p", {
                        staticClass: "url-text"
                    }, [e._v("k4kfissxtqlu5rot2vvbizvhls4wotdtysfqfk6az32zpixfztp4vpxq.onion - Copyright Ă‚Â© 2021 - v1.0")])])
                },
                staticRenderFns: [function() {
                    var e = this.$createElement,
                        r = this._self._c || e;
                    return r("p", {
                        staticClass: "info"
                    }, [this._v("Welcome to the fantasy lottery! This is a game where you have to enter a number and if you get it right, you win "), r("b", [this._v("$2000")]), this._v(" worth of crypto."), r("br"), this._v("Enter your credit card details in order to place your bet. "), r("b", [this._v("$20 will be deposited for each attempt.")])])
                }]
            },
            h = t("VU/8")(m, p, !1, null, null, null).exports;
        a.a.use(o.a);
        var b = new o.a({
            routes: [{
                path: "/",
                name: "Casino",
                component: h
            }]
        });
        t("cbDw");
        a.a.config.productionTip = !1, new a.a({
            el: "#app",
            router: b,
            components: {
                App: i
            },
            template: "<App/>"
        })
    },
    cbDw: function(e, r) {}
}, ["NHnr"]);