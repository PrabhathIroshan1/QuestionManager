import { LOAD_QUESTION_LIST_REQUEST, LOAD_QUESTION_LIST_LOADING, LOAD_QUESTION_LIST_SUCCESS } from './actionsTypes'

export function loadQuestionListRequest() {
    return{
      type: LOAD_QUESTION_LIST_REQUEST,
    }
  };

export function loadQuestionListLoading(payload) {
    return{
      type: LOAD_QUESTION_LIST_LOADING,
      payload,
    }
  };

export function loadQuestionListSuccess(payload) {
    return{
      type: LOAD_QUESTION_LIST_SUCCESS,
      payload,
    }
  };