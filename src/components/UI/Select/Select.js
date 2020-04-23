import React from "react";
import css from "./Select.module.scss";

const Select = (props) => {
  const htmlfor = `${props.label}-${Math.random()}`;
  return (
    <div className={css.Select}>
      <label htmlFor={htmlfor}>{props.label}</label>
      <select
        id={htmlfor}
        name=""
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
