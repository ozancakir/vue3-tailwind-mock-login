<template>
  <button
    @click="(e) => $emit('onClick')"
    class="py-2 mt-4 rounded-md w-full font-bold capitalize"
    :class="reverse ? 'bg-bg-primary-darker text-primary' : 'bg-primary text-white'"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    label: { type: String, default: 'Button' },
    reverse: { type: Boolean, default: false }
  }
})
</script>

<style scoped></style>
