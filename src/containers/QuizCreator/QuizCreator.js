import React, { Component } from "react";
import css from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import { createControl, validate, validateForm} from "../../form/formFramework";
import Auxiliry from "../../hoc/Auxiliry/Auxiliry";
function createOptionControl(number) {
  return createControl(
    {
      label: `num ${number}`,
      errorMessage: "dddfdf",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "ddddd",
      },
      {
        required: true,
      }
    ),

    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}
export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls(),
  };

  selectChangeHandler = event =>{
      this.setState({
          rightAnswerId: +event.target.value
      })
  }

  submitHandler = event =>{
    event.preventDefault();
  }
  
  addQuestionHandler = event => {
    event.preventDefault();
  }
  changeHandler = (value, controlName) => {
      const formControls = {...this.state.formControls}
      const control = {...formControls[controlName]}

      control.touched = true
      control.value = value
      control.valid = validate(control.vaule, control.validation)


  }
  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliry key= {controlName + index} >
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Auxiliry>
      );
    });
  }
  render() {
      const select = <Select
      label='Выбери правильный ответ'
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={
          [
              {text:'1' , value:1},
              {text:'2' , value:2},
              {text:'3' , value:3},
              {text:'1' , value:4},
              {text:'1' , value:5},
          ]
      }
      />
    return (
      <div className={css.QuizCreator}>
        <div>
          <h1>ddd</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}
            {select}

            <hr />
            <Button 
            type="primary" 
            onClick={this.addQuestionHandler}
            disabled ={!this.state.isFormValid}
            >
              add question
            </Button>
            <Button
             type="success"
            onClick={this.createQuizHandler}
            disabled ={this.state.quiz.length == 0}
              >

              Create test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
