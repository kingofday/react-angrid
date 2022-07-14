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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var react_1 = __importStar(require("react"));
var index_1 = __importDefault(require("./lib/index"));
//import AnGrid from 'react-angrid';
var data_1 = __importDefault(require("./data"));
function App() {
    var _this = this;
    console.log("app");
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)([]), rows = _b[0], setRows = _b[1];
    var _c = (0, react_1.useState)({
        pageSize: 4,
        pageNumber: 1,
    }), filter = _c[0], setFilter = _c[1];
    var _d = (0, react_1.useState)(3), totalCount = _d[0], setTotalCount = _d[1];
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
                return row.data.userId === 1 ? "-" : react_1.default.createElement("button", { onClick: function () { return _delete(row.data); } }, "X");
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
                        setRows(data_1.default.slice(start, end)); // SetRows
                        setTotalCount(data_1.default.length); //=== set total page size for pagination part
                        resolve();
                        setLoading(false);
                    }, 2000);
                })];
        });
    }); };
    (0, react_1.useEffect)(function () {
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
    return (react_1.default.createElement("div", { className: "app" },
        react_1.default.createElement("h1", null, "an grid"),
        react_1.default.createElement("p", null, "simple data grid with paging, sorting and rtl support"),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("h2", null, "minimal feature"),
        react_1.default.createElement(index_1.default, { columns: columns, rows: rows, showRowNumber: true, disabledPaging: true }),
        react_1.default.createElement("h2", null, "full feature"),
        react_1.default.createElement(index_1.default, { loading: loading, columns: columns, rows: rows, showRowNumber: true, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300, emptyList: react_1.default.createElement("strong", null, "There Is No Info") }),
        react_1.default.createElement("h2", null, "custome pagination"),
        react_1.default.createElement(index_1.default, { loading: loading, columns: columns, rows: rows, showRowNumber: true, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300, emptyList: react_1.default.createElement("strong", null, "There Is No Info"), customPagination: react_1.default.createElement("div", null, "custom") }),
        react_1.default.createElement("h2", null, "Without row number"),
        react_1.default.createElement(index_1.default, { loading: loading, columns: columns, rows: rows, showRowNumber: false, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300, emptyList: react_1.default.createElement("strong", null, "There Is No Info") }),
        react_1.default.createElement("h2", null, "with dynamic pageSize"),
        react_1.default.createElement("div", { onClick: randomChangePageSize }, "click here to change page size randolmy"),
        react_1.default.createElement("div", null,
            "current pagesize ",
            filter.pageSize),
        react_1.default.createElement(index_1.default, { loading: loading, columns: columns, rows: rows, showRowNumber: false, pageSize: filter.pageSize, pageNumber: filter.pageNumber, totalCount: totalCount, onPageChange: _handlePageChange, theme: "dark", minHeight: 300 })));
}
exports.default = App;
