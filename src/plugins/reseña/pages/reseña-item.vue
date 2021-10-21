<template>
  <div class="contenedor">
    <div class="img-avatar">
      <img class="img" src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png" alt="">
    </div>
    <div class="content">
      <div>
        <h3>Carlos Lara </h3>
      </div>
      <div class="comment">
        <h5>{{reseña.comment}}</h5>
      </div>
      <div>

      </div>
    </div>
    <div class="rating">
      <v-rating readonly color="primary"  length="5" size="20" :value="reseña.rating" ></v-rating>
    </div>
  </div>
</template>

<script>
export default {
  name: "reseña-item",
  props: [
    "reseña"
  ]
}
</script>

<style scoped>
.contenedor{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 15% 50% 15%;
  text-align: left;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.img-avatar{

}
.img{

  width: 130px;
  height: 90px;
}
.content {

  padding: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.comment {
  padding: 2px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}

.rating{
  margin-left: 15px;
  align-self: center;
}
</style>