<template>
<div class="flex-content">
    <div class="flex-top"><img :src='page'  alt="#"></div>
    <div class="flex-bottom">
        <div  class="photo"><img  :src='photo'><input type="button" value="拍照识别化验单"></div>
        <hr/><div  class="review"><img  :src='review'><input type="button" value="审核饮食方案"></div>
    </div>      
</div>
</template>
<script>
import page from '@/pages/AdaptivePage/img/page.png'
import photo from '@/pages/AdaptivePage/img/photo.png'
import review from '@/pages/AdaptivePage/img/review.png'
export default {
  name: 'Page1Container',
  data () {
    return {
      photo: photo,
      page: page,
      review: review
    }
  }
}
</script>
<style>
.flex-content{
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
     position: fixed;
}
.flex-top{ 
    height: 85%;
    background-color: #f7f7f7;
}
.flex-top img{
    width: 100%;
    /* height: 100%; */
}
.flex-bottom{
    display: flex;
    display: -webkit-flex;
    flex:1;    
   /* width: 100%;
    height: 100%; */
}

.photo{
    display: flex;  
    display: -webkit-flex;      
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.review{
   display: flex;  
    display: -webkit-flex;    
    flex:1;  
    justify-content: center;
    align-items: center;   
    flex-direction: column;
    
}

.flex-bottom img{
    width: 30px;
    height: 30px;
    padding-bottom: 5px;
}
input{
    background:none;    
    outline:none;    
    border:0px;  
}
</style>


