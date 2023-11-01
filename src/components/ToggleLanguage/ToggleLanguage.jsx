import "./ToggleLanguage.css";

const ToggleLanguage = () => {
  return (
    <div>
      <select className="languageSelect">
        <option value="tr">tr</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};

export default ToggleLanguage;
