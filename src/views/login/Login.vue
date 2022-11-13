<template>
  <div class="login__wrapper">
    <div class="login__wrapper__title">vue-h5-代码模版</div>
    <van-cell-group inset>
      <van-field
        v-model="username"
        label="账号"
        placeholder="请输入账号"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <div
      class="login__wrapper__btn"
      @click="handleLogin"
    >
      登 录
    </div>
    <div
      class="login__wrapper__forget"
      @click="handleForget"
    >
      忘记密码？
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { login } from '@/api/modules/test'

const loginEffect = () => {
  const store = useStore()
  const router = useRouter()
  const loginForm = reactive({ username: '', password: '' })
  const { username, password } = toRefs(loginForm)
  const loginValidate = () => {
    if (!username.value || !password.value) {
      Toast.fail('账号或密码不能为空！')
      return false
    }
    return true
  }
  const handleLogin = async () => {
    if (loginValidate()) {
      const result = await login({ username: username.value, password: password.value })
      const { token } = result
      await store.commit('userModule/setToken', token)
      router.push({ name: 'Home' })
    }
  }
  return { username, password, handleLogin }
}
const forgetEffect = () => {
  const handleForget = () => {
    Toast.fail('忘记密码操作！')
  }
  return { handleForget }
}
export default {
  name: 'Login',
  setup () {
    const { username, password, handleLogin } = loginEffect()
    const { handleForget } = forgetEffect()
    return {
      username,
      password,
      handleLogin,
      handleForget
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/views/login.scss';
</style>
