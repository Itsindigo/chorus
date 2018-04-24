module.exports = (sequelize, DataTypes) => {
  var TaskItem = sequelize.define('TaskItem', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  TaskItem.associate = function(models) {
    // associations can be defined here
  };
  return TaskItem;
};