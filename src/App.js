import React, { useState ,useEffect} from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";

function App() {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  const [width,setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => {
      window.removeEventListener('scroll', scrollProgress);
    };
  }, []);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;
    setWidth(scrolled);
  }

  const progressContainerStyle = {
    // background: theme.name === "light" ? "#f6fff8" : "#1e3548",
    // boxShadow: `0 2px 4px ${
    //   theme.name === "light" ? "#f6fff8" : "#1e3548"
    // }`,
    height: "5px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 99,
  };

  const progressBarStyle = {
    height: "5px",
    background: "#00BFA6",
    width: width,
  };
  
  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div style={progressContainerStyle}>
          <div  style={progressBarStyle} />
        </div>
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].text}
              ringSize={30}
              noRing={false}s
              transitionTime={50}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
