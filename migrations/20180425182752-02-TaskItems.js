'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('TaskItems',
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
                "description": {
                    "type": "TEXT"
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "TemplateTaskId": {
                    "allowNull": false,
                    "onDelete": "CASCADE",
                    "type": "INTEGER",
                    "references": {
                        "model": "TemplateTasks",
                        "key": "id"
                    },
                    "onUpdate": "CASCADE"
                }
            })
        

      
    },
    down: function(queryInterface, Sequelize) {
     
            return queryInterface.dropTable('TaskItems');
     
    }
};