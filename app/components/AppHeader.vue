<script setup lang="ts">
const { t } = useI18n();
const colorMode = useColorMode();

const scrollToSection = (sectionId: string) => {
  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-300/30 dark:border-gray-800/30 shadow-sm"
  >
    <nav class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Name -->
        <button
          @click="scrollToSection('home')"
          class="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          MH
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <button
            v-for="item in [
              'home',
              'skills',
              'experience',
              'projects',
              'contact',
            ]"
            :key="item"
            @click="scrollToSection(item)"
            class="text-gray-800 dark:text-gray-200 hover:text-primary-500 transition-colors font-medium"
          >
            {{ t(`nav.${item}`) }}
          </button>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ClientOnly>
            <UButton
              :icon="
                colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'
              "
              color="neutral"
              variant="ghost"
              @click="
                colorMode.preference =
                  colorMode.value === 'dark' ? 'light' : 'dark'
              "
            />
          </ClientOnly>
        </div>
      </div>
    </nav>
  </header>
</template>
