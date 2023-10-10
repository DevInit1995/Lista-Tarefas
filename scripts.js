
var todos = [
    {
        text: 'Learn HTML, CSS and Javascript',
        done: true
    },
    {
        text: 'Learn the basics of Vue JS',
        done: false
    }
];

const todosApp = {
    data() {
        return {
            todos: window.todos,
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                //local storage 
                localStorage.setItem("todos", JSON.stringify(this.todos));
            } else {
                alert("To-do text is required");
            }
        }
    }
};

Vue.createApp(todosApp).mount('#app');

