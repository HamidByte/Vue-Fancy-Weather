import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '',
    state: '',
    countryCode: '',
    countryInfo: {},
    lat: 0,
    lon: 0,
    citiesList: {},
    isDataRecived: false,
    weather: {},
    OPEN_API_KEY: process.env.VUE_APP_OPEN_WEATHER_API_URL,
    BIT_API_KEY: process.env.VUE_APP_WEATHERBIT_API_KEY,
  },
  getters: {
  },
  mutations: {
    updateCityName(state, payload) {
      state.city = payload.city
    },
    updateCitiesList(state) {
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${state.city}&limit=5&appid=${state.OPEN_API_KEY}`)
        .then(response => {
          // console.log(response)
          state.citiesList = response.data
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('There was an error:', error)
        })
    },
    updateCountryCode(state, payload) {
      state.countryCode = payload.countryCode
    },
    updateCountryInfo(state) {
      axios.get(`https://restcountries.com/v2/alpha/${state.countryCode}`)
        .then(response => {
          // console.log(response)
          state.countryInfo = response.data
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('There was an error:', error)
        })
    },
    updateCityInfo(state, payload) {
      state.city = payload.cityData.name
      state.state = payload.cityData.state
      state.countryCode = payload.cityData.country
      state.lat = payload.cityData.lat
      state.lon = payload.cityData.lon
    },
    updateWeatherInfo(state) {
      // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${state.lat}&lon=${state.lon}&appid=${state.OPEN_API_KEY}`
      axios.get(`https://api.weatherbit.io/v2.0/current?city=${state.city}&country=${state.countryCode}&key=${state.BIT_API_KEY}`)
        .then(response => {
          // console.log(response)
          [state.weather] = response.data.data // same as state.weather = response.data.data[0]
          if (response.status === 200) {
            state.isDataRecived = true
          } else {
            state.isDataRecived = false
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('There was an error:', error)
        })
    },
  },
  actions: {
    getGeocodingInfo(context, payload) {
      context.commit('updateCityName', payload)
      context.commit('updateCitiesList')
      // context.state.isDataRecived = false
    },
    getCountryInfo(context, payload) {
      context.commit('updateCountryCode', payload)
      context.commit('updateCountryInfo')
    },
    getWeatherInfo(context, payload) {
      context.commit('updateCityInfo', payload)
      context.commit('updateWeatherInfo')
      context.state.citiesList = {}
    },
  },
  modules: {
  },
})
