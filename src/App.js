import { PrimaryButton } from "./components/Button/Button";
import { SecondaryButton } from "./components/Button/Button";
import { TertiaryButton } from "./components/Button/Button";
import { GlobalStyles } from './utils';

function App() {
  return (
    <>
<PrimaryButton>Hi</PrimaryButton>
<SecondaryButton>Hello</SecondaryButton>
<TertiaryButton> World </TertiaryButton>
<GlobalStyles />
</>
  );
}

export default App;
