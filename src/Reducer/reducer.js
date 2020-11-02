import {
  updateObject,
  checkForPasswordMatch,
  checkValidity,
} from '../shared/utility';

const changeInputValue = (state, action) => {
  const updateForm = updateObject(state.formData[action.id], {
    value: action.payload,
    valid:
      action.id !== 'confirmPassword'
        ? checkValidity(action.payload, state.formData[action.id].validation)
        : checkForPasswordMatch(state.formData.password.value, action.payload),
    touched: true,
  });
  const updateStateForm = updateObject(state.formData, {
    [action.id]: updateForm,
  });
  const updateState = updateObject(state, { formData: updateStateForm });
  return updateState;
};

const blured = (state, action) => {
  const updatedBlur = updateObject(state.formData[action.id], {
    touched: false,
  });
  const updatedForm = updateObject(state.formData, {
    [action.id]: updatedBlur,
  });
  const updatedState = updateObject(state, { formData: updatedForm });
  return updatedState;
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'changeInputValue':
      return changeInputValue(state, action);
    case 'blured':
      return blured(state, action);
    default:
      throw new Error('WTF?!');
  }
}
