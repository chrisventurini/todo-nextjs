module.exports = function (sequelize, DataTypes) {
    let Todo = sequelize.define('Todo', {
        id: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: DataTypes.STRING,
        notes: DataTypes.STRING,
    });

    return Todo;
};