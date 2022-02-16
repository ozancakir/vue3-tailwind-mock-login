<template>
  <div class="w-full h-screen flex justify-center pt-[10%] relative">
  <LanguageDropdown class="absolute top-4 right-8"/>
    <div class="flex flex-col items-center space-y-8">
      <img src="@/assets/images/earthlink.png" alt="" />
      <h1 class="text-3xl font-bold">Sign in to Task Manager</h1>
      <BasicCard class="w-[420px] max-w-[90vw] h-80 p-8">
        <form name="form" class="form-section h-full">
          <div class="form-section">
            <label class="form-label" for="email">Email</label>
            <input
              class="form-input"
              type="text"
              placeholder="you@example.com"
              v-model="email"
            />
          </div>
          <div class="form-section">
            <label class="form-label" for="password">Password</label>
            <input
              class="form-input"
              type="text"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="flex justify-between text-sm items-center">
            <div class="flex space-x-1 items-center">
              <input
                type="checkbox"
                id="confirm"
                name="confirm"
                v-model="confirm"
              />
              <label for="confirm">Keep me logged in</label>
            </div>
            <a class="text-primary">Forgot password?</a>
          </div>
          <div class="flex flex-1"></div>
          <div class="form-section">
            <button
              class="bg-primary text-white py-2 rounded-md"
              :disabled="loading"
            >
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Sign in</span>
            </button>
          </div>
        </form>
      </BasicCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicCard from '@/components/cards/BasicCard.vue'
import LanguageDropdown from '../../components/dropdowns/LanguageDropdown.vue'

export default defineComponent({
  setup () {
    return {

    }
  },
  data () {
    return {
      email: '',
      password: '',
      confirm: false,
      loading: false
    }
  },
  components: { BasicCard, LanguageDropdown }
})
</script>

<style scoped lang="scss">
.form-section {
  @apply flex flex-col space-y-2;
}
.form-label {
  @apply font-bold;
}
.form-input {
  @apply border border-text-primary-lighter placeholder:text-text-primary-light placeholder:font-light font-normal p-1.5 rounded-md;
}
</style>
