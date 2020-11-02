export const updateObject = (oldObject, updatedState) => {
  return {
    ...oldObject,
    ...updatedState,
  };
};
export const checkValidity = (value, rules) => {
  if (!rules) {
    return true;
  }
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = new RegExp(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2}(?:[a-z0-9-]*[a-z0-9])?/
    );
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const checkForPasswordMatch = (value1, value2) => {
  let isValid = false;

  if (value1 !== value2) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};
