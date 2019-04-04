<template>
  <section class="CONTAINER">
    <h1>Demo</h1>

    <main>
      <Card title="Initial Color" />
      <Card title="Simplified Color" />

      <Card title="Fork-me" useSlot>
        <ul>
          <li>
            Stars: 0; Forks: 0;
          </li>
        </ul>
      </Card>
    </main>
  </section>
</template>

<script>
import Card from '@/components/Demo/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>
