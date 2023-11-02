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
        <option value="tr">&#x1F1F9;&#x1F1F7;</option>
        <option value="en">&#x1F1EC;&#x1F1E7;</option>
      </select>
    </div>
  );
};

export default ToggleLanguage;
