<template>
  <body>
      <div>
        <b-img src="https://i.postimg.cc/wBYm6Dvv/beautiful-shot-ponte-vecchio-florence-tuscany-italy-1.png" rounded class="mt-5" fluid alt="Responsive image"></b-img>
      </div>
      <div class="mt-4">
        <h6><strong>Sulit dalam mencari kosan?</strong></h6>
        <h6 class="text-muted">Dapatkan kosan dan langsung sewa di Cozy.Id</h6>
      </div>
      <div class="mt-5">
        <h6 class="mb-3"><strong>Rekomendasi</strong></h6>
        <ApolloQuery
          :query="require ('../graphql/getkoshome.gql')"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
            <b-row class="mb-5">
              <b-col cols="6" md="3" v-for="kos in data.kos" :key="kos.id">
                <b-card
                  :img-src="kos.thumbnail"
                  img-alt="Image"
                  img-top
                  class="mb-2 shadow"
                  style="max-width: 257px; max-height: 320px;"
                  @click="redirect(kos.id)"
                > 
                  <a class="mb-1 mr-5 size" disabled style="color: #00AFEF;"><small>Kos {{kos.tipe}}</small></a>
                  <a class="mb-1 ml-4 size" disabled style="color: red;"><small>Sisa {{kos.sisa}} Kamar</small></a>
                  <h6 class="size">{{kos.nama}}</h6>
                  <h6 class="size"><strong>{{kos.alamat}}</strong></h6>
                  <h6 class="mt-n1 text-muted size text-truncate">Kamar mandi dalam ・ Dapur ・ Wifi ・ Parikiran</h6>
                  <h6 class="mt-n1 size">Rp {{kos.harga}}/Bulan</h6>
                </b-card>
              </b-col>
            </b-row>
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
          </template>
        </ApolloQuery>
      </div>
      <div class="mt-5">
        <h6 class="mb-3"><strong>Harga Diskon</strong></h6>
      </div>
  </body>
</template>

<script>

export default {
  name: 'HomePage',
  components: {

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
.size{
  font-size: 14px;
}
</style>
