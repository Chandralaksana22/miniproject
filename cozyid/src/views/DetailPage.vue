<template>
<b-container>
  <body>
      <ApolloQuery
            :query="require ('../graphql/getDetail.gql')"
            :variables="{ id : kosId }"
        >
        <template v-slot="{ result: { loading, error, data } }">
  
        <div v-if="loading" class="loading apollo">
        <div class="text-center">
          <b-spinner label="Spinning"></b-spinner>
          <b-spinner type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="success" label="Spinning"></b-spinner>
          <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
        </div>
        </div>
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <div v-else-if="data" class="result apollo">
            <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000; max-width: 1294px; max-height: 471px;"
                fade
                class="shadow mt-5 mb-5"
                :interval="4000"
                indicators
            >
                <b-carousel-slide style="max-width: 1294px; max-height: 471px;" :img-src="data.kos_by_pk.thumbnail"></b-carousel-slide>
                <b-carousel-slide style="max-width: 1294px; max-height: 471px;" :img-src="data.kos_by_pk.pict1"></b-carousel-slide>
                <b-carousel-slide style="max-width: 1294px; max-height: 471px;" :img-src="data.kos_by_pk.pict2"></b-carousel-slide>
                <b-carousel-slide style="max-width: 1294px; max-height: 471px;" :img-src="data.kos_by_pk.pict3"></b-carousel-slide>
                <b-carousel-slide style="max-width: 1294px; max-height: 471px;" :img-src="data.kos_by_pk.pict4"></b-carousel-slide>
            </b-carousel>
            <b-card class="mt-n1 shadow">
            <b-card-text>
              <b-row >
                <b-col cols="6" md="6">
                  <h6 class="mb-3 ml-4"><strong>{{data.kos_by_pk.nama}}</strong></h6>
                  <h6 class="text-muted ml-4 mt-n2">{{data.kos_by_pk.alamat}}</h6>
                </b-col>
                <b-col cols="6" md="6" class="text-right">
                  <h6 class="mr-4"><strong>Rp. {{data.kos_by_pk.harga}} / Bulan</strong></h6>
                  <h6 class="mb-3 size mr-4" style="color:#00AFEF" v-if="data.kos_by_pk.diskon">Harga Diskon {{data.kos_by_pk.harga_diskon}}</h6>
                  <b-button class="mr-4 mt-n3 btn-sm" variant="primary">Pesan Kos Sekarang</b-button>
                  
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>  
        <b-card class="mt-2 shadow">
          <h6 class="mb-3 ml-4"><strong>Review</strong></h6>
          <b-row class="ml-2 mr-2"> 
            <b-col cols="12" mb="6" class="mb-2" v-for="kos_by_pk in data.kos_by_pk.comments" :key="kos_by_pk">
              <b-card class="shadow">
                <b-img left :src="kos_by_pk.foto" class="mr-3 mt-2" rounded="circle" alt="Circle image"></b-img>
                <h6 class="mt-3">{{kos_by_pk.nama}}</h6>
                <p> <small>{{kos_by_pk.komentar}}</small></p>
              </b-card>
            </b-col>
          </b-row>
        </b-card>        
        <b-card class="mt-2 shadow text-muted">
          <h6 class="mb-3 ml-4"><strong>Fasilitas</strong></h6>
          <b-row>
            <b-col cols="6" md="3">
              <h6 class="text-muted ml-4">Fasilitas Kos</h6>
              <ul>
                <li class="list-unstyled" v-if="data.kos_by_pk.Kamar_mandi_dalam"><b-icon-badge-wc class="mr-2" />Kamar Mandi Dalam</li>
                <li class="list-unstyled" v-if="data.kos_by_pk.Kamar_mandi_luar"><b-icon-badge-wc  class="mr-2" />Kamar Mandi Luar</li>
                <li class="list-unstyled" v-if="data.kos_by_pk.wifi"><b-icon-wifi class="mr-2" />Wifi</li>
                <li class="list-unstyled" v-if="data.kos_by_pk.Kulkas"><b-icon-snow class="mr-2" />Kulkas</li>
              </ul>
            </b-col>
            <b-col cols="6" md="3" class="mt-4">
              <ul>
                <li class="list-unstyled" v-if="data.kos_by_pk.Tv"><b-icon-tv class="mr-2" />TV</li>
                <li class="list-unstyled" v-if="data.kos_by_pk.Lemari"><b-icon-square-half class="mr-2" />Lemari</li>
                <li class="list-unstyled" v-if="data.kos_by_pk.dapur"><b-icon-border-all class="mr-2" />Dapur</li>
                <li class="list-unstyled" v-if="data.kos_by_pk.laundry"><b-icon-box class="mr-2" />Laundry</li>
              </ul>
            </b-col>
            <b-col cols="6" md="3">
              <h6 class="text-muted ml-4">Luas Kamar</h6>
              <ul>
                <li class="list-unstyled" v-if="data.kos_by_pk.luas_kamar"><b-icon-arrows-angle-expand class="mr-2" />{{data.kos_by_pk.luas_kamar}}</li>
              </ul>
            </b-col>
            <b-col cols="6" md="3">
              <h6 class="text-muted ml-4">Aturan</h6>
              <ul>
                <li v-if="data.kos_by_pk.denda">Denda Kerusakan Kos</li>
                <li v-if="data.kos_by_pk.pasangan">Dilarang Membawa Lawan Jenis Masuk Kamar</li>
                <li v-if="data.kos_by_pk.rokok">Dilarang Merokok</li>
              </ul>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="mt-2 mb-2 shadow text-muted">
          <h6 class="mb-3 ml-4"><strong>Peta</strong></h6>
          <b-row>
            <b-col cols="6" md="6">
              <div>
                <ul>
                <li class="list-unstyled" v-if="data.kos_by_pk.lokasi"><b-icon-geo-alt-fill class="mr-2"/>{{data.kos_by_pk.alamat}}</li>
              </ul>
              </div>
            </b-col>
            <b-col cols="6" md="6">
              <div>
              <b-embed
                type="iframe"
                aspect="16by9"
                :src="data.kos_by_pk.lokasi" 
                allowfullscreen
              ></b-embed>
            </div>
            </b-col>
          </b-row>
        </b-card>
        </div>
        <div v-else class="no-result apollo">
          <div class="text-center mt-5 mb-5">
          <b-spinner label="Spinning"></b-spinner>
          <b-spinner type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="success" label="Spinning"></b-spinner>
          <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
        </div>
        </div>
        </template>
        </ApolloQuery>
    <ApolloQuery
          :query="require ('../graphql/getkoshome.gql')"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">
            <div class="text-center">
              <b-spinner label="Spinning"></b-spinner>
              <b-spinner type="grow" label="Spinning"></b-spinner>
              <b-spinner variant="primary" label="Spinning"></b-spinner>
              <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              <b-spinner variant="success" label="Spinning"></b-spinner>
              <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
            </div>
            </div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
          <div class="mt-5">
            <h6 class="mb-3"><strong>Rekomendasi Lainnya</strong></h6>
          </div>
            <b-row class="mb-5">
              <b-col cols="6" md="3" class="mb-3" v-for="kos in data.kos" :key="kos.id">
                <b-card
                  :img-src="kos.thumbnail"
                  img-alt="Image"
                  img-top
                  rounded="top"
                  class="mb-2 shadow"
                  style="max-width: 257px; max-height: 320px;"
                  @click="redirect(kos.id)"
                > 
                  <b-row >
                    <b-col cols="5" md="6">
                      <a class="mb-1 size text-truncate" disabled style="color: #00AFEF;"><small>Kos {{kos.tipe}}</small></a>
                    </b-col>
                    <b-col cols="5" md="6" class="text-right">
                      <a class="mb-1 size text-truncate" disabled style="color: red;"><small>Sisa {{kos.sisa}} Kamar</small></a>
                    </b-col>
                  </b-row>
                  <h6 class="size text-truncate">{{kos.nama}}</h6>
                  <h6 class="size text-truncate"><strong>{{kos.alamat}}</strong></h6>
                  <h6 class="mt-n1 text-muted size text-truncate"><a v-if="kos.Kamar_mandi_dalam">Kamar Mandi Dalam ・ </a> <a v-if="kos.Kamar_mandi_luar">Kamar Mandi Luar ・ </a> <a v-if="data.Kulkas">Kulkas ・ </a> <a v-if="kos.Lemari">Lemari ・</a></h6>
                  <h6 class="mt-n1 size text-primary text-truncate" style="font-size: 12px;">Rp {{kos.harga}}/Bulan</h6>
                </b-card>
              </b-col>
            </b-row>
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">
              
            </div>
          </template>
        </ApolloQuery>
  </body>
</b-container>  

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
  methods : {
    redirect(id) {
      this.$router.push(`/DetailPage/${id}`);
    },
  }
}
</script>

<style>
h6.size {
  font-size: 14px;
}
.size {
  font-size: 14px;
}
</style>
