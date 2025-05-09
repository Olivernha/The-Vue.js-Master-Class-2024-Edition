<script setup lang="ts">
      import { computed } from 'vue'
      import { useRouter } from 'vue-router'
      import { useErrorStore } from '@/stores/error'

      const router = useRouter()
      const errorStore = useErrorStore()

      const error = computed(() => errorStore.activeError)

      const errorData = computed(() => {
        if (!error.value) return {}

        if (!('code' in error.value)) {
          return {
            message: error.value.message,
            customCode: error.value.customCode ?? 0,
            details: '',
            hint: '',
            code: '',
            statusCode: 0,
          }
        }

        return {
          message: error.value.message,
          customCode: 0,
          details: error.value.details,
          hint: error.value.hint,
          code: error.value.code,
          statusCode: error.value.statusCode ?? 0,
        }
      })

      router.afterEach(() => {
        errorStore.activeError = null
      })
      </script>

      <template>
        <section class="error">
          <div>
            <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
            <h1 class="error__code">{{ errorData.customCode || errorData.code }}</h1>
            <p class="error__code" v-if="errorData.statusCode">Status Code: {{ errorData.statusCode }}</p>
            <p class="error__msg">{{ errorData.message }}</p>
            <p v-if="errorData.hint">{{ errorData.hint }}</p>
            <p v-if="errorData.details">{{ errorData.details }}</p>
            <div class="error-footer">
              <p class="error-footer__text">You'll find lots to explore on the home page.</p>
              <RouterLink to="/">
                <Button class="max-w-36">Back to homepage</Button>
              </RouterLink>
            </div>
          </div>
        </section>
      </template>

      <style scoped>
      .error {
        @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
      }

      .error__icon {
        @apply text-7xl text-destructive;
      }

      .error__code {
        @apply font-extrabold text-7xl text-secondary;
      }

      .error__msg {
        @apply text-3xl font-extrabold text-primary;
      }

      .error-footer {
        @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
      }

      .error-footer__text {
        @apply text-lg text-muted-foreground;
      }

      p {
        @apply my-2;
      }
      </style>
