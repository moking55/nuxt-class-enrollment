exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8c52f6ee", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module) {

module.exports = JSON.parse("[{\"course_id\":\"10301111\",\"course_name\":\"การเขียนโปรแกรมเบื้องต้น\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301112\",\"course_name\":\"เทคโนโลยีสารสนเทศและการสื่อสาร\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10100214\",\"course_name\":\"เกษตรเพื่อชีวิต\",\"credit\":\"3 (3-0-6)\"},{\"course_id\":\"10700301\",\"course_name\":\"ภาษาไทยเพื่อการนำเสนอ\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"10700308\",\"course_name\":\"ภาษาอังกฤษในชีวิตประจำวัน\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"10305108\",\"course_name\":\"แคลคูลัสสำหรับวิทยาศาสตร์และเทคโนโลยี\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301114\",\"course_name\":\"องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301141\",\"course_name\":\"เครือข่ายคอมพิวเตอร์เบื้องต้น\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301212\",\"course_name\":\"การเขียนโปรแกรมและทักษะการแก้ปัญหา\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"10301113\",\"course_name\":\"คณิตศาสตร์ดีสครีต\",\"credit\":\"3 (3-0-6)\"},{\"course_id\":\"10800113\",\"course_name\":\"พลเมืองดิจิทัล\",\"credit\":\"3 (3-0-6)\"},{\"course_id\":\"10700309\",\"course_name\":\"สนทนาภาษาอังกฤษ\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"10301222\",\"course_name\":\"โครงสร้างข้อมูลและอัลกอริทึม\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301223\",\"course_name\":\"ฐานข้อมูลโครงสร้างเชิงสัมพันธ์\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301231\",\"course_name\":\"เว็บเทคโนโลยี\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301225\",\"course_name\":\"วิศวรกรรมซอฟต์แวร์\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301211\",\"course_name\":\"คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10700313\",\"course_name\":\"ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"10301221\",\"course_name\":\"การวิเคราะห์และออกแบบเชิงวัตถุ\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301224\",\"course_name\":\"ฐานข้อมูลแบบไม่มีโครงสร้าง\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301232\",\"course_name\":\"การพัฒนาระบบฝั่งเซิร์ฟเวอร์\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10301233\",\"course_name\":\"การพัฒนาซอฟต์แวร์บนอุปกรณ์เคลื่อนที่\",\"credit\":\"3 (2-3-5)\"},{\"course_id\":\"10304205\",\"course_name\":\"ความน่าจะเป็นและสถิติ\",\"credit\":\"3 (3-0-6)\"},{\"course_id\":\"10700105\",\"course_name\":\"มนุษย์ สังคม เทคโนโลยีและสิ่งแวดล้อม\",\"credit\":\"3 (3-0-6)\"},{\"course_id\":\"10700320\",\"course_name\":\"ภาษาอังกฤษเพื่อการศึกษาต่อและการประกอบอาชีพ\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"10300411\",\"course_name\":\"วิทยาศาสตร์เพื่อชีวิต\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 1\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 2\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 3\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 4\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"10300410\",\"course_name\":\"ความฉลาดรู้ด้านวิทยาศาสตร์สำหรับโลกสมัยใหม่\",\"credit\":\"3 (3-0-6)\"},{\"course_id\":\"10200504\",\"course_name\":\"การเป็นผู้ประกอบการ\",\"credit\":\"3 (2-2-5)\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 5\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 6\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"-\",\"course_name\":\"วิชาเอกเลือก วิชาที่ 7\",\"credit\":\"3 ( - - )\"},{\"course_id\":\"10300497\",\"course_name\":\"สหกิจศึกษา (*เลือกอย่างใดอย่างหนึ่ง)\",\"credit\":\"6 (ปฏิบัติไม่น้อยกว่า 16 สัปดาห์)\"},{\"course_id\":\"10300498\",\"course_name\":\"การเรียนรู้อิสระ (*เลือกอย่างใดอย่างหนึ่ง)\",\"credit\":\"6 (ปฏิบัติไม่น้อยกว่า 16 สัปดาห์)\"},{\"course_id\":\"10300499\",\"course_name\":\"การศึกษา / ฝึกงาน / ฝึกอบรมต่างประเทศ (*เลือกอย่างใดอย่างหนึ่ง)\",\"credit\":\"6 (ปฏิบัติไม่น้อยกว่า 16 สัปดาห์)\"},{\"course_id\":null,\"course_name\":\"วิชาเลือกเสรี วิชาที่ 1\",\"credit\":\"3 ( - - )\"},{\"course_id\":null,\"course_name\":\"วิชาเลือกเสรี วิชาที่ 2\",\"credit\":\"3 ( - - )\"}]");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_style_index_0_id_e58c22b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_style_index_0_id_e58c22b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_style_index_0_id_e58c22b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_style_index_0_id_e58c22b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_style_index_0_id_e58c22b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sc-bg[data-v-e58c22b8]{background-color:#009432;background-image:linear-gradient(150deg,#009432,#7bed9f);height:350px}.panel-body[data-v-e58c22b8]{padding:.5em;background:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses.vue?vue&type=template&id=e58c22b8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"sc-bg\" data-v-e58c22b8><div class=\"is-flex is-align-items-center is-justify-content-center\" style=\"height: 100%\" data-v-e58c22b8><h2 class=\"is-size-2 has-text-white\" data-v-e58c22b8>\n        หลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์\n      </h2></div> <div class=\"container\" style=\"max-width: 900px\" data-v-e58c22b8><article class=\"panel is-info\" style=\"margin-top: -100px\" data-v-e58c22b8><p class=\"panel-heading\" data-v-e58c22b8>รายชื่อวิชาในแผนการเรียน</p> <div class=\"panel-body\" data-v-e58c22b8><table class=\"table\" style=\"width: 100%\" data-v-e58c22b8><thead data-v-e58c22b8><th data-v-e58c22b8>รหัสรายวิชา</th> <th data-v-e58c22b8>ชื่อรายวิชา</th> <th data-v-e58c22b8>หน่วยกิต</th></thead> <tbody data-v-e58c22b8>" + _vm._ssrList(_vm.course, function (courseInfo, key) {
    return "<tr data-v-e58c22b8><td data-v-e58c22b8>" + _vm._ssrEscape(_vm._s(courseInfo.course_id)) + "</td> <td data-v-e58c22b8><a data-v-e58c22b8>" + _vm._ssrEscape("\n                    " + _vm._s(courseInfo.course_name)) + "</a></td> <td data-v-e58c22b8>" + _vm._ssrEscape(_vm._s(courseInfo.credit)) + "</td></tr>";
  }) + "</tbody></table></div></article></div></section> "), _c('b-modal', {
    attrs: {
      "has-modal-card": "",
      "trap-focus": "",
      "destroy-on-hide": false,
      "aria-role": "dialog",
      "aria-label": "Example Modal",
      "close-button-aria-label": "Close",
      "aria-modal": ""
    },
    model: {
      value: _vm.isComponentModalActive,
      callback: function ($$v) {
        _vm.isComponentModalActive = $$v;
      },
      expression: "isComponentModalActive"
    }
  }, [_vm.isComponentModalActive ? [_c('div', {
    staticClass: "modal-card",
    staticStyle: {
      "min-width": "800px"
    }
  }, [_c('header', {
    staticClass: "modal-card-head"
  }, [_vm._v("รายละเอียดวิชา")]), _vm._v(" "), _c('section', {
    staticClass: "modal-card-body"
  }, [_c('h3', {
    staticClass: "is-size-4"
  }, [_vm._v("รหัสรายวิชา")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.course[_vm.dataKey].course_id) + "\n          ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', {
    staticClass: "is-size-4"
  }, [_vm._v("รหัสรายวิชา")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.course[_vm.dataKey].course_name) + "\n          ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', {
    staticClass: "is-size-4"
  }, [_vm._v("หน่วยกิต")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.course[_vm.dataKey].credit) + "\n          ")])])])] : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/courses.vue?vue&type=template&id=e58c22b8&scoped=true&

// EXTERNAL MODULE: ./assets/json/cs_courses.json
var cs_courses = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses.vue?vue&type=script&lang=js&

/* harmony default export */ var coursesvue_type_script_lang_js_ = ({
  data() {
    return {
      course: cs_courses,
      isComponentModalActive: false,
      dataKey: 0
    };
  }
});
// CONCATENATED MODULE: ./pages/courses.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_coursesvue_type_script_lang_js_ = (coursesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/courses.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_coursesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e58c22b8",
  "99c1a0c8"
  
)

/* harmony default export */ var courses = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=courses.js.map