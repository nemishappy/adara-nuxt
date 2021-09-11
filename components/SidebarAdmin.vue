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
    <v-divider class="hidden-md-and-up"></v-divider>
    <dir>
      <v-list>
        <v-list-item class="px-2">
          <div class="module-border-wrap">
            <img src="~/assets/profile.png" alt="" width="62px" />
          </div>
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
      <v-divider></v-divider>
      <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="deep-purple">
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item> 
            </v-list-item-group>
        </v-list>
    </dir>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      exp: 20,
      conditional: false,
      selectedItem: 0,
      items :[
          {icon: 'dashboard', text:'Dashboard', route: '/newtest/1'},
          {icon: 'person', text:'รายชื่อตัวแทน', route: '/newtest/2'},
          {icon: 'folder', text:'สต็อกสินค้า', route: '/newtest/3'},
          {icon: 'folder', text:'ของรางวัล', route: '/newtest/4'},
          {icon: 'folder', text:'Market Place', route: '/newtest/5'},
          {icon: 'person', text:'จัดการ Admin', route: '/newtest/6'}
      ]
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
<style lang="scss" scoped>

</style>
