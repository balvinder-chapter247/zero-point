export const ReviewSchema = {
    name: {
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
    subject: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
      },
    },
    message: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:300,
      },
    },
  };