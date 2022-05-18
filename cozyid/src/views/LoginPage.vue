<template>
    <b-row>
              <b-col cols="12" md="5" class="p-5 mb-n5" style="background-color: #007BFF">
               <h3 class="text-white"> <strong>Cozy.Id</strong></h3>
                  <h5 class="text-white">Hanya dengan beberapa klik <br> untuk menemukan kosan impianmu</h5>
                    <div class="text-center d-flex justify-content-center">
                      <img id="img-fluid" src="https://i.postimg.cc/y8whLMNF/Saly-10.png" alt="" />
                    </div>
              </b-col>
              <b-col cols="12" md="7" class="p-5">
                  <div class="p-5">
                    <h3 class="textnavy mt-5"><strong>Masuk</strong></h3>
                    <h6 class="textnavy mt-3"><strong>Masuk</strong></h6>
                    <h6 class="textnavy"> <small>Termakasih telah kembali ke Cozy.Id, mari akses rekomendasi  kos terbaik untuk anda</small></h6>
                      <b-form class="mt-5">
                            <strong><b-form-group label="Alamat Email" class="textnavy">
                                <b-form-input
                                id="input-2"
                                placeholder="Alamat Email"
                                class="d-block size border-0"
                                style="background-color: #F1FBFF;"
                                required
                                ></b-form-input>
                            </b-form-group></strong>
                            <strong><b-form-group label="Kata Sandi" class="textnavy">
                                <b-form-input
                                id="input-2"
                                placeholder="Kata Sandi"
                                class="d-block size border-0"
                                style="background-color: #F1FBFF;"
                                required
                                ></b-form-input>
                            </b-form-group></strong>
                            <b-button block class="shadow" to="/"  variant="primary">Masuk</b-button>
                            <h6 class="textnavy mt-2"> <small>Belum Memiliki Akun? <strong>Daftar Sekarang</strong></small></h6>
                        </b-form>
                  </div>
              </b-col>
            </b-row>
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
.textnavy{
    color:#0E185F;
}
</style>