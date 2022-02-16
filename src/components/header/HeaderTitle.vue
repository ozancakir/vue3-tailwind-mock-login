<template>
  <div class="flex flex-none space-x-2 items-center font-semibold">
    <img :src="require(`@/assets/images/${value.image}`)" alt="" />
    <span>{{ value.title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped></style>
