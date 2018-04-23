const express = require('express');
const router = express.Router();

const models = require('../models');

router.get('/', function(req, res, next) {
  models.TemplateTask.findAll()
    .then(function(tasks) {
      res.render('index', { tasks: tasks });
    })
});

router.post('/', function(req, res, next) {
  let instance = models.TemplateTask.create({
    name: req.body.task.name,
  })
});

router.get('/:template_id', function(req, res, next) {
  console.log('doing this')
  return models.TemplateTask.findById(req.params.template_id)
    .then((templateTask) => {
      console.log('getting task:', templateTask)
      if (!templateTask) {
        return res.status(404).send;
      }
      return res.send(templateTask);
    });
});

module.exports = router;
