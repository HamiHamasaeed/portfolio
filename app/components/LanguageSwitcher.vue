<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value as Array<{ code: string, name: string }>
})

const _currentLocale = computed(() => {
  return availableLocales.value.find(l => l.code === locale.value)
})
</script>

<template>
  <div class="flex gap-1">
    <UButton
      v-for="loc in availableLocales"
      :key="loc.code"
      :color="locale === loc.code ? 'primary' : 'neutral'"
      :variant="locale === loc.code ? 'soft' : 'ghost'"
      size="sm"
      @click="setLocale(loc.code)"
    >
      {{ loc.code.toUpperCase() }}
    </UButton>
  </div>
</template>
