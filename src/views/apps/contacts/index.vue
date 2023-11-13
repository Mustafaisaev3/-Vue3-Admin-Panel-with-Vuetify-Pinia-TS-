<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

// theme breadcrumb
const page = ref({ title: 'Contact List' });

const breadcrumbs = ref([
    {
        text: '2 New Contacts',
        disabled: true,
        href: '#'
    }
]);

</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

</template>
