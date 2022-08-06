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
import { EmptyIcon } from './icons';
export var IsEmpty = function (_a) {
    var lang = _a.lang;
    return (_jsxs("div", __assign({ className: 'isEmpty' }, { children: [_jsx(EmptyIcon, {}), _jsx("div", __assign({ style: {
                    color: 'rgb(149 147 147)',
                    textAlign: 'center',
                } }, { children: lang.empty }))] })));
};
