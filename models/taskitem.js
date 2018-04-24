module.exports = (sequelize, DataTypes) => {
  var TaskItem = sequelize.define('TaskItem', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  TaskItem.associate = function(models) {
    models.TemplateTask.hasMany(TaskItem)
  };
  return TaskItem;
};