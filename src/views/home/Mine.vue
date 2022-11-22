<template>
  <div class="mine">
    <div class="mine__header" />
    <div
      class="mine__item"
      @click="handleUserInfo"
    >
      个人资料
    </div>
    <div
      class="mine__logout__btn"
      @click="handleLogout"
    >
      退出登录
    </div>
  </div>
</template>

<script>
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

export default {
  name: 'Mine',
  setup () {
    const { handleLogout, handleUserInfo } = mineEffect()
    return { handleLogout, handleUserInfo }
  }
}
</script>

<style lang="scss" scoped>
  .mine {
    height: calc(100vh - 50px);
    overflow: hidden;
    background: $main-bg-color;
    &__logout__btn {
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
      border: .01rem solid rgba(151,151,151,0.5);
      color: rgba(155,158,167,0.7);
      transform: translateX(-50%);
    }
    &__header {
      height: 186px;
      background: linear-gradient(90deg, #4685FF 0%, #1D57FF 100%);
    }
    &__item {
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
