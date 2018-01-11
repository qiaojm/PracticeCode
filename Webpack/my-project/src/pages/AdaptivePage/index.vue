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
.flex-top{
    display: flex;
    display: -webkit-flex;
    /* margin:0;padding:0 */
    /* margin: 0 auto;   */
     /* width: 100%; */
      /* height: 100%; */
     /* flex-direction: column; */
}
.flex-top img{
      /* border: 1px solid #5c8ab9; */
      width: 106%;
      height: 100%;
      margin-top: -8px;
      margin-left: -3%;
    /* margin:0;padding:0 */
      /* margin-left: -20px; */
      /* flex-grow: 3; */
}
.flex-bottom{
    width: 106%;
     margin-left: -3%;
     display: flex;
    display: -webkit-flex;
    border: 1px solid #bdbdbd;
    padding: 20px 0px;
      flex-direction: row;
}
.photo{
    flex:1;
}
.review{
    flex:1;
}
.photo{
    justify-content: center;
 
}
.review{
    justify-content: center;
}

.flex-bottom img{
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto;
}
input{
    background:none;    
    outline:none;    
    border:0px;  
    margin-top: 10px;
}
</style>


