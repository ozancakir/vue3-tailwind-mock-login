<template>
    <div class="w-12 h-12 flex flex-none items-center justify-center rounded-md" :class="type=='kanban'?'bg-bg-accent-alternate':'bg-bg-accent'">
<img class="w-2/3 h-2/3" :src="require(`@/assets/images/${image}`)">
    </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'kanban',
      validator: (v) => ['kanban', 'scrum'].includes(v)
    },
    icon: {
      type: String,
      default: 'leaf'
    }
  },
  computed: {
    image () {
      const images = {
        leaf: 'tobacco.svg',
        user: 'customerWhite.svg'
      }

      return images[this.icon] ?? images.leaf
    }
  }

})
</script>

<style scoped>

</style>
