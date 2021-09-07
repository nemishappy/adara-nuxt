<template>
  <div class="row1" v-if="getMember">
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Member</v-toolbar-title>
    </v-app-bar>
    <v-list>
      <v-list-item class="px-6 pb-3">
          <div class="module-border-wrap">
            <img src="~/assets/profile.png" alt="" width="86px" />
            <!-- <img
            v-if="getMember.profile.pictureUrl == null"
            src="~/assets/profile.png"
            alt=""
            width="120px"
          />
          <img v-else :src="getMember.profile.pictureUrl" alt="" width="120px" /> -->
          </div>
          
        <!-- <v-badge
          bottom
          left
          overlap
          offset-x="32"
          offset-y="32"
          icon="mdi-account-check-outline"
        >
        </v-badge> -->
        <v-list-item-content>
          <!-- <v-list-item-title class="text-h6">{{
            getMember.profile.firstname
          }} {{
            getMember.profile.lastname
          }}</v-list-item-title>

          <v-list-item-subtitle
            ><v-icon>mdi-email</v-icon>
            {{getMember.profile.email}}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            ><v-icon>mdi-cellphone</v-icon>{{getMember.profile.phone}}</v-list-item-subtitle
          > -->
          <v-list-item-title class="text-h6"> Sandara Adams </v-list-item-title>

          <v-list-item-subtitle
            ><v-icon>mdi-account-supervisor</v-icon>
            ประเภท: <span class="text-primary">ไม่สต๊อก</span></v-list-item-subtitle
          >
          <v-list-item-subtitle
            ><v-icon>mdi-email</v-icon>
            sandra_a88@gmail.com</v-list-item-subtitle
          >
          <v-list-item-subtitle
            ><v-icon>mdi-cellphone</v-icon>099-999-9999</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="d-flex justify-space-between px-10 pb-3 button">
      <v-btn outlined rounded text> ดูเพิ่มเติม </v-btn>
      <v-btn outlined rounded text> แก้ไขข้อมูล </v-btn>
    </div>
    <div class="d-flex flex-column justify-center px-10 py-3">
      <!-- <p class="font-weight-bold"><span class="text-primary">ยอดสั่งซื้อ:</span> {{ getMember.totalOrder }}</p>
      <p class="font-weight-bold"><span class="text-primary">ยอดเงินสุทธิ:</span> {{ getMember.netTotal }}</p> -->
      <p class="font-weight-bold"><span class="text-primary">ยอดสั่งซื้อ:</span> 1</p>
      <p class="font-weight-bold"><span class="text-primary">ยอดเงินสุทธิ:</span> 340</p>
    </div>
    <div class="d-flex flex-column justify-center px-10 card-member">
      <div class="d-flex justify-space-between">
        <p class="text--secondary">ระดับสมาชิก</p>
        <p class="font-weight-bold text-primary">Standard</p>
      </div>
      <v-card
        class="d-flex justify-center"
        color="grey lighten-4"
        height="154px"
      >
        <v-icon x-large>mdi-account-check-outline</v-icon>
      </v-card>
      <p class="text-center mt-2">Exp. xx/xx/xxxx</p>
    </div>
    <div class="d-flex flex-column justify-center px-3">
      <v-progress-linear
        class="exp"
        :value="this.exp"
        color="rgb(255, 136, 0)"
        height="20"
        rounded
        striped
        readonly
      ></v-progress-linear>
      <div class="d-flex flex-row justify-space-between">
        <div class="d-flex flex-row">
          <v-icon color="yellow">mdi-star</v-icon>
          <p class="font-weight-bold text-center my-auto ml-2">
            <span class="text-primary">{{ exp }}</span
            >/100
          </p>
        </div>
        <p class="text--secondary text-caption text-right my-auto">
          สะสมอีก {{ 100 - exp }}
          <v-icon small>mdi-star</v-icon>
          <br />
          เพื่อปรับเป็นระดับ
          <span class="text--primary font-weight-bold">Friend Member</span>
        </p>
      </div>
    </div>
    <v-btn color="primary" dark class="mt-4 my-btn mx-4"
        href="https://adarabeautythailand.page365.net/"
    >
      สั่งซื้อสินค้า
    </v-btn>
    <v-btn color="grey lighten-4" disabled class="mt-4 my-btn mx-4">
      แจ้งยอดชำระ
    </v-btn>
    <v-btn color="grey lighten-4" disabled class="mt-4 my-btn mx-4">
      Reward
    </v-btn>
    <v-btn class="align-self-center mt-6 mb-4 my-button redc" min-width="180" @click="logout">
      จบรายการ
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: 0,
      form: {
        displayName: this.$store.getters.getLine.displayName,
        pictureUrl: this.$store.getters.getLine.pictureUrl,
        userId: this.$store.getters.getLine.userId,
        totalOrder: this.$store.getters.getMember.totalOrder,
        netTotal: this.$store.getters.getMember.netTotal,
      },
    }
  },
  computed: {
    getMember() {
      return this.$store.getters.getMember
    },
  },
  methods: {
      logout() {
          liff.closeWindow()
      }
    },
}
</script>

<style lang="scss" scoped></style>
