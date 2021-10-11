import { Typography } from "@material-ui/core";
import { ChangeEventHandler, ReactNode, useState } from "react";

// Assests
import "./Mode.css";
interface IProps {
  className?: string;
  text?: string;
  icon: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Mode(props: IProps) {
  const { className, text, icon, onChange } = props;
  const [checked, setChecked] = useState(false);

  return (
    <div className={className}>
      <span className="modeCheckbox">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <div className="wrapper" onClick={() => setChecked(!checked)}>
          <Typography className="modeText"> {text}</Typography>
          <div className="modeIcon">{icon} </div>
        </div>
      </span>
    </div>
  );
}
