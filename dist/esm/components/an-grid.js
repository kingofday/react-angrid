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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react';
import './angrid.css';
import { locale } from './locale';
import { Paginate } from './paginate';
import { Table } from './table';
var range = [10, 20, 50, 100, 200, 500];
var Main = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.minHeight, minHeight = _d === void 0 ? 300 : _d, showRowNumber = _a.showRowNumber, _e = _a.columnNumberTitle, columnNumberTitle = _e === void 0 ? '#' : _e, columns = _a.columns, rows = _a.rows, totalCount = _a.totalCount, _f = _a.loading, loading = _f === void 0 ? 0 : _f, _g = _a.pageSize, pageSize = _g === void 0 ? 20 : _g, onPageChange = _a.onPageChange, _h = _a.showTotalRecord, showTotalRecord = _h === void 0 ? false : _h, _j = _a.showCurrentPage, showCurrentPage = _j === void 0 ? false : _j, _k = _a.showNumberOfPage, showNumberOfPage = _k === void 0 ? false : _k, _l = _a.showPageRange, showPageRange = _l === void 0 ? true : _l, _m = _a.showPageSelect, showPageSelect = _m === void 0 ? true : _m, _o = _a.showPageNumber, showPageNumber = _o === void 0 ? true : _o, _p = _a.showPageArrow, showPageArrow = _p === void 0 ? true : _p, _q = _a.bordered, bordered = _q === void 0 ? false : _q, _r = _a.textCurrent, textCurrent = _r === void 0 ? locale.fa.current : _r, _s = _a.textTotal, textTotal = _s === void 0 ? locale.fa.total : _s, _t = _a.textNumber, textNumber = _t === void 0 ? locale.fa.number : _t, _u = _a.textEmpty, textEmpty = _u === void 0 ? locale.fa.empty : _u, _v = _a.rtl, rtl = _v === void 0 ? false : _v;
    var _w = useState(true), isLoading = _w[0], setIsLoading = _w[1];
    var _x = useState(false), isEmpty = _x[0], setIsEmpty = _x[1];
    var _y = useState([]), isRow = _y[0], setIsRow = _y[1];
    var _z = useState(pageSize), isSize = _z[0], setIsSize = _z[1];
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
    return (_jsx("div", __assign({ className: "angrid ".concat(theme, " ").concat(className), style: { minHeight: "".concat(minHeight, "px") } }, { children: _jsxs("div", __assign({ className: 'asax' }, { children: [_jsx(Table, { textEmpty: textEmpty, rtl: rtl, className: bordered ? 'bordered' : '', showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, rows: isRow, empty: isEmpty, loading: isLoading, sortable: function (value, sort) {
                        return sortRows(value, sort);
                    } }), !isEmpty && (_jsx(Paginate, { textCurrent: textCurrent, textTotal: textTotal, textNumber: textNumber, rtl: rtl, totalCount: totalCount, pageSize: isSize, onPageChange: onPageChange, range: range, showTotalRecord: showTotalRecord, showCurrentPage: showCurrentPage, showNumberOfPage: showNumberOfPage, showPageRange: showPageRange, showPageSelect: showPageSelect, showPageNumber: showPageNumber, showPageArrow: showPageArrow }))] })) })));
};
export var Angrid = memo(Main);
