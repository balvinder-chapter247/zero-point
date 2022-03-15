export const AddNewCardSchema = {
    
    card_number: {
        presence: { allowEmpty: false, message: 'is required' },
        format: {
            pattern: /^(34|37|4|5[1-5]).*$/,
          },
        length: function(value, attributes, attributeName, options, constraints) {
            if (value) {
              // Amex
              if ((/^(34|37).*$/).test(value)) return {is: 15};
              // Visa, Mastercard
              if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
            }
            // Unknown card, don't validate length
            return false;
          }
    },

};