<template>
  <div>
    <v-card
      class="d-flex justify-space-around ma-3 block-wrapper"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
    >
    <h1>nothing here.</h1>
      
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
