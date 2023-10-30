import { useContext } from "react";
import "./WhoAmI.css";
import { GlobalContext } from "../../Context/GlobalContext";

const WhoAmI = () => {
  const { isToggle } = useContext(GlobalContext);
  return (
    <div className="whoami-wrapper">
      <h1 className="page-title">whoami</h1>
      <p className={`whoami-text ${!isToggle ? "light" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        cupiditate vel distinctio, ab impedit tempore placeat vitae recusandae
        neque sed! Autem itaque voluptate cum dolor optio corrupti, ad dolorem
        similique? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque, aperiam possimus alias itaque sequi modi delectus est odio
        accusantium voluptatibus provident, qui repellat consectetur tempore
        neque nobis quod optio saepe.
      </p>
      <div className="whoami-hobbies">
        <h3 className="whoami-subtitle">
          What I like to do and my hobbies are:
        </h3>
        <p className={`whoami-text ${!isToggle ? "light" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aliquid vero tempora necessitatibus numquam molestiae laborum atque
          eum aperiam. Nesciunt, exercitationem suscipit iure dolore doloribus
          nobis tenetur dolor ipsum at.lorem Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sint, perspiciatis rem! Est neque, error
          praesentium eveniet ipsa molestiae. Aut quibusdam facere nam nobis
          obcaecati magni qui voluptates laboriosam veritatis reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
