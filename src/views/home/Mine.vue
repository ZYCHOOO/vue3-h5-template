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
import { useRouter } from 'vue-router'
import { removeToken } from '@/utils/storage'

export default {
  name: 'Mine',
  setup () {
    const router = useRouter()
    const handleLogout = () => {
      removeToken()
      router.push({ name: 'Login' })
    }
    return { handleLogout }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';
  @import '~@/styles/mixins.scss';
  .mine {
    padding: .1rem;
    height: calc(100vh - .5rem);
    overflow: hidden;
    background: $main-bg-color;
    &__logout__btn {
      @include flex-center;
      position: fixed;
      bottom: 1.07rem;
      left: 50%;
      width: 1.67rem;
      height: .38rem;
      font-size: .16rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      border-radius: .04rem;
      border: .01rem solid rgba(151,151,151,0.5);
      color: rgba(155,158,167,0.7);
      transform: translateX(-50%);
    }
  }
</style>
