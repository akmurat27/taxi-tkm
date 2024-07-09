<template>
    <div id="map" style="height: 100vh;"></div>
  </template>

<script>
  import L from 'leaflet';
  import { icon } from 'leaflet';
  import 'leaflet/dist/leaflet.css';
 // Example in main.js or App.vue
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
  });

  
  export default {
    component: {
      icon
    },
    mounted() {
      this.$nextTick(() => {
        this.initMap();
      });
    },

    methods: {
      initMap() {
        // Initialize the map
        this.map = L.map('map').setView([37.9601, 58.3261], 12);
  
        // Add a tile layer (OpenStreetMap tiles)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);
  
        // Example marker
        L.marker([37.9601, 58.3261]).addTo(this.map)
          .bindPopup('Ashgabat, Turkmenistan')
          .openPopup();
      }
    }
  };
  </script>
  
  <style scoped>
  #map {
    height: 700px !important;
  }
  </style>
  