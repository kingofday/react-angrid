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
export var Loading = function () { return (_jsx("div", __assign({ className: 'loading' }, { children: _jsxs("div", __assign({ className: 'lds-ring' }, { children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] })) }))); };
