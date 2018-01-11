<template>
<div class="content">
  <div class="flexbox">
    <h3 >name</h3>
    <template v-for="(item,index) in cityData.projects" >
       <div class="name" :key="index" >{{item.name}}</div> 
    </template>
    </div>
     <div class="flexbox">
    <h3 >string</h3>
    <template v-for="(item,index) in cityData.projects" >
       <div class="string" :key="index" >{{item.string}}</div> 
    </template>
    </div>
        <div class="flexbox">
    <h3 >address</h3>
    <template v-for="(item,index) in cityData.projects" >
       <div class="address" :key="index" >{{item.address}}</div> 
    </template>
    </div>
     <div class="flexbox">
    <h3 >number</h3>
    <template v-for="(item,index) in cityData.projects" >
       <div class="number" :key="index" >{{item.number}}</div> 
    </template>
    </div>
    <!-- {{cityData}} -->
</div>
</template>
<style>
/* .flexbox{
  display: flex;
  display: -webkit-flex;
} */
.content{
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 200px; */
}
.flexbox{
  position:relative;
}
h3{
  position:absolute;
  top:-40px;
  display:flex; 
  left:35%;

}
.name{
   width: 100px;
   /* display: flex; */
   align-items: center;
   justify-content: center;
   border: 1px solid rgb(143, 247, 58)
}
.string{
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: center;
   border: 1px solid rgb(143, 247, 58)
}
.address{
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: center;
   border: 1px solid rgb(143, 247, 58)
}
.number{
   display: flex;
   width: 120px;
   align-items: center;
   justify-content: center;
   border: 1px solid rgb(143, 247, 58);
   font-size: 18px;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'RequestDataTest',
  data () {
    return {
      cityData: {}
    }
  },
  async created () {
    const { data: { data } } = await axios.get(
      'https://easy-mock.com/mock/5a5215d2d408383e0e385e64/test/city'
    )
    this.cityData = data
  }
}
</script>