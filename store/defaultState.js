export let _defaultState = {
    filters: {
        completed: true
    },
    todos: {
        collection: [],
        count: 0
    },
    asyncCalls: {
        inProgress: false,
        num: 0
    }
};

export let _bootstrapFilters = (state) => {
     if(!process.browser) { return state }

    let urlSplit = location.href.split('?');

    if(urlSplit.length <= 1) { return state }

    let params = { };

    urlSplit[1]
        .split("&")
        .forEach(paramStr => {
            let param = paramStr.split('=');

            if(param.length > 1) {
                params[param[0]] = param[1];
            }
        });

    state.filters.completed = (params.filterCompleted !== 'false');

    return state;
};



export default _bootstrapFilters(_defaultState);