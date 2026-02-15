<script setup lang="ts">
const { locale } = useI18n()

// Language transition state
const isChangingLanguage = ref(false)
let languageTimeout: ReturnType<typeof setTimeout> | null = null

// Watch for language changes to trigger transition
watch(locale, () => {
  isChangingLanguage.value = true
  if (languageTimeout) clearTimeout(languageTimeout)
  languageTimeout = setTimeout(() => {
    isChangingLanguage.value = false
  }, 300)
})

// Watch for RTL changes
watchEffect(() => {
  if (import.meta.client) {
    const dir = locale.value === 'ar' || locale.value === 'ku' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
  }
})
</script>

<template>
  <div class="relative min-h-dvh">
    <!-- Particle Background -->
    <AuroraBackground />

    <!-- Header -->
    <AppHeader />

    <!-- Main Content with language transition -->
    <main
      class="relative overflow-x-hidden transition-all duration-300"
      :class="{ 'opacity-0 translate-y-2': isChangingLanguage }"
    >
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <LanguagesSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer
      class="relative py-8 px-4 text-center text-gray-600 dark:text-gray-500 border-t border-gray-300/30 dark:border-gray-800/20"
    >
      <p>
        © {{ new Date().getFullYear() }} Muhammad HamaSaeed. All rights
        reserved.
      </p>
    </footer>
  </div>
</template>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Fix mobile viewport height issues */
html,
body {
  min-height: 100dvh;
  overflow-x: hidden;
}

/* RTL Support & Font */
[dir="rtl"] {
  direction: rtl;
  font-family: "IBM Plex Sans Arabic", sans-serif;
}

[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}

/* Apply Arabic font for Kurdish and Arabic locales */
html[lang="ku"],
html[lang="ar"] {
  font-family: "IBM Plex Sans Arabic", sans-serif;
}

/* Light mode improvements */
body {
  background: #ffffff;
}

body.dark {
  background: #0a0a0a;
}

/* Mobile card overflow fix */
@media (max-width: 768px) {
  .overflow-x-hidden {
    overflow-x: hidden;
  }
}
</style>
