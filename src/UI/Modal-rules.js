import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
export function ModalRules({ rules }) {
    const [show, setShow] = useState(false);
    const showModal = useCallback((e) => {
        e.preventDefault;
        setShow(true);
    }, []);
    const CloseModal = useCallback((e) => {
        e.preventDefault;
        setShow(false);
    }, []);
    return _jsxs("footer", { children: [_jsx("button", { className: "btn", id: "rules", onClick: showModal, children: "Rules" }), show ? _jsx(Modal, { rules: rules, onClose: CloseModal }) : null] });
}
function Modal({ onClose, rules }) {
    return createPortal(_jsxs("div", { className: "modal", children: [_jsx("h1", { children: "Rules" }), _jsx("img", { src: rules, alt: "rules of the game" }), _jsx("img", { src: "../../images/icon-close.svg", alt: "close button", onClick: onClose })] }), document.body);
}
