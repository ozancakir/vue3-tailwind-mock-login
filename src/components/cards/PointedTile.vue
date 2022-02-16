<template>
  <div class="flex flex-1 items-center">
    <SquareAvatar :icon="icon" :type="item.type"></SquareAvatar>
    <div class="pl-2 text-sm">
      <h3>
        <span
          class="font-normal text-text-primary-light pr-1"
          v-if="item.prepend"
          >{{ item.prepend }}</span
        >
        <span class="font-bold">{{ item.title }}</span>
      </h3>
      <span v-if="item.tags" class="pr-1">
        <span v-for="(tag, i) in item.tags" :key="i">{{
          `#${tag.number} ${tag.type}`
        }}</span>
      </span>
      <span
        class=" text-text-primary-light"
        v-if="item.subtitle"
        >{{ item.subtitle }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SquareAvatar from './SquareAvatar.vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    icon: {
      type: String,
      default: 'leaf'
    }
  },
  components: { SquareAvatar }
})
</script>

<style scoped></style>
