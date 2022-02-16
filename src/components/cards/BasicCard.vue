<template>
 <div
    class=" shadow-lg border border-text-primary-light border-opacity-10 rounded-md relative overflow-hidden"
  >
    <div v-if="header" class="w-full h-10 bg-bg-primary-dark flex items-center border-b border-text-primary-light border-opacity-10">
      <span class="px-4 text-text-primary uppercase font-bold text-sm">{{ header }}</span>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    header: {
      type: String

    }
  }
})
</script>

<style scoped>

</style>
