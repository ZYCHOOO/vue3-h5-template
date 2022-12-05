<template>
  <div class="mine">
    <div class="mine-header" />
    <div class="mine-item" @click="handleUserInfo">个人资料</div>
    <div class="mine-logout-btn" @click="handleLogout">退出登录</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const mineEffect = () => {
  const router = useRouter()
  const store = useStore()
  const handleUserInfo = () => {
    router.push({ name: 'UserInfo' })
  }
  const handleLogout = async () => {
    await store.dispatch('userModule/logout')
    router.push({ name: 'Login' })
  }
  return { handleLogout, handleUserInfo }
}

const { handleLogout, handleUserInfo } = mineEffect()
</script>

<style lang="scss" scoped>
.mine {
  height: calc(100vh - 50px);
  overflow: hidden;
  background: $main-bg-color;
  &-logout-btn {
    @include flex-center;
    position: fixed;
    bottom: 107px;
    left: 50%;
    width: 167px;
    height: 38px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    border-radius: 4px;
    border: 0.01rem solid rgba(151, 151, 151, 0.5);
    color: rgba(155, 158, 167, 0.7);
    transform: translateX(-50%);
  }
  &-header {
    height: 186px;
    background: linear-gradient(90deg, #4685ff 0%, #1d57ff 100%);
  }
  &-item {
    @include flex-align-center;
    margin: 0 14px;
    height: 57px;
    border-top: 1px solid $default-border-color;
    border-bottom: 1px solid $default-border-color;
    font-size: 15px;
    color: $main-text-color;
  }
}
</style>
