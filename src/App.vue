<template>
  <RouterView />
  <MapAsg :locations="locations" />
</template>

<script>
import { RouterView } from 'vue-router';
import MapAsg from './components/mapAsg.vue';


export default {
  data() {
    return {
      locations: [
        { name: 'Ashgabat', coordinates: [37.9601, 58.3261] },
        { name: 'Mary', coordinates: [37.5938, 61.8307] },
        // Other locations
      ]
    };
  },
  name: 'App',
  components: {
    MapAsg,
    RouterView,
  }
}
</script>

<style>
</style>
