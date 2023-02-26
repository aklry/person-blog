<template>
  <div class="info">
    <p>
      昵称: <span>{{ userInfo.name }}</span>
    </p>
    <p>地址：<span>{{ userInfo.address }}</span></p>
    <p>性别：<span>{{ userInfo.sex }}</span></p>
    <p>电话号码：<span>{{ userInfo.phoneNumber }}</span></p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped>
.info {
  margin: 50px auto;
  color: rgb(153, 153, 153);
}

.info p {
  line-height: 50px;
}
</style>