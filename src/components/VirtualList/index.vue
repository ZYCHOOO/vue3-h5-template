<template>
  <div ref="listWrap" class="virtual-list-wrap" @scroll="scrollListener">
    <div ref="list" class="virtual-list">
      <div
        v-for="item in showList"
        :key="item[itemKey]"
        class="virtual-list-item"
      >
        <slot :item-info="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue'

const props = defineProps({
  itemKey: { type: String, default: 'id' },
  listData: { type: Array, default: () => [] }, // 列表数据
  itemHeight: { type: Number, default: 0 }, // 单个子项高度
  showNum: { type: Number, default: 0 }, // 需要给用户展示的数量
  startIndex: { type: Number, default: 0 }, // 起始下标
  endIndex: { type: Number, default: 0 } // 结束下标
})

const listWrap = ref(null) // 获取列表视图模型节点
const list = ref(null) // 获取列表节点
const start = ref(props.startIndex)
const end = ref(props.endIndex)

onMounted(() => {
  // 设置列表视图模型的高度
  listWrap.value.style.height = props.itemHeight * props.showNum + 'px'
})

const showList = computed(() => {
  // 获取展示的列表
  return props.listData.slice(start.value, end.value)
})

const scrollListener = () => {
  // 获取滚动高度
  const scrollTop = listWrap.value.scrollTop

  // 开始索引
  start.value = Math.floor(scrollTop / props.itemHeight)
  // 结束索引
  end.value = start.value + props.showNum

  list.value.style.transform = `translateY(${start.value * props.itemHeight}px)`// 对列表项进行偏移
}

</script>

<style lang="scss" scoped>
  .virtual-list {
    &-wrap {
      overflow-y: scroll;
    }
  }
</style>
