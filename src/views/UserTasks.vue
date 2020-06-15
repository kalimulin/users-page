<template lang="pug">
  div
    .user-tasks(v-if="user && user.id")
      h1 {{user.name}}
      a(href="#", @click.prevent="$router.go(-1)") Назад
      .user-tasks__tasks-list(v-if="user.tasks")
        .user-tasks__task-item(v-for="task in user.tasks", :key="task.id",
          :class="task.completed ? 'user-tasks__task-item_completed' : ''")
          input(type="checkbox", v-model="task.completed")
          label(@click="task.completed = !task.completed") {{task.title}}

    div(v-else) Пользователь не найден!

</template>

<script>
export default {
  name: 'UserTasks',
  computed: {
    user() {
      return this.$store.getters.getUserById(+this.$route.params.id)
    }
  }
}
</script>

<style lang="stylus">
  .user-tasks
    &__tasks-list
      text-align left
    &__task-item
      margin-top 10px
      label
        cursor: pointer
        margin-left 5px
      &_completed
        color grey
        text-decoration line-through
</style>
