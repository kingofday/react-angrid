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
import { memo, useCallback, useEffect, useState } from 'react';
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
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.minHeight, minHeight = _d === void 0 ? 300 : _d, showRowNumber = _a.showRowNumber, _e = _a.columnNumberTitle, columnNumberTitle = _e === void 0 ? '#' : _e, columns = _a.columns, _f = _a.emptyMessage, emptyMessage = _f === void 0 ? 'No Data' : _f, rows = _a.rows, totalCount = _a.totalCount, _g = _a.loading, loading = _g === void 0 ? 0 : _g, _h = _a.pageSize, pageSize = _h === void 0 ? 20 : _h, onPageChange = _a.onPageChange, _j = _a.showTotalRecord, showTotalRecord = _j === void 0 ? false : _j, _k = _a.titleTotalRecord, titleTotalRecord = _k === void 0 ? 'Total Record' : _k, _l = _a.showCurrentPage, showCurrentPage = _l === void 0 ? false : _l, _m = _a.titleCurrentPage, titleCurrentPage = _m === void 0 ? 'Current Page' : _m, _o = _a.showNumberOfPage, showNumberOfPage = _o === void 0 ? false : _o, _p = _a.titleNumberOfPage, titleNumberOfPage = _p === void 0 ? 'Number of Page' : _p, _q = _a.showPageRange, showPageRange = _q === void 0 ? true : _q, _r = _a.showPageSelect, showPageSelect = _r === void 0 ? true : _r, _s = _a.showPageNumber, showPageNumber = _s === void 0 ? true : _s, _t = _a.showPageArrow, showPageArrow = _t === void 0 ? true : _t, _u = _a.bordered, bordered = _u === void 0 ? false : _u;
    var _v = useState(true), isLoading = _v[0], setIsLoading = _v[1];
    var _w = useState(false), isEmpty = _w[0], setIsEmpty = _w[1];
    var _x = useState([]), isRow = _x[0], setIsRow = _x[1];
    var _y = useState(20), isSize = _y[0], setIsSize = _y[1];
    var sortRows = useCallback(function (value, desc) {
        var sort = rows.sort(function (a, b) {
            if (!desc) {
                return b[value] > a[value] ? 1 : -1;
            }
            return a[value] > b[value] ? 1 : -1;
        });
        setIsRow(sort);
    }, [rows]);
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
    return (_jsx(Wrapper, __assign({ className: "angrid ".concat(theme, " ").concat(className, " ").concat(rows.length === 0 ? 'is-empty' : 'not-empty'), minHeight: minHeight }, { children: _jsxs("div", __assign({ className: 'asax' }, { children: [_jsx(Table, { className: bordered ? 'bordered' : '', showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, emptyMessage: emptyMessage, rows: isRow, empty: isEmpty, loading: isLoading, sortable: function (value, sort) {
                        return sortRows(value, sort);
                    } }), !isEmpty && totalCount && totalCount > pageSize && (_jsx(Paginate, { totalCount: totalCount, pageSize: isSize, onPageChange: onPageChange, range: range, showTotalRecord: showTotalRecord, titleTotalRecord: titleTotalRecord, showCurrentPage: showCurrentPage, titleCurrentPage: titleCurrentPage, showNumberOfPage: showNumberOfPage, titleNumberOfPage: titleNumberOfPage, showPageRange: showPageRange, showPageSelect: showPageSelect, showPageNumber: showPageNumber, showPageArrow: showPageArrow }))] })) })));
};
export var Angrid = memo(Main);
var templateObject_1;
