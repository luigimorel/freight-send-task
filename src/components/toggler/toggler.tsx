import { ChangeEventHandler, useState } from "react";

// Assets
import "./Toggler.css";

interface IProps {
  className?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Toggler(props: IProps) {
  const { className, label, onChange } = props;
  const [checked, setChecked] = useState(false);

  return (
    <div className={className}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="wrapper" onClick={() => setChecked(!checked)}>
        <span className="knob"></span>
        <>{label}</>
      </span>
    </div>
  );
}
