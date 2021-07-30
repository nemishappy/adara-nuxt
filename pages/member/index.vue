<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Report</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0" v-if="getMember">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            {{ form.displayName }}
          </div>
        </v-col>
        <v-col cols="12" class="text-center pb-0 profile-img">
          <img
            v-if="form.pictureUrl == null"
            src="~/assets/profile.png"
            alt=""
            width="155"
          />
          <img v-else :src="form.pictureUrl" alt="" width="155" />
        </v-col>
        <v-col cols="12">
          <v-form>
            <p class="mb-0">Total order:</p>
            <p>{{ getMember.totalOrder }}</p>
            <br>
            <p class="mb-0">Net total:</p>
            <p>{{ getMember.netTotal }}</p>

          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                displayName: this.$store.getters.getLine.displayName,
                pictureUrl: this.$store.getters.getLine.pictureUrl,
                userId: this.$store.getters.getLine.userId,
                totalOrder: this.$store.getters.getMember.totalOrder,
                netTotal: this.$store.getters.getMember.netTotal,
            }
        }
    },
    computed: {
      getMember() {
        return this.$store.getters.getMember
      },
  },
}
</script>

<style lang="scss" scoped>
.profile-img {
  img {
    border-radius: 50%;
  }
}
</style>
