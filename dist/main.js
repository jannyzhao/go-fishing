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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n//adding DOMContentLoaded to ensure canvas element is loaded before accessing it\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"gameBox\");\n  const ctx = canvas.getContext(\"2d\");\n  const CANVAS_WIDTH = canvas.width = 1000;\n  const CANVAS_HEIGHT = canvas.height = 600;\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  game.start();\n\n  // console.log(game)\n  // console.log(ctx)\n  // console.log(fish)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7O0FBRWxDO0FBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUNqRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVuQyxNQUFNQyxZQUFZLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHLElBQUk7RUFDeEMsTUFBTUMsYUFBYSxHQUFHTixNQUFNLENBQUNPLE1BQU0sR0FBRyxHQUFHO0VBRXpDLE1BQU1DLElBQUksR0FBRyxJQUFJWCxxREFBSSxDQUFDRyxNQUFNLENBQUM7RUFDN0JRLElBQUksQ0FBQ0MsS0FBSyxFQUFFOztFQUVaO0VBQ0E7RUFDQTtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuLy9hZGRpbmcgRE9NQ29udGVudExvYWRlZCB0byBlbnN1cmUgY2FudmFzIGVsZW1lbnQgaXMgbG9hZGVkIGJlZm9yZSBhY2Nlc3NpbmcgaXRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb3hcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNvbnN0IENBTlZBU19XSURUSCA9IGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICBnYW1lLnN0YXJ0KCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhnYW1lKVxuICAgIC8vIGNvbnNvbGUubG9nKGN0eClcbiAgICAvLyBjb25zb2xlLmxvZyhmaXNoKVxuICAgIFxufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfV0lEVEgiLCJ3aWR0aCIsIkNBTlZBU19IRUlHSFQiLCJoZWlnaHQiLCJnYW1lIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fish.js":
/*!*****************************!*\
  !*** ./src/scripts/fish.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\nclass Fish {\n  constructor(x, y, dx, dy, radius, color) {\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.radius = radius;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx.fill();\n  }\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY; //this line will make the fix go diagonally\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maXNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtJQUNyQyxJQUFJLENBQUNMLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDSyxVQUFVLEdBQUdKLEVBQUU7SUFDcEIsSUFBSSxDQUFDSyxVQUFVLEdBQUdKLEVBQUU7SUFDcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7RUFFQUcsSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxLQUFLO0lBQzFCSSxHQUFHLENBQUNFLFNBQVMsRUFBRTtJQUNmRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNaLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLEVBQUVTLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDM0RMLEdBQUcsQ0FBQ00sSUFBSSxFQUFFO0VBQ2Q7RUFFQUMsTUFBTSxHQUFHO0lBQ0wsSUFBSSxDQUFDaEIsQ0FBQyxJQUFJLElBQUksQ0FBQ00sVUFBVTtJQUN6QixJQUFJLENBQUNMLENBQUMsSUFBSSxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0VBQy9CO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZmlzaC5qcz9kMDJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGR4LCBkeSwgcmFkaXVzLCBjb2xvcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5kaXJlY3Rpb25YO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5kaXJlY3Rpb25ZOyAvL3RoaXMgbGluZSB3aWxsIG1ha2UgdGhlIGZpeCBnbyBkaWFnb25hbGx5XG4gICAgfVxufSJdLCJuYW1lcyI6WyJGaXNoIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImR4IiwiZHkiLCJyYWRpdXMiLCJjb2xvciIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/fish.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish */ \"./src/scripts/fish.js\");\n\n\n// export default class Game {\n//     constructor(canvas) {\n//         this.ctx = canvas.getContext(\"2d\");\n//         this.dimensions = { width: CANVAS_WIDTH, height: CANVAS_HEIGHT };\n//         this.canvas = canvas;\n//     }\n\n//     draw() {\n//         this.ctx.fillStyle = \"yellow\";\n//         this.ctx.beginPath();\n//         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n//         this.ctx.stroke();\n//         this.ctx.closePath();\n//         this.ctx.fill();\n//     }\n\n//     animate() {\n//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n//         this.fish.draw();\n//         requestAnimationFrame(this.animate.bind(this));\n//     }\n\n//     start() {\n//         this.fish = new Fish(100, 75, 1, 1, 25);\n//         this.animate();\n//     }\n// };\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.fishes = [new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 2, 3, 0, 20, \"lightgreen\"), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 3, -3, 0, 25, \"orange\")];\n  }\n  draw() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.fishes.forEach(fish => fish.draw(this.ctx));\n  }\n  animate() {\n    this.draw();\n    this.fishes.forEach(fish => fish.update());\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  start() {\n    this.animate();\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXLENBQUNDLE1BQU0sRUFBRTtJQUNoQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsVUFBVSxHQUFHO01BQUVDLEtBQUssRUFBRUosTUFBTSxDQUFDSSxLQUFLO01BQUVDLE1BQU0sRUFBRUwsTUFBTSxDQUFDSztJQUFPLENBQUM7SUFDaEUsSUFBSSxDQUFDTCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDTSxNQUFNLEdBQUcsQ0FDVixJQUFJVCw2Q0FBSSxDQUFDLENBQUMsRUFBRUcsTUFBTSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUN0RCxJQUFJUiw2Q0FBSSxDQUFDRyxNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQ2pFO0VBQ0w7RUFFQUUsSUFBSSxHQUFHO0lBQ0gsSUFBSSxDQUFDTixHQUFHLENBQUNPLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0wsVUFBVSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDRCxVQUFVLENBQUNFLE1BQU0sQ0FBQztJQUN2RSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDLENBQUM7RUFDcEQ7RUFFQVUsT0FBTyxHQUFHO0lBQ04sSUFBSSxDQUFDSixJQUFJLEVBQUU7SUFDWCxJQUFJLENBQUNELE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0UsTUFBTSxFQUFFLENBQUM7SUFDMUNDLHFCQUFxQixDQUFDLElBQUksQ0FBQ0YsT0FBTyxDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbEQ7RUFFQUMsS0FBSyxHQUFHO0lBQ0osSUFBSSxDQUFDSixPQUFPLEVBQUU7RUFDbEI7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlzaCBmcm9tIFwiLi9maXNoXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuLy8gICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuLy8gICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IENBTlZBU19XSURUSCwgaGVpZ2h0OiBDQU5WQVNfSEVJR0hUIH07XG4vLyAgICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuLy8gICAgIH1cblxuLy8gICAgIGRyYXcoKSB7XG4vLyAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4vLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuLy8gICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuLy8gICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbi8vICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4vLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbi8vICAgICB9XG5cbi8vICAgICBhbmltYXRlKCkge1xuLy8gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4vLyAgICAgICAgIHRoaXMuZmlzaC5kcmF3KCk7XG4vLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4vLyAgICAgfVxuXG4vLyAgICAgc3RhcnQoKSB7XG4vLyAgICAgICAgIHRoaXMuZmlzaCA9IG5ldyBGaXNoKDEwMCwgNzUsIDEsIDEsIDI1KTtcbi8vICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4vLyAgICAgfVxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZmlzaGVzID0gW1xuICAgICAgICAgICAgbmV3IEZpc2goMCwgY2FudmFzLmhlaWdodCAvIDIsIDMsIDAsIDIwLCBcImxpZ2h0Z3JlZW5cIiksXG4gICAgICAgICAgICBuZXcgRmlzaChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyAzLCAtMywgMCwgMjUsIFwib3JhbmdlXCIpLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZmlzaGVzLmZvckVhY2goZmlzaCA9PiBmaXNoLmRyYXcodGhpcy5jdHgpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5maXNoZXMuZm9yRWFjaChmaXNoID0+IGZpc2gudXBkYXRlKCkpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6WyJGaXNoIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpc2hlcyIsImRyYXciLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiZmlzaCIsImFuaW1hdGUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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