<template>
  <div class="card" :class="theme" :style="{ backgroundColor: `#${displayColor}` }">
    <h2 class="title">{{ title }}</h2>

    <div v-if="useSlot"><slot /></div>

    <div v-else>
      <input
        type="text"
        maxlength="7"
        ref="currentColor"

        :value="currentColor == 'pls-clear' ? '' : currentColor"
        @input="updateColor()"

        :readonly="readonly">

    </div>
  </div>
</template>

<script>
import defaultColorStyle from '@/tools/color/default-color-style';
import oppositeColorTheme from '@/tools/color/opposite-color-theme';

export default {
  props: {
    title: String,
    useSlot: Boolean,

    // input
    value: String,
    readonly: Boolean,
  },

  data() {
    return {
      currentColor: '',
    };
  },
  methods: {
    updateColor() {
      this.currentColor = this.$refs.currentColor.value;
    },
  },
  computed: {
    displayColor() {
      if (this.currentColor.length % 2 == 0 && this.currentColor !== 'pls-clear') {
        return this.currentColor;
      }
      return '09305C';
    },
    theme() {
      return oppositeColorTheme(this.displayColor);
    },
  },
  watch: {
    value() {
      if (this.value) {
        this.currentColor = this.value;
      }
    },
    currentColor() {
      // #ASDFGED -> ADFGED
      if(this.currentColor !== 'pls-clear') {
        this.currentColor = defaultColorStyle(this.currentColor);
      }
      this.$emit('input', this.currentColor);
    },
  },

  beforeMount() {
    if (this.value) {
      this.currentColor = this.value;
    } else {
      this.currentColor = '09305C';
    }
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Alice');
@import '~@/assets/styles/vars/fonts';

.card {
  padding: 4rem 2rem;
  transition: background-color .3s ease;


  .title {
    margin-bottom: 2rem;

    font-size: 1.5rem;
    text-align: center;

    font-family: $serif-font;
  }
  input {
    display: block;
    width: 100%;
    padding: 1rem 0;

    text-align: center;
    font-size: 1.125rem;

    border: none;
    border-radius: 0.25rem;

  }

  &.light {
    $color: #B9CCE1;
    color: $color;
    input {
      color: $color;
      background: rgba($color, .2);
    }
  }
  &.dark {
    $color: #030D1A;
    color: $color;
    input {
      color: $color;
      background: rgba($color, .2);
    }
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .card {
    input {
      font-size: 1rem;
    }
  }
}
</style>
