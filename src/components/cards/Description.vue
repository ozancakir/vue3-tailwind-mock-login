<template>
  <p class="py-2 text-text-primary-light text-sm">
    {{ description }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: ['description']
})
</script>

<style scoped></style>
