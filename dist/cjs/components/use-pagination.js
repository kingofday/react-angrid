"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
var usePagination = function (totalCount, pageSize) {
    if (pageSize === void 0) { pageSize = 1; }
    var pages = [];
    var totalPageCount = typeof totalCount === 'number' && totalCount > pageSize
        ? Math.ceil(totalCount / pageSize)
        : 1;
    for (var index = 1; index <= totalPageCount; index += 1) {
        pages.push(index);
    }
    return {
        totalPageCount: totalPageCount,
        pages: pages,
    };
};
exports.usePagination = usePagination;
