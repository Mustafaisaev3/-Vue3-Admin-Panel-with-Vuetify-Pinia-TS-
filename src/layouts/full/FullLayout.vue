<template>
     <!-----LTR LAYOUT------->
    <v-locale-provider> 
        <v-app>   
            <Sidebar />
            <Header />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div>
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './sidebar/Sidebar.vue'

</script>

