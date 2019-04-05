<template>
  <section class="demo">
    <div class="container">
      <h1 class="title">Demo</h1>

      <main class="cards">
        <Card title="Initial Color" v-model="initialColor" />
        <Card title="Simplified Color" :value="simplifiedColor" readonly />

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
import shortenHexdColor from 'shorten-hexdcolor';
import Card from '@/components/Demo/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      initialColor: '089089',
      simplifiedColor: 'VAI CAGAR SEU ADOTADO', // eu tava com raiva nessa hora, mas vou deixar xD
    }
  },
  beforeMount() {
    this.simplify();
  },
  methods: {
    simplify() {
      if(this.initialColor.length > 1) {
        this.simplifiedColor = shortenHexdColor(this.initialColor);
      }
      // console.log(this.initialColor);
    },
  },
  watch: {
    initialColor() {
      this.simplify();
    },
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
    grid-template-columns: 1fr 1fr 1fr;

    border-radius: .5rem;
    overflow: hidden;
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 1000px) {
  .demo {
    .cards {   
      grid-template-columns: 1fr;

      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>