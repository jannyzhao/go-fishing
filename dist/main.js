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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\nconst FISH_LEFT = new Image();\nFISH_LEFT.src = \"./assets/spaceship-left.png\";\nconst FISH_RIGHT = new Image();\nFISH_RIGHT.src = \"./assets/spaceship-right.png\";\nclass Fish {\n  constructor(_ref) {\n    let {\n      x,\n      y,\n      dx,\n      dy,\n      size\n    } = _ref;\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.size = size;\n  }\n  draw(ctx) {\n    const image = this.directionX < 0 ? FISH_LEFT : FISH_RIGHT;\n    ctx.drawImage(image, this.x, this.y, this.size, this.size);\n  }\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maXNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQzdCRCxTQUFTLENBQUNFLEdBQUcsR0FBRyw2QkFBNkI7QUFFN0MsTUFBTUMsVUFBVSxHQUFHLElBQUlGLEtBQUssRUFBRTtBQUM5QkUsVUFBVSxDQUFDRCxHQUFHLEdBQUcsOEJBQThCO0FBRWhDLE1BQU1FLElBQUksQ0FBQztFQUN0QkMsV0FBVyxPQUF1QjtJQUFBLElBQXRCO01BQUNDLENBQUM7TUFBRUMsQ0FBQztNQUFFQyxFQUFFO01BQUVDLEVBQUU7TUFBRUM7SUFBSSxDQUFDO0lBQzVCLElBQUksQ0FBQ0osQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNJLFVBQVUsR0FBR0gsRUFBRTtJQUNwQixJQUFJLENBQUNJLFVBQVUsR0FBR0gsRUFBRTtJQUNwQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtFQUNwQjtFQUVBRyxJQUFJLENBQUNDLEdBQUcsRUFBRTtJQUNOLE1BQU1DLEtBQUssR0FBRyxJQUFJLENBQUNKLFVBQVUsR0FBRyxDQUFDLEdBQUdYLFNBQVMsR0FBR0csVUFBVTtJQUMxRFcsR0FBRyxDQUFDRSxTQUFTLENBQUNELEtBQUssRUFBRSxJQUFJLENBQUNULENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNHLElBQUksRUFBRSxJQUFJLENBQUNBLElBQUksQ0FBQztFQUM5RDtFQUVBTyxNQUFNLEdBQUc7SUFDTCxJQUFJLENBQUNYLENBQUMsSUFBSSxJQUFJLENBQUNLLFVBQVU7SUFDekIsSUFBSSxDQUFDSixDQUFDLElBQUksSUFBSSxDQUFDSyxVQUFVO0VBQzdCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZmlzaC5qcz9kMDJjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZJU0hfTEVGVCA9IG5ldyBJbWFnZSgpO1xuRklTSF9MRUZULnNyYyA9IFwiLi9hc3NldHMvc3BhY2VzaGlwLWxlZnQucG5nXCJcblxuY29uc3QgRklTSF9SSUdIVCA9IG5ldyBJbWFnZSgpO1xuRklTSF9SSUdIVC5zcmMgPSBcIi4vYXNzZXRzL3NwYWNlc2hpcC1yaWdodC5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNoIHtcbiAgICBjb25zdHJ1Y3Rvcih7eCwgeSwgZHgsIGR5LCBzaXplfSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRpcmVjdGlvblggPCAwID8gRklTSF9MRUZUIDogRklTSF9SSUdIVFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpXG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZGlyZWN0aW9uWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZGlyZWN0aW9uWTsgXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkZJU0hfTEVGVCIsIkltYWdlIiwic3JjIiwiRklTSF9SSUdIVCIsIkZpc2giLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiZHgiLCJkeSIsInNpemUiLCJkaXJlY3Rpb25YIiwiZGlyZWN0aW9uWSIsImRyYXciLCJjdHgiLCJpbWFnZSIsImRyYXdJbWFnZSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fish.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish */ \"./src/scripts/fish.js\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ \"./src/scripts/hook.js\");\n\n\nconst BIG_FISH = 70; //speed = slow \nconst SMALL_FISH = 45; //speed = faster\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.hook = new _hook__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.width / 2, 0, 0, 3, \"black\");\n    this.fishes = [];\n  }\n  drawFishes() {\n    this.fishes.forEach(fish => fish.draw(this.ctx));\n  }\n  drawHook() {\n    this.hook.draw(this.ctx);\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.drawFishes();\n    this.fishes.forEach(fish => fish.update());\n    // this.drawHook();\n    this.hook.update();\n    requestAnimationFrame(() => this.animate());\n  }\n  start() {\n    // setInterval to keep loading new fishes every second\n    setInterval(() => this.loadFish(), 500);\n    this.animate();\n  }\n  getRandomElement(array) {\n    const randomIndex = Math.floor(Math.random() * arr.length);\n    return arr[randomIndex];\n  }\n  loadFish() {\n    const sizes = [BIG_FISH, SMALL_FISH];\n    const size = sizes[Math.floor(Math.random() * sizes.length)];\n    const speeds = [6, 7];\n    const slowSpeed = 3;\n    const speed = speeds[Math.floor(Math.random() * speeds.length)];\n    const directions = [0, this.canvas.width];\n    const direction = directions[Math.floor(Math.random() * directions.length)];\n    const fishParams = {\n      x: direction,\n      y: Math.random() * this.canvas.height,\n      dx: 0,\n      dy: 0,\n      size: size\n    };\n    if (size === BIG_FISH && direction === 0) {\n      fishParams.dx = slowSpeed;\n    } else if (size === BIG_FISH && direction === this.canvas.width) {\n      fishParams.dx = -slowSpeed;\n    } else if (direction === 0) {\n      fishParams.dx = speed;\n    } else {\n      fishParams.dx = -speed;\n    }\n    this.fishes.push(new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fishParams));\n  }\n}\n\n// bigFish = slow speed, randomize starting//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHRCxVQUFVLENBQUNWLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHUSxVQUFVLENBQUNOLE1BQU0sQ0FBQyxDQUFDO0lBRTNFLE1BQU1RLFVBQVUsR0FBRztNQUNmQyxDQUFDLEVBQUVGLFNBQVM7TUFDWkcsQ0FBQyxFQUFFZCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQ3pCLE1BQU0sQ0FBQ0ssTUFBTTtNQUNyQ2lDLEVBQUUsRUFBRSxDQUFDO01BQ0xDLEVBQUUsRUFBRSxDQUFDO01BQ0xWLElBQUksRUFBRUE7SUFDVixDQUFDO0lBRUQsSUFBSUEsSUFBSSxLQUFLakMsUUFBUSxJQUFJc0MsU0FBUyxLQUFLLENBQUMsRUFBRTtNQUN0Q0MsVUFBVSxDQUFDRyxFQUFFLEdBQUdQLFNBQVM7SUFDN0IsQ0FBQyxNQUFNLElBQUlGLElBQUksS0FBS2pDLFFBQVEsSUFBSXNDLFNBQVMsS0FBSyxJQUFJLENBQUNsQyxNQUFNLENBQUNJLEtBQUssRUFBRTtNQUM3RCtCLFVBQVUsQ0FBQ0csRUFBRSxHQUFHLENBQUNQLFNBQVM7SUFDOUIsQ0FBQyxNQUFNLElBQUlHLFNBQVMsS0FBSyxDQUFDLEVBQUU7TUFDeEJDLFVBQVUsQ0FBQ0csRUFBRSxHQUFHTixLQUFLO0lBQ3pCLENBQUMsTUFBTTtNQUNIRyxVQUFVLENBQUNHLEVBQUUsR0FBRyxDQUFDTixLQUFLO0lBQzFCO0lBRUEsSUFBSSxDQUFDekIsTUFBTSxDQUFDaUMsSUFBSSxDQUFDLElBQUk5Qyw2Q0FBSSxDQUFDeUMsVUFBVSxDQUFDLENBQUM7RUFDMUM7QUFDSjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpc2ggZnJvbSBcIi4vZmlzaFwiO1xuaW1wb3J0IEhvb2sgZnJvbSBcIi4vaG9va1wiO1xuXG5jb25zdCBCSUdfRklTSCA9IDcwOyAvL3NwZWVkID0gc2xvdyBcbmNvbnN0IFNNQUxMX0ZJU0ggPSA0NTsgLy9zcGVlZCA9IGZhc3RlclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5ob29rID0gbmV3IEhvb2soY2FudmFzLndpZHRoIC8gMiwgMCwgMCwgMywgXCJibGFja1wiKVxuICAgICAgICB0aGlzLmZpc2hlcyA9IFtdO1xuICAgIH1cblxuICAgIGRyYXdGaXNoZXMoKSB7XG4gICAgICAgIHRoaXMuZmlzaGVzLmZvckVhY2goZmlzaCA9PiBmaXNoLmRyYXcodGhpcy5jdHgpKTtcbiAgICB9XG5cbiAgICBkcmF3SG9vaygpIHtcbiAgICAgICAgdGhpcy5ob29rLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdGaXNoZXMoKTtcbiAgICAgICAgdGhpcy5maXNoZXMuZm9yRWFjaChmaXNoID0+IGZpc2gudXBkYXRlKCkpO1xuICAgICAgICAvLyB0aGlzLmRyYXdIb29rKCk7XG4gICAgICAgIHRoaXMuaG9vay51cGRhdGUoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwgdG8ga2VlcCBsb2FkaW5nIG5ldyBmaXNoZXMgZXZlcnkgc2Vjb25kXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMubG9hZEZpc2goKSwgNTAwKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tRWxlbWVudChhcnJheSkge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gYXJyW3JhbmRvbUluZGV4XTtcbiAgICB9XG5cbiAgICBsb2FkRmlzaCgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSBbQklHX0ZJU0gsIFNNQUxMX0ZJU0hdXG4gICAgICAgIGNvbnN0IHNpemUgPSBzaXplc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplcy5sZW5ndGgpXTtcblxuICAgICAgICBjb25zdCBzcGVlZHMgPSBbNiwgN107XG4gICAgICAgIGNvbnN0IHNsb3dTcGVlZCA9IDM7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gc3BlZWRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwZWVkcy5sZW5ndGgpXTtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gWzAsIHRoaXMuY2FudmFzLndpZHRoXVxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmaXNoUGFyYW1zID0ge1xuICAgICAgICAgICAgeDogZGlyZWN0aW9uLFxuICAgICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodCwgXG4gICAgICAgICAgICBkeDogMCwgXG4gICAgICAgICAgICBkeTogMCwgXG4gICAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2l6ZSA9PT0gQklHX0ZJU0ggJiYgZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICBmaXNoUGFyYW1zLmR4ID0gc2xvd1NwZWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHNpemUgPT09IEJJR19GSVNIICYmIGRpcmVjdGlvbiA9PT0gdGhpcy5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIGZpc2hQYXJhbXMuZHggPSAtc2xvd1NwZWVkO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgZmlzaFBhcmFtcy5keCA9IHNwZWVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlzaFBhcmFtcy5keCA9IC1zcGVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlzaGVzLnB1c2gobmV3IEZpc2goZmlzaFBhcmFtcykpXG4gICAgfVxufVxuXG4vLyBiaWdGaXNoID0gc2xvdyBzcGVlZCwgcmFuZG9taXplIHN0YXJ0aW5nIl0sIm5hbWVzIjpbIkZpc2giLCJIb29rIiwiQklHX0ZJU0giLCJTTUFMTF9GSVNIIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImhvb2siLCJmaXNoZXMiLCJkcmF3RmlzaGVzIiwiZm9yRWFjaCIsImZpc2giLCJkcmF3IiwiZHJhd0hvb2siLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsImxvYWRGaXNoIiwiZ2V0UmFuZG9tRWxlbWVudCIsImFycmF5IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhcnIiLCJsZW5ndGgiLCJzaXplcyIsInNpemUiLCJzcGVlZHMiLCJzbG93U3BlZWQiLCJzcGVlZCIsImRpcmVjdGlvbnMiLCJkaXJlY3Rpb24iLCJmaXNoUGFyYW1zIiwieCIsInkiLCJkeCIsImR5IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/hook.js":
/*!*****************************!*\
  !*** ./src/scripts/hook.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hook; }\n/* harmony export */ });\nclass Hook {\n  constructor(x, y, dx, dy, color) {\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 2;\n    ctx.moveTo(this.x, 0);\n    ctx.lineTo(this.x, this.y);\n    ctx.stroke();\n    ctx.closePath();\n  }\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob29rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEVBQUU7SUFDN0IsSUFBSSxDQUFDSixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0ksVUFBVSxHQUFHSCxFQUFFO0lBQ3BCLElBQUksQ0FBQ0ksVUFBVSxHQUFHSCxFQUFFO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBRUFHLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQ04sS0FBSztJQUM1QkksR0FBRyxDQUFDRyxTQUFTLEdBQUcsQ0FBQztJQUNqQkgsR0FBRyxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCUSxHQUFHLENBQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUNiLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztJQUMxQk8sR0FBRyxDQUFDTSxNQUFNLEVBQUU7SUFDWk4sR0FBRyxDQUFDTyxTQUFTLEVBQUU7RUFDbkI7RUFFQUMsTUFBTSxHQUFHO0lBQ0wsSUFBSSxDQUFDaEIsQ0FBQyxJQUFJLElBQUksQ0FBQ0ssVUFBVTtJQUN6QixJQUFJLENBQUNKLENBQUMsSUFBSSxJQUFJLENBQUNLLFVBQVU7RUFHN0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9ob29rLmpzP2NjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vayB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZHgsIGR5LCBjb2xvcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmRpcmVjdGlvblg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmRpcmVjdGlvblk7XG5cbiAgICAgICAgXG4gICAgfVxufSJdLCJuYW1lcyI6WyJIb29rIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImR4IiwiZHkiLCJjb2xvciIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/hook.js\n");

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