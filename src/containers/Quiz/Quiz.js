import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import { fetchQuizById, quizAnswerClick, retryQuiz } from "../../store/actions/quiz";

class Quiz extends React.Component {
  
  componentDidMount() {
    console.log('propos', this.props);
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount(){
    this.props.retryQuiz()
  }


  render() {
    console.log(this.props);
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответье на все вопросы</h1>
          {this.props.loading ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.props.retryQuiz}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quiz[this.props.activeQuestion].answers}
              question={this.props.quiz[this.props.activeQuestion].question}
              onAnswerClick={this.props.quizAnswerClick}
              quizLenght={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}

      
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state',state);
  return {
    loading: state.quiz.loading,
    activeQuestion: state.quiz.activeQuestion,
    isFinished: state.quiz.isFinished,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    results: state.quiz.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
