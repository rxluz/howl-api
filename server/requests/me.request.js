import Joi from 'joi';

export default {
  post: {
    body: {
      username: Joi.string().required(),
      phone: Joi.string().required(),
    }
  },
};
