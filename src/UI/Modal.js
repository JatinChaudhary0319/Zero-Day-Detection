import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, cssClass }) => {
  const dialog = useRef(null);

  useEffect(() => {
    const modal = dialog.current;

    if (modal === null) {
      return;
    }

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={cssClass}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
