<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{pathwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',

    }
  },
  computed: {
    userErrors() {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        errorText = '不包含@'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.pathwordFlag) {
        errorText = ''
        this.pathwordFlag = true
      }
      return {
        status,
        errorText
      }
    },
    pathwordErrors() {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        errorText = '密码少于六位'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin() {
      // console.log('big')
      if (!this.userErrors.status || !this.pathwordErrors.status) {
        // alert('格式不正确')
        this.errorText = '部分选项未通过'
      } else {
        // console.log('big')
        this.errorText = ''
        this.$http.get('api/login')
        .then((res) => {
            // console.log(res.data)
            this.$emit('hasLog',res.data)
          }, (Error) => {
            console.log(Error)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
