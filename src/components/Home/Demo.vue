<template>
  <section class="demo">
    <div class="container">
      <h1 class="title">Demo</h1>

      <main class="cards">
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
    </div>
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

<style lang="scss" scoped>
.demo {
  padding: 8rem 0;
  .title {
    font-weight: 600;
    font-size: 36px;

    color: #030D1A;
  }

  .cards {
    margin-top: 4rem;
    display: grid;
    grid-template-areas: 1fr 1fr 1fr;
  }
}
</style>
