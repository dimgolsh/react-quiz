import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
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
          <Input label={'emeail'}  />
          <Input label={'Password'}  />
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
