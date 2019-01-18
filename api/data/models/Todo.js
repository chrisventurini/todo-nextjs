module.exports = function (sequelize, DataTypes) {
    let Todo = sequelize.define('Todo', {
        id: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        notes: DataTypes.STRING,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Todo;
};