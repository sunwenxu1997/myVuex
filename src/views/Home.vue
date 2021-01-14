<template>
  <div class="home">
    <div>
      <input type="text" v-model="userInfo.name" />
    </div>
    <div>
      <input type="text" v-model="userInfo.phone" />
    </div>
    <button @click="submit">提交</button>
    <router-link to="/about">跳转</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  //计算属性
  computed: {
    //通过getter.js对外暴露的 phoneNo 值进行使用
    // {{phoneNo}} 数值使用
    ...mapGetters(['name', 'phone'])
  },
  data() {
    return {
      userInfo: {
        name: '',
        phone: ''
      }
    }
  },
  created() {
    this.userInfo.name = this.name
    this.userInfo.phone = this.phone
  },
  methods: {
    ...mapActions('user', ['saveInfo']),
    submit() {
      this.saveInfo(this.userInfo)
    }
  }
}
</script>
