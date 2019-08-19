import { takeLatest, put} from 'redux-saga/effects';
import { LOAD_QUESTION_LIST_REQUEST } from '../actions/actionsTypes';
import * as actions from '../actions/actionCreator';
// import * as Api from './services';

export function* loadQuestionListRequest(){
  try{
    yield put(actions.loadQuestionListLoading(true));
    const data = [
        {
            quNumber:1,
            question:"question",
            category:"category",
            state:"state",
            quGroup:"quGroup",
            license:"license",
            status:"status",
            display:"display",
            action:"action"
        }
    ]
    yield put(actions.loadQuestionListSuccess(data))
    yield put(actions.loadQuestionListLoading(false));
  }catch(error){
    yield put(actions.loadQuestionListLoading(false));
  }
};

export default function* rootSaga(){
  yield takeLatest(LOAD_QUESTION_LIST_REQUEST,actions.loadQuestionListRequest);
}
