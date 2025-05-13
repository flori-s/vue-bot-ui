module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "59d2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".qkb-bot-ui{position:fixed;z-index:1000;bottom:1.5rem;right:1.5rem;display:flex;flex-direction:column;font-size:1rem}.qkb-bot-ui *{box-sizing:border-box}.qkb-preload-image{position:absolute;top:0;left:0;width:0;height:0;overflow:hidden}.qkb-bot-ui--animate .qkb-fadeUp-enter-active,.qkb-bot-ui--animate .qkb-fadeUp-leave-active{opacity:1;transform:translate(0);transition:opacity .15s linear,transform .2s ease-out}.qkb-bot-ui--animate .qkb-fadeUp-enter,.qkb-bot-ui--animate .qkb-fadeUp-leave-to{transform:translateY(20px);opacity:0}.qkb-bot-ui--animate .qkb-scaleUp-enter-active,.qkb-bot-ui--animate .qkb-scaleUp-leave-active{opacity:1;transform:scale(1);transition:opacity .1s linear,transform .2s ease-out}.qkb-bot-ui--animate .qkb-scaleUp-enter,.qkb-bot-ui--animate .qkb-scaleUp-leave-to{transform:scale(0);opacity:0}@-webkit-keyframes qkbJump{0%{transform:translateY(2px)}to{transform:translateY(-1px)}}@keyframes qkbJump{0%{transform:translateY(2px)}to{transform:translateY(-1px)}}.qkb-msg-bubble__typing-indicator:after,.qkb-msg-bubble__typing-indicator:before,.qkb-msg-bubble__typing-indicator span{transform:translateY(2px);-webkit-animation:qkbJump .35s ease infinite alternate;animation:qkbJump .35s ease infinite alternate}.qkb-msg-bubble__typing-indicator span{-webkit-animation-delay:.175s;animation-delay:.175s}.qkb-msg-bubble__typing-indicator:after{-webkit-animation-delay:.35s;animation-delay:.35s}.qkb-bot-bubble{align-self:flex-end}.qkb-bubble-btn{display:block;padding:0;outline:0;border:0;box-shadow:none;border-radius:50%;color:#fff;fill:#fff;cursor:pointer;box-shadow:0 3px 5px 0 rgba(0,0,0,.15);transition:opacity .2s linear}.qkb-bubble-btn:hover{opacity:.85}.qkb-bubble-btn-icon{display:block;position:absolute;top:50%;left:50%;width:27px;height:auto;margin:-11px 0 0 -13px;line-height:1em}.qkb-bubble-btn-icon.qkb-bubble-btn-icon--close{width:15px;margin:-7px 0 0 -7px}.qkb-board{display:flex;flex-direction:column;position:absolute;right:0;overflow:hidden;width:376px;height:80vh;margin-bottom:10px;border-radius:8px;background-color:#fff;box-shadow:0 3px 30px 0 rgba(0,0,0,.15)}.qkb-board-header{display:flex;flex:none;align-items:center;justify-content:space-between;height:50px;padding:5px 15px}.qkb-board-header__title{font-weight:700;font-size:.875rem}.qkb-board-content{flex-grow:1;overflow:hidden scroll}.qkb-board-content__bubbles{min-height:100%;padding:1.5rem 1.25rem 1rem}.qkb-msg-bubble{display:flex;position:relative}.qkb-msg-avatar{flex-grow:1;flex:none;position:relative;overflow:hidden;border-radius:50%}.qkb-msg-avatar__img{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;background-size:cover;background-repeat:no-repeat}.qkb-msg-bubble__time{display:none;position:absolute;right:0;top:0;padding:2px 5px;margin-top:-5px;border-radius:5px;font-size:.625rem;color:#fff;background-color:#222;transform:translateY(-100%);opacity:0;transition:opacity .1s linear 1s}.qkb-msg-bubble--user .qkb-msg-bubble__time{display:block}.qkb-msg-bubble-component{font-size:.875rem}.qkb-msg-bubble-component:hover~.qkb-msg-bubble__time{opacity:.8}.qkb-msg-bubble{padding-bottom:1rem}.qkb-msg-bubble.qkb-msg-bubble--bot .qkb-msg-bubble-component{margin-right:2.5rem;margin-left:.5rem}.qkb-msg-bubble.qkb-msg-bubble--user{justify-content:flex-end}.qkb-msg-bubble.qkb-msg-bubble--user .qkb-msg-bubble-component{margin-left:5rem}.qkb-msg-bubble-component__text{position:relative;padding:.75rem 1rem;border-radius:6px}.qkb-msg-bubble-component__options-wrapper{display:flex;flex-wrap:wrap}.qkb-mb-button-options__item{flex:0 0 auto}.qkb-mb-button-options__btn{display:block;overflow:hidden;position:relative;margin:.5rem .375rem 0 0;padding:.25rem 1rem;cursor:pointer;outline:0;border:1px solid transparent;border-radius:13px;color:inherit;font-size:.875rem;font-family:inherit;text-decoration:none;background-color:transparent;transition:background-color .15s linear,color .1s linear}.qkb-mb-button-options__btn span{position:relative;z-index:10}.qkb-msg-bubble__typing-indicator{position:relative;min-width:29px;opacity:.3}.qkb-msg-bubble__typing-indicator span{display:block;width:7px;height:7px;margin:0 auto;border-radius:50%}.qkb-msg-bubble__typing-indicator:after,.qkb-msg-bubble__typing-indicator:before{content:\"\";display:block;position:absolute;top:0;width:7px;height:7px;border-radius:50%}.qkb-msg-bubble__typing-indicator:before{left:0}.qkb-msg-bubble__typing-indicator:after{right:0}.qkb-board-action{position:relative;display:flex;flex:none;height:46px;padding:.45rem 1.25rem .5rem;border-top:1px solid #e6e6e6}.qkb-board-action--disabled:before{content:\"\";display:block;position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;opacity:.2;cursor:not-allowed}.qkb-board-action__wrapper{display:flex;width:100%;background-color:#fff}.qkb-board-action__msg-box{position:relative;flex-grow:1;padding:0 1rem 0 0}.qkb-board-action__input{height:100%;width:100%;padding:0;font-size:.875rem;border:0;background-color:transparent;box-shadow:none;outline:0}.qkb-board-action__input[disabled=disabled]{pointer-events:none}.qkb-board-action__disable-text{display:flex;align-items:center;position:absolute;top:0;left:0;height:100%;width:100%;background-color:#fff;font-size:.875rem}.qkb-board-action__extra{display:flex;flex:none;justify-content:center}.qkb-action-item{display:block;padding:0;outline:0;border:0;line-height:1;box-shadow:none;background-color:transparent;cursor:pointer;opacity:.6;transition:opacity .1s linear}.qkb-action-item:hover{opacity:1}.qkb-action-icon{width:16px;height:16px;line-height:1;fill:#666;color:#666;vertical-align:middle}.qkb-board-aciton--typing .qkb-action-item--send{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "b4c3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("59d2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7d102d35", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "de67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_app_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b4c3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_app_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_app_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_app_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueBotUI", function() { return /* reexport */ BotUI; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BotUI.vue?vue&type=template&id=4de9bbee&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-bot-ui",class:_vm.uiClasses},[_c('transition',{attrs:{"name":"qkb-fadeUp"}},[(_vm.botActive)?_c('div',{staticClass:"qkb-board"},[_c('BoardHeader',{attrs:{"bot-title":_vm.optionsMain.botTitle},on:{"close-bot":_vm.botToggle},scopedSlots:_vm._u([{key:"header",fn:function(){return [_vm._t("header")]},proxy:true}],null,true)}),_c('BoardContent',{attrs:{"bot-typing":_vm.botTyping,"main-data":_vm.messages},scopedSlots:_vm._u([{key:"botTyping",fn:function(){return [_vm._t("botTyping")]},proxy:true}],null,true)}),_c('BoardAction',{attrs:{"input-disable":_vm.inputDisable,"input-placeholder":_vm.optionsMain.inputPlaceholder,"input-disable-placeholder":_vm.optionsMain.inputDisablePlaceholder},on:{"msg-send":_vm.sendMessage},scopedSlots:_vm._u([{key:"actions",fn:function(){return [_vm._t("actions")]},proxy:true},{key:"sendButton",fn:function(){return [_vm._t("sendButton")]},proxy:true}],null,true)})],1):_vm._e()]),_c('div',{staticClass:"qkb-bot-bubble"},[_c('button',{staticClass:"qkb-bubble-btn",on:{"click":_vm.botToggle}},[_vm._t("bubbleButton",[_c('transition',{attrs:{"name":"qkb-scaleUp"}},[(!_vm.botActive)?_c('BubbleIcon',{key:"1",staticClass:"qkb-bubble-btn-icon"}):_c('CloseIcon',{key:"2",staticClass:"qkb-bubble-btn-icon qkb-bubble-btn-icon--close"})],1)])],2)]),_c('AppStyle',{attrs:{"options":_vm.optionsMain}}),_c('div',{staticClass:"qkb-preload-image"},[(_vm.optionsMain.botAvatarImg)?_c('div',{staticClass:"qkb-msg-avatar__img"}):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BotUI.vue?vue&type=template&id=4de9bbee&lang=pug&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/helpers/event-bus.js

var EventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var event_bus = (EventBus);
// CONCATENATED MODULE: ./src/config/index.js
/* harmony default export */ var config = ({
  EVENT_OPEN: 'botui-open',
  EVENT_CLOSE: 'botui-close',
  EVENT_TOGGLE: 'botui-toggle'
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Header.vue?vue&type=template&id=b70ffcbe&lang=pug&
var Headervue_type_template_id_b70ffcbe_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-board-header"},[_vm._t("header",[_c('div',{staticClass:"qkb-board-header__title"},[_vm._v(_vm._s(_vm.botTitle))])])],2)}
var Headervue_type_template_id_b70ffcbe_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Board/Header.vue?vue&type=template&id=b70ffcbe&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: {
    botTitle: {
      type: String,
      "default": 'Chatbot'
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Board_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./src/components/Board/Header.vue





/* normalize component */

var component = normalizeComponent(
  Board_Headervue_type_script_lang_js_,
  Headervue_type_template_id_b70ffcbe_lang_pug_render,
  Headervue_type_template_id_b70ffcbe_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Content.vue?vue&type=template&id=cb3a621a&lang=pug&
var Contentvue_type_template_id_cb3a621a_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"boardContent",staticClass:"qkb-board-content"},[_c('div',{ref:"boardBubbles",staticClass:"qkb-board-content__bubbles"},[_vm._l((_vm.mainData),function(item,index){return _c('message-bubble',{key:index,attrs:{"message":item}})}),(_vm.botTyping)?_c('div',{staticClass:"qkb-board-content__bot-typing"},[_vm._t("botTyping",[_c('message-typing')])],2):_vm._e()],2)])}
var Contentvue_type_template_id_cb3a621a_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Board/Content.vue?vue&type=template&id=cb3a621a&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Main.vue?vue&type=template&id=a5ad0eec&lang=pug&
var Mainvue_type_template_id_a5ad0eec_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-msg-bubble",class:_vm.bubbleClass},[(_vm.message.agent === 'bot')?_c('div',{staticClass:"qkb-msg-avatar"},[_c('div',{staticClass:"qkb-msg-avatar__img"})]):_vm._e(),(_vm.componentType)?_c(_vm.componentType,{tag:"component",attrs:{"main-data":_vm.message}}):_vm._e(),(_vm.message.createdAt)?_c('div',{staticClass:"qkb-msg-bubble__time"},[_vm._v(_vm._s(_vm.message.createdAt))]):_vm._e()],1)}
var Mainvue_type_template_id_a5ad0eec_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue?vue&type=template&id=a5ad0eec&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleText.vue?vue&type=template&id=0f53937a&lang=pug&
var SingleTextvue_type_template_id_0f53937a_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-msg-bubble-component qkb-msg-bubble-component--single-text"},[_c('div',{staticClass:"qkb-msg-bubble-component__text"},[_vm._v(_vm._s(_vm.mainData.text))])])}
var SingleTextvue_type_template_id_0f53937a_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue?vue&type=template&id=0f53937a&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleText.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var SingleTextvue_type_script_lang_js_ = ({
  props: {
    mainData: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue?vue&type=script&lang=js&
 /* harmony default export */ var MessageBubble_SingleTextvue_type_script_lang_js_ = (SingleTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue





/* normalize component */

var SingleText_component = normalizeComponent(
  MessageBubble_SingleTextvue_type_script_lang_js_,
  SingleTextvue_type_template_id_0f53937a_lang_pug_render,
  SingleTextvue_type_template_id_0f53937a_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SingleText = (SingleText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/ButtonOptions.vue?vue&type=template&id=28e65909&lang=pug&
var ButtonOptionsvue_type_template_id_28e65909_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-msg-bubble-component qkb-msg-bubble-component--button-options"},[_c('div',{staticClass:"qkb-msg-bubble-component__text"},[_vm._v(_vm._s(_vm.mainData.text))]),_c('div',{staticClass:"qkb-msg-bubble-component__options-wrapper"},_vm._l((_vm.mainData.options),function(item,index){return _c('div',{key:index,staticClass:"qkb-mb-button-options__item",class:{ active: _vm.selectedItem === item.value }},[(item.action === 'postback')?_c('button',{staticClass:"qkb-mb-button-options__btn",on:{"click":function($event){return _vm.selectOption(item)}}},[_c('span',[_vm._v(_vm._s(item.text))])]):_c('a',{staticClass:"qkb-mb-button-options__btn qkb-mb-button-options__url",attrs:{"target":"_blank","href":item.value}},[_c('span',[_vm._v(_vm._s(item.text))])])])}),0)])}
var ButtonOptionsvue_type_template_id_28e65909_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue?vue&type=template&id=28e65909&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/ButtonOptions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ButtonOptionsvue_type_script_lang_js_ = ({
  props: {
    mainData: {
      type: Object
    }
  },
  data: function data() {
    return {
      selectedItem: null
    };
  },
  methods: {
    selectOption: function selectOption(value) {
      this.selectedItem = value;
      event_bus.$emit('select-button-option', value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var MessageBubble_ButtonOptionsvue_type_script_lang_js_ = (ButtonOptionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue





/* normalize component */

var ButtonOptions_component = normalizeComponent(
  MessageBubble_ButtonOptionsvue_type_script_lang_js_,
  ButtonOptionsvue_type_template_id_28e65909_lang_pug_render,
  ButtonOptionsvue_type_template_id_28e65909_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ButtonOptions = (ButtonOptions_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  components: {
    SingleText: SingleText,
    ButtonOptions: ButtonOptions
  },
  props: {
    message: {
      type: Object
    }
  },
  computed: {
    bubbleClass: function bubbleClass() {
      return this.message.agent === 'bot' ? 'qkb-msg-bubble--bot' : 'qkb-msg-bubble--user';
    },
    // Define the message type and return the specific component
    componentType: function componentType() {
      var type = '';

      switch (this.message.type) {
        case 'button':
          type = 'ButtonOptions';
          break;

        default:
          type = 'SingleText';
      }

      return type;
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var MessageBubble_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue





/* normalize component */

var Main_component = normalizeComponent(
  MessageBubble_Mainvue_type_script_lang_js_,
  Mainvue_type_template_id_a5ad0eec_lang_pug_render,
  Mainvue_type_template_id_a5ad0eec_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Main = (Main_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Typing.vue?vue&type=template&id=7757c674&lang=pug&
var Typingvue_type_template_id_7757c674_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Typingvue_type_template_id_7757c674_lang_pug_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-msg-bubble qkb-msg-bubble--bot"},[_c('div',{staticClass:"qkb-msg-avatar"},[_c('div',{staticClass:"qkb-msg-avatar__img"})]),_c('div',{staticClass:"qkb-msg-bubble-component qkb-msg-bubble-component--typing"},[_c('div',{staticClass:"qkb-msg-bubble-component__text"},[_c('div',{staticClass:"qkb-msg-bubble__typing-indicator"},[_c('span')])])])])}]


// CONCATENATED MODULE: ./src/components/MessageBubble/Typing.vue?vue&type=template&id=7757c674&lang=pug&

// CONCATENATED MODULE: ./src/components/MessageBubble/Typing.vue

var script = {}


/* normalize component */

var Typing_component = normalizeComponent(
  script,
  Typingvue_type_template_id_7757c674_lang_pug_render,
  Typingvue_type_template_id_7757c674_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Typing = (Typing_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  components: {
    MessageBubble: Main,
    MessageTyping: Typing
  },
  props: {
    mainData: {
      type: Array,
      required: true
    },
    botTyping: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    mainData: function mainData(newVal) {
      var _this = this;

      this.$nextTick(function () {
        _this.updateScroll();
      });
    }
  },
  methods: {
    updateScroll: function updateScroll() {
      var contentElm = this.$refs.boardContent;
      var offsetHeight = this.$refs.boardBubbles.offsetHeight;
      contentElm.scrollTop = offsetHeight;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var Board_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Board/Content.vue





/* normalize component */

var Content_component = normalizeComponent(
  Board_Contentvue_type_script_lang_js_,
  Contentvue_type_template_id_cb3a621a_lang_pug_render,
  Contentvue_type_template_id_cb3a621a_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Content = (Content_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Action.vue?vue&type=template&id=de0d164e&lang=pug&
var Actionvue_type_template_id_de0d164e_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-board-action",class:_vm.actionClass},[_c('div',{staticClass:"qkb-board-action__wrapper"},[_c('div',{staticClass:"qkb-board-action__msg-box"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.messageText),expression:"messageText"}],ref:"qkbMessageInput",staticClass:"qkb-board-action__input",attrs:{"type":"text","disabled":_vm.inputDisable,"placeholder":_vm.inputPlaceholder},domProps:{"value":(_vm.messageText)},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.sendMessage($event)},"input":function($event){if($event.target.composing){ return; }_vm.messageText=$event.target.value}}}),(_vm.inputDisablePlaceholder && _vm.inputDisable)?_c('div',{staticClass:"qkb-board-action__disable-text"},[_c('span',[_vm._v(_vm._s(_vm.inputDisablePlaceholder))])]):_vm._e()]),_c('div',{staticClass:"qkb-board-action__extra"},[_vm._t("actions"),_c('button',{staticClass:"qkb-action-item qkb-action-item--send",on:{"click":_vm.sendMessage}},[_vm._t("sendButton",[_c('IconSend',{staticClass:"qkb-action-icon qkb-action-icon--send"})])],2)],2)])])}
var Actionvue_type_template_id_de0d164e_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Board/Action.vue?vue&type=template&id=de0d164e&lang=pug&

// CONCATENATED MODULE: ./src/assets/icons/send.svg
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ var send = ({
  functional: true,
  render: function render(_h, _vm) {
    var _c = _vm._c,
        _v = _vm._v,
        data = _vm.data,
        _vm$children = _vm.children,
        children = _vm$children === void 0 ? [] : _vm$children;

    var classNames = data["class"],
        staticClass = data.staticClass,
        style = data.style,
        staticStyle = data.staticStyle,
        _data$attrs = data.attrs,
        attrs = _data$attrs === void 0 ? {} : _data$attrs,
        rest = _objectWithoutProperties(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);

    return _c('svg', _objectSpread({
      "class": [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 488.721 488.721"
      }, attrs)
    }, rest), children.concat([_c('path', {
      attrs: {
        "d": "M483.589 222.024a51.197 51.197 0 00-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 003.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.314 51.314 0 0018.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398zM58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.065 17.065 0 01-.481-13.784l65.399-163.516h340.668L58.657 446.633zm42.121-219.358L35.379 63.759a16.64 16.64 0 014.215-18.773 16.537 16.537 0 0119.063-2.884l382.788 185.173H100.778z"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Action.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Actionvue_type_script_lang_js_ = ({
  components: {
    IconSend: send
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    inputDisablePlaceholder: {
      type: String
    },
    inputDisable: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      messageText: null
    };
  },
  computed: {
    actionClass: function actionClass() {
      var actionClasses = [];

      if (this.inputDisable) {
        actionClasses.push('qkb-board-action--disabled');
      }

      if (this.messageText) {
        actionClasses.push('qkb-board-aciton--typing');
      } // TODO: sending


      return actionClasses;
    }
  },
  mounted: function mounted() {
    this.$refs.qkbMessageInput.focus();
  },
  methods: {
    sendMessage: function sendMessage() {
      if (this.messageText) {
        this.$emit('msg-send', {
          text: this.messageText
        });
        this.messageText = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Action.vue?vue&type=script&lang=js&
 /* harmony default export */ var Board_Actionvue_type_script_lang_js_ = (Actionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Board/Action.vue





/* normalize component */

var Action_component = normalizeComponent(
  Board_Actionvue_type_script_lang_js_,
  Actionvue_type_template_id_de0d164e_lang_pug_render,
  Actionvue_type_template_id_de0d164e_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Action = (Action_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5daad578-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppStyle.vue?vue&type=template&id=168c7d68&lang=pug&
var AppStylevue_type_template_id_168c7d68_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qkb-bot-style",staticStyle:{"display":"none"},domProps:{"innerHTML":_vm._s(_vm.style)}})}
var AppStylevue_type_template_id_168c7d68_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppStyle.vue?vue&type=template&id=168c7d68&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppStyle.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var AppStylevue_type_script_lang_js_ = ({
  props: ['options'],
  computed: {
    style: function style() {
      if (!this.options) {
        return '';
      }

      var _this$options = this.options,
          colorScheme = _this$options.colorScheme,
          textColor = _this$options.textColor,
          boardContentBg = _this$options.boardContentBg,
          bubbleBtnSize = _this$options.bubbleBtnSize,
          botAvatarImg = _this$options.botAvatarImg,
          botAvatarSize = _this$options.botAvatarSize,
          inputDisableBg = _this$options.inputDisableBg,
          msgBubbleBgBot = _this$options.msgBubbleBgBot,
          msgBubbleColorBot = _this$options.msgBubbleColorBot,
          msgBubbleBgUser = _this$options.msgBubbleBgUser,
          msgBubbleColorUser = _this$options.msgBubbleColorUser;
      var styles = "\n<style type=\"text/css\" id=\"qkb-bot-style\">\n.qkb-bubble-btn {\n  background-color: ".concat(colorScheme, ";\n  width: ").concat(bubbleBtnSize, "px;\n  height: ").concat(bubbleBtnSize, "px;\n}\n.qkb-bubble-btn-icon {\n  fill: ").concat(textColor, ";\n  color: ").concat(textColor, ";\n}\n.qkb-board {\n  bottom: ").concat(bubbleBtnSize, "px;\n}\n.qkb-board-header {\n  background-color: ").concat(colorScheme, ";\n}\n.qkb-board-header__title {\n  color: ").concat(textColor, ";\n}\n.qkb-board-content {\n  background-color: ").concat(boardContentBg, ";\n}\n").concat(botAvatarImg ? ".qkb-msg-avatar {\n      width: ".concat(botAvatarSize, "px;\n      height: ").concat(botAvatarSize, "px;\n    }\n    .qkb-msg-avatar__img {\n      background-image: url(").concat(botAvatarImg, ");\n    }") : '', "\n.qkb-msg-bubble--bot .qkb-msg-bubble-component__text {\n  color: ").concat(msgBubbleColorBot, ";\n  background-color: ").concat(msgBubbleBgBot, ";\n}\n.qkb-msg-bubble__typing-indicator span,\n.qkb-msg-bubble__typing-indicator::before,\n.qkb-msg-bubble__typing-indicator::after {\n  background-color: ").concat(msgBubbleColorBot, ";\n}\n.qkb-mb-button-options__btn::before {\n  background-color: ").concat(msgBubbleBgUser, ";\n}\n.qkb-msg-bubble--user .qkb-msg-bubble-component__text {\n  color: ").concat(msgBubbleColorUser, ";\n  background-color: ").concat(msgBubbleBgUser, ";\n}\n.qkb-mb-button-options__btn {\n  color: ").concat(msgBubbleBgUser, ";\n  border-color: ").concat(msgBubbleBgUser, ";\n}\n.qkb-mb-button-options__btn:hover {\n  color: ").concat(msgBubbleColorUser, ";\n  background-color: ").concat(msgBubbleBgUser, ";\n}\n.qkb-board-action--disabled::before {\n  background-color: ").concat(inputDisableBg, ";\n}\n</style>\n      ");
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppStyle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppStylevue_type_script_lang_js_ = (AppStylevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AppStyle.vue





/* normalize component */

var AppStyle_component = normalizeComponent(
  components_AppStylevue_type_script_lang_js_,
  AppStylevue_type_template_id_168c7d68_lang_pug_render,
  AppStylevue_type_template_id_168c7d68_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AppStyle = (AppStyle_component.exports);
// CONCATENATED MODULE: ./src/assets/icons/bubble.svg
function bubble_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bubble_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bubble_ownKeys(Object(source), true).forEach(function (key) { bubble_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bubble_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bubble_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function bubble_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = bubble_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function bubble_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ var bubble = ({
  functional: true,
  render: function render(_h, _vm) {
    var _c = _vm._c,
        _v = _vm._v,
        data = _vm.data,
        _vm$children = _vm.children,
        children = _vm$children === void 0 ? [] : _vm$children;

    var classNames = data["class"],
        staticClass = data.staticClass,
        style = data.style,
        staticStyle = data.staticStyle,
        _data$attrs = data.attrs,
        attrs = _data$attrs === void 0 ? {} : _data$attrs,
        rest = bubble_objectWithoutProperties(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);

    return _c('svg', bubble_objectSpread({
      "class": [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "version": "1.0",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "511pt",
        "height": "511pt",
        "viewBox": "0 0 1024 1024"
      }, attrs)
    }, rest), children.concat([_c('g', {
      attrs: {
        "fill": "#ffff"
      }
    }, [_c('path', {
      attrs: {
        "d": "M150 149.4c-5.6 2.8-9 8.3-9 14.6 0 6.5 2.8 18.8 14.1 62 5.5 21.2 11.3 41.3 12.9 44.7 3.7 8 10.8 15.5 17.7 18.9 6.7 3.3 16 3.6 24.5.9l5.7-1.8 6.3 4.8c3.5 2.7 6.5 5 6.7 5.2.2.1-2.5 3.3-6 7-30.6 32.6-52.3 64.7-64.3 95.5-3.2 8.1-3.3 8.3-7.9 9.9-6.9 2.5-13.4 7-20.5 14.1-14.1 14.3-23.4 33.9-29.3 61.8-2.9 13.7-3.2 43.4-.5 57.7 5.2 28.4 15.4 49.4 31.7 65.3 6.4 6.2 6.8 6.9 8.8 14.7 3 11.6 7.3 23.5 14 38.2 21.8 48.3 47.4 78.2 91.6 107.3 20.7 13.6 40.8 23 70.5 32.9 38.2 12.7 74.9 20.4 122.5 25.6 23.2 2.5 92.8 2.5 117.5 0 87.3-8.9 155-32.4 208.2-72.4 36.7-27.6 65.4-64 79.9-101.2l3.6-9.5 5.9-1.6c27.5-7.5 51-39.5 59.3-80.5 7.4-36.8 3.4-80.8-9.8-109.1-11.1-23.6-28.4-39.1-49.4-44.3-6.9-1.7-7.2-1.9-8.6-5.7-12.6-35.2-29.8-65.8-50.3-89.5l-6.8-7.8 6.1-5.1c3.3-2.7 6.3-5 6.6-5 .4 0 3.6 1.2 7.2 2.6 12 4.8 25.2 3.2 36.3-4.4 9.1-6.2 11.3-10.2 30.8-55.2 19.5-45.1 28.8-67.5 29.5-71.3 1.5-8-4.5-18-11.7-19.6-6.3-1.4-11.2.2-22.1 7.4-12.5 8.4-84.1 62.3-91.1 68.6-12.6 11.5-13.8 26.8-3.5 45.8 4.4 8.2 4.6 7-2.5 14.8l-2.9 3.2-7.6-6.9c-51.3-46.2-130.7-78.2-214.5-86.5-77.3-7.6-151.8 4.4-221.4 35.9-23 10.3-48.3 25.6-69.6 42l-9.9 7.6-6.1-6-6.1-6 1.9-3.2c7.6-13.2 9.6-21.2 7.8-30.8-2.1-11.7-3.6-13.6-34.1-43.8-45.5-45-50-48-62.1-41.8zm31.5 44.7c6.6 6.2 18.1 17.2 25.7 24.7 15.9 15.8 17.1 18.1 14.4 27.5-3.1 10.8-17.7 23-24.6 20.6-5.1-1.8-8.6-10.5-21.5-53.9-6.9-22.9-8.5-30-6.8-30 .5 0 6.3 5 12.8 11.1zm691.5-7.7c1.3 1.7 2.6-1.4-20.8 47.3-15.7 32.5-19.7 39.5-24.1 41.8-4 2-11.7 1.9-16.6-.4-8.6-3.9-16.7-15.9-16.9-24.7-.1-6.9 1.6-9 13.2-17.6 13.2-9.7 46.2-35.4 54.2-42.2 6.8-5.7 8.9-6.6 11-4.2zm-321 36.1c99.3 11.9 176.4 51 228.6 116 15.5 19.4 37.1 56.5 40.6 69.7l1.2 4.6-5.4 5.9c-14.2 15.5-26.3 42.9-30.9 70.3-2.7 15.5-3.8 45-2.3 60.6 3.3 33.8 15.9 68.2 31 84.5 6.3 6.8 6.4 7 5.8 11.2-.8 5-9.3 22.5-15.6 31.8-26.5 39.5-66.4 71.6-115 92.5-61.9 26.6-135 37.7-218.5 33.4-104.4-5.5-179.4-28.5-233-71.7-53.9-43.4-79.5-96.1-84.6-174.3-3.4-52.9 7.4-112.1 28.7-157.9 20.7-44.4 59.2-87.7 103.4-116.4 26.9-17.4 67.3-35.9 101-46 25-7.6 55.4-13.4 82-15.7 15.9-1.3 67.1-.4 83 1.5zm-384.3 42.7c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm7.7 13.4c.3.8.2 1.2-.4.9-.6-.3-1-1-1-1.6 0-1.4.7-1.1 1.4.7zm678.8 158.9c7.7 3.1 16 9.4 19.5 14.7 2.7 3.9 2.7 4.1.9 5.2-7.4 4.3-12.6 12.4-17.7 27.3-9 26.8-9.3 57.4-.8 82.8 4.2 12.6 8.6 20.5 13.2 23.4 2 1.3 3.7 3.2 3.7 4.1 0 2.1-4.9 9.8-9.6 15-8.4 9.3-18.8 12-26.8 7.1-11-6.8-20.4-28.2-25.7-58.7-3.2-18.2-3.2-47.5-.1-64.8 3.6-19.6 12.1-41.5 19.9-51.3 6.1-7.6 13-9.1 23.5-4.8zm-735.9 7c-.3.9-.8 1.4-1 1.1-.3-.3-.2-.9.2-1.5.9-1.6 1.5-1.3.8.4zm22.7 15.1c-7.1 27.5-11.7 74.9-9.3 95.6.5 4.3.6 7.8.1 7.8-.9 0-5.3-14.2-7-23-.7-3.7-1.2-13.9-1.2-23.5 0-15.1.3-18.2 2.7-27.7 1.4-5.9 4-14.2 5.6-18.5 2.9-7.4 9.9-19.9 10.7-19 .2.2-.5 3.9-1.6 8.3zm253.7 361c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm185.6 4.1c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm-142.5 2c-1 .2-2.6.2-3.5 0-1-.3-.2-.5 1.7-.5s2.7.2 1.8.5zm22.5 2c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm22 1c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm7.5 0c-1 .2-2.8.2-4 0-1.3-.2-.5-.4 1.7-.4 2.2-.1 3.2.1 2.3.4zm12.5 0c-1.3.2-3.5.2-5 0-1.6-.2-.5-.4 2.2-.4 2.8 0 4 .2 2.8.4zm11 0c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5z"
      }
    }), _c('path', {
      attrs: {
        "d": "M308.5 351c-24.7 1.8-44.8 8.9-65.8 23.3-19.1 13-32.1 29.8-44.6 57.6-9.2 20.5-14.1 45.3-14.1 71.7 0 44 11.4 78.7 34.8 105.7 22.9 26.6 54 41 98.7 45.8 12.7 1.4 48.2 1.7 60.2.6l8.1-.8 4.1 8.7c12 25.5 30.6 44.8 51.3 53.1 17.5 7.1 43.8 8.3 60.8 2.8 16.8-5.4 34.2-16.2 44.3-27.5 7.2-8 14.1-19.9 17.5-30.3 6-18.1 8-41.1 4.3-49.2-3.5-7.8-7.8-8.9-20.7-5.2-26.4 7.6-61.3 13.4-90.4 15.2-12.5.7-38.1-.9-48.9-3.2-11.9-2.5-17.8-2.8-20.7-.8-2.1 1.4-6.2 8.6-7.8 13.7-.7 2.5-7.6 3.1-28.5 2.5-46.7-1.3-82.9-13.1-104.3-33.9C209.4 564.5 197.7 502 218 447c7.7-21.1 23.3-42.1 38.5-52 12.1-7.9 33.4-15.1 52-17.6 12.9-1.8 21-1.2 63 4.1 43.3 5.5 49 5.9 83.5 5.9 34.7 0 43.9-.7 86.2-6.5 37.4-5 55.8-5.9 80.5-3.8 16.9 1.4 29.3 4.7 42.8 11.4 13.2 6.5 21.4 12.5 32.1 23.7 23.3 24.3 33.7 53.3 33.6 93.8-.1 28.6-5 49.9-17.2 74.5-15.9 32.2-36.5 57.1-83.7 101.3-14.1 13.2-17.5 17.3-15.8 19 .4.4 3.9.7 7.8.6 5.6 0 8.7-.6 13.7-2.8 19.7-8.5 44.4-27.7 62.6-48.9 30.6-35.5 54.2-87.5 58.5-129 1.6-15.2.6-40.4-2.1-54.1-8.8-44.7-34.3-81.9-68-99.5-18.3-9.5-36.5-14.3-61.5-16.1-20.9-1.6-36.9-.8-103.5 5.4-39.9 3.7-64.3 4.9-84 4.2-23.2-.9-48.6-3.1-70-6.1-9.6-1.3-22-2.7-27.5-3-5.5-.3-12.5-.7-15.5-.9-3-.2-10 0-15.5.4zM206.7 511.2c-.3.7-.5.2-.5-1.2s.2-1.9.5-1.3c.2.7.2 1.9 0 2.5zm318.7 154.6c8.8 3 11.4 10.6 6.1 17.6-7 9.2-31.8 20.7-48.6 22.5-12.5 1.3-32.2-1.9-33.6-5.5-.8-2.3 4.2-9.7 10.7-15.7 15.9-14.8 49.5-24.4 65.4-18.9z"
      }
    }), _c('path', {
      attrs: {
        "d": "M320.3 437.9c-23.6 6-39.3 35.9-39.3 74.6-.1 10.6.4 14.8 2.4 22.8 5.8 22.7 17.8 37.8 33.9 42.8 8.7 2.7 14.8 2.1 23.6-2.2 23.3-11.5 36.3-45.2 32.2-83.3-2.8-25.8-13.4-45.7-27.9-52.4-6.1-2.8-18.5-3.9-24.9-2.3zm33.4 30.5c7.9 8.4 3.2 25.8-7 25.8-5 0-7.6-1.8-9.8-6.5-3.7-8.3-1.3-18.8 5.2-22 4.4-2.2 7.6-1.4 11.6 2.7zM583 440.2c-8.6 3.3-17.6 12.9-23.3 24.8-5.3 11.1-7.2 17.8-8.8 31.5-3.2 28.7 4.8 57.6 20.3 72.6 12.6 12.2 33.1 14.3 48 4.7 23.2-14.7 34.5-56.7 24.7-91.9-5.1-18.5-16.1-33.9-28.6-40.1-6-2.9-7.7-3.3-16.7-3.5-8.4-.3-11 .1-15.6 1.9zm36.7 23.4c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm5.7 3.5c3.8 3 5.6 7.1 5.6 12.9 0 11.4-7.6 17.8-15.9 13.5-3.9-2-6.5-7.8-6.4-14.2.3-11.1 9.5-17.9 16.7-12.2zm-18.7 13.1c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm25.5 7c-.8.8-.9.4-.5-1.3.4-1.3.8-1.8 1.1-1 .2.7-.1 1.8-.6 2.3z"
      }
    })])]));
  }
});
// CONCATENATED MODULE: ./src/assets/icons/close.svg
function close_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function close_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { close_ownKeys(Object(source), true).forEach(function (key) { close_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { close_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function close_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function close_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = close_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function close_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ var icons_close = ({
  functional: true,
  render: function render(_h, _vm) {
    var _c = _vm._c,
        _v = _vm._v,
        data = _vm.data,
        _vm$children = _vm.children,
        children = _vm$children === void 0 ? [] : _vm$children;

    var classNames = data["class"],
        staticClass = data.staticClass,
        style = data.style,
        staticStyle = data.staticStyle,
        _data$attrs = data.attrs,
        attrs = _data$attrs === void 0 ? {} : _data$attrs,
        rest = close_objectWithoutProperties(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);

    return _c('svg', close_objectSpread({
      "class": [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 512.001 512.001"
      }, attrs)
    }, rest), children.concat([_c('path', {
      attrs: {
        "d": "M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BotUI.vue?vue&type=script&lang=js&
function BotUIvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BotUIvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BotUIvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { BotUIvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BotUIvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BotUIvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var BotUIvue_type_script_lang_js_ = ({
  name: 'VueBotUI',
  components: {
    BoardHeader: Header,
    BoardContent: Content,
    BoardAction: Action,
    BubbleIcon: bubble,
    CloseIcon: icons_close,
    AppStyle: AppStyle
  },
  props: {
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    messages: {
      type: Array
    },
    botTyping: {
      type: Boolean,
      "default": false
    },
    inputDisable: {
      type: Boolean,
      "default": false
    },
    isOpen: {
      type: Boolean,
      "default": false
    },
    openDelay: {
      type: Number
    }
  },
  data: function data() {
    return {
      botActive: false,
      defaultOptions: {
        botTitle: 'Chatbot',
        colorScheme: '#1b53d0',
        textColor: '#fff',
        bubbleBtnSize: 56,
        animation: true,
        boardContentBg: '#fff',
        botAvatarSize: 32,
        botAvatarImg: 'http://placehold.it/200x200',
        msgBubbleBgBot: '#f0f0f0',
        msgBubbleColorBot: '#000',
        msgBubbleBgUser: '#4356e0',
        msgBubbleColorUser: '#fff',
        inputPlaceholder: 'Message',
        inputDisableBg: '#fff',
        inputDisablePlaceholder: null
      }
    };
  },
  computed: {
    optionsMain: function optionsMain() {
      return BotUIvue_type_script_lang_js_objectSpread({}, this.defaultOptions, {}, this.options);
    },
    // Add class to bot ui wrapper
    uiClasses: function uiClasses() {
      var classes = [];

      if (this.optionsMain.animation) {
        classes.push('qkb-bot-ui--animate');
      }

      return classes;
    }
  },
  created: function created() {
    if (this.isOpen) {
      if (this.openDelay) {
        setTimeout(this.botOpen, this.openDelay);
      } else {
        this.botToggle();
      }
    }
  },
  mounted: function mounted() {
    document.addEventListener(config.EVENT_OPEN, function () {
      this.botOpen();
    });
    document.addEventListener(config.EVENT_CLOSE, function () {
      this.botClose();
    });
    document.addEventListener(config.EVENT_TOGGLE, function () {
      this.botToggle();
    });
  },
  beforeDestroy: function beforeDestroy() {
    event_bus.$off('select-button-option');
  },
  methods: {
    botOpen: function botOpen() {
      if (!this.botActive) {
        this.botToggle();
      }
    },
    botClose: function botClose() {
      if (this.botActive) {
        this.botToggle();
      }
    },
    botToggle: function botToggle() {
      this.botActive = !this.botActive;

      if (this.botActive) {
        event_bus.$on('select-button-option', this.selectOption);
        this.$emit('init');
      } else {
        event_bus.$off('select-button-option');
        this.$emit('destroy');
      }
    },
    sendMessage: function sendMessage(value) {
      this.$emit('msg-send', value);
    },
    selectOption: function selectOption(value) {
      this.$emit('msg-send', value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BotUI.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BotUIvue_type_script_lang_js_ = (BotUIvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/assets/scss/_app.scss?vue&type=style&index=0&lang=scss&
var _appvue_type_style_index_0_lang_scss_ = __webpack_require__("de67");

// CONCATENATED MODULE: ./src/components/BotUI.vue






/* normalize component */

var BotUI_component = normalizeComponent(
  components_BotUIvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BotUI = (BotUI_component.exports);
// CONCATENATED MODULE: ./src/vue-bot-ui.js

var Plugin = {
  install: function install(Vue, options) {
    Vue.component('VueBotUI', BotUI);

    if (options) {// console.log('options', options)
    }
  }
};
/* harmony default export */ var vue_bot_ui = (Plugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_bot_ui);



/***/ })

/******/ });