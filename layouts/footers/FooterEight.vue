<template>
  <footer>
    <div class="footer__area">
      <div class="footer__bottom-9">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-6">
              <div class="footer__copyright-9">
                <p>
                  Copyright © {{ new Date().getFullYear() }} by
                  <nuxt-link href="/">Dot Global Tech</nuxt-link> All Rights Reserved.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="footer__social-9 text-sm-end">
                <social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from "~~/components/social/Social.vue";
export default {
  components: { Social },
};
</script>