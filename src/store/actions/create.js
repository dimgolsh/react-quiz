import { CREATE_QUIZ_QUESTION, RESET_QUIZ_QUESTION } from "./actionsTypes";
import axios from "../../axios/axios-quiz";

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    console.log(getState().create.quiz)
    //debugger
    await axios.post("/quizes.json", getState().create.quiz);
    dispatch(resetQuizQuestion());
  };
}

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item,
  };
}

export function resetQuizQuestion() {
  return {
    type: RESET_QUIZ_QUESTION,
  };
}
