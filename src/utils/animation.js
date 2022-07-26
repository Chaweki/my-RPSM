import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
var STATE;
(function (STATE) {
    STATE[STATE["ENTERING"] = 0] = "ENTERING";
    STATE[STATE["VISIBLE"] = 1] = "VISIBLE";
    STATE[STATE["LEAVING"] = 2] = "LEAVING";
    STATE[STATE["HIDDEN"] = 3] = "HIDDEN";
})(STATE || (STATE = {}));
export function Animate({ children, duration = 1000, visible, EnterClass = 'fadein', ExitClass = 'fadeout', onVisible }) {
    const [state, setState] = useState(visible ? STATE.VISIBLE : STATE.HIDDEN);
    const className = state === STATE.VISIBLE ? EnterClass : ExitClass;
    useEffect(() => {
        if (!visible) {
            setState(STATE.LEAVING);
        }
        else {
            setState((s) => s === STATE.HIDDEN ? STATE.ENTERING : STATE.VISIBLE);
        }
    }, [visible]);
    useEffect(() => {
        if (state === STATE.LEAVING) {
            const timer = setTimeout(() => {
                setState(STATE.HIDDEN);
            }, duration);
            return () => { clearTimeout(timer); };
        }
        else if (state === STATE.ENTERING) {
            document.body.offsetHeight;
            setState(STATE.VISIBLE);
        }
    }, [state]);
    if (state === STATE.HIDDEN) {
        return null;
    }
    return _jsx(_Fragment, { children: React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { ...child.props,
                    className: `${child.props.className} ${className}`
                });
            }
        }) });
}
