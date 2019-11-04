<template>
  <section>
    <nuxt-link to="/search/first">Search: "first"</nuxt-link>
    <nuxt-link to="/search/second">Search: "second"</nuxt-link>
  </section>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
html,
body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-size: 11pt;
}
</style>
