export const ProfileSettingSchema = {
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
      email: true,
      length: {
        maximum:30,
      },
    },
};