<template>
  <div class="about">
    <h1>{{name}}</h1>
     <h1>{{phone}}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  //计算属性
  computed: {
    ...mapGetters(['name','phone'])
  }
}
</script>
