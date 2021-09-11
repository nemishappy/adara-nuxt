<template>
  <div class="home" v-if="this.$store.getters.getMemberLoaded">
    <v-container class="mt-0">
      <div>
        <v-card-title>
          <v-icon class="mr-3">dashboard</v-icon>
            Dashboard
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card
          class="
            d-flex
            justify-space-around
            align-self-center
            mb-6
            block-wrapper
          "
          flat
          tile
        >
        
          <v-card class="pa-2 my-3 mx-1 my-card" color="cyan darken-1">
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
          <v-card class="pa-2 my-3 mx-1 my-card" color="pink darken-1">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="white--text mb-4">ยอดออร์เดอร์สั่งซื้อทั้งหมด</div>
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
          <v-card class="pa-2 my-3 mx-1 my-card" color="orange darken-1">
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
          <v-card class="pa-2 my-3 mx-1 my-card" color="red lighten-1">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="white--text mb-4">ขาดทุน</div>
                <v-list-item-title class="text-h5 white--text mb-1">
                  {{ getMember.length }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar
                class="align-self-center"
                size="50"
                color="red lighten-3"
                ><v-icon color="white"
                  >mdi-account-check-outline</v-icon
                ></v-list-item-avatar
              >
            </v-list-item>
          </v-card>
        </v-card>
      </div>
      <v-card>
        <v-card-title>
          รายชื่อตัวแทน
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="getMember"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('setMembers')

    // this.checkScreen()
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
      search: '',
      headers: [
        {
          text: 'ชื่อ',
          align: 'start',
          sortable: false,
          value: 'fullname',
        },
        { text: 'Email', sortable: false, value: 'email' },
        { text: 'เบอร์โทรศัพท์', sortable: false, value: 'phone' },
        { text: 'จำนวนสั่งซื้อ', value: 'totalOrder' },
        { text: 'ยอดรวม', value: 'netTotal' },
      ],
    }
  },
  methods: {
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
