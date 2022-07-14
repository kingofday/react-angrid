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
import React, { useState, useEffect, forwardRef, useImperativeHandle, } from "react";
import './angrid.css';
import PropTypes from 'prop-types';
var AnGrid = forwardRef(function (props, ref) {
    //=== init
    var formatData = function (data, formatted) {
        if (formatted)
            return __spreadArray([], data.map(function (r, idx) { return (__assign(__assign({}, r), { dataRowNumber: ((props.pageNumber || 1) - 1) * (props.pageSize || 9999) + idx + 1 })); }), true);
        else
            return __spreadArray([], data.map(function (r, idx) { return ({
                data: __assign({}, r),
                hide: r.hide || false,
                index: idx,
                dataRowNumber: ((props.pageNumber || 1) - 1) * (props.pageSize || 9999) + idx + 1
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
                setRows(function (r) { return formatData(r.sort(function (a, b) {
                    if (a.data[col.field].toString() < b.data[col.field].toString())
                        return -1;
                    if (a.data[col.field].toString() > b.data[col.field].toString())
                        return 1;
                    return 0;
                }), true); });
                break;
            case 2:
                col.sort = 0;
                setColumns(__spreadArray([], columns, true));
                setRows(formatData(props.rows));
                break;
            default:
                col.sort = 1;
                setColumns(__spreadArray([], columns, true));
                setRows(function (r) { return formatData(r.sort(function (a, b) {
                    if (a.data[col.field].toString() < b.data[col.field].toString())
                        return 1;
                    if (a.data[col.field].toString() > b.data[col.field].toString())
                        return -1;
                    return 0;
                }), true); });
                break;
        }
    };
    useImperativeHandle(ref, function () { return ({
        addRow: function (row, prepend) {
            row["hide"] = row["hide"] || false;
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
    return (React.createElement("div", { className: "angrid ".concat((props.theme || 'dark'), " ").concat(props.className || null, " ").concat(rows.length === 0 ? "is-empty" : null), style: { minHeight: props.minHeight || 300, paddingBottom: (props.disabledPaging ? 0 : 45) } },
        !props.loading && rows.length === 0 ? (props.emptyList ? props.emptyList :
            React.createElement("p", { className: "empty" }, strings.notFound || "There Is No Data")) : null,
        props.loading ?
            React.createElement("div", { className: 'loader' },
                React.createElement("div", { className: "spinner" })) : null,
        rows.length !== 0 ? (React.createElement(React.Fragment, null,
            React.createElement("table", null,
                React.createElement("thead", { className: 'thead' },
                    React.createElement("tr", null,
                        props.showRowNumber ? React.createElement("th", { style: { width: 25 }, title: (strings.indexTitle || "Row Number") }, "#") : null,
                        columns.map(function (c, idx) { return (React.createElement("th", __assign({ style: { width: c.width || 85, cursor: c.sortable ? 'pointer' : 'auto' }, title: c.description, key: idx }, (c.sortable ? { onClick: function () { return _hanndleSort(c.field); } } : {})),
                            c.headerName,
                            c.sortable ? React.createElement("span", { className: 'sort-icon' }, "\u2191\u2193") : null)); }))),
                React.createElement("tbody", { className: 'tbody' }, rows
                    .filter(function (x) { return !x.hide; })
                    .map(function (r, i) { return (React.createElement("tr", { key: i, className: props.rowClass ? props.rowClass(r) : null },
                    props.showRowNumber ? React.createElement("td", null,
                        React.createElement("span", null, r.dataRowNumber)) : null,
                    columns.map(function (c, j) { return (React.createElement("td", { className: c.cellClass ? c.cellClass(r) : "", key: j }, c.renderCell ? c.renderCell(r) : React.createElement("span", null, r.data[c.field]))); }))); }))),
            !props.disabledPaging ? props.customPagination ||
                React.createElement("div", { className: 'angrid-pagination' },
                    React.createElement("span", null, strings.pageNumber || "Page Number"),
                    React.createElement("button", { onClick: function () { return _handlePageChange(props.pageNumber - 1); }, disabled: props.pageNumber === 1 }, "‹"),
                    React.createElement("strong", null, props.pageNumber),
                    React.createElement("button", { onClick: function () { return _handlePageChange(props.pageNumber + 1); }, disabled: props.pageNumber * props.pageSize > props.totalCount }, "›")) : null)) : null));
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
