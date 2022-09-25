import { PrimaryButton } from "./components/Button/Button";
import { SecondaryButton } from "./components/Button/Button";
import { TertiaryButton } from "./components/Button/Button";
import { GlobalStyles } from './utils';

// P.S

function App() {
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
