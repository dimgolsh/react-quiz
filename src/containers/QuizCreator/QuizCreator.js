import React, { Component } from "react";
import css from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class QuizCreator extends Component {
  render() {
    return (
      <div className={css.QuizCreator}>
        <div>
          <h1>ddd</h1>
          <form onSubmit={this.submitHandler}>
            <Input type='text'/>
            <hr/>
            <Input type='text'/>
            <Input type='text'/>
            <Input type='text'/>
            <Input type='text'/>
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
