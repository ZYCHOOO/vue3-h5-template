<template>
  <div class="index">
    首页页面
  </div>
</template>

<script>
import { getEnvValue } from '@/utils/environment'
export default {
  name: 'Index',
  setup () {
    console.log(getEnvValue('NODE_ENV'))
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';
  .index {
    padding: .1rem;
    min-height: 100vh;
    background: $main-bg-color;
    overflow: auto;
  }
</style>
