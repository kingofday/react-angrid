import { useState } from 'react';
/**
 * hooks of pagination grid
 * @param pageSize number of row showing in page
 * @param totalCount length of row data
 * @returns
 */
export var usePagination = function (pageSize, totalCount) {
    var _a = useState(1), current = _a[0], setCurrent = _a[1];
    var pages = [];
    var selectedPage = function (props) {
        if (props) {
            setCurrent(props);
        }
    };
    var totalPageCount = Math.ceil(totalCount / pageSize);
    var nextPage = function () {
        if (current < totalPageCount) {
            setCurrent(current + 1);
        }
    };
    var previousPage = function () {
        if (current > 1) {
            setCurrent(current - 1);
        }
    };
    for (var index = 1; index <= totalPageCount; index += 1) {
        pages.push(index);
    }
    return {
        totalPageCount: totalPageCount,
        nextPage: nextPage,
        previousPage: previousPage,
        selectedPage: selectedPage,
        current: current,
        pages: pages,
    };
};
