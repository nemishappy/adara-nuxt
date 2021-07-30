<template>
    <v-navigation-drawer v-model="drawer" permanent color="#F4F5F9" app>
        <v-list-item class="px-2 py-5">
            <v-list-item-title class="text-title" align="center">
                <v-icon x-large>mdi-chart-box-outline</v-icon> Adara
            </v-list-item-title>
        </v-list-item>
        <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item> 
            </v-list-item-group>
        </v-list>
        <template v-slot:append>
                <div class="text-center mb-3">Bata dashboard</div>
        </template>
    </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'mdi-home-analytics', text: 'Dashboard', route: '/dashboard'},
            
        ]
        })
}
</script>
<style scoped>
div >>> .v-list a {
    text-decoration: none;
}
</style>