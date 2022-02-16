<template>
  <div
    class="flex flex-none items-center space-x-4 pr-2 text-text-primary-light relative"
  >
    <i class="fa-regular fa-bell text-xl"></i>
    <div class="w-px h-4 bg-text-primary-lighter"></div>
    <img
      :src="require('@/assets/images/customer.svg')"
      @click="toggle"
      class="border border-text-primary-lighter p-1 rounded-md bg-bg-primary-dark cursor-pointer"
      alt=""
    />
    <i class="fas fa-chevron-down"></i>
    <div
      v-click-outside="closeDropdown"
      class="transform duration-300 w-24 max-h-24 bg-bg-primary-dark shadow-md rounded-md absolute top-8 left-2 z-50"
      :class="
        isOpen
          ? 'scale-y-100 opacity-100 visible'
          : 'scale-y-90 opacity-50 invisible -translate-y-2'
      "
    >
      <div @click="logout" class="cursor-pointer flex items-center justify-center p-1">
        <span><i class="fas fa-sign-out"></i> Logout </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import vClickOutside from 'click-outside-vue3'
import store from '@/store'
import router from '@/router'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      isOpen: false,
      debounce: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      this.debounce = true
      setTimeout(() => {
        this.debounce = false
      }, 100)
    },
    async logout () {
      if (await store.dispatch('auth/logout')) {
        router.push('/login')
      }
    },
    closeDropdown () {
      if (this.isOpen && !this.debounce) {
        this.isOpen = false
      }
    }
  },
  directives: { clickOutside: vClickOutside.directive }
})
</script>

<style scoped></style>
