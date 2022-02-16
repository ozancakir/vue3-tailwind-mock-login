<template>
  <div class="tabs">
    <div v-if="searchPlaceholder" class="flex"><input class="ml-auto" type="text" :placeholder="searchPlaceholder"></div>
    <div class="flex border-b-4">
      <div
        class="tab font-semibold h-16  transform duration-300 flex -mb-1 items-center border-b-4 justify-center  rounded-t p-5 cursor-pointer"
        :class="active === tab ? 'border-primary text-2xl text-primary ' : ' border-transparent text-lg'"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab)"
      >
        {{tab}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Tabs',
  props: {
    tabsNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchPlaceholder: String
  },
  data: function () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : ''
    }
  },
  emits: ['changed'],
  methods: {
    changeTab: function (tab: string) {
      this.active = tab
      this.$emit('changed', tab)
    }
  }
})
</script>
