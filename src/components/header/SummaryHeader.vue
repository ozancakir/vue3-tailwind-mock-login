<template>
  <div
    class="
      w-full
      h-16
      border-b border-opacity-20
      px-2
      shadow-sm
      items-center
      flex flex-1
      justify-between
    "
  >
    <div class="flex flex-none space-x-4">
      <HeaderIcon></HeaderIcon>
      <HeaderTitle :value="currentHeader"></HeaderTitle>
    </div>
    <HeaderTrailing></HeaderTrailing>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderIcon from './HeaderIcon.vue'

import { headers } from '@/constants/headers'
import HeaderTitle from './HeaderTitle.vue'
import HeaderTrailing from './HeaderTrailing.vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    header: {
      type: String,
      required: true
    }
  },

  computed: {
    currentHeader () {
      return headers.find((e) => e.key === this.header) ?? headers[0]
    }
  },
  components: { HeaderIcon, HeaderTitle, HeaderTrailing }
})
</script>

<style scoped></style>
