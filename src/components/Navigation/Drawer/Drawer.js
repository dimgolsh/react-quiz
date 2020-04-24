import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import css from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component {
  renderLinks(links) {
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

    const links = [
      { to: "/", label: "Spisok", exact: true },
    ];

    if (this.props.isAuthenticated) {
      links.push({ to: "/quiz-creator", label: "Creatr", exact: false });
      links.push({ to: "/logout", label: "Exit", exact: false });
    } else {
      links.push({ to: "/auth", label: "Auth", exact: false });
    }
    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
      </>
    );
  }
}
export default Drawer;
