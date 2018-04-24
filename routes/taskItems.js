const express = require('express');
const router = express.Router();

const models = require('../models');

router.post('/:template_task_id', function(req, res, next) {
  return models.TemplateTask.findById(req.params.template_task_id)
    .then((templateTask) => {
      if (!templateTask) {
        return res.status(404).send;
      }
      let instance = models.TaskItem.create({
        name: req.body.task.name,
        description: req.body.task.description,
        TemplateTaskId: templateTask.id
      })
      res.send(instance);
  });
});

// router.get('/', function(req, res, next) {
//   models.TemplateTask.findAll()
//     .then(function(tasks) {
//       res.render('index', { tasks: tasks });
//     })
// });


module.exports = router;
