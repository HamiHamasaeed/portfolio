<script setup lang="ts">
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  title: "Muhammad HamaSaeed",
  meta: [
    {
      name: "description",
      content:
        "Muhammad HamaSaeed - Front-end Developer, Teacher, and Co-Founder of Codify. Specialized in Vue.js, Nuxt.js, React, and modern web development. Based in Sulaymaniyah, Iraq.",
    },
    {
      name: "keywords",
      content:
        "Muhammad HamaSaeed, Front-end Developer, Web Developer, Vue.js, Nuxt.js, React, JavaScript, TypeScript, Teacher, Codify, Sulaymaniyah, Iraq, Kurdistan, Portfolio",
    },
    { name: "author", content: "Muhammad HamaSaeed" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Muhammad HamaSaeed | Front-end Developer & Teacher",
    },
    {
      property: "og:description",
      content:
        "Front-end Developer, Teacher, and Co-Founder of Codify. Specialized in modern web development with Vue.js, React, and Node.js.",
    },
    { property: "og:image", content: "/me.jpg" },
    { property: "og:url", content: "https://muhammadhamasaeed.com" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Muhammad HamaSaeed | Front-end Developer & Teacher",
    },
    {
      name: "twitter:description",
      content:
        "Front-end Developer, Teacher, and Co-Founder of Codify. Specialized in modern web development.",
    },
    { name: "twitter:image", content: "/me.jpg" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "canonical", href: "https://muhammadhamasaeed.com" },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap",
    },
  ],
});
</script>

<template>
  <NuxtPage />
</template>
