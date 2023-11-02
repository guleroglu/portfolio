import { useContext } from "react";
import "./ToggleLanguage.css";
import { GlobalContext } from "../../Context/GlobalContext";

const ToggleLanguage = () => {
  const { selectedOption, setSelectedOption } = useContext(GlobalContext);

  const handleLanguage = () => {
    setSelectedOption(!selectedOption);
  };

  return (
    <div>
      <select className="languageSelect" onChange={handleLanguage}>
        <option value="tr">🇹🇷</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default ToggleLanguage;
