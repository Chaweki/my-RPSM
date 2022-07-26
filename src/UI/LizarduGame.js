import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { PlayerChoice } from "./item";
import { Header } from "./Header";
import { ModalRules } from "./Modal-rules";
import { Duel, Verdict } from "./duel";
export function LizardGame({ onMenu, onScore, score }) {
    const listOfChoicesLizard = ['scissors', 'spock', 'paper', 'lizard', 'rock'];
    const winningLizard = {
        'rock': ['scissors', 'lizard'],
        'scissors': ['paper', 'scissors'],
        'paper': ['rock', 'spock'],
        'spock': ['scissors', 'rock'],
        'lizard': ['spock', 'paper'],
    };
    const [result, setResult] = useState(undefined);
    const handleResult = useCallback(function (result) {
        setResult(result);
        let num = 0;
        if (result != undefined) {
            if (!result) {
                if (score.lizardScore === 0) {
                    num = score.lizardScore;
                }
                else {
                    num = score.lizardScore - 1;
                }
            }
            else {
                num = score.lizardScore + 1;
            }
            onScore(s => ({ ...s, lizardScore: num }));
        }
    }, []);
    const [state, setState] = useState({
        duel: false,
        playerChoice: '',
    });
    const handleChoice = useCallback(function (e) {
        e.preventDefault();
        e.stopPropagation();
        setState({
            duel: true,
            playerChoice: e.target.dataset.type
        });
    }, []);
    return _jsx(_Fragment, { children: _jsxs("div", { className: "container", children: [_jsx(Header, { logo: "images\\logo-bonus.svg", score: score.lizardScore }), !state.duel ? _jsx(PlayerChoice, { game: "lizard", types: listOfChoicesLizard, onChoice: handleChoice }) : _jsx(Duel, { game: "lizard", winningCases: winningLizard, onResult: handleResult, listOfChoices: listOfChoicesLizard, choice: state.playerChoice }), result != undefined ? _jsx(Verdict, { result: result, onMenu: onMenu }) : null, _jsx(ModalRules, { rules: '../../images/image-rules-bonus.svg' })] }) });
}
