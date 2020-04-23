import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import css from "./Auth.module.scss";
export default class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "email",
        errorMessage: "ddd",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },

      password: {},
    },
  };
  loginHandler = () => {};

  registerHandler = () => {};

  sumbitHandler = (e) => {
    e.preventDefault();
  };

  onChangeHandler = (event, controlName) => {
    console.log()
  }

  renderInputs() {
    const inpupts = Object.keys(this.state.formControls).map(
      (controlName, index) => {
        const control = this.state.formControls[controlName];
        return (
          <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage ={ control.errorMessage}
            onChange={event => this.onChangeHandler(event,controlName)}
          />
        );
      }
    );
  }
  render() {
    return (
      <div className={css.Auth}>
        <h2>Auth</h2>
        <form onSubmit={this.sumbitHandler} className={css.AuthForm}>
          {this.renderInputs()}
          <Input label={"emeail"} />
          <Input label={"Password"} />
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
