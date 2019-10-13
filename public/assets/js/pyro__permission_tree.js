window["pyro"] = window["pyro"] || {}; window["pyro"]["pyro__permission_tree"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pyro__permission_tree": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".chunk." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./addons/shared/pyro/admin-theme/lib/admin-theme.development.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./addons/shared/pyro/admin-theme/lib/admin-theme.scss
var admin_theme = __webpack_require__("./addons/shared/pyro/admin-theme/lib/admin-theme.scss");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./packages/pyro/platform/lib/platform.development.ts + 22 modules
var platform_development = __webpack_require__("./packages/pyro/platform/lib/platform.development.ts");

// CONCATENATED MODULE: ./addons/shared/pyro/admin-theme/lib/AdminThemeServiceProvider.ts
var AdminThemeServiceProvider_AdminThemeServiceProvider=function(_super){Object(tslib_es6["d" /* __extends */])(AdminThemeServiceProvider,_super);function AdminThemeServiceProvider(){return _super!==null&&_super.apply(this,arguments)||this;}AdminThemeServiceProvider.prototype.register=function(){};return AdminThemeServiceProvider;}(platform_development["ServiceProvider"]);
// EXTERNAL MODULE: ./node_modules/element-ui/lib/aside.js
var aside = __webpack_require__("./node_modules/element-ui/lib/aside.js");
var aside_default = /*#__PURE__*/__webpack_require__.n(aside);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/aside.scss
var src_aside = __webpack_require__("./packages/element-ui-theme/src/aside.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/col.js
var col = __webpack_require__("./node_modules/element-ui/lib/col.js");
var col_default = /*#__PURE__*/__webpack_require__.n(col);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/col.scss
var src_col = __webpack_require__("./packages/element-ui-theme/src/col.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/container.js
var container = __webpack_require__("./node_modules/element-ui/lib/container.js");
var container_default = /*#__PURE__*/__webpack_require__.n(container);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/container.scss
var src_container = __webpack_require__("./packages/element-ui-theme/src/container.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/divider.js
var divider = __webpack_require__("./node_modules/element-ui/lib/divider.js");
var divider_default = /*#__PURE__*/__webpack_require__.n(divider);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/divider.scss
var src_divider = __webpack_require__("./packages/element-ui-theme/src/divider.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/footer.js
var footer = __webpack_require__("./node_modules/element-ui/lib/footer.js");
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/footer.scss
var src_footer = __webpack_require__("./packages/element-ui-theme/src/footer.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/header.js
var header = __webpack_require__("./node_modules/element-ui/lib/header.js");
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/header.scss
var src_header = __webpack_require__("./packages/element-ui-theme/src/header.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/main.js
var main = __webpack_require__("./node_modules/element-ui/lib/main.js");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/main.scss
var src_main = __webpack_require__("./packages/element-ui-theme/src/main.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/row.js
var row = __webpack_require__("./node_modules/element-ui/lib/row.js");
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/row.scss
var src_row = __webpack_require__("./packages/element-ui-theme/src/row.scss");

// CONCATENATED MODULE: ./addons/shared/pyro/admin-theme/lib/AdminThemeVuePlugin.ts
var AdminThemeVuePlugin_AdminThemeVuePlugin=function(){function AdminThemeVuePlugin(){}AdminThemeVuePlugin.install=function(_Vue,opts){if(opts===void 0){opts={};}if(this.__installed){return;}this.__installed=true;Object(platform_development["prefixAndRegisterComponents"])(_Vue,{});Object(platform_development["registerElementComponents"])(_Vue,{Row:row_default.a,Col:col_default.a,Aside:aside_default.a,Header:header_default.a,Footer:footer_default.a,Container:container_default.a,Main:main_default.a,Divider:divider_default.a});};AdminThemeVuePlugin.__installed=false;return AdminThemeVuePlugin;}();
// CONCATENATED MODULE: ./addons/shared/pyro/admin-theme/lib/admin-theme.ts

// CONCATENATED MODULE: ./addons/shared/pyro/admin-theme/lib/admin-theme.development.ts
/* concated harmony reexport AdminThemeVuePlugin */__webpack_require__.d(__webpack_exports__, "AdminThemeVuePlugin", function() { return AdminThemeVuePlugin_AdminThemeVuePlugin; });
/* concated harmony reexport AdminThemeServiceProvider */__webpack_require__.d(__webpack_exports__, "AdminThemeServiceProvider", function() { return AdminThemeServiceProvider_AdminThemeServiceProvider; });


/***/ }),

/***/ "./addons/shared/pyro/admin-theme/lib/admin-theme.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue?vue&type=template&id=31de7de2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card permissions"},[_c('input',{ref:"input",attrs:{"type":"hidden"}}),_vm._m(0),_c('ul',{staticClass:"list-group list-group-flush controls"},[_c('li',{staticClass:"list-group-item"},[_c('el-button',{staticClass:"control",attrs:{"size":"mini"},on:{"click":_vm.switchDataViewType}},[_vm._v("Switch to "+_vm._s(_vm.dataViewType === 'expanded' ? 'compact' : 'normal')+" view")]),_c('el-button',{staticClass:"control",attrs:{"size":"mini"},on:{"click":_vm.expandAll}},[_vm._v("Expand all")]),_c('el-button',{staticClass:"control",attrs:{"size":"mini"},on:{"click":_vm.collapseAll}},[_vm._v("Collapse all")])],1)]),_c('div',{staticClass:"card-block card-body"},[_c('el-tree',{ref:"tree",class:_vm.classes,attrs:{"data":_vm.dataViewType === 'expanded' ? _vm.dataExpanded : _vm.dataCompact,"show-checkbox":"","default-expand-all":_vm.defaultExpandAll,"node-key":"key","check-on-click-node":false,"auto-expand-parent":"","expand-on-click-node":false,"render-content":_vm.renderNodeContent,"default-checked-keys":_vm.defaultEnabledKeys,"highlight-current":"","props":_vm.defaultProps},on:{"check":_vm.handleCheck,"node-click":_vm.handleNodeClick,"check-change":_vm.handleCheckChange}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-header"},[_c('h5',{staticClass:"card-title"},[_vm._v("Permissions")])])}]


// CONCATENATED MODULE: ./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue?vue&type=template&id=31de7de2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("./node_modules/core-js/modules/es7.object.entries.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("./node_modules/core-js/modules/es6.array.for-each.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("./node_modules/core-js/modules/es7.object.values.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("./node_modules/core-js/modules/es6.array.find.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("./node_modules/core-js/modules/es6.array.filter.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("./node_modules/core-js/modules/es6.array.map.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("./node_modules/core-js/modules/es6.string.iterator.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("./node_modules/core-js/modules/es6.array.from.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("./node_modules/core-js/modules/es6.function.name.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("./node_modules/core-js/modules/es6.object.define-property.js");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./packages/pyro/platform/lib/platform.development.ts + 22 modules
var platform_development = __webpack_require__("./packages/pyro/platform/lib/platform.development.ts");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/button.js
var lib_button = __webpack_require__("./node_modules/element-ui/lib/button.js");
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/button.scss
var src_button = __webpack_require__("./packages/element-ui-theme/src/button.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/checkbox.js
var lib_checkbox = __webpack_require__("./node_modules/element-ui/lib/checkbox.js");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(lib_checkbox);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/checkbox.scss
var src_checkbox = __webpack_require__("./packages/element-ui-theme/src/checkbox.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/col.js
var col = __webpack_require__("./node_modules/element-ui/lib/col.js");
var col_default = /*#__PURE__*/__webpack_require__.n(col);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/col.scss
var src_col = __webpack_require__("./packages/element-ui-theme/src/col.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/icon.js
var icon = __webpack_require__("./node_modules/element-ui/lib/icon.js");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/icon.scss
var src_icon = __webpack_require__("./packages/element-ui-theme/src/icon.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/input.js
var input = __webpack_require__("./node_modules/element-ui/lib/input.js");
var input_default = /*#__PURE__*/__webpack_require__.n(input);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/input.scss
var src_input = __webpack_require__("./packages/element-ui-theme/src/input.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/notification.js
var notification = __webpack_require__("./node_modules/element-ui/lib/notification.js");
var notification_default = /*#__PURE__*/__webpack_require__.n(notification);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/notification.scss
var src_notification = __webpack_require__("./packages/element-ui-theme/src/notification.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/row.js
var row = __webpack_require__("./node_modules/element-ui/lib/row.js");
var row_default = /*#__PURE__*/__webpack_require__.n(row);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/row.scss
var src_row = __webpack_require__("./packages/element-ui-theme/src/row.scss");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/tree.js
var tree = __webpack_require__("./node_modules/element-ui/lib/tree.js");
var tree_default = /*#__PURE__*/__webpack_require__.n(tree);

// EXTERNAL MODULE: ./packages/element-ui-theme/src/tree.scss
var src_tree = __webpack_require__("./packages/element-ui-theme/src/tree.scss");

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("./node_modules/qs/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/ts-loader??ref--1-1!./node_modules/vue-loader/lib??vue-loader-options!./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue?vue&type=script&lang=ts&
var log=__webpack_require__("./node_modules/debug/src/browser.js")('PermissionComponent');var PermissionTreevue_type_script_lang_ts_PermissionTree=function(_super){Object(tslib_es6["d" /* __extends */])(PermissionTree,_super);function PermissionTree(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.name='permission-tree';_this.dataCompact=[];_this.dataExpanded=[];_this.dataViewType='compact';_this.defaultExpandAll=true;_this.defaultProps={children:'children',label:'label',disabled:'disabled'};_this.defaultEnabledKeys=[];return _this;}Object.defineProperty(PermissionTree.prototype,"tree",{get:function get(){return this.$refs.tree;},enumerable:true,configurable:true});Object.defineProperty(PermissionTree.prototype,"classes",{get:function get(){return{'permission-tree':true,'permission-tree--compact':this.isCompact};},enumerable:true,configurable:true});Object.defineProperty(PermissionTree.prototype,"isCompact",{get:function get(){return this.dataViewType==='compact';},enumerable:true,configurable:true});Object.defineProperty(PermissionTree.prototype,"form",{get:function get(){if(this.connectForm!==undefined){return document.querySelector(this.connectForm);}},enumerable:true,configurable:true});Object.defineProperty(PermissionTree.prototype,"hasForm",{get:function get(){return this.form!==undefined;},enumerable:true,configurable:true});PermissionTree.prototype.created=function(){window['$tree']=this;this.permissions={};this.setDataFromPermissions(Object(platform_development["app"])().get('permission_tree.permissions'));this.dataViewType=this.$py.cookies.get('permission_tree.permissions.dataViewType','compact');this.defaultExpandAll=this.$py.cookies.get('permission_tree.permissions.defaultExpandAll',false);};PermissionTree.prototype.mounted=function(){this.originalCheckboxes=this.findOriginalCheckboxes();};PermissionTree.prototype.save=function(){return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var formData,response;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:if(!this.hasForm){return[2,console.warn('Cannot save() the permission-tree, no form has been connected.')];}formData=this.collectFormData();this.$log('save',Object(tslib_es6["a" /* __assign */])({},formData));if(this.saving){this.queuedSave=formData;this.$log('save','already saving. setted new queued save');return[2];}this.saving=this.saveUntilDone(formData);return[4,this.saving];case 1:response=_a.sent();this.saving=null;notification_default.a.success({title:null,message:'Permissions saved!',position:'bottom-right'});return[2,response];}});});};PermissionTree.prototype.saveUntilDone=function(formData){return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var _this=this;return Object(tslib_es6["e" /* __generator */])(this,function(_a){return[2,this.postSave(formData).then(function(response){if(_this.queuedSave){var formData_1=_this.queuedSave;_this.queuedSave=null;return _this.saveUntilDone(formData_1);}return response;})];});});};PermissionTree.prototype.postSave=function(formData){return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var data,url,response;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:data=lib_default.a.stringify(formData,{});url=this.form.getAttribute('action');return[4,this.$py.http.request({url:url,data:data,method:'post',headers:{'Content-Type':'application/x-www-form-urlencoded'}})];case 1:response=_a.sent();return[2,response];}});});};PermissionTree.prototype.collectFormData=function(){var data={};for(var i=0;i<this.form.elements.length;i++){var input=this.form.elements.item(i);if(!input.checked||input.name===''){continue;}if(typeof data[input.name]==='undefined'){data[input.name]=[];}data[input.name].push(input.value);}data['_token']=this.form.elements['_token'].value;data['action']='save';this.$log('collectFormData',data);return data;};PermissionTree.prototype.findOriginalCheckboxes=function(){var inputs=Array.from(this.$refs.input.form);return inputs.filter(function(el){return el.type==='checkbox'&&el.classList.contains('el-checkbox__original')===false;}).map(function(el){return{name:el.name,value:el.value,checked:el.checked,el:el};});};PermissionTree.prototype.handleCheck=function(data,other){log('handleCheck',{data:data,other:other});};PermissionTree.prototype.handleNodeClick=function(data,node,component){log('handleNodeClick',{data:data,node:node,component:component});if(data.type==='permission'){var checked=!node.checked;this.tree.setChecked(data,checked,true);}else if(data.type==='addon'){node.expanded=!node.expanded;}else if(data.type==='stream'&&this.isCompact===false){node.expanded=!node.expanded;}};PermissionTree.prototype.handleCheckChange=function(data,checked){if(data.type==='permission'){log('handleCheckChange',{data:data,checked:checked,me:this});this.permissions[data.key].enabled=checked;this.defaultEnabledKeys=this.getEnabledPermissions().map(function(p){return p.key;});this.updateOriginalCheckboxByNode(data,checked);this.save();}};PermissionTree.prototype.updateOriginalCheckboxByNode=function(data,checked){var name=data.stream.field+'[]';var value=data.key;var originalCheckbox=this.originalCheckboxes.find(function(c){return c.name===name&&c.value===value;});if(!originalCheckbox){return console.warn("Original checkbox not found for "+name+" / "+value);}originalCheckbox.checked=checked;if(checked!==originalCheckbox.el.checked){originalCheckbox.el.click();log('originalCheckbox updated',{data:data,name:name,value:value,originalCheckbox:originalCheckbox});}};PermissionTree.prototype.getEnabledPermissions=function(){return Object.values(this.permissions).filter(function(p){return p.enabled;});};PermissionTree.prototype.renderNodeContent=function(h,_a){var node=_a.node,data=_a.data,store=_a.store;var compact=this.dataViewType==='compact';if(data.type==='addon'){return h('span',{class:'text-addon'},data.label);}else if(data.type==='stream'){return h('span',{class:'text-stream'},data.label);}else if(data.type==='permission'){if(compact){return h('span',{class:'addon-child-texts'},[h('span',{class:'text-stream'},data.stream.label),h('span',{class:'text-permission'},data.label)]);}return h('span',{class:'text-permission'},data.label);}};PermissionTree.prototype.expandAll=function(){this.$py.cookies.set('permission_tree.permissions.defaultExpandAll',true);this.tree.store._getAllNodes().forEach(function(node){return node.expanded=true;});};PermissionTree.prototype.collapseAll=function(){this.$py.cookies.set('permission_tree.permissions.defaultExpandAll',false);this.tree.store._getAllNodes().forEach(function(node){return node.expanded=false;});};PermissionTree.prototype.switchDataViewType=function(event){var dataViewType=this.dataViewType==='expanded'?'compact':'expanded';log('switchDataViewType','from:',this.dataViewType,'  to',dataViewType);this.dataViewType=dataViewType;this.$py.cookies.set('permission_tree.permissions.dataViewType',dataViewType);if(event){var el=event.target;el.blur();}};PermissionTree.prototype.setDataFromPermissions=function(permissions){var _this=this;Object.entries(permissions).forEach(function(_a){var addonKey=_a[0],addon=_a[1];var type='addon';var dataAddonExpanded={key:addon.key,label:addon.label,type:type,children:[]};var dataAddonCompact={key:addon.key,label:addon.label,type:type,children:[]};_this.dataExpanded.push(dataAddonExpanded);_this.dataCompact.push(dataAddonCompact);Object.entries(addon.streams).forEach(function(_a){var streamKey=_a[0],stream=_a[1];type='stream';var dataStreamExpanded={key:stream.key,label:stream.label,field:stream.field,type:type,children:[]};var dataStreamCompact={key:stream.key,label:stream.label,field:stream.field,type:type,children:[]};dataAddonExpanded.children.push(dataStreamExpanded);Object.entries(stream.permissions).forEach(function(_a){var permissionKey=_a[0],permission=_a[1];var key=stream.key,label=stream.label,field=stream.field;var parentStream={key:key,label:label,field:field};type='permission';_this.permissions[permission.key]=permission;if(permission.enabled){_this.defaultEnabledKeys.push(permission.key);}dataStreamExpanded.children.push({key:permission.key,label:permission.label,type:type,stream:parentStream});dataAddonCompact.children.push({key:permission.key,label:permission.label,type:type,stream:parentStream});});});});};Object(tslib_es6["c" /* __decorate */])([platform_development["prop"].string(),Object(tslib_es6["f" /* __metadata */])("design:type",String)],PermissionTree.prototype,"connectForm",void 0);PermissionTree=Object(tslib_es6["c" /* __decorate */])([Object(platform_development["component"])({components:{'ElTree':tree_default.a,'ElCheckbox':checkbox_default.a,'ElButton':button_default.a,'ElInput':input_default.a,'ElIcon':icon_default.a,'ElRow':row_default.a,'ElCol':col_default.a}})],PermissionTree);return PermissionTree;}(platform_development["Component"]);/* harmony default export */ var PermissionTreevue_type_script_lang_ts_ = (PermissionTreevue_type_script_lang_ts_PermissionTree);
// CONCATENATED MODULE: ./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue?vue&type=script&lang=ts&
 /* harmony default export */ var lib_PermissionTreevue_type_script_lang_ts_ = (PermissionTreevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_PermissionTreevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lib_PermissionTree = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/PermissionTreeServiceProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionTreeServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pyro_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/pyro/platform/lib/platform.development.ts");
/* harmony import */ var _pyro_admin_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./addons/shared/pyro/admin-theme/lib/admin-theme.development.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PermissionTreeVuePlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/PermissionTreeVuePlugin.ts");
var log=Object(debug__WEBPACK_IMPORTED_MODULE_3__["debug"])('permission_tree.PermissionTreeServiceProvider');var PermissionTreeServiceProvider=function(_super){Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "d"])(PermissionTreeServiceProvider,_super);function PermissionTreeServiceProvider(){return _super!==null&&_super.apply(this,arguments)||this;}PermissionTreeServiceProvider.prototype.register=function(){var _this=this;this.app.hooks.start.tap('PermissionTreeServiceProvider',function(Vue){log('hooks.start',{Vue:Vue});_this.app.instance('permission_tree.permissions',PLATFORM_DATA.permission_tree.permissions);Vue.use(_PermissionTreeVuePlugin__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);});console.log('admin',_pyro_admin_theme__WEBPACK_IMPORTED_MODULE_2__);};return PermissionTreeServiceProvider;}(_pyro_platform__WEBPACK_IMPORTED_MODULE_1__["ServiceProvider"]);

/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/PermissionTreeVuePlugin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PermissionTreeVuePlugin */
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pyro_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/pyro/platform/lib/platform.development.ts");
/* harmony import */ var _PermissionTree_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
var log=debug__WEBPACK_IMPORTED_MODULE_3___default()('permission_tree.PermissionTreeVuePlugin');var PermissionTreeVuePlugin=function(){function PermissionTreeVuePlugin(){}PermissionTreeVuePlugin.install=function(_Vue,opts){var _a;if(opts===void 0){opts={};}if(this.__installed){return;}this.__installed=true;log('install',{_Vue:_Vue,opts:opts});var app=_pyro_platform__WEBPACK_IMPORTED_MODULE_1__["Application"].instance;app.hooks.install.call(_Vue,opts);Object(_pyro_platform__WEBPACK_IMPORTED_MODULE_1__["prefixAndRegisterComponents"])(_Vue,(_a={},_a[_PermissionTree_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].name]=_PermissionTree_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],_a));log('installed',{_Vue:_Vue,opts:opts});app.hooks.installed.call(_Vue,opts);};PermissionTreeVuePlugin.__installed=false;return PermissionTreeVuePlugin;}();/* harmony default export */ __webpack_exports__["a"] = (PermissionTreeVuePlugin);

/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/interfaces.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/permission-tree.development.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permission_tree_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/permission-tree.scss");
/* harmony import */ var _permission_tree_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_permission_tree_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permission_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/permission-tree.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _permission_tree__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _permission_tree__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/permission-tree.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./addons/shared/pyro/permission_tree-module/lib/permission-tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionTree_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/PermissionTree.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionTree", function() { return _PermissionTree_vue__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _PermissionTreeServiceProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/PermissionTreeServiceProvider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionTreeServiceProvider", function() { return _PermissionTreeServiceProvider__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _PermissionTreeVuePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/PermissionTreeVuePlugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionTreeVuePlugin", function() { return _PermissionTreeVuePlugin__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/interfaces.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_3__) if(["PermissionTree","PermissionTreeVuePlugin","PermissionTreeServiceProvider","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/deepmerge/dist/es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/lz-string/libs/lz-string.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),

/***/ "./node_modules/ms/index.js":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__("./node_modules/qs/lib/parse.js");
var formats = __webpack_require__("./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === 'number' ? opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/qs/lib/utils.js");
var formats = __webpack_require__("./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    formatter: formats.formatters[formats['default']],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./packages/element-ui-theme/src/aside.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/button.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/checkbox.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/col.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/container.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/divider.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/footer.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/header.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/icon.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/input.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/main.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/notification.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/row.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/element-ui-theme/src/tree.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/pyro/platform/lib/classes/Collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.map.js");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
function collect(items){return new(Collection.bind.apply(Collection,Object(tslib__WEBPACK_IMPORTED_MODULE_10__[/* __spreadArrays */ "g"])([void 0],items)))();}var Collection=function(_super){Object(tslib__WEBPACK_IMPORTED_MODULE_10__[/* __extends */ "d"])(Collection,_super);function Collection(){var _newTarget=this.constructor;var items=[];for(var _i=0;_i<arguments.length;_i++){items[_i]=arguments[_i];}var _this=_super.apply(this,items)||this;Object.setPrototypeOf(_this,_newTarget.prototype);return _this;}Collection.make=function(items){if(items===void 0){items=[];}return new(this.bind.apply(this,Object(tslib__WEBPACK_IMPORTED_MODULE_10__[/* __spreadArrays */ "g"])([void 0],items)))();};Collection.prototype.isEmpty=function(){return this.length===0;};Collection.prototype.isNotEmpty=function(){return this.length>0;};Collection.prototype.first=function(){return this[0];};Collection.prototype.last=function(){return this[this.length-1];};Collection.prototype.findBy=function(key,value){return this.find(function(item){return item[key]===value;});};Collection.prototype.where=function(key,value){return this.filter(function(item){return item[key]===value;});};Collection.prototype.whereIn=function(key,values){return this.filter(function(item){return values.includes(item[key])===true;});};Collection.prototype.whereNotIn=function(key,values){return this.filter(function(item){return values.includes(item[key])===false;});};Collection.prototype.each=function(callbackfn){this.forEach(callbackfn);return this;};Collection.prototype.newInstance=function(){var items=[];for(var _i=0;_i<arguments.length;_i++){items[_i]=arguments[_i];}var Class=this.constructor;var instance=new(Class.bind.apply(Class,Object(tslib__WEBPACK_IMPORTED_MODULE_10__[/* __spreadArrays */ "g"])([void 0],items)))();return instance;};Collection.prototype.keyBy=function(key){var cb=key;if(typeof key==='string'){cb=function cb(item){return item[key];};}var result={};this.forEach(function(item){var key=cb(item);result[key]=item;});return result;};Collection.prototype.mapKeyBy=function(key){var cb=key;if(typeof key==='string'){cb=function cb(item){return item[key];};}var result=new Map();this.forEach(function(item){var key=cb(item);result.set(key,item);});return result;};return Collection;}(Array);

/***/ }),

/***/ "./packages/pyro/platform/lib/components/script/script.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/pyro/platform/lib/platform.development.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js-exposed
var Reflect_js_exposed = __webpack_require__("./node_modules/reflect-metadata/Reflect.js-exposed");

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__("./node_modules/lodash/merge.js");
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("./node_modules/core-js/modules/es6.object.define-property.js");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/locale/lang/nl.js
var nl = __webpack_require__("./node_modules/element-ui/lib/locale/lang/nl.js");
var nl_default = /*#__PURE__*/__webpack_require__.n(nl);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/locale/index.js
var locale = __webpack_require__("./node_modules/element-ui/lib/locale/index.js");
var locale_default = /*#__PURE__*/__webpack_require__.n(locale);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("./node_modules/core-js/modules/es6.function.name.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("./node_modules/core-js/modules/es6.array.map.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("./node_modules/core-js/modules/es6.string.iterator.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("./node_modules/core-js/modules/es6.function.bind.js");

// EXTERNAL MODULE: ./node_modules/inversify/lib/inversify.js
var inversify = __webpack_require__("./node_modules/inversify/lib/inversify.js");

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__("./node_modules/eventemitter3/index.js");
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/classes/Dispatcher.ts
Object(inversify["decorate"])(Object(inversify["injectable"])(),eventemitter3_default.a);var Dispatcher_Dispatcher=function(_super){Object(tslib_es6["d" /* __extends */])(Dispatcher,_super);function Dispatcher(){return _super!==null&&_super.apply(this,arguments)||this;}Dispatcher=Object(tslib_es6["c" /* __decorate */])([Object(inversify["injectable"])()],Dispatcher);return Dispatcher;}(eventemitter3_default.a);
// EXTERNAL MODULE: ./node_modules/tapable/lib/index.js
var lib = __webpack_require__("./node_modules/tapable/lib/index.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("./node_modules/core-js/modules/es7.symbol.async-iterator.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("./node_modules/core-js/modules/es6.regexp.to-string.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("./node_modules/core-js/modules/es6.date.to-string.js");

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__("./node_modules/lodash/cloneDeep.js");
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var lodash_get = __webpack_require__("./node_modules/lodash/get.js");
var get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__("./node_modules/lodash/has.js");
var has_default = /*#__PURE__*/__webpack_require__.n(has);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var lodash_set = __webpack_require__("./node_modules/lodash/set.js");
var set_default = /*#__PURE__*/__webpack_require__.n(lodash_set);

// EXTERNAL MODULE: ./node_modules/lodash/unset.js
var unset = __webpack_require__("./node_modules/lodash/unset.js");
var unset_default = /*#__PURE__*/__webpack_require__.n(unset);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/classes/Config.ts
var Config_Config=function(){function Config(data){var _this=this;if(data===void 0){data={};}this.data=data;this.get=function(path,defaultValue){return get_default()(_this.data,path,defaultValue);};this.set=function(path,value){return set_default()(_this.data,path,value);};this.has=function(path){return has_default()(_this.data,path);};this.unset=function(path){return unset_default()(_this.data,path);};this.merge=function(value){return merge_default()(_this.data,value);};this.mergeAt=function(path,value){return _this.set(path,merge_default()({},_this.get(path,{}),value));};this.pushTo=function(path){var items=[];for(var _i=1;_i<arguments.length;_i++){items[_i-1]=arguments[_i];}return _this.set(path,_this.get(path,[]).concat(items));};this.raw=function(){return _this.data;};this.getClone=function(path,defaultValue){if(defaultValue===void 0){defaultValue={};}return path?cloneDeep_default()(_this.get(path,defaultValue)):cloneDeep_default()(_this.raw());};this.proxy=function(path){var prefix=function prefix(p){return path+'.'+p.toString();};return new Proxy(_this,{get:function get(target,p,receiver){if(target.has(prefix(p))){return target.get(prefix(p));}return target[p];},set:function set(target,p,value,receiver){target.set(prefix(p),value);return true;},has:function has(target,p){return target.has(prefix(p));}});};}Config.proxied=function(data){return new Proxy(new Config(data),{get:function get(target,p,receiver){if(target.has(p.toString())){return target.get(p.toString());}return target[p];},set:function set(target,p,value,receiver){target.set(p.toString(),value);return true;},has:function has(target,p){return target.has(p.toString());}});};return Config;}();var INJECTION=Symbol.for('INJECTION');function _proxyGetter(proto,key,resolve,doCache){function getter(){if(doCache&&!Reflect.hasMetadata(INJECTION,this,key)){Reflect.defineMetadata(INJECTION,resolve(),this,key);}if(Reflect.hasMetadata(INJECTION,this,key)){return Reflect.getMetadata(INJECTION,this,key);}else{return resolve();}}function setter(newVal){Reflect.defineMetadata(INJECTION,newVal,this,key);}Object.defineProperty(proto,key,{configurable:true,enumerable:true,get:getter,set:setter});}function configProxy(path){return function(proto,key){var resolve=function resolve(){var config=Config_Config.app.get('config');return config.proxy(path);};_proxyGetter(proto,key,resolve,true);};}function configValue(path){return function(proto,key){var resolve=function resolve(){var config=Config_Config.app.get('config');return config.get(path);};_proxyGetter(proto,key,resolve,false);};}
// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("vue");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/classes/ServiceProvider.ts
var ServiceProvider_ServiceProvider=function(){function ServiceProvider(app){this.app=app;}ServiceProvider.prototype.vuePlugin=function(plugin,options){this.app.hooks.booted.tap('Platform',function(){external_Vue_default.a.use(plugin,options);});return this;};return ServiceProvider;}();
// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__("./node_modules/debug/src/browser.js");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/classes/Application.ts
var log=__webpack_require__("./node_modules/debug/src/browser.js")('classes:Application');var defaultConfig={prefix:'py',debug:false,csrf:null};function loadConfigDefaults(){if(!Application_app().isBound('config.defaults')){var cpmfog=new Config_Config(defaultConfig);Application_app().instance('config.defaults',cpmfog);}return Application_app().get('config.defaults');}function Application_app(binding){if(binding===void 0){binding=null;}if(binding===null){return Application_Application.instance;}return Application_Application.instance.get(binding);}var Application_Application=function(_super){Object(tslib_es6["d" /* __extends */])(Application,_super);function Application(){var _this=_super.call(this,{defaultScope:'Singleton',autoBindInjectable:true,skipBaseClassChecks:false})||this;_this.hooks={loadProviders:new lib["SyncHook"](['Providers']),loadedProviders:new lib["SyncHook"](['providers']),registerProviders:new lib["SyncHook"](['providers']),registeredProviders:new lib["SyncHook"](['providers']),configure:new lib["SyncHook"](['config']),configured:new lib["SyncHook"](['config']),bootstrap:new lib["SyncHook"](['options']),bootstrapped:new lib["SyncHook"](['options']),boot:new lib["SyncHook"](),booted:new lib["SyncHook"](),start:new lib["SyncHook"](['Root']),started:new lib["SyncHook"](['root']),error:new lib["SyncWaterfallHook"](['error']),provider:{load:new lib["SyncHook"](['Provider']),loaded:new lib["SyncHook"](['provider']),register:new lib["SyncHook"](['provider']),registered:new lib["SyncHook"](['provider']),booting:new lib["SyncHook"](['provider']),booted:new lib["SyncHook"](['provider'])},install:new lib["SyncHook"](['vue','options']),installComponents:new lib["SyncWaterfallHook"](['components']),installed:new lib["SyncHook"](['vue','options'])};_this.loadedProviders={};_this.providers=[];_this.booted=false;_this.started=false;_this.shuttingDown=false;_this.register=function(Provider){return Object(tslib_es6["b" /* __awaiter */])(_this,void 0,void 0,function(){var provider;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:log('register',{Provider:Provider});this.hooks.provider.register.call(Provider);provider=Provider;if(!(Provider instanceof ServiceProvider_ServiceProvider===false))return[3,2];return[4,this.loadProvider(Provider)];case 1:provider=_a.sent();_a.label=2;case 2:if(!('register'in provider&&Reflect.getMetadata('register',provider)!==true))return[3,4];Reflect.defineMetadata('register',true,provider);return[4,this.loadAsync(new inversify["AsyncContainerModule"](function(){return provider.register();}))];case 3:_a.sent();_a.label=4;case 4:this.providers.push(provider);this.hooks.provider.registered.call(provider);return[2,this];}});});};_this.boot=function(){return Object(tslib_es6["b" /* __awaiter */])(_this,void 0,void 0,function(){var _i,_a,provider;return Object(tslib_es6["e" /* __generator */])(this,function(_b){switch(_b.label){case 0:if(this.booted){return[2,this];}log('boot');this.booted=true;this.hooks.boot.call();_i=0,_a=this.providers;_b.label=1;case 1:if(!(_i<_a.length))return[3,4];provider=_a[_i];if(!('boot'in provider&&Reflect.getMetadata('boot',provider)!==true))return[3,3];this.hooks.provider.booting.call(provider);Reflect.defineMetadata('boot',true,provider);return[4,provider.boot()];case 2:_b.sent();this.hooks.provider.booted.call(provider);_b.label=3;case 3:_i++;return[3,1];case 4:this.hooks.booted.call();return[2,this];}});});};_this.startEnabled=true;_this.Root=external_Vue_default.a;_this.start=function(mountPoint,options){if(mountPoint===void 0){mountPoint=null;}if(options===void 0){options={};}return Object(tslib_es6["b" /* __awaiter */])(_this,void 0,void 0,function(){return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:if(this.started){return[2];}if(!this.startEnabled){log('startEnabled=false','Skipping start',this);return[2];}log('start',{mountPoint:mountPoint,options:options});this.started=true;this.hooks.start.call(external_Vue_default.a);this.root=new(this.Root.extend({}))();this.root.$mount(mountPoint);return[4,this.root.$nextTick()];case 1:_a.sent();this.instance('root',this.root);this.hooks.started.call(this.root);return[2,this];}});});};_this.error=function(error){return Object(tslib_es6["b" /* __awaiter */])(_this,void 0,Promise,function(){return Object(tslib_es6["e" /* __generator */])(this,function(_a){log('error',{error:error});error=this.hooks.error.call(error);throw error;});});};if(Application._instance!==undefined){throw new Error('Cannot create another instance of Application');}Application._instance=_this;_this.bind(Application).toConstantValue(_this);_this.alias(Application,'app',true);_this.bind('app').toConstantValue(_this);_this.bind('events').to(Dispatcher_Dispatcher).inSingletonScope();return _this;}Object.defineProperty(Application,"instance",{get:function get(){if(this._instance===undefined){this._instance=new Application();}return this._instance;},enumerable:true,configurable:true});;Object.defineProperty(Application.prototype,"config",{get:function get(){return this.get('config');},enumerable:true,configurable:true});Application.prototype.bootstrap=function(_options){var mergeOptions=[];for(var _i=1;_i<arguments.length;_i++){mergeOptions[_i-1]=arguments[_i];}return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var options;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:options=merge_default.a.apply(void 0,Object(tslib_es6["g" /* __spreadArrays */])([{providers:[],config:{}},_options],mergeOptions));log('bootstrap',{options:options});this.hooks.bootstrap.call(options);return[4,this.loadProviders(options.providers)];case 1:_a.sent();this.configure(options.config);return[4,this.registerProviders(this.providers)];case 2:_a.sent();this.hooks.bootstrapped.call(options);return[2,this];}});});};Application.prototype.loadProviders=function(Providers){return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var _this=this;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:log('loadProviders',{Providers:Providers});this.hooks.loadProviders.call(Providers);return[4,Promise.all(Providers.map(function(Provider){return Object(tslib_es6["b" /* __awaiter */])(_this,void 0,void 0,function(){return Object(tslib_es6["e" /* __generator */])(this,function(_a){return[2,this.loadProvider(Provider)];});});}))];case 1:_a.sent();this.hooks.loadedProviders.call(this.providers);return[2,this];}});});};Application.prototype.loadProvider=function(Provider){return Object(tslib_es6["b" /* __awaiter */])(this,void 0,Promise,function(){var provider,defaults;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:if(Provider.name in this.loadedProviders){return[2,this.loadedProviders[Provider.name]];}log('loadProvider',{Provider:Provider});this.hooks.provider.load.call(Provider);provider=new Provider(this);if(!('configure'in provider&&Reflect.getMetadata('configure',provider)!==true))return[3,2];defaults=loadConfigDefaults();Reflect.defineMetadata('configure',true,provider);return[4,provider.configure(defaults)];case 1:_a.sent();_a.label=2;case 2:if(!('providers'in provider&&Reflect.getMetadata('providers',provider)!==true))return[3,4];Reflect.defineMetadata('providers',true,provider);return[4,this.loadProviders(provider.providers)];case 3:_a.sent();_a.label=4;case 4:this.loadedProviders[Provider.name]=provider;this.providers.push(provider);this.hooks.provider.loaded.call(provider);return[2,provider];}});});};Application.prototype.configure=function(config){config=merge_default()(loadConfigDefaults().raw(),config);this.hooks.configure.call(config);var instance=Config_Config.proxied(config);this.instance('config',instance);this.hooks.configured.call(instance);return this;};Application.prototype.registerProviders=function(providers){if(providers===void 0){providers=this.providers;}return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var _this=this;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:this.hooks.registerProviders.call(providers);return[4,Promise.all(this.providers.map(function(Provider){return Object(tslib_es6["b" /* __awaiter */])(_this,void 0,void 0,function(){return Object(tslib_es6["e" /* __generator */])(this,function(_a){return[2,this.register(Provider)];});});}))];case 1:_a.sent();this.hooks.registeredProviders.call(providers);return[2,this];}});});};Application.prototype.extendRoot=function(options){this.Root=this.Root.extend(options);return this;};Application.prototype.createLog=function(namespace){return browser_default()(namespace);};Application.prototype.addBindingGetter=function(id,key){if(key===void 0){key=null;}key=key||id;var self=this;Object.defineProperty(this,key,{get:function get(){return self.get(id);}});};Application.prototype.alias=function(abstract,alias,singleton){if(singleton===void 0){singleton=false;}var binding=this.bind(alias).toDynamicValue(function(ctx){return ctx.container.get(abstract);});if(singleton){binding.inSingletonScope();}return this;};Application.prototype.bindIf=function(id,override,cb){if(override===void 0){override=false;}if(this.isBound(id)&&!override)return this;cb(this.isBound(id)?this.rebind(id):this.bind(id));return this;};Application.prototype.dynamic=function(id,cb){var _this=this;return this.bind(id).toDynamicValue(function(ctx){var req=ctx.currentRequest;return cb(_this);});};Application.prototype.singleton=function(id,value,override){if(override===void 0){override=false;}return this.bindIf(id,override,function(b){return b.to(value).inSingletonScope();});};Application.prototype.binding=function(id,value){return this;};Application.prototype.instance=function(id,value,override){if(override===void 0){override=false;}return this.bindIf(id,override,function(b){return b.toConstantValue(value);});};Application.prototype.ctxfactory=function(id,factory){this.bind(id).toFactory(function(ctx){return factory(ctx);});return this;};Application.prototype.factory=function(id,factory){this.bind(id).toFactory(function(ctx){return factory;});return this;};return Application;}(inversify["Container"]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("./node_modules/core-js/modules/es6.array.for-each.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("./node_modules/core-js/modules/es6.array.from.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("./node_modules/core-js/modules/es6.array.is-array.js");

// CONCATENATED MODULE: ./packages/pyro/platform/lib/plugins/log.ts
var log_log=__webpack_require__("./node_modules/debug/src/browser.js")('plugins:http:install');var log_LogPlugin=function(){function LogPlugin(){}LogPlugin.install=function(_Vue,opts){log_log('install',{_Vue:_Vue,opts:opts});if(this.__installed){return;}this.__installed=true;_Vue.prototype.$log=function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}var opts=this.__log;var log=__webpack_require__("./node_modules/debug/src/browser.js")(opts.prefix+opts.ns+opts.name+opts.id+opts.suffix);args=[].concat(opts.prepend).concat(args).concat(opts.append);return log.apply(void 0,args);};var strats=_Vue.config.optionMergeStrategies;strats.setupLogger=strats.beforeCreate;_Vue.config['_lifecycleHooks'].push('setupLogger');_Vue.mixin({beforeCreate:function beforeCreate(){this['__log']={suffix:'',prefix:'',name:'',id:'',ns:'component:',prepend:[],append:[]};},created:function created(){this['__log'].name=this.$options.name;},beforeMount:function beforeMount(){var _this=this;if(Array.isArray(this.$options.setupLogger)){var handlers=Array.from(this.$options.setupLogger);handlers.forEach(function(handler){var options=handler.call(_this,_this['__log']);if(Object(esm_typeof["a" /* default */])(options)==='object'){_this['__log']=Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({},_this['__log']),options);}});}}});};LogPlugin.__installed=false;return LogPlugin;}();/* harmony default export */ var plugins_log = (log_LogPlugin);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/plugins/http.ts
var http_log=__webpack_require__("./node_modules/debug/src/browser.js")('plugins:http:install');var http_HttpPlugin=function(){function HttpPlugin(){}HttpPlugin.install=function(_Vue,opts){http_log('install',{_Vue:_Vue,opts:opts});if(this.__installed){return;}this.__installed=true;_Vue.prototype.$http=axios_default.a;};HttpPlugin.__installed=false;return HttpPlugin;}();/* harmony default export */ var http = (http_HttpPlugin);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("./node_modules/core-js/modules/es7.object.values.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("./node_modules/core-js/modules/es6.object.keys.js");

// EXTERNAL MODULE: ./node_modules/lodash/kebabCase.js
var kebabCase = __webpack_require__("./node_modules/lodash/kebabCase.js");
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/utils/registerComponents.ts
var registerComponents_log=__webpack_require__("./node_modules/debug/src/browser.js")('utils:registerComponents');function prefixAndRegisterComponents(_Vue,_components){var components=Application_app().hooks.installComponents.call(Object(tslib_es6["a" /* __assign */])({},_components));Object.keys(components).forEach(function(key){var componentName=key;if(Application_app().config.prefix){componentName=Application_app().config.prefix+"-"+kebabCase_default()(key);}registerComponents_log('prefixAndRegisterComponents componentName',componentName);_Vue.component(componentName,components[key]);});return components;}function registerElementComponents(_Vue,_components){var components=Application_app().hooks.installComponents.call(Object(tslib_es6["a" /* __assign */])({},_components));Object.values(components).forEach(function(component){registerComponents_log('registerElementComponents component.name',component.name);_Vue.component(component.name,component);});return components;}
// EXTERNAL MODULE: ./packages/pyro/platform/lib/components/script/script.scss
var script = __webpack_require__("./packages/pyro/platform/lib/components/script/script.scss");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("./node_modules/core-js/modules/es6.regexp.replace.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("./node_modules/core-js/modules/es6.object.create.js");

// EXTERNAL MODULE: external "VueClassComponent"
var external_VueClassComponent_ = __webpack_require__("vue-class-component");

// CONCATENATED MODULE: ./node_modules/vue-class-component/lib/reflect.js
// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

// CONCATENATED MODULE: ./node_modules/vue-class-component/lib/util.js

var noop = function () { };
var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return external_Vue_default.a.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

// CONCATENATED MODULE: ./node_modules/vue-class-component/lib/data.js


function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (true) {
        if (!(Component.prototype instanceof external_Vue_default.a) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

// CONCATENATED MODULE: ./node_modules/vue-class-component/lib/component.js




var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof external_Vue_default.a
        ? superProto.constructor
        : external_Vue_default.a;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if ( true &&
            reservedPropertyNames.indexOf(key) >= 0) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("./node_modules/core-js/modules/es6.number.constructor.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__("./node_modules/core-js/modules/es6.string.trim.js");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("./node_modules/core-js/modules/es6.regexp.split.js");

// CONCATENATED MODULE: ./packages/pyro/platform/lib/utils/kindOf.ts
var kindsOf={};'Number String Boolean Function RegExp Array Date Error'.split(' ').forEach(function(k){kindsOf['[object '+k+']']=k.toLowerCase();});var nativeTrim=String.prototype.trim;var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;','/':'&#x2F;'};function kindOf(value){if(value==null){return String(value);}return kindsOf[kindsOf.toString.call(value)]||'object';}
// CONCATENATED MODULE: ./packages/pyro/platform/lib/decorators/prop.ts
var reflectMetadataIsSupported=typeof Reflect!=='undefined'&&typeof Reflect.getMetadata!=='undefined';function applyMetadata(options,target,key){if(reflectMetadataIsSupported&&typeof options.type==='undefined'){options.type=Reflect.getMetadata('design:type',target,key);}}function applyPropDecorator(options,target,key){applyMetadata(options,target,key);Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,k){(componentOptions.props||(componentOptions.props={}))[k]=options;})(target,key.toString());}function createPropDecorator(options,cb){return function(target,key){options.target=target;if(cb){options=cb(options);}return applyPropDecorator(options,target,key);};}var propTypeMap={boolean:Boolean,string:String,number:Number,array:Array,object:Object,function:Function};function getPropOptions(params){var options={};if(Object(esm_typeof["a" /* default */])(params[0])==='object'){options=params[0];}else if(typeof params[0]==='function'){options.type=params[0];options.default=params[2]===true?undefined:params[1];options.required=params[2]===true;options.validator=params[3];}return options;}var prop;prop=function prop(){var params=[];for(var _i=0;_i<arguments.length;_i++){params[_i]=arguments[_i];}var options=getPropOptions(params);return createPropDecorator(options);};prop.sync=function(propName){var params=[];for(var _i=1;_i<arguments.length;_i++){params[_i-1]=arguments[_i];}var options=getPropOptions(params);return function(target,key){applyMetadata(options,target,key);Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,k){(componentOptions.props||(componentOptions.props={}))[propName]=options;(componentOptions.computed||(componentOptions.computed={}))[k]={get:function get(){return this[propName];},set:function set(value){this.$emit("update:"+propName,value);}};})(target,key);};};prop.classPrefix=function(defaultName){var options={type:String,default:function _default(){if(Application_app().config.prefix){return Application_app().config.prefix+'-'+defaultName;}return defaultName;}};return createPropDecorator(options);};Object.keys(propTypeMap).forEach(function(key){prop[key]=function(){var params=[];for(var _i=0;_i<arguments.length;_i++){params[_i]=arguments[_i];}var options={};if(kindOf(params[0])==='object'){options=params[0];}else{options={type:propTypeMap[key],default:params[0],validator:params[1]};}return createPropDecorator(options);};prop[key].required=function(){var params=[];for(var _i=0;_i<arguments.length;_i++){params[_i]=arguments[_i];}var options={type:propTypeMap[key],required:true,validator:params[0]};return createPropDecorator(options);};});
// CONCATENATED MODULE: ./packages/pyro/platform/lib/decorators/index.ts
var decorators_log=browser_default()('decorators');var reactiveInjectKey='__reactiveInject__';function component(options){if(options===void 0){options={};}if(typeof options==='function'){var Extended=componentFactory(options);return Extended;}return function(Component){var Extended=componentFactory(Component,options);if(Component['template']!==undefined){Extended=Extended.extend({template:Component['template']});}if(Component['components']!==undefined){Extended=Extended.extend({components:Component['components']});}if(Component.prototype.setupLogger!==undefined){Extended=Extended.extend({setupLogger:Component.prototype.setupLogger});}return Extended;};}function inject(options){return Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,key){if(typeof componentOptions.inject==='undefined'){componentOptions.inject={};}if(!Array.isArray(componentOptions.inject)){componentOptions.inject[key]=options||key;}});}function rinject(options){return Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,key){if(typeof componentOptions.inject==='undefined'){componentOptions.inject={};}if(!Array.isArray(componentOptions.inject)){var fromKey_1=!!options?options.from||options:key;var defaultVal_1=!!options&&options.default||undefined;if(!componentOptions.computed)componentOptions.computed={};componentOptions.computed[key]=function(){var obj=this[reactiveInjectKey];return obj?obj[fromKey_1]:defaultVal_1;};componentOptions.inject[reactiveInjectKey]=reactiveInjectKey;}});}function provide(key){return Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,k){var provide=componentOptions.provide;if(typeof provide!=='function'||!provide.managed){var original_1=componentOptions.provide;provide=componentOptions.provide=function(){var rv=Object.create((typeof original_1==='function'?original_1.call(this):original_1)||null);for(var i in provide.managed){rv[provide.managed[i]]=this[i];}return rv;};provide.managed={};}provide.managed[k]=key||k;});}function rprovide(key){return Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,k){var provide=componentOptions.provide;if(typeof provide!=='function'||!provide.managed){var original_2=componentOptions.provide;provide=componentOptions.provide=function(){var _this=this;var rv=Object.create((typeof original_2==='function'?original_2.call(this):original_2)||null);rv[reactiveInjectKey]={};var _loop_1=function _loop_1(i){rv[provide.managed[i]]=this_1[i];Object.defineProperty(rv[reactiveInjectKey],provide.managed[i],{enumerable:true,get:function get(){return _this[i];}});};var this_1=this;for(var i in provide.managed){_loop_1(i);}return rv;};provide.managed={};}provide.managed[k]=key||k;});}var decorators_reflectMetadataIsSupported=typeof Reflect!=='undefined'&&typeof Reflect.getMetadata!=='undefined';function isPromise(obj){return obj instanceof Promise||obj&&typeof obj.then==='function';}function decorators_applyMetadata(options,target,key){if(decorators_reflectMetadataIsSupported){if(!Array.isArray(options)&&typeof options!=='function'&&typeof options.type==='undefined'){options.type=Reflect.getMetadata('design:type',target,key);}}}function model(event,options){if(options===void 0){options={};}return function(target,key){decorators_applyMetadata(options,target,key);Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,k){(componentOptions.props||(componentOptions.props={}))[k]=options;componentOptions.model={prop:k,event:event||k};})(target,key);};}var decorators_watch;decorators_watch=function watch(path,options){if(options===void 0){options={};}var _a=options.deep,deep=_a===void 0?false:_a,_b=options.immediate,immediate=_b===void 0?false:_b;return Object(external_VueClassComponent_["createDecorator"])(function(componentOptions,handler){if(Object(esm_typeof["a" /* default */])(componentOptions.watch)!=='object'){componentOptions.watch=Object.create(null);}var watch=componentOptions.watch;if(Object(esm_typeof["a" /* default */])(watch[path])==='object'&&!Array.isArray(watch[path])){watch[path]=[watch[path]];}else if(typeof watch[path]==='undefined'){watch[path]=[];}watch[path].push({handler:handler,deep:deep,immediate:immediate});});};decorators_watch.immediate=function(path,options){if(options===void 0){options={};}return decorators_watch(path,Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({},options),{immediate:true}));};decorators_watch.deep=function(path,options){if(options===void 0){options={};}return decorators_watch(path,Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({},options),{immediate:true}));};var hyphenateRE=/\B([A-Z])/g;var hyphenate=function hyphenate(str){return str.replace(hyphenateRE,'-$1').toLowerCase();};function decorators_emit(event){return function(_target,key,descriptor){key=hyphenate(key);var original=descriptor.value;descriptor.value=function emitter(){var _this=this;var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}var emit=function emit(returnValue){if(returnValue!==undefined)args.unshift(returnValue);_this.$emit.apply(_this,Object(tslib_es6["g" /* __spreadArrays */])([event||key],args));};var returnValue=original.apply(this,args);if(isPromise(returnValue)){returnValue.then(function(returnValue){emit(returnValue);});}else{emit(returnValue);}return returnValue;};};}function ref(refKey){return Object(external_VueClassComponent_["createDecorator"])(function(options,key){options.computed=options.computed||{};options.computed[key]={cache:false,get:function get(){return this.$refs[refKey||key];}};});}function inject$(id){return Object(external_VueClassComponent_["createDecorator"])(function(options,key){(options.mixins||(options.mixins=[])).push({data:function data(){var _a;return _a={},_a[key]=Application_app().get(id),_a;}});});}
// CONCATENATED MODULE: ./packages/pyro/platform/lib/components/script/Script.ts
var Script_log=__webpack_require__("./node_modules/debug/src/browser.js")('components:script');var Script_Script=function(_super){Object(tslib_es6["d" /* __extends */])(Script,_super);function Script(){return _super!==null&&_super.apply(this,arguments)||this;}Script.prototype.created=function(){var _this=this;this.$nextTick(function(){var script=document.createElement('script');document.body.append(script);if(_this.src){script.setAttribute('src',_this.src);}else{var content=_this.$el&&_this.$el.textContent?_this.$el.textContent:null;_this.$el.textContent='';script.textContent=content;}Script_log('created script',script);});Script_log('created',this);};Script.template="<div class=\"py-script\" style=\"display: none\"><slot></slot></div>";Object(tslib_es6["c" /* __decorate */])([prop(String),Object(tslib_es6["f" /* __metadata */])("design:type",String)],Script.prototype,"src",void 0);Script=Object(tslib_es6["c" /* __decorate */])([component({})],Script);return Script;}(external_Vue_default.a);
// CONCATENATED MODULE: ./packages/pyro/platform/lib/components/script/index.ts

// CONCATENATED MODULE: ./packages/pyro/platform/lib/VuePlugin.ts
var VuePlugin_log=__webpack_require__("./node_modules/debug/src/browser.js")('install');var VuePlugin_VuePlugin=function(){function VuePlugin(){}VuePlugin.install=function(_Vue,opts){if(opts===void 0){opts={};}if(this.__installed){return;}this.__installed=true;VuePlugin_log('install',{_Vue:_Vue,opts:opts});var app=Application_Application.instance;app.hooks.install.call(_Vue,opts);locale_default.a.use(nl_default.a);_Vue.use(plugins_log);_Vue.use(http,{csrf:app.config.csrf});prefixAndRegisterComponents(_Vue,{'script':Script_Script});Object.defineProperty(_Vue.prototype,'$py',{get:function get(){return app;}});app.hooks.installed.call(_Vue,opts);};VuePlugin.__installed=false;return VuePlugin;}();/* harmony default export */ var lib_VuePlugin = (VuePlugin_VuePlugin);
// CONCATENATED MODULE: ./packages/pyro/platform/lib/interfaces.ts
function staticImplements(){return function(constructor){};}
// EXTERNAL MODULE: ./packages/pyro/platform/lib/classes/Collection.ts
var Collection = __webpack_require__("./packages/pyro/platform/lib/classes/Collection.ts");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("./node_modules/core-js/modules/es6.regexp.constructor.js");

// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__("./node_modules/lz-string/libs/lz-string.js");
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./packages/pyro/platform/lib/utils/storage.ts
var typePrefix='__c_';function _compress(value){return typePrefix+'lz-s|'+lz_string_default.a.compressToUTF16(value);}function _decompress(value){var type,length,source;length=value.length;if(length<9){return value;}type=value.substr(0,8);source=value.substring(9);if(type===typePrefix+'lz-s'){value=lz_string_default.a.decompressFromUTF16(source);}return value;}function encode(value){if(Object.prototype.toString.call(value)==='[object Date]'){return typePrefix+'date|'+value.toUTCString();}if(Object.prototype.toString.call(value)==='[object RegExp]'){return typePrefix+'expr|'+value.source;}if(typeof value==='number'){return typePrefix+'numb|'+value;}if(typeof value==='boolean'){return typePrefix+'bool|'+(value?'1':'0');}if(typeof value==='string'){return typePrefix+'strn|'+value;}if(typeof value==='function'){return typePrefix+'strn|'+value.toString();}if(value===Object(value)){return typePrefix+'objt|'+JSON.stringify(value);}return value;}function decode(value){var type,length,source;length=value.length;if(length<9){return value;}type=value.substr(0,8);source=value.substring(9);switch(type){case typePrefix+'date':return new Date(source);case typePrefix+'expr':return new RegExp(source);case typePrefix+'numb':return Number(source);case typePrefix+'bool':return Boolean(source==='1');case typePrefix+'strn':return''+source;case typePrefix+'objt':return JSON.parse(source);default:return value;}}var storage_Storage=function(){function Storage(){this.drivers={};this.handlers={serialize:function serialize(value){return encode(value);},deserialize:function deserialize(value){return decode(value);},compress:function compress(value){return _compress(value);},decompress:function decompress(value){return _decompress(value);}};this.options={compression:false,seralization:true,driver:null};}Storage_1=Storage;Storage.prototype.configure=function(options){if(options===void 0){options={};}options=merge_default()({drivers:Storage_1.defaultDrivers(),driver:'local'},options);for(var _i=0,_a=options.drivers;_i<_a.length;_i++){var driver=_a[_i];this.registerDriver(driver);}this.use(options.driver);return this;};Storage.prototype.o=function(o){var _this=this;if(o===void 0){o={};}var options=merge_default()({},this.options,o);return{decode:function decode(value){return options.seralization?_this.handlers.deserialize(value):value;},encode:function encode(value){return options.seralization?_this.handlers.serialize(value):value;},decompress:function decompress(value){return options.compression?_this.handlers.decompress(value):value;},compress:function compress(value){return options.compression?_this.handlers.compress(value):value;},driver:options.driver in this.drivers?this.drivers[options.driver]:this.driver,options:options};};Storage.prototype.registerDriver=function(driver){this.drivers[driver.name]=driver;if(!this.driver){this.driver=driver;}return this;};Storage.prototype.use=function(driverName){if(driverName&&driverName in this.drivers){this.driver=this.drivers[driverName];}return this;};Storage.prototype.has=function(key,options){return this.o(options).driver.has(key);};Storage.prototype.get=function(key,defaultValue,options){var _a=this.o(options),driver=_a.driver,decode=_a.decode,decompress=_a.decompress;var value=defaultValue;if(driver.has(key)){value=driver.get(key);value=decompress(value);value=decode(value);}return value;};Storage.prototype.set=function(key,value,options){var _a=this.o(options),driver=_a.driver,encode=_a.encode,compress=_a.compress;value=encode(value);value=compress(value);driver.set(key,value);return this;};Storage.prototype.unset=function(key,value,options){this.o(options).driver.unset(key);return this;};Storage.prototype.clear=function(options){this.o(options).driver.clear();return this;};Storage.defaultDrivers=function(){return[new StorageDriver('local',window.localStorage),new StorageDriver('session',window.sessionStorage)];};var Storage_1;Storage=Storage_1=Object(tslib_es6["c" /* __decorate */])([Object(inversify["injectable"])()],Storage);return Storage;}();var StorageDriver=function(){function StorageDriver(name,storage){this.name=name;this.storage=storage;}StorageDriver.prototype.get=function(key){return this.storage.getItem(key);};StorageDriver.prototype.has=function(key){return this.storage.getItem(key)!==undefined&&this.storage.getItem(key)!==null;};StorageDriver.prototype.set=function(key,value){this.storage.setItem(key,value);};StorageDriver.prototype.unset=function(key){this.storage.removeItem(key);};StorageDriver.prototype.clear=function(){this.storage.clear();};StorageDriver.prototype.getSize=function(){return this.storage.length;};return StorageDriver;}();var storage_Cookies=function(){function Cookies(){this.defaults.expires=30;}Object.defineProperty(Cookies.prototype,"defaults",{get:function get(){return js_cookie_default.a.defaults;},set:function set(defaults){js_cookie_default.a.defaults=defaults;},enumerable:true,configurable:true});Cookies.prototype.get=function(name,defaultValue){if(!this.has(name)){return defaultValue;}return this.get(name);};Cookies.prototype.has=function(name){return js_cookie_default.a.get(name)!==undefined;};Cookies.prototype.set=function(name,value,options){if(options===void 0){options={};}js_cookie_default.a.set(name,value,options);return this;};Cookies.prototype.unset=function(name,options){if(options===void 0){options={};}js_cookie_default.a.remove(name,options);return this;};Cookies=Object(tslib_es6["c" /* __decorate */])([Object(inversify["injectable"])(),Object(tslib_es6["f" /* __metadata */])("design:paramtypes",[])],Cookies);return Cookies;}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("./node_modules/core-js/modules/es6.array.index-of.js");

// CONCATENATED MODULE: ./packages/pyro/platform/lib/utils/platform.ts
var isSSR=typeof window==='undefined';function getMatch(userAgent,platformMatch){var match=/(edge)\/([\w.]+)/.exec(userAgent)||/(opr)[\/]([\w.]+)/.exec(userAgent)||/(vivaldi)[\/]([\w.]+)/.exec(userAgent)||/(chrome)[\/]([\w.]+)/.exec(userAgent)||/(iemobile)[\/]([\w.]+)/.exec(userAgent)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent)||/(webkit)[\/]([\w.]+)/.exec(userAgent)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent)||/(msie) ([\w.]+)/.exec(userAgent)||userAgent.indexOf('trident')>=0&&/(rv)(?::| )([\w.]+)/.exec(userAgent)||userAgent.indexOf('compatible')<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent)||[];return{browser:match[5]||match[3]||match[1]||'',version:match[2]||match[4]||'0',versionNumber:match[4]||match[2]||'0',platform:platformMatch[0]||''};}function getPlatformMatch(userAgent){return /(ipad)/.exec(userAgent)||/(ipod)/.exec(userAgent)||/(windows phone)/.exec(userAgent)||/(iphone)/.exec(userAgent)||/(kindle)/.exec(userAgent)||/(silk)/.exec(userAgent)||/(android)/.exec(userAgent)||/(win)/.exec(userAgent)||/(mac)/.exec(userAgent)||/(linux)/.exec(userAgent)||/(cros)/.exec(userAgent)||/(playbook)/.exec(userAgent)||/(bb)/.exec(userAgent)||/(blackberry)/.exec(userAgent)||[];}function getPlatformIs(userAgent){userAgent=(userAgent||navigator.userAgent||navigator.vendor||window['opera']).toLowerCase();var platformMatch=getPlatformMatch(userAgent),matched=getMatch(userAgent,platformMatch),browser={ssr:isSSR};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version;browser.versionNumber=parseInt(matched.versionNumber,10);}if(matched.platform){browser[matched.platform]=true;}if(browser.android||browser.bb||browser.blackberry||browser.ipad||browser.iphone||browser.ipod||browser.kindle||browser.playbook||browser.silk||browser['windows phone']){browser.mobile=true;}if(browser.ipod||browser.ipad||browser.iphone){browser.ios=true;}if(browser['windows phone']){browser.winphone=true;delete browser['windows phone'];}if(browser.cros||browser.mac||browser.linux||browser.win){browser.desktop=true;}if(browser.chrome||browser.opr||browser.safari||browser.vivaldi){browser.webkit=true;}if(browser.rv||browser.iemobile){matched.browser='ie';browser.ie=true;}if(browser.edge){matched.browser='edge';browser.edge=true;}if(browser.safari&&browser.blackberry||browser.bb){matched.browser='blackberry';browser.blackberry=true;}if(browser.safari&&browser.playbook){matched.browser='playbook';browser.playbook=true;}if(browser.opr){matched.browser='opera';browser.opera=true;}if(browser.safari&&browser.android){matched.browser='android';browser.android=true;}if(browser.safari&&browser.kindle){matched.browser='kindle';browser.kindle=true;}if(browser.safari&&browser.silk){matched.browser='silk';browser.silk=true;}if(browser.vivaldi){matched.browser='vivaldi';browser.vivaldi=true;}browser.name=matched.browser;browser.platform=matched.platform;if(!isSSR){if(document.location.href.indexOf('chrome-extension://')===0){browser.chromeExt=true;}else if(window['_cordovaNative']||window['cordova']){browser.cordova=true;}}return browser;}function getPlatform(){if(isSSR){return{is:getPlatformIs('firefox'),has:{touch:false,webStorage:false},within:{iframe:false}};}var webStorage;try{if(window.localStorage){webStorage=true;}}catch(e){webStorage=false;}return{is:getPlatformIs(),has:{touch:function(){return!!('ontouchstart'in document.documentElement)||window.navigator.msMaxTouchPoints>0;}(),webStorage:webStorage},within:{iframe:window.self!==window.top}};}var Platform=getPlatform();/* harmony default export */ var platform = (Platform);
// CONCATENATED MODULE: ./packages/pyro/platform/lib/PlatformServiceProvider.ts
var PlatformServiceProvider_PlatformServiceProvider=function(_super){Object(tslib_es6["d" /* __extends */])(PlatformServiceProvider,_super);function PlatformServiceProvider(){return _super!==null&&_super.apply(this,arguments)||this;}PlatformServiceProvider.prototype.register=function(){var _this=this;this.app.bind('storage').to(storage_Storage).inSingletonScope().onActivation(function(context,storage){var _a=storage_Storage.defaultDrivers(),local=_a[0],session=_a[1];storage.configure({drivers:[local,session],driver:local.name});return storage;});this.app.addBindingGetter('storage');this.app.singleton('cookies',storage_Cookies);this.app.addBindingGetter('cookies');this.app.instance('platform',platform);this.app.addBindingGetter('platform');this.app.instance('events',new external_Vue_default.a());this.app.addBindingGetter('events');this.app.instance('data',Config_Config.proxied(PLATFORM_DATA));this.app.addBindingGetter('data');this.app.instance('http.config',{});this.app.dynamic('http',function(app){axios_default.a.defaults.headers.common['X-Requested-With']='XMLHttpRequest';var token=document.head.querySelector('meta[name="csrf-token"]');if(token){axios_default.a.defaults.headers.common['X-CSRF-TOKEN']=token['content'];}else{axios_default.a.defaults.headers.common['X-CSRF-TOKEN']=_this.app.config.csrf;}return axios_default.a.create(app.get('http.config'));});this.app.addBindingGetter('http');this.vuePlugin(lib_VuePlugin);};return PlatformServiceProvider;}(ServiceProvider_ServiceProvider);
// CONCATENATED MODULE: ./packages/pyro/platform/lib/platform.ts
var platform_Component=function(_super){Object(tslib_es6["d" /* __extends */])(Component,_super);function Component(){return _super!==null&&_super.apply(this,arguments)||this;}return Component;}(external_Vue_default.a);function getTreeNode(){return Object(tslib_es6["b" /* __awaiter */])(this,void 0,void 0,function(){var treeNode;return Object(tslib_es6["e" /* __generator */])(this,function(_a){switch(_a.label){case 0:return[4,__webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "./packages/pyro/platform/lib/utils/tree-node.ts"))];case 1:treeNode=_a.sent();return[2,treeNode];}});});}
// CONCATENATED MODULE: ./packages/pyro/platform/lib/platform.development.ts
/* concated harmony reexport merge */__webpack_require__.d(__webpack_exports__, "merge", function() { return merge_default.a; });
/* concated harmony reexport Plugin */__webpack_require__.d(__webpack_exports__, "Plugin", function() { return VuePlugin_VuePlugin; });
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return platform_Component; });
/* concated harmony reexport getTreeNode */__webpack_require__.d(__webpack_exports__, "getTreeNode", function() { return getTreeNode; });
/* concated harmony reexport staticImplements */__webpack_require__.d(__webpack_exports__, "staticImplements", function() { return staticImplements; });
/* concated harmony reexport loadConfigDefaults */__webpack_require__.d(__webpack_exports__, "loadConfigDefaults", function() { return loadConfigDefaults; });
/* concated harmony reexport app */__webpack_require__.d(__webpack_exports__, "app", function() { return Application_app; });
/* concated harmony reexport Application */__webpack_require__.d(__webpack_exports__, "Application", function() { return Application_Application; });
/* concated harmony reexport ServiceProvider */__webpack_require__.d(__webpack_exports__, "ServiceProvider", function() { return ServiceProvider_ServiceProvider; });
/* concated harmony reexport Dispatcher */__webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher_Dispatcher; });
/* concated harmony reexport Config */__webpack_require__.d(__webpack_exports__, "Config", function() { return Config_Config; });
/* concated harmony reexport configProxy */__webpack_require__.d(__webpack_exports__, "configProxy", function() { return configProxy; });
/* concated harmony reexport configValue */__webpack_require__.d(__webpack_exports__, "configValue", function() { return configValue; });
/* concated harmony reexport collect */__webpack_require__.d(__webpack_exports__, "collect", function() { return Collection["b" /* collect */]; });
/* concated harmony reexport Collection */__webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection["a" /* Collection */]; });
/* concated harmony reexport PlatformServiceProvider */__webpack_require__.d(__webpack_exports__, "PlatformServiceProvider", function() { return PlatformServiceProvider_PlatformServiceProvider; });
/* concated harmony reexport Vue */__webpack_require__.d(__webpack_exports__, "Vue", function() { return external_Vue_default.a; });
/* concated harmony reexport Mixins */__webpack_require__.d(__webpack_exports__, "Mixins", function() { return external_VueClassComponent_["mixins"]; });
/* concated harmony reexport mixins */__webpack_require__.d(__webpack_exports__, "mixins", function() { return external_VueClassComponent_["mixins"]; });
/* concated harmony reexport component */__webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* concated harmony reexport inject */__webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* concated harmony reexport rinject */__webpack_require__.d(__webpack_exports__, "rinject", function() { return rinject; });
/* concated harmony reexport provide */__webpack_require__.d(__webpack_exports__, "provide", function() { return provide; });
/* concated harmony reexport rprovide */__webpack_require__.d(__webpack_exports__, "rprovide", function() { return rprovide; });
/* concated harmony reexport model */__webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* concated harmony reexport watch */__webpack_require__.d(__webpack_exports__, "watch", function() { return decorators_watch; });
/* concated harmony reexport emit */__webpack_require__.d(__webpack_exports__, "emit", function() { return decorators_emit; });
/* concated harmony reexport ref */__webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* concated harmony reexport inject$ */__webpack_require__.d(__webpack_exports__, "inject$", function() { return inject$; });
/* concated harmony reexport prefixAndRegisterComponents */__webpack_require__.d(__webpack_exports__, "prefixAndRegisterComponents", function() { return prefixAndRegisterComponents; });
/* concated harmony reexport registerElementComponents */__webpack_require__.d(__webpack_exports__, "registerElementComponents", function() { return registerElementComponents; });
/* concated harmony reexport prop */__webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./addons/shared/pyro/permission_tree-module/lib/permission-tree.development.ts");


/***/ }),

/***/ "vue":
/***/ (function(module, exports) {

(function() { module.exports = window["Vue"]; }());

/***/ }),

/***/ "vue-class-component":
/***/ (function(module, exports) {

(function() { module.exports = window["VueClassComponent"]; }());

/***/ })

/******/ });