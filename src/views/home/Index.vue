<template>
  <div class="index">
    <div class="index-title">
      首页页面
      <div
        class="index-title-btn"
        @click="virtualListClick"
      >
        虚拟列表
      </div>
    </div>
    <div class="index-content">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="index-content-item"
      >
        <div class="index-content-info">
          <div class="index-content-title">{{ item.title }}</div>
          <div class="index-content-desc">{{ item.desc }}</div>
        </div>
        <div
          class="index-content-pic"
          :style="{ background: item.color }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { LIST_DATA } from '@/constant/demoData'
import { getUserInfo } from '@/api/modules/test'

const list = LIST_DATA
const store = useStore()
const router = useRouter()

getUserInfo({ token: 'admin-token' }).then(res => {
  const userInfo = res.data
  store.commit('userModule/setUserInfo', userInfo)
})

const virtualListClick = () => {
  router.push('/virtualList')
}
</script>

<style lang="scss" scoped>
  .index {
    padding: 10px;
    min-height: 100vh;
    background: $main-bg-color;
    overflow: auto;
    &-title {
      @include flex-row;
      @include flex-align-center;
      font-size: 18px;
      font-weight: bold;
      &-btn {
        margin-left: 20px;
        font-size: 12px;
        color: #4685FF;
      }
    }
    &-content {
      &-item {
        margin: 10px 0;
        @include flex-row;
        height: 40px;
      }
      &-info {
        @include flex-column;
      }
      &-title {
        font-size: 16px;
      }
      &-desc {
        font-size: 12px;
      }
      &-pic {
        margin-left: auto;
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }
    }
  }
</style>
