import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
} from "../actions/actionsTypes";

const initialState = {
  quizes: [],
  loading: true,
  activeQuestion: 0,
  isFinished: false,
  answerState: null,
  results: {},
  quiz: null,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        loading: false,
        quizes: action.quizes,
      };

    case FETCH_QUIZ_SUCCESS:
      console.log("action.quiz", action.quiz);
      return {
        ...state,
        loading: false,
        quiz: action.quiz,
      };

    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };

    case FINISH_QUIZ:
      return {
        ...state,
        isFinished: true,
      };

    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        answerState: null,
        activeQuestion: state.activeQuestion + 1,
      };

    case QUIZ_RETRY:
      return {
        ...state,
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: [],
      };

    default:
      return state;
  }
}
