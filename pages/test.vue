<template>
  <div  v-if="getMember">
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-items><v-icon @click="goBack">mdi-arrow-left</v-icon></v-toolbar-items>
      <v-toolbar-title>Marketplace</v-toolbar-title>
      <v-toolbar-items>
        <v-badge
          :content="messages"
          :value="messages"
          color="error"
          overlap
          offset-x="15"
          offset-y="22"
          class="d-flex justify-center"
        >
          <v-icon >
            mdi-cart-outline
          </v-icon>
        </v-badge>
      </v-toolbar-items>
    </v-app-bar>
    <div class="d-flex flex-column mt-4 mx-3">
      <v-card
        class="d-flex flex-row myProduct"
        max-width="344"
        outlined
      >
        <img src="~/assets/testsqr.jpg"  width="144" />
        <div class="ma-3 tDesc">
          <div class="text-h5">Product 1</div>
          <div class="green--text text-body-1"><span class="text-body-2 grey--text text-decoration-line-through">210 ฿</span> 150.00 ฿</div>
          <v-spacer></v-spacer>
          <v-btn
            color="orange darken-1"
            rounded
            class="ml-auto white--text font-weight-bold"
          >
            <v-icon left>mdi-cart-arrow-down</v-icon>
            add to cart
          </v-btn>
        </div>
      </v-card>
      <v-card
        class="d-flex flex-row myProduct my-4"
        max-width="344"
        outlined
      >
        <img src="~/assets/testsqr.jpg"  width="144" />
        <div class="ma-3 tDesc">
          <div class="text-h5">Product 2</div>
          <div class="green--text text-body-1"><span class="text-body-2 grey--text text-decoration-line-through">210 ฿</span> 150.00 ฿</div>
          <v-spacer></v-spacer>
          <v-btn
            color="orange darken-1"
            rounded
            class="ml-auto white--text font-weight-bold"
          >
            <v-icon left>mdi-cart-arrow-down</v-icon>
            add to cart
          </v-btn>
        </div>
      </v-card>
      <v-card
        class="d-flex flex-row myProduct"
        max-width="344"
        outlined
      >
        <img src="~/assets/testsqr.jpg"  width="144" />
        <div class="ma-3 tDesc">
          <div class="text-h5">Product 3</div>
          <div class="green--text text-body-1"><span class="text-body-2 grey--text text-decoration-line-through">210 ฿</span> 150.00 ฿</div>
          <v-spacer></v-spacer>
          <v-btn
            color="orange darken-1"
            rounded
            class="ml-auto white--text font-weight-bold"
          >
            <v-icon left>mdi-cart-arrow-down</v-icon>
            add to cart
          </v-btn>
        </div>
      </v-card>
    </div>
    <div class="w-100 text-center my-btn outlined text-primary mt-5" @click="test">Close</div> 
  </div>
</template>

<script>
export default {
  mounted() {
    this.isDone()
  },
  data() {
    return {
      messages: 1,
      memberType:'ไม่สต็อก'
    }
  },
  computed: {
    getMember() {
      return this.$store.getters.getMember
    },
  },
  methods: {
      test() {
          console.log(this.memberType == this.getMember.memberType);
      },
      isDone() {
        const usersRef = this.$fire.firestore
          .collection('member')
          .doc('Ub8a592b82a17a79e4a5fcb05414d7cd2')
        usersRef.get().then((docSnapshot) => {
          if (docSnapshot.exists) {
            usersRef.onSnapshot((doc) => {
              this.$store.dispatch('setMember', doc.data())
              console.log('Document catch!')
              
              
            })
          } else {
              
          }
        })
      },
      goBack() {
        this.$router.go(-1)
      }
    },
}
</script>

<style lang="scss" scoped>
.myProduct {
  img {
    flex-basis: 45%;
  }
  .tDesc {
    display: flex;
    flex-basis: 55%;
    flex-direction: column;
    width: auto;
  }
}
</style>
