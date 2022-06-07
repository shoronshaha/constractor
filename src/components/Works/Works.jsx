import React, { useContext } from "react";
import "./Works.css";
import Mongo from "../../img/mongo.png";
import Ex from "../../img/ex.png";
import JS from "../../img/js.png";
import Rect from "../../img/react.png";
import Node from "../../img/node (1).png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Skills</span>
          <span>
            I have good Knowledge for those skills...
            <br></br>I do lots of project by those skills 
         
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img style={{width:"120px"}}  src={Ex} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"120px"}} src={Mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"120px"}}  src={JS} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img style={{width:"120px"}}  src={Rect} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"120px"}}  src={Node} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
