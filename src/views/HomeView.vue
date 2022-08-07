<template>
  <div>
    <div
      class="autocomplete"
    >
      <label for="city">
        <input
          v-model.trim="cityEntered"
          type="search"
          name="city"
          placeholder="City"
          @change="getGeocoding"
        >
        <!-- <button type="button" class="btn bg-transparent" style="margin-left: -40px; z-index: 100;">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button> -->
      </label>
      <ul
        v-if="citiesList.length > 0 && cityEntered.length > 0"
        class="autocomplete-items"
      >
        <li
          v-for="(c, index) in citiesList"
          :key="index"
          @click="getData(c, $event)"
        >
          <small>
            <span><strong>{{ c.name }}, {{ c.state }}</strong></span>
            <span class="float-right">{{ c.country }}</span>
          </small>
        </li>
      </ul>
    </div>

    <div v-if="isDataRecived">
      <WeatherWidget
        :city-name="weather.city_name"
        :state="state"
        :country-code="countryCode"
        :country-info="countryInfo"
        :weather="weather"
      />
      <WeatherDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { BButton } from 'bootstrap-vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import WeatherDetail from '@/components/WeatherDetail.vue'
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* add some free styles */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
/* add each imported icon to the library */
library.add(faXmark)

export default {
  name: 'HomeView',
  components: {
    WeatherWidget,
    WeatherDetail,
  },
  data() {
    return {
      cityEntered: '',
    }
  },
  computed: {
    state() {
      return this.$store.state.state
    },

    countryCode() {
      return this.$store.state.countryCode
    },

    countryInfo() {
      return this.$store.state.countryInfo
    },

    lat() {
      return this.$store.state.lat
    },

    lon() {
      return this.$store.state.lon
    },

    citiesList() {
      return this.$store.state.citiesList
    },

    isDataRecived() {
      return this.$store.state.isDataRecived
    },

    weather() {
      return this.$store.state.weather
    },
  },
  beforeMount() {
    // this.cityEntered = this.$store.state.city
  },
  methods: {
    getGeocoding() {
      if (this.cityEntered !== '') {
        this.$store.dispatch({
          type: 'getGeocodingInfo',
          city: this.cityEntered,
        })
      }
    },

    getData(c) {
      this.$store.dispatch({
        type: 'getCountryInfo',
        countryCode: c.country,
      })
      this.$store.dispatch({
        type: 'getWeatherInfo',
        cityData: c,
      })
    },
  },
}
</script>
<style scoped>
.autocomplete, input {
  width: 600px;
}

.autocomplete {
  position: relative;
  display: inline-block;
}

input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  margin-top: -8px;
  padding: 0;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items li {
  margin-top: 0;
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

/*when hovering an item:*/
.autocomplete-items li:hover {
  background-color: #e9e9e9;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>
