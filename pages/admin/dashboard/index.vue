<template>
  <div class="home" v-if="this.$store.getters.getMemberLoaded">
    <!-- <v-toolbar class="mt-5" flat>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleMobileNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="toolbar-title">
        <span class="caption">Overview Dashboard</span><br />Tranding View
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div @click="signOut" class="option">
        <v-icon>mdi-logout</v-icon>
      </div>
    </v-toolbar> -->
    <v-container class="mt-5">
      <div>
        <v-card
          class="d-flex justify-space-around align-self-center mb-6 block-wrapper"
          flat
          tile
        >
          <v-card class="pa-2 my-3 mx-1 my-card" color="cyan darken-1"  >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="white--text mb-4">ยอดเงินสุทธิทั้งหมด</div>
                <v-list-item-title class="text-h5 white--text mb-1">
                  ฿ {{ getMember.map(amount_m).reduce(sum) }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar
                class="align-self-center"
                size="50"
                color="cyan lighten-2"
                ><v-icon color="white"
                  >mdi-currency-usd</v-icon
                ></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
          <v-card class="pa-2 my-3 mx-1 my-card" color="pink darken-1" >
            <v-list-item three-line>
              <v-list-item-content>
                <div class=" white--text mb-4">ยอดออร์เดอร์สั่งซื้อทั้งหมด</div>
                <v-list-item-title class="text-h5 white--text mb-1">
                  {{ getMember.map(amount_o).reduce(sum) }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar
                class="align-self-center"
                size="50"
                color="pink lighten-2"
                ><v-icon color="white"
                  >mdi-cart-check</v-icon
                ></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
          <v-card class="pa-2 my-3 mx-1 my-card" color="orange darken-1" >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="white--text mb-4">ตัวแทนทั้งหมด</div>
                <v-list-item-title class="text-h5 white--text mb-1">
                  {{ getMember.length }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar
                class="align-self-center"
                size="50"
                color="orange lighten-2"
                ><v-icon color="white"
                  >mdi-account-check-outline</v-icon
                ></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
        </v-card>
      </div>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="person in getMember"
          :key="person.userId"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="person.pictureUrl" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-title" v-if="person.Name == null">
                {{ person.displayName }}
              </div>
              <div class="text-title" v-else>{{ person.Name }}</div>
              <div class="text-desc text-left">
                ยอดสั่งซื้อ: {{ person.totalOrder }}
              </div>
              <div class="text-desc text-left">
                ยอดเงินสุทธิ: {{ person.netTotal }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                outlined
                color="orange"
                :to="{
                  name: 'admin-dashboard-member-uid',
                  params: { uid: person.userId },
                }"
              >
                <v-icon small left>mdi-pencil-outline</v-icon>
                <span>Edit</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  created() {
    this.$store.dispatch('setMembers')

    this.checkScreen()
  },
  computed: {
    getMember() {
      return this.$store.getters.getMembers
    },
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
      items: [
        {
          icon: 'mdi-currency-usd',
          color: 'cyan darken-1',
          title: 'ยอดเงินสุทธิทั้งหมด',
          text: '',
        },
      ],
    }
  },
  methods: {
    signOut() {
      this.$fire.auth.signOut()
      this.$router.push({ name: 'auth-loginadmin' })
    },
    checkScreen() {
      if (typeof window !== 'undefined') {
        // browser code
        this.windownWidth = window.innerWidth
        if (this.windownWidth <= 850) {
          this.mobile = true
          this.toggleMobileNav()
          return
        }
        this.mobile = false
        return
      }
      return
    },

    MobileNav() {
      this.$store.dispatch('setDrawer', !this.$store.getters.getDrawer)
    },
    toggleMobileNav() {
      this.$store.dispatch('setDrawer', !this.$store.getters.getDrawer)
    },
    amount_o(item) {
      return item.totalOrder
    },
    amount_m(item) {
      return item.netTotal
    },
    sum(prev, next) {
      return prev + next
    },
  },
}
</script>

<style lang="scss" scoped>
.block-wrapper {
  display: flex;
  flex-direction: column;
  height: fit-content;
  @media (min-width: 700px) {
    min-height: 100px;
    max-height: 650px;
    justify-self: center;
    flex-direction: row;
  }
  .my-card {
    width: 100%;
    @media (min-width: 700px) {
      max-width: 344px;
    }
  }
}
.toolbar-title {
  width: fit-content;
}
.option {
  position: relative;
}
.text-desc {
  font-size: 16px;
}
</style>
