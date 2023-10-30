import { useContext } from "react";
import "./Home.css";
import { GlobalContext } from "../../Context/GlobalContext";
import ContactButton from "../ContactButton/ContactButton";

const Home = () => {
  const { isHovered, isToggle } = useContext(GlobalContext);

  const hoveredStyle = isHovered ? { color: "#4ADE80" } : {};

  return (
    <div className="home-wrapper">
      <div className="home-top">
        <span className={`home-intro ${!isToggle ? "light" : ""}`}>
          Hi 👋, I am
        </span>
        <h1 className={`home-title ${!isToggle ? "light" : ""}`}>Omer Faruk</h1>
        <div className="home-info-top">
          <span
            style={hoveredStyle}
            className={`htmltag ${!isToggle ? "light" : ""}`}
          >
            &lt;
          </span>
          <h3
            className={`home-info-subtitle ${!isToggle ? "light" : ""}`}
            style={hoveredStyle}
          >
            Back-end Developer
          </h3>
          <span
            style={hoveredStyle}
            className={`htmltag ${!isToggle ? "light" : ""}`}
          >
            /&gt;
          </span>
        </div>
      </div>
      <div className="home-bottom">
        <p className={`home-info-bottom ${!isToggle ? "light" : ""}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          quibusdam nesciunt, recusandae dolore nostrum hic suscipit, aliquid
          quidem quia libero esse dicta facere ad porro consequuntur dolor
          voluptate ab tempora. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut minima distinctio expedita corrupti, temporibus
          aspernatur qui numquam eos? Ipsum veniam omnis voluptatem recusandae
          nemo neque blanditiis odit nisi nulla tenetur.
        </p>
        <ContactButton />
      </div>
    </div>
  );
};

export default Home;
