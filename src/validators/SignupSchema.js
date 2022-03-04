export const SignupSchema = {
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:3
        },
    },
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:3
        },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
      },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:20,
          minimum:8,
        },
    },
    confirm_password: {
        presence: { allowEmpty: false, message: 'is required' },
        equality: "password",
        length: {
          maximum:20,
          minimum:8,
        },
    },
};