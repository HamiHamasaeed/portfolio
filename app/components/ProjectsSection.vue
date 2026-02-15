<script setup lang="ts">
const { t } = useI18n()

const projects = [
  {
    id: 'codify',
    name: 'Codify Iraq',
    description: t('projects.items.codify.description'),
    tags: ['E-commerce', 'Vue.js', 'Web Development'],
    image: '/JustCs.png',
    url: 'https://codifyiraq.com/en',
    color: 'blue'
  },
  {
    id: 'ngk',
    name: 'NGK Lab',
    description: t('projects.items.ngk.description'),
    tags: ['Management System', 'Nuxt.js', 'Enterprise'],
    image: '/NGKLogo.png',
    url: 'https://ngklab.com',
    color: 'green'
  },
  {
    id: 'azady',
    name: 'Azady',
    description: t('projects.items.azady.description'),
    tags: ['SaaS', 'Management', 'Automation'],
    image: '/azadi.png',
    url: 'https://azady.org',
    color: 'purple'
  }
]
</script>

<template>
  <section
    id="projects"
    class="py-20 px-4"
  >
    <div class="max-w-7xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("projects.title") }}
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 }
          }"
          class="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Project Image -->
          <div
            class="mb-6 h-32 rounded-lg overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700"
          >
            <img
              :src="project.image"
              :alt="project.name"
              class="max-h-full max-w-full object-contain"
            >
          </div>

          <!-- Project Info -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 pt-2">
              <UBadge
                v-for="tag in project.tags"
                :key="tag"
                size="sm"
                color="primary"
                variant="soft"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- View Project Button -->
            <div class="pt-2">
              <UButton
                :to="project.url"
                target="_blank"
                block
                icon="i-lucide-external-link"
                trailing
                size="lg"
                color="primary"
              >
                {{ t("projects.viewProject") }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
