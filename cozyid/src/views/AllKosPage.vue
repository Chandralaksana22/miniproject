<template>
    <body>
      <b-container class="mt-4">
        <ApolloQuery
          :query="require ('../graphql/getAllKos.gql')"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
            <div>
              <b-img src="https://i.postimg.cc/wBYm6Dvv/beautiful-shot-ponte-vecchio-florence-tuscany-italy-1.png" rounded class="mt-5" fluid alt="Responsive image"></b-img>
            </div>
            <div class="formcari">
              <b-row style="margin-top: -2.5rem;">
                <b-col md="6" offset-md="3">
                  <b-card style="max-width:906px" class="text-center shadow">
                    <div>
                      <b-row class="d-flex justify-content-center">
                        <b-col cols="6" md="9" class="mr-n4">
                          <b-form-input
                          id="inline-form-input-name"
                          class="d-block size border-0"
                          placeholder="Masukkan Alamat"
                          style="background-color: #F1FBFF; font-size: 12px;"
                        ></b-form-input>
                        </b-col>
                        <b-col cols="6" md="3">
                          <b-button style="font-size:12px" variant="primary">Cari Kosan</b-button>
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
            </div>
            <b-row class="mb-5 mt-5">
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
      </b-container>
    </body>
</template>
<script>
export default {
  name: "HomePage",
  components: {

  },
  methods : {
    redirect(id) {
      this.$router.push(`/DetailPage/${id}`);
    },
  }
}
</script>