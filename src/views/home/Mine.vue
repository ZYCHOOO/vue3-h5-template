<template>
  <div class="mine">
    我的
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

const logoutEffect = () => {
  const router = useRouter()
  const store = useStore()
  const handleLogout = async () => {
    await store.dispatch('userModule/logout')
    router.push({ name: 'Login' })
  }
  return { handleLogout }
}

export default {
  name: 'Mine',
  setup () {
    const { handleLogout } = logoutEffect()
    return { handleLogout }
  }
}
</script>

<style lang="scss" scoped>
  .mine {
    padding: .1rem;
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
  }
</style>
