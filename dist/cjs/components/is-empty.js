"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmpty = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var icons_1 = require("./icons");
var IsEmpty = function (_a) {
    var textEmpty = _a.textEmpty;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'isEmpty' }, { children: [(0, jsx_runtime_1.jsx)(icons_1.EmptyIcon, {}), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                    color: 'rgb(149 147 147)',
                    textAlign: 'center',
                } }, { children: textEmpty }))] })));
};
exports.IsEmpty = IsEmpty;
