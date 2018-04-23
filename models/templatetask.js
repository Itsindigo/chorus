'use strict';
module.exports = (sequelize, DataTypes) => {
  var TemplateTask = sequelize.define('TemplateTask', {
    name: DataTypes.STRING,
    createdAt: DataTypes.TIMESTAMP
  }, {});
  TemplateTask.associate = function(models) {
    // associations can be defined here
  };
  return TemplateTask;
};