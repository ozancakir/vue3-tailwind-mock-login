<template>
  <div class="w-full">
    <SummaryHeader header="projects"></SummaryHeader>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SummaryHeader from '@/components/header/SummaryHeader.vue'

export default defineComponent({
  setup () {
    return {}
  },
  components: { SummaryHeader }
})
</script>

<style scoped></style>
