import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import css from "./Auth.module.scss";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
  state = {
    isFormvalid: false,
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

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.trim().length >= validation.minLength && isValid;
    }
    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormvalid = true;
    Object.keys(formControls).forEach((name) => {
      isFormvalid = formControls[name].valid && isFormvalid;
    });

    this.setState({
      formControls,
      isFormvalid,
    });
  };

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
            errorMessage={control.errorMessage}
            onChange={(event) => this.onChangeHandler(event, controlName)}
          />
        );
      }
    );

    return inpupts;
  }
  render() {
    return (
      <div className={css.Auth}>
        <h2>Auth</h2>
        <form onSubmit={this.sumbitHandler} className={css.AuthForm}>
          {this.renderInputs()}
          <Input label={"emeail"} />
          <Button
            type="success"
            onClick={this.loginHandler}
            disabled={!this.state.isFormvalid}
          >
            Enter
          </Button>

          <Button
            type="primary"
            onClick={this.registerHandler}
            disabled={!this.state.isFormvalid}
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}
