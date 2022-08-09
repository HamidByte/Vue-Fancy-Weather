<template>
  <div>
    <b-container class="mt-4">
      <b-row class="text-center align-items-center">
        <b-col
          class="my-auto"
          align="center"
        >
          <div
            class="autocomplete"
          >
            <label for="city">
              <input
                id="city"
                v-model.trim="cityEntered"
                type="search"
                class="search-city"
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
        </b-col>
      </b-row>
    </b-container>

    <div v-if="isDataRecived">
      <WeatherWidget
        :city-name="weather.city_name"
        :country-code="countryCode"
        :weather="weather"
      />
      <CountryDetail
        :state="state"
        :country-info="countryInfo"
      />
      <WeatherDetail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  BContainer,
  BRow,
  BCol,
} from 'bootstrap-vue'
import CountryDetail from '@/components/CountryDetail.vue'
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
    BContainer,
    BRow,
    BCol,
    CountryDetail,
    WeatherWidget,
    WeatherDetail,
  },
  data() {
    return {
      cityEntered: '',
    }
  },
  computed: {
    citiesList() {
      return this.$store.state.citiesList
    },

    countryCode() {
      return this.$store.state.countryCode
    },

    countryInfo() {
      return this.$store.state.countryInfo
    },

    state() {
      return this.$store.state.state
    },

    lat() {
      return this.$store.state.lat
    },

    lon() {
      return this.$store.state.lon
    },

    weather() {
      return this.$store.state.weather
    },

    isDataRecived() {
      return this.$store.state.isDataRecived
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
  /* border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px; */
}

input:focus {
  outline: 0;
}

input::placeholder {
  color: #8F8F8F;
  opacity: 1; /* Firefox */
}

input.search-city {
  font-family: 'Ubuntu', sans-serif;
  /* display: block; */
  /* margin: 0; */
  padding: 10px;
  border: 0;
  /* border-radius: 5px; */
  font-size: 36px;
  font-weight: 300;
  background: rgba(0,0,0,.02);
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.3);
  color: #757575;
  transition: all .15s ease;
}

input.search-city:hover {
  background: rgba(0,0,0,.04);
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.5);
}

input.search-city:focus {
  background: rgba(0,0,0,.05);
  outline: none;
  box-shadow: inset 0 -2px 0 #0077FF;
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
