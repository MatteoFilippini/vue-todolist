console.log('a', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        list: [
            { text: 'Fagioli', done: true },
            { text: 'Carote', done: true },
            { text: 'Piselli', done: false },
        ]
    },
    methods: {}
});