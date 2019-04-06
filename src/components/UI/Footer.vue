<template>
  <footer class="footer">
    <div class="container footer-content">
      <p>
        Made with <span class="destak">♥</span> by
        <a href="https://gabrielrodrigues.dev" target="_blank">
        Gabriel Rodrigues
        </a>
        under
        <a href="https://github.com/gabrodbr/shorten-hexdcolor/blob/master/LICENSE" target="_blank">
          MIT license.
        </a>
      </p>

      <div class="lindeza">
        <img :src="lindeza" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
import RoIcon from '@/assets/img/ro.png';

export default {
  data() {
    return {
      lindeza: RoIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #09305C;
  padding: 2rem 0;

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 1.125rem;
      // line-height: 1.75;

      color: rgba(#E1EBF7, .6);

      a, .destak {
        color: #E1EBF7;
      }
      a {
        text-decoration: none;

      }
    }

    .lindeza {
      user-select: none;
      img {
        border: 0.03125rem solid #E1EBF7;
        border-radius: .5rem;

        max-width: 1.5rem;
      }
    }
  }

}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .footer {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;

      p {
        font-size: 1rem;
        line-height: 1.35;
      }

      .lindeza {
        margin-top: 2rem;
      }
    }
  }
}
</style>
