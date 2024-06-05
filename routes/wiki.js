import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('wiki');
});

router.get('/about', (req, res) => {
  res.send('About wiki')
})

export default router;