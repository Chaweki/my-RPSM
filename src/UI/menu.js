import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { Item } from './item';
import { MenuAction } from '../hooks/reducer';
import { Animate } from "../utils/animation";
export function Menu({ onMenu }) {
    const [show, setShow] = useState(true);
    const [lizard, setLizard] = useState(true);
    const [rock, setRock] = useState(true);
    const duration = 1000;
    const hiddenRock = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(false);
        setRock(false);
    }, [setShow]);
    const hiddenLizard = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(false);
        setLizard(false);
    }, [setShow]);
    const HandleRock = useEffect(() => {
        if (onMenu && !rock) {
            const timer = setTimeout(() => {
                onMenu({ type: MenuAction.rock });
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [rock]);
    const HandleLizard = useEffect(() => {
        if (onMenu && !lizard) {
            const timer = setTimeout(() => {
                onMenu({ type: MenuAction.lizard });
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [lizard]);
    return _jsx("div", { className: "menu", children: _jsxs(Animate, { visible: show, duration: duration, children: [_jsx("h1", { className: "welcome", children: "Welcome choose your game!" }), _jsxs("div", { className: "menu-choice", children: [_jsx(Item, { type: 'rock-menu', onClick: hiddenRock }), _jsx(Item, { type: 'lizard-menu', onClick: hiddenLizard })] })] }) });
}
