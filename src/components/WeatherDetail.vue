<template>
  <div>
    <b-container fluid>
      <b-row class="text-center">
        <b-col
          class=""
          align="center"
        >
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the
              card title and make up the bulk of the
              card's content.
            </b-card-text>

            <b-button
              href="#"
              variant="primary"
            >
              Go somewhere
            </b-button>
          </b-card>
        </b-col>
        <b-col align="center">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the
              card title and make up the bulk of the
              card's content.
            </b-card-text>

            <b-button
              href="#"
              variant="primary"
            >
              Go somewhere
            </b-button>
          </b-card>
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
  BCard,
} from 'bootstrap-vue'

export default {
  name: 'WeatherDetail',
  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
  },
  props: {},
  data() {
    return {}
  },
}
</script>
