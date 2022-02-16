<template>
  <div class="evaluation">
    <div class="section">
      <i class="fas fa-heart"></i>
      <span>{{ evaluation.like }}</span>
    </div>
    <div class="section">
      <i class="far fa-eye"></i>
      <span>{{ evaluation.watch }}</span>
    </div>
    <div class="section">
      <i class="fas fa-user-friends"></i>
      <span>{{ evaluation.contributors }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    evaluation: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.evaluation {
  @apply flex flex-none space-x-2 items-center pt-2;
  .section {
    @apply flex flex-none space-x-1 cursor-pointer items-center text-text-primary-light;
    i {
      @apply w-5 text-text-primary-light text-base;
    }

    span {
      @apply text-text-primary text-base;
    }
  }
}
</style>
