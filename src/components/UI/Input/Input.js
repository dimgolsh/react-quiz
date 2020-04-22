import React from "react";
import css from "./Input.module.scss";


function isInvalid({valid,touched,shouldValidate}) {
    return !valid && shouldValidate && touched
  }

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [css.Input];
  const htmlFor = `${inputType}-${Math.random()}`;
    if(isInvalid(props)){
        cls.push(css.invalid);
    }


  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>
      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};

export default Input;
