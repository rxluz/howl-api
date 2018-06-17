import User from '../models/user.model';

const authenticate = (req, res, next) => {
  const username = req.header('Authorisation');
  return next();

  // return !global.userID
  //   ? User.findByUsername(username)
  //     .then((user) => {
  //       if (!user) {
  //         return res.status(401).send();
  //       }

  //       req.user = user;
  //       return next();
  //     })
  //     .catch(() => res.status(401).send())
  //   : next();
};

export { authenticate as default };
