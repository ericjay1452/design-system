import { useState } from "react";
// import { PrimaryButton } from "./components/Button/Button";
// import { SecondaryButton } from "./components/Button/Button";
// import { TertiaryButton } from "./components/Button/Button";
import { SignUpModal } from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, defaultTheme } from './utils';
import { useSpring, animated } from "react-spring"

// P.S

function App() {
  const [darkMode, setDarkMode ] = useState(false)

  const transit = useSpring({
    opacity : darkMode ? 0 : 1,
    background : darkMode ? "black" : "#fff",
    color : darkMode ? "yellow" : "black",
    
  })

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : defaultTheme }>

      <animated.span style={transit}>
      <button onClick={ ()=>setDarkMode(!darkMode)
      // Todo, i want to do automatic switching of mode on Button click
        // setTimeout( ()=> {setDarkMode(!darkMode)}, 9000)
      }
         style={{
        padding : "0.75rem",
        color : `${defaultTheme.textColorOnPrimary}`,
        border : "none",
        outline : "none",
        background : `${darkTheme.backgroundColors.dark}`,
        cursor : "pointer",
        margin : "1rem"
      }}>{darkMode ? " Dark " : "Default"} </button>
      </animated.span>

      <div style={{
        background : darkMode ? defaultTheme.textColorOnPrimary : darkTheme.backgroundColors.dark,
        width : "100vw",
        height : "100vh",
        display : "flex",
        alignItems: "center",
        justifyContent : "space-around",
        transition : ".9s background linear"
      }}>
{/* <PrimaryButton modifiers = {["small"]}>Hi</PrimaryButton>
<SecondaryButton modifiers = {"large"}>Hello</SecondaryButton>
<TertiaryButton> World </TertiaryButton> */}

{/* <SignUpModal /> */}
<GlobalStyles />
</div>
</ThemeProvider>
  );
}

export default App;
