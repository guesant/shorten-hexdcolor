<template>
  <section class="demo">
    <div class="container">
      <h1 class="title">Demo</h1>

      <main class="cards">
        <Card title="Initial Color" v-model="initialColor" />
        <Card title="Simplified Color" :value="simplifiedColor" readonly />

        <Card title="Fork-me" useSlot>
          <div class="fork-me">
            <GithubButton type="Star" />
            <GithubButton type="Fork" />
          </div>
        </Card>
      </main>
    </div>
  </section>
</template>

<script>
import shortenHexdColor from 'shorten-hexdcolor';
import Card from '@/components/UI/Card.vue';
import GithubButton from '@/components/Github/Button.vue';

const randomColorChoose = () => {
  const colors = ['ADF039', '16597B', 'A0165D', '1786E2'];
  const choosedIndex = Math.round(Math.random() * colors.length) - 1;

  return colors[choosedIndex];
};

export default {
  components: {
    Card,
    GithubButton,
  },
  data() {
    return {
      initialColor: randomColorChoose(),
      simplifiedColor: 'VAI CAGAR SEU ADOTADO', // eu tava com raiva nessa hora, mas vou deixar xD
    };
  },
  beforeMount() {
    this.simplify();
  },
  methods: {
    simplify() {
      if (this.initialColor.length % 2 === 0) {
        this.simplifiedColor = shortenHexdColor(this.initialColor);
      } else {
        this.simplifiedColor = 'pls-clear';
      }
      console.log(this.initialColor);
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
    font-size: 2.25rem;

    color: #030D1A;
  }

  .cards {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border-radius: .5rem;
    overflow: hidden;

    .fork-me {
      display: flex;
      justify-content: center;

      padding: 0.34375rem 0;

      > * + * {
        margin-left: 1rem;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 1000px) {
  .demo {
    .title {
      text-align: center;
    }
    .cards {
      grid-template-columns: 1fr;

      max-width: 25rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .demo {
    .title {
      font-size: 1.75rem;
    }

  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 31.25rem) {
  .demo {
    .title {
      text-align: left;
    }
  }
}
</style>
