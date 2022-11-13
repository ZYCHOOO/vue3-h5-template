<template>
  <div class="index">
    首页页面
  </div>
</template>

<script>
import { getUserInfo } from '@/api/modules/test'

export default {
  name: 'Index',
  setup () {
    getUserInfo({ token: 'admin-token' }).then(res => {
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
