import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import css from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  { to: "/", label: "Spisok", exact: true },
  { to: "/auth", label: "Auth", exact: false },
  { to: "/quiz-creator", label: "Creatr", exact: false },
];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={css.active}
            onClick={this.props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = [css.Drawer];
    if (!this.props.isOpen) {
      cls.push(css.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
      </>
    );
  }
}
export default Drawer;
