<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import { getPostById } from '@/data/apps/blog'
// components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import BlogDetail from '@/components/apps/blog/detail/BlogDetail.vue';

// theme breadcrumb
const page = ref({ title: 'Blog Detail' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Blog',
        disabled: false,
        to: '/apps/blog/posts'
    },
    {
        text: 'Blog post',
        disabled: true,
    }
]);


const route = useRoute()
const post_id = route.params.id
const post = ref(getPostById(post_id))

onBeforeMount(() => {
    post.value = getPostById(post_id)
})

</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" class="" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
          <BlogDetail :post="post"/>
        </v-col>
    </v-row>
</template>
