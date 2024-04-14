import React, { useEffect, useState } from "react";
import profile_pic from "../assets/profile_pic.png";
import kebab_menu from "../assets/kebab_menu.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import ContactSupport from "./ContactSupportModal/ContactSupportModal";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const authData = useSelector((state) => state.auth.loginData);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  function handleOpen() {
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <>
      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          cssClass="w-[23.19%] shrink-0 rounded-2xl bg-white shadow-[10px_20px_30px_0px_rgba(0,0,0,0.10)]"
        >
          <ContactSupport onClose={handleClose} />
        </Modal>
      )}
      <div className="flex flex-col justify-center items-end py-1.5 px-5 bg-white border-solid shadow-sm border-b-[0.8px] border-b-slate-200 border-b-opacity-80 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5  max-md:mr-2">
          <div className="flex flex-row justify-center items-center aspect-square">
            <img
              loading="lazy"
              src={profile_pic}
              className="w-8 rounded-full aspect-square bg-gray-500"
            />
          </div>
          <div className="flex justify-center items-center font-[Poppins] font-semibold">
            {authData ? authData.username : "John Doe"}
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              type="button"
            >
              <img
                loading="lazy"
                src={kebab_menu}
                className="w-8 h-7 rounded-full aspect-square mt-2"
              />
            </button>
            {/* Dropdown menu  */}
            {dropdownOpen && (
              <div
                id="dropdown"
                className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        setDropdownOpen(false);
                        handleOpen();
                      }}
                    >
                      Contact Support
                    </button>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={logOut}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
