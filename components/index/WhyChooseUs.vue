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
                  <img width="35" height="35" src="~/assets/img/home/agile.svg" alt="img">
 
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
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M143 431.5a62.5 62.5 0 1 1 35.54-113.89 7.5 7.5 0 1 1-8.549 12.326 47.512 47.512 0 1 0 13.452 14.177 7.5 7.5 0 0 1 12.76-7.886A62.481 62.481 0 0 1 143 431.5zm0-30a32.5 32.5 0 1 1 32.5-32.5 32.537 32.537 0 0 1-32.5 32.5zm0-50a17.5 17.5 0 1 0 17.5 17.5 17.52 17.52 0 0 0-17.5-17.5z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><path d="M461.5 370a7.5 7.5 0 0 0-7.5 7.5v37.666a12.514 12.514 0 0 1-12.5 12.5H245.573a17.7 17.7 0 0 0-2.655-4.318l-11.074-13.287q1.661-3.577 3.026-7.275l17.214-1.565A17.417 17.417 0 0 0 268 383.793v-29.587a17.417 17.417 0 0 0-15.915-17.428l-17.215-1.565q-1.362-3.69-3.026-7.275l11.074-13.289a17.415 17.415 0 0 0-1.069-23.576l-20.921-20.921a17.415 17.415 0 0 0-23.578-1.07l-13.288 11.075q-3.579-1.662-7.275-3.027l-1.565-17.214A17.416 17.416 0 0 0 157.794 244h-29.588a17.414 17.414 0 0 0-17.427 15.915l-1.566 17.215q-3.688 1.362-7.275 3.027L88.65 269.082a17.417 17.417 0 0 0-23.578 1.07l-20.921 20.921a17.416 17.416 0 0 0-1.069 23.577l11.074 13.288q-1.66 3.579-3.026 7.275l-17.215 1.565A17.417 17.417 0 0 0 18 354.206v29.587a17.417 17.417 0 0 0 15.915 17.429l17.215 1.565q1.362 3.69 3.026 7.275L43.082 423.35a17.418 17.418 0 0 0 1.069 23.578l20.921 20.92a17.418 17.418 0 0 0 23.578 1.07l13.288-11.075q3.579 1.662 7.275 3.027l1.565 17.214A17.415 17.415 0 0 0 128.206 494h29.588a17.413 17.413 0 0 0 17.427-15.915l1.566-17.215q3.689-1.362 7.275-3.027l13.289 11.075a17.414 17.414 0 0 0 23.577-1.07l20.921-20.92a17.657 17.657 0 0 0 3.134-4.261H441.5a27.532 27.532 0 0 0 27.5-27.5V377.5a7.5 7.5 0 0 0-7.5-7.5zm-230.258 66.32-20.922 20.922a2.488 2.488 0 0 1-3.367.152l-17.043-14.2a7.5 7.5 0 0 0-8.311-.866 82.207 82.207 0 0 1-14.062 5.851 7.5 7.5 0 0 0-5.247 6.484l-2.008 22.067a2.486 2.486 0 0 1-2.488 2.27h-29.588a2.487 2.487 0 0 1-2.489-2.274l-2.007-22.066a7.5 7.5 0 0 0-5.247-6.484 82.207 82.207 0 0 1-14.062-5.851 7.5 7.5 0 0 0-8.311.866l-17.042 14.2a2.487 2.487 0 0 1-3.368-.152l-20.921-20.918a2.487 2.487 0 0 1-.154-3.368l14.2-17.043a7.5 7.5 0 0 0 .866-8.312 82.077 82.077 0 0 1-5.851-14.061 7.5 7.5 0 0 0-6.483-5.247l-22.068-2.007a2.488 2.488 0 0 1-2.269-2.49v-29.587a2.487 2.487 0 0 1 2.274-2.489l22.067-2.007a7.5 7.5 0 0 0 6.483-5.247 82.107 82.107 0 0 1 5.851-14.063 7.5 7.5 0 0 0-.866-8.311l-14.2-17.043a2.487 2.487 0 0 1 .154-3.368l20.917-20.92a2.488 2.488 0 0 1 3.367-.152l17.043 14.2a7.5 7.5 0 0 0 8.311.867 82.075 82.075 0 0 1 14.062-5.85 7.5 7.5 0 0 0 5.247-6.484l2.008-22.068a2.486 2.486 0 0 1 2.488-2.271h29.588a2.487 2.487 0 0 1 2.489 2.274l2.007 22.067a7.5 7.5 0 0 0 5.247 6.484 82.075 82.075 0 0 1 14.062 5.85 7.5 7.5 0 0 0 8.311-.867l17.043-14.2a2.486 2.486 0 0 1 3.367.152l20.921 20.921a2.487 2.487 0 0 1 .154 3.368l-14.2 17.043a7.5 7.5 0 0 0-.866 8.311 82.107 82.107 0 0 1 5.851 14.062 7.5 7.5 0 0 0 6.483 5.247l22.067 2.007a2.487 2.487 0 0 1 2.27 2.487v29.587a2.488 2.488 0 0 1-2.274 2.49l-22.067 2.007a7.5 7.5 0 0 0-6.483 5.247 82.077 82.077 0 0 1-5.851 14.061 7.5 7.5 0 0 0 .866 8.312l14.2 17.042a2.489 2.489 0 0 1-.149 3.369zM294.41 186.88v13.5h-22.5a12.514 12.514 0 0 0-12.5 12.5v42a12.515 12.515 0 0 0 12.5 12.5h130a12.514 12.514 0 0 0 12.5-12.5v-121a12.514 12.514 0 0 0-12.5-12.5h-25a12.514 12.514 0 0 0-12.5 12.5v13.5h-22.5a12.514 12.514 0 0 0-12.5 12.5v14.5h-22.5a12.514 12.514 0 0 0-12.5 12.5zm0 65.5h-20v-37h20zm85-97.5v-18.5h20v116h-20zm-35 27v-19.5h20v90h-20zm-35 26v-18.5h20v63h-20z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><circle cx="411.264" cy="74.169" r="7.5" fill="#2cae76" opacity="1" data-original="#000000" class=""></circle><circle cx="332.264" cy="74.169" r="7.5" fill="#2cae76" opacity="1" data-original="#000000" class=""></circle><circle cx="253.264" cy="74.169" r="7.5" fill="#2cae76" opacity="1" data-original="#000000" class=""></circle><circle cx="174.264" cy="74.169" r="7.5" fill="#2cae76" opacity="1" data-original="#000000" class=""></circle><path d="M115.534 187.668a7.5 7.5 0 0 0 7.5 7.5h110a7.5 7.5 0 0 0 0-15h-110a7.5 7.5 0 0 0-7.5 7.5zM163.755 214.169a7.5 7.5 0 0 0 0 15h39.134a7.5 7.5 0 0 0 0-15zM123.034 229.169h17.5a7.5 7.5 0 0 0 0-15h-17.5a7.5 7.5 0 0 0 0 15zM143.534 153.664a7.5 7.5 0 0 0 7.5 7.5h82a7.5 7.5 0 0 0 0-15h-82a7.5 7.5 0 0 0-7.5 7.5z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><circle cx="130.534" cy="153.669" r="7.5" fill="#2cae76" opacity="1" data-original="#000000" class=""></circle><circle cx="225.534" cy="221.669" r="7.5" fill="#2cae76" opacity="1" data-original="#000000" class=""></circle><path d="M404.41 347.5a7.5 7.5 0 0 0-7.5-7.5h-110a7.5 7.5 0 0 0 0 15h110a7.5 7.5 0 0 0 7.5-7.5zM327.632 374a7.5 7.5 0 0 0 0 15h39.133a7.5 7.5 0 0 0 0-15zM286.91 374a7.5 7.5 0 0 0 0 15h17.5a7.5 7.5 0 0 0 0-15zM396.91 306h-82a7.5 7.5 0 0 0 0 15h82a7.5 7.5 0 0 0 0-15zM294.41 321a7.5 7.5 0 1 0-7.5-7.5 7.5 7.5 0 0 0 7.5 7.5zM381.91 381.5a7.5 7.5 0 1 0 7.5-7.5 7.5 7.5 0 0 0-7.5 7.5z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><path d="M461.5 18a32.55 32.55 0 0 0-30.637 21.668h-284.03a7.5 7.5 0 0 0-5.3 2.2l-70 70a7.5 7.5 0 0 0-2.2 5.3v133.381a7.5 7.5 0 0 0 15 0V124.668h42.5a27.531 27.531 0 0 0 27.5-27.5v-42.5H429v252.118a7.51 7.51 0 0 0 .7 3.165l20.468 43.975a12.5 12.5 0 0 0 22.665 0l20.467-43.975a7.51 7.51 0 0 0 .7-3.165V50.5A32.536 32.536 0 0 0 461.5 18zm-334.667 91.668H94.939l44.394-44.393v31.893a12.514 12.514 0 0 1-12.5 12.5zM479 305.126l-17.5 37.6-17.5-37.6V108h35zM479 93h-35V78h35zm0-30h-35V50.5a17.5 17.5 0 0 1 35 0z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path></g></svg>`,
          delay: ".3s",
          num: 98,
          text: "%",
          title: "Project Delivered",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m25.626 56.392-1.4 1.4c-.638.594-.15 1.738.706 1.708a.996.996 0 0 0 .707-.293l3-2.999c.386-.371.386-1.045 0-1.417l-3-2.998c-.927-.92-2.335.484-1.414 1.414l1.156 1.156C-4.494 50.19-2.377 7.543 27.933 6.5c13.233 0 24 10.766 24 24a1 1 0 1 0 2 0c0-14.337-11.664-26-26-26-33.108 1.168-35.03 47.88-2.307 51.892z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><path d="m30.225 26.793-1.956 1.955-2.418-5.642c-.54-1.199-2.335-.429-1.838.788l3 7c.254.637 1.153.813 1.626.313l3-3c.92-.929-.484-2.335-1.414-1.414z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><path d="M56.932 34.5H47.53c2.614-12.18-7.118-24.143-19.598-24-11.028 0-20 8.972-20 20-.221 13.254 13.45 23.264 26 19.063V53.5c0 2.757 2.244 5 5 5h18c2.757 0 5-2.243 5-5v-14c0-2.757-2.243-5-5-5zm-23 12.95c-11.373 4.29-24.224-4.776-24-16.95 0-9.926 8.076-18 18-18 11.376-.145 20.217 10.955 17.542 22h-2.05c2.698-9.911-5.2-20.145-15.492-20-8.822 0-16 7.177-16 16-.217 11.113 11.8 19.182 22 14.826zm0-7.95v3.626a13.822 13.822 0 0 1-5 1.314v-.94a1 1 0 1 0-2 0v.95c-6.92-.494-12.456-6.029-12.949-12.95h.95a1 1 0 1 0 0-2h-.95c.493-6.922 6.028-12.457 12.95-12.95v.95a1 1 0 1 0 2 0v-.95c6.92.493 12.456 6.028 12.949 12.95h-.95a1 1 0 1 0 0 2h.958a13.785 13.785 0 0 1-.554 3h-2.404c-2.756 0-5 2.243-5 5zm26 14c0 1.654-1.345 3-3 3h-18c-1.654 0-3-1.346-3-3v-14c0-1.655 1.346-3 3-3h18c1.655 0 3 1.345 3 3z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path><path d="m51.061 40.879-4.879 4.879-1.379-1.38c-2.866-2.723-6.967 1.373-4.242 4.243l3.5 3.5c1.117 1.163 3.126 1.164 4.242 0l7-7c2.723-2.867-1.37-6.968-4.242-4.242zm2.828 2.828-7 7a1.025 1.025 0 0 1-1.414 0l-3.5-3.5a1.001 1.001 0 0 1 0-1.414c.39-.39 1.024-.39 1.414 0l2.086 2.086a1 1 0 0 0 1.414 0l5.586-5.586c.925-.92 2.336.483 1.414 1.414z" fill="#2cae76" opacity="1" data-original="#000000" class=""></path></g></svg>`,
          delay: ".5s",
          num: 10,
          text: "M+",
          title: "On Time Delivery",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m150.59 68.671 27.276 21.923-9.18 33.768c-1.192 4.383.412 8.941 4.087 11.611a10.81 10.81 0 0 0 6.366 2.087c2.056 0 4.117-.594 5.939-1.788l29.279-19.166 29.279 19.166c3.8 2.488 8.631 2.37 12.306-.3s5.279-7.228 4.088-11.611l-9.181-33.768 27.276-21.923c3.541-2.846 4.921-7.476 3.518-11.796s-5.242-7.255-9.779-7.476l-34.953-1.704-12.422-32.714c-1.609-4.24-5.585-6.979-10.13-6.979h-.001c-4.545 0-8.522 2.74-10.132 6.98l-12.421 32.715-34.953 1.704c-4.537.221-8.375 3.155-9.779 7.476-1.404 4.319-.024 8.949 3.517 11.795zm45.365-5.159a10.835 10.835 0 0 0 9.608-6.979l8.794-23.163 8.793 23.161a10.833 10.833 0 0 0 9.605 6.98l24.748 1.206-19.31 15.523a10.838 10.838 0 0 0-3.67 11.292l6.5 23.909-20.729-13.569a10.827 10.827 0 0 0-11.872 0l-20.73 13.57 6.5-23.908a10.835 10.835 0 0 0-3.668-11.291l-19.312-15.522zM82.328 167.887l29.278 19.166c3.801 2.488 8.631 2.372 12.306-.299 3.675-2.67 5.28-7.227 4.088-11.611l-9.181-33.769 27.276-21.923c3.54-2.846 4.92-7.476 3.517-11.796-1.404-4.32-5.243-7.254-9.779-7.475l-34.953-1.704L92.46 65.76c-1.609-4.239-5.585-6.979-10.13-6.979h-.001c-4.545 0-8.522 2.74-10.132 6.98L59.775 98.477l-34.953 1.704c-4.537.221-8.375 3.155-9.779 7.476s-.023 8.951 3.518 11.796l27.275 21.923-9.18 33.768c-1.192 4.383.412 8.94 4.087 11.611a10.807 10.807 0 0 0 6.366 2.087c2.056 0 4.117-.594 5.939-1.788zm-43.146-52.388 24.748-1.207a10.833 10.833 0 0 0 9.604-6.978l8.794-23.163 8.795 23.164a10.835 10.835 0 0 0 9.604 6.977l24.748 1.207-19.311 15.521c-3.36 2.7-4.8 7.132-3.669 11.291l6.5 23.908-20.731-13.571a10.83 10.83 0 0 0-11.87.001l-20.73 13.57 6.5-23.908a10.835 10.835 0 0 0-3.668-11.291zm239.92-7.844c-1.404 4.32-.023 8.951 3.517 11.797l27.276 21.923-9.18 33.768c-1.192 4.383.412 8.94 4.087 11.611a10.807 10.807 0 0 0 6.366 2.087c2.056 0 4.117-.594 5.94-1.788l29.278-19.167 29.278 19.166c3.8 2.488 8.63 2.371 12.305-.298s5.281-7.227 4.09-11.612l-9.181-33.768 27.276-21.923c3.541-2.846 4.92-7.476 3.517-11.796-1.404-4.32-5.242-7.254-9.778-7.475l-34.953-1.704-12.421-32.714c-1.609-4.241-5.586-6.981-10.132-6.981s-8.523 2.74-10.132 6.979l-12.422 32.716-34.952 1.704c-4.536.221-8.375 3.155-9.779 7.475zm48.886 6.638a10.831 10.831 0 0 0 9.604-6.978l8.794-23.164 8.794 23.161a10.833 10.833 0 0 0 9.605 6.98l24.747 1.207-19.312 15.522a10.835 10.835 0 0 0-3.668 11.29l6.5 23.908-20.731-13.571a10.836 10.836 0 0 0-11.871.001l-20.729 13.57 6.5-23.908a10.837 10.837 0 0 0-3.668-11.291l-19.312-15.522zm74.337 199.361c-29.944 0-56.697 13.905-74.156 35.592-20.279-19.767-45.301-33.821-72.377-40.963 26.755-14.692 44.934-43.138 44.934-75.756 0-47.623-38.745-86.367-86.368-86.367s-86.368 38.744-86.368 86.367c0 32.594 18.153 61.021 44.876 75.722a162.585 162.585 0 0 0-67.794 36.712c-29.778 26.929-48.52 63.652-52.773 103.402a7.998 7.998 0 0 0 7.954 8.851l260.148-.001c16.591 27.983 47.1 46.786 81.923 46.786 52.479 0 95.173-42.694 95.173-95.173s-42.693-95.172-95.172-95.172zm-258.334-81.127c0-38.801 31.567-70.367 70.368-70.367s70.368 31.566 70.368 70.367c0 38.797-31.56 70.361-70.355 70.367h-.026c-38.795-.007-70.355-31.571-70.355-70.367zM69.424 441.215c11.814-70.33 72.612-122.314 144.922-122.32h.025c39.335.003 77.156 15.927 104.698 43.867-7.587 13.658-11.917 29.365-11.917 46.066a94.746 94.746 0 0 0 5.677 32.387zM402.325 488c-43.656 0-79.173-35.517-79.173-79.173s35.517-79.173 79.173-79.173 79.173 35.517 79.173 79.173S445.981 488 402.325 488zm54.836-120.023c-3.967-3.944-9.254-6.096-14.828-6.084a20.734 20.734 0 0 0-14.754 6.184l-36.73 37.098-13.794-13.794c-8.161-8.159-21.438-8.16-29.6.001-8.159 8.16-8.159 21.438 0 29.6l28.649 28.648c4.08 4.08 9.439 6.119 14.799 6.119 5.359 0 10.719-2.04 14.799-6.12 10.874-10.873 21.841-21.997 32.446-32.755 6.364-6.455 12.729-12.91 19.109-19.35 8.107-8.18 8.063-21.435-.096-29.547zm-11.269 18.285c-6.39 6.449-12.763 12.914-19.137 19.379-10.586 10.737-21.533 21.841-32.366 32.674a4.936 4.936 0 0 1-6.972 0l-28.648-28.647a4.937 4.937 0 0 1 0-6.973c.961-.961 2.224-1.441 3.486-1.441s2.525.48 3.486 1.441l19.478 19.479a8 8 0 0 0 5.657 2.343h.02a7.999 7.999 0 0 0 5.665-2.371l42.387-42.811a4.842 4.842 0 0 1 3.446-1.442c1.324-.049 2.552.501 3.484 1.429 1.915 1.903 1.921 5.017.014 6.94z" fill="#2cae76" opacity="1" data-original="#000000"></path></g></svg>`,
          delay: ".7s",
          num: 16,
          text: "M+",
          title: "Satisfaction Rate",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#2cae76" opacity="1" data-original="#000000"></path></clipPath></defs><path d="M0 0v-39.2l43.88-33.04L87.761-39.2V0" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 334.598 348.548)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0h-15.061c-11.541 0-20.897-9.355-20.897-20.897v-15.659c0-11.541 9.356-20.897 20.897-20.897H0z" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(219.578 380.248)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h15.062c11.541 0 20.897-9.355 20.897-20.897v-15.659c0-11.541-9.356-20.897-20.897-20.897H0z" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(370.076 380.248)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-9.844" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(327.21 352.902)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-9.844" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(262.594 352.902)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0c0-10.388-8.421-18.81-18.81-18.81-10.387 0-18.808 8.422-18.808 18.81" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(313.638 302.276)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-19.9h-112.49c-16.57 0-30 13.429-30 30v64.25c0 16.57 13.43 30 30 30h50.91C-27.569 104.35 0 76.779 0 42.77V32.689" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(398.49 400.15)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h34.512c16.568 0 30 13.432 30 30v63.19H45c-24.853 0-45-20.147-45-45z" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(191.488 380.248)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-77.1h-295.091V.521l-53.22-64.3a30.004 30.004 0 0 0-24.96-13.361h-.54c-16.57 0-30 13.43-30 30v32.13h31.601c8.279 0 15 6.71 15 15v16.061l56.89 73.849a30.046 30.046 0 0 0 13.259 9.8l72.371 27.05 43.849-33.04 43.851 33.04 98.019-30.88C-11.7 90.24 0 74.141 0 55.95V32.69" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(465.67 84.64)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-107.05" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(403.547 114.552)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h32.125c8.284 0 15 6.716 15 15v63.188c0 8.284-6.716 15-15 15H0c-8.284 0-15-6.716-15-15V15C-15 6.716-8.284 0 0 0Z" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(61.33 69.626)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h-31.062" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(108.455 131.751)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h-31.062" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(108.455 100.689)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-17.39" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(100.689 71.484)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v31.062" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(170.58 85.158)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h31.062v33.044c0 8.577-6.954 15.531-15.531 15.531C6.953 48.575 0 41.621 0 33.044Z" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(69.626 162.814)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h136.261v62.421H-96.71V0h64.03" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(267.29 38.56)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="m0 0 15.531-15.531 31.063 31.062" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(69.627 318.48)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0h-63.188c-8.284 0-15 6.716-15 15v94.958c0 8.285 6.716 15 15 15H0c8.284 0 15-6.715 15-15V62.479l31.062-31.417H15V15C15 6.716 8.284 0 0 0Z" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(124.518 256)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path><path d="M0 0v-71.55c0-38.389 31.12-69.51 69.511-69.51H80.99c38.391 0 69.51 31.121 69.51 69.51V0" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(219.578 380.248)" fill="none" stroke="#2cae76" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" opacity="1" class=""></path></g></g></svg>`,
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