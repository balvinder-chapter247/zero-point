export const LoginSchema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: {
        maximum:30,
      },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        password: true,
        length: {
          maximum:30,
          minimum:8,
        },
      },
  };