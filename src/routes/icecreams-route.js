const { Router } = require('express');
const service = require('../services/icecream-service');

const router = Router();

router.get('/', (req, res) => {
  res.json(service.get());
});

module.exports = router;
