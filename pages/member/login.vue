<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">Welcome</div>
        </v-col>
        <v-col cols="12" class="text-center pb-0 profile-img">
          <img
            v-if="getLine.pictureUrl == null"
            src="~/assets/profile.png"
            alt=""
            width="155"
          />
          <img v-else :src="getLine.pictureUrl" alt="" width="155" />
        </v-col>
        <v-col cols="12" class="text-center pt-2 pb-0">
          {{getMember.profile.firstname}} {{getMember.profile.lastname}}
        </v-col>
        <v-col cols="12">
          <v-form>
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-10 my-btn"
              @click="next"
              >Next</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    // liff
    //   .init({
    //     liffId: '1656228840-yn8XQ9ar',
    //   })
    //   .then(() => {
    //     if (liff.isLoggedIn()) {
    //       liff.getProfile().then((profile) => {
    //         this.$store.dispatch('setLine', profile)
    //         this.isDone()
    //       })
    //     } else {
    //       liff.login()
    //     }
    //   })
    //   .catch((err) => console.error(err))
    // this.isDone()
  },
  computed: {
    getLine() {
      return this.$store.getters.getLine
    },
    getMember() {
      return this.$store.getters.getMember
    },
  },
  data() {
    return {
      uid: this.$store.getters.getLine.userId,
    }
  },
  methods: {
    
    next() {
      this.$router.push('/member/report')
    },
  },
}
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0 10px;
}
.profile-img {
  img {
    border-radius: 50%;
  }
}
</style>
