<template>
  <div>
    <HeaderOne />

    <main>
      <slot></slot>
    </main>

    <Footer />
    <footer-eight/>
    <BackToTop/>
  </div>
</template>

<script>
import HeaderOne from "./headers/HeaderOne.vue";
import Footer from "./footers/FooterFour.vue";
import FooterEight from './footers/FooterEight.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    Footer,
    FooterEight,
    BackToTop,
  },
};
</script>
