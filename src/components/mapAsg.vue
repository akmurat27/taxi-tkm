<!-- ClickableMarkersMap.vue -->
<template>
  <div ref="map" class="leaflet-map"></div>
</template>

<script>
import { onUnmounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '@/assets/gps/gps.png';

export default {
  name: 'ClickableMarkersMap',
  data() {
    return {
      markers: [], // Array to store added 
      polylines: [] // Array to store polylines connecting markers
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      if (!this.$refs.map) {
        console.error('Map container element not found.');
        return;
      }

      this.map = L.map(this.$refs.map).setView([37.9601, 58.3261], 6); // Initial view centered on Ashgabat

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Event listener for adding markers on click
      this.map.on('click', this.addMarker);
    },
    addMarker(event) {
      if (!this.map) {
        return; // Exit early if map is not initialized
      }

      const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
      })

      const { latlng } = event; // Extract the clicked coordinates

      // Create a marker at the clicked coordinates
      const marker = L.marker(latlng, {icon: customIcon}).addTo(this.map);

      // Bind a popup with coordinates info
      marker.bindPopup(`Latitude: ${latlng.lat.toFixed(4)}, Longitude: ${latlng.lng.toFixed(4)}`).openPopup();

      // Push the marker to the markers array
      this.markers.push(marker);

       // Connect the markers with polylines
       this.connectMarkers();
    },
    connectMarkers() {
      // Clear existing polylines
      this.polylines.forEach(polyline => {
        polyline.remove();
      });
      this.polylines = [];

      // Create polylines between markers
      for (let i = 1; i < this.markers.length; i++) {
        const prevMarker = this.markers[i - 1];
        const currMarker = this.markers[i];

        // Create a polyline between current and previous markers
        const polyline = L.polyline([prevMarker.getLatLng(), currMarker.getLatLng()], {
          color: 'blue', // Customize the polyline color
          weight: 3, // Customize the polyline weight
          opacity: 0.7, // Customize the polyline opacity
        }).addTo(this.map);

        // Add the polyline to the polylines array
        this.polylines.push(polyline);
      }
    }
  },
  setup() {
    // Clean up the map when the component is unmounted
    onUnmounted(() => {
      if (this.map) {
        this.map.remove();
      }
    });
  }
};
</script>

<style scoped>
.leaflet-map {
  height: 800px;
}
</style>
