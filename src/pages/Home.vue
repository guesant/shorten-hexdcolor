<template>
  <div>
    <Intro />
    <Demo />
    <Readme />
  </div>
</template>

<script>
import Intro from '@/components/Home/Intro.vue';
import Demo from '@/components/Home/Demo.vue';
import Readme from '@/components/Home/Readme.vue';

export default {
  components: {
    Intro,
    Demo,
    Readme,
  },
  metaInfo: {
    title: 'An easy way to memorize your colors',
    titleTemplate: '%s — shorten-hexdcolor',
    // Define meta tags here.
    meta: [
      { name: 'description', content: 'The best package to simplify hexadecimal colors.' },
      { property: 'og:title', content: 'An easy way to memorize your colors — shorten-hexdcolor' },
      { property: 'og:site_name', content: 'shorten-hexdcolor' },

      { property: 'og:type', content: 'website' },

      { property: 'og:url', content: 'https://gabrodbr.github.io/shorten-hexdcolor' },
      // { property: 'og:image', content: 'https://gabrodbr.github.io/shorten-hexdcolor/img/...' },

      { property: 'og:description', content: 'The best package to simplify hexadecimal colors.' },
    ],
  },
};
</script>
