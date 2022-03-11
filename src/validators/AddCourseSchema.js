export const AddCourseSchema = {
    title: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
        minimum:3,
        message: 'between 3 to 30 characters long.'
      },
    },
    category: {
        presence: { allowEmpty: false, message: 'is required' },
        
    },
    sub_category: {
        presence: { allowEmpty: false, message: 'is required' },
        
    },
    lavel: {
        presence: { allowEmpty: false, message: 'is required' },
 
    },
    price: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    learning_objectives: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
            message: 'between 3 to 30 characters long.'
        },
    },
    // banner_image: {
    //     presence: { allowEmpty: false, message: 'is required' },
    //     length: {
    //         maximum:30,
    //     },
    // },
    // details: {
    //     presence: { allowEmpty: false, message: 'is required' },
    //     length: {
    //         maximum:30,
    //     },
    // },

};