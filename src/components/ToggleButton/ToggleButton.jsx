import { useContext } from "react";
import Toggle from "react-toggle";
import "./ToggleButton.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { GlobalContext } from "../../Context/GlobalContext";

const ToggleButton = () => {
  // const [darkMode, setDarkMode] = useState(true);
  const { isToggle, setIsToggle } = useContext(GlobalContext);

  const handleToggleMode = () => {
    setIsToggle(!isToggle);
    const body = document.querySelector(".body");
    console.log(body);
    if (!isToggle) {
      body.classList.remove("light");
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  };

  return (
    <div>
      <label>
        <Toggle
          className="toggle-button"
          defaultChecked={isToggle}
          icons={{
            checked: <FaMoon size={10} color="white" />,
            unchecked: <FaSun size={10} />,
          }}
          onChange={handleToggleMode}
        />
      </label>
    </div>
  );
};

export default ToggleButton;
