<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
      <v-col cols="12">
        <CalendarTable />
      </v-col>
  </v-row>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import CalendarTable from '@/components/apps/calendar/CalendarTable.vue';

// theme breadcrumb
const page = ref({ title: 'Calendar app' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Calendar',
        disabled: false,
        to: '/apps/calendar'
    },
]);
</script>
