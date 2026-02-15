<script setup lang="ts">
const { t } = useI18n()

interface SocialLink {
  name: string
  url: string
  icon: string
}

const socialLinks = ref<SocialLink[]>([])

onMounted(async () => {
  const data = await $fetch<{ links: SocialLink[] }>('/social-links.json')
  if (data) {
    socialLinks.value = data.links
  }
})
</script>

<template>
  <section
    id="contact"
    class="py-20 px-4"
  >
    <div class="max-w-3xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("contact.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {{ t("contact.description") }}
        </p>

        <div class="flex gap-4 justify-center flex-wrap">
          <UButton
            v-for="link in socialLinks"
            :key="link.name"
            :to="link.url"
            :icon="link.icon"
            size="xl"
            :color="link.name === 'Email' ? 'primary' : 'neutral'"
            :variant="link.name === 'Email' ? 'solid' : 'soft'"
            target="_blank"
          >
            {{ link.name }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
