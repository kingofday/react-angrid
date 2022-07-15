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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
export var genericMemo = memo;
var Tr = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: ", ";\n    width: ", ";\n"], ["\n    cursor: ", ";\n    width: ", ";\n"])), function (_a) {
    var sortable = _a.sortable;
    return typeof sortable === 'boolean' ? 'pointer' : 'default';
}, function (_a) {
    var width = _a.width;
    return typeof width === 'number' ? "".concat(width, "px") : '85px';
});
export var Main = function (_a) {
    var showRowNumber = _a.showRowNumber, columnNumberTitle = _a.columnNumberTitle, columns = _a.columns, rows = _a.rows;
    return (_jsxs("table", { children: [_jsxs("thead", __assign({ className: 'thead' }, { children: [_jsx("tr", { children: showRowNumber && (_jsx("th", __assign({ style: { width: 25 } }, { children: columnNumberTitle }))) }), columns === null || columns === void 0 ? void 0 : columns.map(function (column) { return (_jsx(Tr, __assign({ title: column.description, sortable: column.sortable, width: column.width }, { children: _jsx("th", { children: column.headerName }) }), uuidv4())); })] })), _jsx("tbody", __assign({ className: 'tbody' }, { children: rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return (_jsxs("tr", { children: [showRowNumber && _jsx("td", { children: rows.indexOf(row) + 1 }), columns === null || columns === void 0 ? void 0 : columns.map(function (c) { return (
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        _jsx("td", { children: row[c.field] }, uuidv4())); })] }, uuidv4())); }) }))] }));
};
export var Table = genericMemo(Main);
var templateObject_1;
