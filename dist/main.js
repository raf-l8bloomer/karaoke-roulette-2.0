/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n// import _ from 'lodash'\n\n// function component() {\n//   const element = document.createElement('div');\n\n//   // Lodash, currently included via a script, is required for this line to work\n//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n//   return element;\n// }\n\n// document.body.appendChild(component());\n\n/*************\n * VARIABLES\n ************/\n\nconst promptDiv = document.querySelector('.prompt-div');\nconst promptEl = document.querySelector('.prompt');\nconst spinEl = document.querySelector('#spin');\nconst completeEl = document.querySelector('#complete');\nconst submitInput = document.querySelector('#newPrompt');\nconst form = document.querySelector('.new-prompt-form');\nconst bank = document.querySelector('.bank');\nconst bankUl = document.querySelector('ul');\nconst showBank = document.querySelector('.show-bank');\n\nlet completedPrompts=[];\nlet currentPrompt\n\n// preloaded prompts\nconst promptBank = [\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: \"You want a '4 Chair Turn' on The Voice\" },\n  {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    theme: \"You have to poop but there's 12 other people in the next room\",\n  },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: \"You've been chosen as tribute for The Hunger Games\" },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Revenge Era' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'The last cigarette in the box' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Stuck in an elevator with your crush' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: \"You've just discovered electricity\" },\n  {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    theme:\n      'Finding the perfect meme for the groupchat before someone else replies',\n  },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Voicemail song' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Empty parking lot acoustics' },\n  {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    theme: \"You're looking out the window and it's pouring rain\",\n  },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Just sent a risky text' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Heartbreak feels good in a place like this' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Love at first sight' },\n  {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    theme: 'We saw you from across the bar and we really like your vibe',\n  },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Where were you on January 6th?' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'Trina! A One Woman Show, ft. Chicago' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'The edible is hitting' },\n  { id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), theme: 'I work like a dog DAY AND NIGHT' },\n];\n\n/*************\n * FUNCTIONS\n ************/\n\n// sets random currentPrompt from PromptBank\nfunction randomPrompt(arr) {\n  let randomPromptIndex = Math.floor(Math.random() * arr.length) + 1;\n  currentPrompt = arr[randomPromptIndex];\n}\n\n// removes displayed prompt nad nullifies currentPrompt\nfunction clearPrompt() {\n  currentPrompt = null;\n  promptEl.innerHTML = '';\n}\n\n// adds currentPrompt to the HTML\nfunction generatePrompt() {\n  if (currentPrompt != null) {\n    promptEl.innerHTML += currentPrompt.theme;\n  }\n}\n\n// finds index of prompt by matching id  to current prompt and removes 1 prompt from the bank\nfunction removePrompt(arr, prompt) {\n  const promptIndex = arr.findIndex((row) => row.id === prompt.id);\n  promptBank.splice(promptIndex, 1);\n  //save bank to localStorage\n  let saveBankString = JSON.stringify(promptBank);\n  localStorage.setItem('bank', saveBankString);\n  console.log(saveBankString);\n}\n\n// render promptBank to HTML\nfunction renderBank(arr) {\n  arr.forEach((row) => {\n    createLi(row);\n  });\n}\n\n// creates prompt into a list item with a remove button to remove it from the list and the bank\nfunction createLi(prompt) {\n  const promptLi = document.createElement('li');\n  const remove = document.createElement('button');\n  remove.classList.add('removePrompt');\n  promptLi.textContent = prompt.theme;\n  remove.textContent = 'X';\n  promptLi.appendChild(remove);\n  bankUl.appendChild(promptLi);\n\n  remove.addEventListener('click', () => {\n    bankUl.removeChild(promptLi);\n    const promptIndex = promptBank.findIndex(\n      (bankTheme) => bankTheme.id === prompt.id,\n    );\n    promptBank.splice(promptIndex, 1);\n\n    //save bank to localStorage\n    let saveBankString = JSON.stringify(promptBank);\n    console.log(saveBankString);\n    localStorage.setItem('bank', saveBankString);\n  });\n}\n\n/*************\n * EVENT LISTENERS\n ************/\n\n// clears prompt, randomly selects prompt from the bank, and displays it\nspinEl.addEventListener('click', () => {\n  clearPrompt();\n  randomPrompt(promptBank);\n  generatePrompt();\n  if (currentPrompt !== null) {\n    promptDiv.style.backgroundColor = '#ffffff';\n    promptDiv.style.border = '1px solid #F10ADF';\n    promptEl.style.color = '#F10ADF';\n  }\n});\n\n// pull out the currentPrompt from the promptBank and move it to completed while spinning the wheel for the next prompt\ncompleteEl?.addEventListener('click', () => {\n  if (currentPrompt !== null) {\n    completedPrompts.push(currentPrompt);\n    removePrompt(promptBank, currentPrompt);\n  }\n  clearPrompt();\n  randomPrompt(promptBank);\n  generatePrompt();\n});\n\n// takes input value and turns it into a new prompt, adds it to the bank, and displays it in bank\nform?.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  if (submitInput?.value == '' || submitInput?.value == null) return;\n\n  const newPrompt = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    theme: submitInput.value,\n  };\n\n  promptBank.push(newPrompt);\n  createLi(newPrompt);\n\n  //save bank to localStorage\n  let saveBankString = JSON.stringify(promptBank);\n  console.log(saveBankString);\n  localStorage.setItem('bank', saveBankString);\n\n  submitInput.value = '';\n});\n\n//toggle Prompt Bank display\nshowBank.addEventListener('click', () => {\n  if (showBank.textContent == 'Show Prompt Bank') {\n    bank.style.display = 'flex';\n    showBank.textContent = 'Hide Prompt Bank';\n    showBank.style.backgroundColor = '#FFFFFF';\n    showBank.style.border = '1px solid #1c26f8 ';\n  } else if (showBank.textContent == 'Hide Prompt Bank') {\n    bank.style.display = 'none';\n    showBank.textContent = 'Show Prompt Bank';\n    showBank.style.backgroundColor = '#d9d9d9';\n    showBank.style.border = 'none';\n  }\n});\n\n/*************\n * FUNCTION CALL\n ************/\n\n// render bank upon load\n\nlet savedBankString = localStorage.getItem('bank');\nif (savedBankString != null && savedBankString != \"\") {\n  let savedBankArr = JSON.parse(savedBankString);\n  renderBank(savedBankArr);\n} else {\n  renderBank(promptBank);\n}\n\n// let chrome: any;\n// let tab: any;\n// let info: any;\n\n// chrome.runtime.onInstalled.addListener(() => {\n//   chrome.contextMenus.create({\n//     id: 'openSidePanel',\n//     title: 'Open side panel',\n//     contexts: ['all']\n//   });\n// });\n\n// chrome.contextMenus.onClicked.addListener((info: any, tab: any) => {\n//   if (info.menuItemId === 'openSidePanel') {\n//     // This will open the panel in all the pages on the current window.\n//     chrome.sidePanel.open({ windowId: tab.windowId });\n//   }\n// });\n\n\n\n//# sourceURL=webpack://karaoke-roulette-2.0/./src/app.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;