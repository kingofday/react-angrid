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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import "./App.css";
import React, { useState, useEffect } from "react";
import AnGrid from './lib/index';
//import AnGrid from 'react-angrid';
import data from './data';
function App() {
    var _this = this;
    console.log("app");
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState([]), rows = _b[0], setRows = _b[1];
    var _c = useState({
        pageSize: 4,
        pageNumber: 1,
    }), filter = _c[0], setFilter = _c[1];
    var _d = useState(3), totalCount = _d[0], setTotalCount = _d[1];
    var _delete = function (data) {
        setRows(rows.filter(function (x) { return x.userId !== data.userId; }));
    };
    var columns = [
        {
            field: "userId",
            headerName: "User Id",
            description: "user id that is unique",
            width: 50,
        },
        {
            field: "fullName",
            headerName: "Fullname",
            description: "full name of user",
            width: 100,
            sortable: true
        },
        {
            field: "age",
            headerName: "Age",
            description: "age of user",
            width: 50,
        },
        {
            field: "delete",
            headerName: "delete(component cell)",
            description: "delete user",
            width: 50,
            renderCell: function (row) {
                return row.data.userId === 1 ? "-" : React.createElement("button", { onClick: function () { return _delete(row.data); } }, "X");
            }
        }
    ];
    var active = true;
    //=== events
    var _fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('=== fetch data');
            if (!active)
                return [2 /*return*/];
            //mock api, you can call your api then set data to table like commented line below
            return [2 /*return*/, new Promise(function (resolve) {
                    setLoading(true);
                    setTimeout(function () {
                        var pageNumber = filter.pageNumber, pageSize = filter.pageSize;
                        var start = (pageNumber - 1) * pageSize;
                        var end = (pageNumber) * pageSize;
                        setRows(data.slice(start, end)); // SetRows
                        setTotalCount(data.length); //=== set total page size for pagination part
                        resolve();
                        setLoading(false);
                    }, 2000);
                })];
        });
    }); };
    useEffect(function () {
        _fetchData();
        return function () {
            active = false;
        };
    }, [filter]);
    var _handlePageChange = function (newPage) {
        setFilter(function (p) { return (__assign(__assign({}, p), { pageNumber: newPage })); });
    };
    var randomChangePageSize = function () {
        setFilter(function (p) { return (__assign(__assign({}, p), { pageSize: Math.floor(Math.random() * 5 + 5) })); });
    };
    return (React.createElement("div", { className: "app" },
        React.createElement("h1", null, "an grid"),
        React.createElement("p", null, "simple data grid with paging, sorting and rtl support"),
        React.createElement("hr", null),
        React.createElement("h2", null, "minimal feature"),
        React.createElement(AnGrid, { columns: columns, rows: rows, showRowNumber: true, disabledPaging: true }),
        React.createElement("h2", null, "full feature"),
        React.createElement(AnGrid, { loading: loading, columns: columns, rows: rows, showRowNumber: true, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300, emptyList: React.createElement("strong", null, "There Is No Info") }),
        React.createElement("h2", null, "custome pagination"),
        React.createElement(AnGrid, { loading: loading, columns: columns, rows: rows, showRowNumber: true, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300, emptyList: React.createElement("strong", null, "There Is No Info"), customPagination: React.createElement("div", null, "custom") }),
        React.createElement("h2", null, "Without row number"),
        React.createElement(AnGrid, { loading: loading, columns: columns, rows: rows, showRowNumber: false, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300, emptyList: React.createElement("strong", null, "There Is No Info") }),
        React.createElement("h2", null, "with dynamic pageSize"),
        React.createElement("div", { onClick: randomChangePageSize }, "click here to change page size randolmy"),
        React.createElement("div", null,
            "current pagesize ",
            filter.pageSize),
        React.createElement(AnGrid, { loading: loading, columns: columns, rows: rows, showRowNumber: false, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300 })));
}
export default App;
