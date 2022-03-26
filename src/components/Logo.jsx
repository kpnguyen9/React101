import logo from "../logo.svg";
import Text from "./Text";

function Logo() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <Text />
    </>
  );
}

export default Logo;
