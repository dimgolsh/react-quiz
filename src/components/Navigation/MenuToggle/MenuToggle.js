import React from "react";
import css from './Menu.module.scss';

const MenuToggle = (props) => {
  const cls = [
      css.MenuToggle
  ];
  return (
    <h2 

    className={cls.join(" ")} 
    onClick={props.onToggle}
    >
      Menu
    </h2>
  );
};
export default MenuToggle;