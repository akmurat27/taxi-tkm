<template>
  <RouterView />
  <button @click="openModal()">Open modal</button>
  <Modal ref="modal">
    <form @submit="handleSubmit">
      <div class="mb-3">
        <label class="text-lg">From:</label>
        <select v-model="from">
          <option value="Ashgabat">Ashgabat</option>
          <option>Mary</option>
          <option>Turkmenbasi</option>
          <option>Turkmenabat</option>
          <option>Dasoguz</option>
        </select>
      </div>
      <div class="my-3">
        <label class="text-lg">To:</label>
        <select v-model="to">
          <option value="Ashgabat">Ashgabat</option>
          <option>Mary</option>
          <option>Turkmenbasi</option>
          <option>Turkmenabat</option>
          <option>Dasoguz</option>
        </select>
      </div>

      <div class="submit mt-3">
        <button classs="text-lg">Submit</button>
      </div>
    </form>
  </Modal>
</template>

<script>
import { RouterView } from 'vue-router';
import Modal from '@/components/Modal.vue';

export default {
  name: 'App',
  data(){
    return{
      from: '',
      to: ''
    }
  },
  components: {
    RouterView,
    Modal
  },
  methods:{
    openModal(){
      this.$refs.modal.show();
    },
    handleSubmit(){
      console.log('form submitted')
    }
  }
}
</script>

<style scoped>
select{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>
