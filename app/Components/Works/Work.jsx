import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";
import project5 from "../../../public/project5.jpg";
import project6 from "../../../public/project6.jpg";

import "./Work.css";
const Work = () => {
  return (
    <div className="works-container">
      <h1>Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item">
          <img src={project1} alt="" />
        </div>
        <div className="works-item">
          <img src={project2} alt="" />
        </div>
        <div className="works-items">
          <img src={project3} alt="" />
        </div>
        <div className="works-items">
          <img src={project4} alt="" />
        </div>
        <div className="works-items">
          <img src={project5} alt="" />
        </div>
        <div className="works-items">
          <img src={project6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
