<template>
  <div class="wrapper">
    <div class="user-info">
      <div class="user-info-title">头像</div>
      <img :src="userInfo.avatar" alt="" class="user-info-avatar">
    </div>
    <div class="user-info">
      <div class="user-info-title">姓名</div>
      <div class="user-info-content">{{ userInfo.name }}</div>
    </div>
    <div class="user-info">
      <div class="user-info-title">性别</div>
      <div class="user-info-content">{{ userInfo.sex === 1 ? '男' : '女' }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const userInfoEffect = () => {
  const store = useStore()
  const userInfo = computed(() => { return store.state.userModule.userInfo })
  return { userInfo }
}

const { userInfo } = userInfoEffect()
</script>

<style lang="scss">
  .wrapper {
    @include wrapper;
    padding-top: 56px;
    .user-info {
      @include flex-align-center;
      margin: 0 14px;
      height: 57px;
      border-bottom: 1px solid $default-border-color;
      &-avatar {
        margin-left: auto;
        width: 42px;
        height: 42px;
        border-radius: 4px;
        object-fit: cover;
      }
      &-title {
        font-size: 15px;
        color: $main-text-color;
      }
      &-content {
        margin-left: auto;
        font-size: 15px;
        color: $secondary-text-color;
      }
    }
    .user-info:nth-child(1) {
      border-top: 1px solid $default-border-color;
    }
  }
</style>
