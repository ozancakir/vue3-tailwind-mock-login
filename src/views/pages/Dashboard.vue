<template>
  <HeaderLayout>
    <h1 class="text-2xl font-bold py-3">Projects Dashboard</h1>
    <div class="flex md:justify-end justify-center">
      <SearchInput placeholder="subject or reference"></SearchInput>
    </div>

    <Tabs :tabs-names="tabNames()" @changed="changeTab"></Tabs>
    <div class="py-3">
      <transition mode="out-in" name="fade">
        <component :is="currentTab"></component>
      </transition>
    </div>
  </HeaderLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLayout from '../layouts/HeaderLayout.vue'
import SearchInput from '@/components/SearchInput.vue'
import Tabs from '@/components/Tabs.vue'
import Departments from '../../components/tabs/Departments.vue'
import Employees from '../../components/tabs/Employees.vue'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      tabs: [
        {
          title: 'Employees',
          component: 'Employees'
        },
        {
          title: 'Departments',
          component: 'Departments'
        }
      ],
      selected: 'Employees'
    }
  },
  methods: {
    tabNames () {
      return this.tabs.map((e) => e.title)
    },
    changeTab (val: string) {
      this.selected = val
    }
  },
  computed: {
    currentTab (): string {
      return this.tabs?.find((e) => e?.title === this.selected)?.component ?? 'Employees'
    }
  },
  components: { HeaderLayout, SearchInput, Tabs, Departments, Employees }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
