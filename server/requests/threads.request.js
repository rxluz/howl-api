import Joi from 'joi';

export default {
  get: {
    query: {
      type: Joi.string().valid('relevant', 'recent', 'paid', 'mine'),
      lat: Joi.number().required(),
      long: Joi.number().required(),
      range: Joi.number().required()
    }
  },

  post: {
    body: {
      content: Joi.string().required(),
      timer: Joi.number(),
      price: Joi.number(),
    }
  },

};
