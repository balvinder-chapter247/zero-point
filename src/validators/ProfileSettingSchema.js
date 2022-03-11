export const ProfileSettingSchema = {
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:3,
          message: 'between 3 to 30 characters long.'
        },
    },
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:3,
          message: 'between 3 to 30 characters long.'
        },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
      },
    },
};