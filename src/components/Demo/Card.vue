<template>
  <div class="card" :class="theme" :style="{ backgroundColor: `#${displayColor}` }">
    <h2 class="title">{{ title }}</h2>

    <div v-if="useSlot"><slot /></div>

    <div v-else>
      <input 
        type="text"
        maxlength="7"
        ref="currentColor"

        :value="currentColor"
        @input="updateColor()"

        :readonly="readonly">

    </div>
  </div>
</template>

<script>
const defaultColorStyle = color => color.toString().toUpperCase().replace(/[^A-F0-9]/g, '').slice(0, 6);
const oppositeColorTheme = (hexC) => {
  const hex = hexC.toUpperCase().replace(/[^A-F0-9]/g, '');

  const rgb = [0, 2, 4].map(pos => parseInt(hex.slice(pos, pos + 2), 16));

  const ehCorClara = () => {
    const red = rgb[0] * 0.299;
    const green = rgb[1] * 0.587;
    const blue = rgb[2] * 0.114;

    return red + green + blue > 186;
  };

  if (ehCorClara() || hex.length < 2) {
    return 'dark';
  }
  return 'light';
};

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
      if(this.currentColor.length == 3 || this.currentColor.length == 6) {
        return this.currentColor;
      } else {
        return "09305C";
      }
    },
    theme() {
      return oppositeColorTheme(this.displayColor);
    },
  },
  watch: {
    value() {
      if(this.value) {
        this.currentColor = this.value;
      }
    },
    currentColor() {
      // #ASDFGED -> ADFGED
      this.currentColor = defaultColorStyle(this.currentColor);

      this.$emit('input', this.currentColor);
    },
  },

  beforeMount() {
    if(this.value) {
      this.currentColor = this.value;
    } else {
      this.currentColor = "09305C";
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 4rem 2rem;
  background-color: black;

  .title {
    margin-bottom: 2rem;

    font-size: 1.5rem;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    padding: 1rem 0;

    text-align: center;
    font-size: 18px;

    border: none;
    border-radius: 4px;
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
