module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony import */ var serverless_postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-postgres */ \"serverless-postgres\");\n/* harmony import */ var serverless_postgres__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_postgres__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst query = async query => {\n  try {\n    console.log(\"Begin connection\");\n    console.log({\n      query\n    });\n    const db = new serverless_postgres__WEBPACK_IMPORTED_MODULE_0___default.a({\n      host: process.env.DB_HOST,\n      database: process.env.DB_NAME,\n      user: process.env.DB_USER,\n      password: process.env.DB_PASSWORD,\n      port: process.env.DB_PORT\n    });\n    await db.sconnect();\n    const results = await db.query(query);\n    await db.end();\n    return results;\n  } catch (error) {\n    return {\n      error\n    };\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkYiIsIlNlcnZlcmxlc3NDbGllbnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwiREJfUE9SVCIsInNjb25uZWN0IiwicmVzdWx0cyIsImVuZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFPQSxLQUFQLElBQWlCO0FBQzdCLE1BQUk7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0Y7QUFBRCxLQUFaO0FBQ0EsVUFBTUcsRUFBRSxHQUFHLElBQUlDLDBEQUFKLENBQXFCO0FBQzVCQyxVQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQURVO0FBRTVCQyxjQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUZNO0FBRzVCQyxVQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxPQUhVO0FBSTVCQyxjQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxXQUpNO0FBSzVCQyxVQUFJLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUztBQUxVLEtBQXJCLENBQVg7QUFPQSxVQUFNYixFQUFFLENBQUNjLFFBQUgsRUFBTjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNZixFQUFFLENBQUNILEtBQUgsQ0FBU0EsS0FBVCxDQUF0QjtBQUNBLFVBQU1HLEVBQUUsQ0FBQ2dCLEdBQUgsRUFBTjtBQUNBLFdBQU9ELE9BQVA7QUFDRCxHQWRELENBY0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFQTtBQUFGLEtBQVA7QUFDRDtBQUNGLENBbEJEIiwiZmlsZSI6Ii4vbGliL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZlcmxlc3NDbGllbnQgZnJvbSAnc2VydmVybGVzcy1wb3N0Z3JlcydcblxuY29uc3QgcXVlcnkgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcIkJlZ2luIGNvbm5lY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coe3F1ZXJ5fSlcbiAgICBjb25zdCBkYiA9IG5ldyBTZXJ2ZXJsZXNzQ2xpZW50KHtcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVFxuICAgIH0pXG4gICAgYXdhaXQgZGIuc2Nvbm5lY3QoKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZGIucXVlcnkocXVlcnkpXG4gICAgYXdhaXQgZGIuZW5kKClcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yIH1cbiAgfVxufVxuXG5leHBvcnQgeyBxdWVyeSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar db = _interopRequireWildcard(__webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\"));\n\nvar _sqlTemplateStrings = _interopRequireDefault(__webpack_require__(/*! sql-template-strings */ \"sql-template-strings\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nmodule.exports = async (req, res) => {\n  let page = parseInt(req.query.page) || 1;\n  const limit = parseInt(req.query.limit) || 9;\n  if (page < 1) page = 1;\n  const users = await db.query(`\n      SELECT *\n      FROM users\n      ORDER BY id\n      LIMIT ${limit}\n      OFFSET ${(page - 1) * limit}\n    `);\n  const count = await db.query(`\n      SELECT COUNT(*)\n      AS usersCount\n      FROM users\n    `);\n  const {\n    usersCount\n  } = count;\n  const pageCount = Math.ceil(usersCount / limit);\n  res.status(200).json({\n    users,\n    pageCount,\n    page\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/YzVmYyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxIiwicmVzIiwicGFnZSIsInBhcnNlSW50IiwicXVlcnkiLCJsaW1pdCIsInVzZXJzIiwiZGIiLCJjb3VudCIsInVzZXJzQ291bnQiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbkMsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNILEdBQUcsQ0FBQ0ksS0FBSixDQUFVRixJQUFYLENBQVIsSUFBNEIsQ0FBdkM7QUFDQSxRQUFNRyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxLQUFKLENBQVVDLEtBQVgsQ0FBUixJQUE2QixDQUEzQztBQUNBLE1BQUlILElBQUksR0FBRyxDQUFYLEVBQWNBLElBQUksR0FBRyxDQUFQO0FBRWQsUUFBTUksS0FBSyxHQUFHLE1BQU1DLEVBQUUsQ0FBQ0gsS0FBSCxDQUFVOzs7O2NBSWxCQyxLQUFNO2VBQ0wsQ0FBQ0gsSUFBSSxHQUFHLENBQVIsSUFBYUcsS0FBTTtLQUxaLENBQXBCO0FBT0EsUUFBTUcsS0FBSyxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0gsS0FBSCxDQUFVOzs7O0tBQVYsQ0FBcEI7QUFLQSxRQUFNO0FBQUVLO0FBQUYsTUFBaUJELEtBQXZCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsVUFBVSxHQUFHSixLQUF2QixDQUFsQjtBQUNBSixLQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUixTQUFGO0FBQVNJLGFBQVQ7QUFBb0JSO0FBQXBCLEdBQXJCO0FBQ0QsQ0FwQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkYiBmcm9tICcuLi8uLi8uLi9saWIvZGInXG5pbXBvcnQgZXNjYXBlIGZyb20gJ3NxbC10ZW1wbGF0ZS1zdHJpbmdzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBsZXQgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlKSB8fCAxXG4gIGNvbnN0IGxpbWl0ID0gcGFyc2VJbnQocmVxLnF1ZXJ5LmxpbWl0KSB8fCA5XG4gIGlmIChwYWdlIDwgMSkgcGFnZSA9IDFcblxuICBjb25zdCB1c2VycyA9IGF3YWl0IGRiLnF1ZXJ5KGBcbiAgICAgIFNFTEVDVCAqXG4gICAgICBGUk9NIHVzZXJzXG4gICAgICBPUkRFUiBCWSBpZFxuICAgICAgTElNSVQgJHtsaW1pdH1cbiAgICAgIE9GRlNFVCAkeyhwYWdlIC0gMSkgKiBsaW1pdH1cbiAgICBgKVxuICBjb25zdCBjb3VudCA9IGF3YWl0IGRiLnF1ZXJ5KGBcbiAgICAgIFNFTEVDVCBDT1VOVCgqKVxuICAgICAgQVMgdXNlcnNDb3VudFxuICAgICAgRlJPTSB1c2Vyc1xuICAgIGApXG4gIGNvbnN0IHsgdXNlcnNDb3VudCB9ID0gY291bnRcbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKHVzZXJzQ291bnQgLyBsaW1pdClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VycywgcGFnZUNvdW50LCBwYWdlIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/users/index.js\n");

/***/ }),

/***/ "serverless-postgres":
/*!**************************************!*\
  !*** external "serverless-postgres" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serverless-postgres\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZXJsZXNzLXBvc3RncmVzXCI/Yzg2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzZXJ2ZXJsZXNzLXBvc3RncmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmVybGVzcy1wb3N0Z3Jlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///serverless-postgres\n");

/***/ }),

/***/ "sql-template-strings":
/*!***************************************!*\
  !*** external "sql-template-strings" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sql-template-strings\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiPzg1YzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3FsLXRlbXBsYXRlLXN0cmluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///sql-template-strings\n");

/***/ })

/******/ });