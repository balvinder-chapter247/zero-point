export const ContactUsSchema = {
    name: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
        minimum:3,
        message: 'must be between 3 to 30 characters long.'
      },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {message: 'is not valid'},
      length: {
        maximum:30,
        message: 'must not be more than 30 characters long.'
      },
    },
    subject: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum:3,
        maximum:30,
        message: 'must be between 3 to 30 characters long.'
      },
    },
    message: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:300,
        minimum:20,
        message: 'must be between 20 to 300 characters long.'
      },
    },
  };