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
                v-for="(city, index) in citiesList"
                :key="index"
                @click="getData(city, $event)"
              >
                <small>
                  <span><strong>{{ city.name }}, {{ city.state }}</strong></span>
                  <span class="float-right">{{ city.country }}</span>
                </small>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div v-if="isDataRecived">
      <WeatherWidget
        :city="cityName"
        :country-code="countryCode"
        :date-time="dateTime"
        :weather="weather"
      />

      <CountryDetail
        :city="cityName"
        :state="state"
        :country-info="countryInfo"
      />
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
import WeatherWidget from '@/components/WeatherWidget.vue'
import CountryDetail from '@/components/CountryDetail.vue'

export default {
  name: 'HomeView',
  components: {
    BContainer,
    BRow,
    BCol,
    WeatherWidget,
    CountryDetail,
  },
  data() {
    return {
      cityEntered: '',
    }
  },
  computed: {
    cityName() {
      return this.$store.state.city
    },
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

    dateTime() {
      return this.$store.state.dateTime
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
    async getGeocoding() {
      if (this.cityEntered !== '') {
        await this.$store.dispatch({
          type: 'getGeocodingInfo',
          cityName: this.cityEntered,
        })
      }
    },

    async getData(city) {
      await this.$store.commit('updateCityName', { cityName: city.name })

      // Update lat and lon in the store
      await this.$store.commit('updateLatLon', city)

      await this.$store.dispatch('getDateTime')

      await this.$store.dispatch({
        type: 'getCountryInfo',
        countryCode: city.country,
      })

      await this.$store.dispatch({
        type: 'getWeatherInfo',
        cityData: city,
      })
    },
  },
}
</script>

<style scoped>
@import '~@/assets/scss/search.scss';
</style>
