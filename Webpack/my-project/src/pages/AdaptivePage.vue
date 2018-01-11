<template>
<div class="flex-content">
    <div class="flex-top"><img src="../../static/img/page.png" alt="#"></div>
    <div class="flex-bottom">
        <div  class="photo"><img  src="../../static/img/photo.png"><input type="button" value="拍照识别化验单"></div>
        <hr/><div  class="review"><img  src="../../static/img/review.png"><input type="button" value="审核饮食方案"></div>
        </div>
</div>
</template>
<style>
.flex-top{
    display: flex;
    display: -webkit-flex;
}
.flex-top img{
      border: 1px solid #5c8ab9;
      width: 100%;
      height: 100%;
}
.flex-bottom{
     display: flex;
    display: -webkit-flex;
    border: 1px solid #918e8e;
    padding: 20px 0px;
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
<script>
</script>

