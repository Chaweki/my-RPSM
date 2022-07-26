import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { PlayerChoice } from "./item";
import { Header } from "./Header";
import { ModalRules } from "./Modal-rules";
import { Duel, Verdict } from "./duel";
export function RockGame({ onMenu, onScore, score }) {
    const listOfChoicesRock = ['paper', 'scissors', 'rock'];
    const winningRock = {
        'rock': ['scissors'],
        'scissors': ['paper'],
        'paper': ['rock']
    };
    const [result, setResult] = useState('');
    const handleResult = useCallback(function (result) {
        setResult(result);
        let num = 0;
        if (result != undefined) {
            if (!result) {
                if (score.rockScore === 0) {
                    num = score.rockScore;
                }
                else {
                    num = score.rockScore - 1;
                }
            }
            else {
                num = score.rockScore + 1;
            }
            onScore(s => ({ ...s, rockScore: num }));
        }
    }, []);
    const [state, setState] = useState({
        duel: false,
        playerChoice: '',
    });
    const handleChoice = useCallback(function (e) {
        e.preventDefault();
        e.stopPropagation();
        const item = e.target;
        setState({
            duel: true,
            playerChoice: item.dataset.type
        });
    }, []);
    return _jsx(_Fragment, { children: _jsxs("div", { className: "container", children: [_jsx(Header, { logo: "images/logo.svg", score: score.rockScore }), !state.duel ? _jsx(PlayerChoice, { game: "rock", types: listOfChoicesRock, onChoice: handleChoice }) : _jsx(Duel, { game: "rock", winningCases: winningRock, onResult: handleResult, listOfChoices: listOfChoicesRock, choice: state.playerChoice }), result != undefined ? _jsx(Verdict, { result: result, onMenu: onMenu }) : null, _jsx(ModalRules, { rules: "../../images/image-rules.svg" })] }) });
}
