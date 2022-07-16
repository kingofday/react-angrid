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
})(PaginateType || (PaginateType = {}));
export var Main = function (_a) {
    var _b = _a.totalCount, totalCount = _b === void 0 ? 1 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 20 : _c, onPageChange = _a.onPageChange, range = _a.range, showTotalRecord = _a.showTotalRecord, titleTotalRecord = _a.titleTotalRecord, showCurrentPage = _a.showCurrentPage, titleCurrentPage = _a.titleCurrentPage, showNumberOfPage = _a.showNumberOfPage, titleNumberOfPage = _a.titleNumberOfPage, showPageRange = _a.showPageRange, showPageSelect = _a.showPageSelect, showPageNumber = _a.showPageNumber, showPageArrow = _a.showPageArrow;
    var _d = useState(1), page = _d[0], setPage = _d[1];
    var _e = useState([]), slices = _e[0], setSlices = _e[1];
    var _f = useState(pageSize), rangePageSize = _f[0], setRangePageSize = _f[1];
    var _g = usePagination(totalCount, pageSize), pages = _g.pages, totalPageCount = _g.totalPageCount;
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
    }, [pageSize, onPageChange, page, rangePageSize, totalPageCount]);
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
    return (_jsxs("div", __assign({ className: 'paginate' }, { children: [_jsxs("div", { children: [showPageArrow && (_jsx("button", __assign({ onClick: function () { return pageChanging(PaginateType.PREV, 1); }, type: 'button', className: page === 1 ? 'disabled' : '' }, { children: _jsx(FiChevronLeft, {}) }))), showPageNumber && (_jsx("span", { children: slices.map(function (item) { return (_jsx("button", __assign({ className: item === page ? 'active' : '', onClick: function () {
                                return pageChanging(PaginateType.SELECT, item);
                            }, type: 'button' }, { children: item }), uuidv4())); }) })), showPageArrow && (_jsx("button", __assign({ onClick: function () { return pageChanging(PaginateType.NEXT, 1); }, type: 'button', className: page === totalPageCount ? 'disabled' : '' }, { children: _jsx(FiChevronRight, {}) })))] }), showPageSelect && (_jsx("div", __assign({ className: 'selectPage' }, { children: _jsx("select", __assign({ value: page, onChange: function (event) {
                        return pageChanging(PaginateType.SELECT, +event.target.value);
                    } }, { children: pages.map(function (item) { return (_jsx("option", __assign({ value: item }, { children: item }), uuidv4())); }) })) }))), showPageRange && (_jsx("div", __assign({ className: 'rangePage' }, { children: _jsx("select", __assign({ value: rangePageSize, onChange: function (event) {
                        return setRangePageSize(+event.target.value);
                    } }, { children: range.map(function (item) { return (_jsx("option", __assign({ value: item }, { children: "".concat(totalCount, " / ").concat(item) }), uuidv4())); }) })) }))), showTotalRecord && (_jsxs("div", __assign({ className: 'textPage' }, { children: [titleTotalRecord, ": ", totalCount] }))), showCurrentPage && (_jsxs("div", __assign({ className: 'textPage' }, { children: [titleCurrentPage, ": ", page] }))), showNumberOfPage && (_jsxs("div", __assign({ className: 'textPage' }, { children: [titleNumberOfPage, ": ", totalPageCount] })))] })));
};
export var Paginate = memo(Main);
