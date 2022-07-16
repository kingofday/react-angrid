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
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import './angrid.css';
import { Paginate } from './paginate';
import { Table } from './table';
var range = [10, 20, 50, 100, 200, 500];
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-height: ", ";\n    display: grid;\n"], ["\n    min-height: ", ";\n    display: grid;\n"])), function (_a) {
    var minHeight = _a.minHeight;
    return typeof minHeight === 'number' ? "".concat(minHeight, "px") : '300px';
});
var Main = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.minHeight, minHeight = _d === void 0 ? 300 : _d, showRowNumber = _a.showRowNumber, _e = _a.columnNumberTitle, columnNumberTitle = _e === void 0 ? '#' : _e, _f = _a.columns, columns = _f === void 0 ? [] : _f, _g = _a.emptyMessage, emptyMessage = _g === void 0 ? 'No Data' : _g, _h = _a.rows, rows = _h === void 0 ? [] : _h, _j = _a.totalCount, totalCount = _j === void 0 ? 1 : _j, _k = _a.loading, loading = _k === void 0 ? 0 : _k, _l = _a.pageSize, pageSize = _l === void 0 ? 20 : _l, _m = _a.defaultPageSize, defaultPageSize = _m === void 0 ? 20 : _m, onPageChange = _a.onPageChange;
    var _o = useState(true), isLoading = _o[0], setIsLoading = _o[1];
    var _p = useState(false), isEmpty = _p[0], setIsEmpty = _p[1];
    var _q = useState([]), isRow = _q[0], setIsRow = _q[1];
    var _r = useState(20), isSize = _r[0], setIsSize = _r[1];
    useEffect(function () {
        if (typeof loading !== 'number') {
            setIsLoading(loading);
            if (rows.length === 0) {
                setIsEmpty(true);
            }
            else {
                setIsEmpty(false);
                setIsRow(rows);
            }
        }
        else {
            setIsLoading(false);
            if (rows.length === 0) {
                setIsEmpty(true);
            }
            else {
                setIsEmpty(false);
                setIsRow(rows);
            }
        }
    }, [loading, rows]);
    useEffect(function () {
        if (defaultPageSize && range.includes(defaultPageSize)) {
            setIsSize(defaultPageSize);
        }
    }, [defaultPageSize]);
    return (_jsxs(Wrapper, __assign({ className: "angrid ".concat(theme, " ").concat(className, " ").concat(rows.length === 0 ? 'is-empty' : 'not-empty'), minHeight: minHeight }, { children: [_jsx(Table, { showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, emptyMessage: emptyMessage, rows: isRow, empty: isEmpty, loading: isLoading }), !isEmpty && totalCount > pageSize && (_jsx(Paginate, { totalCount: totalCount, pageSize: pageSize, onPageChange: onPageChange, defaultPageSize: isSize, range: range }))] })));
};
export var Angrid = memo(Main);
var templateObject_1;
