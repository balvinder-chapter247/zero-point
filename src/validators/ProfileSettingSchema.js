export const ProfileSettingSchema = {
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:30,
          minimum:3,
          message:"should be between 3 to 30 characters long."
        },
    },
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          maximum:18,
          minimum:3,
          message:"should be between 3 to 18 characters long."
        },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
        message:"should not be more than 30 characters long."
      },
    },
};