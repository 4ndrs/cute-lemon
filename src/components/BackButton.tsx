import { ReactComponent as BackIcon } from "../assets/back-icon.svg";

import "./BackButton.css";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const BackButton = ({ children, ...props }: ButtonProps) => (
  <button {...props} className="back-button">
    <BackIcon />
  </button>
);

export default BackButton;
