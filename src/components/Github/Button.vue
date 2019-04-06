<template>
  <div class="github-button">
    <!-- Place this tag where you want the button to render. -->
    <a :href="url">
      <div>
        <img class="icon" :src="icon" alt="Icon">
      </div>

      <span>
        {{ type }}
      </span>
    </a>
  </div>
</template>

<script>
import ForkIcon from '@/assets/img/Github/fork.svg';
import StarIcon from '@/assets/img/Github/star.svg';

const icons = { fork: ForkIcon, star: StarIcon };

export default {
  props: {
    type: String,
  },
  computed: {
    icon() {
      return icons[this.type.toLowerCase()];
    },
    url() {
      const base = 'https://github.com/gabrodbr/shorten-hexdcolor';

      if (this.type.toLowerCase() === 'fork') {
        return `${base}/fork`;
      }
      return base;
    },
  },
};
</script>

<style lang="scss" scoped>

.github-button {

  background: linear-gradient(180deg, #FAFBFC 0%, #EFF3F6 100%), #FAFBFC;
  border: 0.0625rem solid rgba(27, 31, 35, 0.2);

  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    color: #030D1A;

    .icon {
      width: 1.125rem;
    }
    span {
      margin-left: 0.25rem;

      font-size: 0.875rem;
      font-weight: 600;
    }
  }
}
</style>
