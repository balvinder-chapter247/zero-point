export const ReviewSchema = {
    name: {
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
    subject: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
        minimum:3,
        message: 'between 3 to 30 characters long.'
      },
    },
    message: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:300,
        minimum:20,
        message: 'between 20 to 300 characters long.'
      },
    },
  };