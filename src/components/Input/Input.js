import React from 'react';
import classes from './Input.module.css';

const Input = ({
  forLabel,
  lable,
  type,
  placeholder,
  changed,
  valid,
  touched,
  errorMsg,
}) => {
  const classNames = [classes.formControl];
  if (!valid && touched) {
    classNames.push(classes.error);
  }
  if (valid && touched) {
    classNames.push(classes.success);
  }
  return (
    <div className={classNames.join(' ')}>
      <label htmlFor={forLabel}>{lable}</label>
      <input type={type} placeholder={placeholder} onChange={changed} />
      <small>{errorMsg}</small>
    </div>
  );
};

export default Input;
