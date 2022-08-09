<template>
  <div>
    <b-container fluid>
      <b-row
        class="text-center"
        style="border: 1px solid #cccccc; border-radius: 10px;"
      >
        <b-col
          class=""
          align="center"
        >
          <p>{{ state }}, {{ countryInfo.name }}</p>
          <p>Capital: {{ countryInfo.capital }}</p>
          <p>
            Flag:
            <b-avatar
              :src="countryInfo.flags.png"
              size="2rem"
            />
          </p>
          <p>
            Languages:
            <span
              v-for="(lang, index) in countryInfo.languages"
              :key="index"
            >
              {{ lang.name }} ({{ lang.nativeName }}),&nbsp;
            </span>
          </p>
          <p>Area: {{ countryInfo.area }}</p>
          <p>Population: {{ countryInfo.population }}</p>
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
}
</script>
