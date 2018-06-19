<template>
  <div class="flex-container">
    <div class="flex-top">
      <img src="../../static/img/page.png" alt="#">
    </div>
    <div class="flex-bottom">
      <div class="photo">
        <img src="../../static/img/photo.png">
        <input type="button" value="拍照识别化验单">
      </div>
      <hr/>
      <div class="review">
        <img src="../../static/img/review.png">
        <input type="button" value="审核饮食方案">
      </div>
    </div>
  </div>
</template>
<style>
  hr {
    width: 1px;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: fixed;;
  }
  .flex-top {
    height: 83%;
  }

  .flex-top img {
    width: 100%;
  }

  .flex-bottom {
    display: flex;
    flex: 1;
  }
  .flex-bottom img{
    width: 26px;
  }

  .photo {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .review {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    background: none;
    outline: none;
    border: 0px;
    margin-top: 10px;
  }

</style>
<script>


</script>
