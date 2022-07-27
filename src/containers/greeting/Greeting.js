import React from "react";
import Typewriter from "typewriter-effect";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });


  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                {"."}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span style={{ color: theme.accentColor, fontSize: "110%" }}>
                  <Typewriter
                    options={{
                      //strings: [`I'm ${greeting.full_name}.${" "}`],
                      autoStart: true,
                      //delay: 1000,
                      loop: true,
                      //deleteSpeed: 800,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .typeString(`<span style="color:${theme.secondaryText} ">I'm ..</span>`)
                        .pauseFor(300)
                        .deleteChars(2)
                        .typeString(
                          `<strong><span style="color:${theme.accentColor}">${greeting.full_name}</strong>.</span>`
                        )
                        .pauseFor(300)
                        .typeString(`<br/><span style="color:${theme.secondaryText}">Full Stack Developer</span>,<span style="color:${theme.accentColor}"> <strong>Web UI</strong></span>`)
                        .pauseFor(300)
                        .deleteChars(3)
                        .typeString(
                          `<strong><span style="color: ${theme.accentColor}">/Mobile UI</span><span style="color: #2ab0ee;"><br/>Learner 😀</span></strong>`
                       )
                        .pauseFor(1000)
                        .start();
                    }}
                  />
                </span>
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
