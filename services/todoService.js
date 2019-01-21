import fetch from 'isomorphic-unfetch';

export default {
    fetchAll: async function () {
        let response = await fetch('http://localhost:3000/api/todos');

        return await response.json();
    }
}