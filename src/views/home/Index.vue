<template>
  <div class="index">
    首页页面
  </div>
</template>

<script>
import { getUserInfo } from '@/api/test'

export default {
  name: 'Index',
  setup () {
    getUserInfo({ token: 'admin-toke' }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  .index {
    padding: .1rem;
    min-height: 100vh;
    background: $main-bg-color;
    overflow: auto;
  }
</style>
