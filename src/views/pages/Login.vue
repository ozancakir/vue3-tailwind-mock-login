<template>
  <div class="w-full h-screen flex justify-center pt-[10%] relative">
    <LanguageDropdown class="absolute top-4 right-8" />
    <div class="flex flex-col items-center space-y-8">
      <img src="@/assets/images/earthlink.png" alt="" />
      <h1 class="text-3xl font-bold">Sign in to Task Manager</h1>
      <BasicCard class="w-[420px] max-w-[90vw] h-auto min-h-80 p-8">
        <Form
          ref="form"
          @submit="() => false"
          lazy-validation
          name="form"
          class="form-section h-full"
          v-slot="{ errors, validate }"
        >
          <div class="form-section">
            <label class="form-label" for="email">Email</label>
            <Field
              :disabled="loading"
              :rules="emailV"
              class="form-input"
              :class="{ error: errors.email }"
              name="email"
              type="text"
              placeholder="you@example.com"
              v-model="email"
            />
            <ErrorMessage class="text-red-600" name="email" />
          </div>
          <div class="form-section">
            <label class="form-label" for="password">Password</label>
            <Field
              name="password"
              :disabled="loading"
              :rules="passV"
              :class="{ error: errors.password }"
              class="form-input"
              type="password"
              placeholder="Password"
              v-model="password"
            />
            <ErrorMessage class="text-red-600" name="password" />
          </div>
          <div class="flex justify-between text-sm items-center">
            <div class="flex space-x-1 items-center">
              <Field
                type="checkbox"
                name="confirm"
                :disabled="loading"
                id="confirm"
                v-model="confirm"
              />

              <label for="confirm">Keep me logged in</label>
            </div>
            <a class="text-primary cursor-pointer">Forgot password?</a>
          </div>
          <div class="flex flex-1"></div>
          <div class="form-section">
            <button
              class="bg-primary text-white py-2 rounded-md"
              :disabled="loading"
              @click="signin(validate)"
            >
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              <span v-else>Sign in</span>
            </button>
          </div>
        </Form>
      </BasicCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicCard from '@/components/cards/BasicCard.vue'
import LanguageDropdown from '../../components/dropdowns/LanguageDropdown.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import store from '@/store'
import router from '@/router'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      email: '',
      password: '',
      confirm: true,
      loading: false,
      emailV: yup.string().required().email(),
      passV: yup.string().min(6)
    }
  },
  methods: {
    async signin (fn:any) {
      const result = await fn()
      if (result && result.valid) {
        try {
          this.loading = true
          if (
            await store.dispatch('auth/login', {
              email: this.email,
              password: this.password
            })
          ) {
            router.push('/')
          }
        } catch (error) {
        } finally {
          this.loading = false
        }
      }
      return false
    }
  },

  components: { BasicCard, LanguageDropdown, Form, Field, ErrorMessage }
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
.error {
  border-color: red !important;
}
</style>
