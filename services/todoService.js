import fetch from 'isomorphic-unfetch';

export default {
    fetchAll: async function (options) {
        let queryStr = Object.keys(options)
                            .map(key => key + '=' + options[key])
                            .join('&'),

            response = await fetch(`http://localhost:3000/api/todos?${queryStr}`);

        return await response.json();
    }
}