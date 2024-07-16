<template>
  <RouterView />
  <Modal>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores, fugiat hic possimus tempora dolorem aliquam ea dolorum unde molestias!</p>
  </Modal>
</template>

<script>
import { RouterView } from 'vue-router';
import Modal from '@/components/Modal.vue';

export default {
  data() {
    return {
    };
  },
  name: 'App',
  components: {
    RouterView,
    Modal
  }
}
</script>

<style>
</style>
