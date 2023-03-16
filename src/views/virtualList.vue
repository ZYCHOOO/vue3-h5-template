<template>
  <virtual-list
    :list-data="listData"
    :start-index="0"
    :end-index="10"
    :item-height="20"
    :show-num="10"
  >
    <template v-slot="{ itemInfo }">
      <div>{{ itemInfo }}</div>
    </template>
  </virtual-list>
</template>

<script setup>
import { ref } from 'vue'
import VirtualList from '@/components/VirtualList/index'

const listData = ref(null)

const getListData = () => {
  const result = []
  for (let i = 0; i <= 1000; i++) {
    result.push({ id: i, name: `列表项${i}` })
  }
  listData.value = result
}

getListData()

</script>

<style lang="scss" scoped>

</style>
