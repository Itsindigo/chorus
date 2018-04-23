const express = require('express');
const router = express.Router();

const models = require('../models');

router.get('/', function(req, res, next) {
  let instance = models.TemplateTask.build({
    name: 'first list',
  })
  console.log(instance);
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
