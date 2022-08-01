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
import { jsx as _jsx } from "react/jsx-runtime";
export function BiSortUp() {
    return (_jsx("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', fill: 'currentColor', stroke: 'currentColor', strokeWidth: '0', viewBox: '0 0 24 24' }, { children: _jsx("path", { stroke: 'none', d: 'M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z' }) })));
}
export function BiSortDown() {
    return (_jsx("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', fill: 'currentColor', stroke: 'currentColor', strokeWidth: '0', viewBox: '0 0 24 24' }, { children: _jsx("path", { stroke: 'none', d: 'M6 20l4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z' }) })));
}
export function FiChevronLeft() {
    return (_jsx("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', viewBox: '0 0 24 24' }, { children: _jsx("path", { d: 'M15 18L9 12 15 6' }) })));
}
export function FiChevronRight() {
    return (_jsx("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', viewBox: '0 0 24 24' }, { children: _jsx("path", { d: 'M9 18L15 12 9 6' }) })));
}
