<template>
<b-container>
  <body>
        <ApolloQuery
          :query="require ('../graphql/getkoshome.gql')"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">
            
            <b-row>
              <b-col cols="12" class="mt-3">
                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
              </b-col>
              <b-col cols="6" md="3">
                <b-skeleton-img></b-skeleton-img>
              </b-col>
              <b-col cols="6" md="3">
                <b-skeleton-img></b-skeleton-img>
              </b-col>
              <b-col cols="6" md="3">
                <b-skeleton-img></b-skeleton-img>
              </b-col>
              <b-col cols="6" md="3">
                <b-skeleton-img></b-skeleton-img>
              </b-col>
            </b-row>
            </div>

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
          <div class="mt-4">
            <h6><strong>Sulit dalam mencari kosan?</strong></h6>
            <h6 class="text-muted">Dapatkan kosan dan langsung sewa di Cozy.Id</h6>
          </div>
          <div class="mt-5">
            <b-row>
              <b-col cols="6" md="6">
                <h6 class="mb-3"><strong>Rekomendasi</strong></h6>
              </b-col>
              <b-col cols="6" md="6" class="text-right">
                <b-button class="mb-3 border-0" to="/AllKosPage" size="sm"  variant="link" >Lihat Selengkapnya</b-button>
              </b-col>
            </b-row>
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
      <div class="mt-5">
        <h6 class="mb-3"><strong>Harga Diskon</strong></h6>
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
            <b-row class="mb-5">
            <b-col cols="12" md="4" v-for="kos in data.kos" :key="kos.id">
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
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">
              <b-row>
                <b-col cols="6" md="4">
                  <b-skeleton-img></b-skeleton-img>
                </b-col>
                <b-col cols="6" md="4">
                  <b-skeleton-img></b-skeleton-img>
                </b-col>
                <b-col cols="6" md="4">
                  <b-skeleton-img></b-skeleton-img>
                </b-col>
              </b-row>
            </div>
          </template>
        </ApolloQuery>
      </div>
      <div class="mt-5">
      <h6 style="margin-bottom: 5rem;" ><strong>Kata mereka tentang Cozy.Id</strong></h6>
      <ApolloQuery
          :query="require ('../graphql/getRev.gql')"
        >
          <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
            <b-row class="mb-5">
              <b-col class="d-flex" cols="12" md="4" v-for="review_cozy in data.review_cozy" :key="review_cozy.id">
                <b-card-group deck>
                  <b-card style="margin-bottom: 4rem;" class="shadow flex-fill">
                    <b-img center :src="review_cozy.foto" style="margin-top: -4rem;" rounded="circle" alt="Circle image"></b-img> 
                      <blockquote class="blockquote text-center">
                        <p class="mb-0 mt-2 size"><strong>{{review_cozy.nama}}</strong></p>
                        <footer class="text-muted size">{{review_cozy.pekerjaan}}</footer>
                      </blockquote>
                      <p class="text-justify size">{{review_cozy.komentar}}</p>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">
              <b-row class="mb-4">
                <b-col cols="6" md="4">
                  <b-skeleton-img></b-skeleton-img>
                </b-col>
                <b-col cols="6" md="4">
                  <b-skeleton-img></b-skeleton-img>
                </b-col>
                <b-col cols="6" md="4">
                  <b-skeleton-img></b-skeleton-img>
                </b-col>
              </b-row>
            </div>
          </template>
        </ApolloQuery>
      </div>
  </body>
</b-container>
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
.textheaddisc{
  font-size: 12px;
  color: black;
}
h6.texttdisc{
  font-size: 12px;
}
.responsive {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 1008px) {
  div.formcari {
    display: none;
  }
}

</style>
