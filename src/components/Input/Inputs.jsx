import React from 'react';
import Input from '../../components/Input/Input';

const Inputs = ({ InputsData, onChanges, inputBlured }) => (
  <>
    {InputsData.map((formEl) => (
      <Input
        key={formEl.id}
        forLabel={formEl.config.forLabel}
        lable={formEl.config.label}
        placeholder={formEl.config.placeholder}
        type={formEl.config.type}
        changed={(e) => onChanges(e, formEl.id)}
        valid={formEl.config.valid}
        touched={formEl.config.touched}
        errorMsg={formEl.config.errMsg}
        blured={(e) => inputBlured(e, formEl.id)}
      />
    ))}
  </>
);

export default Inputs;
