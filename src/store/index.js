import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '',
    citiesList: {},
    state: '',
    countryCode: '',
    countryInfo: {},
    lat: 0,
    lon: 0,
    dateTime: null,
    weather: {},
    isDataRecived: false,
    OPEN_WEATHER_API_KEY: process.env.VUE_APP_OPEN_WEATHER_API_URL,
    BIT_API_KEY: process.env.VUE_APP_WEATHERBIT_API_KEY,
    NINJAS_API_KEY: process.env.VUE_APP_API_NINJAS_API_KEY,
  },
  getters: {
  },
  mutations: {
    updateCityName(state, payload) {
      state.city = payload.cityName
    },
    updateCitiesList(state, data) {
      state.citiesList = data
    },
    updateLatLon(state, payload) {
      state.lat = payload.lat
      state.lon = payload.lon
    },
    updateDateTime(state, data) {
      state.dateTime = data.datetime
    },
    updateCountryCode(state, payload) {
      state.countryCode = payload.countryCode
    },
    updateCountryInfo(state, countryInfo) {
      state.countryInfo = countryInfo
    },
    updateCityInfo(state, payload) {
      state.city = payload.cityData.name
      state.state = payload.cityData.state
      state.lat = payload.cityData.lat
      state.lon = payload.cityData.lon
    },
    updateWeatherInfo(state, weatherData) {
      state.weather = weatherData
    },
    setIsDataReceived(state, value) {
      state.isDataRecived = value
    },
  },
  actions: {
    async getGeocodingInfo(context, payload) {
      context.commit('updateCityName', payload)
      await context.dispatch('getCitiesList')
    },
    async getCountryInfo(context, payload) {
      context.commit('updateCountryCode', payload)
      await context.dispatch('fetchCountryInfo')
    },
    async getWeatherInfo(context, payload) {
      context.commit('updateCityInfo', payload)
      await context.dispatch('fetchWeatherInfo')
      context.state.citiesList = {}
    },
    async getCitiesList(context) {
      try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${context.state.city}&limit=5&appid=${context.state.OPEN_WEATHER_API_KEY}`)
        context.commit('updateCitiesList', response.data)
        // eslint-disable-next-line no-console
        // console.log('Cities list provided by OpenWeatherMap', response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error fetching cities list: ${error}`)
      }
    },
    async fetchCountryInfo(context) {
      try {
        const response = await axios.get(`https://restcountries.com/v2/alpha/${context.state.countryCode}`)
        context.commit('updateCountryInfo', response.data)
        // eslint-disable-next-line no-console
        // console.log('Country information provided by RESTCountries', response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error fetching country info: ${error}`)
      }
    },
    async getDateTime(context) {
      try {
        // const response = await axios.get(`https://timeapi.io/api/Time/current/coordinate?latitude=${context.state.lat}&longitude=${context.state.lon}`)
        // const response = await axios.get(`https://api.geotimezone.com/public/timezone?latitude=${context.state.lat}&longitude=${context.state.lon}`)
        const response = await axios.get('https://api.api-ninjas.com/v1/worldtime', {
          params: {
            city: context.state.city,
          },
          headers: {
            'X-Api-Key': context.state.NINJAS_API_KEY,
            'Content-Type': 'application/json',
          },
        })
        context.commit('updateDateTime', response.data)
        // eslint-disable-next-line no-console
        // console.log('Date and time information provided by API-Ninjas', response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error fetching date and time: ${error}`)
      }
    },
    async fetchWeatherInfo(context) {
      // // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${context.state.lat}&lon=${context.state.lon}&appid=${context.state.OPEN_WEATHER_API_KEY}`
      // axios.get(`https://api.weatherbit.io/v2.0/current?city=${context.state.city}&country=${context.state.countryCode}&key=${context.state.BIT_API_KEY}`)
      //   .then(response => {
      //     [context.state.weather] = response.data.data // same as -> context.state.weather = response.data.data[0]
      //     // eslint-disable-next-line no-console
      //     console.log('Weather information provided by WeatherBit', response)
      //     if (response.status === 200) {
      //       context.state.isDataRecived = true
      //     } else {
      //       context.state.isDataRecived = false
      //     }
      //   })
      //   .catch(error => {
      //     // eslint-disable-next-line no-console
      //     console.log('Error fetching the weather data:', error)
      //   })
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${context.state.lat}&lon=${context.state.lon}&appid=${context.state.OPEN_WEATHER_API_KEY}`)
        // eslint-disable-next-line no-console
        console.log('Weather information provided by OpenWeatherMap', JSON.stringify(response.data))
        if (response.status === 200) {
          context.commit('updateWeatherInfo', response.data)
          context.commit('setIsDataReceived', true)
        } else {
          context.commit('setIsDataReceived', false)
        }
      } catch (error) {
        context.commit('setIsDataReceived', false)
        // eslint-disable-next-line no-console
        console.error('Error fetching the weather data:', error)
      }
    },
  },
  modules: {
  },
})
