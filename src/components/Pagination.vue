<template lang="pug">
  .pagination
    .pagination__item(v-for="(item, idx) in paginationItems",
      :key="idx",
      :class="item === page ? 'pagination__item_current' : ''",
      @click="goToPage(item)") {{item}}
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      page: {
        type: Number,
        default: 1
      }
    },
    computed: {
      usersPerPage() { return this.$store.getters.getCountUsersPerPage },
      usersCount() { return this.$store.getters.getUsersCount },
      paginationItems() {
        const pages = Math.ceil(this.usersCount / this.usersPerPage)
        let items = []
        for (let i = 0; i < pages; i += 1) {
          items.push(i + 1)
        }
        return items
      }
    },
    methods: {
      goToPage(page) {
        this.$emit('page', page)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .pagination
    display flex
    justify-content center
    border-top 1px solid rgba(0,0,0,.5)

    &__item
      padding 5px
      cursor pointer
      text-decoration underline
      font-size 14px
      &_current
        font-weight bolder
        text-decoration none
</style>