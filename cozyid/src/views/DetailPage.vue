<template>
  <body>
    <ApolloQuery
      :query="require('../graphql/getPict.gql')"
      :variables="{ id: kosId }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>

        <div v-else-if="error" class="error apollo">An error occurred</div>

        <div v-else-if="data" class="result apollo">
          <b-carousel
            id="carousel-fade"
            style="
              text-shadow: 0px 0px 2px #000;
              max-width: 1294px;
              max-height: 471px;
            "
            fade
            :interval="4000"
            indicators
            class="mt-5"
          >
            <b-carousel-slide
              style="max-width: 1294px; max-height: 471px"
              :img-src="data.kos_by_pk.thumbnail"
            ></b-carousel-slide>
            <b-carousel-slide
              style="max-width: 1294px; max-height: 471px"
              :img-src="data.kos_by_pk.pict1"
            ></b-carousel-slide>
            <b-carousel-slide
              style="max-width: 1294px; max-height: 471px"
              :img-src="data.kos_by_pk.pict2"
            ></b-carousel-slide>
            <b-carousel-slide
              style="max-width: 1294px; max-height: 471px"
              :img-src="data.kos_by_pk.pict3"
            ></b-carousel-slide>
            <b-carousel-slide
              style="max-width: 1294px; max-height: 471px"
              :img-src="data.kos_by_pk.pict4"
            ></b-carousel-slide>
          </b-carousel>
          <b-card title="Fasilitas" class="mt-2 shadow">
            <b-card-text>
              <ul>
                <li class="fontdetail">Wifi</li>
                <li class="fontdetail">Kamar Mandi Dalam</li>
                <li class="fontdetail">Dapur</li>
                <li class="fontdetail">Parkiran</li>
                <li class="fontdetail">Listrik Gratis</li>

                <span style="display: flex; flex-direction: row">
                  <b-icon-wifi v-if="data.kos_by_pk.wifi" />
                  <p>Wifi</p>
                </span>

                <b-icon-tv-fill v-if="data.kos_by_pk.Tv" />
                <b-icon-thermometer-low v-if="data.kos_by_pk.Kulkas" />
              </ul>
            </b-card-text>
          </b-card>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </body>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  computed: {
    kosId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
h6.size {
  font-size: 14px;
}
.size {
  font-size: 14px;
}
</style>
