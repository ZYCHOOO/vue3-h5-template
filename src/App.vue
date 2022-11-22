<template>
  <van-nav-bar
    v-if="showNavbar"
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="handleBack"
  />
  <router-view />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const title = computed(() => { return route.meta.title })
const showNavbar = computed(() => { return route.meta.showNavbar })
const handleBack = () => {
  router.back()
}
</script>
