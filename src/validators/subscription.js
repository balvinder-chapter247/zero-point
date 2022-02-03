const schema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: {
        maximum: 300,
      },
    },
  };