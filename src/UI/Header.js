import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Header({ score, logo }) {
    return _jsxs("header", { className: "header", children: [_jsx("div", { children: _jsx("img", { id: 'logo', src: logo, alt: "" }) }), _jsxs("p", { children: [_jsx("span", { className: "score-text", children: "Score" }), "  ", _jsx("span", { className: "score", children: score })] })] });
}
