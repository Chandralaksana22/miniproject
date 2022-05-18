<template>
        <b-container>
            <b-card class="mt-4 mb-4 shadow">
                <b-row >
                    <b-col class="mt-n3 mb-n3" style="background-color: #007BFF" cols="12" md="6">
                        <h3 class="mt-5 ml-5 mr-5 text-white"> <strong>Kontak Informasi</strong></h3>
                        <h6 class="size text-white mr-5 ml-5">Isi formulis dan Cozy.ID akan mengubungi anda dalam waktu 24 jam</h6>
                        <div class="text-center mt-5 d-flex justify-content-center">
                            <img id="img-fluid"
                            src="https://i.postimg.cc/fT0T3p32/Saly-19.png"
                            alt="" />
                        </div>
                    </b-col>
                    <b-col cols="12" md="6" class="mt-5">
                        <div>
                            <b-form class="ml-5 mr-5" >
                            <strong><b-form-group
                                label="Nama Lengkap:"
                            >
                                <b-form-input
                                id="input-1"
                                type="name"
                                placeholder="Nama Lengkap"
                                class="d-block size border-0"
                                style="background-color: #F1FBFF;"
                                required
                                ></b-form-input>
                            </b-form-group></strong>

                            <strong><b-form-group label="Alamat Email :">
                                <b-form-input
                                id="input-2"
                                placeholder="Alamat Email"
                                class="d-block size border-0"
                                style="background-color: #F1FBFF;"
                                required
                                ></b-form-input>
                            </b-form-group></strong>

                            <strong><b-form-group  id="input-group-3" label="Saran dan Masukan:" label-for="input-3">
                            <b-form-textarea
                                    id="textarea-rows"
                                    placeholder="Saran dan Masukan"
                                    rows="4"
                                    class="d-block size border-0"
                                    style="background-color: #F1FBFF;"
                                ></b-form-textarea>
                            </b-form-group></strong>
                            <b-button block squared class="shadow" variant="primary">Kirim</b-button>
                            </b-form>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>

</template>
<style>
.size{
  font-size: 14px;
}
</style>