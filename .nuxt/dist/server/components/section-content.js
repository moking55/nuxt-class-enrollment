exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("076bc9f6", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionContent_vue_vue_type_style_index_0_id_774c0c40_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionContent_vue_vue_type_style_index_0_id_774c0c40_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionContent_vue_vue_type_style_index_0_id_774c0c40_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionContent_vue_vue_type_style_index_0_id_774c0c40_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionContent_vue_vue_type_style_index_0_id_774c0c40_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-774c0c40]{min-height:100vh}.subtitle[data-v-774c0c40],.title[data-v-774c0c40]{color:#fff}.title[data-v-774c0c40]{font-size:30pt;font-weight:500}.subtitle[data-v-774c0c40]{font-weight:400}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionContent.vue?vue&type=template&id=774c0c40&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "hero header",
    style: _vm.mainBg
  }, [_vm._ssrNode("<div class=\"my-auto px-6\" data-v-774c0c40>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-774c0c40>", "</div>", [_vm._ssrNode("<p class=\"title\" data-v-774c0c40>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</p> <p class=\"subtitle\" data-v-774c0c40>" + _vm._ssrEscape(_vm._s(_vm.subtitle)) + "</p> "), _vm.link ? _vm._ssrNode("<div data-v-774c0c40>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.link
    }
  }, [_c('b-button', {
    staticClass: "my-1",
    attrs: {
      "type": "is-success"
    }
  }, [_vm._v(_vm._s(_vm.btnTitle)), _c('b-icon', {
    staticClass: "ml-1",
    attrs: {
      "icon": "arrow-right-bold",
      "size": "is-small"
    }
  })], 1)], 1)], 1) : _vm._e()], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SectionContent.vue?vue&type=template&id=774c0c40&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionContent.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionContentvue_type_script_lang_js_ = ({
  name: 'SectionContent',
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    bg: {
      type: String,
      default: null
    },
    bgColor: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    btnTitle: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    mainBg() {
      return {
        background: 'url(' + this.bg + ') no-repeat, ' + this.bgColor,
        backgroundSize: '70%',
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom'
      };
    }
  }
});
// CONCATENATED MODULE: ./components/SectionContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionContentvue_type_script_lang_js_ = (SectionContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "774c0c40",
  "105c6876"
  
)

/* harmony default export */ var SectionContent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=section-content.js.map