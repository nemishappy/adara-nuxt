<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            Step 1 of 2
          </div>
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
          {{ getLine.displayName }}
        </v-col>
        <v-col cols="12">
          <v-form>
            <v-text-field
              v-model="form.firstname"
              dense
              label="Firstname"
            ></v-text-field>
            <v-text-field
              v-model="form.lastname"
              dense
              label="Lastname"
            ></v-text-field>

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
    liff
      .init({
        liffId: '1656228840-yn8XQ9ar',
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
              console.log(profile)
            // this.$store.dispatch('setLine', profile)
            // this.isDone()
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
      form: {
        firstname: '',
        lastname: '',
      },
    }
  },
  methods: {
    isDone() {
      //   this.$axios.get(`https://nuxt-tutor.firebaseio.com/members/${this.$store.getters.getLine.userId}/profile.json`).then((res) => {
      //     if(res.data != null){
      //       this.$router.push('register/done');
      //     }
      //   });
    },
    validate() {
      let validated = true
      const errors = []
      const validatorField = ['firstname', 'lastname']
      validatorField.forEach((field) => {
        if (this.form[field] == '') {
          validated = false
          errors.push(`${field} can not be null`)
        }
      })
      if (!validated) {
        this.$store.dispatch('setDialog', {
          isShow: true,
          title: 'Form is error',
          message: errors.map((error) => error + '<br/>').join(''),
        })
      }
      return validated
    },
    next() {},
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
.gender-group {
  p {
    margin-bottom: 0;
    align-self: center;
    margin-right: 20px;
  }
  .circle {
    width: 45px;
    height: 45px;
    color: #fff;
    border-radius: 50%;
    position: relative;
    background: rgba($color: #000000, $alpha: 0.3);
    margin-right: 7px;
    &.active {
      background: #1a56be;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
