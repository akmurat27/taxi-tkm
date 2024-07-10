<template>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="item.id">
          <span>{{ item.name }}</span>
          <input type="text" v-model="newName" placeholder="New name">
          <button @click="changeItem(index)">Change</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ],
        newName: '' // For input binding
      };
    },
    methods: {
      changeItem(index) {
        if (this.newName.trim() !== '') {
          // Update the name of the specific item
          this.items[index].name = this.newName;
          // Clear the input field after update
          this.newName = '';
        } else {
          alert('Please enter a valid new name.');
        }
      }
    }
  };
  </script>
  