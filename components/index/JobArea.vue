<template>
  <section class="servivces__area pt-30">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div v-for="item in services_data" :key="item.id" class="col-xxl-1 col-lg-1 col-md-1">
          <div class="services__item-4 mb-30 transition-3 fix">
            <div class="services__thumb-4 include-bg transition-3" 
            :style="{ backgroundImage: `url(${item.bg})` }">
            </div>
            <div class="services__icon-4 mb-30 transition-3">
              <span v-html="item.icon"></span>
            </div>
            <div class="services__content-4 transition-3">
              <h4 class="services__title-4">
                <nuxt-link href="/">{{ item.title }}</nuxt-link>
              </h4>
              <!-- <p>{{ item.subtitle }}</p> -->

            </div>
            <nuxt-link href="/" class="services-link-btn"> <i
                class="fa-regular fa-arrow-right"></i>
              </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// bg images lawyer
import bg_law_1 from '~/assets/img/services/4/services-1.jpg';
import bg_law_2 from '~/assets/img/services/4/services-2.jpg';
import bg_law_3 from '~/assets/img/services/4/services-3.jpg';
import bg_law_4 from '~/assets/img/services/4/services-4.jpg';
import bg_law_5 from '~/assets/img/services/4/services-5.jpg';
import bg_law_6 from '~/assets/img/services/4/services-6.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      services_data: [
        {
          id: 1,
          delay: '130',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
          title: 'Staffing',
          subtitle: '',
        },
        {
          id: 2,
          delay: '150',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'AI/ML',
          subtitle: '',
        },
        {
          id: 3,
          delay: '170',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'AR',
          subtitle: '',
        },
        {
          id: 4,
          delay: '190',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'VR',
          subtitle: '',
        },
        {
          id: 5,
          delay: '210',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'Metaverse',
          subtitle: '',
        },
        {
          id: 6,
          delay: '230',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'IoT',
          subtitle: '',
        },
        {
          id: 7,
          delay: '170',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'BigData',
          subtitle: '',
        },
        {
          id: 8,
          delay: '190',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'Web',
          subtitle: '',
        },
        {
          id: 9,
          delay: '210',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'Blockchain',
          subtitle: '',
        },
        {
          id: 10,
          delay: '230',
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
                title: 'RPA',
          subtitle: '',
        }
      ]
    }
  }
}
</script>

