import "./Skills.css";
import skillsData from "../../data/skillsData";
import SkillCard from "../SkillCard/SkillCard";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Skills = () => {
  const { isHovered, isToggle } = useContext(GlobalContext);
  const hoveredStyle = isHovered ? { color: "#4ade80" } : {};

  return (
    <div className="skills-wrapper">
      <h1 className="page-title">skills</h1>
      <div className="skills-subtitle">
        <span
          style={hoveredStyle}
          className={`htmltag ${!isToggle ? "light" : ""}`}
        >
          &lt;
        </span>
        <p
          style={hoveredStyle}
          className={`skills-subtitle ${!isToggle ? "light" : ""}`}
        >
          skills i know and have mastered
        </p>
        <span
          style={hoveredStyle}
          className={`htmltag ${!isToggle ? "light" : ""}`}
        >
          /&gt;
        </span>
      </div>
      <ul className="skills-cards">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
