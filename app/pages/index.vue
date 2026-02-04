<script setup lang="ts">
const { locale } = useI18n();

// Watch for RTL changes
watchEffect(() => {
  if (process.client) {
    const dir = locale.value === "ar" || locale.value === "ku" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }
});
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Aurora Background -->
    <AuroraBackground />

    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="relative">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
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
  background: #0f172a;
}
</style>
