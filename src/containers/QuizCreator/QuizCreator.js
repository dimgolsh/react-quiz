import React, { Component } from "react";
import css from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { createControl } from "../../form/formFramework";
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
    return (
      <div className={css.QuizCreator}>
        <div>
          <h1>ddd</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            <hr />
            <Button type="primary" onClick={this.addQuestionHandler}>
              add question
            </Button>
            <Button type="success" onClick={this.createQuizHandler}>
              Create test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
