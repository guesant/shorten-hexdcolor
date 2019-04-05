<template>
  <section class="intro">
    <div class="container">
      <h1 class="title">shorten-hexdcolor</h1>
      <div class="text">
        <p>
          An easy way to memorize your colors.
          Maintain the consistency of your projects.
        </p>
      </div>
      <button class="action">
        Get started
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  padding: 12rem 0;
  background: linear-gradient(106.67deg, #499DFF 0%, #1477EA 100%);

  .title {
    font-weight: bold;
    font-size: 2.25rem;

    color: #E1EBF7;
  }
  .text {
    margin-top: 2rem;
    max-width: 342px;

    line-height: 1.5rem;

    color: #E1EBF7;
  }
  .action {
    margin-top: 3rem;
    padding: 1rem;

    background: rgba(#E1EBF7, .3);
    border-radius: 0.5rem;
    border: none;

    font-size: 1rem;
    color: #F9FCFF;
  }
}
</style>
