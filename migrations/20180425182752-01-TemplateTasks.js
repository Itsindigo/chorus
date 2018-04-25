'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('TemplateTasks',
            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "name": {
                    "type": "VARCHAR(255)"
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                }
            })
        

      
    },
    down: function(queryInterface, Sequelize) {
     
            return queryInterface.dropTable('TemplateTasks');
     
    }
};