import { makeStyles } from "@material-ui/core";
import { ChangeEventHandler } from "react";

interface IProps {
  className?: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const useStyles = makeStyles(() => ({
  checkBox: {
    visibility: "hidden",
    width: "100%",
  },
  labelText: {
    marginBottom: ".5rem",
    fontSize: "14.4px",
    width: "100%",
    color: "#0746a6",
    alignItems: "center",
  },
}));

export default function ContainerCheckbox(props: IProps) {
  const { className, label, onChange } = props;
  const classes = useStyles();

  return (
    <div className={className}>
      <label>
        <input
          type="radio-button"
          className={classes.checkBox}
          onChange={onChange}
        />
        <span className={classes.labelText}>
          <b>{label}</b>
        </span>
      </label>
    </div>
  );
}
