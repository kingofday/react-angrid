"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmpty = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var IsEmpty = function (_a) {
    var _b = _a.message, message = _b === void 0 ? 'No Data' : _b;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { children: message }) }));
};
exports.IsEmpty = IsEmpty;