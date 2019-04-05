<template>
  <section class="readme">
    <div class="container readme-render" v-html="readme"></div>
  </section>
</template>

<script>
import renderReadme from '@/tools/Readme/render-readme';

export default {
  data() {
    return {
      readme: '',
    };
  },
  beforeCreate() {
    const ReadmeLink = 'https://raw.githubusercontent.com/gabrodbr/shorten-hexdcolor/master/README.md';

    renderReadme(ReadmeLink)
      .then((ReadmeHTML) => {
        this.readme = ReadmeHTML;
      });
  },
};
</script>

<style lang="scss">
.readme {
  border-top: 0.0625rem solid rgba(#030D1A, .2);
  padding-bottom: 8rem;

  .readme-render {
    color: #030D1A;
    h2 {
      font-size: 2.25rem;
      font-weight: 600;

      margin-top: 8rem;
    }

    p {
      margin-top: 2rem;

      font-size: 18px;
      // line-height: 28px;
    }

    pre {
      &.hljs {
        padding: 1rem;
        border-radius: 0.25rem;

        width: 100%;
        max-width: 800px;

        margin-top: 2rem;

        code {
          line-height: 1.3;
          font-family: 'Courier New', Courier, monospace;
        }
      }
    }

    h3 {
      margin-top: 4rem;

      font-weight: 600;
      font-size: 24px;
    }

    h4 {
      margin-top: 2rem;

      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
