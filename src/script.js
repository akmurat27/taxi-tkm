// app.js
import Vue from 'vue';
import btnComp from './btnComp.vue';

new Vue({
  el: '#app',
  components: {
    btnComp
  },
  template: '<btnComp/>'
});
