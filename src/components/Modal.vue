<template>
  <div>
    <!-- Search input for filtering -->
    <input v-model="searchQuery" placeholder="Search" class="search-input" />

    <!-- Input field to show selected item -->
    <input v-model="selectedItem" readonly class="selected-input" />

    <!-- List of main items (velayats) -->
    <ul>
      <li
        v-for="velayat in filteredVelyats"
        :key="velayat.name"
        @click="toggleEtraps(velayat)"
        class="list-item"
      >
        {{ velayat.name }}
        <!-- Display etraps if the current velayat is selected -->
        <ul v-if="selectedVelayat === velayat">
          <li
            v-for="etrap in filteredEtraps"
            :key="etrap.name"
            @click.stop="selectEtrap(etrap)"
            :class="{ 'selected-etrap': selectedEtrap === etrap }"
            class="list-item"
          >
            {{ etrap.name }}
          </li>
        </ul>
      </li>
    </ul>

    <!-- Button to clear selections and markers -->
    <button @click="clearSelections" class="clear-button">Clear</button>

    <!-- Display selected item and its location on map -->
    <div id="map" style="height: 400px; width: 100%;"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  data() {
    return {
      searchQuery: '', // Search query to filter items
      selectedVelayat: null,
      selectedEtrap: null,
      map: null,
      selectedItem: '', // To show selected item in input
      velyats: [
        {
          name: 'Ashgabat',
          etraps: [
            { name: 'Bagtyyarlyk', coords: [37.96, 58.40] },
            { name: 'Arçabil', coords: [37.94, 58.37] },
            { name: 'Ýolöten', coords: [37.97, 58.42] },
            { name: 'Buzmeyin', coords: [37.93, 58.35] },
            { name: 'Gökdepe', coords: [37.92, 58.34] },
            { name: 'Köneürgenç', coords: [37.95, 58.38] }
          ],
          coords: [37.95, 58.38]
        },
        {
          name: 'Turkmenabat',
          etraps: [
            { name: 'Garaşsyz', coords: [39.09, 63.57] },
            { name: 'Köýtendag', coords: [39.07, 63.55] },
            { name: 'Gökdepe', coords: [39.10, 63.56] },
            { name: 'Chardzhou', coords: [39.11, 63.58] },
            { name: 'Kyzyl-Arvat', coords: [39.08, 63.59] },
            { name: 'Jeyhun', coords: [39.06, 63.54] }
          ],
          coords: [39.08, 63.56]
        },
        {
          name: 'Turkmenbashi',
          etraps: [
            { name: 'Serdar', coords: [40.06, 52.98] },
            { name: 'Balkanabat', coords: [40.07, 52.99] },
            { name: 'Balkan', coords: [40.08, 53.00] },
            { name: 'Gumdag', coords: [40.09, 52.97] },
            { name: 'Kaka', coords: [40.10, 52.96] },
            { name: 'Darganata', coords: [40.11, 52.95] }
          ],
          coords: [40.05, 52.97]
        },
        {
          name: 'Dashoguz',
          etraps: [
            { name: 'Görogly', coords: [41.84, 59.98] },
            { name: 'Boldumsaz', coords: [41.82, 59.96] },
            { name: 'Kunyaurgench', coords: [41.81, 59.97] },
            { name: 'Hazar', coords: [41.80, 59.98] },
            { name: 'Sakarchage', coords: [41.79, 59.99] },
            { name: 'Shasenem', coords: [41.78, 60.00] }
          ],
          coords: [41.83, 59.97]
        },
        {
          name: 'Lebap',
          etraps: [
            { name: 'Gökdepe', coords: [39.29, 62.01] },
            { name: 'Babarap', coords: [39.27, 62.00] },
            { name: 'Chardzhou', coords: [39.28, 62.02] },
            { name: 'Tagtabazar', coords: [39.26, 62.03] },
            { name: 'Darganata', coords: [39.25, 62.04] },
            { name: 'Koytendag', coords: [39.24, 62.05] }
          ],
          coords: [39.28, 62.00]
        }
      ]
    };
  },
  computed: {
    filteredVelyats() {
      const query = this.searchQuery.toLowerCase();
      return this.velyats.filter(velayat =>
        velayat.name.toLowerCase().includes(query)
      );
    },
    filteredEtraps() {
      if (!this.selectedVelayat) return [];
      const query = this.searchQuery.toLowerCase();
      return this.selectedVelayat.etraps.filter(etrap =>
        etrap.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    toggleEtraps(velayat) {
      if (this.selectedVelayat === velayat) {
        this.clearSelections();
      } else {
        this.selectedVelayat = velayat;
        this.selectedEtrap = null;
        this.updateMap(velayat);
      }
    },
    selectEtrap(etrap) {
      this.selectedEtrap = etrap;
      this.selectedItem = `${this.selectedVelayat.name} - ${etrap.name}`;
      this.updateMap(this.selectedVelayat);
    },
    clearSelections() {
      this.selectedVelayat = null;
      this.selectedEtrap = null;
      this.selectedItem = ''; // Clear selected item input
      this.clearMap();
    },
    updateMap(velayat) {
      if (!this.map) {
        this.initMap();
      }
      this.clearMap();

      if (velayat) {
        L.marker(velayat.coords).addTo(this.map);

        if (this.selectedEtrap && this.selectedEtrap.coords) {
          L.marker(this.selectedEtrap.coords).addTo(this.map);
          this.map.setView(this.selectedEtrap.coords, 12);
        } else {
          this.map.setView(velayat.coords, 12);
        }
      }
    },
    initMap() {
      this.map = L.map('map').setView([37.95, 58.38], 6); // Default view

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);
    },
    clearMap() {
      if (this.map) {
        this.map.eachLayer(layer => {
          if (layer instanceof L.Marker) {
            this.map.removeLayer(layer);
          }
        });
      }
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
.list-item {
  margin: 5px 0;
  font-size: 18px;
  cursor: pointer;
}
.list-item:hover {
  background-color: #f0f0f0;
}
.selected-etrap {
  font-weight: bold;
  background-color: #e0e0e0;
}
.clear-button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
.search-input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  width: 100%;
}
.selected-input {
  margin-top: 10px;
  padding: 8px;
  font-size: 16px;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}
</style>
