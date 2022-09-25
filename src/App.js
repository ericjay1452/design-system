import { useState } from "react";
import { PrimaryButton } from "./components/Button/Button";
import { SecondaryButton } from "./components/Button/Button";
import { TertiaryButton } from "./components/Button/Button";
import { GlobalStyles, darkTheme, defaultTheme } from './utils';

// P.S

function App() {
  const [darkMode, setDarkMode ] = useState(false)
  
  return (
    <>
<PrimaryButton modifiers = {["small"]}>Hi</PrimaryButton>
<SecondaryButton modifiers = {"large"}>Hello</SecondaryButton>
<TertiaryButton> World </TertiaryButton>
<GlobalStyles />
</>
  );
}

export default App;
