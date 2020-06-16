<template lang="pug">
  .users-list
    h1 Список пользователей
    div
      table.users-list__table(v-if="users && users.length")
        thead
          tr
            td Name
            td Email
            td Phone
        tbody
          tr(v-for="user in users", :key="user.id")
            td.users-list__name
              router-link(:to="`/user/${user.id}`") {{user.name}}
            td.users-list__email {{user.email}}
            td {{user.phone}}
      div(v-else) Список пользователей пуст
    Pagination(v-if="users && users.length")
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: 'Home',
  components: {
    Pagination
  },
  computed: {
    users() {
      return this.$store.getters.getUsersList(this.currentPage)
    },
  },
}
</script>

<style lang="stylus">
  .users-list
    &__table
      width 100%
      margin-bottom 1rem
      border-collapse collapse
      .users-list__name
        text-align left
        width 40%
      .users-list__email
        width 30%
      thead
        font-weight bold
        tr
          height 30px
          vertical-align top
      tbody
        td
          padding 5px
</style>