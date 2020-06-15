<template lang="pug">
  #app
    #nav
      router-link(to='/') Пользователи
      hr
    .container
      router-view
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      fetchUsers() {
        this.$store.dispatch('writeUsersList')
          .then((response) => {
            // здесь предполагается какое-либо сообщение в интерфейсе о том, что данные получены
            console.log('data recieved', response)
          })
          .catch(e => {
            // тут можно сообщить, что данные не получены, и что-то в связи с этим предпринять
            console.log(e)
          })
      }
    },
    created() {
      this.fetchUsers()
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
    margin-top 60px
  .container {
    max-width 1024px
    margin 0 auto
    width: 100%
    padding-right: 15px
    padding-left: 15px
  }
</style>
