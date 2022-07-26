import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useReducer } from 'react';
import { Menu } from './UI/menu';
import { reducerHome } from './hooks/reducer';
import './App.css';
function App() {
    const [state, dispatch] = useReducer(reducerHome, {
        content: Menu
    });
    const [score, setScore] = useState({ rockScore: 0, lizardScore: 0 });
    const { content: Content } = state;
    return _jsx(_Fragment, { children: _jsx(Content, { onMenu: dispatch, onScore: setScore, score: score }) });
}
export default App;
