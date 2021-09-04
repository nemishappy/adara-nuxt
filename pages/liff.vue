<template>
  <div v-if="getLine.pictureUrl">
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Adara Agent</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">Hi there,</div>
          <div class="text-center text-primary pt-2 pb-0">{{ getLine.displayName }}</div>
        </v-col>
        <v-col cols="12" class="text-center pb-0 profile-img">
          <img
            v-if="!getLine.pictureUrl"
            src="~/assets/profile.png"
            alt=""
            width="155"
          />
          <img v-else :src="getLine.pictureUrl" alt="" width="155" />
        </v-col>

        <v-col cols="12" class="pt-2">
          <v-form>
              <p class="text-center text-main mb-0 mt-4">เข้าสู่ระบบ</p>
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-4 my-btn"
              @click="login"
              >Login</v-btn
            >
            
            <hr class="mt-10" />
            <p class="text-center text-main mb-0 mt-4">สมัครตัวแทน</p>
            <v-btn
              rounded
              color="#303030"
              dark
              class="w-100 mt-4 my-btn"
              @click="register"
              >Register</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async mounted() {
    await liff
      .init({
        liffId: '1656228840-yn8XQ9ar',
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            this.$store.dispatch('setLine', profile)
            this.isDone()
          })
        } else {
          liff.login()
        }
      })
      .catch((err) => console.error(err))
  },
  computed: {
    getLine() {
      return this.$store.getters.getLine
    },
  },
  data() {
    return {
      uid: this.$store.getters.getLine.userId,
    }
  },
  methods: {
    isDone() {
      const usersRef = this.$fire.firestore
        .collection('member')
        .doc(this.$store.getters.getLine.userId)
      usersRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            this.$store.dispatch('setMember', doc.data())
            console.log('Document catch!')
            this.login()
          })
        } else {
          this.register()
        }
      })
    },
    register() {
      this.$router.push('/register')
    },
    login() {
        this.$router.push('/auth/login')
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
hr {
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
}
hr:after {
    background: #fff;
    content: 'or';
    padding: 0 4px;
    position: relative;
    top: -13px;
}
</style>
