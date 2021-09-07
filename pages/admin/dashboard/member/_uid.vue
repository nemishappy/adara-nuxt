<template>
  <div v-if="currentMember">
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            Edit member
          </div>
        </v-col>
        <v-col cols="12" class="text-center pb-0 profile-img">
          <img
            v-if="currentMember[0].pictureUrl == ''"
            src="~/assets/profile.png"
            alt=""
            width="155"
          />
          <img v-else :src="currentMember[0].pictureUrl" alt="" width="155" />
        </v-col>
        <v-col cols="12" class="text-center pt-2 pb-0">
            <div v-if="Name == ''">{{ displayName }}</div>
            <div v-else>{{ Name }}</div>
        </v-col>
        <v-col cols="12">
          <v-form>
            <h3>edit form</h3>
            <v-text-field
            v-if="Name == null"
              v-model="displayName"
              label="Name"
            ></v-text-field>
            <v-text-field
            v-else
              v-model="Name"
              label="Name"
            ></v-text-field>
            <v-text-field
              v-model.number="totalOrder"
              type="number"
              label="totalOrder"
            ></v-text-field>
            <v-text-field
              v-model.number="netTotal"
              type="number"
              label="netTotal"
            ></v-text-field>
            <div v-if="error" class="err-message">
                <p><span>Error: </span>{{ this.errorMsg }}</p>
            </div>
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-10 my-btn"
              @click="save"
              >save</v-btn
            >
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
        currentMember: null,
        loading: false,
        routeID: null,
        error: false,
        errorMsg: null,
    }
  },
  computed: {
    displayName:{
        get(){
            return this.$store.getters.getEditMember.displayName;
        },
        set(payload){
            this.$store.commit('SET_NAME', payload)
        }
    },
    Name: {
        get(){
            return this.$store.getters.getEditMember.Name;
        },
        set(payload){
            
            this.$store.commit('SET_NAME', payload)
        }
    },
    totalOrder: {
        get(){
            return this.$store.getters.getEditMember.totalOrder;
        },
        set(payload){
            this.$store.commit('SET_TOTAL', payload)
        }
    },
    netTotal: {
        get(){
            return this.$store.getters.getEditMember.netTotal;
        },
        set(payload){
            this.$store.commit('SET_NET', payload)
        }
    },
    
  },
  async mounted() {
    this.routeID = this.$route.params.uid;
    this.currentMember = await this.$store.getters.getMembers.filter(
      (member) => {
        return member.userId === this.routeID
      }
    )
    this.$store.dispatch("setEditMember", this.currentMember[0])
  },
  methods: {
    async save() {
        const dataBase = await this.$fire.firestore.collection("member").doc(this.routeID);
        if(this.Name == null){
          this.Name = this.displayName
        }
        if (this.Name.length !== 0 && this.totalOrder !== null && this.netTotal !== null){
            this.$nuxt.$loading.start()
            await dataBase.update({
                Name: this.Name,
                totalOrder: this.totalOrder,
                netTotal: this.netTotal,
            });
            this.$store.dispatch("updateMember",this.routeID)
            this.$nuxt.$loading.finish()
            this.$store.dispatch("setDialog",{
              isShow: true,
              title: 'Save successful',
              message: 'Press Close to continue',
            })
            this.$router.push({name: 'admin-dashboard'})
            
            return;
        }
        this.error = true;
        this.errorMsg = "All filed can't be null!";
        setTimeout(() => {
            this.error = false;
        }, 5000);
        return;
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
.v-form {
  padding: 20px 50px;
}
.err-message {
    width: 100%;
    padding: 0px 50px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 5px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;

    p {
      font-size: 14px;
    }

    span {
      font-weight: 600;
    }
  }
</style>
