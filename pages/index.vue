<template>
  <div>
    <v-card
      class="d-flex justify-space-around mb-6 block-wrapper"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card v-for="n in 3" :key="n"  class="pa-2 my-3 mx-3" outlined tile>
        <v-list-item three-line  >
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            
          </v-list-item-content >

          <v-list-item-avatar class="align-self-center" size="50" color="grey"><v-icon color="white">mdi-currency-usd</v-icon></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-card>
  </div>
</template>
<style lang="scss" scoped>
.block-wrapper {
  display: flex;
  flex-direction: column;
  height: fit-content;
  @media (min-width: 700px) {
    min-height: auto;
    max-height: 650px;
    flex-direction: row;
  }
  .my-card {
    @media (min-width: 700px) {
      width: 100%;
    }
  }
}
</style>
