const { Router } = require('express');
const service = require('../services/icecream-service');

const router = Router();

router.get('/', (req, res) => {
  service
    .get()
    .then(response => res.json(response))
    .catch(error => res.status(500).send(error));
});

router.get('/vegan', (req, res) => {
  service
    .getVegans()
    .then(response => res.json(response))
    .catch(error => res.status(500).send(error));
});

router.get('/:id', (req, res) => {
  service
    .getById(req.params.id)
    .then(response => res.json(response))
    .catch(error => res.status(500).send(error));
});

router.delete('/:id', (req, res) => {
  service
    .removeById(req.params.id)
    .then(response => res.json({ message: 'Icecream removed!' }))
    .catch(error => res.status(500).send(error));
});

router.post('/', (req, res) => {
  service
    .create(req.body)
    .then(response => res.status(201).send(response))
    .catch(error => res.status(500).send(error));
});
module.exports = router;
