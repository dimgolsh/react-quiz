import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import css from "./Auth.module.scss";
import is from 'is_js';
import { connect } from "react-redux";
import { auth } from "../../store/actions/auth";



class Auth extends Component {
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
  loginHandler = async () => {

    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    )
  }

  registerHandler = async () => {

    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    )

 
  }

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
      isValid = is.email(value) && isValid;
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
const mapDispatchToProps = (dispatch) =>{

  return {
    auth: (email,password, isLogin) => dispatch(auth(email,password,isLogin))
  }
}

export default connect(null,mapDispatchToProps)(Auth)