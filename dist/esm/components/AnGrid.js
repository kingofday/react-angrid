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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, forwardRef, useImperativeHandle, } from 'react';
import './angrid.css';
import PropTypes from 'prop-types';
var AnGrid = forwardRef(function (props, ref) {
    //=== init
    var formatData = function (data, formatted) {
        if (formatted)
            return __spreadArray([], data.map(function (r, idx) { return (__assign(__assign({}, r), { dataRowNumber: ((props.pageNumber || 1) - 1) *
                    (props.pageSize || 9999) +
                    idx +
                    1 })); }), true);
        else
            return __spreadArray([], data.map(function (r, idx) { return ({
                data: __assign({}, r),
                hide: r.hide || false,
                index: idx,
                dataRowNumber: ((props.pageNumber || 1) - 1) *
                    (props.pageSize || 9999) +
                    idx +
                    1,
            }); }), true);
    };
    var strings = props.strings || {};
    //=== Hooks
    var _a = useState(props.rows ? formatData(props.rows) : []), rows = _a[0], setRows = _a[1];
    var _b = useState(props.columns), columns = _b[0], setColumns = _b[1];
    //=== Recoil
    var _handlePageChange = function (newPage) {
        if (props.onPageChange)
            props.onPageChange(newPage);
    };
    useEffect(function () {
        setRows(formatData(props.rows));
    }, [props.rows, props.pageSize]);
    useEffect(function () {
        setColumns(props.columns);
    }, [props.columns]);
    //=== sort method
    var _hanndleSort = function (field) {
        var col = columns.find(function (x) { return x.field === field; });
        switch (col.sort) {
            case 1:
                col.sort = 2;
                setColumns(__spreadArray([], columns, true));
                setRows(function (r) {
                    return formatData(r.sort(function (a, b) {
                        if (a.data[col.field].toString() <
                            b.data[col.field].toString())
                            return -1;
                        if (a.data[col.field].toString() >
                            b.data[col.field].toString())
                            return 1;
                        return 0;
                    }), true);
                });
                break;
            case 2:
                col.sort = 0;
                setColumns(__spreadArray([], columns, true));
                setRows(formatData(props.rows));
                break;
            default:
                col.sort = 1;
                setColumns(__spreadArray([], columns, true));
                setRows(function (r) {
                    return formatData(r.sort(function (a, b) {
                        if (a.data[col.field].toString() <
                            b.data[col.field].toString())
                            return 1;
                        if (a.data[col.field].toString() >
                            b.data[col.field].toString())
                            return -1;
                        return 0;
                    }), true);
                });
                break;
        }
    };
    useImperativeHandle(ref, function () { return ({
        addRow: function (row, prepend) {
            row['hide'] = row['hide'] || false;
            if (prepend)
                setRows(function (p) { return __spreadArray([row], p, true); });
            else
                setRows(function (p) { return __spreadArray(__spreadArray([], p, true), [row], false); });
        },
        addRows: function (newRows, prepend) {
            if (prepend)
                setRows(function (p) { return __spreadArray(__spreadArray([], formatData(newRows), true), p, true); });
            else
                setRows(function (p) { return __spreadArray(__spreadArray([], p, true), formatData(newRows), true); });
        },
        hideRow: function (idx) {
            var tempRows = __spreadArray([], rows, true);
            var row = __assign(__assign({}, tempRows[idx]), { hide: true });
            tempRows[idx] = row;
            setRows(function (p) { return __spreadArray([], tempRows, true); });
        },
    }); });
    return (_jsxs("div", __assign({ className: "angrid ".concat(props.theme || 'dark', " ").concat(props.className || null, " ").concat(rows.length === 0 ? 'is-empty' : null), style: {
            minHeight: props.minHeight || 300,
            paddingBottom: props.disabledPaging ? 0 : 45,
        } }, { children: [!props.loading && rows.length === 0 ? (props.emptyList ? (props.emptyList) : (_jsx("p", __assign({ className: 'empty' }, { children: strings.notFound || 'There Is No Data' })))) : null, props.loading ? (_jsx("div", __assign({ className: 'loader' }, { children: _jsx("div", { className: 'spinner' }) }))) : null, rows.length !== 0 ? (_jsxs(_Fragment, { children: [_jsxs("table", { children: [_jsx("thead", __assign({ className: 'thead' }, { children: _jsxs("tr", { children: [props.showRowNumber ? (_jsx("th", __assign({ style: { width: 25 }, title: strings.indexTitle || 'Row Number' }, { children: "#" }))) : null, columns.map(function (c, idx) { return (_jsxs("th", __assign({ style: {
                                                width: c.width || 85,
                                                cursor: c.sortable
                                                    ? 'pointer'
                                                    : 'auto',
                                            }, title: c.description }, (c.sortable
                                            ? {
                                                onClick: function () {
                                                    return _hanndleSort(c.field);
                                                },
                                            }
                                            : {}), { children: [c.headerName, c.sortable ? (_jsx("span", __assign({ className: 'sort-icon' }, { children: "\u2191\u2193" }))) : null] }), idx)); })] }) })), _jsx("tbody", __assign({ className: 'tbody' }, { children: rows
                                    .filter(function (x) { return !x.hide; })
                                    .map(function (r, i) { return (_jsxs("tr", __assign({ className: props.rowClass
                                        ? props.rowClass(r)
                                        : null }, { children: [props.showRowNumber ? (_jsx("td", { children: _jsx("span", { children: r.dataRowNumber }) })) : null, columns.map(function (c, j) { return (_jsx("td", __assign({ className: c.cellClass
                                                ? c.cellClass(r)
                                                : '' }, { children: c.renderCell ? (c.renderCell(r)) : (_jsx("span", { children: r.data[c.field] })) }), j)); })] }), i)); }) }))] }), !props.disabledPaging
                        ? props.customPagination || (_jsxs("div", __assign({ className: 'angrid-pagination' }, { children: [_jsx("span", { children: strings.pageNumber || 'Page Number' }), _jsx("button", __assign({ onClick: function () {
                                        return _handlePageChange(props.pageNumber - 1);
                                    }, disabled: props.pageNumber === 1 }, { children: '‹' })), _jsx("strong", { children: props.pageNumber }), _jsx("button", __assign({ onClick: function () {
                                        return _handlePageChange(props.pageNumber + 1);
                                    }, disabled: props.pageNumber * props.pageSize >
                                        props.totalCount }, { children: '›' }))] })))
                        : null] })) : null] })));
});
AnGrid.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    onPageChange: PropTypes.func,
    loading: PropTypes.bool,
    showRowNumber: PropTypes.bool,
    totalCount: PropTypes.number,
    paging: PropTypes.bool,
};
export default AnGrid;
