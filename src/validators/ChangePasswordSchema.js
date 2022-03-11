export const ChangePasswordSchema = {
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:8,
          message: 'between 8 to 30 characters long.'
        },
    },
    new_password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:8,
          message: 'between 8 to 30 characters long.'
        },
    },
    confirm_new_password: {
        presence: { allowEmpty: false, message: 'is required' },
        equality: "new_password",
        length: {
          maximum:30,
          minimum:8,
        },
    },
};