import { useReducer } from "react";
import { LizardGame } from "../UI/LizarduGame";
import { Menu } from '../UI/menu';
import { RockGame } from "../UI/RockGame";
export var MenuAction;
(function (MenuAction) {
    MenuAction["home"] = "home";
    MenuAction["rock"] = "rock";
    MenuAction["lizard"] = "lizard";
})(MenuAction || (MenuAction = {}));
function useHome() {
    const [state, dispatch] = useReducer(reducerHome, {
        content: Menu
    });
    return {
        state: state,
        onMenu: dispatch
    };
}
export function reducerHome(state, action) {
    switch (action.type) {
        case MenuAction.home:
            return { ...state, content: (Menu) };
        case MenuAction.rock:
            return { content: RockGame };
        case MenuAction.lizard:
            return { content: LizardGame };
        default:
            return state;
    }
}
