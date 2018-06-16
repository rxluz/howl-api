import express from 'express';
import threadsCtrl from '../controllers/threads.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(threadsCtrl.getOne)

router.route('/up')
  .post(authenticate, threadsCtrl.setUpVote);

router.route('/up/:commentID')
  .post(authenticate, threadsCtrl.setUpVoteComment);

router.route('/down')
  .post(authenticate, threadsCtrl.setDownVote);

router.route('/down/:commentID')
  .post(authenticate, threadsCtrl.setDownVoteComment);


export default router;
