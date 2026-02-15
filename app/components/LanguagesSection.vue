<script setup lang="ts">
const { t } = useI18n();

const languages = [
  {
    name: "Kurdish",
    native: true,
    level: 100,
    skills: {
      speaking: "Native",
      reading: "Native",
      writing: "Native",
    },
    flagType: "kurdistan",
  },
  {
    name: "English",
    native: false,
    level: 80,
    levelCode: "B2",
    skills: {
      speaking: "B2",
      reading: "B2",
      writing: "B2",
    },
    flagType: "usa",
  },
  {
    name: "Arabic",
    native: false,
    level: 60,
    levelCode: "B1",
    skills: {
      speaking: "A1",
      reading: "B1",
      writing: "A1",
    },
    flagType: "iraq",
  },
];

const getLevelColor = (level: number) => {
  if (level >= 90) return "green";
  if (level >= 70) return "blue";
  if (level >= 50) return "yellow";
  return "gray";
};
</script>

<template>
  <section id="languages" class="py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-12"
      >
        <UBadge size="lg" color="primary" variant="soft" class="mb-4">
          <UIcon name="i-lucide-languages" class="mr-1" />
          {{ t("languages.badge") }}
        </UBadge>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("languages.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ t("languages.description") }}
        </p>
      </div>

      <!-- Languages Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <UCard
          v-for="(lang, index) in languages"
          :key="lang.name"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
          class="text-center hover:shadow-lg transition-all duration-300"
          :class="lang.native ? 'border-2 border-green-500/30' : ''"
        >
          <!-- Flag & Language Name -->
          <div class="mb-4">
            <!-- CSS Flags (unified style) -->
            <div class="mb-3 flex justify-center">
              <!-- Kurdistan Flag -->
              <div
                v-if="lang.flagType === 'kurdistan'"
                class="w-12 h-8 rounded overflow-hidden shadow-sm flex flex-col"
              >
                <div class="h-1/3 bg-red-500"></div>
                <div class="h-1/3 bg-white flex items-center justify-center">
                  <div
                    class="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center"
                  >
                    <div
                      class="w-2 h-2 rounded-full border border-yellow-600"
                    ></div>
                  </div>
                </div>
                <div class="h-1/3 bg-green-500"></div>
              </div>
              <!-- USA Flag -->
              <div
                v-else-if="lang.flagType === 'usa'"
                class="w-12 h-8 rounded overflow-hidden shadow-sm relative bg-white"
              >
                <div class="absolute inset-0 flex flex-col">
                  <div
                    v-for="i in 7"
                    :key="i"
                    class="flex-1"
                    :class="i % 2 === 1 ? 'bg-red-600' : 'bg-white'"
                  ></div>
                </div>
                <div
                  class="absolute top-0 left-0 w-5 h-[57%] bg-blue-800 flex flex-wrap items-center justify-center p-0.5"
                >
                  <span class="text-white text-[4px] leading-none">★★★★★★</span>
                </div>
              </div>
              <!-- Iraq Flag -->
              <div
                v-else-if="lang.flagType === 'iraq'"
                class="w-12 h-8 rounded overflow-hidden shadow-sm flex flex-col"
              >
                <div class="h-1/3 bg-red-600"></div>
                <div class="h-1/3 bg-white flex items-center justify-center">
                  <span class="text-green-700 text-[6px] font-bold"
                    >الله أكبر</span
                  >
                </div>
                <div class="h-1/3 bg-black"></div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ t(`languages.langs.${lang.name.toLowerCase()}.name`) }}
            </h3>
            <UBadge
              v-if="lang.native"
              color="success"
              variant="soft"
              size="sm"
              class="mt-2"
            >
              {{ t("languages.native") }}
            </UBadge>
            <UBadge
              v-else
              :color="lang.level >= 70 ? 'primary' : 'warning'"
              variant="soft"
              size="sm"
              class="mt-2"
            >
              {{ lang.levelCode }}
            </UBadge>
          </div>

          <!-- Proficiency Bar -->
          <div class="mb-4">
            <div
              class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full rounded-full transition-all duration-700"
                :class="[
                  lang.native
                    ? 'bg-linear-to-r from-green-400 to-green-600'
                    : lang.level >= 70
                      ? 'bg-linear-to-r from-blue-400 to-blue-600'
                      : 'bg-linear-to-r from-yellow-400 to-yellow-600',
                ]"
                :style="{ width: `${lang.level}%` }"
              ></div>
            </div>
          </div>

          <!-- Skill Breakdown -->
          <div class="space-y-2 text-sm">
            <div
              class="flex justify-between items-center text-gray-600 dark:text-gray-400"
            >
              <span>{{ t("languages.speaking") }}</span>
              <span class="font-medium">{{ lang.skills.speaking }}</span>
            </div>
            <div
              class="flex justify-between items-center text-gray-600 dark:text-gray-400"
            >
              <span>{{ t("languages.reading") }}</span>
              <span class="font-medium">{{ lang.skills.reading }}</span>
            </div>
            <div
              class="flex justify-between items-center text-gray-600 dark:text-gray-400"
            >
              <span>{{ t("languages.writing") }}</span>
              <span class="font-medium">{{ lang.skills.writing }}</span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- CEFR Reference -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{
          opacity: 1,
          transition: { duration: 600, delay: 400 },
        }"
        class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
      >
        <p>{{ t("languages.cefrNote") }}</p>
      </div>
    </div>
  </section>
</template>
