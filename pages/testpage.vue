<template>
  <div>
    <v-app-bar dense flat>
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-left">Adara</v-toolbar-title>
      <v-spacer></v-spacer>
      <div @click="signOut">
        <v-icon>mdi-logout</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" permanent>
      <div class="row1">
        <v-list>
          <v-list-item class="px-2">
            <v-badge
              bottom
              left
              overlap
              offset-x="35"
              offset-y="35"
              icon="mdi-account-check-outline"
            >
              <div class="module-border-wrap">
                <img src="~/assets/profile.png" alt="" width="82px" />
              </div>
            </v-badge>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle
                ><v-icon>mdi-email</v-icon>
                sandra_a88@gmail.com</v-list-item-subtitle
              >
              <v-list-item-subtitle
                ><v-icon>mdi-cellphone</v-icon
                >099-999-9999</v-list-item-subtitle
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
        <v-btn
          class="align-self-center mt-3 mb-5 my-button redc"
          min-width="180"
        >
          logout
        </v-btn>
      </div>
    </v-navigation-drawer>
    <div class="row2">
      <v-card
        class="d-flex flex-column pa-3 card-round func-background"
        color="grey lighten-4"
        elevation="0"
        max-width="600px"
      >
        <div>ฟังก์ชั้น</div>
        <div class="d-flex func-row">
          <v-card
            class="
              d-flex
              flex-column
              justify-center
              mr
              menu
              card-round card-grow
            "
            @click="test"
          >
            <img
              class="align-self-center"
              src="~/assets/icons/chart.png"
              alt=""
              width="84px"
            />
            <v-card-title> dashboard </v-card-title>
          </v-card>
          <v-card
            class="d-flex flex-column justify-center menu card-round card-grow"
            @click="test"
          >
            <img
              class="align-self-center"
              src="~/assets/icons/megaphone.png"
              alt=""
              width="84px"
            />
            <v-card-title> promotion </v-card-title>
          </v-card>
        </div>
        <div class="d-flex func-row">
          <v-card
            class="d-flex flex-column justify-center menu card-round card-grow2"
            @click="test"
          >
            <img
              class="align-self-center"
              src="~/assets/icons/chart.png"
              alt=""
              width="84px"
            />
            <v-card-title> dashboard </v-card-title>
          </v-card>
          <v-card
            class="
              d-flex
              flex-column
              justify-center
              mx
              menu
              card-round card-grow2
            "
            @click="test"
          >
            <img
              class="align-self-center"
              src="~/assets/icons/megaphone.png"
              alt=""
              width="84px"
            />
            <v-card-title> promotion </v-card-title>
          </v-card>
          <v-card
            class="d-flex flex-column justify-center menu card-round card-grow2"
            @click="test"
          >
            <img
              class="align-self-center"
              src="~/assets/icons/chart.png"
              alt=""
              width="84px"
            />
            <v-card-title> dashboard </v-card-title>
          </v-card>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      exp: 20,
    }
  },
  methods: {
    signOut() {
      this.$fire.auth.signOut()
      this.$router.push({ name: 'auth-loginadmin' })
    },
    toggleMobileNav() {
      this.$store.dispatch('setDrawer', !this.$store.getters.getDrawer)
    },
    test() {
      console.log('test')
    },
  },
}
</script>

<style lang="scss" scoped>
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
.row2 {
  display: flex;
  justify-content: center;
  align-items: center;
  .card-round {
    border-radius: 10px;
    &.card-grow {
      flex-basis: 47%;
      align-items: center;
    }
    
  }
  .func-row {
    flex-direction: column;
    justify-content: space-between;
    .menu {
      padding: 20px 20px;
      margin: 16px;

      img {
        margin-top: 16px;
      }
      @media (min-width: 900px) {
        margin: 0px;
        width: 100%;
      }
      &.card-grow2 {
        max-width: 100%;
        align-items: center;
        @media (min-width: 900px) {
            width: fit-content;
            max-width: 80%;
        }
        }
    }
    @media (min-width: 900px) {
      margin-top: 16px;
      justify-content: space-between;
      flex-direction: row;
      .mr {
        margin-right: auto;
      }
      .mx {
        margin: 0 auto;
      }
    }
  }
  .func-background {
    width: fit-content;
    @media (min-width: 900px) {
      width: 100%;
    }
  }
}
</style>
