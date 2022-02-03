console.log('a', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newTextTask: '',
        list: [
            { text: 'Fagioli', done: true },
            { text: 'Carote', done: true },
            { text: 'Piselli', done: false },
        ]
    },
    methods: {
        // AGGIUNGI TASK
        addTask() {
            const newTask = {
                text: this.newTextTask,
                done: false
            }
            this.list.push(newTask);
            this.newTextTask = '';
        },
        // ELIMINA TASK
        deleteTask(index) {
            this.list.splice(index, 1);
        },
        // DESELEZIONA TASJ
        deselectTask(index) {
            this.list[index].done = !this.list[index].done
        }
    }
});