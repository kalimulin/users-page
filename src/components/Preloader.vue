<template lang="pug">
  .preloader
    .preloader__container
      .preloader__speeding-wheel
    .preloader__text Получение данных...
</template>

<script>
  export default {
    name: "Preloader"
  }
</script>

<style scoped lang="stylus">
  .preloader
    position fixed
    z-index 10
    width 100%
    height 100%
    top 0
    left 0
    display flex
    flex-direction column
    align-items center
    justify-content center
    background-color rgba(255,255,255,.9)
    transition 300ms

    .preloader__text
      margin-top 20px

    .preloader__container
      width 100%
      height 49px
      text-align center

    .preloader__speeding-wheel
      width 49px
      height 49px
      margin 0 auto
      border 3px solid rgb(0,0,0)
      border-radius 50%
      border-left-color transparent
      border-right-color transparent
      animation cssload-spin 575ms infinite linear
      -o-animation cssload-spin 575ms infinite linear
      -ms-animation cssload-spin 575ms infinite linear
      -webkit-animation cssload-spin 575ms infinite linear
      -moz-animation cssload-spin 575ms infinite linear


  @keyframes cssload-spin {
    100%{ transform: rotate(360deg) }
  }

  @-o-keyframes cssload-spin {
    100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @-ms-keyframes cssload-spin {
    100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @-webkit-keyframes cssload-spin {
    100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @-moz-keyframes cssload-spin {
    100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
  }
</style>