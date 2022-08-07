<template>
  <div>
    <h2>{{ cityName }} | {{ state }} | {{ countryInfo.name }}</h2>
    <h1 class="">
      {{ weather.temp }}
      <span>°C</span>
    </h1>
    <img
      :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`"
      alt="weather icon"
      class=""
    >
    <p>{{ weather.weather.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidget',
  props: {
    cityName: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    countryCode: {
      type: String,
      default: '',
    },
    countryInfo: {
      type: Object,
      default: () => ({}),
    },
    weather: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
}
</script>
