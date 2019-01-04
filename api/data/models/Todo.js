module.exports = function (sequelize, DataTypes) {
    let Todo = sequelize.define('Todo', {
        id: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        completed: DataTypes.BOOLEAN,
        dueDate: DataTypes.DATE,
        notes: DataTypes.STRING,
        title: DataTypes.STRING
    });

    return Todo;
};