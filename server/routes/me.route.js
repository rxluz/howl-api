import express from 'express';
import validate from 'express-validation';
import meRequest from '../requests/me.request';
import meCtrl from '../controllers/me.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .post(validate(meRequest.post), meCtrl.post);

router.route('/notifications')
  .get(authenticate, meCtrl.getNotifications);





export default router;
