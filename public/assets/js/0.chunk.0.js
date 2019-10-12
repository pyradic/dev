(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__("./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__("./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./packages/pyro/platform/lib/utils/tree-node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeWalker", function() { return NodeWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeArray", function() { return NodeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return BaseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNode", function() { return RootNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuedNode", function() { return ValuedNode; });
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.string.starts-with.js");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_Collection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/pyro/platform/lib/classes/Collection.ts");
var NodeWalker=function(){function NodeWalker(){}NodeWalker.prototype.walk=function(node,visitor){var _this=this;if(typeof visitor.enter==='function'){visitor.enter(node);}node.getChildren().forEach(function(childNode){return _this.walk(childNode,visitor);});if(typeof visitor.leave==='function'){visitor.leave(node);}};return NodeWalker;}();var NodeArray=function(_super){Object(tslib__WEBPACK_IMPORTED_MODULE_12__[/* __extends */ "d"])(NodeArray,_super);function NodeArray(){return _super!==null&&_super.apply(this,arguments)||this;}NodeArray.prototype.item=function(key){return this[key];};NodeArray.prototype.hasItem=function(key){return this[key]!==undefined;};NodeArray.prototype.depth=function(depth){return this.filter(function(item){return item.getDepth()===depth;});};NodeArray.prototype.root=function(){return this.filter(function(item){return item.isRoot;});};NodeArray.prototype.without=function(item){return this.filter(function(i){return!item.includes(i);});};NodeArray.prototype.only=function(item){return this.filter(function(i){return item.includes(i);});};return NodeArray;}(_classes_Collection__WEBPACK_IMPORTED_MODULE_13__[/* Collection */ "a"]);var BaseNode=function(){function BaseNode(){this.children=[];this.collectionClass=NodeArray;}BaseNode.prototype.setIndex=function(index){this._index=index;return this;};BaseNode.prototype.setCollectionClass=function(collectionClass){this.collectionClass=collectionClass;return this;};BaseNode.prototype.newCollection=function(items){var _a;if(items===void 0){items=[];}return new((_a=this.collectionClass).bind.apply(_a,Object(tslib__WEBPACK_IMPORTED_MODULE_12__[/* __spreadArrays */ "g"])([void 0],items)))();};BaseNode.prototype.hasChild=function(child){return this.children.filter(function(c){return c===child;}).length>0;};BaseNode.prototype.addChild=function(child){if(this.hasChild(child)){return this;}child.setIndex(this.children.push(child));child.setParent(this);return this;};BaseNode.prototype.setParent=function(parent){if(this.parent===parent){return this;}if(this.hasParent()&&this.getParent().hasChild(this)){this.getParent().removeChild(this);}this.parent=parent;if(parent){parent.addChild(this);}return this;};BaseNode.prototype.removeChild=function(childToRemove){var _this=this;Object.entries(this.children).forEach(function(_a){var key=_a[0],child=_a[1];if(child==childToRemove){delete _this.children[key];}});var index=this.children.findIndex(function(node){return node===childToRemove;});if(index){this.children.splice(index);}childToRemove.setParent();return this;};BaseNode.prototype.getAllDescendants=function(){var descendants=[];for(var _i=0,_a=this.getChildren();_i<_a.length;_i++){var child=_a[_i];descendants.push(child);descendants.push.apply(descendants,child.getAllDescendants());}return this.newCollection(descendants);};BaseNode.prototype.removeAllChildren=function(){this.children=[];return this;};BaseNode.prototype.root=function(){var parent;var node=this;while(parent=node.getParent()){node=parent;}return node;};BaseNode.prototype.getAncestors=function(){var parents=[];var parent;var node=this;while(parent=node.getParent()){parents.unshift(parent);node=parent;}return this.newCollection(parents);};BaseNode.prototype.getDepth=function(){if(this.isRoot()){return 0;}return this.getParent().getDepth()+1;};BaseNode.prototype.getSize=function(){var size=1;for(var _i=0,_a=this.children;_i<_a.length;_i++){var child=_a[_i];size+=child.getSize();}return size;};BaseNode.prototype.removeParentFromChildren=function(){for(var _i=0,_a=this.children;_i<_a.length;_i++){var child=_a[_i];child.setParent(null);}return this;};BaseNode.prototype.setChildren=function(children){this.removeParentFromChildren();this.children=[];for(var _i=0,children_1=children;_i<children_1.length;_i++){var child=children_1[_i];this.addChild(child);}return undefined;};BaseNode.prototype.isChild=function(){return this.getParent()!==undefined;};BaseNode.prototype.isLeaf=function(){return this.children.length===0;};BaseNode.prototype.isRoot=function(matchType){if(matchType===void 0){matchType=false;}if(!matchType){return this.getParent()===undefined;}if(this.hasMatchingParentType()){return false;}return true;};BaseNode.prototype.hasMatchingParentType=function(){if(this.getParent()!==undefined){if(this.getParent()instanceof this.constructor||this.getParent().constructor.name===this.constructor.name){return true;}}return false;};BaseNode.prototype.hasParent=function(){return this.parent!==undefined;};BaseNode.prototype.hasChildren=function(){return Array.isArray(this.children)&&this.children.length>0;};BaseNode.prototype.getAncestorsAndSelf=function(){return this.getAncestors().concat([this]);};BaseNode.prototype.getChildren=function(){return this.newCollection(this.children);};BaseNode.prototype.getHeight=function(){return this.getAncestors().length;};BaseNode.prototype.getLevel=function(){return this.getAncestors().length;};BaseNode.prototype.getNeighbors=function(){return this.getParent().getChildren().without([this]);};BaseNode.prototype.getNeighborsAndSelf=function(){return this.getParent().getChildren();};BaseNode.prototype.getParent=function(){return this.parent;};BaseNode.prototype.isFirst=function(){return this.hasPrevious()===false;};BaseNode.prototype.isLast=function(){return this.hasNext()===false;};BaseNode.prototype.hasAncestor=function(){return this.hasParent()&&this.getParent().hasParent();};BaseNode.prototype.hasSiblings=function(){return this.hasParent()&&this.getParent().getChildren().without([this]).isNotEmpty();};BaseNode.prototype.hasPrevious=function(){return this.getNeighborsAndSelf().hasItem(this.getIndex()-1);};BaseNode.prototype.hasNext=function(){return this.getNeighborsAndSelf().hasItem(this.getIndex()+1);};BaseNode.prototype.getNext=function(){return this.getNeighborsAndSelf().item(this.getIndex()+1);};BaseNode.prototype.getPrevious=function(){return this.getNeighborsAndSelf().item(this.getIndex()-1);};BaseNode.prototype.getIndex=function(){var _this=this;if(this._index!==undefined){return this._index;}if(this.hasParent()){this.getNeighborsAndSelf().findIndex(function(node){return node===_this;});}return 0;};BaseNode.prototype._getObjectExcludeKeys=function(){return['getChildren','getAncestors','getAncestorsAndSelf','getNeighbors','getNeighborsAndSelf','getParent','getNext','getPrevious','root','getAllDescendants'];};BaseNode.prototype.toObject=function(){var _this=this;var object={};Object.keys(this).filter(function(key){return _this._getObjectExcludeKeys().includes(key)===false;}).filter(function(key){return key.startsWith('remove')===false;}).filter(function(key){return key.startsWith('add')===false;}).filter(function(key){return typeof _this[key]==='function';}).forEach(function(key){try{object[key]=_this[key]();}catch(e){}});return object;};return BaseNode;}();var Node=function(_super){Object(tslib__WEBPACK_IMPORTED_MODULE_12__[/* __extends */ "d"])(Node,_super);function Node(_root){var _this=_super.call(this)||this;_this._root=_root;_this.setParent(_root);return _this;}Node.prototype.root=function(){return this._root;};return Node;}(BaseNode);var RootNode=function(_super){Object(tslib__WEBPACK_IMPORTED_MODULE_12__[/* __extends */ "d"])(RootNode,_super);function RootNode(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.nodeClass=Node;_this.collectionClass=NodeArray;return _this;}RootNode.prototype.createNode=function(){var node=new this.nodeClass(this);node.setCollectionClass(this.collectionClass);return node;};return RootNode;}(BaseNode);var ValuedNode=function(_super){Object(tslib__WEBPACK_IMPORTED_MODULE_12__[/* __extends */ "d"])(ValuedNode,_super);function ValuedNode(value){var _this=_super.call(this)||this;_this.value=value;return _this;}ValuedNode.prototype.setValue=function(value){this.value=value;return this;};ValuedNode.prototype.getValue=function(){return this.value;};return ValuedNode;}(BaseNode);

/***/ })

}]);
//# sourceMappingURL=0.chunk.0.js.map