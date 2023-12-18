/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/library/counters/purecounter.js":
/*!********************************************************!*\
  !*** ./assets/_src/js/library/counters/purecounter.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * DS Counter  1.0.0
 *
 * based on: https://github.com/srexi/purecounterjs
 * Written on: April 15, 2021
 *
 * USAGE:
 */
var PureCounter = /*#__PURE__*/function () {
  function PureCounter(options) {
    _classCallCheck(this, PureCounter);
    this.defaults = {
      start: 0,
      end: 100,
      duration: 2000,
      delay: 10,
      once: true,
      decimals: 0,
      legacy: true,
      currency: false,
      currencysymbol: false,
      separator: false,
      separatorsymbol: ',',
      selector: '.purecounter'
    };
    this.configOptions = Object.assign({}, this.defaults, options || {});
    this.registerEventListeners();
  }
  _createClass(PureCounter, [{
    key: "registerEventListeners",
    value: function registerEventListeners() {
      var _this = this;
      var elements = document.querySelectorAll(this.configOptions.selector);
      var intersectionSupported = this.intersectionListenerSupported();
      if (intersectionSupported) {
        var intersectObserver = new IntersectionObserver(this.animateElements.bind(this), {
          "root": null,
          "rootMargin": '20px',
          "threshold": 0.5
        });
        elements.forEach(function (element) {
          intersectObserver.observe(element);
        });
      } else {
        if (window.addEventListener) {
          this.animateLegacy(elements);
          window.addEventListener('scroll', function (e) {
            _this.animateLegacy(elements);
          }, {
            "passive": true
          });
        }
      }
    }
  }, {
    key: "animateLegacy",
    value: function animateLegacy(elements) {
      var _this2 = this;
      elements.forEach(function (element) {
        var config = _this2.parseConfig(element);
        if (config.legacy === true && _this2.elementIsInView(element)) {
          _this2.animateElements([element]);
        }
      });
    }
  }, {
    key: "animateElements",
    value: function animateElements(elements, observer) {
      var _this3 = this;
      elements.forEach(function (element) {
        var elm = element.target || element; // Just make sure which element will be used
        var elementConfig = _this3.parseConfig(elm); // Get config value on that element

        // If duration is less than or equal zero, just format the 'end' value
        if (elementConfig.duration <= 0) {
          return elm.innerHTML = _this3.formatNumber(elementConfig.end, elementConfig);
        }
        if (!observer && !_this3.elementIsInView(element) || observer && element.intersectionRatio < 0.5) {
          var value = elementConfig.start > elementConfig.end ? elementConfig.end : elementConfig.start;
          return elm.innerHTML = _this3.formatNumber(value, elementConfig);
        }

        // If duration is more than 0, then start the counter
        setTimeout(function () {
          return _this3.startCounter(elm, elementConfig);
        }, elementConfig.delay);
      });
    }
  }, {
    key: "startCounter",
    value: function startCounter(element, config) {
      var _this4 = this;
      // First, get the increments step
      var incrementsPerStep = (config.end - config.start) / (config.duration / config.delay);
      // Next, set the counter mode (Increment or Decrement)
      var countMode = 'inc';

      // Set mode to 'decrement' and 'increment step' to minus if start is larger than end
      if (config.start > config.end) {
        countMode = 'dec';
        incrementsPerStep *= -1;
      }

      // Next, determine the starting value
      var currentCount = this.parseValue(config.start);
      // And then print it's value to the page
      element.innerHTML = this.formatNumber(currentCount, config);

      // If the config 'once' is true, then set the 'duration' to 0
      if (config.once === true) {
        element.setAttribute('data-purecounter-duration', 0);
      }

      // Now, start counting with counterWorker using Interval method based on delay
      var counterWorker = setInterval(function () {
        // First, determine the next value base on current value, increment value, and cound mode
        var nextNum = _this4.nextNumber(currentCount, incrementsPerStep, countMode);
        // Next, print that value to the page
        element.innerHTML = _this4.formatNumber(nextNum, config);
        // Now set that value to the current value, becouse it's already printed
        currentCount = nextNum;

        // If the value is larger or less than the 'end' (base on mode), then  print the end value and stop the Interval
        if (currentCount >= config.end && countMode == 'inc' || currentCount <= config.end && countMode == 'dec') {
          element.innerHTML = _this4.formatNumber(config.end, config);
          clearInterval(counterWorker);
        }
      }, config.delay);
    }
  }, {
    key: "parseConfig",
    value: function parseConfig(element) {
      var _this5 = this;
      // First, we need to declare the base Config
      // This config will be used if the element doesn't have config
      var baseConfig = _objectSpread({}, this.configOptions);

      // Next, gett all 'data-precounter' attributes value. Store to array
      var configValues = [].filter.call(element.attributes, function (attr) {
        return /^data-purecounter-/.test(attr.name);
      });

      // Now, we create element config as an empty object
      var elementConfig = {};

      // And then, fill the element config based on config values
      configValues.forEach(function (e) {
        var name = e.name.replace('data-purecounter-', '').toLowerCase();
        var value = name == 'duration' ? parseInt(_this5.parseValue(e.value) * 1000) : _this5.parseValue(e.value);
        elementConfig[name] = value; // We will get an object
      });

      // Last marge base config with element config and return it as an object
      return Object.assign(baseConfig, elementConfig);
    }

    /** This function is to get the next number */
  }, {
    key: "nextNumber",
    value: function nextNumber(number, steps) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inc';
      // First, get the exact value from the number and step (int or float)
      number = this.parseValue(number);
      steps = this.parseValue(steps);

      // Last, get the next number based on current number, increment step, and count mode
      // Always return it as float
      return parseFloat(mode === 'inc' ? number + steps : number - steps);
    }

    /** This function is to convert number into currency format */
  }, {
    key: "convertToCurrencySystem",
    value: function convertToCurrencySystem(number, config) {
      var symbol = config.currencysymbol || "",
        // Set the Currency Symbol (if any)
        limit = config.decimals || 1,
        // Set the decimal limit (default is 1)
        number = Math.abs(Number(number)); // Get the absolute value of number

      // Set the value
      var value = number >= 1.0e+12 ? "".concat((number / 1.0e+12).toFixed(limit), " T") // Twelve zeros for Trillions
      : number >= 1.0e+9 ? "".concat((number / 1.0e+9).toFixed(limit), " B") // Nine zeros for Billions
      : number >= 1.0e+6 ? "".concat((number / 1.0e+6).toFixed(limit), " M") // Six zeros for Millions
      : number >= 1.0e+3 ? "".concat((number / 1.0e+12).toFixed(limit), " K") // Three zeros for Thausands
      : number.toFixed(limit); // If less than 1000, print it's value

      // Apply symbol before the value and return it as string
      return symbol + value;
    }

    /** This function is to get the last formated number */
  }, {
    key: "applySeparator",
    value: function applySeparator(value, config) {
      // If config separator is false, delete all separator
      if (!config.separator) {
        return value.replace(new RegExp(/,/gi, 'gi'), '');
      }

      // If config separator is true, then create separator
      return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").replace(new RegExp(/,/gi, 'gi'), config.separatorsymbol);
    }

    /** This function is to get formated number to be printed in the page */
  }, {
    key: "formatNumber",
    value: function formatNumber(number, config) {
      // This is the configuration for 'toLocaleString' method
      var strConfig = {
        minimumFractionDigits: config.decimals,
        maximumFractionDigits: config.decimals
      };
      // Set the number if it using currency, then convert. If doesn't, just parse it as float
      number = config.currency ? this.convertToCurrencySystem(number, config) : parseFloat(number);

      // Last, apply the number separator using number as string
      return this.applySeparator(number.toLocaleString(undefined, strConfig), config);
    }

    /** This function is to get the parsed value */
  }, {
    key: "parseValue",
    value: function parseValue(data) {
      // If number with dot (.), will be parsed as float
      if (/^[0-9]+\.[0-9]+$/.test(data)) {
        return parseFloat(data);
      }
      // If just number, will be parsed as integer
      if (/^[0-9]+$/.test(data)) {
        return parseInt(data);
      }
      // If it's boolean string, will be parsed as boolean
      if (/^true|false/i.test(data)) {
        return /^true/i.test(data);
      }
      // Return it's value as default
      return data;
    }

    /** This function is to detect the element is in view or not. */
  }, {
    key: "elementIsInView",
    value: function elementIsInView(element) {
      var top = element.offsetTop;
      var left = element.offsetLeft;
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      while (element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
        left += element.offsetLeft;
      }
      return top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth;
    }

    /** Just some condition to check browser Intersection Support */
  }, {
    key: "intersectionListenerSupported",
    value: function intersectionListenerSupported() {
      return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
    }
  }]);
  return PureCounter;
}();
/* harmony default export */ __webpack_exports__["default"] = (PureCounter);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./assets/_src/js/ds-counter.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_counters_purecounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/counters/purecounter */ "./assets/_src/js/library/counters/purecounter.js");
/*
 * @title Counter Plugin Init
 * @description Application entry point
 */


document.addEventListener('DOMContentLoaded', function () {
  new _library_counters_purecounter__WEBPACK_IMPORTED_MODULE_0__["default"]({
    selector: '.c-counter__number'
  });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHMtY291bnRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSxJQVNNQSxXQUFXO0VBQ2IsU0FBQUEsWUFBWUMsT0FBTyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsV0FBQTtJQUNqQixJQUFJLENBQUNHLFFBQVEsR0FBRztNQUNaQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxHQUFHLEVBQUUsR0FBRztNQUNSQyxRQUFRLEVBQUUsSUFBSTtNQUNkQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxJQUFJLEVBQUUsSUFBSTtNQUNWQyxRQUFRLEVBQUUsQ0FBQztNQUNYQyxNQUFNLEVBQUUsSUFBSTtNQUNaQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxjQUFjLEVBQUUsS0FBSztNQUNyQkMsU0FBUyxFQUFFLEtBQUs7TUFDaEJDLGVBQWUsRUFBRSxHQUFHO01BQ3BCQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2YsUUFBUSxFQUFFRixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFcEUsSUFBSSxDQUFDa0Isc0JBQXNCLENBQUMsQ0FBQztFQUNqQztFQUFDQyxZQUFBLENBQUFwQixXQUFBO0lBQUFxQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSCx1QkFBQSxFQUF5QjtNQUFBLElBQUFJLEtBQUE7TUFDckIsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLElBQUksQ0FBQ1YsYUFBYSxDQUFDRCxRQUFRLENBQUM7TUFDckUsSUFBSVkscUJBQXFCLEdBQUcsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQyxDQUFDO01BRWhFLElBQUlELHFCQUFxQixFQUFFO1FBQ3ZCLElBQUlFLGlCQUFpQixHQUFHLElBQUlDLG9CQUFvQixDQUFDLElBQUksQ0FBQ0MsZUFBZSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDOUUsTUFBTSxFQUFFLElBQUk7VUFDWixZQUFZLEVBQUUsTUFBTTtVQUNwQixXQUFXLEVBQUU7UUFDakIsQ0FBQyxDQUFDO1FBRUZSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtVQUN4QkwsaUJBQWlCLENBQUNNLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTTtRQUNILElBQUlFLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUU7VUFDekIsSUFBSSxDQUFDQyxhQUFhLENBQUNkLFFBQVEsQ0FBQztVQUU1QlksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQUUsQ0FBQyxFQUFJO1lBQ25DaEIsS0FBSSxDQUFDZSxhQUFhLENBQUNkLFFBQVEsQ0FBQztVQUNoQyxDQUFDLEVBQUU7WUFBRSxTQUFTLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFDM0I7TUFDSjtJQUNKO0VBQUM7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdCLGNBQWNkLFFBQVEsRUFBRTtNQUFBLElBQUFnQixNQUFBO01BQ3BCaEIsUUFBUSxDQUFDUyxPQUFPLENBQUMsVUFBQUMsT0FBTyxFQUFJO1FBQ3hCLElBQUlPLE1BQU0sR0FBR0QsTUFBSSxDQUFDRSxXQUFXLENBQUNSLE9BQU8sQ0FBQztRQUN0QyxJQUFHTyxNQUFNLENBQUMvQixNQUFNLEtBQUssSUFBSSxJQUFJOEIsTUFBSSxDQUFDRyxlQUFlLENBQUNULE9BQU8sQ0FBQyxFQUFFO1VBQ3hETSxNQUFJLENBQUNULGVBQWUsQ0FBQyxDQUFDRyxPQUFPLENBQUMsQ0FBQztRQUNuQztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQWIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVMsZ0JBQWdCUCxRQUFRLEVBQUVvQixRQUFRLEVBQUU7TUFBQSxJQUFBQyxNQUFBO01BQ2hDckIsUUFBUSxDQUFDUyxPQUFPLENBQUMsVUFBQUMsT0FBTyxFQUFJO1FBQ3hCLElBQUlZLEdBQUcsR0FBR1osT0FBTyxDQUFDYSxNQUFNLElBQUliLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUljLGFBQWEsR0FBR0gsTUFBSSxDQUFDSCxXQUFXLENBQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBRTNDO1FBQ0EsSUFBSUUsYUFBYSxDQUFDMUMsUUFBUSxJQUFJLENBQUMsRUFBRTtVQUM3QixPQUFPd0MsR0FBRyxDQUFDRyxTQUFTLEdBQUdKLE1BQUksQ0FBQ0ssWUFBWSxDQUFDRixhQUFhLENBQUMzQyxHQUFHLEVBQUUyQyxhQUFhLENBQUM7UUFDOUU7UUFFQSxJQUFLLENBQUNKLFFBQVEsSUFBSSxDQUFDQyxNQUFJLENBQUNGLGVBQWUsQ0FBQ1QsT0FBTyxDQUFDLElBQU1VLFFBQVEsSUFBSVYsT0FBTyxDQUFDaUIsaUJBQWlCLEdBQUcsR0FBSSxFQUFFO1VBQ2hHLElBQUk3QixLQUFLLEdBQUcwQixhQUFhLENBQUM1QyxLQUFLLEdBQUc0QyxhQUFhLENBQUMzQyxHQUFHLEdBQUcyQyxhQUFhLENBQUMzQyxHQUFHLEdBQUcyQyxhQUFhLENBQUM1QyxLQUFLO1VBQzdGLE9BQU8wQyxHQUFHLENBQUNHLFNBQVMsR0FBR0osTUFBSSxDQUFDSyxZQUFZLENBQUM1QixLQUFLLEVBQUUwQixhQUFhLENBQUM7UUFDbEU7O1FBRUE7UUFDQUksVUFBVSxDQUFDLFlBQU07VUFDYixPQUFPUCxNQUFJLENBQUNRLFlBQVksQ0FBQ1AsR0FBRyxFQUFFRSxhQUFhLENBQUM7UUFDaEQsQ0FBQyxFQUFFQSxhQUFhLENBQUN6QyxLQUFLLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0IsYUFBYW5CLE9BQU8sRUFBRU8sTUFBTSxFQUFFO01BQUEsSUFBQWEsTUFBQTtNQUMxQjtNQUNBLElBQUlDLGlCQUFpQixHQUFHLENBQUNkLE1BQU0sQ0FBQ3BDLEdBQUcsR0FBR29DLE1BQU0sQ0FBQ3JDLEtBQUssS0FBS3FDLE1BQU0sQ0FBQ25DLFFBQVEsR0FBR21DLE1BQU0sQ0FBQ2xDLEtBQUssQ0FBQztNQUN0RjtNQUNBLElBQUlpRCxTQUFTLEdBQUcsS0FBSzs7TUFFckI7TUFDQSxJQUFJZixNQUFNLENBQUNyQyxLQUFLLEdBQUdxQyxNQUFNLENBQUNwQyxHQUFHLEVBQUU7UUFDM0JtRCxTQUFTLEdBQUcsS0FBSztRQUNqQkQsaUJBQWlCLElBQUksQ0FBQyxDQUFDO01BQzNCOztNQUVBO01BQ0EsSUFBSUUsWUFBWSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxDQUFDakIsTUFBTSxDQUFDckMsS0FBSyxDQUFDO01BQ2hEO01BQ0E4QixPQUFPLENBQUNlLFNBQVMsR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQ08sWUFBWSxFQUFFaEIsTUFBTSxDQUFDOztNQUUzRDtNQUNBLElBQUdBLE1BQU0sQ0FBQ2pDLElBQUksS0FBSyxJQUFJLEVBQUM7UUFDcEIwQixPQUFPLENBQUN5QixZQUFZLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO01BQ3hEOztNQUVBO01BQ0EsSUFBSUMsYUFBYSxHQUFHQyxXQUFXLENBQUMsWUFBTTtRQUNsQztRQUNBLElBQUlDLE9BQU8sR0FBR1IsTUFBSSxDQUFDUyxVQUFVLENBQUNOLFlBQVksRUFBRUYsaUJBQWlCLEVBQUVDLFNBQVMsQ0FBQztRQUN6RTtRQUNBdEIsT0FBTyxDQUFDZSxTQUFTLEdBQUdLLE1BQUksQ0FBQ0osWUFBWSxDQUFDWSxPQUFPLEVBQUVyQixNQUFNLENBQUM7UUFDdEQ7UUFDQWdCLFlBQVksR0FBR0ssT0FBTzs7UUFFdEI7UUFDQSxJQUFLTCxZQUFZLElBQUloQixNQUFNLENBQUNwQyxHQUFHLElBQUltRCxTQUFTLElBQUksS0FBSyxJQUFNQyxZQUFZLElBQUloQixNQUFNLENBQUNwQyxHQUFHLElBQUltRCxTQUFTLElBQUksS0FBTSxFQUFFO1VBQzFHdEIsT0FBTyxDQUFDZSxTQUFTLEdBQUdLLE1BQUksQ0FBQ0osWUFBWSxDQUFDVCxNQUFNLENBQUNwQyxHQUFHLEVBQUVvQyxNQUFNLENBQUM7VUFDekR1QixhQUFhLENBQUNKLGFBQWEsQ0FBQztRQUNoQztNQUNKLENBQUMsRUFBRW5CLE1BQU0sQ0FBQ2xDLEtBQUssQ0FBQztJQUNwQjtFQUFDO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvQixZQUFZUixPQUFPLEVBQUU7TUFBQSxJQUFBK0IsTUFBQTtNQUVqQjtNQUNBO01BQ0EsSUFBSUMsVUFBVSxHQUFBQyxhQUFBLEtBQU8sSUFBSSxDQUFDbkQsYUFBYSxDQUFDOztNQUV4QztNQUNBLElBQUlvRCxZQUFZLEdBQUcsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ3BDLE9BQU8sQ0FBQ3FDLFVBQVUsRUFBRSxVQUFTQyxJQUFJLEVBQUU7UUFDakUsT0FBTyxvQkFBb0IsQ0FBQ0MsSUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQztNQUMvQyxDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJMUIsYUFBYSxHQUFHLENBQUMsQ0FBQzs7TUFFdEI7TUFDQW9CLFlBQVksQ0FBQ25DLE9BQU8sQ0FBQyxVQUFBTSxDQUFDLEVBQUk7UUFDdEIsSUFBSW1DLElBQUksR0FBR25DLENBQUMsQ0FBQ21DLElBQUksQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztRQUNoRSxJQUFJdEQsS0FBSyxHQUFHb0QsSUFBSSxJQUFJLFVBQVUsR0FBR0csUUFBUSxDQUFDWixNQUFJLENBQUNQLFVBQVUsQ0FBQ25CLENBQUMsQ0FBQ2pCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHMkMsTUFBSSxDQUFDUCxVQUFVLENBQUNuQixDQUFDLENBQUNqQixLQUFLLENBQUM7UUFDckcwQixhQUFhLENBQUMwQixJQUFJLENBQUMsR0FBR3BELEtBQUssQ0FBQyxDQUFDO01BQ2pDLENBQUMsQ0FBQzs7TUFFRjtNQUNBLE9BQU9MLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDZ0QsVUFBVSxFQUFFbEIsYUFBYSxDQUFDO0lBRW5EOztJQUVBO0VBQUE7SUFBQTNCLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUF5QyxXQUFXZSxNQUFNLEVBQUVDLEtBQUssRUFBZ0I7TUFBQSxJQUFkQyxJQUFJLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEtBQUs7TUFDbEM7TUFDQUgsTUFBTSxHQUFHLElBQUksQ0FBQ3BCLFVBQVUsQ0FBQ29CLE1BQU0sQ0FBQztNQUNoQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3FCLEtBQUssQ0FBQzs7TUFFOUI7TUFDQTtNQUNBLE9BQU9LLFVBQVUsQ0FBQ0osSUFBSSxLQUFLLEtBQUssR0FBSUYsTUFBTSxHQUFHQyxLQUFLLEdBQUtELE1BQU0sR0FBR0MsS0FBTSxDQUFDO0lBQzNFOztJQUVBO0VBQUE7SUFBQTFELEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUErRCx3QkFBeUJQLE1BQU0sRUFBRXJDLE1BQU0sRUFBRTtNQUNyQyxJQUFJNkMsTUFBTSxHQUFHN0MsTUFBTSxDQUFDN0IsY0FBYyxJQUFJLEVBQUU7UUFBRTtRQUN0QzJFLEtBQUssR0FBRzlDLE1BQU0sQ0FBQ2hDLFFBQVEsSUFBSSxDQUFDO1FBQUc7UUFDL0JxRSxNQUFNLEdBQUdVLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFdkM7TUFDQSxJQUFJeEQsS0FBSyxHQUFHd0QsTUFBTSxJQUFJLE9BQU8sTUFBQWEsTUFBQSxDQUFNLENBQUNiLE1BQU0sR0FBRyxPQUFPLEVBQUVjLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLFFBQUs7TUFBQSxFQUNuRVQsTUFBTSxJQUFJLE1BQU0sTUFBQWEsTUFBQSxDQUFNLENBQUNiLE1BQU0sR0FBRyxNQUFNLEVBQUVjLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLFFBQUs7TUFBQSxFQUN2RFQsTUFBTSxJQUFJLE1BQU0sTUFBQWEsTUFBQSxDQUFNLENBQUNiLE1BQU0sR0FBRyxNQUFNLEVBQUVjLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLFFBQU07TUFBQSxFQUN4RFQsTUFBTSxJQUFJLE1BQU0sTUFBQWEsTUFBQSxDQUFNLENBQUNiLE1BQU0sR0FBRyxPQUFPLEVBQUVjLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLFFBQUs7TUFBQSxFQUN4RFQsTUFBTSxDQUFDYyxPQUFPLENBQUNMLEtBQUssQ0FBQyxDQUFDLENBQUM7O01BRXpDO01BQ0EsT0FBT0QsTUFBTSxHQUFHaEUsS0FBSztJQUN6Qjs7SUFFQTtFQUFBO0lBQUFELEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUF1RSxlQUFldkUsS0FBSyxFQUFFbUIsTUFBTSxFQUFDO01BQ3pCO01BQ0EsSUFBSSxDQUFDQSxNQUFNLENBQUM1QixTQUFTLEVBQUU7UUFDbkIsT0FBT1MsS0FBSyxDQUFDcUQsT0FBTyxDQUFDLElBQUltQixNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUNyRDs7TUFFQTtNQUNBLE9BQU94RSxLQUFLLENBQUNxRCxPQUFPLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQ2pEQSxPQUFPLENBQUMsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUVyRCxNQUFNLENBQUMzQixlQUFlLENBQUM7SUFDakU7O0lBRUE7RUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBNEIsYUFBYTRCLE1BQU0sRUFBRXJDLE1BQU0sRUFBRTtNQUN6QjtNQUNBLElBQUlzRCxTQUFTLEdBQUc7UUFBQ0MscUJBQXFCLEVBQUV2RCxNQUFNLENBQUNoQyxRQUFRO1FBQUV3RixxQkFBcUIsRUFBRXhELE1BQU0sQ0FBQ2hDO01BQVEsQ0FBQztNQUNoRztNQUNBcUUsTUFBTSxHQUFHckMsTUFBTSxDQUFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQzBFLHVCQUF1QixDQUFDUCxNQUFNLEVBQUVyQyxNQUFNLENBQUMsR0FBRzJDLFVBQVUsQ0FBQ04sTUFBTSxDQUFDOztNQUU1RjtNQUNBLE9BQU8sSUFBSSxDQUFDZSxjQUFjLENBQUNmLE1BQU0sQ0FBQ29CLGNBQWMsQ0FBQ2YsU0FBUyxFQUFFWSxTQUFTLENBQUMsRUFBRXRELE1BQU0sQ0FBQztJQUNuRjs7SUFFQTtFQUFBO0lBQUFwQixHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBb0MsV0FBV3lDLElBQUksRUFBRTtNQUNiO01BQ0EsSUFBSSxrQkFBa0IsQ0FBQzFCLElBQUksQ0FBQzBCLElBQUksQ0FBQyxFQUFFO1FBQy9CLE9BQU9mLFVBQVUsQ0FBQ2UsSUFBSSxDQUFDO01BQzNCO01BQ0E7TUFDQSxJQUFJLFVBQVUsQ0FBQzFCLElBQUksQ0FBQzBCLElBQUksQ0FBQyxFQUFFO1FBQ3ZCLE9BQU90QixRQUFRLENBQUNzQixJQUFJLENBQUM7TUFDekI7TUFDQTtNQUNBLElBQUksY0FBYyxDQUFDMUIsSUFBSSxDQUFDMEIsSUFBSSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxRQUFRLENBQUMxQixJQUFJLENBQUMwQixJQUFJLENBQUM7TUFDOUI7TUFDQTtNQUNBLE9BQU9BLElBQUk7SUFDZjs7SUFFQTtFQUFBO0lBQUE5RSxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBcUIsZ0JBQWdCVCxPQUFPLEVBQUU7TUFDckIsSUFBSWtFLEdBQUcsR0FBR2xFLE9BQU8sQ0FBQ21FLFNBQVM7TUFDM0IsSUFBSUMsSUFBSSxHQUFHcEUsT0FBTyxDQUFDcUUsVUFBVTtNQUM3QixJQUFJQyxLQUFLLEdBQUd0RSxPQUFPLENBQUN1RSxXQUFXO01BQy9CLElBQUlDLE1BQU0sR0FBR3hFLE9BQU8sQ0FBQ3lFLFlBQVk7TUFFakMsT0FBT3pFLE9BQU8sQ0FBQzBFLFlBQVksRUFBRTtRQUN6QjFFLE9BQU8sR0FBR0EsT0FBTyxDQUFDMEUsWUFBWTtRQUM5QlIsR0FBRyxJQUFJbEUsT0FBTyxDQUFDbUUsU0FBUztRQUN4QkMsSUFBSSxJQUFJcEUsT0FBTyxDQUFDcUUsVUFBVTtNQUM5QjtNQUVBLE9BQ0lILEdBQUcsSUFBSWhFLE1BQU0sQ0FBQ3lFLFdBQVcsSUFDekJQLElBQUksSUFBSWxFLE1BQU0sQ0FBQzBFLFdBQVcsSUFDekJWLEdBQUcsR0FBR00sTUFBTSxJQUFNdEUsTUFBTSxDQUFDeUUsV0FBVyxHQUFHekUsTUFBTSxDQUFDMkUsV0FBWSxJQUMxRFQsSUFBSSxHQUFHRSxLQUFLLElBQU1wRSxNQUFNLENBQUMwRSxXQUFXLEdBQUcxRSxNQUFNLENBQUM0RSxVQUFXO0lBRWxFOztJQUVBO0VBQUE7SUFBQTNGLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUFNLDhCQUFBLEVBQWdDO01BQzVCLE9BQVEsc0JBQXNCLElBQUlRLE1BQU0sSUFDbkMsMkJBQTJCLElBQUlBLE1BQU8sSUFDdEMsbUJBQW1CLElBQUlBLE1BQU0sQ0FBQzZFLHlCQUF5QixDQUFDQyxTQUFVO0lBQzNFO0VBQUM7RUFBQSxPQUFBbEgsV0FBQTtBQUFBO0FBSUwsK0RBQWVBLFdBQVc7Ozs7OztVQzNQMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUQ7QUFFekR5QixRQUFRLENBQUNZLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFFaEQsSUFBSXJDLHFFQUFXLENBQUM7SUFDWmUsUUFBUSxFQUFFO0VBQ2QsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvY291bnRlcnMvcHVyZWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2RzLWNvdW50ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEUyBDb3VudGVyICAxLjAuMFxuICpcbiAqIGJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vc3JleGkvcHVyZWNvdW50ZXJqc1xuICogV3JpdHRlbiBvbjogQXByaWwgMTUsIDIwMjFcbiAqXG4gKiBVU0FHRTpcbiAqL1xuXG5jbGFzcyBQdXJlQ291bnRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGVsYXk6IDEwLFxuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIGRlY2ltYWxzOiAwLFxuICAgICAgICAgICAgbGVnYWN5OiB0cnVlLFxuICAgICAgICAgICAgY3VycmVuY3k6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVuY3lzeW1ib2w6IGZhbHNlLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcGFyYXRvcnN5bWJvbDogJywnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcucHVyZWNvdW50ZXInXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZ09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnT3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb25TdXBwb3J0ZWQgPSB0aGlzLmludGVyc2VjdGlvbkxpc3RlbmVyU3VwcG9ydGVkKCk7XG5cbiAgICAgICAgaWYgKGludGVyc2VjdGlvblN1cHBvcnRlZCkge1xuICAgICAgICAgICAgdmFyIGludGVyc2VjdE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuYW5pbWF0ZUVsZW1lbnRzLmJpbmQodGhpcyksIHtcbiAgICAgICAgICAgICAgICBcInJvb3RcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInJvb3RNYXJnaW5cIjogJzIwcHgnLFxuICAgICAgICAgICAgICAgIFwidGhyZXNob2xkXCI6IDAuNVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0T2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVMZWdhY3koZWxlbWVudHMpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVMZWdhY3koZWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH0sIHsgXCJwYXNzaXZlXCI6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlTGVnYWN5KGVsZW1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhlbGVtZW50KTtcbiAgICAgICAgICAgIGlmKGNvbmZpZy5sZWdhY3kgPT09IHRydWUgJiYgdGhpcy5lbGVtZW50SXNJblZpZXcoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cyhbZWxlbWVudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFuaW1hdGVFbGVtZW50cyhlbGVtZW50cywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBlbGVtZW50LnRhcmdldCB8fCBlbGVtZW50OyAvLyBKdXN0IG1ha2Ugc3VyZSB3aGljaCBlbGVtZW50IHdpbGwgYmUgdXNlZFxuICAgICAgICAgICAgdmFyIGVsZW1lbnRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGVsbSk7IC8vIEdldCBjb25maWcgdmFsdWUgb24gdGhhdCBlbGVtZW50XG5cbiAgICAgICAgICAgIC8vIElmIGR1cmF0aW9uIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB6ZXJvLCBqdXN0IGZvcm1hdCB0aGUgJ2VuZCcgdmFsdWVcbiAgICAgICAgICAgIGlmIChlbGVtZW50Q29uZmlnLmR1cmF0aW9uIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTCA9IHRoaXMuZm9ybWF0TnVtYmVyKGVsZW1lbnRDb25maWcuZW5kLCBlbGVtZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCghb2JzZXJ2ZXIgJiYgIXRoaXMuZWxlbWVudElzSW5WaWV3KGVsZW1lbnQpKSB8fCAob2JzZXJ2ZXIgJiYgZWxlbWVudC5pbnRlcnNlY3Rpb25SYXRpbyA8IDAuNSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50Q29uZmlnLnN0YXJ0ID4gZWxlbWVudENvbmZpZy5lbmQgPyBlbGVtZW50Q29uZmlnLmVuZCA6IGVsZW1lbnRDb25maWcuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUwgPSB0aGlzLmZvcm1hdE51bWJlcih2YWx1ZSwgZWxlbWVudENvbmZpZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGR1cmF0aW9uIGlzIG1vcmUgdGhhbiAwLCB0aGVuIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydENvdW50ZXIoZWxtLCBlbGVtZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH0sIGVsZW1lbnRDb25maWcuZGVsYXkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydENvdW50ZXIoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIC8vIEZpcnN0LCBnZXQgdGhlIGluY3JlbWVudHMgc3RlcFxuICAgICAgICB2YXIgaW5jcmVtZW50c1BlclN0ZXAgPSAoY29uZmlnLmVuZCAtIGNvbmZpZy5zdGFydCkgLyAoY29uZmlnLmR1cmF0aW9uIC8gY29uZmlnLmRlbGF5KTtcbiAgICAgICAgLy8gTmV4dCwgc2V0IHRoZSBjb3VudGVyIG1vZGUgKEluY3JlbWVudCBvciBEZWNyZW1lbnQpXG4gICAgICAgIHZhciBjb3VudE1vZGUgPSAnaW5jJztcblxuICAgICAgICAvLyBTZXQgbW9kZSB0byAnZGVjcmVtZW50JyBhbmQgJ2luY3JlbWVudCBzdGVwJyB0byBtaW51cyBpZiBzdGFydCBpcyBsYXJnZXIgdGhhbiBlbmRcbiAgICAgICAgaWYgKGNvbmZpZy5zdGFydCA+IGNvbmZpZy5lbmQpIHtcbiAgICAgICAgICAgIGNvdW50TW9kZSA9ICdkZWMnO1xuICAgICAgICAgICAgaW5jcmVtZW50c1BlclN0ZXAgKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOZXh0LCBkZXRlcm1pbmUgdGhlIHN0YXJ0aW5nIHZhbHVlXG4gICAgICAgIHZhciBjdXJyZW50Q291bnQgPSB0aGlzLnBhcnNlVmFsdWUoY29uZmlnLnN0YXJ0KTtcbiAgICAgICAgLy8gQW5kIHRoZW4gcHJpbnQgaXQncyB2YWx1ZSB0byB0aGUgcGFnZVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZm9ybWF0TnVtYmVyKGN1cnJlbnRDb3VudCwgY29uZmlnKTtcblxuICAgICAgICAvLyBJZiB0aGUgY29uZmlnICdvbmNlJyBpcyB0cnVlLCB0aGVuIHNldCB0aGUgJ2R1cmF0aW9uJyB0byAwXG4gICAgICAgIGlmKGNvbmZpZy5vbmNlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXB1cmVjb3VudGVyLWR1cmF0aW9uJywgMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3csIHN0YXJ0IGNvdW50aW5nIHdpdGggY291bnRlcldvcmtlciB1c2luZyBJbnRlcnZhbCBtZXRob2QgYmFzZWQgb24gZGVsYXlcbiAgICAgICAgdmFyIGNvdW50ZXJXb3JrZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBGaXJzdCwgZGV0ZXJtaW5lIHRoZSBuZXh0IHZhbHVlIGJhc2Ugb24gY3VycmVudCB2YWx1ZSwgaW5jcmVtZW50IHZhbHVlLCBhbmQgY291bmQgbW9kZVxuICAgICAgICAgICAgdmFyIG5leHROdW0gPSB0aGlzLm5leHROdW1iZXIoY3VycmVudENvdW50LCBpbmNyZW1lbnRzUGVyU3RlcCwgY291bnRNb2RlKTtcbiAgICAgICAgICAgIC8vIE5leHQsIHByaW50IHRoYXQgdmFsdWUgdG8gdGhlIHBhZ2VcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5mb3JtYXROdW1iZXIobmV4dE51bSwgY29uZmlnKTtcbiAgICAgICAgICAgIC8vIE5vdyBzZXQgdGhhdCB2YWx1ZSB0byB0aGUgY3VycmVudCB2YWx1ZSwgYmVjb3VzZSBpdCdzIGFscmVhZHkgcHJpbnRlZFxuICAgICAgICAgICAgY3VycmVudENvdW50ID0gbmV4dE51bTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGxhcmdlciBvciBsZXNzIHRoYW4gdGhlICdlbmQnIChiYXNlIG9uIG1vZGUpLCB0aGVuICBwcmludCB0aGUgZW5kIHZhbHVlIGFuZCBzdG9wIHRoZSBJbnRlcnZhbFxuICAgICAgICAgICAgaWYgKChjdXJyZW50Q291bnQgPj0gY29uZmlnLmVuZCAmJiBjb3VudE1vZGUgPT0gJ2luYycpIHx8IChjdXJyZW50Q291bnQgPD0gY29uZmlnLmVuZCAmJiBjb3VudE1vZGUgPT0gJ2RlYycpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmZvcm1hdE51bWJlcihjb25maWcuZW5kLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlcldvcmtlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbmZpZy5kZWxheSk7XG4gICAgfVxuXG4gICAgcGFyc2VDb25maWcoZWxlbWVudCkge1xuXG4gICAgICAgIC8vIEZpcnN0LCB3ZSBuZWVkIHRvIGRlY2xhcmUgdGhlIGJhc2UgQ29uZmlnXG4gICAgICAgIC8vIFRoaXMgY29uZmlnIHdpbGwgYmUgdXNlZCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgY29uZmlnXG4gICAgICAgIHZhciBiYXNlQ29uZmlnID0gey4uLnRoaXMuY29uZmlnT3B0aW9uc307XG5cbiAgICAgICAgLy8gTmV4dCwgZ2V0dCBhbGwgJ2RhdGEtcHJlY291bnRlcicgYXR0cmlidXRlcyB2YWx1ZS4gU3RvcmUgdG8gYXJyYXlcbiAgICAgICAgdmFyIGNvbmZpZ1ZhbHVlcyA9IFtdLmZpbHRlci5jYWxsKGVsZW1lbnQuYXR0cmlidXRlcywgZnVuY3Rpb24oYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIC9eZGF0YS1wdXJlY291bnRlci0vLnRlc3QoYXR0ci5uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm93LCB3ZSBjcmVhdGUgZWxlbWVudCBjb25maWcgYXMgYW4gZW1wdHkgb2JqZWN0XG4gICAgICAgIHZhciBlbGVtZW50Q29uZmlnID0ge307XG5cbiAgICAgICAgLy8gQW5kIHRoZW4sIGZpbGwgdGhlIGVsZW1lbnQgY29uZmlnIGJhc2VkIG9uIGNvbmZpZyB2YWx1ZXNcbiAgICAgICAgY29uZmlnVmFsdWVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGUubmFtZS5yZXBsYWNlKCdkYXRhLXB1cmVjb3VudGVyLScsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbmFtZSA9PSAnZHVyYXRpb24nID8gcGFyc2VJbnQodGhpcy5wYXJzZVZhbHVlKGUudmFsdWUpICogMTAwMCkgOiB0aGlzLnBhcnNlVmFsdWUoZS52YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50Q29uZmlnW25hbWVdID0gdmFsdWU7IC8vIFdlIHdpbGwgZ2V0IGFuIG9iamVjdFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIExhc3QgbWFyZ2UgYmFzZSBjb25maWcgd2l0aCBlbGVtZW50IGNvbmZpZyBhbmQgcmV0dXJuIGl0IGFzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlQ29uZmlnLCBlbGVtZW50Q29uZmlnKTtcblxuICAgIH1cblxuICAgIC8qKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGdldCB0aGUgbmV4dCBudW1iZXIgKi9cbiAgICBuZXh0TnVtYmVyKG51bWJlciwgc3RlcHMsIG1vZGUgPSAnaW5jJykge1xuICAgICAgICAvLyBGaXJzdCwgZ2V0IHRoZSBleGFjdCB2YWx1ZSBmcm9tIHRoZSBudW1iZXIgYW5kIHN0ZXAgKGludCBvciBmbG9hdClcbiAgICAgICAgbnVtYmVyID0gdGhpcy5wYXJzZVZhbHVlKG51bWJlcik7XG4gICAgICAgIHN0ZXBzID0gdGhpcy5wYXJzZVZhbHVlKHN0ZXBzKTtcblxuICAgICAgICAvLyBMYXN0LCBnZXQgdGhlIG5leHQgbnVtYmVyIGJhc2VkIG9uIGN1cnJlbnQgbnVtYmVyLCBpbmNyZW1lbnQgc3RlcCwgYW5kIGNvdW50IG1vZGVcbiAgICAgICAgLy8gQWx3YXlzIHJldHVybiBpdCBhcyBmbG9hdFxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtb2RlID09PSAnaW5jJyA/IChudW1iZXIgKyBzdGVwcykgOiAobnVtYmVyIC0gc3RlcHMpKTtcbiAgICB9XG5cbiAgICAvKiogVGhpcyBmdW5jdGlvbiBpcyB0byBjb252ZXJ0IG51bWJlciBpbnRvIGN1cnJlbmN5IGZvcm1hdCAqL1xuICAgIGNvbnZlcnRUb0N1cnJlbmN5U3lzdGVtIChudW1iZXIsIGNvbmZpZykge1xuICAgICAgICB2YXIgc3ltYm9sID0gY29uZmlnLmN1cnJlbmN5c3ltYm9sIHx8IFwiXCIsIC8vIFNldCB0aGUgQ3VycmVuY3kgU3ltYm9sIChpZiBhbnkpXG4gICAgICAgICAgICBsaW1pdCA9IGNvbmZpZy5kZWNpbWFscyB8fCAxLCAgLy8gU2V0IHRoZSBkZWNpbWFsIGxpbWl0IChkZWZhdWx0IGlzIDEpXG4gICAgICAgICAgICBudW1iZXIgPSBNYXRoLmFicyhOdW1iZXIobnVtYmVyKSk7IC8vIEdldCB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgbnVtYmVyXG5cbiAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZVxuICAgICAgICB2YXIgdmFsdWUgPSBudW1iZXIgPj0gMS4wZSsxMiA/IGAkeyhudW1iZXIgLyAxLjBlKzEyKS50b0ZpeGVkKGxpbWl0KX0gVGAgLy8gVHdlbHZlIHplcm9zIGZvciBUcmlsbGlvbnNcbiAgICAgICAgICAgIDogbnVtYmVyID49IDEuMGUrOSA/IGAkeyhudW1iZXIgLyAxLjBlKzkpLnRvRml4ZWQobGltaXQpfSBCYCAvLyBOaW5lIHplcm9zIGZvciBCaWxsaW9uc1xuICAgICAgICAgICAgICAgIDogbnVtYmVyID49IDEuMGUrNiA/IGAkeyhudW1iZXIgLyAxLjBlKzYpLnRvRml4ZWQobGltaXQpfSBNYCAgLy8gU2l4IHplcm9zIGZvciBNaWxsaW9uc1xuICAgICAgICAgICAgICAgICAgICA6IG51bWJlciA+PSAxLjBlKzMgPyBgJHsobnVtYmVyIC8gMS4wZSsxMikudG9GaXhlZChsaW1pdCl9IEtgIC8vIFRocmVlIHplcm9zIGZvciBUaGF1c2FuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVtYmVyLnRvRml4ZWQobGltaXQpOyAvLyBJZiBsZXNzIHRoYW4gMTAwMCwgcHJpbnQgaXQncyB2YWx1ZVxuXG4gICAgICAgIC8vIEFwcGx5IHN5bWJvbCBiZWZvcmUgdGhlIHZhbHVlIGFuZCByZXR1cm4gaXQgYXMgc3RyaW5nXG4gICAgICAgIHJldHVybiBzeW1ib2wgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogVGhpcyBmdW5jdGlvbiBpcyB0byBnZXQgdGhlIGxhc3QgZm9ybWF0ZWQgbnVtYmVyICovXG4gICAgYXBwbHlTZXBhcmF0b3IodmFsdWUsIGNvbmZpZyl7XG4gICAgICAgIC8vIElmIGNvbmZpZyBzZXBhcmF0b3IgaXMgZmFsc2UsIGRlbGV0ZSBhbGwgc2VwYXJhdG9yXG4gICAgICAgIGlmICghY29uZmlnLnNlcGFyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cCgvLC9naSwgJ2dpJyksICcnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY29uZmlnIHNlcGFyYXRvciBpcyB0cnVlLCB0aGVuIGNyZWF0ZSBzZXBhcmF0b3JcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIkMSxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoLywvZ2ksICdnaScpLCBjb25maWcuc2VwYXJhdG9yc3ltYm9sKVxuICAgIH1cblxuICAgIC8qKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGdldCBmb3JtYXRlZCBudW1iZXIgdG8gYmUgcHJpbnRlZCBpbiB0aGUgcGFnZSAqL1xuICAgIGZvcm1hdE51bWJlcihudW1iZXIsIGNvbmZpZykge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBjb25maWd1cmF0aW9uIGZvciAndG9Mb2NhbGVTdHJpbmcnIG1ldGhvZFxuICAgICAgICB2YXIgc3RyQ29uZmlnID0ge21pbmltdW1GcmFjdGlvbkRpZ2l0czogY29uZmlnLmRlY2ltYWxzLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGNvbmZpZy5kZWNpbWFsc307XG4gICAgICAgIC8vIFNldCB0aGUgbnVtYmVyIGlmIGl0IHVzaW5nIGN1cnJlbmN5LCB0aGVuIGNvbnZlcnQuIElmIGRvZXNuJ3QsIGp1c3QgcGFyc2UgaXQgYXMgZmxvYXRcbiAgICAgICAgbnVtYmVyID0gY29uZmlnLmN1cnJlbmN5ID8gdGhpcy5jb252ZXJ0VG9DdXJyZW5jeVN5c3RlbShudW1iZXIsIGNvbmZpZykgOiBwYXJzZUZsb2F0KG51bWJlcik7XG5cbiAgICAgICAgLy8gTGFzdCwgYXBwbHkgdGhlIG51bWJlciBzZXBhcmF0b3IgdXNpbmcgbnVtYmVyIGFzIHN0cmluZ1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVNlcGFyYXRvcihudW1iZXIudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCBzdHJDb25maWcpLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGdldCB0aGUgcGFyc2VkIHZhbHVlICovXG4gICAgcGFyc2VWYWx1ZShkYXRhKSB7XG4gICAgICAgIC8vIElmIG51bWJlciB3aXRoIGRvdCAoLiksIHdpbGwgYmUgcGFyc2VkIGFzIGZsb2F0XG4gICAgICAgIGlmICgvXlswLTldK1xcLlswLTldKyQvLnRlc3QoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGp1c3QgbnVtYmVyLCB3aWxsIGJlIHBhcnNlZCBhcyBpbnRlZ2VyXG4gICAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGJvb2xlYW4gc3RyaW5nLCB3aWxsIGJlIHBhcnNlZCBhcyBib29sZWFuXG4gICAgICAgIGlmICgvXnRydWV8ZmFsc2UvaS50ZXN0KGRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gL150cnVlL2kudGVzdChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gaXQncyB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGRldGVjdCB0aGUgZWxlbWVudCBpcyBpbiB2aWV3IG9yIG5vdC4gKi9cbiAgICBlbGVtZW50SXNJblZpZXcoZWxlbWVudCkge1xuICAgICAgICB2YXIgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIHZhciBsZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgd2hpbGUgKGVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0b3AgPj0gd2luZG93LnBhZ2VZT2Zmc2V0ICYmXG4gICAgICAgICAgICBsZWZ0ID49IHdpbmRvdy5wYWdlWE9mZnNldCAmJlxuICAgICAgICAgICAgKHRvcCArIGhlaWdodCkgPD0gKHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCkgJiZcbiAgICAgICAgICAgIChsZWZ0ICsgd2lkdGgpIDw9ICh3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiogSnVzdCBzb21lIGNvbmRpdGlvbiB0byBjaGVjayBicm93c2VyIEludGVyc2VjdGlvbiBTdXBwb3J0ICovXG4gICAgaW50ZXJzZWN0aW9uTGlzdGVuZXJTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpICYmXG4gICAgICAgICAgICAoJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdykgJiZcbiAgICAgICAgICAgICgnaW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFB1cmVDb3VudGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gKiBAdGl0bGUgQ291bnRlciBQbHVnaW4gSW5pdFxuICogQGRlc2NyaXB0aW9uIEFwcGxpY2F0aW9uIGVudHJ5IHBvaW50XG4gKi9cblxuaW1wb3J0IFB1cmVDb3VudGVyIGZyb20gJy4vbGlicmFyeS9jb3VudGVycy9wdXJlY291bnRlcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBuZXcgUHVyZUNvdW50ZXIoe1xuICAgICAgICBzZWxlY3RvcjogJy5jLWNvdW50ZXJfX251bWJlcicsXG4gICAgfSk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIlB1cmVDb3VudGVyIiwib3B0aW9ucyIsIl9jbGFzc0NhbGxDaGVjayIsImRlZmF1bHRzIiwic3RhcnQiLCJlbmQiLCJkdXJhdGlvbiIsImRlbGF5Iiwib25jZSIsImRlY2ltYWxzIiwibGVnYWN5IiwiY3VycmVuY3kiLCJjdXJyZW5jeXN5bWJvbCIsInNlcGFyYXRvciIsInNlcGFyYXRvcnN5bWJvbCIsInNlbGVjdG9yIiwiY29uZmlnT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnRlcnNlY3Rpb25TdXBwb3J0ZWQiLCJpbnRlcnNlY3Rpb25MaXN0ZW5lclN1cHBvcnRlZCIsImludGVyc2VjdE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJhbmltYXRlRWxlbWVudHMiLCJiaW5kIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJvYnNlcnZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGVMZWdhY3kiLCJlIiwiX3RoaXMyIiwiY29uZmlnIiwicGFyc2VDb25maWciLCJlbGVtZW50SXNJblZpZXciLCJvYnNlcnZlciIsIl90aGlzMyIsImVsbSIsInRhcmdldCIsImVsZW1lbnRDb25maWciLCJpbm5lckhUTUwiLCJmb3JtYXROdW1iZXIiLCJpbnRlcnNlY3Rpb25SYXRpbyIsInNldFRpbWVvdXQiLCJzdGFydENvdW50ZXIiLCJfdGhpczQiLCJpbmNyZW1lbnRzUGVyU3RlcCIsImNvdW50TW9kZSIsImN1cnJlbnRDb3VudCIsInBhcnNlVmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudGVyV29ya2VyIiwic2V0SW50ZXJ2YWwiLCJuZXh0TnVtIiwibmV4dE51bWJlciIsImNsZWFySW50ZXJ2YWwiLCJfdGhpczUiLCJiYXNlQ29uZmlnIiwiX29iamVjdFNwcmVhZCIsImNvbmZpZ1ZhbHVlcyIsImZpbHRlciIsImNhbGwiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsInRlc3QiLCJuYW1lIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicGFyc2VJbnQiLCJudW1iZXIiLCJzdGVwcyIsIm1vZGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwYXJzZUZsb2F0IiwiY29udmVydFRvQ3VycmVuY3lTeXN0ZW0iLCJzeW1ib2wiLCJsaW1pdCIsIk1hdGgiLCJhYnMiLCJOdW1iZXIiLCJjb25jYXQiLCJ0b0ZpeGVkIiwiYXBwbHlTZXBhcmF0b3IiLCJSZWdFeHAiLCJzdHJDb25maWciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJ0b0xvY2FsZVN0cmluZyIsImRhdGEiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRQYXJlbnQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsInByb3RvdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=