'use strict';
module.exports = (sequelize, DataTypes) => {
  var TemplateTask = sequelize.define('TemplateTask', {
    name: DataTypes.STRING
  }, {});
  TemplateTask.associate = function(models) {
    models.TaskItem.belongsTo(TemplateTask, {foreignKey: {allowNull: false, onDelete: 'CASCADE'}})
  };
  return TemplateTask;
};