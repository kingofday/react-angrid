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
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.minHeight, minHeight = _d === void 0 ? 300 : _d, showRowNumber = _a.showRowNumber, _e = _a.columnNumberTitle, columnNumberTitle = _e === void 0 ? '#' : _e, _f = _a.columns, columns = _f === void 0 ? [] : _f, _g = _a.emptyMessage, emptyMessage = _g === void 0 ? 'No Data' : _g, _h = _a.rows, rows = _h === void 0 ? [] : _h, _j = _a.totalCount, totalCount = _j === void 0 ? 1 : _j, _k = _a.loading, loading = _k === void 0 ? 0 : _k, _l = _a.pageSize, pageSize = _l === void 0 ? 20 : _l, onPageChange = _a.onPageChange, _m = _a.showTotalRecord, showTotalRecord = _m === void 0 ? false : _m, _o = _a.titleTotalRecord, titleTotalRecord = _o === void 0 ? 'Total Record' : _o, _p = _a.showCurrentPage, showCurrentPage = _p === void 0 ? false : _p, _q = _a.titleCurrentPage, titleCurrentPage = _q === void 0 ? 'Current Page' : _q, _r = _a.showNumberOfPage, showNumberOfPage = _r === void 0 ? false : _r, _s = _a.titleNumberOfPage, titleNumberOfPage = _s === void 0 ? 'Number of Page' : _s, _t = _a.showPageRange, showPageRange = _t === void 0 ? true : _t, _u = _a.showPageSelect, showPageSelect = _u === void 0 ? true : _u, _v = _a.showPageNumber, showPageNumber = _v === void 0 ? true : _v, _w = _a.showPageArrow, showPageArrow = _w === void 0 ? true : _w, _x = _a.bordered, bordered = _x === void 0 ? false : _x;
    var _y = useState(true), isLoading = _y[0], setIsLoading = _y[1];
    var _z = useState(false), isEmpty = _z[0], setIsEmpty = _z[1];
    var _0 = useState([]), isRow = _0[0], setIsRow = _0[1];
    var _1 = useState(20), isSize = _1[0], setIsSize = _1[1];
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
        if (pageSize && range.includes(pageSize)) {
            setIsSize(pageSize);
        }
    }, [pageSize]);
    return (_jsx(Wrapper, __assign({ className: "angrid ".concat(theme, " ").concat(className, " ").concat(rows.length === 0 ? 'is-empty' : 'not-empty'), minHeight: minHeight }, { children: _jsxs("div", __assign({ className: 'asax' }, { children: [_jsx(Table, { className: bordered ? 'bordered' : '', showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, emptyMessage: emptyMessage, rows: isRow, empty: isEmpty, loading: isLoading }), !isEmpty && totalCount > pageSize && (_jsx(Paginate, { totalCount: totalCount, pageSize: isSize, onPageChange: onPageChange, range: range, showTotalRecord: showTotalRecord, titleTotalRecord: titleTotalRecord, showCurrentPage: showCurrentPage, titleCurrentPage: titleCurrentPage, showNumberOfPage: showNumberOfPage, titleNumberOfPage: titleNumberOfPage, showPageRange: showPageRange, showPageSelect: showPageSelect, showPageNumber: showPageNumber, showPageArrow: showPageArrow }))] })) })));
};
export var Angrid = memo(Main);
var templateObject_1;
