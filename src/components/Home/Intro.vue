<template>
  <section class="intro">
    <div class="container">
      <h1 class="title">shorten-hexdcolor</h1>
      <div class="text">
        <p>
          An easy way to memorize your colors.
        </p>
      </div>
      <div class="arrow">
        <img src="~@/assets/img/arrow-down.svg" alt="🡓">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@keyframes seta {
  0% {
    transform: none;
  }
  100% {
    transform: translate3d(0, 1rem, 0);
  }
}

.intro {
  padding: 12rem 0;
  background: linear-gradient(106.67deg, #499DFF 0%, #1477EA 100%);

  position: relative;
  width: 100%;
  &::after {
    content: '';

    display: block;
    position: absolute;
    width: 100%;
    height: 8rem;
    bottom: 0;

    background: no-repeat url('~@/assets/img/intro-transition.svg');
    background-size: 100% 100%;
    background-position: 0 0;
  }
  .title {
    font-weight: bold;
    font-size: 2.25rem;

    color: #E1EBF7;
  }
  .text {
    margin-top: 2rem;
    max-width: 21.375rem;

    line-height: 1.5;

    color: #E1EBF7;
  }
  .arrow {
    margin-top: 3rem;
    // padding: .25rem .5rem;

    font-size: 1.5rem;

    color: #F9FCFF;
    opacity: .5;

    animation: seta .9s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite alternate;

    img {
      max-height: 1.25rem;
    }
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 960px) {
  .intro {
    &::after {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .intro {
    .title {
      font-size: 1.75rem;
    }
    .text {
      font-size: 0.875rem;
    }
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (max-height: 37.5rem) {
  .intro {
    padding: 8rem 0;
  }
}
</style>
