<template>
  <div class="search">
    <input
      class="search-input"
      :placeholder="placeholder"
      v-model="searchText"
      type="text"
    />
    <img
      class="flex flex-none pr-2"
      :src="require('@/assets/images/search.svg')"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    },
    debounce: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      searchText: '',
      // eslint-disable-next-line
      t: undefined as any,
    }
  },
  watch: {
    searchText: {
      handler (val) {
        if (this.t) {
          clearTimeout(this.t)
        }
        this.t = setTimeout(
          () => {
            this.$emit('input', val)
          },
          this.debounce ? 300 : 0
        )
      }
    }
  }
})
</script>

<style scoped lang="scss">
.search {
  @apply border border-text-primary-lighter  rounded-md overflow-hidden flex flex-none items-center w-80  max-w-[90vw];
}
.search-input {
  @apply flex flex-1 px-2 py-1   placeholder:text-text-primary-light  placeholder:font-light focus-visible:border-none focus-visible:outline-none font-normal;
}
</style>
