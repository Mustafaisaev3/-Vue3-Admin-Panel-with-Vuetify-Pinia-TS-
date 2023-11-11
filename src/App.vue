<template>
  <v-app>
    <v-main>
      <router-view/>
      <HelloWorld></HelloWorld>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

</script>
