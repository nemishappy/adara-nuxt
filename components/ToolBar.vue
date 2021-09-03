<template>
    <v-app-bar dense flat clipped-left app>
      <v-app-bar-nav-icon class="hidden-md-and-up"
      @click="toggleMobileNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-left">Adara</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="checkRoute" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </div>
    </v-app-bar>
</template>

<script>
    export default {
        methods: {
            signOut() {
                this.$fire.auth.signOut()
                this.$router.push({ name: 'auth-loginadmin' })
            },
            toggleMobileNav() {
                this.$store.dispatch('setDrawer', !this.$store.getters.getDrawer)
            },
            goBack() {
                this.$router.go(-1)
            },
            checkRoute() {
                if(this.$route.name === "admin"){
                    return false
                }
                return true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>