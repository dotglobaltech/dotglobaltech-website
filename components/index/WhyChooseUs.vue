<template>
  <section class="counter__area counter__overlay-10 about__area wch-bg pb-100 pt-100 p-relative">
    <div class="container">
      <div class="counter__inner-10">
        <div class="counter__inner-10-shape include-bg" :style="{ backgroundImage: `url(${bg})` }">
        </div>
        <div class="row">
          <div v-for="(item, i) in counter_data" :key="i" class="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div class="counter__item-10 text-center mb-30" data-sal="slide-up" data-sal-delay="130"
              data-sal-duration="1000">
              <div class="counter__icon-7">
                <span>
                  <img class="counter__icon-7-shape" src="~/assets/img/counter/7/counter-icon-shape-1.png"
                    alt="counter__icon" />
                  <span v-html="item.icon"></span>
                </span>
              </div>
              <div class="counter__content-10">
                <h4><span class="counter">{{ item.num }}</span>{{ item.text }}</h4>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-80">
        <div class="row justify-content-center">
          <div class="col-xxl-10 col-xl-10 col-lg-10">
            <div class="section__title-wrapper-7 text-center mb-60"><span class="section__title-pre-7">Why Choose</span>
              <h3 class="section__title-7"><span class="section__title-7-highlight">Dot GlobalTech<svg width="240"
                    height="22" viewBox="0 0 240 22" fill="none">
                    <path class="wow" fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                      fill="currentColor"></path>
                  </svg></span></h3>
              <p>At Dot Global Technologies (DGT), we are a leading force in providing innovative IT solutions and
                services. With expertise spanning software development, IT infrastructure, cybersecurity, and more, we
                empower
                businesses to thrive in the digital age. Our commitment to excellence is reflected in our track record of
                successfully delivering over 100+ projects to satisfied clients worldwide.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <div class="about__features">
            <div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="130"
              data-sal-duration="1000">
              <div class="about__features-icon">
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M12.0037 23.7486C11.4037 23.7486 10.8137 23.6086 10.3337 23.3386L5.60367 20.6086C3.64367 19.2886 3.51367 19.0486 3.51367 16.9786V12.0186C3.51367 9.94859 3.64367 9.70859 5.56367 8.41859L10.3437 5.65859C11.2937 5.10859 12.7237 5.10859 13.6737 5.65859L18.4037 8.38859C20.3637 9.70859 20.4937 9.94859 20.4937 12.0186V16.9786C20.4937 19.0486 20.3637 19.2886 18.4437 20.5786L13.6637 23.3386C13.1937 23.6186 12.5937 23.7486 12.0037 23.7486ZM12.0037 6.74859C11.6637 6.74859 11.3237 6.81859 11.0837 6.95859L6.35367 9.68859C5.01367 10.5986 5.01367 10.5986 5.01367 12.0186V16.9786C5.01367 18.3986 5.01367 18.3986 6.40367 19.3386L11.0937 22.0386C11.5737 22.3186 12.4437 22.3186 12.9237 22.0386L17.6537 19.3086C18.9937 18.3986 18.9937 18.3986 18.9937 16.9786V12.0186C18.9937 10.5986 18.9937 10.5986 17.6037 9.65859L12.9137 6.95859C12.6837 6.81859 12.3437 6.74859 12.0037 6.74859Z"
                      fill="currentColor" />
                    <path
                      d="M17.502 9.37854C17.092 9.37854 16.752 9.03854 16.752 8.62854V5.99854C16.752 4.41854 16.082 3.74854 14.502 3.74854H9.50195C7.92195 3.74854 7.25195 4.41854 7.25195 5.99854V8.55854C7.25195 8.96853 6.91195 9.30854 6.50195 9.30854C6.09195 9.30854 5.75195 8.97854 5.75195 8.55854V5.99854C5.75195 3.57854 7.08195 2.24854 9.50195 2.24854H14.502C16.922 2.24854 18.252 3.57854 18.252 5.99854V8.62854C18.252 9.03854 17.912 9.37854 17.502 9.37854Z"
                      fill="currentColor" />
                    <path
                      d="M13.6302 18.6287C13.4202 18.6287 13.2002 18.5887 12.9802 18.4987L12.0002 18.1187L11.0202 18.5087C10.4902 18.7187 9.95024 18.6687 9.55024 18.3787C9.15024 18.0887 8.94024 17.5887 8.97024 17.0187L9.03024 15.9687L8.36024 15.1587C8.00024 14.7087 7.88024 14.1887 8.04024 13.7087C8.19024 13.2387 8.60024 12.8787 9.15024 12.7387L10.1702 12.4787L10.7402 11.5887C11.3502 10.6287 12.6602 10.6287 13.2702 11.5887L13.8402 12.4787L14.8602 12.7387C15.4102 12.8787 15.8202 13.2387 15.9702 13.7087C16.1202 14.1787 16.0002 14.7087 15.6402 15.1487L14.9702 15.9587L15.0302 17.0087C15.0602 17.5787 14.8502 18.0687 14.4502 18.3687C14.2102 18.5387 13.9302 18.6287 13.6302 18.6287ZM9.52024 14.1987L10.1902 15.0087C10.4202 15.2787 10.5502 15.7087 10.5302 16.0587L10.4702 17.1087L11.4502 16.7187C11.7802 16.5887 12.2202 16.5887 12.5502 16.7187L13.5302 17.1087L13.4702 16.0587C13.4502 15.7087 13.5802 15.2887 13.8102 15.0087L14.4802 14.1987L13.4602 13.9387C13.1202 13.8487 12.7602 13.5887 12.5702 13.2987L12.0102 12.4187L11.4402 13.2987C11.2502 13.5987 10.8902 13.8587 10.5502 13.9487L9.52024 14.1987Z"
                      fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div class="about__features-content">
                <h3 class="about__features-title">Agile</h3>
                <p>Dot Global Technologies takes pride in our agility, which goes beyond being just a buzzword. Our team
                  is committed to providing swift response times and adaptable strategies to meet your evolving needs.
                  With our agile methodology, we can pivot quickly and deliver results with unparalleled speed and
                  efficiency. Our flexibility ensures that you stay ahead in today's dynamic business landscape.</p>
              </div>
            </div>
            <div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="150"
              data-sal-duration="1000">
              <div class="about__features-icon yellow-color">
                <span>
                  <svg class="center-icon" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M5.00195 15.9985V8.99854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M5.25195 22.9985C7.04688 22.9985 8.50195 21.5435 8.50195 19.7485C8.50195 17.9536 7.04688 16.4985 5.25195 16.4985C3.45703 16.4985 2.00195 17.9536 2.00195 19.7485C2.00195 21.5435 3.45703 22.9985 5.25195 22.9985Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M5.00195 8.99854C6.65881 8.99854 8.00195 7.65539 8.00195 5.99854C8.00195 4.34168 6.65881 2.99854 5.00195 2.99854C3.3451 2.99854 2.00195 4.34168 2.00195 5.99854C2.00195 7.65539 3.3451 8.99854 5.00195 8.99854Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M19.002 8.99854C20.6588 8.99854 22.002 7.65539 22.002 5.99854C22.002 4.34168 20.6588 2.99854 19.002 2.99854C17.3451 2.99854 16.002 4.34168 16.002 5.99854C16.002 7.65539 17.3451 8.99854 19.002 8.99854Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M5.13086 15.9985C5.58086 14.2485 7.18086 12.9485 9.07086 12.9585L12.5009 12.9685C15.1209 12.9785 17.3509 11.2985 18.1709 8.9585"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
              <div class="about__features-content">
                <h3 class="about__features-title">Proficient</h3>
                <p>With Dot Global Technologies, you are choosing proficiency at every turn. Our team comprises skilled
                  professionals with vast experience and expertise in their respective domains. From software development
                  to cybersecurity, our proficient experts bring a wealth of knowledge to ensure flawless project
                  execution. With us, rest assured that your business is in capable hands.</p>
              </div>
            </div>
            <div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="170"
              data-sal-duration="1000">
              <div class="about__features-icon purple-color">
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M9.10159 14.5344C9.10159 14.1202 8.76581 13.7844 8.35159 13.7844H4.64392C3.89249 13.7844 3.7619 13.5515 3.76116 13.5498C3.75967 13.5466 3.67207 13.2926 4.16481 12.7241L13.246 2.40728C13.2461 2.4072 13.2461 2.40712 13.2462 2.40705C13.5405 2.07296 13.7834 1.89024 13.9556 1.80534C14.0536 1.757 14.1081 1.74921 14.1301 1.74876C14.1462 1.76358 14.1814 1.80495 14.2224 1.90432C14.2954 2.08082 14.357 2.37782 14.357 2.82342V11.4627C14.357 11.8769 14.6928 12.2127 15.107 12.2127H18.8147C19.5715 12.2127 19.7048 12.4482 19.706 12.4508C19.7069 12.4527 19.7955 12.7065 19.2971 13.2692L19.2956 13.2709L10.2126 23.5898C9.91817 23.924 9.67521 24.1068 9.50303 24.1917C9.40502 24.2401 9.35053 24.2479 9.32853 24.2483C9.31242 24.2335 9.27723 24.1921 9.23617 24.0927C9.16324 23.9162 9.10159 23.6192 9.10159 23.1736V14.5344ZM14.1417 1.74959C14.1417 1.74969 14.1404 1.74959 14.1378 1.74894C14.1405 1.74916 14.1418 1.74948 14.1417 1.74959ZM14.1242 1.7438C14.1218 1.74257 14.1206 1.74173 14.1207 1.74162C14.1207 1.74151 14.1219 1.74212 14.1242 1.7438ZM9.31688 24.2475C9.31692 24.2474 9.31826 24.2475 9.32079 24.2481C9.3181 24.2479 9.31683 24.2476 9.31688 24.2475ZM9.33442 24.2533C9.33685 24.2545 9.33796 24.2553 9.33791 24.2554C9.33785 24.2556 9.33664 24.2549 9.33442 24.2533Z"
                      stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
              <div class="about__features-content">
                <h3 class="about__features-title">Scalable</h3>
                <p>Scalability is at the core of our solutions at Dot Global Technologies. The solutions we offer are
                  designed to evolve with your business as we understand how much your business changes. Whether you're a
                  start-up looking to expand or an established enterprise seeking to optimize operations, our scalable
                  solutions can be customized to meet your specific requirements. With us, you'll have the flexibility to
                  scale up or down as needed without ever compromising on performance.</p>
              </div>
            </div>
            <div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="170"
              data-sal-duration="1000">
              <div class="about__features-icon purple-color">
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M9.10159 14.5344C9.10159 14.1202 8.76581 13.7844 8.35159 13.7844H4.64392C3.89249 13.7844 3.7619 13.5515 3.76116 13.5498C3.75967 13.5466 3.67207 13.2926 4.16481 12.7241L13.246 2.40728C13.2461 2.4072 13.2461 2.40712 13.2462 2.40705C13.5405 2.07296 13.7834 1.89024 13.9556 1.80534C14.0536 1.757 14.1081 1.74921 14.1301 1.74876C14.1462 1.76358 14.1814 1.80495 14.2224 1.90432C14.2954 2.08082 14.357 2.37782 14.357 2.82342V11.4627C14.357 11.8769 14.6928 12.2127 15.107 12.2127H18.8147C19.5715 12.2127 19.7048 12.4482 19.706 12.4508C19.7069 12.4527 19.7955 12.7065 19.2971 13.2692L19.2956 13.2709L10.2126 23.5898C9.91817 23.924 9.67521 24.1068 9.50303 24.1917C9.40502 24.2401 9.35053 24.2479 9.32853 24.2483C9.31242 24.2335 9.27723 24.1921 9.23617 24.0927C9.16324 23.9162 9.10159 23.6192 9.10159 23.1736V14.5344ZM14.1417 1.74959C14.1417 1.74969 14.1404 1.74959 14.1378 1.74894C14.1405 1.74916 14.1418 1.74948 14.1417 1.74959ZM14.1242 1.7438C14.1218 1.74257 14.1206 1.74173 14.1207 1.74162C14.1207 1.74151 14.1219 1.74212 14.1242 1.7438ZM9.31688 24.2475C9.31692 24.2474 9.31826 24.2475 9.32079 24.2481C9.3181 24.2479 9.31683 24.2476 9.31688 24.2475ZM9.33442 24.2533C9.33685 24.2545 9.33796 24.2553 9.33791 24.2554C9.33785 24.2556 9.33664 24.2549 9.33442 24.2533Z"
                      stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
              <div class="about__features-content">
                <h3 class="about__features-title">Cost-Effective</h3>
                <p>At Dot Global Technologies, we believe in delivering top-notch IT solutions without breaking the bank.
                  Our cost-effective options are designed to accommodate businesses of all sizes. With transparent pricing
                  and no hidden costs, you'll know exactly what you're getting. Access cutting-edge technology and expert
                  support without exceeding your budget constraints, ensuring you achieve your business objectives
                  affordably.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="about__video-wrapper" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="about__video-counter d-sm-flex align-items-center">
              <div class="about__video-counter-item d-flex align-items-center">
                <h4><span>16</span></h4>
                <p>Years <br> Experinces</p>
              </div>
              <div class="about__video-counter-item d-flex align-items-center">
                <h4><span>250</span></h4>
                <p>Types of <br> Courses</p>
              </div>
            </div>

            <div class="about__video-thumb">
              <img src="~/assets/img/about/6/about-1.jpg" alt="">
              <div class="about__play">
                <a @click.prevent="handleVideoPopup" href="#" class="about__play-btn popup-video tp-pulse-border">
                  <span class="video-play-bg"></span>
                  <img src="~/assets/img/about/6/about-play-icon.png" alt="">
                </a>
              </div>
            </div>

            <div class="about__section-wrapper-6 pt-50">
              <div class="section__title-wrapper-6 mb-50">
                <h3 class="section__title-6">
                  Let's Start a
                  <span class="section__title-6-highlight"> New Project</span>
                  Together
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.
                </p>
                <div class="cta__btn-2 text-lg-center"><a aria-current="page" href="/"
                    class="router-link-active router-link-exact-active tp-btn btn-cta bg-btn lnk"> Request A Quote<i
                      class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- video modal start -->
  <video-modal ref="video_modal" video-url="https://www.youtube.com/embed/z4dQmpf5PLM" />
  <!-- video modal end -->
</template>

<script>
import VideoModal from "../common/modals/VideoModal.vue";
import bg from '~/assets/img/counter/10/counter-shape-1.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
  data() {
    return {
      bg,
      counter_data: [
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M31.4834 57.9998H7.90788C4.65995 57.9998 2 55.3959 2 52.2039V10.6528C2 3.31695 7.45989 -0.0149813 14.1518 3.26095L26.5835 9.36483C29.2714 10.6808 31.4834 14.1807 31.4834 17.1487V57.9998Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M57.9989 38.5684V49.1522C57.9989 55.2001 55.1989 58 49.151 58H31.4834V25.5767L32.7994 25.8567L45.3991 28.6846L51.083 29.9446C54.7789 30.7566 57.8029 32.6605 57.9709 38.0364C57.9989 38.2044 57.9989 38.3724 57.9989 38.5684Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.4" d="M11.8838 21.6003H21.5996" stroke="#2CAE76" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.4" d="M11.8838 32.8H21.5996" stroke="#2CAE76" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M45.3995 28.6841V37.7C45.3995 41.1719 42.5716 43.9998 39.0997 43.9998C35.6277 43.9998 32.7998 41.1719 32.7998 37.7V25.8562L45.3995 28.6841Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M57.9712 38.0361C57.8032 41.3401 55.0592 44 51.6993 44C48.2274 44 45.3994 41.1721 45.3994 37.7001V28.6843L51.0833 29.9443C54.7792 30.7563 57.8032 32.6602 57.9712 38.0361Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
          delay: ".3s",
          num: 98,
          text: "%",
          title: "Project Delivered",
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                      d="M32.6488 2.65255L50.9203 12.504C53.0534 13.6547 53.0534 16.9385 50.9203 18.0893L32.6488 27.9407C31.021 28.8108 29.1124 28.8108 27.4846 27.9407L9.21309 18.0893C7.08001 16.9385 7.08001 13.6547 9.21309 12.504L27.4846 2.65255C29.1124 1.78248 31.021 1.78248 32.6488 2.65255Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M6.51875 24.7414L23.4991 33.2456C25.6042 34.3121 26.9514 36.4733 26.9514 38.8309V54.8851C26.9514 57.2146 24.5095 58.7022 22.4326 57.6637L5.45221 49.1594C3.34721 48.0929 2 45.9318 2 43.5742V27.52C2 25.1904 4.44181 23.7029 6.51875 24.7414Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M53.6142 24.7414L36.6339 33.2456C34.5288 34.3121 33.1816 36.4733 33.1816 38.8309V54.8851C33.1816 57.2146 35.6235 58.7022 37.7004 57.6637L54.6808 49.1594C56.7858 48.0929 58.133 45.9318 58.133 43.5742V27.52C58.133 25.1904 55.6912 23.7029 53.6142 24.7414Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,
          delay: ".5s",
          num: 10,
          text: "M+",
          title: "On Time Delivery",
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M46.7886 16.4463C46.6206 16.4183 46.4246 16.4183 46.2567 16.4463C42.3931 16.3063 39.3135 13.1427 39.3135 9.22315C39.3135 5.21963 42.5331 2 46.5366 2C50.5401 2 53.7598 5.24762 53.7598 9.22315C53.7318 13.1427 50.6521 16.3063 46.7886 16.4463Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M43.9033 36.8276C47.7389 37.4716 51.9664 36.7996 54.934 34.8119C58.8816 32.1802 58.8816 27.8687 54.934 25.237C51.9384 23.2493 47.6549 22.5773 43.8193 23.2492"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M13.1079 16.4463C13.2759 16.4183 13.4719 16.4183 13.6398 16.4463C17.5034 16.3063 20.583 13.1427 20.583 9.22315C20.583 5.21963 17.3634 2 13.3599 2C9.35634 2 6.13672 5.24762 6.13672 9.22315C6.16472 13.1427 9.24436 16.3063 13.1079 16.4463Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M15.9913 36.8276C12.1558 37.4716 7.9283 36.7996 4.96065 34.8119C1.01312 32.1802 1.01312 27.8687 4.96065 25.237C7.9563 23.2493 12.2398 22.5773 16.0753 23.2492"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.4"
                      d="M29.9966 37.3599C29.8286 37.3319 29.6326 37.3319 29.4647 37.3599C25.6011 37.2199 22.5215 34.0563 22.5215 30.1367C22.5215 26.1332 25.7411 22.9136 29.7446 22.9136C33.7482 22.9136 36.9678 26.1612 36.9678 30.1367C36.9398 34.0563 33.8601 37.2479 29.9966 37.3599Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.4"
                      d="M21.8503 46.1784C17.9028 48.8101 17.9028 53.1215 21.8503 55.7532C26.3298 58.7489 33.6649 58.7489 38.1444 55.7532C42.0919 53.1215 42.0919 48.8101 38.1444 46.1784C33.6929 43.2107 26.3298 43.2107 21.8503 46.1784Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
          delay: ".7s",
          num: 16,
          text: "M+",
          title: "Satisfaction Rate",
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M46.7716 25.3073V46.0628C46.7716 52.6694 41.4127 58 34.8344 58H13.9372C7.35899 58 2 52.641 2 46.0628V25.3073C2 18.7008 7.35899 13.3701 13.9372 13.3701H34.8344C41.4127 13.3701 46.7716 18.7291 46.7716 25.3073Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.34" d="M11.9238 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path opacity="0.34" d="M23.2656 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path opacity="0.34" d="M34.6074 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M58.7087 32.9345C58.7087 39.5128 53.3497 44.8717 46.7715 44.8717V20.9973C53.3497 20.9973 58.7087 26.3279 58.7087 32.9345Z"
                      stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.34" d="M2 29.6455H45.9777" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round" />
              </svg>`,
          delay: ".7s",
          num: 380,
          text: "+",
          title: "Happy Clients",
        },
      ]
    }
  }
}
</script>