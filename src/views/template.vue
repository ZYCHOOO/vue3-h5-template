<template>
  <div class="wrapper"></div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { useStore } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { ref, reactive, toRefs, computed, watch } from 'vue'
// eslint-disable-next-line no-unused-vars
import { useRoute, useRouter } from 'vue-router'
</script>

<style lang="scss">
  .wrapper {
    @include wrapper;
  }
</style>
