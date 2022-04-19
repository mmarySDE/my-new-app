import React from "react";
import skills from "./data/skills";
import "./skills.scss";
export default () => {
  return (
    <div className="skills">
      <div className="skill">SKILLS</div>
      <div className="parent">
        <div className="grid-item one">{skills[0].toUpperCase()}</div>
        <div className="grid-item two">{skills[1].toUpperCase()}</div>
        <div className="grid-item five">{skills[4].toUpperCase()}</div>
        <div className="grid-item four">{skills[3].toUpperCase()}</div>
        <div className="grid-item three">{skills[2].toUpperCase()}</div>

        <div className="grid-item a">4 </div>
        <div className="grid-item b">4 </div>
        <div className="grid-item c">4 </div>
        <div className="grid-item d">3 </div>
        <div className="grid-item e">2 </div>
      </div>
      <div className="year">YEARS</div>
    </div>
  );
};
