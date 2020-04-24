import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZ_SUCCESS } from "../actions/actionsTypes";

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

    case FETCH_QUIZES_START: return {
        ...state, loading:true
    }

    case FETCH_QUIZES_SUCCESS: return {
        ...state, loading:false,
        quizes: action.quizes
    }

    case FETCH_QUIZ_SUCCESS: 
    console.log('action.quiz', action.quiz);
    return {
        ...state, loading:false,
        quiz: action.quiz
    }

    case FETCH_QUIZES_ERROR: return {
        ...state, loading:false,
        error: action.error
    }


    default:
      return state;
  }
}
