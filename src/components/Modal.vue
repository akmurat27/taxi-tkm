<template>
  <div>
    <!-- List of main items (velayats) -->
    <ul>
      <li
        v-for="velayat in velyats"
        :key="velayat.name"
        @click="toggleEtraps(velayat)"
        class="list-item"
      >
        {{ velayat.name }}
        <!-- Display etraps if the current velayat is selected -->
        <ul v-if="selectedVelayat === velayat">
          <li
            v-for="etrap in velayat.etraps"
            :key="etrap"
            class="list-item"
          >
            {{ etrap }}
          </li>
        </ul>
      </li>
    </ul>

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
      selectedVelayat: null,
      map: null,
      velyats: [
        {
          name: 'Ashgabat',
          etraps: [
            'Bagtyyarlyk',
            'Arçabil',
            'Ýolöten',
            'Buzmeyin',
            'Gökdepe',
            'Köneürgenç'
          ],
          coords: [37.95, 58.38]
        },
        {
          name: 'Turkmenabat',
          etraps: [
            'Garaşsyz',
            'Köýtendag',
            'Gökdepe',
            'Chardzhou',
            'Kyzyl-Arvat',
            'Jeyhun'
          ],
          coords: [39.08, 63.56]
        },
        {
          name: 'Turkmenbashi',
          etraps: [
            'Serdar',
            'Balkanabat',
            'Balkan',
            'Gumdag',
            'Kaka',
            'Darganata'
          ],
          coords: [40.05, 52.97]
        },
        {
          name: 'Dashoguz',
          etraps: [
            'Görogly',
            'Boldumsaz',
            'Kunyaurgench',
            'Hazar',
            'Sakarchage',
            'Shasenem'
          ],
          coords: [41.83, 59.97]
        },
        {
          name: 'Lebap',
          etraps: [
            'Gökdepe',
            'Babarap',
            'Chardzhou',
            'Tagtabazar',
            'Darganata',
            'Koytendag'
          ],
          coords: [39.28, 62.00]
        }
      ]
    };
  },
  methods: {
    toggleEtraps(velayat) {
      // If the clicked velayat is already selected, deselect it
      if (this.selectedVelayat === velayat) {
        this.selectedVelayat = null;
        this.clearMap();
      } else {
        // Otherwise, select the clicked velayat
        this.selectedVelayat = velayat;
        this.updateMap(velayat);
      }
    },
    updateMap(velayat) {
      if (!this.map) {
        this.initMap();
      }
      this.clearMap();

      if (velayat && velayat.coords) {
        L.marker(velayat.coords).addTo(this.map);
        this.map.setView(velayat.coords, 12);
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
</style>
