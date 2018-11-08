module.exports = function (sequelize, DataTypes) {
    let Todo = sequelize.define('todo', {
        id: {
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: DataTypes.STRING,
    });

    return Todo;
};