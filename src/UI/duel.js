import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { MenuAction } from "../hooks/reducer";
import { Item } from "./item";
const choices = function (listOfChoices) {
    let index = Math.floor(Math.random() * listOfChoices.length);
    return listOfChoices[index];
};
export function duel(choice, house, winning) {
    let result = null;
    if (choice === house) {
        result = true;
    }
    else {
        result = winning[choice].includes(house);
    }
    return result;
}
export function Verdict({ result, onMenu }) {
    const handlePlayAgain = function () {
        if (onMenu) {
            onMenu({ type: MenuAction.home });
        }
    };
    return _jsxs("div", { className: "result ", children: [_jsxs("h1", { children: [result ? 'YOU WIN' : 'YOU LOSE', " "] }), _jsx("button", { onClick: handlePlayAgain, children: "PLAY AGAIN" })] });
}
export function Duel({ game, choice, listOfChoices, winningCases, onResult }) {
    const [house, sethouse] = useState('');
    useEffect(function () {
        const timer = setTimeout(() => {
            const pick = choices(listOfChoices);
            sethouse(pick);
            const result = duel(choice, pick, winningCases);
            onResult(result);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return _jsxs("div", { className: "duel", children: [_jsx(Item, { type: `${game}-${choice} choice` }), house ? _jsx(Item, { type: `${game}-${house} choice-house` }) : _jsx("div", { id: "house", className: "choice-house choice-house-empty " })] });
}
