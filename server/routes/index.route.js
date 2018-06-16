import express from 'express';
import meRoutes from './me.route';
import threadsRoutes from './threads.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/me', meRoutes);

router.use('/threads', threadsRoutes);


export default router;
