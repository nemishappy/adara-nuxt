<template>
  <div class="home" v-if="this.$store.getters.getMemberLoaded">
    <v-toolbar class="mt-5" flat>
      <v-toolbar-title class="toolbar-title">
        <span class="caption">Overview Dashboard</span><br>Tranding View
      </v-toolbar-title>
      
      
      <div @click="signOut" class="option">
                <v-icon>mdi-logout</v-icon>
      </div>
    </v-toolbar>
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2" elevation="0">
                          <v-icon color="white">mdi-currency-usd</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        ฿{{ getMember.map(amount_m).reduce(sum) }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text">ยอดเงินสุทธิทั้งหมด</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <img src="~/assets/wallet.png" alt="" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{hover }" open-delay="200">
            <v-card color="pink darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="pink lighten-2" elevation="0">
                          <v-icon color="white">mdi-cart-check</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        {{ getMember.map(amount_o).reduce(sum) }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text">ยอดออร์เดอร์สั่งซื้อทั้งหมด</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <img src="~/assets/wallet.png" alt="" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="orange darken-1" :elevation="hover ? 16 :2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="orange lighten-2" elevation="0">
                          <v-icon color="white">mdi-account-check-outline</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        {{ getMember.length }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text">ตัวแทนทั้งหมด</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <img src="~/assets/wallet.png" alt="" />
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in getMember" :key="person.userId">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="person.pictureUrl" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-title" v-if="person.Name == null">{{ person.displayName }}</div>
              <div class="text-title" v-else>{{ person.Name }}</div>
              <div class="text-desc text-left">ยอดสั่งซื้อ: {{ person.totalOrder }}</div>
              <div class="text-desc text-left">ยอดเงินสุทธิ: {{ person.netTotal }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined color="orange" :to="{name: 'dashboard-member-uid', params: {uid: person.userId}}">
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
  name: "dashboard",
  created() {
    this.$store.dispatch("setMembers");
  },
  computed: {
    getMember(){
      return this.$store.getters.getMembers
    }
  },
  data: () => ({
  }),
  methods: {
    signOut(){
      this.$fire.auth.signOut();
      this.$router.push({ name: 'auth-loginadmin' })
    },
    amount_o(item){
      return item.totalOrder;
    },
    amount_m(item){
      return item.netTotal;
    },
    sum(prev, next){
      return prev + next;
    },
  }
}
</script>

<style lang="scss" scoped>
.toolbar-title{
  width: fit-content;
}
.option {
  position: relative;
  margin-left: 80%;
}
.text-desc {
  font-size: 16px;
}

</style>
