import express from 'express';
import validate from 'express-validation';
import threadsRequest from '../requests/threads.request';
import threadsCtrl from '../controllers/threads.controller';
import authenticate from '../middlewares/authenticate.middleware';

import threadsIDRoutes from './threads.id.route';


const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(validate(threadsRequest.get), threadsCtrl.get)
  .post(authenticate, validate(threadsRequest.post), threadsCtrl.post);

router.use('/:threadsID', threadsIDRoutes)


export default router;
