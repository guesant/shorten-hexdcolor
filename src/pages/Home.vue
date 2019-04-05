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
};
</script>
