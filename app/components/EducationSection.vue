<script setup lang="ts">
const { t } = useI18n()

const education = [
  {
    id: 'komar-degree',
    degree: 'Computer Engineering',
    institution: 'Komar University of Science and Technology',
    period: '2018 - 2022',
    location: 'Sulaymaniyah, Iraq',
    grade: '2.62 GPA',
    icon: 'i-lucide-graduation-cap',
    color: 'indigo',
    url: 'https://komar.edu.iq/',
    main: true
  },
  {
    id: 'komar-english',
    degree: 'CEFR B2 English Level',
    institution: 'Komar University of Science and Technology',
    period: '2017 - 2018',
    location: 'Sulaymaniyah, Iraq',
    icon: 'i-lucide-book-open',
    color: 'blue',
    url: 'https://komar.edu.iq/',
    main: false
  }
]

const certifications = [
  {
    name: 'Teaching Skills Course',
    issuer: 'Runaki Institute',
    date: 'Sep 2023',
    icon: 'i-lucide-award'
  },
  {
    name: 'Driving License (Class B)',
    issuer: 'Iraq',
    date: 'Nov 2022 - Nov 2027',
    icon: 'i-lucide-car'
  }
]
</script>

<template>
  <section
    id="education"
    class="py-20 px-4"
  >
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-12"
      >
        <UBadge
          size="lg"
          color="primary"
          variant="soft"
          class="mb-4"
        >
          <UIcon
            name="i-lucide-graduation-cap"
            class="mr-1"
          />
          {{ t("education.badge") }}
        </UBadge>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("education.title") }}
        </h2>
      </div>

      <!-- Education Cards -->
      <div class="space-y-6 mb-12">
        <UCard
          v-for="(edu, index) in education"
          :key="edu.id"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: index * 150 }
          }"
          :class="edu.main ? 'border-2 border-indigo-500/30' : ''"
        >
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div
              :class="`shrink-0 w-20 h-20 rounded-2xl bg-${edu.color}-500/10 flex items-center justify-center`"
            >
              <UIcon
                :name="edu.icon"
                :class="`text-4xl text-${edu.color}-500`"
              />
            </div>

            <div class="grow text-center md:text-left">
              <div
                class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2"
              >
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ t(`education.items.${edu.id}.degree`) }}
                </h3>
                <UBadge
                  v-if="edu.grade"
                  color="success"
                  variant="soft"
                  size="sm"
                >
                  {{ edu.grade }}
                </UBadge>
              </div>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">
                {{ t(`education.items.${edu.id}.institution`) }}
              </p>
              <div
                class="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-600 dark:text-gray-500"
              >
                <div class="flex items-center gap-1">
                  <UIcon name="i-lucide-calendar" />
                  <span>{{ t(`education.items.${edu.id}.period`) }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <UIcon name="i-lucide-map-pin" />
                  <span>{{ t(`education.items.${edu.id}.location`) }}</span>
                </div>
                <UButton
                  v-if="edu.url"
                  :to="edu.url"
                  target="_blank"
                  size="xs"
                  color="primary"
                  variant="ghost"
                  icon="i-lucide-external-link"
                >
                  {{ t("education.visitWebsite") }}
                </UButton>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Certifications -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 300 }
        }"
      >
        <h3
          class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center"
        >
          {{ t("education.certifications") }}
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          <UCard
            v-for="cert in certifications"
            :key="cert.name"
            class="hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-4">
              <div
                class="shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center"
              >
                <UIcon
                  :name="cert.icon"
                  class="text-2xl text-amber-500"
                />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ cert.name }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ cert.issuer }} • {{ cert.date }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
