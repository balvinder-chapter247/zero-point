 export const CardSavingschema = {
    cardNumber: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 17,
        maximum: 19,
      },
    },
    expiry: {
      presence: { allowEmpty: false, message: 'date is required' },
    },
    cvc: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 3,
        maximum: 4,
      },
    },
  }