<template>
  <div class="form_container">
    <el-form :model="Form" :rules="FormRules" ref="FormRef" label-width="100px">
      <el-form-item prop="account" label="用户名">
        <el-input v-model="Form.account"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="Form.password"></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="validForm">校验</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Form: {
        account: "",
        password: ""
      },
      FormRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 重置表单
    resetForm() {
      console.log(this);
      this.$refs.FormRef.resetFields();
    },
    // 预验证
    validForm() {
      this.$refs.FormRef.validate(async valid => {
        if (!valid) return
        const {data:res} = await this.$http.post("token", this.Form)
        console.log(res)
        window.sessionStorage.setItem('token', res.token)
        this.$router.push('/demo1')
      });
    }
  }
};
</script>

<style lang="less" scoped>
.form_container {
  width: 500px;
}
</style>