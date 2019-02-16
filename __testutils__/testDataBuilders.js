import uuid from 'uuid/v4';
import loremIpsum from 'lorem-ipsum';

export let todoBuilder = (todo) => {
    let defaultTodo = {
        completed: false,
        dueDate: new Date(),
        id: uuid(),
        notes: loremIpsum({ count: 10 }),
        title: loremIpsum({ count: 1 })
    };

    return Object.assign({}, todo, defaultTodo);
};