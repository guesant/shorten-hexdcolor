<template>
  <div id="app">
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from '@/pages/Home.vue';
import Footer from '@/components/UI/Footer.vue';

export default {
  components: {
    Home,
    Footer,
  },
};
</script>

<style lang="scss">
@import '~@/assets/styles/app';
html, body {
  background-color: #E1EBF7;
}
</style>
