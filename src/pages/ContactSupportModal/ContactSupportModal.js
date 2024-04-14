import close from "../../assets/close-circle.svg";

import React from "react";

const ContactSupport = ({ onClose }) => {
  console.log("not opening");
  return (
    <>
      <div className="flex px-[11px] py-[21px] font-[Poppins]">
        <div className="flex flex-col items-center shrink-0 justify-center gap-6 w-full">
          <div className="flex w-full justify-end" onClick={onClose}>
            <img src={close} alt="close circle logo" />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center w-full p-5">
            <div className="flex flex-row w-full text-black">
              <p className="flex flex-row font-semibold text-xl">
                {"Email : "}
              </p>
              <span className="flex flex-row font-normal text-xl">
                &nbsp;abhijeetL@C.com
              </span>
            </div>
            <div className="flex flex-row w-full text-black">
              <p className="flex flex-row font-semibold text-xl">
                {"Phone : "}
              </p>
              <span className="flex flex-row font-normal text-xl">
                &nbsp;XXXXXX5689
              </span>
            </div>
            <div className="flex flex-row w-full text-black">
              <p className="flex flex-row font-semibold text-xl">
                {"Address : "}
              </p>
              <span className="flex flex-row font-normal text-xl">
                &nbsp;Greater Noida
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSupport;
