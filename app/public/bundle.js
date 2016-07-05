/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	

	var monster_app = angular.module('monster_app', [
	  'monster_controllers', 
	  'timer',
	  'ui.router',
	  // 'ngDialog'
	  // 'monster_controllers', 
	]);

	angular.module('monster_controllers', []);

	monster_app.config(
	[       '$stateProvider', '$urlRouterProvider', '$httpProvider',
	function($stateProvider,   $urlRouterProvider,   $httpProvider  ){
	  ///////////////////////
	  // ANGULAR UI ROUTER //
	  ///////////////////////
	  $urlRouterProvider.otherwise("/home"); // default to return_selection $state
	  
	  // func: ui routing for SPA functionality
	  $stateProvider
	    .state( 'home_view', {
	      url: '/home',
	      templateUrl: '/partials/home',
	      controller: 'home_controller'
	    })
	    .state('timer_view', {
	      url: '/timer',
	      templateUrl: '/partials/timer',
	      controller: 'timer_controller'
	    })
	}]);

	monster_app.run(
	[       '$rootScope', '$state', 'CommonData',
	function($rootScope,   $state,   CommonData) {
	  
	  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
	    $rootScope.current_state_name = toState.name;
	    var player_count = CommonData.getData('player_selection'); 
	    console.log('player_count=', player_count)
	    
	    if(toState.name === 'timer_view' && !player_count) {
	      event.preventDefault();
	      $state.go('home_view');
	    }
	    // console.log('to view = ', $rootScope.current_view);
	  });
	  // $rootScope.logo = {
	  //   view: 'home'
	  // }
	}]);

	//////////////////
	// DEPENDENCIES //
	//////////////////
	__webpack_require__(1); 
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".noselect, .selection_cont .dropdown_option {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  -khtml-user-select: none;\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                 not supported by any browser */ }\n\n.animated_transition, .logo_cont .logo {\n  -moz-transition: 0.5s;\n  -ms-transition: 0.5s;\n  -o-transition: 0.5s;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n\n.selection_cont {\n  text-align: center; }\n  .selection_cont .options_cont {\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 10px;\n    width: 300px; }\n  .selection_cont .dropdown_option {\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    -ms-border-radius: 2px;\n    border-radius: 2px;\n    position: relative;\n    -webkit-appearance: none;\n    border: none;\n    width: 100%;\n    height: 50px;\n    background-color: #B8E986;\n    font-size: 14px;\n    font-weight: 500;\n    outline: none;\n    padding-left: 25px; }\n    .selection_cont .dropdown_option:hover {\n      cursor: pointer;\n      border-color: #777; }\n  .selection_cont .event_options .text {\n    text-align: left;\n    line-height: 50px; }\n\n.cta_cont {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 120px;\n  line-height: 120px;\n  font-size: 35px;\n  background-color: #333;\n  font-weight: bold;\n  color: #fff;\n  text-align: center; }\n  .cta_cont:hover {\n    cursor: pointer; }\n\n.checkmark {\n  position: absolute;\n  right: 20px;\n  top: 9px;\n  display: inline-block;\n  -ms-transform: rotate(45deg);\n  /* IE 9 */\n  -webkit-transform: rotate(45deg);\n  /* Chrome, Safari, Opera */\n  transform: rotate(45deg); }\n  .checkmark.selected .checkmark_circle {\n    background-color: #333;\n    border: none; }\n  .checkmark.selected .checkmark_stem, .checkmark.selected .checkmark_kick {\n    background-color: #fff; }\n  .checkmark .checkmark_stem {\n    position: absolute;\n    width: 3px;\n    height: 9px;\n    background-color: #333;\n    left: 11px;\n    top: 6px; }\n  .checkmark .checkmark_stem, .checkmark .checkmark_kick {\n    background-color: #333; }\n  .checkmark .checkmark_circle {\n    position: absolute;\n    width: 22px;\n    height: 22px;\n    border-radius: 11px;\n    background-color: #B8E986;\n    border: 3px solid #333; }\n  .checkmark .checkmark_kick {\n    position: absolute;\n    width: 3px;\n    height: 3px;\n    left: 8px;\n    top: 12px; }\n\n.timer_cont {\n  text-align: center;\n  font-size: 100px;\n  font-weight: bold; }\n\n.loading-container {\n  margin: 0 auto;\n  background-color: #333;\n  width: 280px;\n  height: 35px;\n  border-color: #4A4A4A;\n  border-width: 2px;\n  border-style: solid;\n  -webkit-border-radius: 35px;\n  -moz-border-radius: 35px;\n  -ms-border-radius: 35px;\n  border-radius: 35px; }\n\n.loading-progress {\n  background-color: #B8E986;\n  height: 31px;\n  min-width: 11%;\n  -webkit-border-radius: 35px;\n  -moz-border-radius: 35px;\n  -ms-border-radius: 35px;\n  border-radius: 35px; }\n\nbody {\n  background-color: #eee; }\n  body .app {\n    min-height: 700px;\n    background-color: #7ED321;\n    max-width: 375px;\n    position: relative; }\n\n.logo_cont {\n  margin-top: 90px;\n  text-align: center;\n  margin-bottom: 30px; }\n  .logo_cont .logo {\n    padding-left: 13px; }\n    .logo_cont .logo.home_view {\n      width: 300px; }\n    .logo_cont .logo.timer_view {\n      width: 220px; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('monster_controllers')
	.controller('home_controller', 
	[       '$scope', '$state', 'CommonData',
	function($scope,   $state,   CommonData) {
	  ////////////
	  // CONFIG //
	  ////////////
	  var config = {
	    options: {
	      players: [4,5,6,7,8],
	      themes: ['Escape!', 'Vampyre Coven', 'Zombiepocalypse', 'Tomb Of The Pharoah', 'Alien Spaceship'],
	    },
	  }
	  //////////
	  // INIT //
	  //////////
	  $scope.current_state = $state.current;
	  
	  $scope.options = {
	    players: {
	      values: config.options.players.map(function(num) {
	        return {
	          value: num,
	          label: num + ' Players'
	        }
	      }),
	    },
	    themes: {
	      values: config.options.themes.map(function(theme_value) {
	        return {
	          value: theme_value, 
	          label: 'Theme: ' + theme_value
	        }
	      }),
	    }
	  }
	  
	  $scope.eventToggle = {
	    status: false
	  }
	  
	  ////////////
	  // EVENTS //
	  ////////////
	  $scope.onClickStart = function($event) {
	    console.log('@onClickStart');

	    CommonData.setData('player_selection', $scope.options.players.selection.value);
	    CommonData.setData('theme_selection', $scope.options.themes.selection.value);
	    $state.go('timer_view');
	  }

	  $scope.onClickEventToggle = function($event) {
	    console.log('@onClickEventToggle');
	    $scope.eventToggle.status = !$scope.eventToggle.status;
	  }

	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('monster_controllers')
	.controller('timer_controller', 
	[       '$scope', 'CommonData',
	function($scope,   CommonData) {
	  
	  var player_count = CommonData.getData('player_selection'); 
	  // var player_count = .01; // for testing
	  $scope.timer_total = player_count * 60 * 10; // 10 minutes per player


	}]);

/***/ },
/* 7 */
/***/ function(module, exports) {

	angular.module('monster_app')
	.factory('CommonData', 
	[       
	function() {
	  var data = {};
	  
	  return {
	    getData : function(key) {
	        return data[key];
	    },
	    setData : function(key, value) {
	        data[key] = value;
	        return data[key];
	    }
	  }; // return

	}]);

/***/ }
/******/ ]);