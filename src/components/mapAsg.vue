<template>
  <div>
    <div ref="map" class="map z-40"></div>
</div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '@/assets/gps/gps.png';

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      markers: [ // Array to store markers with their coordinates and popup content
        { coords: [37.9601, 58.3265], popupContent: 'From: Ashgabat' },
        { coords: [38.9697, 59.5563], popupContent: 'To: Center of Turkmenistan' },
        { coords: [41.8333, 59.9667], popupContent: 'Dashoguz (Дашогуз)' },
        { coords: [37.5926, 61.8309], popupContent: 'Mary (Мерке)' },
        { coords: [40.0231, 52.9736], popupContent: 'Turkmenbashi (Түркменбашы)' },
        { coords: [39.0960, 63.5825], popupContent: 'Turkmenabat (Turkmenabat)' },
        // Add more markers as needed
      ],
      polyline: null
    };
  },
  mounted() {
    this.initializeMap();
    this.addMarkers();
    this.addPolyline();
    this.fitBounds();
  },
  methods: {
    initializeMap() {
      // Initialize the map
      this.map = L.map(this.$refs.map).setView([38.9697, 59.5563], 6); // Centered on Turkmenistan

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    },
    addMarkers() {
      const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
      })

      // Add markers to the map
      this.markers.forEach(marker => {
        L.marker(marker.coords, {icon: customIcon}).addTo(this.map)
          .bindPopup(marker.popupContent);
      });
    },
    addPolyline() {
      // Example polyline between two existing markers
      const fromCoords = this.markers[0].coords;
      const toCoords = this.markers[1].coords;
      this.polyline = L.polyline([fromCoords, toCoords], { color: 'blue' }).addTo(this.map);
    },
    fitBounds() {
      // Fit map bounds to markers
      const bounds = this.markers.map(marker => marker.coords);
      this.map.fitBounds(bounds);
    },
  }
};
</script>

<style scoped>
.map {
  height: 700px;
}
</style>
