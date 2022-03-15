export const LoginSchema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
      },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
      },
  };