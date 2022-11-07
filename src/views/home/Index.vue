<template>
  <div class="index">
    首页页面
  </div>
</template>

<script>
export default {
  name: 'Index'
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
