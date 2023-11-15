<script setup lang="ts">
import BlogGrid from './BlogGrid.vue';
import FeatureBlogCard from './FeatureBlogCard.vue';
import { BlogPosts } from '@/data/apps/blog';
import { computed } from 'vue';


const filterFeaturedpost = computed(() => {
    return BlogPosts.filter((post) => {
        return post.featured;
    });
});
console.log(filterFeaturedpost)
</script>

<template>
    <v-row>
        <template v-for="(post, i) in filterFeaturedpost" :key="post.id">
            <FeatureBlogCard :post="post" :index="i" />
        </template>
        <template v-for="(post, i) in BlogPosts" :key="post.id">
            <BlogGrid :post="post" />
        </template>
    </v-row>
</template>
