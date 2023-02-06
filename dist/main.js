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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\nconst spaceshipImage = new Image();\nspaceshipImage.src = \"./assets/spaceship02.png\";\nclass Fish {\n  constructor(x, y, dx, dy, radius, color) {\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.radius = radius;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    // ctx.fill();\n    ctx.drawImage(spaceshipImage, this.x, this.y, this.radius, this.radius);\n    ctx.closePath();\n  }\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY; //this line will make the fix go diagonally\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maXNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxjQUFjLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQ2xDRCxjQUFjLENBQUNFLEdBQUcsR0FBRywwQkFBMEI7QUFFaEMsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDckMsSUFBSSxDQUFDTCxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0ssVUFBVSxHQUFHSixFQUFFO0lBQ3BCLElBQUksQ0FBQ0ssVUFBVSxHQUFHSixFQUFFO0lBQ3BCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBRUFHLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0wsS0FBSztJQUMxQkksR0FBRyxDQUFDRSxTQUFTLEVBQUU7SUFDZjtJQUNBO0lBQ0FGLEdBQUcsQ0FBQ0csU0FBUyxDQUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQ0ssQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0csTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTSxDQUFDO0lBQ3ZFSyxHQUFHLENBQUNJLFNBQVMsRUFBRTtFQUNuQjtFQUVBQyxNQUFNLEdBQUc7SUFDTCxJQUFJLENBQUNkLENBQUMsSUFBSSxJQUFJLENBQUNNLFVBQVU7SUFDekIsSUFBSSxDQUFDTCxDQUFDLElBQUksSUFBSSxDQUFDTSxVQUFVLENBQUMsQ0FBQztFQUMvQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2Zpc2guanM/ZDAyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHNwYWNlc2hpcEltYWdlID0gbmV3IEltYWdlKCk7XG5zcGFjZXNoaXBJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL3NwYWNlc2hpcDAyLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGR4LCBkeSwgcmFkaXVzLCBjb2xvcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3BhY2VzaGlwSW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZGlyZWN0aW9uWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZGlyZWN0aW9uWTsgLy90aGlzIGxpbmUgd2lsbCBtYWtlIHRoZSBmaXggZ28gZGlhZ29uYWxseVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzcGFjZXNoaXBJbWFnZSIsIkltYWdlIiwic3JjIiwiRmlzaCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJkeCIsImR5IiwicmFkaXVzIiwiY29sb3IiLCJkaXJlY3Rpb25YIiwiZGlyZWN0aW9uWSIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJkcmF3SW1hZ2UiLCJjbG9zZVBhdGgiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/fish.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish */ \"./src/scripts/fish.js\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ \"./src/scripts/hook.js\");\n\n\n\n//smallFish = 30\n//bigFish = 50\n\nconst BIG_FISH = 70;\nconst SMALL_FISH = 40;\nconst spaceshipImage = new Image();\nspaceshipImage.src = \"./assets/spaceship02.png\";\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.hook = new _hook__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.width / 2, 0, 0, 3, \"black\");\n    this.fishes = [new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 2, 3, 0, BIG_FISH),\n    // x, y, directionX, directionY, radius, color \n    new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 3, 4, 0, BIG_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 4, 2, 0, SMALL_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height / 5, 6, 0, BIG_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, canvas.height - canvas.height / 4, 4, 0, BIG_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 3, -3, 0, SMALL_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 4, -4, 0, BIG_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 2, -5, 0, SMALL_FISH), new _fish__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height / 6, -6, 0, BIG_FISH)];\n  }\n  drawFishes() {\n    this.fishes.forEach(fish => fish.draw(this.ctx));\n  }\n  drawHook() {\n    this.hook.draw(this.ctx);\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    // this.ctx.drawImage(spaceshipImage, 0, 0);\n    this.drawFishes();\n    this.fishes.forEach(fish => fish.update());\n    this.drawHook();\n    this.hook.update();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  start() {\n    this.animate();\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQ2EsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDWCxVQUFVLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNELFVBQVUsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3ZFO0lBQ0EsSUFBSSxDQUFDRyxVQUFVLEVBQUU7SUFDakIsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUNLLE1BQU0sRUFBRSxDQUFDO0lBQzFDLElBQUksQ0FBQ0gsUUFBUSxFQUFFO0lBQ2YsSUFBSSxDQUFDTixJQUFJLENBQUNTLE1BQU0sRUFBRTtJQUNsQkMscUJBQXFCLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDtFQUVBQyxLQUFLLEdBQUc7SUFDSixJQUFJLENBQUNMLE9BQU8sRUFBRTtFQUNsQjtBQUNKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaXNoIGZyb20gXCIuL2Zpc2hcIjtcbmltcG9ydCBIb29rIGZyb20gXCIuL2hvb2tcIjtcblxuLy9zbWFsbEZpc2ggPSAzMFxuLy9iaWdGaXNoID0gNTBcblxuY29uc3QgQklHX0ZJU0ggPSA3MDtcbmNvbnN0IFNNQUxMX0ZJU0ggPSA0MDsgXG5jb25zdCBzcGFjZXNoaXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuc3BhY2VzaGlwSW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9zcGFjZXNoaXAwMi5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5ob29rID0gbmV3IEhvb2soY2FudmFzLndpZHRoIC8gMiwgMCwgMCwgMywgXCJibGFja1wiKVxuICAgICAgICB0aGlzLmZpc2hlcyA9IFtcbiAgICAgICAgICAgIG5ldyBGaXNoKDAsIChjYW52YXMuaGVpZ2h0IC8gMiksIDMsIDAsIEJJR19GSVNIKSwgXG4gICAgICAgICAgICAvLyB4LCB5LCBkaXJlY3Rpb25YLCBkaXJlY3Rpb25ZLCByYWRpdXMsIGNvbG9yIFxuICAgICAgICAgICAgbmV3IEZpc2goMCwgKGNhbnZhcy5oZWlnaHQgLyAzKSwgNCwgMCwgQklHX0ZJU0gpLFxuICAgICAgICAgICAgbmV3IEZpc2goMCwgKGNhbnZhcy5oZWlnaHQgLyA0KSwgMiwgMCwgU01BTExfRklTSCksXG4gICAgICAgICAgICBuZXcgRmlzaCgwLCAoY2FudmFzLmhlaWdodCAvIDUpLCA2LCAwLCBCSUdfRklTSCksXG4gICAgICAgICAgICBuZXcgRmlzaCgwLCAoY2FudmFzLmhlaWdodCAtIChjYW52YXMuaGVpZ2h0IC8gNCkpLCA0LCAwLCBCSUdfRklTSCksXG5cbiAgICAgICAgICAgIG5ldyBGaXNoKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAvIDMsIC0zLCAwLCBTTUFMTF9GSVNIKSxcbiAgICAgICAgICAgIG5ldyBGaXNoKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAvIDQsIC00LCAwLCBCSUdfRklTSCksXG4gICAgICAgICAgICBuZXcgRmlzaChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyAyLCAtNSwgMCwgU01BTExfRklTSCksXG4gICAgICAgICAgICBuZXcgRmlzaChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyA2LCAtNiwgMCwgQklHX0ZJU0gpLFxuXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBkcmF3RmlzaGVzKCkge1xuICAgICAgICB0aGlzLmZpc2hlcy5mb3JFYWNoKGZpc2ggPT4gZmlzaC5kcmF3KHRoaXMuY3R4KSk7XG4gICAgfVxuICAgIFxuICAgIGRyYXdIb29rKCkge1xuICAgICAgICB0aGlzLmhvb2suZHJhdyh0aGlzLmN0eCk7IFxuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHNwYWNlc2hpcEltYWdlLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kcmF3RmlzaGVzKCk7XG4gICAgICAgIHRoaXMuZmlzaGVzLmZvckVhY2goZmlzaCA9PiBmaXNoLnVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5kcmF3SG9vaygpO1xuICAgICAgICB0aGlzLmhvb2sudXBkYXRlKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbIkZpc2giLCJIb29rIiwiQklHX0ZJU0giLCJTTUFMTF9GSVNIIiwic3BhY2VzaGlwSW1hZ2UiLCJJbWFnZSIsInNyYyIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJob29rIiwiZmlzaGVzIiwiZHJhd0Zpc2hlcyIsImZvckVhY2giLCJmaXNoIiwiZHJhdyIsImRyYXdIb29rIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/hook.js":
/*!*****************************!*\
  !*** ./src/scripts/hook.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hook; }\n/* harmony export */ });\nclass Hook {\n  constructor(x, y, dx, dy, color) {\n    this.x = x;\n    this.y = y;\n    this.directionX = dx;\n    this.directionY = dy;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 2;\n    ctx.moveTo(this.x, 0);\n    ctx.lineTo(this.x, this.y);\n    ctx.stroke();\n    ctx.closePath();\n  }\n  update() {\n    this.x += this.directionX;\n    this.y += this.directionY;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob29rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEVBQUU7SUFDN0IsSUFBSSxDQUFDSixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0ksVUFBVSxHQUFHSCxFQUFFO0lBQ3BCLElBQUksQ0FBQ0ksVUFBVSxHQUFHSCxFQUFFO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBRUFHLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQ04sS0FBSztJQUM1QkksR0FBRyxDQUFDRyxTQUFTLEdBQUcsQ0FBQztJQUNqQkgsR0FBRyxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCUSxHQUFHLENBQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUNiLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztJQUMxQk8sR0FBRyxDQUFDTSxNQUFNLEVBQUU7SUFDWk4sR0FBRyxDQUFDTyxTQUFTLEVBQUU7RUFDbkI7RUFFQUMsTUFBTSxHQUFHO0lBQ0wsSUFBSSxDQUFDaEIsQ0FBQyxJQUFJLElBQUksQ0FBQ0ssVUFBVTtJQUN6QixJQUFJLENBQUNKLENBQUMsSUFBSSxJQUFJLENBQUNLLFVBQVU7RUFDN0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9ob29rLmpzP2NjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vayB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZHgsIGR5LCBjb2xvcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkeDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmRpcmVjdGlvblg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmRpcmVjdGlvblk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJIb29rIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImR4IiwiZHkiLCJjb2xvciIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/hook.js\n");

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