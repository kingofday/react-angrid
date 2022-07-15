"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.Main = exports.genericMemo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unsafe-return */
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var uuid_1 = require("uuid");
exports.genericMemo = react_1.memo;
var Tr = styled_components_1.default.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: ", ";\n    width: ", ";\n"], ["\n    cursor: ", ";\n    width: ", ";\n"])), function (_a) {
    var sortable = _a.sortable;
    return typeof sortable === 'boolean' ? 'pointer' : 'default';
}, function (_a) {
    var width = _a.width;
    return typeof width === 'number' ? "".concat(width, "px") : '85px';
});
var Main = function (_a) {
    var showRowNumber = _a.showRowNumber, columnNumberTitle = _a.columnNumberTitle, columns = _a.columns, rows = _a.rows;
    return ((0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsxs)("thead", __assign({ className: 'thead' }, { children: [(0, jsx_runtime_1.jsx)("tr", { children: showRowNumber && ((0, jsx_runtime_1.jsx)("th", __assign({ style: { width: 25 } }, { children: columnNumberTitle }))) }), columns === null || columns === void 0 ? void 0 : columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(Tr, __assign({ title: column.description, sortable: column.sortable, width: column.width }, { children: (0, jsx_runtime_1.jsx)("th", { children: column.headerName }) }), (0, uuid_1.v4)())); })] })), (0, jsx_runtime_1.jsx)("tbody", __assign({ className: 'tbody' }, { children: rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [showRowNumber && (0, jsx_runtime_1.jsx)("td", { children: rows.indexOf(row) + 1 }), columns === null || columns === void 0 ? void 0 : columns.map(function (c) { return ((0, jsx_runtime_1.jsx)("td", { children: row[c.field] }, (0, uuid_1.v4)())); })] }, (0, uuid_1.v4)())); }) }))] }));
};
exports.Main = Main;
exports.Table = (0, exports.genericMemo)(exports.Main);
var templateObject_1;
