<template>
  <div>
    <div ref="map" class="map z-40"></div>

    <div v-if="showModal" class="modal z-50">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h1 class="modal__title">Modal Title</h1>
        <form @submit.prevent="addMarkers">
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
            <button classs="text-lg">Add Marker</button>
          </div>
        </form>
        <h2>Location Information</h2>
        <p>Latitude: {{ modalContent.lat }}</p>
        <p>Longitude: {{ modalContent.lng }}</p>
      </div>
    </div>
</div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '@/assets/gps/gps.png';

export default {
  name: 'mapAsg',
  data() {
    return {
      modalContent: {
        lat: '',
        lng: ''      
      },
      showModal: false,
      markers: [],
      from: 'Ashgabat',
      to: 'Ashgabat',
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
    handleSubmit(){
      console.log('form submitted')
    },
    initializeMap() {
      // Initialize the map
      this.map = L.map(this.$refs.map).setView([38.9697, 59.5563], 6); // Centered on Turkmenistan

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.map.on('click', (e) => {
        this.openModal(e.latlng);
      });
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
        const leafletMarker = L.marker(marker.coords, { icon: customIcon }).addTo(this.map);
        leafletMarker.on('click', () => {
          this.openModal(marker);
        });
      })

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
      const marker = L.marker(coords).addTo(this.map);
      marker.bindPopup(label).openPopup(); // Example: Bind popup with label
      this.markers.push(marker);
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
    openModal(latlng) {
      this.modalContent = {
        lat: latlng.lat,
        lng: latlng.lng
      };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.map {
  height: 700px;
}
select{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.modal {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .modal__title{
    font-weight: normal;
    font-size: 25px;
}
</style>
