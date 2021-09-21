import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//React spring
import { useSpring, animated } from "react-spring";

// core components
import styles from "assets/jss/material-kit-react/components/parallaxStyle.js";
import beeOneImg from "../../assets/img/beeOne.webp";
import beeTwooImg from "../../assets/img/beeTwoo.webp";
import beeThreeImg from "../../assets/img/beeThree.webp";
import beeFourImg from "../../assets/img/beeFour.webp";
const useStyles = makeStyles(styles);

export default function Parallax(props) {
  //React spring
  const styles = useSpring({
    loop: { reverse: true },
    config: { duration: 1300 },
    from: { y: 20, x: 0 },
    to: { y: 50, x: 20 },
  });

  const beeOne = useSpring({
    loop: { reverse: true },
    config: { duration: 1600 },
    from: { y: 50, x: 40 },
    to: { y: 0, x: 10 },
  });

  const beeTwoo = useSpring({
    loop: { reverse: true },
    config: { duration: 1800 },
    from: { y: 3, x: 80 },
    to: { y: 40, x: 9 },
  });

  const beeThree = useSpring({
    loop: { reverse: true },
    config: { duration: 1700 },
    from: { y: 20, x: 0 },
    to: { y: 50, x: -9 },
  });

  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      <animated.div
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          marginLeft: "63%",
          marginTop: window.innerWidth >= 600 ? "-40%" : "-130%",
          //backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      >
        <img
          src={beeOneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>

      <animated.div
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          marginLeft: window.innerWidth >= 600 ? "85%" : "120%",
          marginTop: "-30%",
          //backgroundColor: window.innerWidth >= 400 ? "red" : "white",
          borderRadius: 16,
          ...beeOne,
        }}
      >
        <img
          src={beeTwooImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>

      <animated.div
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          marginLeft: window.innerWidth >= 600 ? "32%" : "110%",
          marginTop: "-30%",
          // backgroundColor: "blue",
          borderRadius: 16,
          ...beeTwoo,
        }}
      >
        <img
          src={beeThreeImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>

      <animated.div
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          marginLeft: window.innerWidth >= 600 ? "45%" : "60%",
          marginTop: window.innerWidth >= 600 ? "13%" : "60%",
          //backgroundColor: "purple",
          borderRadius: 16,
          ...beeThree,
        }}
      >
        <img
          src={beeFourImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>

      <animated.div
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          marginLeft: "5%",
          marginTop: window.innerWidth >= 600 ? "-5%" : "-100%",
          // backgroundColor: "green",
          borderRadius: 16,
          ...styles,
        }}
      >
        <img
          src={beeOneImg}
          alt="Paris"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </animated.div>

      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
