<template>
  <v-app >
    <Dialog/>
    
    <Sidebar v-if="!navigation"/>
    <Toolbar v-if="!toolbar"/>
    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
import Dialog from '~/components/Dialog'
import Sidebar from '~/components/Sidebar'
import Toolbar from '~/components/ToolBar'


export default {
  components: {
    Dialog,
    Sidebar,
    Toolbar
  },
  created(){
    this.checkRoute();
  },
  data() {
    return {
      navigation: null,
      toolbar: null,
    };
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "admin-dashboard" || this.$route.name === "admin-dashboard-member-uid" 
      || this.$route.name === "admin" ) {
        this.navigation = false;
        this.toolbar = false;
        return;
      }
      this.navigation = true;
      this.toolbar = true;
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
}
</script>

<style lang="scss">
  .v-application{
    font-family: 'Quicksand', sans-serif;
  }
  .v-toolbar__title{
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
  .v-application .primary{
    background-color: #1A56BE !important;
    border-color: #1A56BE !important;
  }
  .text-primary{
    color: #1A56BE !important;
  }
  .bold{
    font-weight: bold;
  }
  .text-main{
    font-size: 20px;
  }
  .text-title{
    font-size: 20px;
    font-weight: bold;
  }
  .w-100{
    width: 100%;
  }
  .my-btn{
    font-size: 20px !important;
    text-transform: none !important;
    height: auto !important;
    padding: 10px 0 !important;
    font-weight: bold;
    min-height: 50px;
    &.outlined{
      border: 1px solid #1A56BE;
      border-radius: 28px;
      line-height: normal;
    }
  }
  .mt-100{
    margin-top: 100px;
  }
  .set-padding{
    padding: 0 10px;
  }
  
</style>
