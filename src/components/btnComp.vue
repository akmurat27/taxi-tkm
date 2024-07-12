<template>
    <div class="flex items-center justify-center h-[500px] w-[500px] m-auto mt-[250px] border border-black">
        <div class="flex flex-col justify-around">
            <router-link to="/helloworld">Home</router-link>
            <h1>Input</h1>

            <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Input something" class="border">

            <button @click="addTodo">Add</button>

            <ul>
                <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" v-model="todo.completed" @change="toggleCompleted(todo)">
                <span :class="{ 'completed': todo.completed }">{{ todo.title }}</span>
                <button @click="removeTodo(todo)">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

  
<script>
  export default {
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({
            id: Date.now(),
            title: this.newTodo,
            completed: false
          });
          this.newTodo = '';
        }
      },
      removeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      },
      toggleCompleted(todo) {
        todo.completed = !todo.completed;
      }
    }
  };
</script>
  
<style scoped>
.completed {
    text-decoration: line-through;
}
</style>