import { jsx as _jsx } from "react/jsx-runtime";
export function Item({ type, onClick, data }) {
    return _jsx("div", { className: type, onClick: onClick, "data-type": data });
}
export function PlayerChoice({ onChoice, types, game }) {
    let items = [];
    types.forEach(type => items.push(_jsx(Item, { type: `${game}-${type}`, data: type, onClick: onChoice }, type)));
    return _jsx("div", { className: `player-${game}`, children: items });
}
