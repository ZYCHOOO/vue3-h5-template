<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="activeName" fixed route>
      <van-tabbar-item
        v-for="tabbarItem in tabbarList"
        :key="tabbarItem.id"
        :to="tabbarItem.to"
        :name="tabbarItem.name"
        :icon="tabbarItem.icon"
      >
        {{ tabbarItem.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
import { TABBAR_LIST } from '@/utils/enums'

export default {
  name: 'Home',
  setup () {
    const activeName = ref('home')
    const tabbarList = TABBAR_LIST
    return { activeName, tabbarList }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';
  .home {
    padding-bottom: .5rem;
    min-height: 100vh;
    background: $default-bg-color;
    box-sizing: border-box;
  }
</style>
