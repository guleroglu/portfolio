import { useContext } from "react";
import "./SkillCard.css";
import { GlobalContext } from "../../Context/GlobalContext";

const SkillCard = ({ skill }) => {
  const { setIsHovered, isToggle } = useContext(GlobalContext);
  return (
    <li
      className={`skills-cards-item ${!isToggle ? "light" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="skill-logo" src={skill.image} alt="" />
      <span className={`skill-title ${!isToggle ? "light" : ""}`}>
        {skill.language}
      </span>
    </li>
  );
};

export default SkillCard;
