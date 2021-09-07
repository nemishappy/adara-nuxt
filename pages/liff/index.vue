<template>
  <div >
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Adara Agent</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-overlay
      :opacity="0.4"
      :value="overlay"
    >
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>
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
      overlay: true,
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
            this.overlay = false
            this.login()
          })
        } else {
            this.overlay = false
            this.register()
        }
      })
    },
    register() {
      this.$router.push('/liff/2')
    },
    login() {
        this.$router.push('/member/login')
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
