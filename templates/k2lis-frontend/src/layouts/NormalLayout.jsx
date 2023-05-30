import React, { useState } from "react";
import PropTypes from "prop-types";
import NavigationBar from "../coreUI/NavigationBar";


function NormalLayout({ children }) {
  const [show, setShow] = useState(true);
  return (
    <div className="flex items-start justify-between w-full h-full ">
      <div
        className={
          show
            ? "hidden lg:flex h-[100vh] p-10 bg-white   "
            : " lg:flex h-[100vh] p-10 bg-white      "
        }
      >
        <NavigationBar />
      </div>

      <main className="w-full h-full min-h-screen bg-[#f2f7ff] p-[1rem] ">
        <div
          className="  flex flex-col justify-end pr-[5%] lg:hidden"
          onClick={() => setShow(!show)}
        >
          Menu Button
        </div>
        {children}
      </main>
    </div>
  );
}

NormalLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NormalLayout;
