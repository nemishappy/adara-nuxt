<template>
  <div  v-if="getMember">
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-items><v-icon @click="test">mdi-arrow-left</v-icon></v-toolbar-items>
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
    
  </div>
</template>

<script>
export default {
  mounted() {
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
          this.$router.push('/test')
      },
      
      goBack() {

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
