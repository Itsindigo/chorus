const express = require('express');
const router = express.Router();

const models = require('../models');

router.get('/', function(req, res, next) {
  models.TemplateTask.findAll()
    .then(function(tasks) {
      res.render('index', { title: 'Express', tasks: tasks });
    })
});

router.post('/', function(req, res, next) {
  let instance = models.TemplateTask.create({
    name: req.body.task.name,
  })
});

module.exports = router;
