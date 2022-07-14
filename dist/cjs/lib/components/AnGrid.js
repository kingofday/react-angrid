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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./angrid.css");
var prop_types_1 = __importDefault(require("prop-types"));
var AnGrid = (0, react_1.forwardRef)(function (props, ref) {
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
    var _a = (0, react_1.useState)(props.rows ? formatData(props.rows) : []), rows = _a[0], setRows = _a[1];
    var _b = (0, react_1.useState)(props.columns), columns = _b[0], setColumns = _b[1];
    //=== Recoil
    var _handlePageChange = function (newPage) {
        if (props.onPageChange)
            props.onPageChange(newPage);
    };
    (0, react_1.useEffect)(function () {
        setRows(formatData(props.rows));
    }, [props.rows, props.pageSize]);
    (0, react_1.useEffect)(function () {
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
    (0, react_1.useImperativeHandle)(ref, function () { return ({
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
    return (react_1.default.createElement("div", { className: "angrid ".concat((props.theme || 'dark'), " ").concat(props.className || null, " ").concat(rows.length === 0 ? "is-empty" : null), style: { minHeight: props.minHeight || 300, paddingBottom: (props.disabledPaging ? 0 : 45) } },
        !props.loading && rows.length === 0 ? (props.emptyList ? props.emptyList :
            react_1.default.createElement("p", { className: "empty" }, strings.notFound || "There Is No Data")) : null,
        props.loading ?
            react_1.default.createElement("div", { className: 'loader' },
                react_1.default.createElement("div", { className: "spinner" })) : null,
        rows.length !== 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", { className: 'thead' },
                    react_1.default.createElement("tr", null,
                        props.showRowNumber ? react_1.default.createElement("th", { style: { width: 25 }, title: (strings.indexTitle || "Row Number") }, "#") : null,
                        columns.map(function (c, idx) { return (react_1.default.createElement("th", __assign({ style: { width: c.width || 85, cursor: c.sortable ? 'pointer' : 'auto' }, title: c.description, key: idx }, (c.sortable ? { onClick: function () { return _hanndleSort(c.field); } } : {})),
                            c.headerName,
                            c.sortable ? react_1.default.createElement("span", { className: 'sort-icon' }, "\u2191\u2193") : null)); }))),
                react_1.default.createElement("tbody", { className: 'tbody' }, rows
                    .filter(function (x) { return !x.hide; })
                    .map(function (r, i) { return (react_1.default.createElement("tr", { key: i, className: props.rowClass ? props.rowClass(r) : null },
                    props.showRowNumber ? react_1.default.createElement("td", null,
                        react_1.default.createElement("span", null, r.dataRowNumber)) : null,
                    columns.map(function (c, j) { return (react_1.default.createElement("td", { className: c.cellClass ? c.cellClass(r) : "", key: j }, c.renderCell ? c.renderCell(r) : react_1.default.createElement("span", null, r.data[c.field]))); }))); }))),
            !props.disabledPaging ? props.customPagination ||
                react_1.default.createElement("div", { className: 'angrid-pagination' },
                    react_1.default.createElement("span", null, strings.pageNumber || "Page Number"),
                    react_1.default.createElement("button", { onClick: function () { return _handlePageChange(props.pageNumber - 1); }, disabled: props.pageNumber === 1 }, "‹"),
                    react_1.default.createElement("strong", null, props.pageNumber),
                    react_1.default.createElement("button", { onClick: function () { return _handlePageChange(props.pageNumber + 1); }, disabled: props.pageNumber * props.pageSize > props.totalCount }, "›")) : null)) : null));
});
AnGrid.propTypes = {
    columns: prop_types_1.default.array.isRequired,
    rows: prop_types_1.default.array.isRequired,
    onPageChange: prop_types_1.default.func,
    loading: prop_types_1.default.bool,
    showRowNumber: prop_types_1.default.bool,
    totalCount: prop_types_1.default.number,
    paging: prop_types_1.default.bool,
};
exports.default = AnGrid;
