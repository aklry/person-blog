<template>
  <el-dialog :visible="isShow">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
        <el-input
          v-model="form.password"
          show-password
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      formLabelWidth: "120px",
    };
  },
    methods: {
        cancel() {
            this.$emit('changeIsShow',false)
        },
        submit() {
            this.$emit('changeIsShow',false)
        }
  }
}
</script>

<style></style>