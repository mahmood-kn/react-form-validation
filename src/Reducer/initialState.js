const initialState = {
  formData: {
    username: {
      forLabel: 'username',
      label: 'Username',
      placeholder: 'Enter Your Username',
      type: 'text',
      validation: {
        minLength: 5,
      },
      valid: false,
      value: '',
      touched: false,
      errMsg: 'Must be atleast 5 charecters ',
    },
    email: {
      forLabel: 'username',
      label: 'Email',
      placeholder: 'Enter Your Username',
      type: 'email',
      validation: {
        isEmail: true,
      },
      valid: false,
      value: '',
      touched: false,
      errMsg: 'Please enter valid email',
    },
    password: {
      forLabel: 'password',
      label: 'Password',
      placeholder: 'Enter Your Password',
      type: 'password',
      validation: {
        minLength: 8,
        isPass: true,
      },
      valid: false,
      value: '',
      touched: false,
      errMsg: 'Must be atleast 8 charecters',
    },
    confirmPassword: {
      forLabel: 'password2',
      label: 'Confirm Password',
      placeholder: 'Confirm Your Password',
      type: 'password',
      validation: {
        isPassConfirm: true,
      },
      valid: false,
      value: '',
      touched: false,
      errMsg: "Your password doesn't match",
    },
  },
};

export default initialState;
