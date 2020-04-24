import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCESS,
} from "./actionsTypes";


export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const res = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(res.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test ${index + 1}`,
        });
      });
      dispatch(fetchQuizesSuccess(quizes));
    } catch (error) {
      dispatch(fetchQuizesError(error));
    }
  };
}
export function fetchQuizById(id) {
   

  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const res = await axios.get(`/quizes/${id}.json`);
      const quiz = res.data;
      console.log('fetchQuizById',quiz);
      dispatch(fetchQuizSuccess(quiz));
    } catch (error) {
      console.error(error);
    }
  };
}
export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  };
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes,
  };
}
export function fetchQuizesError(error) {
  return {
    type: FETCH_QUIZES_ERROR,
    error,
  };
}

export function fetchQuizSuccess(quiz) {
    console.log('fetchQuizSuccess',quiz);
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
}
