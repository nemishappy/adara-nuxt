<template>
  <div>
    <div class="row">
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
            :to="{name: 'admin-dashboard'}"
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

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0px;
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
    width: 80%;
    @media (min-width: 900px) {
      width: 100%;
    }
  }
}
</style>
