<template>
  <div>
    <button @click="openModal">open modal</button>
    <div id="map" class="z-40" style="height: 100vh; width: 100%"></div>
    <div class="modal z-50" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Add Marker</h2>
        <form @submit.prevent="addMarker">
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

          <div class="select mt-3">
            <button type="submit" class="text-lg">Add Marker</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '@/assets/gps/gps.png';

export default {
  data() {
    return {
      showModal: false,
      from: '',
      to: '',
      markers: []
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      this.map = L.map('map').setView([38.9697, 59.5563], 7); // Centered on Turkmenistan
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addMarker() {
      // Determine coordinates based on selected "From" and "To" options
      let fromCoords = this.getLocationCoordinates(this.from);
      let toCoords = this.getLocationCoordinates(this.to);

      // Add markers for both "From" and "To"
      this.addMarkerToMap(fromCoords, 'From');
      this.addMarkerToMap(toCoords, 'To');

      // Close modal after adding markers
      this.closeModal();
    },
    getLocationCoordinates(location) {
      // Example function to get coordinates based on location (replace with your logic)
      switch (location) {
        case 'Ashgabat':
          return [37.9601, 58.3261];
        case 'Mary':
          return [37.5925, 61.8346];
        case 'Turkmenbasi':
          return [40.0234, 52.9699];
        case 'Turkmenabat':
          return [39.0732, 63.5789];
        case 'Dasoguz':
          return [41.8363, 59.9666];
        default:
          return [0, 0]; // Default coordinates if location not found
      }
    },
    addMarkerToMap(coords, label) {
      const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
      })

      const marker = L.marker(coords, { icon: customIcon }).addTo(this.map);
      marker.bindPopup(label).openPopup(); // Example: Bind popup with label
      this.markers.push(marker);
    }
  }
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}
</style>
