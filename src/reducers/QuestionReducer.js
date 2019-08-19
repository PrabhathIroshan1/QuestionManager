import { fromJS } from 'immutable';
import { LOAD_QUESTION_LIST_LOADING, LOAD_QUESTION_LIST_SUCCESS } from '../actions/actionsTypes'

export const initialState = fromJS({
    qList:[]
  });

function QuestionReducer (state=initialState, action) {
    switch (action.type){
        case LOAD_QUESTION_LIST_LOADING:
            return state.set('loading', action.payload);
        case LOAD_QUESTION_LIST_SUCCESS:
            return state.set('qList', action.payload);
        default:
        return state
    }
}

export default QuestionReducer