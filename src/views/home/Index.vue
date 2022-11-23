<template>
  <div class="index">
    首页页面
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { getUserInfo } from '@/api/modules/test'

const store = useStore()

getUserInfo({ token: 'admin-token' }).then(res => {
  const userInfo = res.data
  store.commit('userModule/setUserInfo', userInfo)
})
</script>

<style lang="scss" scoped>
  .index {
    padding: 10px;
    min-height: 100vh;
    background: $main-bg-color;
    overflow: auto;
  }
</style>
