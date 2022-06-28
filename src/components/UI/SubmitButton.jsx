import classes from "./SubmitButton.module.css";
const SubmitButton = (props) => {
  return (
    <div className={classes.container}>
      <button className={classes.glow} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default SubmitButton;
