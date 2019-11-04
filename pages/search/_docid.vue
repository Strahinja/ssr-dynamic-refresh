<template>
  <div class="search">
    <nuxt-link to="/">Back to home</nuxt-link>
    <p>{{docBodies[documentId]}}</p>
  </div>
  <!--doc-->
</template>

<script>
export default {
  name: "Search",
  asyncData({ params }) {
    return {
      documentId: params.docid,
      docBodies: {
        first: "First document",
        second: "Second document"
      }
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
