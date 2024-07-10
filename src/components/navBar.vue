<template>
    <div>
      <button @click="toggleButton" class="block lg:hidden">
        <img src="@/assets/icons/hamburger-circle-icon-512x512-4mthfq0v.png" class="w-[40px] h-[42px]">
      </button>
      <div v-if="buttonOn" class="hidden lg:block">
        <p v-for="(item, index) in items" :key="index" class="bg-gray-200 m-2 p-2">
          {{ item }}
        </p>
      </div>
      <div v-else class="flex flex-col lg:flex lg:flex-row bg-gradient-to-r from-gray-700 to-gray-500 lg:bg-none">
        <div v-for="(item, index) in items" :key="index" class="text-white p-2 flex flex-col items-center">
            <p class="lg:border rounded-full px-[20px] py-[7px]">{{ item.name }}</p>
            <div class="bg-yellow-500 w-[180px] h-[1px] my-2 lg:hidden"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttonOn: false, // Initial state of the button
        items: [
            { id: 1, name: 'О нас' },
            { id: 2, name: 'Установить приложение' },
            { id: 3, name: 'Контакты' }
        ], // Example list of items
      };
    },
    methods: {
      toggleButton() {
        this.buttonOn = !this.buttonOn; // Toggle the state of buttonOn
      }
    }
  };
  </script>
  
<style scoped>
/* Any additional custom styles can be applied here */
.gradient-bg {
    background: linear-gradient(to right, rgb(108, 108, 108), rgb(79, 76, 67));
}
</style>
  