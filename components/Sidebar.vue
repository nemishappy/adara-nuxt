<template>
  <v-navigation-drawer
    v-if="user"
    v-model="getDrawer"
    v-click-outside="{
      handler: onClickOutsideWithConditional,
      closeConditional,
    }"
    :permanent="$vuetify.breakpoint.mdAndUp"
    color="#F4F5F9"
    clipped
    app
  >
    <v-list-item class="px-2 py-5 hidden-md-and-up">
      <v-list-item-title class="text-title" align="center">
        User
      </v-list-item-title>
      <v-icon x-large @click="setDrawer">mdi-chevron-left</v-icon>
    </v-list-item>
    <div class="row1">
      <v-list>
        <v-list-item class="px-2">
          <v-badge
            bottom
            left
            overlap
            offset-x="32"
            offset-y="32"
            icon="mdi-account-check-outline"
          >
            <div class="module-border-wrap">
              <img src="~/assets/profile.png" alt="" width="60px" />
            </div>
          </v-badge>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sandara Adams
            </v-list-item-title>

            <v-list-item-subtitle
              ><v-icon>mdi-email</v-icon>
              sandra_a88@gmail.com</v-list-item-subtitle
            >
            <v-list-item-subtitle
              ><v-icon>mdi-cellphone</v-icon>099-999-9999</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="d-flex justify-space-between px-7 pb-3 button">
        <v-btn outlined rounded text> ดูเพิ่มเติม </v-btn>
        <v-btn outlined rounded text> แก้ไขข้อมูล </v-btn>
      </div>
      <div class="d-flex flex-column justify-center px-10 card-member">
        <div class="d-flex justify-space-between">
          <p class="text--secondary">ระดับสมาชิก</p>
          <p class="font-weight-bold text-primary">Admin</p>
        </div>
        <v-card
          class="d-flex justify-center"
          color="grey lighten-4"
          height="154px"
        >
          <v-icon x-large>mdi-crown</v-icon>
        </v-card>
        <p class="text-center mt-2">Exp. 31/12/2020</p>
      </div>
      <div class="d-flex flex-column justify-center px-3">
        <v-progress-linear
          class="exp"
          :value="this.exp"
          color="rgb(255, 136, 0)"
          height="20"
          rounded
          striped
          readonly
        ></v-progress-linear>
        <div class="d-flex flex-row justify-space-between">
          <div class="d-flex flex-row">
            <v-icon color="yellow">mdi-star</v-icon>
            <p class="font-weight-bold text-center my-auto ml-2">
              <span class="text-primary">{{ exp }}</span
              >/100
            </p>
          </div>
          <p class="text--secondary text-caption text-right my-auto">
            สะสมอีก {{ 100 - exp }}
            <v-icon small>mdi-star</v-icon>
            <br />
            เพื่อปรับเป็นระดับ
            <span class="text--primary font-weight-bold">Super Admin</span>
          </p>
        </div>
      </div>
      <v-btn class="align-self-center mt-3 mb-5 my-button redc" min-width="180">
        logout
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      exp: 20,
      conditional: false,
      // user: {
      //   name: dasd,
      //   email: ddd,
      //   phone: dasdasd,
      //   rank: 'Admin',
      //   expdate: '-',
      // },
    }
  },
  computed: {
    getDrawer: {
      get() {
        return this.$store.getters.getDrawer
      },
      set(payload) {
        this.drawer = payload
      },
    },
    keepOpen() {
      return this.onClickOutside
    },
    user() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    onClickOutside() {
      return true
    },
    setDrawer() {
      this.$store.dispatch('setDrawer', false)
    },
    onClickOutsideWithConditional() {
      this.conditional = false
    },
    closeConditional(e) {
      return this.conditional
    },
  },
}
</script>
<style lang="scss">
.row1 {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .module-border-wrap {
    display: flex;
    justify-content: center;
    border: 10px transparent;
    border-radius: 100%;
    background-image: linear-gradient(
      128deg,
      rgb(255, 136, 0),
      rgb(240, 62, 240)
    );
    background-origin: border-box;
    background-clip: content-box, border-box;
    padding: 10px;

    img {
      padding: 2px;
      border-radius: 50%;
    }
  }
  .exp {
    border-radius: 25px;
  }
  .my-button {
    font-size: 20px !important;
    text-transform: none !important;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    &.redc {
      background-color: #ff3535;
    }
  }
}
</style>
