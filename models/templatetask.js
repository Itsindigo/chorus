'use strict';
module.exports = (sequelize, DataTypes) => {
  var TemplateTask = sequelize.define('TemplateTask', {
    name: DataTypes.STRING
  }, {});
  TemplateTask.associate = function(models) {
    // associations can be defined here
  };
  return TemplateTask;
};