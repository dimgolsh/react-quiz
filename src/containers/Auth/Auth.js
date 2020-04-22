import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import css from './Auth.module.scss';
export default class Auth extends Component {
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    sumbitHandler = (e) => {
        e.preventDefault();
    }

  render() {
    return (
      <div className={css.Auth}>
        <h2>Auth</h2>
        <form onSubmit={this.sumbitHandler} className={css.AuthForm}>
          <input type="text" />
          <input type="text" />
          <Button type="success" onClic={this.loginHandler}>
            Enter
          </Button>

          <Button type="primary" onClic={this.registerHandler}>
            Signup
          </Button>
        </form>
      </div>
    );
  }
}
