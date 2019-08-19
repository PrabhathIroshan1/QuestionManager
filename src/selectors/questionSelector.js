import { createSelector } from 'reselect';

const selectQuestionDomain = state => state.get('qList');

const makeSelectQuestion = () =>
  createSelector(
    selectQuestionDomain,
    questionState =>
      questionState ? questionState.get('qList') : [] 
  );

const makeSelectQuestionLoading = () =>
  createSelector(
    selectQuestionDomain,
    questionState =>
      questionState ? questionState.get('loading') : false
  );

export { 
  makeSelectQuestion,
  makeSelectQuestionLoading,
};
