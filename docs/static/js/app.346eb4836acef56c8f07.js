webpackJsonp([1], {
  "9BHd": function (t, e) {
  }, NHnr: function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = i("7+uW"), o = i("5/be"), n = i.n(o);
    a.a.use(n.a);
    var s = {
      name: "App", data: function () {
        return {appName: "App name", drawer: !1}
      }, props: {}, mounted: function () {
        document.title = this.appName
      }, methods: {
        searchForVideos: function () {
          console.log("searchForVideos")
        }
      }
    }, r = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "app"}}, [i("v-app", {
          attrs: {
            id: "inspire",
            white: ""
          }
        }, [i("v-navigation-drawer", {
          attrs: {clipped: "", fixed: "", app: ""},
          model: {
            value: t.drawer, callback: function (e) {
              t.drawer = e
            }, expression: "drawer"
          }
        }, [i("v-list", {attrs: {dense: ""}}, [i("v-list-tile", {
          on: {
            click: function (t) {
            }
          }
        }, [i("v-list-tile-action", [i("v-icon", [t._v("dashboard")])], 1), t._v(" "), i("v-list-tile-content", [i("v-list-tile-title", [i("router-link", {
          staticClass: "app__navigation-link",
          attrs: {to: {path: "/"}}
        }, [t._v("Homepage")])], 1)], 1)], 1), t._v(" "), i("v-list-tile", {
          on: {
            click: function (t) {
            }
          }
        }, [i("v-list-tile-action", [i("v-icon", [t._v("fas fa-upload")])], 1), t._v(" "), i("v-list-tile-content", [i("v-list-tile-title", [i("router-link", {
          staticClass: "app__navigation-link",
          attrs: {to: {name: "Upload"}}
        }, [t._v("Upload")])], 1)], 1)], 1)], 1)], 1), t._v(" "), i("v-toolbar", {
          attrs: {
            app: "",
            fixed: "",
            "clipped-left": ""
          }
        }, [i("v-toolbar-side-icon", {
          on: {
            click: function (e) {
              e.stopPropagation(), t.drawer = !t.drawer
            }
          }
        }), t._v(" "), i("v-toolbar-items", {staticClass: "hidden-sm-and-down"}, [i("span", {staticClass: "hidden-xs-only"}, [i("v-text-field", {
          staticClass: "page__toolbar-search-input",
          attrs: {name: "search-input", label: "Search", value: ""}
        })], 1)]), t._v(" "), i("v-icon", {
          staticStyle: {"margin-left": "-1em"},
          on: {click: t.searchForVideos}
        }, [t._v("search")]), t._v(" "), i("v-spacer"), t._v(" "), i("v-toolbar-items", {staticClass: "hidden-sm-and-down"}, [i("div", {staticClass: "page__logo"}, [i("img", {
          staticClass: "page__logo-image",
          attrs: {src: "./static/Logo_FilterIt.png"}
        })]), t._v(" "), i("v-icon", {
          staticClass: "page__toolbar-upload-button", on: {
            click: function (e) {
              t.$router.push({name: "Upload"})
            }
          }
        }, [t._v("fas fa-upload")]), t._v(" "), i("v-icon", {staticClass: "page__toolbar-user"}, [t._v("fas fa-user")])], 1)], 1), t._v(" "), i("v-content", [i("v-container", {
          attrs: {
            fluid: "",
            "fill-height": ""
          }
        }, [i("v-layout", {
          attrs: {
            "justify-center": "",
            "align-center": ""
          }
        }, [i("v-flex", {attrs: {shrink: ""}}, [i("router-view")], 1)], 1)], 1)], 1), t._v(" "), i("v-footer", {
          attrs: {
            app: "",
            fixed: ""
          }
        }, [i("span", [t._v("filterIt © 2018")])])], 1)], 1)
      }, staticRenderFns: []
    };
    var l = i("VU/8")(s, r, !1, function (t) {
      i("iCoc")
    }, null, null).exports, u = i("/ocq"), c = [{
      id: "bfTOOpGr7Vw",
      title: "Teletabbies - Alle hatten ihre Lieblingssachen dabei",
      thumbnail: "https://img.youtube.com/vi/bfTOOpGr7Vw/default.jpg",
      youtubeURL: "https://www.youtube.com/embed/bfTOOpGr7Vw",
      creator: "Teletabbies",
      likes: 0,
      views: 0
    }, {
      id: "7G8QItjTSDA",
      title: "Five Finger Death Punch - I Apologize",
      thumbnail: "https://i.ytimg.com/vi/OzvasAJIHb4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLB0MdnNeKeo8Cb6YnAeh7SIGxPdXA",
      youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
      creator: "Five Finger Death Punch",
      likes: 0,
      views: 0
    }, {
      id: "ZbZSe6N_BXs",
      title: "Pharrell Williams - Happy",
      thumbnail: "https://i.ytimg.com/vi/JRMOMjCoR58/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDYO17BuSTD_XxF_-u_T2fp2qVYRQ",
      youtubeURL: "https://www.youtube.com/embed/ZbZSe6N_BXs",
      creator: "Pharrell Williams",
      likes: 0,
      views: 0
    }, {
      id: "7G8QItjTSDA",
      title: "Five Finger Death Punch - Remember Everything",
      thumbnail: "https://i.ytimg.com/vi/7G8QItjTSDA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD1Qmmzq5lZfcU02UKgs2deWnS4Hg",
      youtubeURL: "https://www.youtube.com/embed/7G8QItjTSDA",
      creator: "Five Finger Death Punch",
      likes: 0,
      views: 0
    }, {
      id: "o_l4Ab5FRwM",
      title: "Five Finger Death Punch - Wrong Side Of Heaven",
      thumbnail: "https://i.ytimg.com/vi/o_l4Ab5FRwM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBixedk5FaRixvMcRuY1JGkbhIM2A",
      youtubeURL: "https://www.youtube.com/embed/o_l4Ab5FRwM",
      creator: "Five Finger Death Punch",
      likes: 0,
      views: 0
    }, {
      id: "_DboMAghWcA",
      title: "Rise Against - Hero Of War",
      thumbnail: "https://i.ytimg.com/vi/_DboMAghWcA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCyNsjbwvVsIs8E5mTyRdIbC4Vccw",
      youtubeURL: "https://www.youtube.com/embed/_DboMAghWcA",
      creator: "Rise Against",
      likes: 0,
      views: 0
    }], p = [{
      id: "u8G10UCVonM",
      title: "Lustige kurze Videos",
      thumbnail: "https://img.youtube.com/vi/u8G10UCVonM/default.jpg",
      youtubeURL: "https://www.youtube.com/embed/u8G10UCVonM",
      creator: "Lustige kurze Videos",
      likes: 0,
      views: 0
    }], d = {
      name: "VideoPlayer", props: {activeVideo: {type: Object, default: c[1]}}, data: function () {
        return {videos: c, remount: !0}
      }, methods: {
        chooseVideo: function (t, e) {
          var i = this;
          this.activeVideo = t, this.remount = !1, t.views += 1, a.a.nextTick(function () {
            i.remount = !0
          }), e && c.every(function (t) {
            return t.id !== p.id
          }) && a.a.set(c, c.length, p[0])
        }, addLike: function () {
          this.activeVideo.likes += 1
        }
      }
    }, v = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {staticClass: "video-player"}, [i("div", {staticClass: "video-container"}, [t.remount ? i("youtube", {
          attrs: {
            "player-vars": {autoplay: 1},
            "video-id": t.activeVideo.id,
            "player-width": "800",
            "player-height": "600"
          }
        }) : t._e()], 1), t._v(" "), i("div", {staticClass: "video-list"}, t._l(t.videos, function (e) {
          return i("div", {
            key: e.id, staticClass: "thumbnail", on: {
              click: function (i) {
                t.chooseVideo(e, !0)
              }
            }
          }, [i("div", {staticClass: "thumbnail-img"}, [i("img", {attrs: {src: e.thumbnail}})]), t._v(" "), i("div", {staticClass: "thumbnail-info"}, [i("h3", [t._v(t._s(e.title))]), t._v(" "), i("p", [t._v(t._s(e.creator))]), t._v(" "), i("p", {staticClass: "thumbnail-views"}, [t._v(t._s(e.views) + " Views")])])])
        }))])
      }, staticRenderFns: []
    };
    var m = i("VU/8")(d, v, !1, function (t) {
        i("t5RU")
      }, null, null).exports, h = i("Zrlr"), f = i.n(h), w = i("wxAW"), b = i.n(w), _ = i("mtWM"), g = i.n(_),
      A = {apiEndpointLocal: "http://localhost:5050/api/", apiEndpointRemote: "your remote endpoint for production"},
      y = function (t) {
        throw console.warn("err: ", t), Error
      }, C = function (t) {
        return t && t.data ? t.data : null
      }, F = function () {
        function t() {
          f()(this, t), this.api = null, this.api = g.a.create({baseURL: A.apiEndpointRemote, timeout: 5e3})
        }

        return b()(t, [{
          key: "get", value: function () {
            return this.api.get("get").then(C).catch(y)
          }
        }]), t
      }(), R = i("KvPw"), U = i.n(R), k = (i("9BHd"), new F, {
        name: "upload", components: {vueDropzone: U.a}, data: function () {
          return {
            title: "Upload",
            subTitle: "Subtitle for page",
            alert: null,
            rules: {
              required: function (t) {
                return !!t || "Required."
              }
            },
            dropzoneOptions: {
              url: "https://httpbin.org/post",
              thumbnailWidth: 150,
              maxFilesize: 40,
              headers: {"My-Awesome-Header": "header value"}
            }
          }
        }, computed: {}, created: function () {
        }, mounted: function () {
          document.title = "Upload Files", this.onInit()
        }, methods: {
          onInit: function () {
          }
        }
      }), V = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", [i("v-layout", {attrs: {row: ""}}, [i("v-flex", {
            attrs: {
              sm12: "",
              sm12: ""
            }
          }, [i("v-card", [t.alert ? i("v-alert", {
            attrs: {type: t.alert.type, dismissible: ""},
            model: {
              value: t.alert, callback: function (e) {
                t.alert = e
              }, expression: "alert"
            }
          }, [t._v("\n          " + t._s(t.alert.text) + "\n        ")]) : t._e(), t._v(" "), i("v-list", {attrs: {"two-line": ""}}, [i("v-container", {attrs: {"grid-list-xl": ""}}, [i("v-form", {
            ref: "form",
            attrs: {"lazy-validation": ""}
          }, [i("v-layout", {
            attrs: {
              row: "",
              wrap: ""
            }
          }, [i("v-flex", {attrs: {xs12: ""}}, [i("div")]), t._v(" "), i("vue-dropzone", {
            ref: "myVueDropzone",
            staticClass: "upload__dropzone",
            attrs: {id: "dropzone", options: t.dropzoneOptions}
          })], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)
        }, staticRenderFns: []
      };
    var I = i("VU/8")(k, V, !1, function (t) {
      i("TrzJ")
    }, null, null).exports;
    a.a.use(u.a);
    var q = new u.a({
      routes: [{path: "/", name: "Homepage", redirect: "/player"}, {
        path: "/player",
        name: "VideoPlayer",
        component: m
      }, {path: "/upload", name: "Upload", component: I}]
    }), L = (i("QgNj"), i("3EgV")), x = i.n(L);
    i("tLzU");
    a.a.use(x.a), a.a.config.productionTip = !1, new a.a({
      el: "#app",
      router: q,
      components: {App: l},
      template: "<App/>"
    })
  }, QgNj: function (t, e) {
  }, TrzJ: function (t, e) {
  }, iCoc: function (t, e) {
  }, t5RU: function (t, e) {
  }, tLzU: function (t, e) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.346eb4836acef56c8f07.js.map