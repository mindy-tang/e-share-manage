<template>
  <div class="login_container">
    <div class="login_box">
      <div class="title">登录</div>
      <div class="content">
        <el-form :model="login_form" :rules="login_rules" ref='login_form_ref'>
          <el-form-item prop="name">
            <input class="input" v-model="login_form.name" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="passport">
            <input type="password" class="input" v-model="login_form.passport" placeholder="密码" />
          </el-form-item>
        </el-form>
      </div>
      <div class="btn">
        <el-button type="primary" round @click="on_click">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login_form: {
        name: '',
        passport: undefined
      },
      login_rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          passport: [
              { required: true, message: '请输入密码', trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
    on_click() {
      this.$router.push('/home')
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #f0ece4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  // padding: 40px 20px;
}
.title {
  margin: 20px 40px;
  font-size: 24px;
  font-weight: bold;
}
.content {
  margin: 0 40px;
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  height: 40px;
  border-width: 0;
  border-bottom: 1px solid #eeeeee;
}
.btn {
  margin: 10px 15px;
  text-align: center;
}
</style>
