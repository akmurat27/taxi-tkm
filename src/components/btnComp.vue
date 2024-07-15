<template>
    <div class="flex items-center justify-center h-[500px] w-[500px] m-auto mt-[250px] border border-black">
        <div class="flex flex-col justify-around items-center gradient-bg">
            <router-link to="/helloworld" class="my-3 text-white">Home</router-link>
            <h1 class="my-3 text-white">Input</h1>

            <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Input something" class="border rounded border-black my-3">

            <button @click="addTodo" class="my-3 text-white">Add</button>

            <ul>
              <li v-for="todo in todos" :key="todo.id" class="my-3">
                <input type="checkbox" v-model="todo.completed" @change="toggleCompleted(todo)">
                <span :class="{ 'completed': todo.completed }" class="mx-3 text-white">{{ todo.title }}</span>
                <button @click="removeTodo(todo)">
                  <img src="@/assets/icons/free-icon-recycle-bin-3156999.png" class="w-[20px] h-[20px]">
                </button>
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
.gradient-bg {
  background: linear-gradient(to right, black, rgb(255, 187, 0));
}
.bg-gradient {
  background: linear-gradient(to right, rgb(238, 238, 238), rgba(0, 187, 255, 0.289));
}
</style>