<template>
  <div class="custom">
    自定义页面
  </div>
</template>

<script>
export default {
  name: 'Custom'
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';
  .custom {
    padding: .1rem;
    min-height: 100vh;
    overflow: auto;
    background: $main-bg-color;
  }
</style>
