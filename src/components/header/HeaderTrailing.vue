<template>
  <div
    class="flex flex-none items-center space-x-4 pr-2 text-text-primary-light"
  >
    <i class="fa-regular fa-bell text-xl"></i>
    <div class="w-px h-4 bg-text-primary-lighter"></div>
    <img
      :src="require('@/assets/images/customer.svg')"
      class="
        border border-text-primary-lighter
        p-1
        rounded-md
        bg-bg-primary-dark
      "
      alt=""
    />
    <i class="fas fa-chevron-down"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped></style>
