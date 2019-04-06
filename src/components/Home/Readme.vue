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

      font-size: 1.125rem;
      // line-height: 1.75;
    }

    code {
      font-family: 'Courier New', Courier, monospace;
    }
    pre {
      &.hljs {
        padding: 1rem;
        border-radius: 0.5rem;

        width: 100%;
        max-width: 50rem;

        margin-top: 2rem;

        code {
          line-height: 1.3;
        }
      }
    }
    code:not(.using-hljs) {
      padding: .1rem .25rem;
      display: inline-block;

      font-size: 1rem;
      color: rgba(#030D1A, .8);

      background-color: rgba(#030D1A, .1);
      border: 0.0625rem solid rgba(#030D1A, .1);
      border-radius: 0.375rem;
    }

    h3 {
      margin-top: 4rem;

      font-weight: 600;
      font-size: 1.5rem;
    }

    h4 {
      margin-top: 2rem;

      font-weight: 600;
      font-size: 1.125rem;
    }
  }
}
</style>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .readme {
    .readme-render {
      h2 {
        font-size: 1.75rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.4;
      }
      pre {
        &.hljs {
          font-size: 0.875rem;
        }
      }
      h3 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
