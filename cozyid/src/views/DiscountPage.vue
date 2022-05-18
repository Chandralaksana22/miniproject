<template>
        <ApolloQuery
          :query="require ('../graphql/getDisc.gql')"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
            <b-row>
              <b-col cols="12" md="6">
                <b-row class="p-5">
                  <b-col cols="12" md="12" v-for="kos in data.kos" :key="kos.id">
                      <b-card no-body class="overflow-hidden shadow mb-2" style="max-width: 540px;">
                  <b-row no-gutters @click="redirect(kos.id)">
                    <b-col md="4">
                      <b-card-img :src="kos.thumbnail" style="height:120px" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="8">
                      <b-card-body>
                        <b-card-text>
                          <b-row >
                            <b-col cols="6" md="6">
                              <h6 class="textheaddisc text-truncate"><strong>{{kos.nama}}</strong></h6>
                            </b-col>
                            <b-col cols="6" md="6" class="text-right">
                              <a class="mb-1 size text-truncate" disabled style="color: #00AFEF;"><small>Kos {{kos.tipe}}</small></a>
                            </b-col>
                          </b-row>
                          <h6 class="texttdisc text-truncate">{{kos.alamat}}</h6>
                          <h6 class="mt-n2 text-muted texttdisc text-truncate"><a v-if="kos.Kamar_mandi_dalam">Kamar Mandi Dalam ・ </a> <a v-if="kos.Kamar_mandi_luar">Kamar Mandi Luar ・ </a> <a v-if="data.Kulkas">Kulkas ・ </a> <a v-if="kos.Lemari">Lemari ・</a></h6>
                          <h6 class="mt-n1 texttdiscs text-primary text-truncate" style="font-size: 12px;">Rp <del class="text-danger">{{kos.harga}}</del> {{kos.harga_diskon}}/Bulan</h6>
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" md="6">
               <h3 class="mt-5 ml-5 mr-5 text-black"> <strong>Potongan Harga</strong></h3>
                  <h6 class="size text-black mr-5 ml-5">Dapatkan potongan harga dengan memesan secara online</h6>
                    <div class="text-center mt-5 d-flex justify-content-center">
                      <img id="img-fluid" src="https://i.postimg.cc/Tw7bXHKr/Saly-1.png" alt="" />
                    </div>
              </b-col>
            </b-row>
            
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">
              
            </div>
          </template>
        </ApolloQuery>
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