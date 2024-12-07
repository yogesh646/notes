import React from "react";
import SideContent from "./SideContent";
import MainContent from "./MainContent";


const Notes = () => {
  return (
    <div className="notes">
      <SideContent/>
      {/* <Subleft /> */}
      <MainContent />
    </div>
  );
};

export default Notes;
