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
    class="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-24"
  >
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="max-w-6xl mx-auto w-full"
    >
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <!-- Image Section -->
        <div class="lg:w-2/5 flex justify-center">
          <div class="relative">
            <!-- Decorative frame -->
            <div
              class="absolute -inset-4 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"
            ></div>
            <div class="relative">
              <!-- Tech border effect -->
              <div
                class="absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl opacity-75"
              ></div>
              <div class="relative bg-gray-900 p-1 rounded-xl overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Muhammad HamaSaeed - Front-end Developer and Teacher"
                  class="w-64 h-80 md:w-72 md:h-96 object-cover object-top scale-150 rounded-lg"
                />
              </div>
            </div>
            <!-- Co-Founder Badge -->
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: { duration: 500, delay: 400 },
              }"
              class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6"
            >
              <div
                class="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm md:text-base flex items-center gap-2"
              >
                <UIcon name="i-lucide-rocket" class="text-lg" />
                {{ t("hero.cofounder") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="lg:w-3/5 text-center lg:text-left">
          <!-- Greeting -->
          <p
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 500, delay: 100 },
            }"
            class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2"
          >
            {{ t("hero.greeting") }}
          </p>

          <!-- Name -->
          <h1
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 500, delay: 200 },
            }"
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            {{ t("hero.name") }}
          </h1>

          <!-- Title -->
          <p
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 500, delay: 300 },
            }"
            class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
          >
            {{ t("hero.title") }}
          </p>

          <!-- Location Badge -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: 350 },
            }"
            class="flex items-center justify-center lg:justify-start gap-2 mb-6"
          >
            <UBadge
              size="lg"
              color="neutral"
              variant="soft"
              class="flex items-center gap-2"
            >
              <UIcon name="i-lucide-map-pin" class="text-blue-500" />
              {{ t("hero.location") }}
            </UBadge>
          </div>

          <!-- Description -->
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: 400 },
            }"
            class="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed rtl:text-right"
          >
            {{ t("hero.description") }}
          </p>

          <!-- Quick Stats -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: 450 },
            }"
            class="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
          >
            <div
              class="text-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div class="text-2xl md:text-3xl font-bold text-blue-500">4+</div>
              <div class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {{ t("hero.yearsExp") }}
              </div>
            </div>
            <div
              class="text-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div class="text-2xl md:text-3xl font-bold text-purple-500">
                20+
              </div>
              <div class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {{ t("hero.projects") }}
              </div>
            </div>
            <div
              class="text-center p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div class="text-2xl md:text-3xl font-bold text-cyan-500">3</div>
              <div class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {{ t("hero.languages") }}
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: 500 },
            }"
            class="flex gap-3 justify-center lg:justify-start flex-wrap"
          >
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
      </div>
    </div>
  </section>
</template>
