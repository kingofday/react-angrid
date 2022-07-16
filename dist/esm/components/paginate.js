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
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { usePagination } from './use-pagination';
var PaginateType;
(function (PaginateType) {
    PaginateType[PaginateType["NEXT"] = 0] = "NEXT";
    PaginateType[PaginateType["PREV"] = 1] = "PREV";
    PaginateType[PaginateType["SELECT"] = 2] = "SELECT";
    PaginateType[PaginateType["SIZE"] = 3] = "SIZE";
})(PaginateType || (PaginateType = {}));
export var Main = function (_a) {
    var totalCount = _a.totalCount, pageSize = _a.pageSize, onPageChange = _a.onPageChange, _b = _a.defaultPageSize, defaultPageSize = _b === void 0 ? 20 : _b, range = _a.range;
    var _c = useState(1), page = _c[0], setPage = _c[1];
    var _d = useState([]), slices = _d[0], setSlices = _d[1];
    var _e = useState(defaultPageSize), rangePageSize = _e[0], setRangePageSize = _e[1];
    var _f = usePagination(totalCount, pageSize), pages = _f.pages, totalPageCount = _f.totalPageCount;
    useEffect(function () {
        if (typeof onPageChange !== 'undefined') {
            onPageChange(page, rangePageSize);
        }
        if (pages.length > 5) {
            var slicer = [1, 2, 3, 4, 5];
            if (page < 3) {
                slicer = pages.slice(0, 5);
            }
            else if (page > totalPageCount - 3) {
                slicer = pages.slice(totalPageCount - 5, totalPageCount);
            }
            else {
                slicer = pages.slice(page - 3, page + 2);
            }
            setSlices(slicer);
        }
        else {
            setSlices(pages);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultPageSize, onPageChange, page, rangePageSize, totalPageCount]);
    /**
     * @description: handle paginate selection
     * @param {number} paginate type
     * @param {number} item
     * @returns {void} set page & callback onPageChange
     */
    var pageChanging = useCallback(function (value, item) {
        switch (value) {
            case PaginateType.NEXT:
                if (page < totalPageCount)
                    setPage(page + item);
                break;
            case PaginateType.PREV:
                if (page > 1)
                    setPage(page - item);
                break;
            case PaginateType.SELECT:
                setPage(item);
                break;
            default:
                break;
        }
    }, [page, totalPageCount]);
    return (_jsxs("div", __assign({ className: 'paginate' }, { children: [_jsxs("div", { children: [_jsx("button", __assign({ onClick: function () { return pageChanging(PaginateType.PREV, 1); }, type: 'button', className: page === 1 ? 'disabled' : '' }, { children: _jsx(FiChevronLeft, {}) })), slices.map(function (item) { return (_jsx("button", __assign({ className: item === page ? 'active' : '', onClick: function () {
                            return pageChanging(PaginateType.SELECT, item);
                        }, type: 'button' }, { children: item }), uuidv4())); }), _jsx("button", __assign({ onClick: function () { return pageChanging(PaginateType.NEXT, 1); }, type: 'button', className: page === totalPageCount ? 'disabled' : '' }, { children: _jsx(FiChevronRight, {}) }))] }), _jsx("div", __assign({ className: 'selectPage' }, { children: _jsx("select", __assign({ defaultValue: page, onChange: function (event) {
                        return pageChanging(PaginateType.SELECT, +event.target.value);
                    } }, { children: pages.map(function (item) { return (_jsx("option", __assign({ value: item, selected: page === item }, { children: item }), uuidv4())); }) })) })), _jsx("div", __assign({ className: 'rangePage' }, { children: _jsx("select", __assign({ value: rangePageSize, onChange: function (event) {
                        return setRangePageSize(+event.target.value);
                    } }, { children: range.map(function (item) { return (_jsx("option", __assign({ value: item }, { children: "".concat(item, " / ").concat(totalPageCount) }), uuidv4())); }) })) }))] })));
};
export var Paginate = memo(Main);
