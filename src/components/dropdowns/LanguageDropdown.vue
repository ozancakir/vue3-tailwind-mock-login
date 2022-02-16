<template>
  <div
    class="flex flex-none space-x-2 cursor-pointer"
    v-click-outside="closeDropdown"
    @click="toggle"
  >
    <div class="flex flex-none items-center space-x-2 relative text-primary">
      <i class="fas fa-chevron-down text-sm"></i>
      <span>{{ languages.find((e) => selected == e.key).value }}</span>
      <div
        class="transform duration-300 w-20 max-h-24 bg-bg-primary-dark shadow-md rounded-md absolute top-6 -left-2"
        :class="
          isOpen
            ? 'scale-y-100 opacity-100 visible'
            : 'scale-y-90 opacity-50 invisible -translate-y-2'
        "
      >
        <p
          @click="select(item)"
          class="pl-1 text-sm text-text-primary hover:text-primary cursor-pointer border-b border-opacity-20"
          v-for="(item, index) in languages"
          :key="index"
        >
          {{ item.value }}
        </p>
      </div>
    </div>
    <img src="@/assets/images/globe.svg" alt="" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import vClickOutside from 'click-outside-vue3'

export default defineComponent({
  setup () {
    return {
      languages: [
        {
          value: 'Türkçe',
          key: 'tr'
        },
        {
          value: 'English',
          key: 'en'
        },
        {
          value: 'يبرع',
          key: 'ar'
        }
      ]
    }
  },
  data () {
    return {
      selected: 'ar',
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    select (val) {
      this.selected = val.key
    },
    closeDropdown () {
      if (this.isOpen) {
        this.isOpen = false
      }
    }
  },
  directives: { clickOutside: vClickOutside.directive }
})
</script>

<style scoped></style>
