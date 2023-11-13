<template>
    <v-app-bar elevation="0" :priority="priority" height="70" class="">
        <v-btn
            class="hidden-md-and-down"
            icon
            color="primary"
            variant="text"
        >
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <v-btn class="hidden-lg-and-up" icon variant="flat"  size="small">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>

        <!-- ---------------------------------------------- -->
        <!-- Search part -->
        <!-- ---------------------------------------------- -->
        <v-sheet>
            <Searchbar />
        </v-sheet>

        <!---/Search part -->

        <!-- ---------------------------------------------- -->
        <!-- Mega menu -->
        <!-- ---------------------------------------------- -->
        <div class="hidden-md-and-down">
            <Navigations />
        </div>
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->   

        <!-- ---------------------------------------------- -->
        <!-- ShoppingCart -->
        <!-- ---------------------------------------------- -->
        <v-btn icon variant="text" color="primary" to="/ecommerce/checkout">
            <v-badge  color="error" :content="3">
                <ShoppingCartIcon stroke-width="1.5" size="22" />
            </v-badge>
        </v-btn>

        <!-- ---------------------------------------------- -->
        <!-- Notification -->
        <!-- ---------------------------------------------- -->
        <NotificationDD />

        <!-- right sidebar -->
        <v-btn
            variant="text"
            color="primary"
            class="hidden-lg-and-up"
            icon
            @click.stop="appsdrawer = !appsdrawer"
        >
            <GridDotsIcon size="17" stroke-width="1.5" />
        </v-btn>

        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <div class="ml-2">
            <ProfileDD />
        </div>
    </v-app-bar>

    <!-- ---------------------------------------------- -->
    <!-- Right Sidebar -->
    <!-- ---------------------------------------------- -->
    <v-navigation-drawer v-model="appsdrawer" location="right" temporary>
        <RightMobileSidebar />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { GridDotsIcon, LanguageIcon, SearchIcon, Menu2Icon, BellRingingIcon, ShoppingCartIcon } from 'vue-tabler-icons';
import Searchbar from './Searchbar/Searchbar.vue';
import Navigations from './Navigations/Navigations.vue';
import NotificationDD from './Navigations/NotificationDD.vue';
import ProfileDD from './Navigations/ProfileDD.vue';
import RightMobileSidebar from './Navigations/RightMobileSidebar.vue';

const showSearch = ref(false);
const appsdrawer = ref(false);
function searchbox() {
    showSearch.value = !showSearch.value;
}

</script>
