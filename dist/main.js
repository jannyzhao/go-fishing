/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n//adding DOMContentLoaded to ensure canvas element is loaded before accessing it\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"gameBox\");\n  const ctx = canvas.getContext(\"2d\");\n  const CANVAS_WIDTH = canvas.width = 1000;\n  const CANVAS_HEIGHT = canvas.height = 600;\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  game.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7O0FBRWxDO0FBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUNqRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVuQyxNQUFNQyxZQUFZLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHLElBQUk7RUFDeEMsTUFBTUMsYUFBYSxHQUFHTixNQUFNLENBQUNPLE1BQU0sR0FBRyxHQUFHO0VBRXpDLE1BQU1DLElBQUksR0FBRyxJQUFJWCxxREFBSSxDQUFDRyxNQUFNLENBQUM7RUFDN0JRLElBQUksQ0FBQ0MsS0FBSyxFQUFFO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuLy9hZGRpbmcgRE9NQ29udGVudExvYWRlZCB0byBlbnN1cmUgY2FudmFzIGVsZW1lbnQgaXMgbG9hZGVkIGJlZm9yZSBhY2Nlc3NpbmcgaXRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb3hcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNvbnN0IENBTlZBU19XSURUSCA9IGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICBnYW1lLnN0YXJ0KCk7XG59KTsiXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkNBTlZBU19XSURUSCIsIndpZHRoIiwiQ0FOVkFTX0hFSUdIVCIsImhlaWdodCIsImdhbWUiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fish.js":
/*!*****************************!*\
  !*** ./src/scripts/fish.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\nclass Fish {\n  constructor(x, y, dx, dy, radius, color) {\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.radius = radius;\n    this.color = color;\n  }\n  draw(ctx) {\n    // const img = new Image ();\n    // img.onload = () => {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx.fill();\n    ctx.closePath();\n    // };\n    // img.src = \"./assets/ufo.png\"\n  }\n\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY; //this line will make the fix go diagonally\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maXNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtJQUNyQyxJQUFJLENBQUNMLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDSyxVQUFVLEdBQUdKLEVBQUU7SUFDcEIsSUFBSSxDQUFDSyxVQUFVLEdBQUdKLEVBQUU7SUFDcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7RUFFQUcsSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDTjtJQUNBO0lBQ0FBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0wsS0FBSztJQUMxQkksR0FBRyxDQUFDRSxTQUFTLEVBQUU7SUFDZkYsR0FBRyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxFQUFFUyxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQzNETCxHQUFHLENBQUNNLElBQUksRUFBRTtJQUNWTixHQUFHLENBQUNPLFNBQVMsRUFBRTtJQUNmO0lBQ0E7RUFFSjs7RUFFQUMsTUFBTSxHQUFHO0lBQ0wsSUFBSSxDQUFDakIsQ0FBQyxJQUFJLElBQUksQ0FBQ00sVUFBVTtJQUN6QixJQUFJLENBQUNMLENBQUMsSUFBSSxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0VBQy9CO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZmlzaC5qcz9kMDJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGR4LCBkeSwgcmFkaXVzLCBjb2xvcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgLy8gY29uc3QgaW1nID0gbmV3IEltYWdlICgpO1xuICAgICAgICAvLyBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBpbWcuc3JjID0gXCIuL2Fzc2V0cy91Zm8ucG5nXCJcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZGlyZWN0aW9uWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZGlyZWN0aW9uWTsgLy90aGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBmaXggZ28gZGlhZ29uYWxseVxuICAgIH1cbn0iXSwibmFtZXMiOlsiRmlzaCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJkeCIsImR5IiwicmFkaXVzIiwiY29sb3IiLCJkaXJlY3Rpb25YIiwiZGlyZWN0aW9uWSIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/fish.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish */ \"./src/scripts/fish.js\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ \"./src/scripts/hook.js\");\n\n\n\n//smallFish = 20\n//bigFish = 25\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.hook = new _hook__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.width / 2, 0, 0, 2, \"white\");\n    this.fishes = [new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 2, 3, 0, 20, \"yellow\"),\n    // x, y, directionX, directionY, radius, color \n    new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 3, 4, 0, 25, \"yellow\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 4, 2, 0, 20, \"yellow\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 5, 6, 0, 25, \"yellow\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height - canvas.height / 4, 4, 0, 25, \"lightblue\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 3, -3, 0, 20, \"orange\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 4, -4, 0, 25, \"orange\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 2, -5, 0, 20, \"orange\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 6, -6, 0, 25, \"orange\")\n    // new Fish(canvas.width / 3, 0, 2, 3, 5, \"black\"),\n    ];\n  }\n\n  drawFishes() {\n    this.fishes.forEach(fish => fish.draw(this.ctx));\n  }\n  drawHook() {\n    this.hook.draw(this.ctx);\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.drawFishes();\n    this.fishes.forEach(fish => fish.update());\n    this.drawHook();\n    this.hook.update();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  start() {\n    this.animate();\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ1gsVUFBVSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxVQUFVLENBQUNFLE1BQU0sQ0FBQztJQUN2RSxJQUFJLENBQUNHLFVBQVUsRUFBRTtJQUNqQixJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0ssTUFBTSxFQUFFLENBQUM7SUFDMUMsSUFBSSxDQUFDSCxRQUFRLEVBQUU7SUFDZixJQUFJLENBQUNOLElBQUksQ0FBQ1MsTUFBTSxFQUFFO0lBQ2xCQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2xEO0VBRUFDLEtBQUssR0FBRztJQUNKLElBQUksQ0FBQ0wsT0FBTyxFQUFFO0VBQ2xCO0FBQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpc2ggZnJvbSBcIi4vZmlzaFwiO1xuaW1wb3J0IEhvb2sgZnJvbSBcIi4vaG9va1wiO1xuXG4vL3NtYWxsRmlzaCA9IDIwXG4vL2JpZ0Zpc2ggPSAyNVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5ob29rID0gbmV3IEhvb2soY2FudmFzLndpZHRoIC8gMiwgMCwgMCwgMiwgXCJ3aGl0ZVwiKVxuICAgICAgICB0aGlzLmZpc2hlcyA9IFtcblxuICAgICAgICAgICAgbmV3IEZpc2goMCwgKGNhbnZhcy5oZWlnaHQgLyAyKSwgMywgMCwgMjAsIFwieWVsbG93XCIpLCBcbiAgICAgICAgICAgIC8vIHgsIHksIGRpcmVjdGlvblgsIGRpcmVjdGlvblksIHJhZGl1cywgY29sb3IgXG4gICAgICAgICAgICBuZXcgRmlzaCgwLCAoY2FudmFzLmhlaWdodCAvIDMpLCA0LCAwLCAyNSwgXCJ5ZWxsb3dcIiksXG4gICAgICAgICAgICBuZXcgRmlzaCgwLCAoY2FudmFzLmhlaWdodCAvIDQpLCAyLCAwLCAyMCwgXCJ5ZWxsb3dcIiksXG4gICAgICAgICAgICBuZXcgRmlzaCgwLCAoY2FudmFzLmhlaWdodCAvIDUpLCA2LCAwLCAyNSwgXCJ5ZWxsb3dcIiksXG4gICAgICAgICAgICBuZXcgRmlzaCgwLCAoY2FudmFzLmhlaWdodCAtIChjYW52YXMuaGVpZ2h0IC8gNCkpLCA0LCAwLCAyNSwgXCJsaWdodGJsdWVcIiksXG5cbiAgICAgICAgICAgIG5ldyBGaXNoKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAvIDMsIC0zLCAwLCAyMCwgXCJvcmFuZ2VcIiksXG4gICAgICAgICAgICBuZXcgRmlzaChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyA0LCAtNCwgMCwgMjUsIFwib3JhbmdlXCIpLFxuICAgICAgICAgICAgbmV3IEZpc2goY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0IC8gMiwgLTUsIDAsIDIwLCBcIm9yYW5nZVwiKSxcbiAgICAgICAgICAgIG5ldyBGaXNoKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAvIDYsIC02LCAwLCAyNSwgXCJvcmFuZ2VcIiksXG4gICAgICAgICAgICAvLyBuZXcgRmlzaChjYW52YXMud2lkdGggLyAzLCAwLCAyLCAzLCA1LCBcImJsYWNrXCIpLFxuXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBkcmF3RmlzaGVzKCkge1xuICAgICAgICB0aGlzLmZpc2hlcy5mb3JFYWNoKGZpc2ggPT4gZmlzaC5kcmF3KHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIFxuICAgIGRyYXdIb29rKCkge1xuICAgICAgICB0aGlzLmhvb2suZHJhdyh0aGlzLmN0eCk7IFxuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3RmlzaGVzKCk7XG4gICAgICAgIHRoaXMuZmlzaGVzLmZvckVhY2goZmlzaCA9PiBmaXNoLnVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5kcmF3SG9vaygpO1xuICAgICAgICB0aGlzLmhvb2sudXBkYXRlKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbIkZpc2giLCJIb29rIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImhvb2siLCJmaXNoZXMiLCJkcmF3RmlzaGVzIiwiZm9yRWFjaCIsImZpc2giLCJkcmF3IiwiZHJhd0hvb2siLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/hook.js":
/*!*****************************!*\
  !*** ./src/scripts/hook.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hook; }\n/* harmony export */ });\nclass Hook {\n  constructor(x, y, dx, dy, color) {\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.moveTo(this.x, 0);\n    ctx.lineTo(this.x, this.y);\n    ctx.stroke();\n    ctx.closePath();\n  }\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob29rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEVBQUU7SUFDN0IsSUFBSSxDQUFDSixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0ksVUFBVSxHQUFHSCxFQUFFO0lBQ3BCLElBQUksQ0FBQ0ksVUFBVSxHQUFHSCxFQUFFO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBRUFHLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0wsS0FBSztJQUM1QkksR0FBRyxDQUFDRSxTQUFTLEdBQUcsQ0FBQztJQUNqQkYsR0FBRyxDQUFDRyxTQUFTLEVBQUU7SUFDZkgsR0FBRyxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCUSxHQUFHLENBQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUNiLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztJQUMxQk8sR0FBRyxDQUFDTSxNQUFNLEVBQUU7SUFDWk4sR0FBRyxDQUFDTyxTQUFTLEVBQUU7RUFDbkI7RUFFQUMsTUFBTSxHQUFHO0lBQ0wsSUFBSSxDQUFDaEIsQ0FBQyxJQUFJLElBQUksQ0FBQ0ssVUFBVTtJQUN6QixJQUFJLENBQUNKLENBQUMsSUFBSSxJQUFJLENBQUNLLFVBQVU7RUFDN0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9ob29rLmpzP2NjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vayB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZHgsIGR5LCBjb2xvcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmRpcmVjdGlvblg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmRpcmVjdGlvblk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJIb29rIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImR4IiwiZHkiLCJjb2xvciIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHJhdyIsImN0eCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/hook.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;