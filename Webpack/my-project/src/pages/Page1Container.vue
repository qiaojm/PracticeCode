<template>
  <div>
    <h1>{{testData}}</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Page1Container',
  data () {
    return {
      testData: 'Hello, 组件测试，下面引用了HelloWorld组件'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

