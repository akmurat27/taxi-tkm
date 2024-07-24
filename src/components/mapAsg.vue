<template>
  <div>
    <div class="flex justify-evenly ">
      <button @click="openModal" class="w-[10%] p-[10px] m-[20px] text-2xl border border-black rounded-full">open modal</button>
      <button @click="openInput" class="w-[10%] p-[10px] m-[20px] text-2xl border border-black rounded-full">open modal</button>
    </div>
    <div id="map" class="z-40" style="height: 100vh; width: 100%"></div>
    <div class="modal z-50" v-if="showModal">
      <div class="modal-content">
        <div class="flex justify-between items-center">
          <h2>Add Marker</h2>
          <span class="close" @click="closeModal">&times;</span>
        </div>
        <form @submit.prevent="addMarker">
          <div class="mb-3">
            <label class="text-lg">From :</label>
            <select v-model="from">
              <option value="Ashgabat">Ashgabat</option>
              <option>Mary</option>
              <option>Turkmenbasi</option>
              <option>Turkmenabat</option>
              <option>Dasoguz</option>
            </select>
          </div>
          <div class="my-3">
            <label class="text-lg">To :</label>
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

    <div class="modal z-50" v-if="showInput">
      <!-- Search Input -->
      <div class="search">
        <input
          v-model="searchQuery"
          placeholder="Search location..."
          @keyup.enter="searchLocation"
          class="text-lg border border-black rounded-lg"
        />
        <ul>
          <li @click="selectItem(item)" v-for="item in filteredItems" :key="item" class="cursor-pointer">{{ item }}</li>
        </ul>
        <button @click="searchLocation" class="text-lg">Search</button>
        <span class="close" @click="closeInput">&times;</span>
        <div class="w-[300px] text-right">
          <button @click="showAlert" class="text-3xl">Confirm</button>
        </div>
        <button @click="clearSelections" class="clear-button">Clear</button>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '@/assets/gps/gps.png';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      selectedItem: null,
      showInput: false,
      showModal: false,
      from: '',
      to: '',
      markers: [],
      searchQuery: '',
      isListVisible: false,
      items: [
        'Ashgabat',
        'Turkmenabat',
        'Turkmenbashi',
        'Dashoguz',
        'Lebap',
        'Mary',
      ],
    };
  },
  mounted() {
    this.initializeMap();
  },
  computed: {
    filteredItems() {
      if (!this.searchQuery) {
        return this.items;
      }
      const letter = this.searchQuery.toLowerCase();
      return this.items.filter(item =>
        item.toLowerCase().includes(letter)
      );
    }
  },
  methods: {
    clearMap() {
      if (this.map) {
        this.map.eachLayer(layer => {
          if (layer instanceof L.Marker) {
            this.map.removeLayer(layer);
          }
        });
      }
    },
    clearSelections() {
      this.clearMap();
    },
    selectItem(item) {
      this.searchQuery = item;
      this.selectedItem = item;
      this.isListVisible = false;
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
    showAlert() {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
          // Display success message and close modal
          Swal.fire({
            title: "Saved!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            // Code to execute after modal closes (if any)
            console.log("Modal closed");
          });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
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
    openInput() {
      this.showInput = true;
    },
    closeInput() {
      this.showInput = false;
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
    },
    async searchLocation() {
      if (this.searchQuery.trim() === '') return;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}+Turkmenistan`
        );
        const data = await response.json();
        if (data.length > 0) {
          const location = data[0];
          const coords = [parseFloat(location.lat), parseFloat(location.lon)];
          this.map.setView(coords, 13); // Zoom to the location
          this.addMarkerToMap(coords, location.display_name);
        } else {
          alert('Location not found in Turkmenistan');
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  }
};
</script>

<style>
button {
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
  font-size: 18px;
}
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
.search {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.search input {
  padding: 5px;
  font-size: 16px;
  width: 250px;
}

.search button {
  padding: 5px;
  margin-left: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
