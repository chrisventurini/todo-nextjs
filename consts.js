const deepFreeze = require('deep-freeze');

module.exports = deepFreeze({
    ASYNC_STARTED: 'ASYNC_STARTED',
    ASYNC_COMPLETED: 'ASYNC_COMPLETED'
});