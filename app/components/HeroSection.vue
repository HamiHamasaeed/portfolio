<script setup lang="ts">
const { t } = useI18n();

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks = ref<SocialLink[]>([]);

// Load social links from JSON
onMounted(async () => {
  const data = await $fetch<{ links: SocialLink[] }>("/social-links.json");
  if (data) {
    socialLinks.value = data.links;
  }
});
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center px-4 py-20"
  >
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="max-w-5xl mx-auto text-center"
    >
      <!-- Profile Image Placeholder -->
      <div class="mb-8 flex justify-center">
        <div
          class="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl"
        >
          <img
            src="/me.jpg"
            alt="Muhammad HamaSaeed - Front-end Developer and Teacher"
            class="w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      <!-- Greeting -->
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
        {{ t("hero.greeting") }}
      </p>

      <!-- Name -->
      <h1
        class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        {{ t("hero.name") }}
      </h1>

      <!-- Title -->
      <p
        class="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
      >
        {{ t("hero.title") }}
      </p>

      <!-- Description -->
      <p
        class="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
      >
        {{ t("hero.description") }}
      </p>

      <!-- Social Links -->
      <div class="flex gap-4 justify-center flex-wrap">
        <UButton
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.url"
          :icon="link.icon"
          size="lg"
          color="neutral"
          variant="soft"
          target="_blank"
        >
          {{ link.name }}
        </UButton>
      </div>
    </div>
  </section>
</template>
