export const AddCourseSchema = {
    title: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum:30,
      },
    },
    category: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    sub_category: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
    },
    level: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:30,
        },
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
        },
    },
    // bannerImage: {
    //     presence: { allowEmpty: false, message: 'is required' },
    // },
    details: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum:300,
        },
    },
    
};