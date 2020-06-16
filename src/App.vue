<template lang="pug">
  #app
    #nav
      router-link(to='/') Пользователи
      hr
    .container
      router-view
    Preloader(v-show="loading")
</template>

<script>
  import Preloader from "./components/Preloader";
  export default {
    name: 'Home',
    components: {Preloader},
    data: () => ({
      loading: false
    }),
    methods: {
      fetchData() {
        this.loading = true
        Promise.all([this.$store.dispatch('writeUsersList'), this.$store.dispatch('writeTasksList')])
          .then((response) => {
            // здесь предполагается какое-либо сообщение в интерфейсе о том, что данные получены
            console.log('data recieved', response)
          })
          .catch(e => {
            // тут можно сообщить, что данные не получены, и что-то в связи с этим предпринять
            console.log(e)
            alert('Ошибка получения данных')
          }).finally(() => { this.loading = false })
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style lang="stylus">
  #app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 30px
  .container
    max-width 1024px
    margin 0 auto
    width: 100%
    padding-right: 15px
    padding-left: 15px
</style>
