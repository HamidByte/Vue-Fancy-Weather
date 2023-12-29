<template>
  <div class="wrapper mt-4">
    <b-container fluid>
      <b-row
        class="text-center"
        style="border: 1px solid #cccccc; border-radius: 10px;"
      >
        <b-col
          class="p-4"
          align="center"
        >
          <h3>{{ city }}, {{ state }}, {{ countryInfo.name }}</h3>
          <p>Capital: {{ countryInfo.capital }}</p>
          <div class="flag-container">
            Flag:
            <b-avatar
              :src="countryInfo.flags.png"
              size="2rem"
            />
          </div>
          <p>
            Languages:
            <span
              v-for="(lang, index) in formattedLanguages"
              :key="index"
            >
              {{ lang }}
            </span>
          </p>
          <p>Area: {{ countryInfo.area }} km²</p>
          <p>Population: {{ formattedPopulation }}</p>
          <p>Region: {{ countryInfo.region }}</p>
          <p>Subregion: {{ countryInfo.subregion }}</p>
          <p>
            Timezones:
            <span
              v-for="(zone, index) in countryInfo.timezones"
              :key="index"
            >
              {{ zone }}
            </span>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
  BAvatar,
} from 'bootstrap-vue'

export default {
  name: 'CountryDetail',
  components: {
    BContainer,
    BRow,
    BCol,
    BAvatar,
  },
  props: {
    city: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    countryInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  computed: {
    formattedLanguages() {
      if (this.countryInfo.languages && this.countryInfo.languages.length > 0) {
        return this.countryInfo.languages.map((lang, index) => {
          // If it's the last language, don't append a comma
          if (index === this.countryInfo.languages.length - 1) {
            return `${lang.name} (${lang.nativeName})`
          }
          return `${lang.name} (${lang.nativeName}),`
        })
      }

      // Return an empty array if there are no languages
      return []
    },
    formattedPopulation() {
      return this.countryInfo.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>

<style scoped>
</style>
