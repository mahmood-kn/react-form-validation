import React, { useState } from 'react';
import classes from './Layout.module.css';
import Inputs from '../../components/Input/Inputs';
import reducer from '../../Reducer/reducer';
import initialState from '../../Reducer/initialState';

function Layout() {
  const [formArray, setFormArray] = useState([]);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    let formArrayTemp = [];
    for (let key in state.formData) {
      formArrayTemp.push({
        id: key,
        config: state.formData[key],
      });
    }
    setFormArray(formArrayTemp);
  }, [state]);

  const inputChanged = (e, id) => {
    dispatch({
      type: 'changeInputValue',
      payload: e?.target?.value,
      id,
    });
  };
  const formValidation = () => {
    let formValidation = true;
    for (let id in state.formData) {
      formValidation = state.formData[id].valid && formValidation;
    }
    return formValidation;
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const inputBlured = (e, id) => {
    if (e.target.value.trim() === '') {
      dispatch({
        type: 'blured',
        id,
      });
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitForm}>
        <h2>Register With Us</h2>
        <Inputs
          InputsData={formArray}
          onChanges={inputChanged}
          inputBlured={inputBlured}
        />
        <button disabled={!formValidation()} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Layout;
