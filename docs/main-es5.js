function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./state */
    "./src/app/state.ts");
    /* harmony import */


    var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! object-hash */
    "./node_modules/object-hash/dist/object_hash.js");
    /* harmony import */


    var object_hash__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./colors */
    "./src/app/colors.ts");
    /* harmony import */


    var _graph_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./graph-type */
    "./src/app/graph-type.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./helpers */
    "./src/app/helpers.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["chart"];

    function AppComponent_mat_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r36);
      }
    }

    function AppComponent_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r37);
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(storageService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.storageService = storageService;
        this.graphTypes = _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"];
        this.graphTypeOptions = Object.values(_graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"]);
        this.numberScale = [0, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
        this.state = this.storageService.get('state') || new _state__WEBPACK_IMPORTED_MODULE_3__["State"]();
        this.storageService.beforeSave.subscribe(function () {
          return _this.saveUi();
        });
        this.storageService.onSave.subscribe(function () {
          return _this.storageService.set('state', _this.state);
        });
      }

      _createClass(AppComponent, [{
        key: "saveUi",
        value: function saveUi() {
          this.updateHiddenCountries();
        }
      }, {
        key: "updateHiddenCountries",
        value: function updateHiddenCountries() {
          var _this2 = this;

          if (this.currentChart) {
            this.state.hiddenCountries = this.currentChart.data.datasets.filter(function (d, i) {
              return _this2.currentChart.getDatasetMeta(i).hidden;
            }).map(function (d) {
              return d.label;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch('/assets/timeseries.json');

                  case 2:
                    _context.next = 4;
                    return _context.sent.json();

                  case 4:
                    this.data = _context.sent;
                    this.countryOptions = Object.keys(this.data).sort(function (a, b) {
                      return a.localeCompare(b);
                    });
                    this.dateLabels = this.data[this.state.selectedCountries[0]].map(function (p) {
                      return p.date.replace('2020-', '');
                    });
                    _context.next = 9;
                    return this.replot();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "normalizeChange",
        value: function normalizeChange() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.state.normalize) {
                      if (this.state.shiftThreshold > 10) {
                        this.state.shiftThreshold /= Math.max(1, Math.round(this.state.normalizePopulation / 10000));
                      }
                    } else {
                      if (this.state.shiftThreshold < 10) {
                        this.state.shiftThreshold *= Math.min(1000, Math.round(this.state.normalizePopulation / 10000));
                      }
                    }

                    _context2.next = 3;
                    return this.replot();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "replot",
        value: function replot() {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var i, meta;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!this.state.selectedCountries.length || !this.state.graphType)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    this.updateHiddenCountries();
                    (_a = this.currentChart) === null || _a === void 0 ? void 0 : _a.destroy();
                    this.state.avgSamples = Math.max(1, Math.min(28, this.state.avgSamples));

                    if (!this.state.normalize) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 8;
                    return this.initPopulation();

                  case 8:
                    _context3.t0 = this.state.graphType;
                    _context3.next = _context3.t0 === _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"].TotalCases ? 11 : _context3.t0 === _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"].NewCases ? 13 : _context3.t0 === _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"].CasesGrowth ? 15 : _context3.t0 === _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"].TotalDeaths ? 17 : _context3.t0 === _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"].NewDeaths ? 19 : _context3.t0 === _graph_type__WEBPACK_IMPORTED_MODULE_6__["GraphType"].DeathGrowth ? 21 : 23;
                    break;

                  case 11:
                    this.plotTotal('confirmed');
                    return _context3.abrupt("break", 23);

                  case 13:
                    this.plotNew('confirmed');
                    return _context3.abrupt("break", 23);

                  case 15:
                    this.plotGrowth('confirmed');
                    return _context3.abrupt("break", 23);

                  case 17:
                    this.plotTotal('deaths');
                    return _context3.abrupt("break", 23);

                  case 19:
                    this.plotNew('deaths');
                    return _context3.abrupt("break", 23);

                  case 21:
                    this.plotGrowth('deaths');
                    return _context3.abrupt("break", 23);

                  case 23:
                    if (this.state.hiddenCountries && this.state.hiddenCountries.length) {
                      for (i = 0; i < this.currentChart.data.datasets.length; i++) {
                        meta = this.currentChart.getDatasetMeta(i);
                        meta.hidden = this.state.hiddenCountries.indexOf(this.currentChart.data.datasets[i].label) >= 0;
                      }

                      this.currentChart.update();
                    }

                  case 24:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "initPopulation",
        value: function initPopulation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var countrySNameToPop, countrySNameToAbbr, countryPNameToAbbr, snameToPopDict, abbrToSnameDict;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.pop) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 2:
                    _context4.next = 4;
                    return fetch('/assets/country-by-population.json');

                  case 4:
                    _context4.next = 6;
                    return _context4.sent.json();

                  case 6:
                    countrySNameToPop = _context4.sent;
                    _context4.next = 9;
                    return fetch('/assets/country-by-abbreviation.json');

                  case 9:
                    _context4.next = 11;
                    return _context4.sent.json();

                  case 11:
                    countrySNameToAbbr = _context4.sent;
                    _context4.next = 14;
                    return fetch('/assets/countries.json');

                  case 14:
                    _context4.next = 16;
                    return _context4.sent.json();

                  case 16:
                    countryPNameToAbbr = _context4.sent;
                    snameToPopDict = _helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].toDictionary(countrySNameToPop, function (c) {
                      return c['country'];
                    }, function (c) {
                      return parseInt(c['population'], 10);
                    });
                    abbrToSnameDict = _helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].toDictionary(countrySNameToAbbr, function (c) {
                      return c['abbreviation'];
                    }, function (c) {
                      return c['country'];
                    });
                    this.pop = _helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].toDictionary(Object.keys(countryPNameToAbbr), function (c) {
                      return c;
                    }, function (c) {
                      return snameToPopDict[abbrToSnameDict[countryPNameToAbbr[c]['code']]];
                    });

                  case 20:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "plotTotal",
        value: function plotTotal(prop) {
          var _this3 = this;

          var datasets = this.state.selectedCountries.map(function (c) {
            var getData = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(function () {
              return _this3.data[c].map(function (p) {
                return p[prop];
              });
            }, function (d) {
              return _this3.arrayMul(d, _this3.state.normalize ? _this3.state.normalizePopulation / _this3.pop[c] : 1);
            }, function (d) {
              return _this3.arrayDifference(d);
            }, function (d) {
              return _this3.arrayMovingAverage(d, _this3.state.average ? _this3.state.avgSamples : 1);
            }, function (d) {
              return _this3.state.shift ? d.slice(d.findIndex(function (n) {
                return n >= _this3.state.shiftThreshold;
              })) : d;
            }, function (d) {
              return _this3.arrayAbsolute(d);
            });
            return _this3.createDataset(c, getData(null));
          });
          var labels = this.getLabels(datasets);
          this.currentChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.chart.nativeElement, {
            type: 'line',
            data: {
              labels: labels,
              datasets: datasets
            },
            options: {
              animation: {
                duration: 0
              },
              scales: {
                yAxes: [{
                  type: this.state.log ? 'logarithmic' : 'linear',
                  ticks: {
                    callback: this.abbrNumber
                  },
                  afterBuildTicks: function afterBuildTicks() {
                    return _this3.numberScale;
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "plotNew",
        value: function plotNew(prop) {
          var _this4 = this;

          var datasets = this.state.selectedCountries.map(function (c) {
            var getData = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(function () {
              return _this4.data[c].map(function (p) {
                return p[prop];
              });
            }, function (d) {
              return _this4.arrayMul(d, _this4.state.normalize ? _this4.state.normalizePopulation / _this4.pop[c] : 1);
            }, function (d) {
              return _this4.arrayDifference(d);
            }, function (d) {
              return _this4.arrayMovingAverage(d, _this4.state.average ? _this4.state.avgSamples : 1);
            }, function (d) {
              return _this4.state.shift ? d.slice(d.findIndex(function (n) {
                return n >= _this4.state.shiftThreshold;
              })) : d;
            });
            return _this4.createDataset(c, getData(null));
          });
          var labels = this.getLabels(datasets);
          this.currentChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.chart.nativeElement, {
            type: 'line',
            data: {
              datasets: datasets,
              labels: labels
            },
            options: {
              animation: {
                duration: 0
              },
              scales: {
                yAxes: [{
                  type: this.state.log ? 'logarithmic' : 'linear',
                  ticks: {
                    callback: this.abbrNumber,
                    min: 1
                  },
                  afterBuildTicks: function afterBuildTicks() {
                    return _this4.numberScale;
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "plotGrowth",
        value: function plotGrowth(prop) {
          var _this5 = this;

          var datasets = this.state.selectedCountries.map(function (c) {
            var getData = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(function () {
              return _this5.data[c].map(function (p) {
                return p[prop];
              });
            }, function (d) {
              return _this5.arrayMul(d, _this5.state.normalize ? _this5.state.normalizePopulation / _this5.pop[c] : 1);
            }, function (d) {
              return _this5.arrayDifference(d);
            }, function (d) {
              return _this5.arrayMovingAverage(d, _this5.state.average ? _this5.state.avgSamples : 1);
            }, function (d) {
              return _this5.state.shift ? d.slice(d.findIndex(function (n) {
                return n >= _this5.state.shiftThreshold;
              })) : d;
            }, function (d) {
              return _this5.arrayGrowthFactor(d);
            });
            return _this5.createDataset(c, getData(null));
          });
          var labels = this.getLabels(datasets);
          this.currentChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.chart.nativeElement, {
            type: 'line',
            data: {
              labels: labels,
              datasets: datasets
            },
            options: {
              animation: {
                duration: 0
              },
              scales: {
                yAxes: [{
                  type: 'linear',
                  ticks: {
                    max: 2,
                    min: 0.3
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "createDataset",
        value: function createDataset(label, data) {
          return {
            label: label,
            borderColor: this.getNiceColor(label),
            data: data,
            fill: false
          };
        }
      }, {
        key: "getLabels",
        value: function getLabels(datasets) {
          if (this.state.shift) {
            return _helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].range([1, Math.max.apply(Math, _toConsumableArray(datasets.map(function (d) {
              return d.data.length;
            }))), 1]).map(function (n) {
              return 'Day ' + n;
            });
          } else {
            var startDate = new Date(this.data[this.state.selectedCountries[0]][0].date).getTime();
            this.dateLabels = this.data[this.state.selectedCountries[0]].map(function (p) {
              return p.date.replace('2020-', '');
            });
            var dayTicks = 60 * 60 * 24 * 1000;
            return _helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].range([1, Math.max.apply(Math, _toConsumableArray(datasets.map(function (d) {
              return d.data.length;
            }))), 1]).map(function (n) {
              return new Date(startDate + (n - 1) * dayTicks).toISOString().substring(5, 10);
            });
          }
        }
      }, {
        key: "arrayDifference",
        value: function arrayDifference(arr) {
          var result = arr.map(function (p, i, a) {
            return p - (i ? a[i - 1] : 0);
          });
          return result;
        }
      }, {
        key: "arrayAbsolute",
        value: function arrayAbsolute(arr) {
          var total = 0;
          var result = arr.map(function (p) {
            total += p;
            return total;
          });
          return result;
        }
      }, {
        key: "arrayMul",
        value: function arrayMul(arr, mul) {
          var result = arr.map(function (p) {
            return p * mul;
          });
          return result;
        }
      }, {
        key: "arrayMovingAverage",
        value: function arrayMovingAverage(arr, samples) {
          if (samples <= 1) {
            return arr;
          }

          var accum = 0;
          var r = new Array(arr.length);

          for (var i = 0; i < r.length; i++) {
            if (i >= samples) {
              accum -= arr[i - samples];
            }

            accum += arr[i];
            r[i] = accum / Math.min(samples, i + 1);
          }

          return r;
        }
      }, {
        key: "arrayGrowthFactor",
        value: function arrayGrowthFactor(arr) {
          var r = new Array(arr.length);

          for (var i = 1; i < r.length; i++) {
            if (arr[i] === 0) {
              r[i] = 1;
            } else if (arr[i - 1] === 0) {
              r[i] = 1;
            } else {
              r[i] = arr[i] / arr[i - 1];
            }
          }

          r[0] = r[1];
          return r;
        }
      }, {
        key: "getNiceColor",
        value: function getNiceColor(c) {
          var _this6 = this;

          var result = this.state.colors[c];

          if (!result) {
            var i = this.getHashBucket(c, _colors__WEBPACK_IMPORTED_MODULE_5__["niceColors"].length);

            if (Object.keys(this.state.colors).length < _colors__WEBPACK_IMPORTED_MODULE_5__["niceColors"].length) {
              var usedColors = Object.keys(this.state.colors).map(function (country) {
                return _this6.state.colors[country];
              });
              i = 0;

              while (usedColors.indexOf(_colors__WEBPACK_IMPORTED_MODULE_5__["niceColors"][i]) >= 0) {
                i++;
              }
            }

            result = _colors__WEBPACK_IMPORTED_MODULE_5__["niceColors"][i];
            this.state.colors[c] = result;
          }

          return result;
        }
      }, {
        key: "getHashBucket",
        value: function getHashBucket(v, numberOfBuckets) {
          return parseInt(object_hash__WEBPACK_IMPORTED_MODULE_4___default()(v).slice(0, 6), 16) % numberOfBuckets;
        }
      }, {
        key: "abbrNumber",
        value: function abbrNumber(label) {
          var zeroes = Math.log10(label);

          if (zeroes % 1 === 0) {
            var suffixes = ['', 'K', 'M', 'B', 'T'];
            var suffixIndex = Math.floor(zeroes / 3);
            zeroes = zeroes % 3;
            return '1' + (zeroes > 0 ? '0'.repeat(zeroes) : '') + suffixes[suffixIndex];
          }
        }
      }, {
        key: "samples",
        get: function get() {
          return (this.state.avgSamples || 0).toString();
        },
        set: function set(value) {
          this.state.avgSamples = parseInt(value, 10);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 63,
      vars: 12,
      consts: [[1, "page"], [1, "chart"], ["chart", ""], [1, "settings"], ["multiple", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "selectionChange"], [1, "row"], [3, "ngModel", "disabled", "ngModelChange"], [3, "ngModel", "ngModelChange"], [1, "grower"], [1, "inline"], ["matInput", "", "type", "number", "min", "1", "max", "28", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "1", "max", "10000000000", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "1", "max", "10000", 3, "ngModel", "ngModelChange"], ["href", "https://pomber.github.io/covid19/timeseries.json"], ["href", "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json"], ["href", "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-abbreviation.json"], ["href", "https://raw.githubusercontent.com/pomber/covid19/master/docs/countries.json"], [3, "value"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Plotting COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_12_listener($event) {
            return ctx.state.selectedCountries = $event;
          })("selectionChange", function AppComponent_Template_mat_select_selectionChange_12_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_mat_option_13_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Tip: Hide countries by clicking on their color legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Graph type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_19_listener($event) {
            return ctx.state.graphType = $event;
          })("selectionChange", function AppComponent_Template_mat_select_selectionChange_19_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_mat_option_20_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_22_listener($event) {
            return ctx.state.log = $event;
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_22_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Logarithmic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_25_listener($event) {
            return ctx.state.average = $event;
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_25_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Moving average");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.samples = $event;
          })("ngModelChange", function AppComponent_Template_input_ngModelChange_31_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_33_listener($event) {
            return ctx.state.normalize = $event;
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_33_listener() {
            return ctx.normalizeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Normalize, per ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "People");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.state.normalizePopulation = $event;
          })("ngModelChange", function AppComponent_Template_input_ngModelChange_39_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_41_listener($event) {
            return ctx.state.shift = $event;
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_41_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Start each curve at");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.state.shiftThreshold = $event;
          })("ngModelChange", function AppComponent_Template_input_ngModelChange_47_listener() {
            return ctx.replot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Sources");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "COVID cases and deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " (updated 4/12/2020)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Country population");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Country code map for population");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Country code map for COVID cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.selectedCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.graphType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.graphTypeOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.log)("disabled", ctx.state.graphType === ctx.graphTypes.CasesGrowth || ctx.state.graphType === ctx.graphTypes.DeathGrowth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.average);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.samples);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.normalize);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.normalizePopulation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.shift);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.shiftThreshold);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.settings[_ngcontent-%COMP%] {\n  margin: 2rem;\n  display: flex;\n  max-width: 30rem;\n  flex-direction: column;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n.grower[_ngcontent-%COMP%] {\n  flex-grow: 999;\n}\n\n.chart[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90vh;\n  width: 100%;\n  overflow: hidden;\n}\n\n.inline[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Bsb3QtY292aWQvcGxvdC1jb3ZpZC9tYWluL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zZXR0aW5ncyB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uZ3Jvd2VyIHtcbiAgICBmbGV4LWdyb3c6IDk5OTtcbn1cblxuLmNoYXJ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbmxpbmUge1xuICAgIG1hcmdpbjogMCAxcmVtO1xufSIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zZXR0aW5ncyB7XG4gIG1hcmdpbjogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmdyb3dlciB7XG4gIGZsZXgtZ3JvdzogOTk5O1xufVxuXG4uY2hhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbmxpbmUge1xuICBtYXJnaW46IDAgMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['chart', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/storage.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]],
          providers: [_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/colors.ts":
  /*!***************************!*\
    !*** ./src/app/colors.ts ***!
    \***************************/

  /*! exports provided: niceColors */

  /***/
  function srcAppColorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "niceColors", function () {
      return niceColors;
    });

    var niceColors = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'];
    /***/
  },

  /***/
  "./src/app/graph-type.ts":
  /*!*******************************!*\
    !*** ./src/app/graph-type.ts ***!
    \*******************************/

  /*! exports provided: GraphType */

  /***/
  function srcAppGraphTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphType", function () {
      return GraphType;
    });

    var GraphType;

    (function (GraphType) {
      GraphType["TotalCases"] = "Total cases";
      GraphType["NewCases"] = "New cases";
      GraphType["CasesGrowth"] = "Case growth";
      GraphType["TotalDeaths"] = "Total deaths";
      GraphType["NewDeaths"] = "New deaths";
      GraphType["DeathGrowth"] = "Death growth";
    })(GraphType || (GraphType = {}));
    /***/

  },

  /***/
  "./src/app/helpers.ts":
  /*!****************************!*\
    !*** ./src/app/helpers.ts ***!
    \****************************/

  /*! exports provided: Helpers */

  /***/
  function srcAppHelpersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helpers", function () {
      return Helpers;
    });

    var Helpers =
    /*#__PURE__*/
    function () {
      function Helpers() {
        _classCallCheck(this, Helpers);
      }

      _createClass(Helpers, null, [{
        key: "toDictionary",
        value: function toDictionary(items, keySelector, valueSelector) {
          var result = {};

          var _iterator = _createForOfIteratorHelper(items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              result[keySelector(item)] = valueSelector(item);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        }
      }, {
        key: "range",
        value: function range(_range) {
          var result = [];

          for (var i = _range[0]; i <= _range[1]; i += _range[2]) {
            result.push(i);
          }

          return result;
        }
      }]);

      return Helpers;
    }();
    /***/

  },

  /***/
  "./src/app/state.ts":
  /*!**************************!*\
    !*** ./src/app/state.ts ***!
    \**************************/

  /*! exports provided: State */

  /***/
  function srcAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "State", function () {
      return State;
    });
    /* harmony import */


    var _graph_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./graph-type */
    "./src/app/graph-type.ts");

    var State = function State() {
      var selectedCountries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['US'];
      var hiddenCountries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var graphType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _graph_type__WEBPACK_IMPORTED_MODULE_0__["GraphType"].TotalCases;
      var average = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var avgSamples = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
      var normalize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var normalizePopulation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1000000;
      var shift = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      var shiftThreshold = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      var colors = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : {};
      var log = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : true;

      _classCallCheck(this, State);

      this.selectedCountries = selectedCountries;
      this.hiddenCountries = hiddenCountries;
      this.graphType = graphType;
      this.average = average;
      this.avgSamples = avgSamples;
      this.normalize = normalize;
      this.normalizePopulation = normalizePopulation;
      this.shift = shift;
      this.shiftThreshold = shiftThreshold;
      this.colors = colors;
      this.log = log;
    };
    /***/

  },

  /***/
  "./src/app/storage.service.ts":
  /*!************************************!*\
    !*** ./src/app/storage.service.ts ***!
    \************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var XSSI_PREFIX = /^\)\]\}",?\n/;
    /**
     * Allows to nore or less continuously store objects in Local Storage and restore from it
     */

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService(injector) {
        var _this7 = this;

        _classCallCheck(this, StorageService);

        this.injector = injector;
        this.beforeSave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onSave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('beforeunload', function () {
          return _this7.save();
        });
      }

      _createClass(StorageService, [{
        key: "clear",

        /**
         * Clears the entire local storage (only keys for this app)
         */
        value: function clear() {
          this.subscribeToRouterOnce();

          for (var _i = 0, _arr = [localStorage, sessionStorage]; _i < _arr.length; _i++) {
            var storage = _arr[_i];

            for (var item in storage) {
              if (item.startsWith('app_')) {
                storage.removeItem(item);
              }
            }
          }
        }
        /**
         * Gets an object from local storage by the specified key
         */

      }, {
        key: "get",
        value: function get(key, onlySessionStorage) {
          this.subscribeToRouterOnce();
          var storedString = StorageService.getItem('app_' + key, onlySessionStorage);

          if (storedString) {
            return JSON.parse(storedString);
          } else {
            return null;
          }
        }
        /**
         * Saves an object to local storage using the specified key
         * @param key Object key to store
         * @param value Object value
         * @param changedCallback Function to call if the object had changed since last save
         */

      }, {
        key: "set",
        value: function set(key, value) {
          this.subscribeToRouterOnce();
          var currentString = value;

          if (value != null) {
            currentString = JSON.stringify(value);
          }

          StorageService.setItem('app_' + key, currentString);
        }
        /**
         * Saves all watched objects to local storage
         */

      }, {
        key: "save",
        value: function save() {
          this.beforeSave.next();
          this.onSave.next();
          this.subscribeToRouterOnce();
        }
        /**
         * Subscribes itself to router events (NavigationStart) to save all changes to local storage on each such event.
         */

      }, {
        key: "subscribeToRouterOnce",
        value: function subscribeToRouterOnce() {
          var _this8 = this;

          if (!this.router) {
            this.router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], {});

            if (this.router) {
              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
                return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"];
              })).subscribe(function () {
                return _this8.save();
              });
            }
          }
        }
      }], [{
        key: "getItem",
        value: function getItem(key, onlySessionStorage) {
          var result = sessionStorage.getItem(key);

          if (!result && !onlySessionStorage) {
            result = localStorage.getItem(key);
          }

          return result;
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          if (value != null) {
            sessionStorage.setItem(key, value);
            localStorage.setItem(key, value);
          } else {
            sessionStorage.removeItem(key);
            localStorage.removeItem(key);
          }
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/plot-covid/plot-covid/main/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map