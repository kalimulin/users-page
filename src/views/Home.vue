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
            td {{user.name}}
            td {{user.email}}
            td {{user.phone}}
      div(v-else) Список пользователей пуст
    Pagination(v-if="users && users.length", @page="changePage", :page="currentPage")
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: 'Home',
  data: () => ({
    currentPage: 1
  }),
  components: {
    Pagination
  },
  computed: {
    users() {
      return this.$store.getters.getUsersList(this.currentPage)
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page
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
      tbody
        td
          padding 5px
</style>