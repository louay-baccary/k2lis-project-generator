import React from "react";
import NormalButton from "../../components/NormalButton.jsx/NormalButton";
import NormalTitle from "../../components/NormalTitle.jsx/NormalTitle";

function LandingPage() {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <span>This is the landing page</span>
      <NormalButton />
      <NormalTitle />
    </div>
  );
}

export default LandingPage;
