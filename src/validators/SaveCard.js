 export const CardSavingschema = {
    cardNumber: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 17,
        maximum: 19,
        message:"should be between 17 to 19 characters long."
      },
    },
    expiry: {
      presence: { allowEmpty: false, message: 'date is required' },
    },
    CVC: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 3,
        maximum: 4,
        message:"should be between 3 to 4 characters long."
      },
    },
  }