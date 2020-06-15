<template lang="pug">
  .users-list
    h1 Список пользователей
    table.users-list__table(v-if="users && users.length")
      thead
        tr
          td Name
          td Email
          td Phone
      tbody
        tr(v-for="user in users", :key="user.id")
          td {{user.name}}
          td {{user.email}}
          td {{user.phone}}
    div(v-else) Список пользователей пуст
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  computed: {
    users() {
      return this.$store.getters.getUsersList()
    }
  }
}
</script>

<style lang="stylus">
  .users-list
    &__table
      width 100%
      margin-bottom 1rem
      border-collapse collapse
      thead
        font-weight bold
        tr
          height 30px
          vertical-align top
</style>